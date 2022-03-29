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
        <p>{token.name}  <span>({token.symbol})</span> </p>
        <div className="d-flex ai-center">
            {/* <StaticImage  style={{overFlow:"visible"}} imgClassName="token-image" src="./../../images/body/cmf-token.svg" alt="CMF Token" /> */}
            <div className="d-flex fd-column ai-start">
                <p className="token-money h1 fw-bold">$ {tokenvalue}</p>
                <p className="token-crypto"><span className="amount">{ bnbvalue }</span> <span className="coin fw-bold">BNB</span></p>
            </div>
        </div>


        </>

        }
        </>



    )
};
