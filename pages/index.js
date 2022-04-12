
import Head from "next/head";
import Image from "next/image";




export  async function getStaticProps({ locale }){
  return{
    props:{
      locale,
    }
  }
}



export default function Home({locale}) {


  return (
    <>

      <Head>
        <title>Home  {" - " + process.env.projectName}</title>
      </Head>
      <div className="bg-commingsoon bg-no-repeat bg-cover bg-dark-black  bg-center  h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row justify-between items-center px-8 text-center lg:text-left">
          <Image
          src="/astronauta__2.png"
          width={508}
          height={720}
          />
          <div>
            <h2 className="text-4xl lg:text-7xl max-w-2xl font-title_bold">CHANGING THE WAY YOU SEE <br/>THE FUTURE </h2>
            <h4 className="text-3xl lg:text-5xl uppercase font-title_bold mt-8 ">Coming Soon!</h4>

          </div>

        </div>



      </div>



   </>
  )
}
