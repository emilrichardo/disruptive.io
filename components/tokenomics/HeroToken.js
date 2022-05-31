import { useRouter } from 'next/router';
import MainContent from '../MainContent';
import Button from '../buttons';


export default function HeroToken( { children } ) {
    const router = useRouter();
    const { locale } = router;
    return(
        <div className=" bg-dark-dark">

            <div className=" bg-ring bg-no-repeat  bg-right-top lg:bg-right-bottom   bg-[length:220px_220px] lg:bg-contain h-screen flex">
            <MainContent className="w-full pt-0">
                <div className=" flex flex-col lg:flex-row items-center mt-[20vh] lg:justify-between lg:py-[15vh] h-full">

                    <div className="lg:w-1/2 lg:order-2 relative">


                    </div>
                    <div className="py-8">
                        <h1 className=" text-3xl lg:text-6xl font-light">{locale =='en' ? "Tokenomics" : " Economía"}</h1>
                        <div className=" h-[7px] w-16 bg-primary rounded-full my-8"></div>
                        <p className=" max-w-xl leding-4 lg:leading-8 tracking-wide  text-lg lg:text-2xl text-gray font-thin mb-8">
                        {locale == 'en'
                        ? "Combining the crypto market with the traditional market has been our biggest achievement.  DISR Protocol aims to benefit clients, holders and users with the economic plan it has developed."
                        : "Combinar el mercado tradicional con el mercado cripto ha sido nuestro mayor logro. Protocolo DISR tiene la meta de beneficiar clientes, portadores y usuarios a través del plan estratégico que ha sido desarrollado."
                        }

                        </p>


                        {children}
                        <Button className="px-10 lg:hidden" variant="primary" size="sm"><a href='#utility'>{locale =='en' ? "Read more" : " Leer más"}</a></Button>






                    </div>


                </div>
            </MainContent>
            </div>



        </div>
    )
};
