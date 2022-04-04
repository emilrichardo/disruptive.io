import Link from "next/link";


export default function news({posts}) {


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



    return(
        <div className="py-24 max-w-4xl mx-auto">

           <h1 className="text-5xl">News</h1>
          {posts.map((post,i) => (
                <div className="my-16" key={`id-${post.id}`}>
                  <Link href={"/news/" + post.slug}><a> <h3 className=" text-primary-light text-2xl lg:text-4xl ">{post.title.rendered}</h3></a></Link>
                  <h4 className="text-sm text-gray">{formatDate(post.date)}</h4>
                  <div className="text-lg mt-8"  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                </div>
            )) }



        </div>
    )
};


export async function getServerSideProps() {
  const results = await fetch(`${process.env.restApi}/wp-json/wp/v2/posts`).then(r=>r.json())

  return{
      props:{
          posts: results
      }
  }
}