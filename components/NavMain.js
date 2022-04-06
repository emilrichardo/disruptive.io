import Link from "next/link";
import { useRouter } from 'next/router'


export default function Test({className,itemClassName,MenuToggleSwitch}) {

const router = useRouter();
const { locale } = router;

const mainMenuItems = [
    {id:0 ,label:"Whitepaper", link : "/whitepaper" },
    {id:1 ,label:"Tokenomics", link : "/tokenomics" },
    {id:2 ,label:`${locale =='en' ? "News" : "Noticias"}`, link : "https://staging.disruptivenews.io/",target:"blank" },
    {id:3 ,label:"Roadmap", link : "/roadmap" },
]


    return(
        <nav  className={`${className} font-title_bold flex flex-col lg:flex-row  "`}>
            {mainMenuItems.map((item)=>(
                <>
                {item.target == "blank"
                ?
                <a  key={"external" + item.id} href={item.link} target="_blank" rel="noreferrer"  onClick={MenuToggleSwitch}  className={`${router.asPath == item.link && " text-primary-light " + " "} ${itemClassName} my-4 hover:text-primary inline-block hover:scale-105 transition-all duration-200`}>{item.label}</a>
                :
                <Link  key={item.id} href={item.link} ><a onClick={MenuToggleSwitch}  className={`${router.asPath == item.link && " text-primary-light " + " "} ${itemClassName} my-4 hover:text-primary inline-block hover:scale-105 transition-all duration-200`}>{item.label}</a></Link>

                }
                </>
            ))}
        </nav>
    )
};
