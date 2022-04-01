import MainContent from "../../components/MainContent";

import { useRouter } from "next/router";

  const Details = ({data}) => {
    const router = useRouter();

    console.log(data)
    return (
      <>
      <MainContent>
        {/* {post.title.rendered} */}
        Post
      </MainContent>

      </>
    );
  }

  export default Details;

  // This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.restApi}/wp-json/wp/v2/posts` )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
