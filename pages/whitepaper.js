import Link from "next/link";
import MainContent from "../components/MainContent";

const whitePaperData = [
    {
        title: "Disclaimer",
        slug: "declaimer",
        content: "Este documento tiene el único objetivo de describir las características de DISR Coin.<br> Un token diseñado y desarrollado como una alternativa para acercar a los usuarios a la tecnología blockchain; la industria crypto y el sector de las finanzas descentralizadas o DeFi. <br> La información descrita en este documento no necesariamente es detallada, ni tiene la intención de establecer ninguna relación contractual. Únicamente se trata de un documento descriptivo, en el que se ilustra, con fines informativos, las características de un proyecto en el ámbito de las criptodivisas.<br> Cada una de las decisiones que asuma el usuario, así como el manejo que haga de las herramientas sugeridas, podrían implicar riesgos bajo su propia responsabilidad y DISR Coin no se hace responsable de estas acciones, ni las consecuencias que ellas puedan ocasionar. ",
        sections:[]
    },
    {
        title: "Introducción",
        slug: "introduccion",
        sections:[
            {
                title: "Un momento histórico",
                slug:"momento_historico",
                content:" En menos de dos décadas la tecnología blockchain, las finanzas descentralizadas (DeFi) y las criptodivisas se han consolidado como opciones reales para apostar por un nuevo modelo de negocio con mayores beneficios para todos los usuarios, a diferencia del sistema fiduciario.<br/> Si durante el año 2020 este mercado registró un aumento del 300 %, en el 2021 continúo fortaleciéndose y se espera que para este 2022 su crecimiento continúe atrayendo a nuevos usuarios que confían cada vez más en las diversas aplicaciones de los criptoactivos. <br/> Muestra de esto fue el alcalde de Nueva York, Eric Adams, quien se convirtió en noticia luego de asegurar durante su campaña que cobraría su primer salario en criptomonedas, y así lo hizo. Con ello, Adams respaldó su intención de convertir a Nueva York en uno de los centros del mercado crypto; así como de otras industrias tecnológicas de alto desarrollo.<br/> Y es que, gracias a las múltiples aplicaciones de esta tecnología, así como los beneficios que ofrece, DISR surge como una respuesta al interés de la gente por adentrarse en este mercado a través de un proyecto sólido y con un crecimiento cada vez mayor."
            },
            {
                title: "Desafíos no; oportunidades",
                slug:"desafio",
                content:"De acuerdo con la definición proporcionada por Coinbase, un “token” tiene un rango muy amplio de funciones potenciales: desde ayudar a permitir los intercambios descentralizados, hasta vender o coleccionar objetos extraños tanto en el gaming, como en los distintos Marketplace que han ido surgiendo.<br/> Además, los tokens pueden negociarse o mantenerse como cualquier otra criptodivisa. Y son estos rasgos, principalmente, los que hacen de los tokens, activos muy interesantes para los inversores, así como para diversos profesionales, celebridades o la población en general.<br/>  En la actualidad, la mayoría de los tokens operan sobre el protocolo de blockchain Ethereum (según los expertos, es mucho más completo que la blockchain de Bitcoin). No obstante, a muchas personas aún les produce temor o reserva el no entender del todo esta innovación tecnológica o el lenguaje técnico.<br/>Por esta razón, DISR ha creado un modelo de distribución que permite y alienta la participación de todos los miembros para formar una comunidad que debata, propongan y acuerde los cambios al interior del protocolo en lo general. "
            },
            {
                title: "Una experiencia distinta, para un mercado distinto:",
                slug:"una_experiencia",
                content:"DISR es un proyecto descentralizado. A través de sus características busca incentivar y recompensar la participación de los miembros de la comunidad desde el primer instante.<br/> El modelo de banca tradicional (o fiduciaria) se caracteriza por estar colmado de errores y sistemas carentes de efectividad. Mientras que los desarrollos, tal y como ocurre con DISR Coin, alientan una nueva forma de acercarse al mercado que está transformando el siglo XXI."
            }
        ]
    },
    {
        title: "DISR Coin, una propuesta diferente",
        slug: "disr_coin",
        sections:[
            {
                title:"Ventajas reales contra un sistema obsoleto",
                content:"Durante décadas, la banca tradicional ha ofrecido un modelo de operabilidad con evidentes puntos débiles.<br/> Los más llamativos; quizá, son el bajo rendimiento que ofrece a sus cuentahabientes y las altas comisiones por el manejo de cuenta. Dos hechos que han orillado a las personas a buscar nuevos modelos de negocio, inversión y administración que les permita tener un papel más activo a la hora de controlar sus recursos. <br/> <h4 className='font-title_bold'>Algunas otras desventajas de la banca comercial son:</h4> <ul><li>Tienen un horario de atención limitado.</li><li>Están inactivos algunos días del año.</li><li>Son lentos en las operaciones y transferencias.</li><li>Su sistema de seguridad es corruptible.</li></ul><br/>Bajo esa lógica, y como una propuesta de valor distinta a ese modelo obsoleto, DISR Coin brinda seguridad a los usuarios porque incluye los cuatro aspectos que integran el control de riesgo. <ul><li>Liquidez</li><li>Oráculo de proyección</li><li>Reserva de riesgo</li><li>Participación de la comunidad</li></ul><br/>Pero también les proporciona la oportunidad de conocer un proyecto con gran potencial de crecimiento, al formar parte de un ecosistema integral que les brinda la mejor experiencia en el mercado crypto.",

            },
            {
                title: "Tokenomics",
                slug:"tokenomics",
                content:"A diferencia del sistema fiduciario tradicional, DISR ha creado un plan a largo plazo para estabilizar su activo y permitir a los titulares obtener más servicios por menos decimales de sus tokens. <br/> Debido a esto, hemos creado una forma innovadora de recompensar a los titulares de DISR Coin y al mismo tiempo, disminuir el número de activos en el mercado para incrementar su valor.<br/><br/>  <h4>Cada DISR cobrado a nuestros clientes se dividirá de la siguiente manera:</h4><ul><li>20% Quemado</li><li>25% Pagado en Staking a los titulares</li><li>50% Destinado para las distintas operaciones</li></ul><br/><h4>Cifras totales:</h4> <ul><li>Total de clientes (todas las cuentas en la base de datos)</li><li>Total de direcciones generadas (todas las direcciones solicitadas con o sin pago)</li><li>Total payments (todas las direcciones que han recibido pagos)</li><li>Procesamiento de pagos</li><li>Total forwards (cantidad de forwards a clientes)</li><li>Total mass payments (cantidad de todos los mass payments solicitados)</li><li>Total de direcciones utilizadas para los pagos masivos (a cuantas direcciones se han destinado dichos pagos masivos)</li></ul><br/><h4>DISR Coin</h4><ul><li>Total DISR Coin depositado (total de monedas DISR depositadas al processing)</li><li>Total DISR Coin cobrado (total de monedas pagadas por forward)</li><li>Total de DISR Coin enviados para estacar (25% de todo lo que se ha depositado)</li><li>Total de DISR Coin enviados a tesorería (50% de todo lo que se ha depositado)</li><li>Total DISR Coin quemado (20% de todo lo que se ha depositado)</li></ul>",

            }
        ]
    },
    {
        title: "Futuro en el mercado",
        slug: "futuro",
        content:"La pandemia ha obligado a replantear el mundo tal y como lo conocíamos antes del año 2020. Desde entonces, las empresas de tecnología y desarrolladores software o entretenimiento (sólo por mencionar distintos ámbitos) han comenzado a buscar nuevas formas de acercarse con el público y los usuarios. <br/> Esto ha permitido que una compañía como META (antes Facebook); entre otras hayan comenzado a diseñar, desarrollar y ofertar tecnología inmersiva. Y trabajar muy en conjunto con la tecnología blockchain; así como las criptomonedas y las finanzas descentralizadas.  <br/> Un ejemplo claro de esto son los tokens de aficionado, en el ámbito deportivo.  <br/> Durante junio del año 2020, el club deportivo FC Barcelona, conocido a nivel mundial, lanzó su propio token y logró agotarlo en dos horas, que le significó ingresos por 1,2 milllones de euros.  <br/> Pero eso es sólo un ejemplo. Instagram, una de las mayores redes sociales utilizadas en todo el planeta, integrará dentro de muy poco una opción que los usuarios puedan mostrar y compartir sus NFT’s y la autenticidad de estos.  <br/> Todo esto, con el propósito de volver todos estos desarrollos tecnológicos mucho más “accesibles y próximos a los usuarios”, así lo detalló Adam Mosseri, CEO de Instagram.  <br/> <h4>Pero ¿cuál es la lectura que podemos hacer de todo esto?</h4>Con la desaparición de distintas formas de comercio de forma presencial, y la revolución tecnológica durante los últimos cinco años, la tecnología blockchain, las criptomonedas y las diversas aplicaciones de los tokens ya han generado 20 millones de dólares en ganancias.  <br/> Y los analistas aseguran que esto es solo el comiendo. ",
        sections:[]
    },
    {
        title: "Conclusión",
        slug: "conclusion",
        content: "Cada vez es más frecuente que las compañías, países y las instituciones de distinta índole lancen sus propias criptodivisas o tokens; sobre todo, con el interés y el objetivo de cumplir con distintas funciones en un sector o mercado en específico. <br/> Mientras prosigan las innovaciones tecnológicas en la industria de la tecnología blockchain, las criptomonedas y las finanzas descentralizadas (DeFi), cada vez más personas continuarán involucrándose en estos mercados. <br/> Las generaciones jóvenes; por ejemplo, apuestan cada vez más por nuevos modelos financieros donde las criptomonedas y los tokens surgen como las protagonistas más sólidas gracias a los diversos beneficios que brindan. <br/> En este contexto, Disruptive Coin es un proyecto que conoce las necesidades de su mercado. Gracias a su estructura, los cuatro aspectos que integran su control de riesgo, así como un suministro total que opera y se nutre de un ecosistema de participación integral, automáticamente se convierte en un proyecto con una oportunidad de crecimiento imparable. <br/> DISR Coin cuenta con la tecnología para llegar cada vez más lejos. Cada detalle de su diseño, producción y aplicaciones se ha cuidado desde el comienzo por un equipo de colaborades y profesionales expertos en su ámbito. Las bases se han construido. Ahora sólo resta continuar trabajando para brindarle al usuario no sólo un token más, sino toda una experiencia. <br/> La posibilidad de participar en la transformación del mundo, tal y como lo conocemos, para vivir en un mundo cada vez más inteligente. Un mundo DISR Coin. ",
        sections:[]
    }
]

export default function WhitePaper() {
    return(
        <div className="h-full flex flex-col lg:flex-row">
            <div className="lg:min-h-screen bg-dark-black  w-full flex justify-end   lg:max-w-[35%]">
                <div className=" bg-dark-black w-full lg:max-w-xl  lg:min-h-screen pt-32 pb-14 px-8 lg:px-24 ">
                    <h1 className=" text-4xl lg:text-6xl">Whitepaper</h1>
                    <h4 className="text-xl mt-8 lg:text-4xl opacity-60">Marzo 2022</h4>


                    <div className="mt-24">
                    {whitePaperData.map((itemWp,i)=>(
                        <div key={i + "-itemWp-"+itemWp.slug}>
                            <Link href={"#" + itemWp.slug}>
                                <a className="hover:text-primary">
                                    <h2 className=" text-lg lg:text-2xl lg:mb-8 font-title_bold"> <span className="mr-3 text-primary">{(i + 1 ) / 10}</span>{itemWp.title}</h2>
                                </a>
                            </Link>

                            <ul className="text-gray text-xl pb-4 pl-4 leading-10">
                                {itemWp.sections.map((subItem,i) =>(
                                    <Link href={"#" + subItem.slug} key={"link-" +subItem.slug}>
                                    <a className="hover:text-primary">
                                        <li className="mb-2 leading-7" key={subItem + i}>
                                            {subItem.title}
                                            </li>
                                        </a>
                                    </Link>
                                ))}
                            </ul>
                        </div>

                        ))}





                    </div>

                </div>
            </div>
            <div className="w-full lg:max-w-[65%] bg-lines">
                <div className=" w-full max-w-5xl   min-h-screen pt-4 lg:pt-52  ">
                    <MainContent >
                    {whitePaperData.map((itemWp,i)=>(
                        <div className="mb-14 pt-14" key={i + itemWp.slug} id={itemWp.slug}>
                            <h2 className=" text-2xl lg:text-4xl mb-4 lg:mb-8 font-title_bold">
                                <span className="mr-3 text-primary">{(i + 1 ) / 10}</span>{itemWp.title}
                            </h2>

                            <div className=" content-base" dangerouslySetInnerHTML={{__html: itemWp.content}}/>
                            <section className="text-gray text-xl pb-4   leading-10">
                                {itemWp.sections.map((subItem,i) =>(
                                    <div id={subItem.slug} className="mb-2 pt-12" key={"subItem"+ subItem.slug}>
                                        <h3 className=" leading-7 text-2xl text-light font-title_bold">{subItem.title}</h3>
                                        <div className=" content-base" dangerouslySetInnerHTML={{__html: subItem.content}}/>
                                    </div>
                                ))}
                            </section>
                        </div>
                        ))}
                    </MainContent>
                </div>
            </div>




        </div>
    )
};
