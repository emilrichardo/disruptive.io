import React, { useState, useEffect } from "react";
import Button from "./buttons";
import Logo from "./Logo";
import MenuOverlay from "./MenuOverlay";
import {useWindowSize} from "./DetectWSize"

import Link from "next/link";
import NavMain from "./NavMain"


export default function Header({className}) {





    const [menuOverlay, setMenuOverlay] = useState(false)

    const MenuToggleSwitch = () => {
        menuOverlay ? setMenuOverlay(false) : setMenuOverlay(true);
      };

      const [scrolled, setScrolled] = useState(false);
      // change state on scroll
      useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 10;
          if (isScrolled !== scrolled) {
            setScrolled(!scrolled);
          }
        };

        document.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
          // clean up the event handler when the component unmounts
          document.removeEventListener("scroll", handleScroll);
        };
      }, [scrolled]);



        //detect window size width height
    const size = useWindowSize();




    return(
        <header className={` ${className} ${scrolled && "bg-dark bg-opacity-80 "} transition-all  px-4 py-2 lg:py-4 fixed top-0 w-screen flex justify-between items-center z-50 `}>
           <Link href="/"><a><Logo className=" z-50 w-8 lg:ml-2"/></a></Link>


            <div className="flex items-center" >

              {size.width  >   1024
              ?
              <NavMain  className="hidden lg:inline-block uppercase text-sm font-title tracking-wider" itemClassName="mr-8"/>
              :
              <MenuOverlay  menuState={menuOverlay} MenuToggleSwitch={MenuToggleSwitch} />
              }




                <Button className="px-7 mr-2" variant="primary" size="sm">Stake</Button>
                <Button
                className="pr-8 md:pr-8 pl-0 mt-0 mr-4 "
                variant="outline"
                size="sm"
                iconRight={
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_231_532)">
                    <path d="M16.5938 7.77109L17.6751 2.44407C17.9163 1.27367 17.0674 0.163518 15.8432 0.0172184C14.619 -0.129081 13.5288 0.757322 13.4663 1.94493L13.1982 6.98796C12.4833 6.9019 11.7417 6.85887 10.9821 6.85887C10.2226 6.85887 9.48091 6.9019 8.76604 6.98796L8.49797 1.94493C8.46223 0.757322 7.37206 -0.129081 6.14785 0.0172184C4.92364 0.154912 4.08367 1.27367 4.316 2.43546L5.39724 7.76249C2.17141 8.91567 0 11.0241 0 13.4337C0 17.0654 4.92364 20.0086 11 20.0086C17.0764 20.0086 22 17.0654 22 13.4337C22 11.0241 19.8286 8.91567 16.5938 7.77109ZM6.78229 14.7074C6.0853 14.7074 5.52234 13.9157 5.52234 12.9346C5.52234 11.9535 6.0853 11.1618 6.78229 11.1618C7.47929 11.1618 8.04224 11.9535 8.04224 12.9346C8.03331 13.9157 7.47035 14.7074 6.78229 14.7074ZM15.2177 14.7074C14.5207 14.7074 13.9578 13.9157 13.9578 12.9346C13.9578 11.9535 14.5207 11.1618 15.2177 11.1618C15.9147 11.1618 16.4777 11.9535 16.4777 12.9346C16.4777 13.9157 15.9147 14.7074 15.2177 14.7074Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_231_532">
                    <rect width="22" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                }
                >
                    <span className="hidden md:inline-block">ACQUIRE</span>
                </Button>
                <Button onClick={MenuToggleSwitch} onKeyDown={MenuToggleSwitch} size="sm" className="lg:hidden relative z-50  py-3">
                    <div className={` ${menuOverlay ? " rotate-45 w-10 top-2":" rotate-0 w-6"} transition-all relative h-[2px]  bg-light `}></div>
                    <div className={` ${menuOverlay ? " -rotate-45 w-10":" rotate-0 w-6"} transition-all h-[2px]   bg-light mt-[7px] `}></div>

                </Button >





            </div>
        </header>
    )
};
