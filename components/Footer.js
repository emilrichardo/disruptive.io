import Logo from "./Logo";
import NavMain from "./NavMain"

import { useRouter } from 'next/router';
import SocialButtons from "./buttons/SocialButtons";
export default function Footer({className}) {
    const router = useRouter();
    const { locale } = router;
    return(
        <footer className={`${className} bg-dark-dark relative py-8 z-10`}>
            <div className="flex flex-col lg:flex-row justify-end px-8 lg:px-20 py-8">
                {/* <div className="text-light flex items-start">
                    <Logo className=" w-8 mr-4"/>
                    <div>
                        <h5 className=" text-md lg:text-xl">About</h5>
                        <p className="text-gray max-w-sm mt-2 font-light">
                            {locale == 'en'
                            ? "At Disruptive we reinvent the world. We create and innovate in a way that some people can't even imagine and we bet on projects that are out of the ordinary: that makes us unique. It makes us Disruptive."
                            : "En Disruptive reinventamos el mundo. Creamos e innovamos de una forma que algunos ni siquiera pueden imaginar y eso nos hace únicos. "
                            }
                        </p>
                    </div>
                    </div> */}
                <div className="mt-12 lg:mt-0">
                    <div className="flex justify-center lg:justify-end  items-center">
                        <SocialButtons/>
                    </div>
                    <NavMain className=" font-title mt-16 lg:mt-0" itemClassName="mx-4"/>

                </div>

            </div>
            <div className="flex flex-col lg:flex-row justify-between text-gray  px-8 lg:px-20 py-6 border-t border-dark-light text-xs text-center lg:text-left">
                <p>{locale == "en" ? "Check our" : "Revisa nuestra"}  <a className="text-light">{locale == "en" ? "legal information" : "información legal"}</a> </p>
                <p className="mt-4 lg:mt-0">Disruptivestudio ©. 2022  {locale == 'en'? "All rights reserved" : "todos los derechos reservados."} </p>
            </div>

        </footer>
    )
};
