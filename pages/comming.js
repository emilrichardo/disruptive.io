import Button from "../components/buttons"
import MainContent from "./../components/MainContent"
import Link from "next/link"
export  async function getStaticProps({ locale }){
    return{
      props:{
        locale,
      }
    }
  }

export default function CommingSoon({locale}) {

    return(
        <div className="bg-main bg-center  min-h-[840px] flex items-center">
        <MainContent>
            <div className="text-center">
            <svg className="inline-block w-24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 53.5 52"  xmlSpace="preserve">
                <g>
                    <path className="st0 fill-primary"   d="M26.8,0.6C12.7,0.6,1.4,12,1.4,26c0,14,11.4,25.4,25.4,25.4S52.1,40,52.1,26C52.1,12,40.8,0.6,26.8,0.6z
                        M28.7,47.5v-1.7c0-1.1-0.9-1.9-1.9-1.9s-1.9,0.9-1.9,1.9v1.7C14.5,46.5,6.2,38.2,5.3,27.9h1.7c1.1,0,1.9-0.9,1.9-1.9S8,24,6.9,24
                        H5.3C6.2,13.7,14.5,5.5,24.8,4.5v1.6c0,1.1,0.9,1.9,1.9,1.9s1.9-0.9,1.9-1.9V4.5C39,5.5,47.3,13.7,48.2,24h-1.6
                        c-1.1,0-1.9,0.9-1.9,1.9s0.9,1.9,1.9,1.9h1.7C47.3,38.2,39,46.5,28.7,47.5z"/>
                    <path className="st0" fill="#fff" d="M38.2,13.6L26.8,25.5c0,0,0,0-0.1,0c-0.1,0-0.3,0-0.4,0l-9.5-7.2c-0.6-0.5-1.5-0.4-2,0.3
                        c-0.5,0.6-0.4,1.5,0.3,2l9.5,7.2c0.1,1.1,1,2,2.1,2c1.2,0,2.2-1,2.2-2.2c0-0.1,0-0.1,0-0.2l11.3-11.9c0.5-0.6,0.5-1.5,0-2
                        C39.6,13,38.7,13.1,38.2,13.6z"/>
                </g>
            </svg>

                <h3 className="mt-8 mb-8 text-2xl lg:text-5xl">
                    {locale == 'en'
                    ? "Comming soon!"
                    : "¡Próximamente!"
                    }
                </h3>


            <Link href="/">
                <Button variant="primary" >
                    {locale == 'en'
                        ? "Go back home!"
                        : "¡Regresar a inicio!"
                        }
                </Button>
            </Link>

            </div>



        </MainContent>
        </div>
    )
};
