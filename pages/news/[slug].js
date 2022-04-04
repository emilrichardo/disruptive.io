import Image from 'next/image'
import MainContent from '../../components/MainContent';

export default function Post( data ){

    const post = data.post;






    return (
        <div>
          <MainContent>
          {post.featuredImage &&
                <div className='relative w-full h-screen'>
                    <Image

                    alt={post.slug}
                    src={post.featuredImage.node.sourceUrl}
                    /* width={780} height={506} */
                    layout='fill'
                    objectFit='contain'
                    placeholder='blur'
                    blurDataURL={post.featuredImage.node.sourceUrl}

                    />
                </div>
            }

            <h1 className=' text-2xl'>{post.title}</h1>
            <article dangerouslySetInnerHTML={{__html: post.content}}></article>
          </MainContent>
        </div>
    )

}

export async function getStaticProps(context) {

    const res = await fetch(`https://staging.disruptivenews.io/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        slug
                        content
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            `,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    const json = await res.json()

    return {
        props: {
            post: json.data.post,
        },
    }

}

export async function getStaticPaths() {

    const res = await fetch(`https://staging.disruptivenews.io/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
                        title
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        `})
    })

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }

}