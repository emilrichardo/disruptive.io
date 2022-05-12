import Link from "next/link";
import MainContent from "../components/MainContent";
import en from "../public/locales/en/whitePaper";
import es from "../public/locales/es/whitePaper";
import { useState, useEffect } from "react";
import Head from "next/head";
import AnimationPage from "../components/AnimationPage";



export  async function getStaticProps({ locale }){
    return{
      props:{
        locale,
      }
    }
  }


export default function WhitePaper({locale,data}) {

     //scroll

     const [scrolled, setScrolled] = useState(false);
     const [endScroller, setEndScroller] = useState(false)
     // change state on scroll
     useEffect(() => {
       const handleScroll = () => {
         const isScrolled = window.scrollY > 200;

         if (isScrolled !== scrolled ) {
           setScrolled(!scrolled);
         }
         if(window.scrollY > 5200){
            setScrolled(false);
         }
         console.log(isScrolled)

       };




       document.addEventListener("scroll", handleScroll, { passive: true });

       return () => {
         // clean up the event handler when the component unmounts
         document.removeEventListener("scroll", handleScroll);
       };
     }, [scrolled]);





    const {whitePaperData} =  locale === 'en' ? en : es;
    return(

             <div className="h-full flex flex-col xl:flex-row">
                <Head>
                <title>Whitepaper {" - " + process.env.projectName}</title>
                </Head>

                <div className="xl:min-h-screen bg-dark-black  w-full flex justify-end   xl:max-w-[35%]">
                    <div className=" bg-dark-black w-full xl:max-w-xl  xl:min-h-screen pt-32 pb-14 px-8 xl:px-24 ">
                        <h1 className=" text-4xl xl:text-6xl">{locale ==  "en" ? "Whitepaper": "Libro Blanco" } </h1>
                        <h4 className="text-xl mt-8 xl:text-4xl opacity-60">{locale ==  "en" ? "March": "Marzo" } 2022</h4>

                        <div className={`${scrolled  &&  " xl:fixed xl:max-w-[20%] top-20" } mt-24 transition-all`}>
                            <div className={`${scrolled && "  xl:max-w-sm "} `}>
                            {whitePaperData.map((itemWp,i)=>(
                                <div key={i + "-itemWp-"+itemWp.slug}>
                                    <Link href={"#" + itemWp.slug}>
                                        <a className="hover:text-primary transition-all  duration-700">
                                            <h2 className=" text-md   2xl:text-2xl 2xl:mb-8 font-title_bold"> <span className="mr-3 text-primary">{(i + 1 ) / 10}</span>{itemWp.title}</h2>
                                        </a>
                                    </Link>

                                    <ul className="text-gray xl:text-lg pb-4 pl-4 2xl:leading-10">
                                        {itemWp.sections.map((subItem,i) =>(
                                            <Link href={"#" + subItem.slug} key={"link-" +subItem.slug}>
                                            <a className="hover:text-primary transition-all  duration-700">
                                                <li className="mb-2 leading-7" key={subItem + i}>
                                                    {subItem.title}
                                                    </li>
                                                </a>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>

                                ))}





                            </div>

                        </div>




                    </div>
                </div>
                <div className="w-full xl:max-w-[65%] bg-lines">
                    <div className=" w-full max-w-5xl   min-h-screen pt-4 xl:pt-52  ">
                        <MainContent >
                        {whitePaperData.map((itemWp,i)=>(
                            <div className="mb-14 pt-14" key={i + itemWp.slug} id={itemWp.slug}>
                                <h2 className=" text-2xl xl:text-4xl mb-4 xl:mb-8 font-title_bold">
                                    <span className="mr-3 text-primary">{(i + 1 ) / 10}</span>{itemWp.title}
                                </h2>

                                <div className="text-gray leading-7 lg:text-xl lg:leading-8 font-light" dangerouslySetInnerHTML={{__html: itemWp.content}}/>
                                <section className="text-gray text-xl pb-4   leading-8">
                                    {itemWp.sections.map((subItem,i) =>(
                                        <div id={subItem.slug} className="mb-2 pt-12" key={"subItem"+ subItem.slug}>
                                            <h3 className=" leading-7 text-2xl text-light font-title_bold">{subItem.title}</h3>
                                            <div className="text-gray leading-7 lg:text-xl lg:leading-8 font-light" dangerouslySetInnerHTML={{__html: subItem.content}}></div>
                                        </div>
                                    ))}
                                </section>
                            </div>
                            ))}
                        </MainContent>
                    </div>
                </div>
            </div>



    )
};
