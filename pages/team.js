import Image from "next/image";
import Button from "../components/buttons";
import Logo from "../components/Logo";
import MainContent from "../components/MainContent";

export default function Team() {
    return(
        <div className=" min-h-screen bg-team bg-no-repeat bg-top">

            <MainContent>
                <div className=" text-center mt-[40vh] flex flex-col items-center justify-end">
                    <div className=" max-w-4xl text-center">
                    <h1 className=" text-2xl lg:text-6xl">Our team</h1>
                    <div className=" h-[7px] w-16 bg-primary rounded-full mx-auto my-8"></div>
                    <p className=" text-xl lg:text-3xl font-light">Meet the DISR team. The community behind a secure, transparent and quality project. Because Results Matters.</p>



                    </div>
                </div>

                <div className="mt-16">
                    <div  className="text-center">
                        <TeamCard
                        image="https://disruptivestudio.com/admin/images/local/team/daniel.jpg"
                        name="Daniel Cruz"
                        desc="Founder"
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
                    <h3 className=" text-center text-xl lg:text-2xl mb-8 max-w-2xl">Disr is a project that has been achieved thanks to the teamwork with Disruptive Studio.</h3>
                    <Logo className=" w-14 mb-8" />
                    <Button  size="sm" variant="primary">Disruptive full team</Button>
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