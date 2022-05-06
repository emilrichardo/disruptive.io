import Link from "next/link";
import { useRouter } from 'next/router'


export default function Test({className,itemClassName,MenuToggleSwitch}) {

const router = useRouter();
const { locale } = router;

const newLink = locale == "en" ? "https://disruptivenews.io/" : "https://disruptivenews.io/es/"

const mainMenuItems = [
    {id:0 ,label:`${locale =='en' ? "Whitepaper" : " Libro Blanco"}`, link : "/whitepaper" },
    {id:1 ,label:`${locale =='en' ? "Tokenomics" : " Economía"}` , link : "/tokenomics" },
    {id:2 ,label:`${locale =='en' ? "Our team" : " Nuestro equipo"}` , link : "/team" },
    {id:3 ,label:`${locale =='en' ? "News" : "Noticias"}`, link : newLink,target:"blank" },
    {id:4 ,label:`${locale =='en' ? "Roadmap" : " Mapa de Ruta"}`, link : "/roadmap" },
]


    return(
        <nav  className={`${className} font-title_bold flex flex-col lg:flex-row  "`}>
            {mainMenuItems.map((item)=>(
                <span key={item.id}>
                {item.target == "blank"
                ?
                <a   href={item.link} target="_blank" rel="noreferrer"  onClick={MenuToggleSwitch}  className={`${router.asPath == item.link && " text-primary-light " + " "} ${itemClassName} my-4 hover:text-primary inline-block hover:scale-105 transition-all duration-200`}>{item.label}</a>
                :
                <Link   href={item.link} ><a onClick={MenuToggleSwitch}  className={`${router.asPath == item.link && " text-primary-light " + " "} ${itemClassName} my-4 hover:text-primary inline-block hover:scale-105 transition-all duration-200`}>{item.label}</a></Link>

                }
                </span>
            ))}
        </nav>
    )
};
