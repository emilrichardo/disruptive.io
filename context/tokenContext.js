import React, { createContext, useContext } from "react";

export const TokenContext = createContext();

export const useToken =  () => useContext(TokenContext)



const  contractId  = process.env.token.contractToken

const  tokenApi  = process.env.token.tokenApi + contractId



export const TokenProvider = ({children}) => {


    return(
        <TokenContext.Provider
            value={{
                contractId,
                tokenApi,


            }}
        >
            {children}
        </TokenContext.Provider>
    )
}