import React, { createContext, useContext } from "react";

export const TokenContext = createContext();

export const useToken =  () => useContext(TokenContext)


const {contract} = process.env.tokenApi




export const TokenProvider = ({children }) => {

    return(
        <TokenContext.Provider
            value={{
                contract

            }}
        >
            {children}
        </TokenContext.Provider>
    )
}