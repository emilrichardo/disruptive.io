import Image from 'next/image'
import MainContent from '../../components/MainContent';
import formatDate from '../../components/blog/Date';

export default function Post( data ){

    const post = data.post;
    console.log(post)

    return (
        <div>
          <div className='bg-post bg-center bg-cover bg-no-repeat pt-24 h-96 '>
          </div>
          <div className='  max-w-5xl'>
            <MainContent>
              <h1 className=' text-2xl lg:text-6xl font-title_bold'>{post.title}</h1>
              <div className='text-gray font-light flex items-center mt-2'>
                  {formatDate(post.date)}{post.date}
                  <span className='h-5 inline-block border-r border-r-gray mx-4'></span>
                  <span>{/* {post.author.node.name} */}</span>
              </div>

              {post.featuredImage &&
                  <div className='relative w-full h-96'>
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
              <article dangerouslySetInnerHTML={{__html: post.content}}></article>
            </MainContent>
          </div>

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
                        date
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                        categories {
                          nodes {
                              name
                              slug
                              uri
                              id
                          }
                      }
                      author {
                          node {
                            name
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