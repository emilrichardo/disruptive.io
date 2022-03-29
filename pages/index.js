import Image from "next/image";
import Link from "next/link";
import TokenWidget from "../components/tokenwidget/"

export default function Home() {
  return (
    <div className='bg-body  h-screen'>
      <div className="absolute -z-10 w-screen flex items-center justify-center  gap-4 place-content-center   h-full top-auto bottom-auto">
        <Image
        className="animate-spin"
        src="/light-mobile.png"
        height={448}
        width={504}
        />
      </div>


      <div className="flex flex-col h-full justify-center tracking-[.3em] text-xs items-center font-title_bold font-bold">
        <Link href="/"><a className="my-4 hover:text-primary hover:scale-105 transition-all">PAYMENTS</a></Link>
        <Link href="/"><a className="my-4 hover:text-primary hover:scale-105 transition-all">TRADING BOTS</a></Link>
        <Link href="/"><a className="my-4 hover:text-primary hover:scale-105 transition-all">METAVERSE</a></Link>
        <Link href="/"><a className="my-4 hover:text-primary hover:scale-105 transition-all">TRADERS CITY</a></Link>
      </div>
      <div className="absolute bottom-0 px-8 py-8">
        <TokenWidget
          contract="0xd70a9D1c9fDd3D8DD2fb672bB399F7bcA61666bD"
          linkBsc="https://bscscan.com/token/0xd70a9D1c9fDd3D8DD2fb672bB399F7bcA61666bD"
        />
      </div>



    </div>
  )
}
