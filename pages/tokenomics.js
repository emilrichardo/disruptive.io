import Button from "../components/buttons";
import MainContent from "../components/MainContent";
import Image from "next/image";
export  async function getStaticProps({ locale }){
    return{
      props:{
        locale,
      }
    }
  }

export default function Tokenomics({locale}) {

    return(
        <>
        <MainContent>
        <div className=" flex flex-col lg:flex-row items-center justify-between lg:py-[15vh]">
            <div className="lg:w-1/2 lg:order-2">
                <Image
                src="/bg-logo3d.jpg"
                width={534}
                height={523}
                quality={100}
                />
            </div>
            <div className="py-8">
                <h1 className=" text-3xl lg:text-6xl font-light">Tokenomics</h1>
                <div className=" h-[7px] w-16 bg-primary rounded-full my-8"></div>
                {locale == 'en'
                ?
                <>
                    <p className=" max-w-lg leading-8 tracking-wide   text-2xl text-gray font-light mb-8"> <span className="text-primary font-medium">DISR</span>  aims to create a high impact on current and future holders of DISR by creating a strategy of burning used coins in our system as follows:</p>
                    <Button variant="primary" size="sm">READ MORE</Button>
                </>
                :
                <>
                    <p className=" max-w-lg leading-8 tracking-wide   text-2xl text-gray font-light mb-8">El objetivo de <span className="text-primary font-medium">DISR</span>  es crear una forma innovadora de alto impacto, capaz de recompensar a los titulares actuales y futuros de DISR, mediante la creación de una estrategia de quema de monedas usadas en nuestro sistema tal y como se detalla a continuación:</p>
                    <Button variant="primary" size="sm">Leer más</Button>
                </>
                }

            </div>


         </div>

         <section>



             <div className="py-16 grid grid-cols-1 lg:grid-cols-2 relative">
                 <div className="absolute left-1/3 top-36  w-1/3 hidden lg:block">
                     <div className="
                     relative  mx-16  h-[1px] border-b-[1px] border-b-light border-dashed opacity-20
                     after:absolute after:border-[1px] after:block after:rounded-full after:border-light after:w-5 after:h-5 after:-top-2 after:-left-8
                     before:absolute before:border-[1px] before:block before:rounded-full before:border-light before:w-5 before:h-5 before:-top-2 before:-right-8
                     "
                     >

                     </div>
                 </div>
                <MoonItem
                icon=""
                subHeading={locale == 'en'? "Cost per transaction in DISR." : "Costo por transacción en DISR."}
                heading={locale == 'en' ? "100 DISR or up to 0.50 BUSD" : "100 DISR o hasta 0,50 BUSD"}
                text={locale == 'en' ? "value per forward address": "por dirección de reenvío"}
                />
                <MoonItem
                icon=""
                subHeading={locale == 'en' ?"Mass payment": "Pago masivo"}
                heading={locale == 'en' ? "100 DISR or up to 0.50 BUSD": "  100 DISR o hasta 0,50 BUSD"}
                text={locale == 'en' ? "value per forward address": "por dirección de envío"}
                />
             </div>






             <div className="text-center">
                <Image
                className=" inline-block"
                src="/bg-moon-top.jpg"
                width={911}
                height={294}
                quality={100}
                />

             </div>



         </section>



        </MainContent>

        <section className="bg-dark-black py-[10vh] lg:py-14">
            <MainContent className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
                 <div>
                    {locale == 'en'
                    ?
                    <h3 className="text-2xl lg:text-5xl mb-8"><span className="text-primary">DISR </span> is distributed as follows</h3>
                    :
                    <h3 className="text-2xl lg:text-5xl mb-8">Cada <span className="text-primary">DISR </span> se distribuye de la siguiente manera:</h3>
                    }

                    {locale == 'en'
                    ?
                    <p className="text-gray mb-8 max-w-lg">DISR has created a long-term plan to stabilize its assets and enable holders to get more services and benefits for less. For this reason, an innovative way of rewarding DISR holders has been developed.
                    </p>
                    :
                    <p className="text-gray mb-8 max-w-lg">DISR ha creado un plan a largo plazo para estabilizar su activo y permitir a los titulares obtener más servicios y beneficios por menos. Por esta razón, se ha desarrollado una forma innovadora de recompensar a los titulares de DISR.</p>
                    }



                     <ul className="lg:text-2xl font-thin">
                         <li> <div className=" rounded-full h-3 w-3 bg-primary-light inline-block mr-3"></div> <span className="text-primary font-bold"> 20%</span>{locale == 'en' ? "Burned": "Quemado"} </li>
                         <li><div className=" rounded-full h-3 w-3 bg-[#57DED6] inline-block mr-3"></div> <span className="text-primary font-bold"> 25%</span> {locale == 'en' ? "Pagado en estacas a los titulares": "Pagado en estacas a los titulares"}</li>
                         <li><div className=" rounded-full h-3 w-3 bg-primary inline-block mr-3"></div> <span className="text-primary font-bold"> 50%</span>{locale == 'en' ? "Used for operations": "Utilizado para operaciones"} </li>
                     </ul>
                 </div>
                 <div className="text-center">
                     <Image
                     className="inline-block"
                     src="/bg-chart.jpg"
                     width={761}
                     height={622}
                     />
                 </div>

             </MainContent>
         </section>
         <div className="text-center">
                <Image
                className=" inline-block"
                src="/bg-moon-bottom.jpg"
                width={908}
                height={160}
                quality={100}
                />

             </div>
             <div className="my-24 text-center mb-8">
                 <MainContent className="min-h-0">
                     <h4 className="text-4xl lg:text-6xl">{locale == 'en' ? "Points scored": "Puntos conseguidos"}</h4>
                     <h5 className="text-primary text-2xl lg:text-4xl font-title_bold my-4">99,000,000</h5>
                     <p className="text-gray text-sm">{locale == 'en' ? "Total Supply": " Suministro total:"}</p>
                 </MainContent>

             </div>
             <div>
             <MainContent className="py-24">
                 <div className=" grid grid-cols-1 lg:grid-cols-2">
                 <Image
                    className=" inline-block"
                    src="/bg-chart-02.svg"
                    width={536}
                    height={500}
                    quality={100}
                    />
                    <div>
                        <ul className="grid grid-cols-1 lg:grid-cols-2">
                            <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#727E84] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-2xl font-title_bold">15,000,000</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Founders": "Fundadores"}</p>
                                </div>
                            </li>
                            <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#8F8FB2] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-2xl font-title_bold">77,634,442</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Pancake Swap Supply": "Oferta de intercambio en PancakeSwap"}</p>
                                </div>
                            </li>
                            <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#606380] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-4xl font-title_bold">44,589,963</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Revolving Treasury Funds": "Fondos rotatorios del Tesoro"}</p>
                                </div>
                            </li>
                            <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#6E7DA3] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-2xl font-title_bold">12,000,000</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Community": "Comunidad"}</p>
                                </div>
                            </li>
                            <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#58516B] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-2xl font-title_bold">1,170,000</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Processing paid costs": "Gastos de trámites pagados"}</p>
                                </div>
                            </li>
                            <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#8EA7FF] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-2xl font-title_bold">12,167,111</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Initial investors": "Inversores iniciales"}</p>
                                </div>
                            </li>
                            <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#DCB3EF] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-2xl font-title_bold">7,000,000</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Circulating": "En circulación"}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                 </div>

                </MainContent>
             </div>

        </>
    )
};


export  function MoonItem({icon,subHeading,heading,text}) {
    return(
        <div>
            <div className="text-left lg:text-center my-8 flex lg:flex-col items-center">
                <div className=" bg-gray-dark rounded-3xl h-20 w-20 lg:w-28 lg:h-28 mr-4 lg:mr-0 lg:mb-8">
                    {icon}
                </div>
                <div className="inline-block w-2/3">
                    <h4 className=" text-md font-medium">{subHeading}</h4>
                    <h2 className=" text-xl lg:text-3xl font-title_bold lg:mt-4"> {heading}</h2>
                    <p className=" text-gray text-sm lg:mt-4">{text}</p>
                </div>
            </div>
        </div>
    )
};
