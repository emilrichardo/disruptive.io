import Image from "next/image";
import Button from "../components/buttons";
import Logo from "../components/Logo";
import MainContent from "../components/MainContent";

export  async function getStaticProps({ locale }){
    return{
      props:{
        locale,
      }
    }
  }

export default function Team({locale}) {
    return(
        <div className=" min-h-screen bg-team bg-no-repeat bg-top">

            <MainContent>
                <div className=" text-center mt-[40vh] flex flex-col items-center justify-end">
                    <div className=" max-w-4xl text-center">
                    <h1 className=" text-2xl lg:text-6xl">{locale == "en" ? "Our team": "Nuestro equipo"}</h1>
                    <div className=" h-[7px] w-16 bg-primary rounded-full mx-auto my-8"></div>
                    <p className=" text-xl lg:text-3xl font-light">
                    {locale == "en" ? "Meet the DISR team. The community behind a secure, transparent and quality project. Because Results Matters.": "Conoce al equipo DISR. La comunidad detrás de un proyecto seguro, transparente y de calidad. Porque los resultados importan."}

                    </p>



                    </div>
                </div>

                <div className="mt-16">
                    <div  className="text-center">
                        <TeamCard
                        image="https://disruptivestudio.com/admin/images/local/team/daniel.jpg"
                        name="Daniel Cruz"
                        desc={locale == "en" ? "Founder": "Fundador"}
                        />
                    </div>

                    <div className="grid text-center grid-cols-1 lg:grid-cols-4 max-w-6xl gap-4 mx-auto">
                        <TeamCard
                        image="https://disruptivestudio.com/admin/images/local/team/visa%20(1).jpg"
                        name="Denis Ramirez"
                        desc="CTO"
                        />
                        <TeamCard
                        image="https://disruptivestudio.com/admin/images/local/team/Refugio_Aguilera.jpg"
                        name="Refugio Aguilera"
                        desc="CMO"
                        />
                         <TeamCard
                        image="https://disruptivestudio.com/admin/images/local/team/manuel2.jpg"
                        name="Manuel López"
                        desc="CCO"
                        />
                         <TeamCard
                        image="/profile-torres.jpg"
                        name="José Torres"
                        desc="Advisor"
                        />

                    </div>

                </div>

                <div className="flex flex-col items-center justify-center py-24">
                    <h3 className=" text-center text-xl lg:text-2xl mb-8 max-w-2xl">
                    {locale == "en" ? "Disr is a project that has been achieved thanks to the teamwork with Disruptive Studio.": "Disr es un proyecto que se ha logrado gracias al trabajo en equipo con Disruptive Studio."}

                    </h3>
                    <Logo className=" w-14 mb-8" />
                    <a href={locale == "en" ? "https://disruptivestudio.com/?p=team" : "https://disruptivestudio.com/?p=team&language=spanish"} rel="noopener noreferrer" target="_blank">
                        <Button  size="sm" variant="primary">{locale == "en" ? "Disruptive full team": "El equipo completo de Disruptive"}</Button>
                    </a>
                </div>

            </MainContent>

        </div>
    )

};


const TeamCard = ({name,desc,image}) => {
    return(
        <div className="mb-8 inline-block">
            <div className="relative w-64 h-72 inline-block rounded-md overflow-hidden filter grayscale">
                <Image
                className=" inline-block"
                 alt="image-prfile"
                    src={image}
                   layout="fill"
                   objectFit='cover'
                />
            </div>

            <h3 className=" font-body font-medium text-xl lg:text-2xl mt-6">{name && name}</h3>
            <h4 className="font-body font-light text-gray">{desc}</h4>
        </div>
    )
}