
import Head from "next/head";
import AnimationPage from "../components/AnimationPage";

import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import TokenWidget from "../components/tokenwidget/";
import { TokenProvider } from "../context/tokenContext";


export  async function getStaticProps({ locale }){
  return{
    props:{
      locale,
    }
  }
}



export default function Home({locale}) {


  return (
    <>

      <Head>
        <title>Home  {" - " + process.env.projectName}</title>
      </Head>

      <Hero/>
        <MainContent className="!py-0 min-h-0">
          <div className="">
            <div className="left-0 w-full absolute max-w-3xl   bottom-0 py-8 box-border  px-8 lg:px-32">
            <TokenProvider>
                <TokenWidget
                  contract="0xd70a9D1c9fDd3D8DD2fb672bB399F7bcA61666bD"
                  linkBsc="https://bscscan.com/token/0xd70a9D1c9fDd3D8DD2fb672bB399F7bcA61666bD"
                />
              </TokenProvider>

            <div className="mt-7 hidden">
              <a href="/" target="_blank" className=" inline-block opacity-40 hover:opacity-100 hover:scale-125 transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.673 0C5.22949 0 0 5.19146 0 11.5881C0 17.9847 5.22949 23.1762 11.673 23.1762C18.1165 23.1762 23.346 17.9847 23.346 11.5881C23.346 5.19146 18.1165 0 11.673 0ZM17.883 12.9323C18.5834 12.6542 19.2838 12.2834 19.8441 11.7735L19.7974 11.8198L19.7507 11.8662C19.3771 12.1907 19.0036 12.5151 18.5834 12.7469C17.5095 13.3495 16.3422 13.7666 15.1282 13.9984C14.3344 14.1838 13.494 14.1375 12.7469 13.8593C12.3734 13.7203 12.0465 13.5349 11.8131 13.2104C12.6068 13.6276 13.494 13.813 14.3811 13.7203C15.5951 13.7203 16.8091 13.4422 17.883 12.9323ZM17.1359 11.0319C17.1359 10.8001 17.3227 10.5683 17.5562 10.5683C17.7896 10.5683 18.0231 10.7537 18.0231 10.9855C18.0231 11.2173 17.8363 11.449 17.5562 11.449C17.3694 11.4954 17.1826 11.2636 17.1359 11.0319ZM10.1321 11.0319C8.96485 11.0319 8.03101 10.1048 8.03101 8.946C8.03101 7.78719 8.96485 6.86014 10.1321 6.86014C11.2994 6.86014 12.2333 7.78719 12.2333 8.946C12.2333 10.1048 11.2994 11.0319 10.1321 11.0319ZM15.9686 21.4148C15.2683 21.7392 14.5212 21.971 13.7741 22.1101C13.7274 22.1101 13.6807 22.1101 13.634 22.1564C13.494 21.044 13.6807 19.8851 14.1943 18.8654C14.8013 17.6139 15.5484 16.4551 16.4822 15.4353C17.276 14.5546 18.1165 13.7666 18.9569 12.9323C19.2838 12.6078 19.6106 12.237 19.8441 11.8662L19.8908 11.8198C19.9841 11.6808 20.0775 11.4954 20.1242 11.31C20.5911 10.3829 20.2643 9.31682 19.4238 8.76059C18.7235 8.29707 17.9297 7.92625 17.0892 7.74084C16.2955 7.50908 15.5017 7.23096 14.7546 6.9065C14.6146 6.44297 14.241 6.0258 13.7274 5.88675C13.0737 5.70134 12.42 5.70134 11.7664 5.88675C11.1127 5.74769 10.4123 5.65498 9.75861 5.70134C9.01154 5.74769 8.31116 5.9331 7.65747 6.25756C6.81702 6.53568 6.06995 6.9992 5.46295 7.64813C4.80927 8.34342 4.38904 9.22411 4.24896 10.1512C4.10889 10.9391 4.10889 11.7735 4.0155 12.6078C3.92212 14.3692 3.54858 16.0843 2.84821 17.7066C2.66144 17.5212 2.47467 17.2431 2.38129 17.0577C1.68091 15.8988 1.21399 14.601 1.02722 13.2104C0.933838 12.6078 0.887146 12.0053 0.887146 11.449C0.98053 6.81379 3.96881 2.78114 8.35785 1.39057C9.61853 0.973399 10.9259 0.78799 12.2333 0.880694C15.0815 1.01975 17.7429 2.27126 19.6573 4.40347C21.1047 5.97945 22.0386 7.92625 22.3187 10.0121C22.6456 12.1907 22.3187 14.4619 21.2915 16.4087C20.1709 18.68 18.2565 20.4414 15.9686 21.4148Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.1787 7.55542C9.38495 7.55542 8.68457 8.158 8.68457 8.99234V9.03869C8.68457 9.82668 9.33826 10.4756 10.132 10.4756H10.1787C10.9725 10.4756 11.6262 9.82668 11.6262 8.99234C11.5795 8.20435 10.9725 7.55542 10.1787 7.55542Z" fill="white"/>
                </svg>
              </a>
              <a href="/" target="_blank" className="ml-4 inline-block opacity-40 hover:opacity-100 hover:scale-125 transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.6853 0C5.23502 0 0 5.19146 0 11.5881C0 17.9847 5.23502 23.1762 11.6853 23.1762C18.1356 23.1762 23.3706 17.9847 23.3706 11.5881C23.3706 5.19146 18.1356 0 11.6853 0ZM10.1428 4.68159C10.9374 3.80089 12.2462 3.75454 13.1343 4.49618C13.181 4.54253 13.2745 4.63523 13.3212 4.68159C13.8821 5.28417 14.1626 6.07215 14.1158 6.9065C14.0224 8.66788 12.8071 9.68764 11.732 9.68764C10.657 9.68764 9.39498 8.48248 9.34824 6.9065C9.25476 6.11851 9.53521 5.28417 10.1428 4.68159ZM17.8084 15.8988C17.2008 16.5478 16.3594 16.8722 15.5181 16.9186C14.7235 16.9186 13.9289 16.6405 13.2745 16.2233L12.7136 15.8061L13.5082 15.0182L13.9756 15.3426C14.443 15.6671 15.0039 15.8061 15.5648 15.8525C16.1257 15.8525 16.6399 15.6207 17.0605 15.2036C17.3877 14.8327 17.528 14.3229 17.4345 13.813C17.2942 12.2834 15.4246 12.237 15.4246 12.237C14.5365 12.2834 13.6952 12.7005 13.0875 13.3495C12.6201 13.813 12.2929 14.1375 12.0125 14.4619C11.732 14.7864 11.4049 15.0645 10.9374 15.5744C10.1428 16.4551 9.02105 16.965 7.85252 17.0113H7.80578C7.01118 17.0113 4.90783 16.5478 4.72086 14.4619C4.62738 13.6739 4.86109 12.8396 5.37524 12.237C5.98288 11.6344 6.82422 11.2636 7.66556 11.2173C8.5069 11.2173 9.3015 11.4954 9.95588 11.9589L10.47 12.3297L9.62869 13.1177L9.25476 12.8396C8.78735 12.5151 8.22645 12.3297 7.61882 12.3297C7.05792 12.3297 6.54377 12.5615 6.1231 12.9787C5.79591 13.3495 5.65569 13.8593 5.74917 14.3692C5.88939 15.8988 7.75904 15.8988 7.75904 15.8988C8.64713 15.8525 9.48847 15.4353 10.0961 14.7864C10.5635 14.3229 10.8907 13.9984 11.1712 13.6739C11.4516 13.3495 11.7788 13.0714 12.2462 12.5615C13.0408 11.6808 14.1626 11.1709 15.3311 11.1246C16.079 11.1246 18.2758 11.4954 18.5095 13.6739C18.603 14.4619 18.3693 15.2499 17.8084 15.8988Z" fill="white"/>
                  <path d="M11.6853 8.66785C12.1995 8.66785 12.9473 8.06527 12.9941 6.86011C13.0408 6.35023 12.8538 5.79401 12.4799 5.42319C12.2929 5.19143 11.9658 5.05237 11.6386 5.05237C11.3114 5.05237 11.0309 5.19143 10.844 5.42319C10.47 5.84036 10.2831 6.35023 10.3298 6.90646C10.4233 7.92621 11.2646 8.66785 11.6853 8.66785Z" fill="white"/>
                </svg>
              </a>
              <a href="/" target="_blank" className="ml-4 inline-block opacity-40 hover:opacity-100 hover:scale-125 transition-all">
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.8172 11.5417C22.826 5.21556 17.7347 0.0644297 11.409 0C5.06058 0.0542322 -0.044667 5.23967 0.000294716 11.5881C-0.0363236 17.9332 5.06382 23.114 11.409 23.1762C14.294 23.1785 17.0691 22.0683 19.1568 20.077C19.5777 19.6789 19.5962 19.0146 19.198 18.5933C18.8096 18.1826 18.1658 18.1534 17.7416 18.5275L17.7194 18.5497C14.0242 22.06 8.18287 21.9103 4.67214 18.2146C4.58778 18.1256 4.50528 18.0352 4.42462 17.9434L9.29764 10.1284V13.7439C9.29764 15.4733 9.97161 16.0347 10.5329 16.1918C11.0943 16.3489 11.9476 16.2381 12.8686 14.7771L15.5408 10.4427C15.6127 10.3162 15.6952 10.1957 15.7879 10.0835V12.2834C15.7879 13.9001 16.4391 15.2036 17.5623 15.8316C18.6172 16.4059 19.9031 16.3545 20.9084 15.6967C22.2466 14.778 22.9781 13.2035 22.8172 11.5881V11.5417ZM19.853 13.8561H19.8507C19.485 14.1059 19.0136 14.1402 18.6154 13.946C18.1662 13.6767 17.8965 13.0704 17.8965 12.2393V9.70154C17.8965 8.48896 17.4251 7.6129 16.6167 7.38856C15.2465 6.98437 14.2138 8.66881 13.8318 9.29735L11.409 13.1826V8.39904C11.3863 7.29864 11.027 6.64739 10.3531 6.44529C9.90393 6.3104 9.23043 6.37808 8.57918 7.36585L3.16662 16.0347C2.44584 14.6631 2.06807 13.1372 2.06668 11.5881C2.03609 6.39384 6.21475 2.15492 11.409 2.11088C16.6028 2.15492 20.7814 6.3943 20.7508 11.5881V11.6344C20.7963 12.6435 20.4815 13.4519 19.853 13.8561Z" fill="white"/>
                </svg>
              </a>
              <a href="https://pancakeswap.finance/info/token/0xd70a9d1c9fdd3d8dd2fb672bb399f7bca61666bd" target="_blank" className="ml-4 inline-block opacity-40 hover:opacity-100 hover:scale-125 transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.4417 8.06455L19.2995 3.61514C19.3471 3.42975 19.3471 3.29071 19.3471 3.10531C19.3471 1.43679 17.9652 0.046348 16.2497 0C14.5342 0 13.1046 1.34409 13.0569 3.01262V6.7668C12.628 6.72046 12.1992 6.72046 11.7703 6.72046C11.3414 6.72046 10.8649 6.72046 10.436 6.7668V3.05897C10.436 2.87357 10.436 2.68818 10.3884 2.54914C10.1024 0.880612 8.43458 -0.23174 6.71907 0.092696C5.00356 0.370784 3.85989 1.99296 4.19346 3.66149L5.05122 8.1109C2.19204 9.31594 0 11.448 0 14.1825V15.8047C0 18.0294 1.5249 19.8833 3.62163 21.1347C6.09958 22.5251 8.91111 23.2203 11.7703 23.174C14.6295 23.2203 17.441 22.5251 19.9189 21.1347C22.0157 19.8833 23.5406 18.0294 23.5406 15.8047V14.1825C23.5882 11.448 21.3962 9.31594 18.4417 8.06455ZM22.6352 15.8047C22.6352 19.3735 17.7746 22.247 11.8179 22.247C5.86132 22.247 0.95306 19.3735 0.95306 15.8047V14.1825C0.95306 11.8651 3.04979 9.82577 6.14723 8.66707L5.19418 3.42975C5.14652 3.29071 5.14652 3.15166 5.14652 3.05897C5.14652 1.90027 6.09958 0.92696 7.33856 0.92696C8.57754 0.92696 9.5306 1.85392 9.5306 3.05897V7.87916C9.86417 7.83281 10.1501 7.78646 10.4837 7.78646C10.9125 7.74011 11.3414 7.74011 11.8179 7.74011C12.2468 7.74011 12.6757 7.74011 13.1046 7.78646C13.4381 7.78646 13.7717 7.83281 14.0576 7.87916V3.05897C14.0576 2.91992 14.0576 2.78088 14.1053 2.68818C14.3435 1.52948 15.4872 0.787916 16.6309 0.973307C17.7746 1.1587 18.5847 2.3174 18.3464 3.42975L17.3457 8.62072C20.4908 9.73308 22.5875 11.8187 22.5875 14.1361V15.8047H22.6352Z" fill="white"/>
                  <path d="M7.57707 11.9578C6.90993 11.9578 6.38574 12.7457 6.38574 13.719C6.38574 14.6923 6.90993 15.4802 7.57707 15.4802C8.24421 15.4802 8.76839 14.6923 8.76839 13.719C8.76839 12.7457 8.24421 11.9578 7.57707 11.9578Z" fill="white"/>
                  <path d="M15.8686 11.9578C15.2014 11.9578 14.6772 12.7457 14.6772 13.719C14.6772 14.6923 15.2014 15.4802 15.8686 15.4802C16.5357 15.4802 17.0599 14.6923 17.0599 13.719C17.1075 12.7457 16.5357 11.9578 15.8686 11.9578Z" fill="white"/>
                </svg>
              </a>

            </div>
          </div>

          </div>
        </MainContent>

   </>
  )
}
