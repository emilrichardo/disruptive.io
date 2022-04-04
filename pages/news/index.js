import Link from 'next/link'
import MainContent from '../../components/MainContent'

export default function Home( {posts} ){
console.log(posts)
  return(
    <div>
        <div className='bg-page_news bg-center bg-cover bg-no-repeat pt-24 '>
            <div className='pt-32 lg:pb-10 px-8'>
                <h1 className='text-3xl lg:text-7xl'>News</h1>
            </div>
        </div>
        <MainContent>
            <h1>Hello From The Home Page!</h1>
            <ul>
                {
                    posts.nodes.map(post => {
                    return(
                        <li className='text-xl lg:text-4xl my-8' key={post.slug}>
                            <Link href={`/news/${post.slug}`}>{post.title}</Link>
                            {formatDate(post.date)}
                        </li>
                    )
                    })
                }
            </ul>
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
                categories {
                    nodes {
                        name
                        slug
                        uri
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