import SocialButtons from "./buttons/SocialButtons";
import ChangeLang from "./ChangeLang";

export default function Sidebar() {
    return(
        <div className="hidden lg:block border-r border-r-gray border-opacity-25 fixed top-0 left-0  w-20 h-screen z-20">
            <div className="flex flex-col justify-center h-full items-center">
               <SocialButtons size="sm"/>

            </div>



            <div className=" absolute bottom-0 left-0 ">
                <ChangeLang size="sm"/>
            </div>

        </div>
    )
};
