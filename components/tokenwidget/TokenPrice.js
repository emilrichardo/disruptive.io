import React from "react";
//import { StaticImage } from "gatsby-plugin-image";
export default function TokePrice({token,loading,iconToken,primaryColor,linkBsc}) {

    let tokenvalue = parseFloat(token.price).toFixed(2);
    let bnbvalue = parseFloat(token.price_BNB).toFixed(6);



    return(

        <>
        {loading
        ? <div className="lds-ripple"><div></div><div></div></div>
        :

        <>


            <div className="flex text-sm mt-2 uppercase text-gray">
                <p className="mr-4 pr-4 border-r border-r-gray"><strong className=" font-bold">{token.symbol} </strong> {tokenvalue}</p>
                <p className="token-crypto"><span className="amount">{ bnbvalue }</span> <span className="coin fw-bold">BNB</span></p>
            </div>



        </>

        }
        </>



    )
};
