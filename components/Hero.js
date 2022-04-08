import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
    return(
      <div className=' bg-body  -mt-14  z-0  w-full  h-screen '>

       <div className="relative  h-full w-full">
            <div className="absolute  w-full flex items-center justify-center  gap-4 place-content-center   h-full top-auto bottom-auto">
                <Image
                className="animate-spin speed-slow"
                placeholder="blurDataURL"
                src="/light-mobile.png"
                height={500}
                width={500}
                />
            </div>

            <div className="absolute  w-full hidden md:flex items-center justify-center  gap-4 place-content-center   h-full   bottom-auto">
                <Image
                className="animate-spin speed-fast "
                placeholder="blurDataURL"
                src="/light-desktop.png"
                height={1130}
                width={1130}
                />
            </div>
        </div>

        <div>

            <div className="absolute    lg:-ml-10 -top-14 flex flex-col w-full h-full justify-center tracking-[.3em] text-xs items-center font-title_bold font-bold">
                <div className="flex peer flex-col lg:justify-center items-center transition-all lg:scale-50 lg:hover:scale-105 z-10 hover:z-20 lg:opacity-0 lg:hover:opacity-100" >
                        <Link href="/"><a className="my-4 hover:text-primary hover:scale-125 transition-all">PAYMENTS</a></Link>
                        <Link href="/"><a className="my-4 hover:text-primary hover:scale-125 transition-all">TRADING BOTS</a></Link>
                        <Link href="/"><a className="my-4 hover:text-primary hover:scale-125 transition-all">METAVERSE</a></Link>
                        <Link href="/"><a className="my-4 hover:text-primary hover:scale-125 transition-all">TRADERS CITY</a></Link>
                </div>
                <div className=" peer-hover:hidden lg:flex items-center  z-0 justify-center w-full h-full absolute">
                <Logo className=" w-24 transition-all duration-700     " variant="gradient"/>
                </div>

            </div>



        </div>





    </div>
    )
};
