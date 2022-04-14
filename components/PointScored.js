import MainContent from "./MainContent";
import Image from "next/image";
import { useToken } from "../context/tokenContext";



export default function PointScored({locale}) {
    const {pointScored} = useToken();

    const founders = addPoint(pointScored.founders)
    const totalSupply = addPoint(pointScored.totalSupply)
    const pancakeSwapSupply = addPoint(pointScored.pancakeSwapSupply)
    const revolvingTreasuryFunds = addPoint(pointScored.revolvingTreasuryFunds)
    const community = (fomratComunity(pointScored.community))


    function addPoint(num) {
        let number = num.toString().replace(/\B(?=(\d{18})+(?!\d))/g, '.')
        let numberRound = Math.round(number)
        let numComma = numberRound.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        return numComma;
    }

    function fomratComunity(num){
        let number = num / 1000000000000000000
        let numberRound = Math.round(number)
        let numComma = numberRound.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        return numComma
    }




    /* const series = [44, 55, 67, 83]
    const options = {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    }


 */





    return(
    <>
      <div className="my-24 text-center mb-8">



                 <MainContent className="min-h-0">
                     <h4 className="text-4xl lg:text-6xl">{locale == 'en' ? "Points scored": "Puntos conseguidos"}</h4>
                     <h5 className="text-primary text-2xl lg:text-4xl font-title_bold my-4">{totalSupply}</h5>
                     <p className="text-gray text-sm">{locale == 'en' ? "Total Supply": " Suministro total:"}</p>
                 </MainContent>

             </div>
             <div>
             <MainContent className="py-24">
                 <div className=" grid grid-cols-1 lg:grid-cols-2">
                 <Image
                    className=" inline-block"
                    src="/bg-chart-02.svg"
                    width={536}
                    height={500}
                    quality={100}
                    />
                    <div>
                        <ul className="grid grid-cols-1 lg:grid-cols-2">
                            <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#727E84] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-2xl font-title_bold">{founders}</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Founders": "Fundadores"}</p>
                                </div>
                            </li>
                            <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#8F8FB2] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-2xl font-title_bold">{pancakeSwapSupply}</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Pancake Swap Supply": "Oferta de intercambio en PancakeSwap"}</p>
                                </div>
                            </li>
                            <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#606380] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-2xl font-title_bold">{revolvingTreasuryFunds}</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Revolving Treasury Funds": "Fondos rotatorios del Tesoro"}</p>
                                </div>
                            </li>
                            <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#6E7DA3] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-2xl font-title_bold">{community}</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Community": "Comunidad"}</p>
                                </div>
                            </li>
                            {/* <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#58516B] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-2xl font-title_bold">1,170,000</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Processing paid costs": "Gastos de trámites pagados"}</p>
                                </div>
                            </li> */}
                            {/* <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#8EA7FF] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-2xl font-title_bold">12,167,111</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Initial investors": "Inversores iniciales"}</p>
                                </div>
                            </li> */}
                            {/* <li className="flex items-center my-8">
                                <div className="rounded-full h-4 w-4 bg-[#DCB3EF] inline-block mr-4"></div>
                                <div>
                                    <h3 className=" text-2xl font-title_bold">7,000,000</h3>
                                    <p className="text-gray font-light text-sm">{locale == 'en' ? "Circulating": "En circulación"}</p>
                                </div>
                            </li> */}
                        </ul>
                    </div>

                 </div>

                </MainContent>
             </div>
    </>
    )
};
