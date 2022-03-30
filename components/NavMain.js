import Link from "next/link";

const mainMenuItems = [
    {id:0 ,label:"Whitepaper", link : "/" },
    {id:1 ,label:"Tokenomics", link : "/" },
    {id:2 ,label:"News", link : "/" },
    {id:3 ,label:"Roadmap", link : "/" },
]
export default function NavMain({className,itemClassName}) {
    return(
        <nav className={`${className} font-title_bold flex flex-col lg:flex-row  "`}>
            {mainMenuItems.map((item)=>(
                <Link key={item.id} href={item.link}><a className={`${itemClassName} my-4 hover:text-primary inline-block hover:scale-105`}>{item.label}</a></Link>
            ))}
        </nav>
    )
};
