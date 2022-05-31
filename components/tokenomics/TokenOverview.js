import { TokenProvider } from "../../context/tokenContext"
import { useRouter } from 'next/router';

import PointScored from "./PointScored"
import Image from "next/image"
export default function TokenOverview() {

    const router = useRouter();
    const { locale } = router;
    return(
        <section className="bg-cover bg-no-repeat bg-top lg:h-screen">
             <div className="text-center  max-w-3xl mx-auto">
                <Image
                className=" inline-block"
                src="/planeta_abajo.png"
                width={908}
                height={160}
                quality={100}
                />

             </div>

             <TokenProvider>
                <PointScored
                locale={locale}
                />
             </TokenProvider>


         </section>
    )
};
