
import Head from "next/head";
import AnimationPage from "../components/AnimationPage";

import Hero from "../components/Hero";
import Logo from "../components/Logo";
import MainContent from "../components/MainContent";
import TokenWidget from "../components/tokenwidget/";
import { TokenProvider } from "../context/tokenContext";


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
    <AnimationPage>
      <Head>
        <title>Home  {" - " + process.env.projectName}</title>
      </Head>
      <div className="bg-astro bg-dark-black  bg-contain bg-left h-screen flex items-center justify-center">
        <div className="text-center">
          <Logo className="w-20 inline-block mb-4"/>
          <h2 className="text-4xl lg:text-6xl max-w-2xl">CHANGING THE WAY YOU SEE THE FUTURE </h2>
          <h4 className="text-2xl font-title_bold mt-8 text-primary-light">Coming Soon!</h4>
        </div>



      </div>


      </AnimationPage>
   </>
  )
}
