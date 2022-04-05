import MainContent from "../components/MainContent";


const RoadMapData = [
        {"yeard" : 2021,
        "accomplished" : "true",
        "milestones" : [
             {"title":"Token Launch" , "accomplished": "true"},
            {"title":"Exchange Enlisting" , "accomplished": "true"},
        ]},
        {"yeard" : 2022,
        "accomplished" : "false",
        "milestones" : [
            {"title":"Decentralized staking", "accomplished": "false"},
           {"title": "Crypto Processing (beta)", "accomplished": "false"},
            {"title":"Trading bots launch", "accomplished": "false"},
           {"title":"Mass payment processing ", "accomplished": "false"},
            {"title":"Website enlistings (coingeko, coinmarketcap)", "accomplished": "false"},
           {"title": "First Burn", "accomplished": "false"},
            {"title":"Metaverse Introduction", "accomplished": "false"},
        ]},
        {"yeard" : 2023,
        "accomplished" : "false",
        "milestones" : [
            {"title":"Metaverse public release", "accomplished": "false"},
        ]},
        {"yeard" : 2024,
        "accomplished" : "false",
        "milestones" : [
            {"title":"City of traders", "accomplished": "false"},
        ]},

    ]




export default function RoadMap() {
    return(
        <div className="h-full flex flex-col md:flex-row justify-center">
            <div className="lg:min-h-screen bg-dark-black bg-astro w-full  text-right lg:max-w-[35%]">
                <div className=" inline-block text-left w-full max-w-lg  lg:min-h-screen pt-32 pb-14 px-8 lg:px-24">
                    <h1 className=" text-4xl lg:text-6xl">Roadmap</h1>
                    <p className="text-gray mt-14">The road to success is traveled step by step and DISR is moving steadily forward. Join us and discover every detail of our growth, until we reach the top. You can be part of the journey! Get to know our roadmap.</p>
                </div>

            </div>

            <div className="w-full lg:max-w-[65%] bg-lines">
                <div className="  w-full max-w-4xl min-h-screen pt-4 lg:pt-52">
                    <MainContent>

                        <ul>
                            {RoadMapData.map((item,i)=>(
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
    )
};
