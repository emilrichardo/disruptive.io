import Head from "next/head";
import AnimationPage from "../components/AnimationPage";
import MainContent from "../components/MainContent";
import en from "../public/locales/en/roadMap";
import es from "../public/locales/es/roadMap";


export  async function getStaticProps({ locale }){
    return{
      props:{
        locale,
      }
    }
  }



export default function RoadMap({locale}) {
    const {allMilestones,title,excerpt} = locale === 'en' ? en : es;
    return(
        <>
        <AnimationPage>


         <Head>
            <title>Roadmap {" - " + process.env.projectName}</title>

        </Head>
        <div className="h-full flex flex-col lg:flex-row justify-center">
            <div className="lg:min-h-screen bg-dark-black bg-astronauta bg-center lg:bg-bottom bg-no-repeat bg-cover w-full lg:flex lg:justify-end  lg:max-w-[40%]">
                <div className=" w-full lg:max-w-xl  lg:min-h-screen pt-32 pb-14 px-8 lg:px-24">
                    <h1 className=" text-4xl lg:text-6xl">{title}</h1>
                    <p className="text-gray mt-14">{excerpt}</p>
                </div>

            </div>

            <div className="w-full lg:max-w-[60%] bg-lines">
                <div className="  w-full lg:max-w-4xl min-h-screen pt-4 lg:pt-52">
                    <MainContent>

                        <ul>
                            {allMilestones.map((item,i)=>(
                                <li key={i} className="mb-16">
                                    <h4 className={`${ item.accomplished == "true" && "text-primary"} text-3xl font-title_bold mb-4 `}>{item.yeard}</h4>
                                    <ul className=" text-gray text-xl font-thin">
                                        {item.milestones.map((milestone, i)=>(
                                            <li key={i}>
                                                <div className={` ${ milestone.accomplished == "true" && "border-primary border-2 text-light"} my-1 inline-flex items-center px-4 py-2 rounded-full    `}>
                                                    {  milestone.accomplished == "true"
                                                    ? <svg className="mr-7" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5L7.5 14L20.5 1" stroke="#5D5FEF" strokeWidth="2"/>
                                                        </svg>

                                                    : <span className="w-7 h-7 block mr-7 bg-dark-light rounded-full"></span>
                                                    }
                                                    {milestone.title}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                </li>
                            ))}
                        </ul>
                    </MainContent>
                </div>

            </div>




        </div>
        </AnimationPage>
        </>

    )
};
