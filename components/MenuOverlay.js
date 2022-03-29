import Link from "next/link";
import React, { useState, useEffect } from "react";
import SelectForm from "./form/SelectForm"
export default function MenuOverlay({menuState}) {



    return(
        <div className={` ${menuState ? "right-0 ": "-right-[75vw]"} transition-all duration-500  bg-dark bg-opacity-90 px-16 backdrop-blur-sm fixed w-3/4 h-screen top-0  text-light `}>
            <nav className="font-title_bold text-xl flex flex-col pt-[10vh]">
                <Link href="/"><a className="my-4">Whitepaper</a></Link>
                <Link href="/"><a className="my-4">Tokenomics</a></Link>
                <Link href="/"><a className="my-4">News</a></Link>
                <Link href="/"><a className="my-4">Roadmap</a></Link>
            </nav>
            <SelectForm>
                <option>English</option>
            </SelectForm>

        </div>
    )
};
