import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return(
      <div className=' bg-body -mt-14  z-0  w-full  h-screen '>

       <div className="relative  h-full w-full">
            <div className="absolute  w-screen flex items-center justify-center  gap-4 place-content-center   h-full top-auto bottom-auto">
                <Image
                className="animate-spin speed-slow"
                placeholder="blurDataURL"
                src="/light-mobile.png"
                height={500}
                width={500}
                />
            </div>

            <div className="absolute  w-screen hidden md:flex items-center justify-center  gap-4 place-content-center   h-full   bottom-auto">
                <Image
                className="animate-spin speed-fast "
                placeholder="blurDataURL"
                src="/light-desktop.png"
                height={1130}
                width={1130}
                />
            </div>
        </div>

        <div className="absolute -top-14 flex flex-col w-full h-full justify-center tracking-[.3em] text-xs items-center font-title_bold font-bold">
            <Link href="/"><a className="my-4 hover:text-primary hover:scale-105 transition-all">PAYMENTS</a></Link>
            <Link href="/"><a className="my-4 hover:text-primary hover:scale-105 transition-all">TRADING BOTS</a></Link>
            <Link href="/"><a className="my-4 hover:text-primary hover:scale-105 transition-all">METAVERSE</a></Link>
            <Link href="/"><a className="my-4 hover:text-primary hover:scale-105 transition-all">TRADERS CITY</a></Link>
        </div>


    </div>
    )
};
