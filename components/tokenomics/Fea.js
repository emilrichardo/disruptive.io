
import { useRouter } from 'next/router';
import MainContent from '../MainContent';
import Image from 'next/image';
export default function Fea(params) {
    const router = useRouter();
    const { locale } = router;

    const operations = locale == "en" ? "Operations" : "Operaciones";
    const development = locale == "en" ? "Development" : "Desarrollo";
    const founders = locale == "en" ? "Founders" : "Fundadores";
    const investors = locale == "en" ? "Investors" : "Inversores";
    const treasury = locale == "en" ? "Treasury" : "Tesorería";
    const burn = locale == "en" ? "Burn" : "Quemado";
    const feesEA = [
        {    "number":25,    "title":operations,    "color":"#73BCFF", "icon" : "/icon-tokenomic-01.png"   },
        {    "number":25,    "title":development,    "color":"#A5FFFF","icon" : "/icon-tokenomic-02.png"    },
        {    "number":10,    "title":founders,    "color":"#F3CB8F",  "icon" : "/icon-tokenomic-03.png"  },
        {    "number":10,    "title":investors,    "color":"#BEB8FF", "icon" : "/icon-tokenomic-04.png"   },
        {    "number":10,    "title":"Staking",    "color":"#C1FFAB", "icon" : "/icon-tokenomic-05.png"   },
        {    "number":10,    "title":treasury,    "color":"#fff", "icon" : "/icon-tokenomic-06.png"   },
        {    "number":10,    "title":burn,    "color":"#FFA1CE",  "icon" : "/icon-tokenomic-07.png"  }

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


    return(
        <section className=" bg-dark h-screen bg-star bg-no-repeat  bg-center bg-auto  border-t border-t-light   border-b border-b-light border-opacity-10 relative">
            <MainContent className="!px-0">

                <h3 className=" text-2xl lg:text-5xl text-center mt-[8vh] mb-4 lg:mb-12">{locale == 'en' ? "Fees Economic Approach" : "Enfoque económico de las tasas"}</h3>
                <div className=" text-sm lg:text-lg grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 max-w-6xl mx-auto text-gray opacity-70   justify-center px-8 lg:px-0 mb-4">

                    <p>
                        {locale == 'en'
                        ? "DISR Protocol understands the basic economy values of scarcity/offer/demand and rewards every user who helps the internal economy grow by creating a highly incentivizing distribution of fees collected by the technology partners."
                        : "El Protocolo DISR entiende los valores básicos de la economía de la escasez/oferta/demanda y recompensa para cada usuario que ayuda a que la economía interna crezca creando una distribución que incentiva las tasas recaudadas por los socios tecnológicos."
                        }
                    </p>

                    <p>
                    {locale == 'en'
                    ? "Every fee collected from Payment Processing, Bot Server Requests, Metaverse Transactions and Traders Gas Fees, will be part of the same distribution rules"
                    : "Todas las comisiones recaudadas por el Procesamiento de Pagos, las Solicitudes del Servidor de Bot, las Transacciones del Metaverso y las Tasas de Gas de los traders, formarán parte de las mismas reglas de distribución."}
                    </p>
                </div>

                <div className=" hidden lg:block">
                    <div className=" text-center">
                        <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]  inline-flex justify-center items-center    lg:mt-0"

                        >
                            <div className="-ml-10 -mt-6 z-10 relative">
                            </div>
                            <div className="-ml-4 -mt-5 z-0 absolute w-full h-full flex justify-center items-center top-0 left-0">

                            </div>
                        </div>
                    </div>

                </div>


                <div className='lg:absolute  bottom-[10vh] w-full left-0 right-0'>
                  <div className="grid grid-cols-4 px-4 lg:grid-cols-7 lg:gap-6 mx-auto max-w-7xl  ">
                      {feesEA.map((feesItem,i) =>(
                          <CardNumbers
                          number={feesItem.number}
                          title={feesItem.title}
                          color={feesItem.color}
                          key={i+1}
                          icon={<Image width={70} height={70}   src={feesItem.icon} />}
                          />
                      )) }
                  </div>

                </div>


             </MainContent>
         </section>
    )
};


const CardNumbers = ({number,title,color,icon})=>{

    const textColor = " text-[" + color + "] "

    return(

            <div className=" flex flex-col items-center  px-10 lg:py-4 text-center scale-75 lg:scale-100">
                <div className='responsive w-14 h-14 lg:w-24 lg:h-24 mb-4 rounded-full border-2 flex justify-center items-center'
                style={{borderColor:color}}
                >
                    {icon}

                </div>
                <h5 className={` ${textColor} text-2xl lg:text-4xl lg:mb-3  `}  >{number}%</h5>
                <p className=" font-title text-sm lg:text-lg">{title}</p>
            </div>

    )

}