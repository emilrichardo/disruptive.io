import React, { createContext, useContext,useEffect, useState } from "react";
import axios from "axios";

export const TokenContext = createContext();
export const useToken =  () => useContext(TokenContext)


const  contractId  = process.env.token.contractToken
const  tokenApi  = process.env.token.tokenApi + contractId

const scorePoint = (hash)=>{
    const apiScore = "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress="  + contractId + '&address=' + hash + "&tag=latest&apikey=UCEPGJ8N9UTG8ZP447AS6DD4XI59VMQVBZ";
    return apiScore
}

export const TokenProvider = ({children }) => {


    const [pss, setPss] = useState([]);
    const [totalSupply, setTotalSupply] = useState([])
    const [founders, setFounders] = useState([])
    const [rtf, setRtf] = useState([])
    const [circulation,SetCirculation] = useState([])
    const [investors, setInvestors]= useState([])


    let  community = ( (Number(totalSupply)  - Number(founders) - Number(pss)))

    const totalNumbers = Number(totalSupply) + Number(founders) + Number(pss)


    let pssPercent = Number(pss) / totalNumbers







    useEffect(() => {
        axios
        .get(scorePoint('0x7ffa738850ad1867e416e65c88a264f6e425a6b3')).then((res) => {setPss(res.data.result)})
        ;
        axios
        .get(scorePoint('0x44b0b0d24047161c1d8297b045810d762c453253')).then((res) => {setFounders(res.data.result)})
        ;
        axios
        .get(scorePoint('0x8AEed93A7962e3F0eE357e3D490B09539be521F7')).then((res) => {setRtf(res.data.result)})
        ;

        axios
        .get(scorePoint('0x7ffa738850ad1867e416e65c88a264f6e425a6b3')).then((res) => {SetCirculation(res.data.result)})
        ;

        axios
        .get(scorePoint('0x7ffa738850ad1867e416e65c88a264f6e425a6b3')).then((res) => {SetCirculation(res.data.result)})
        ;

        axios
        .get(scorePoint('0xef147130e1f7016ecF39916fCF8eEca7E5eD0729')).then((res) => {setInvestors(res.data.result)})
        ;




      }, []);

      useEffect(() => {
        axios .get('https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xd70a9d1c9fdd3d8dd2fb672bb399f7bca61666bd').then((res) => {setTotalSupply(res.data.result)});
      }, []);












    return(
        <TokenContext.Provider
            value={{
                contractId,
                tokenApi,
                pointScored : {
                    pancakeSwapSupply: pss,
                    totalSupply,
                    founders,
                    revolvingTreasuryFunds : rtf,
                    community,
                    circulation,
                    investors,
                }


            }}
        >
            {children}
        </TokenContext.Provider>
    )
}