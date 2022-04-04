import React, { createContext, useContext } from "react";

export const MainContext = createContext();

export const useMain =  () =>{
    const context = useContext(MainContext);
    return context;
}
let hello = "Emil"

const greet = name => `Hello ${name}`

export const MainProvider = ({children }) => {

    return(
        <MainContext.Provider
            value={{
                hello,
                greet
            }}
        >
            {children}
        </MainContext.Provider>
    )
}