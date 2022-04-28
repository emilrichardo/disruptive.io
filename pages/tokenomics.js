import Button from "../components/buttons";
import MainContent from "../components/MainContent";
import Image from "next/image";
import Head from "next/head";
import AnimationPage from "../components/AnimationPage";
import PointScored from "../components/PointScored";
import { TokenProvider } from "../context/tokenContext";
import ApexChart from "../components/apexchart";
import Logo from "../components/Logo"

export  async function getStaticProps({ locale }){
    return{
      props:{
        locale,
      }
    }
  }

  const feesEA = [
    {    "number":25,    "title":"Operations",    "color":"#73BCFF",    },
    {    "number":25,    "title":"Development",    "color":"#A5FFFF",    },
    {    "number":10,    "title":"Founders",    "color":"#F3CB8F",    },
    {    "number":10,    "title":"Investors",    "color":"#BEB8FF",    },
    {    "number":10,    "title":"Staking",    "color":"#C1FFAB",    },
    {    "number":10,    "title":"Treasury",    "color":"#fff",    },
    {    "number":10,    "title":"Burn",    "color":"#FFA1CE",    }

  ]


  const series =  [25, 25, 10, 10, 10,10,10]
  const options =  {
      chart: {
        type: 'donut',
        width: '100%'
      },


      plotOptions: {
        pie: {
          donut: {
            size: '90%',

          }
        },

      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        fillSeriesColor: false,
      },
     stroke:{
        width:2,
        colors: ['#161920']
     },
     labels: ['Operations',"Development","Founders","Investors","Staking","Treasury","Burn"],

      legend:false,
      colors:["#73BCFF","#A5FFFF","#F3CB8F","#BEB8FF","#C1FFAB","#fff","#FFA1CE"],


    }



export default function Tokenomics({locale}) {

    return(
        <>
        <AnimationPage>
        <Head>
            <title>Tokenomics {" - " + process.env.projectName}</title>
        </Head>
        <MainContent>
        <div className=" flex flex-col lg:flex-row items-center justify-between lg:py-[15vh]">
            <div className="lg:w-1/2 lg:order-2 relative">
                <div className="relative left-20 top-16">
                    <Image
                    src="/iso-3d.png"
                    width={534}
                    height={523}
                    quality={100}
                    />
                </div>

            </div>
            <div className="py-8">
                <h1 className=" text-3xl lg:text-6xl font-light">{locale =='en' ? "Tokenomics" : " Economía"}</h1>
                <div className=" h-[7px] w-16 bg-primary rounded-full my-8"></div>
                {locale == 'en'
                ?
                <>
                    <p className=" max-w-xl leading-8 tracking-wide   text-2xl text-gray font-thin mb-8">
                    Combining the crypto market with the traditional market has been our biggest achievement.  DISR Protocol aims to benefit clients, holders and users with the economic plan it has developed.
                </p>
                    <a href="#utility">
                        <Button variant="primary" size="sm">READ MORE</Button>
                    </a>
                </>
                :
                <>
                    <p className=" max-w-lg leading-8 tracking-wide   text-2xl text-gray font-light mb-8">Combinar el mercado tradicional con el mercado cripto ha sido nuestro mayor logro. Protocolo <span className="text-primary font-medium">DISR</span> tiene la meta de beneficiar clientes, portadores y usuarios a través del plan estratégico que ha sido desarrollado.</p>
                    <Button variant="primary" size="sm">Leer más</Button>
                </>
                }

            </div>


         </div>

         <section id="utility">
             <h2 className="text-center font-title_bold text-2xl lg:text-5xl">DISR Utility</h2>



             <div   className="py-16 grid grid-cols-1  gap-y-8 lg:grid-cols-4 relative">
                 <div className="text-center">
                    <svg className=" inline-block" width="60" height="66" viewBox="0 0 60 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_381_470)">
                        <path d="M43.3311 37.432L47.6891 41.791L56.2791 33.201" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M58.5001 36.6901C59.0765 39.0646 58.8194 41.565 57.7719 43.7725C56.7244 45.9801 54.9501 47.7606 52.7462 48.8158C50.5424 49.8711 48.0429 50.137 45.6664 49.5689C43.2899 49.0009 41.1807 47.6334 39.6923 45.6957C38.2038 43.7579 37.4265 41.3675 37.4905 38.9249C37.5544 36.4823 38.4559 34.1358 40.0437 32.2786C41.6315 30.4214 43.8094 29.1662 46.2123 28.7234C48.6153 28.2805 51.0975 28.6769 53.2431 29.8461" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M48.145 28.34V3.25C48.145 2.58696 47.8816 1.95107 47.4128 1.48223C46.9439 1.01339 46.308 0.75 45.645 0.75H14.467L0.75 14.467V62.143C0.75 62.806 1.01339 63.4419 1.48223 63.9108C1.95107 64.3796 2.58696 64.643 3.25 64.643H45.65C46.313 64.643 46.9489 64.3796 47.4178 63.9108C47.8866 63.4419 48.15 62.806 48.15 62.143V49.877" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M15.014 0.75V12.84C15.014 13.503 14.7506 14.1389 14.2818 14.6078C13.8129 15.0766 13.177 15.34 12.514 15.34H0.75" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M20.6509 12.5909H37.6299" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M18.9509 22.889H23.5029" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M26.1279 22.889H37.9539" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M9.37695 22.862L11.213 24.698L14.832 21.08" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M32.041 33.178H37.63" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M18.9509 33.178H29.1399" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M9.37695 33.151L11.213 34.987L14.832 31.368" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M18.9509 43.4659H37.6299" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M9.37695 43.439L11.213 45.275L14.832 41.657" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M18.9509 53.755H22.3559" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M24.9871 53.755H31.2931" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M33.2791 53.755H37.6301" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M9.37695 53.728L11.213 55.564L14.832 51.946" stroke="#5D5FEF" strokeWidth="1.5"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_381_470">
                        <rect width="59.549" height="65.393" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                     <h3 className=" text-lg lg:text-2xl font-title_bold mt-8">Crypto processing</h3>
                 </div>
                 <div className="text-center">
                 <svg className=" inline-block mb-5" width="122" height="50" viewBox="0 0 122 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_372_388)">
                    <path d="M120.911 31.265H79.2671V42.227C79.2674 43.0653 79.6005 43.8691 80.1932 44.4619C80.786 45.0546 81.5898 45.3878 82.4281 45.388H117.75C118.588 45.3878 119.392 45.0546 119.985 44.4619C120.578 43.8691 120.911 43.0653 120.911 42.227V31.265Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M120.91 17.1429H79.2671V31.2649H120.91V17.1429Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M120.911 6.181C120.911 5.76594 120.829 5.35494 120.67 4.97149C120.512 4.58803 120.279 4.23963 119.985 3.94619C119.692 3.65274 119.343 3.42 118.96 3.26125C118.576 3.1025 118.165 3.02086 117.75 3.021H82.4281C82.013 3.02086 81.602 3.1025 81.2185 3.26125C80.835 3.42 80.4865 3.65274 80.193 3.94619C79.8994 4.23963 79.6666 4.58803 79.5077 4.97149C79.3489 5.35494 79.2671 5.76594 79.2671 6.181V17.143H120.911V6.181Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M88.769 36.776C89.1312 36.7758 89.4853 36.883 89.7866 37.0842C90.0879 37.2853 90.3227 37.5712 90.4614 37.9058C90.6001 38.2405 90.6364 38.6087 90.5658 38.964C90.4952 39.3192 90.3208 39.6456 90.0647 39.9017C89.8085 40.1578 89.4822 40.3322 89.1269 40.4029C88.7717 40.4735 88.4034 40.4371 88.0688 40.2984C87.7342 40.1597 87.4482 39.9249 87.2471 39.6236C87.046 39.3224 86.9388 38.9682 86.939 38.606C86.9392 38.1207 87.1321 37.6554 87.4753 37.3123C87.8184 36.9692 88.2837 36.7763 88.769 36.776Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M105.236 37.934V38.719" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M110.978 37.934V38.719" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M116.721 37.934V38.719" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M88.769 22.653C89.1311 22.6528 89.4852 22.76 89.7865 22.961C90.0877 23.1621 90.3226 23.448 90.4613 23.7826C90.6 24.1171 90.6364 24.4853 90.5659 24.8406C90.4954 25.1958 90.3211 25.5221 90.065 25.7783C89.809 26.0345 89.4827 26.209 89.1275 26.2797C88.7723 26.3504 88.4041 26.3142 88.0695 26.1757C87.7349 26.0371 87.4488 25.8024 87.2476 25.5013C87.0464 25.2002 86.939 24.8461 86.939 24.484C86.9392 23.9986 87.1321 23.5332 87.4752 23.1899C87.8183 22.8466 88.2836 22.6535 88.769 22.653V22.653Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M105.236 23.812V24.596" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M110.978 23.812V24.596" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M116.721 23.812V24.596" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M88.769 8.53101C89.1311 8.53081 89.4852 8.63803 89.7865 8.8391C90.0877 9.04017 90.3226 9.32606 90.4613 9.66062C90.6 9.99517 90.6364 10.3634 90.5659 10.7186C90.4954 11.0738 90.3211 11.4002 90.065 11.6564C89.809 11.9125 89.4827 12.087 89.1275 12.1578C88.7723 12.2285 88.4041 12.1923 88.0695 12.0537C87.7349 11.9152 87.4488 11.6805 87.2476 11.3794C87.0464 11.0782 86.939 10.7242 86.939 10.362C86.939 9.87657 87.1317 9.411 87.4749 9.06765C87.8181 8.7243 88.2835 8.53127 88.769 8.53101V8.53101Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M105.236 9.68994V10.4739" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M110.978 9.68994V10.4739" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M116.721 9.68994V10.4739" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M91.1161 45.3879H86.4221V49.1749H91.1161V45.3879Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M113.756 45.3879H109.062V49.1749H113.756V45.3879Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M69.061 14.396L72.436 17.771L69.061 21.146" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                    <path d="M55.6599 17.771H72.4359" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M60.095 37.8L56.72 34.425L60.095 31.05" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                    <path d="M73.496 34.425H56.72" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M39.793 14.63C39.793 6.96429 33.5787 0.75 25.913 0.75C18.2472 0.75 12.033 6.96429 12.033 14.63V35.295C12.033 42.9607 18.2472 49.175 25.913 49.175C33.5787 49.175 39.793 42.9607 39.793 35.295V14.63Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M39.793 19.9449H12.033" stroke="#5D5FEF" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M30.349 10.78H21.478C20.7374 10.78 20.137 11.3804 20.137 12.121C20.137 12.8616 20.7374 13.462 21.478 13.462H30.349C31.0896 13.462 31.69 12.8616 31.69 12.121C31.69 11.3804 31.0896 10.78 30.349 10.78Z" fill="#5D5FEF"/>
                    <path d="M30.349 10.78H21.478C20.7374 10.78 20.137 11.3804 20.137 12.121C20.137 12.8616 20.7374 13.462 21.478 13.462H30.349C31.0896 13.462 31.69 12.8616 31.69 12.121C31.69 11.3804 31.0896 10.78 30.349 10.78Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M9.10006 17.426C9.68055 17.4262 10.2479 17.5986 10.7305 17.9212C11.213 18.2439 11.5891 18.7024 11.811 19.2388C12.033 19.7752 12.0909 20.3653 11.9775 20.9346C11.864 21.5039 11.5843 22.0268 11.1737 22.4371C10.7631 22.8474 10.24 23.1268 9.67067 23.2398C9.1013 23.3529 8.51119 23.2946 7.97496 23.0722C7.43874 22.8499 6.98048 22.4736 6.65814 21.9908C6.33581 21.508 6.16386 20.9405 6.16406 20.36C6.16459 19.5817 6.47415 18.8354 7.0247 18.2853C7.57525 17.7351 8.32173 17.426 9.10006 17.426V17.426Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M42.728 17.426C42.1474 17.4258 41.5798 17.5978 41.097 17.9202C40.6142 18.2427 40.2379 18.701 40.0156 19.2374C39.7933 19.7737 39.7351 20.3639 39.8483 20.9334C39.9616 21.5028 40.2411 22.0259 40.6516 22.4364C41.0622 22.8469 41.5852 23.1265 42.1546 23.2397C42.7241 23.3529 43.3143 23.2947 43.8506 23.0724C44.387 22.8502 44.8453 22.4738 45.1678 21.991C45.4902 21.5082 45.6622 20.9406 45.662 20.36C45.6615 19.582 45.3522 18.8361 44.8021 18.286C44.2519 17.7358 43.506 17.4266 42.728 17.426V17.426Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M1.92201 42.454C1.36206 41.8938 0.980768 41.1802 0.826357 40.4033C0.671947 39.6265 0.751348 38.8213 1.05452 38.0896C1.3577 37.3578 1.87103 36.7324 2.52961 36.2924C3.1882 35.8524 3.96246 35.6176 4.75451 35.6176C5.54656 35.6176 6.32083 35.8524 6.97941 36.2924C7.638 36.7324 8.15133 37.3578 8.45451 38.0896C8.75768 38.8213 8.83708 39.6265 8.68267 40.4033C8.52826 41.1802 8.14697 41.8938 7.58701 42.454" stroke="#5D5FEF" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M49.9 42.454C50.4601 41.8939 50.8415 41.1803 50.996 40.4034C51.1506 39.6265 51.0712 38.8212 50.7681 38.0894C50.465 37.3576 49.9517 36.7321 49.293 36.292C48.6344 35.852 47.8601 35.6171 47.068 35.6171C46.2759 35.6171 45.5016 35.852 44.8429 36.292C44.1843 36.7321 43.671 37.3576 43.3679 38.0894C43.0647 38.8212 42.9854 39.6265 43.1399 40.4034C43.2945 41.1803 43.6759 41.8939 44.236 42.454" stroke="#5D5FEF" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M7.34513 22.645L4.75513 29.002V35.617" stroke="#5D5FEF" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M44.4819 22.645L47.0719 29.002V35.617" stroke="#5D5FEF" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M24.7731 41.246C23.9118 41.2435 23.0641 41.0314 22.3031 40.628C21.4613 40.2004 20.7551 39.5469 20.2638 38.7406C19.7724 37.9343 19.5153 37.0072 19.5211 36.063V30.263C19.5177 29.3225 19.7894 28.4014 20.3029 27.6134C20.8165 26.8254 21.5493 26.2048 22.4111 25.828C23.2719 25.4329 24.2281 25.2932 25.1659 25.4254C26.1038 25.5577 26.9841 25.9563 27.7021 26.574L31.3711 29.7C32.0017 30.2436 32.4976 30.9262 32.8196 31.6939C33.1417 32.4617 33.2811 33.2937 33.227 34.1245C33.173 34.9553 32.9268 35.7622 32.5079 36.4818C32.089 37.2013 31.5089 37.8138 30.8131 38.271L27.7001 40.349C26.836 40.9319 25.8184 41.2451 24.7761 41.249L24.7731 41.246ZM20.9761 30.586V36.066C20.9726 36.7486 21.1591 37.4188 21.5146 38.0015C21.87 38.5843 22.3806 39.0567 22.9891 39.366C23.596 39.6901 24.2797 39.8427 24.9669 39.8075C25.654 39.7723 26.3185 39.5505 26.8891 39.166L30.0001 37.091C30.5123 36.7543 30.9395 36.3033 31.248 35.7736C31.5566 35.2439 31.738 34.6498 31.7781 34.0381C31.8183 33.4264 31.716 32.8137 31.4793 32.2482C31.2426 31.6827 30.878 31.1798 30.4141 30.779L26.7521 27.656C26.2443 27.2191 25.6218 26.9372 24.9585 26.8436C24.2952 26.75 23.619 26.8487 23.0101 27.128C22.8047 27.2203 22.6085 27.3318 22.4241 27.461C23.2448 27.3903 24.061 27.6413 24.7001 28.161L29.2261 31.8C29.5239 32.0366 29.7612 32.3406 29.9184 32.6869C30.0756 33.0332 30.1483 33.412 30.1304 33.7919C30.1125 34.1718 30.0046 34.542 29.8156 34.872C29.6265 35.2021 29.3618 35.4824 29.0431 35.69L26.0571 37.67C25.7195 37.8941 25.3278 38.0232 24.9231 38.0438C24.5185 38.0644 24.1157 37.9757 23.7571 37.787C23.4006 37.6019 23.1016 37.3226 22.8925 36.9796C22.6834 36.6365 22.5723 36.2428 22.5711 35.841V30.345L27.9431 34.591C27.9663 34.6093 27.9883 34.629 28.0091 34.65L28.2341 34.501C28.3652 34.4156 28.4741 34.3003 28.5518 34.1646C28.6296 34.0288 28.674 33.8765 28.6813 33.7202C28.6886 33.564 28.6587 33.4082 28.594 33.2657C28.5293 33.1233 28.4316 32.9983 28.3091 32.901L23.7861 29.262C23.5338 29.0543 23.2272 28.9232 22.9027 28.8844C22.5781 28.8456 22.2493 28.9006 21.9551 29.043C21.659 29.1754 21.4079 29.3914 21.2328 29.6644C21.0576 29.9374 20.966 30.2557 20.9691 30.58L20.9761 30.586ZM24.0211 33.319V35.835C24.0203 35.9766 24.0589 36.1157 24.1325 36.2366C24.2061 36.3576 24.3119 36.4557 24.4381 36.52C24.5641 36.5875 24.7061 36.6193 24.8488 36.6121C24.9915 36.6048 25.1296 36.5588 25.2481 36.479L26.7541 35.479L24.0211 33.319Z" fill="#5D5FEF"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_372_388">
                    <rect width="121.661" height="49.925" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                     <h3 className=" text-lg lg:text-2xl font-title_bold mt-8">Bot Server Requests</h3>
                 </div>
                 <div className="text-center">
                        <svg className=" inline-block" width="96" height="74" viewBox="0 0 96 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_381_490)">
                        <path d="M46.819 39.3619C46.0091 39.3599 45.2118 39.1608 44.496 38.7819C43.7043 38.3797 43.0402 37.7651 42.5781 37.0069C42.1159 36.2488 41.8738 35.3769 41.879 34.4889V29.0349C41.8763 28.1501 42.1324 27.2837 42.6159 26.5426C43.0994 25.8015 43.789 25.218 44.6 24.8639C45.4095 24.4923 46.3085 24.3608 47.1906 24.4848C48.0726 24.6089 48.9005 24.9834 49.576 25.5639L53.026 28.5059C53.6191 29.0172 54.0855 29.659 54.3884 30.3811C54.6913 31.1031 54.8226 31.8856 54.7718 32.667C54.721 33.4483 54.4896 34.2072 54.0957 34.884C53.7018 35.5607 53.1563 36.1368 52.502 36.5669L49.571 38.5169C48.7582 39.0637 47.8015 39.3571 46.822 39.3599L46.819 39.3619ZM43.243 29.3349V34.4889C43.2381 35.1322 43.4127 35.7641 43.7471 36.3136C44.0815 36.8632 44.5624 37.3086 45.136 37.5999C45.7072 37.9049 46.3507 38.0484 46.9974 38.0149C47.644 37.9815 48.2693 37.7723 48.806 37.4099L51.737 35.4589C52.2186 35.1423 52.6202 34.7183 52.9102 34.2202C53.2003 33.7221 53.3709 33.1636 53.4087 32.5885C53.4465 32.0134 53.3504 31.4373 53.128 30.9056C52.9056 30.3738 52.563 29.9009 52.127 29.5239L48.683 26.5859C48.2056 26.1746 47.6202 25.9089 46.9962 25.8203C46.3723 25.7316 45.7361 25.8238 45.163 26.0859C44.9702 26.1734 44.7858 26.2781 44.612 26.3989C45.3837 26.3322 46.1511 26.5674 46.753 27.0549L51.006 30.4769C51.2853 30.6999 51.5077 30.9858 51.6551 31.3113C51.8025 31.6368 51.8707 31.9926 51.854 32.3496C51.8373 32.7065 51.7362 33.0544 51.5591 33.3648C51.382 33.6751 51.1338 33.939 50.835 34.1349L48.026 35.9999C47.7086 36.2105 47.3404 36.3319 46.9601 36.3512C46.5797 36.3706 46.2011 36.2872 45.864 36.1099C45.5286 35.9359 45.2474 35.6734 45.0508 35.3507C44.8542 35.0281 44.7498 34.6577 44.749 34.2799V29.1119L49.8 33.0999C49.8218 33.1173 49.8425 33.136 49.862 33.1559L50.074 33.0159C50.1962 32.9353 50.2976 32.827 50.37 32.6998C50.4424 32.5725 50.4836 32.43 50.4905 32.2837C50.4973 32.1375 50.4695 31.9917 50.4093 31.8583C50.349 31.7249 50.2581 31.6076 50.144 31.5159L45.891 28.0999C45.6538 27.9044 45.3654 27.781 45.0602 27.7445C44.7549 27.708 44.4456 27.7599 44.169 27.8939C43.8907 28.0184 43.6547 28.2215 43.4902 28.4782C43.3257 28.7349 43.2398 29.0341 43.243 29.3389V29.3349ZM46.112 31.9149V34.2809C46.1113 34.4142 46.1477 34.545 46.2171 34.6587C46.2865 34.7725 46.3862 34.8646 46.505 34.9249C46.6233 34.9884 46.7567 35.0184 46.8908 35.0117C47.0249 35.0051 47.1546 34.9619 47.266 34.8869L48.683 33.9469L46.112 31.9149Z" fill="#5D5FEF"/>
                        <path d="M47.83 20.782C50.0294 20.782 52.1794 21.4342 54.0081 22.6562C55.8368 23.8781 57.2621 25.615 58.1037 27.647C58.9453 29.679 59.1654 31.915 58.7361 34.0721C58.3069 36.2292 57.2476 38.2106 55.6923 39.7657C54.1369 41.3208 52.1553 42.3797 49.9981 42.8086C47.8409 43.2374 45.605 43.0169 43.5731 42.1749C41.5413 41.333 39.8047 39.9074 38.583 38.0785C37.3614 36.2495 36.7096 34.0994 36.71 31.9C36.7118 28.9515 37.884 26.1244 39.9691 24.0397C42.0542 21.955 44.8815 20.7833 47.83 20.782V20.782Z" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M43.188 63.5V48.921C43.188 48.3855 43.4008 47.872 43.7794 47.4933C44.158 47.1147 44.6716 46.902 45.207 46.902C45.7425 46.902 46.2561 47.1147 46.6347 47.4933C47.0133 47.872 47.226 48.3855 47.226 48.921V55.227C47.226 54.6719 47.4466 54.1395 47.8391 53.747C48.2316 53.3545 48.7639 53.134 49.319 53.134V53.134C49.8741 53.134 50.4065 53.3545 50.799 53.747C51.1915 54.1395 51.412 54.6719 51.412 55.227V55.978C51.412 55.421 51.6333 54.8869 52.0271 54.4931C52.4209 54.0992 52.9551 53.878 53.512 53.878C54.069 53.878 54.6031 54.0992 54.997 54.4931C55.3908 54.8869 55.612 55.421 55.612 55.978V57.178C55.612 56.6741 55.8122 56.1908 56.1685 55.8345C56.5249 55.4782 57.0081 55.278 57.512 55.278V55.278C58.016 55.278 58.4992 55.4782 58.8555 55.8345C59.2119 56.1908 59.412 56.6741 59.412 57.178V62.859C59.412 65.601 57.706 72.929 52.371 72.929C47.036 72.929 44.594 69.689 41.553 67.495C40.1 66.448 38.83 65.457 37.899 64.708C37.6855 64.5341 37.509 64.3192 37.3799 64.076C37.2509 63.8327 37.172 63.566 37.1478 63.2917C37.1237 63.0174 37.1548 62.741 37.2393 62.479C37.3239 62.2169 37.4601 61.9745 37.64 61.766C38.0102 61.3358 38.5328 61.0662 39.0978 61.0137C39.6628 60.9613 40.2261 61.1303 40.669 61.485L43.188 63.5Z" stroke="#5D5FEF" strokeWidth="1.5"/>
                        <path d="M79.105 19.3099C88.799 17.3639 94.905 14.5279 94.905 11.3719V46.562C94.905 49.718 88.794 52.5539 79.105 54.4999V19.3099Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M16.554 19.3099C6.86 17.3639 0.75 14.5279 0.75 11.3719V46.562C0.75 49.718 6.86 52.5539 16.55 54.4999L16.554 19.3099Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M0.75 46.789V11.372C0.75 5.51 21.846 0.75 47.83 0.75C73.814 0.75 94.91 5.51 94.91 11.372V46.789M37.033 36.273C30.1656 36.7509 23.3303 37.6119 16.559 38.852M79.11 38.852C72.2858 37.593 65.3926 36.7428 58.467 36.306L79.11 38.852Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M77.561 10.849C79.64 11.232 81.573 11.649 83.335 12.11M12.7 12.014C19.0965 10.5043 25.6053 9.51775 32.1619 9.06396L12.7 12.014ZM64.702 9.16396C67.796 9.43196 70.7329 9.77196 73.4729 10.175L64.702 9.16396Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M65.0161 16.903C67.8481 17.154 70.5461 17.465 73.0801 17.829M22.5791 17.829C25.5631 17.4 28.7791 17.045 32.1651 16.775L22.5791 17.829Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_381_490">
                        <rect width="95.66" height="73.676" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>


                     <h3 className=" text-lg lg:text-2xl font-title_bold mt-8">Metaverse Transactions</h3>
                 </div>
                 <div className="text-center">
                 <svg className=" inline-block" width="78" height="69" viewBox="0 0 78 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_381_501)">
                    <path d="M5.833 41.875H0.75V59.55H5.833V41.875Z" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M3.29199 41.875V35.592" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M3.29199 65.833V59.55" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M14.7051 35.068H9.62207V47.178H14.7051V35.068Z" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M12.1641 35.0679V30.7629" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M12.1641 51.483V47.178" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M41.321 45.428H36.238V57.537H41.321V45.428Z" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M38.7791 45.428V41.123" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M38.7791 61.843V57.538" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M67.8621 20.923H62.7791V38.546H67.8621V20.923Z" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M65.3201 20.923V14.658" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M65.3201 44.812V38.547" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M23.5769 46.26H18.4939V55.153H23.5769V46.26Z" fill="#5D5FEF"/>
                    <path d="M23.5769 46.26H18.4939V55.153H23.5769V46.26Z" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M21.0359 46.26V36.484" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M21.0359 58.314V55.153" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M76.8379 30.2729H71.7549V39.1659H76.8379V30.2729Z" fill="#5D5FEF"/>
                    <path d="M76.8379 30.2729H71.7549V39.1659H76.8379V30.2729Z" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M74.2959 39.166V48.942" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M74.2959 27.111V30.273" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M50.1931 34.524H45.1101V43.417H50.1931V34.524Z" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M47.6509 43.417V53.25" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M47.6509 31.363V34.524" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M32.449 56.62H27.366V63.694H32.449V56.62Z" fill="#5D5FEF"/>
                    <path d="M32.449 56.62H27.366V63.694H32.449V56.62Z" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M29.908 56.62V53.25" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M29.908 68.315V63.693" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M58.99 38.141H53.907V42.176H58.99V38.141Z" fill="#5D5FEF"/>
                    <path d="M58.99 38.141H53.907V42.176H58.99V38.141Z" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M56.448 38.141V36.219" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M56.448 44.812V42.176" stroke="#5D5FEF" strokeWidth="1.5"/>
                    <path d="M37.678 21.006C36.7952 21.0033 35.9263 20.7861 35.146 20.373C34.283 19.9346 33.5591 19.2646 33.0554 18.438C32.5517 17.6114 32.2881 16.6609 32.294 15.693V9.74695C32.2907 8.78266 32.5694 7.83844 33.0959 7.03054C33.6223 6.22264 34.3735 5.58633 35.257 5.19995C36.1397 4.79506 37.12 4.65191 38.0816 4.78751C39.0432 4.92311 39.9458 5.33176 40.682 5.96495L44.443 9.17295C45.0897 9.73028 45.5981 10.4301 45.9284 11.2173C46.2586 12.0045 46.4016 12.8576 46.3462 13.7094C46.2907 14.5613 46.0383 15.3887 45.6088 16.1264C45.1793 16.8642 44.5845 17.4921 43.871 17.961L40.676 20.086C39.7892 20.6828 38.7451 21.003 37.676 21.006H37.678ZM33.776 10.074V15.693C33.7715 16.3934 33.9621 17.0812 34.3265 17.6795C34.6909 18.2777 35.2146 18.7626 35.839 19.08C36.4617 19.4122 37.163 19.5685 37.8678 19.532C38.5726 19.4955 39.2541 19.2677 39.839 18.873L43.039 16.746C43.5642 16.4009 44.0022 15.9387 44.3185 15.3957C44.6348 14.8527 44.8209 14.2438 44.8621 13.6167C44.9033 12.9897 44.7985 12.3617 44.5559 11.782C44.3133 11.2023 43.9396 10.6868 43.464 10.276L39.709 7.07595C39.1885 6.6281 38.5502 6.33913 37.8702 6.24341C37.1902 6.14768 36.497 6.24922 35.873 6.53595C35.6628 6.63021 35.4619 6.74405 35.273 6.87595C36.114 6.80307 36.9504 7.0594 37.606 7.59095L42.243 11.322C42.5475 11.565 42.79 11.8768 42.9506 12.2317C43.1112 12.5866 43.1855 12.9745 43.1672 13.3637C43.149 13.7528 43.0388 14.1321 42.8456 14.4704C42.6525 14.8087 42.3819 15.0964 42.056 15.31L38.995 17.34C38.649 17.5695 38.2477 17.7017 37.833 17.7229C37.4183 17.744 37.0056 17.6532 36.638 17.46C36.2717 17.2699 35.9645 16.9828 35.7501 16.6302C35.5357 16.2775 35.4222 15.8727 35.422 15.46V9.83095L40.929 14.184C40.953 14.2021 40.9754 14.2222 40.996 14.244L41.227 14.091C41.3608 14.0033 41.4718 13.8852 41.5511 13.7463C41.6304 13.6075 41.6757 13.4518 41.6832 13.2921C41.6907 13.1324 41.6603 12.9731 41.5944 12.8275C41.5285 12.6818 41.429 12.5538 41.304 12.454L36.667 8.72295C36.4084 8.50988 36.094 8.37558 35.7613 8.33605C35.4285 8.29652 35.0914 8.35341 34.79 8.49995C34.4861 8.63491 34.2284 8.85605 34.0489 9.136C33.8694 9.41595 33.7759 9.74241 33.78 10.075L33.776 10.074ZM36.908 12.884V15.463C36.9075 15.6078 36.9473 15.75 37.0229 15.8736C37.0984 15.9972 37.2069 16.0974 37.336 16.163C37.465 16.2326 37.6106 16.2656 37.7569 16.2582C37.9033 16.2508 38.0448 16.2033 38.166 16.121L39.71 15.1L36.908 12.884Z" fill="#5D5FEF"/>
                    <path d="M38.7941 24.994C45.4889 24.994 50.9161 19.5668 50.9161 12.872C50.9161 6.1772 45.4889 0.75 38.7941 0.75C32.0993 0.75 26.6721 6.1772 26.6721 12.872C26.6721 19.5668 32.0993 24.994 38.7941 24.994Z" stroke="#5D5FEF" strokeWidth="1.5"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_381_501">
                    <rect width="77.588" height="68.315" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                     <h3 className=" text-lg lg:text-2xl font-title_bold mt-8">Traders gas fee</h3>
                 </div>




             </div>






             <div className="text-center  max-w-3xl mx-auto  -mb-2">
                <Image
                className=" inline-block"
                src="/planeta_arriba.png"
                width={797}
                height={130}
                quality={100}
                />

             </div>



         </section>



        </MainContent>

        <section className=" bg-dark   py-[10vh] lg:py-18 border-t border-t-light   border-b border-b-light border-opacity-10">
            <MainContent className="pb-24 !px-0">

                <h3 className=" text-2xl lg:text-5xl text-center mb-12">Fees Economic Approach</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto text-gray opacity-70 items-center justify-center px-8 lg:px-0">
                    <p>DISR Protocol understands the basic economy values of scarcity/offer/demand and rewards every user who helps the internal economy grow by creating a highly incentivizing distribution of fees collected by the technology partners.</p>
                    <p>Every fee collected from Payment Processing, Bot Server Requests, Metaverse Transactions and Traders Gas Fees, will be part of the same distribution rules</p>
                </div>

                <div className="bg-star bg-no-repeat bg-cover bg-center">
                    <div className=" text-center pt-24 pb-24">
                        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]  inline-flex justify-center items-center scale-50 lg:scale-75 mt-24 lg:mt-0"

                        >
                            <div className="-ml-10 -mt-6 z-10 relative">
                                <ApexChart series={series} options={options} type={options.chart.type} height={500} width={500} />
                            </div>
                            <div className="-ml-4 -mt-5 z-0 absolute w-full h-full flex justify-center items-center top-0 left-0">
                                <Logo className="w-24"/>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="grid grid-cols-3 lg:grid-cols-7 gap-6 mx-auto max-w-7xl ">


                    {feesEA.map((feesItem,i) =>(
                         <CardNumbers
                         number={feesItem.number}
                         title={feesItem.title}
                         color={feesItem.color}
                         key={i+1}
                         />
                    )) }

                </div>

             </MainContent>
         </section>
         <section className="bg-cover bg-no-repeat bg-top">
             <div className="text-center  max-w-3xl mx-auto">
                <Image
                className=" inline-block"
                src="/planeta_abajo.png"
                width={908}
                height={160}
                quality={100}
                />

             </div>

             <TokenProvider>
                <PointScored
                locale={locale}
                />
             </TokenProvider>


         </section>


             </AnimationPage>

        </>
    )
};


const CardNumbers = ({number,title,color})=>{

    const textColor = " text-[" + color + "] "

    return(

            <div className=" flex flex-col items-center  px-10 py-4 text-center">
                <h5 className={` ${textColor} text-2xl lg:text-4xl mb-3 font-semibold`} style={{color: color}}>{number}%</h5>
                <p className=" font-thin">{title}</p>
            </div>

    )

}