import MainContent from "../components/MainContent";

export default function whitepaper() {
    return(
        <div className="h-full flex flex-col md:flex-row">
            <div className=" bg-dark-black w-full max-w-lg  lg:min-h-screen pt-32 pb-14 px-8 lg:px-24">
                <h1 className=" text-4xl lg:text-6xl">Whitepaper</h1>
                <h4 className="text-xl mt-8 lg:text-4xl opacity-60">Marzo 2022</h4>

            </div>
            <div className=" bg-lines w-full min-h-screen pt-4 lg:pt-52">
                <MainContent>
                    <h2 className=" text-2xl lg:text-4xl mb-4 lg:mb-8 font-title_bold"> <span className=" text-primary">0.1</span>  Disclaimer</h2>
                    <div className=" content-base">
                        <p> Este documento tiene el único objetivo de describir las características de DISR Coin.</p>
                        <p>Un token diseñado y desarrollado como una alternativa para acercar a los usuarios a la tecnología blockchain; la industria crypto y el sector de las finanzas descentralizadas o DeFi.</p>
                        <p>La información descrita en este documento no necesariamente es detallada, ni tiene la intención de establecer ninguna relación contractual. Únicamente se trata de un documento descriptivo, en el que se ilustra, con fines informativos, las características de un proyecto en el ámbito de las criptodivisas.</p>
                        <p>Cada una de las decisiones que asuma el usuario, así como el manejo que haga de las herramientas sugeridas, podrían implicar riesgos bajo su propia responsabilidad y DISR Coin no se hace responsable de estas acciones, ni las consecuencias que ellas puedan ocasionar.</p>

                        <h4 className="text-light mt-24 mb-8">Introducción</h4>
                        <h2 className=" text-2xl lg:text-4xl mb-4 lg:mb-8 font-title_bold"> <span className=" text-primary">0.2</span>  Un momento histórico</h2>
                        <p>En menos de dos décadas la tecnología blockchain, las finanzas descentralizadas (DeFi) y las criptodivisas se han consolidado como opciones reales para apostar por un nuevo modelo de negocio con mayores beneficios para todos los usuarios, a diferencia del sistema fiduciario.</p>
                        <p>Si durante el año 2020 este mercado registró un aumento del 300 %, en el 2021 continúo fortaleciéndose y se espera que para este 2022 su crecimiento continúe atrayendo a nuevos usuarios que confían cada vez más en las diversas aplicaciones de los criptoactivos.</p>
                        <p>Muestra de esto fue el alcalde de Nueva York, Eric Adams, quien se convirtió en noticia luego de asegurar durante su campaña que cobraría su primer salario en criptomonedas, y así lo hizo. Con ello, Adams respaldó su intención de convertir a Nueva York en uno de los centros del mercado crypto; así como de otras industrias tecnológicas de alto desarrollo.</p>



                    </div>
                </MainContent>
            </div>



        </div>
    )
};
