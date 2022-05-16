import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import HeroToken from './../components/tokenomics/HeroToken';
import Utility from './../components/tokenomics/Utility';
import Fea from './../components/tokenomics/Fea';
import TokenOverview from './../components/tokenomics/TokenOverview';
import Button from '../components/buttons';
import AnimationPage from "../components/AnimationPage";
export  async function getStaticProps({ locale }){
  return{
    props:{
      locale,
    }
  }
}

export default function FullPage({locale}) {
  return(
    <ReactFullpage


    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    scrollHorizontally = {true}  /* Because we are using the extension */
    scrollHorizontallyKey = {'YOUR KEY HERE'}

    render={({ state, fullpageApi,children }) => {




      return (
        <div  className=' bg-dark-dark'>
          <AnimationPage>
          <ReactFullpage.Wrapper>

            <SectionWrapper move={() => fullpageApi.moveSectionDown()} >

              <HeroToken>
                <Button onClick={() => fullpageApi.moveSectionDown()} variant="primary" size="sm">  {locale == 'en'  ? "READ MORE" :"LEER MÁS"}</Button>
              </HeroToken>

            </SectionWrapper>
            <SectionWrapper move={() => fullpageApi.moveSectionDown()} >
              <Utility/>
            </SectionWrapper>
            <SectionWrapper move={() => fullpageApi.moveSectionDown()} >
              <Fea/>
            </SectionWrapper>
            <SectionWrapper >
              <TokenOverview/>
            </SectionWrapper>

          </ReactFullpage.Wrapper>
          </AnimationPage>

        </div>



      );
    }}
  />
  )
};


export function SectionWrapper ({children,move}) {
  return(
    <div className="section relative">
     {children}
    {move && <ButtonDown move={move} />}
    </div>
  )
};



const ButtonDown = ({move})=> (
  <button className=' absolute bottom-[5vh]  right-10 rounded-full border border-light-light h-16 w-16 flex justify-center items-center' onClick={move}>
      <div className='flex justify-center items-center h-14 w-14 bg-dark-light hover:scale-110 hover:bg-primary transition-all  rounded-full border-4 border-dark'>
        <svg className=' w-6'  viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L8.5 8.5L16 1" stroke="#fff" strokeWidth="2"/>
        </svg>
      </div>
    </button>
)