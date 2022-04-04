import Link from 'next/link'
import MainContent from '../../components/MainContent'
import Image from 'next/image'
export default function Home( {posts} ){



  return(
    <div>
        <div className='bg-page_news bg-center bg-cover bg-no-repeat pt-24 '>
            <div className='pt-32 lg:pb-10 px-8'>
                <h1 className='text-3xl lg:text-7xl'>News</h1>
            </div>
        </div>
        <MainContent>

            <div>
                {
                    posts.nodes.map(post => {
                    return(
                        <article className=' mb-12 max-w-4xl' key={post.slug}>

                                {post.featuredImage &&

                                    <Link href={`/news/${post.slug}`}>
                                        <a className='block relative w-full h-[240px] lg:h-[620px]'>
                                            <Image
                                            className='hover:scale-105 transition-all'
                                            alt={post.slug}
                                            src={post.featuredImage.node.sourceUrl}
                                            layout='fill'
                                            objectFit='contain'
                                            />
                                        </a>
                                    </Link>

                                }

                            <div className='mb-2'>
                            {post.categories.nodes.map(category =>{
                                  return(
                                    <span className='text-gray' key={category.id}>
                                           {category.name}
                                    </span>
                                  )
                                })
                              }
                            </div>


                            <Link href={`/news/${post.slug}`}>
                                <a><h2 className='text-2xl lg:text-4xl hover:text-primary'>{post.title}</h2></a>
                            </Link>
                            <div className='text-gray font-light flex items-center mt-2'>
                                {formatDate(post.date)}
                                <span className='h-5 inline-block border-r border-r-gray mx-4'></span>
                                <span>{post.author.node.name}</span>
                            </div>
                            <div className='mt-8 text-gray lg:text-xl font-light tracking-wide' dangerouslySetInnerHTML={{__html: post.excerpt}}></div>


                        </article>
                    )
                    })
                }
            </div>
        </MainContent>

    </div>
  )

}

export async function getStaticProps(){

  const res = await fetch(`https://staging.disruptivenews.io/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query HomePageQuery {
            posts {
              nodes {
                slug
                title
                date
                excerpt
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
          }
          `,
      })
  })

  const json = await res.json()

  return {
    props: {
        posts: json.data.posts,
    },
  }

}



function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}