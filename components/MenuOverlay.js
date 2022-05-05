

import Button from "./buttons";
import SocialButtons from "./buttons/SocialButtons";
import ChangeLang from "./ChangeLang";
import NavMain from "./NavMain";
import SlidePanel from "./SlidePanel";
export default function MenuOverlay({menuState,MenuToggleSwitch}) {

    return(

            <SlidePanel   state={menuState} toggleSwitch={MenuToggleSwitch}>
                <div className="h-full flex-col flex justify-between">
                    <NavMain MenuToggleSwitch={MenuToggleSwitch} className="mt-36 " itemClassName="text-xl my-2"/>
                    <div className=" text-xs text-gray pb-14 text-center">


                        <ChangeLang/>
                        <div className="flex justify-between  items-center">
                           <SocialButtons/>

                        </div>



                        <p className="mb-6 mt-8">Revisa nuestra <a href="/" className="text-light">información legal </a></p>
                        <p>Disruptivestudio ©. 2022 All rights reserved</p>
                    </div>
                </div>

            </SlidePanel>



    )
};
