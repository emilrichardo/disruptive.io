import MainContent from "../MainContent";
import Image from "next/image";
import { useToken } from "../../context/tokenContext";
import RadialBars from "../apexchart";
import CopyClipboard from "./../buttons/CopyClipboard";



export default function PointScored({locale}) {
    const {pointScored} = useToken();

    const founders = addPoint(pointScored.founders)
    const totalSupply = addPoint(pointScored.totalSupply)
    const pancakeSwapSupply = addPoint(pointScored.pancakeSwapSupply)
    const revolvingTreasuryFunds = addPoint(pointScored.revolvingTreasuryFunds)
    const community = (fomratComunity(pointScored.community))
    const circulation = (fomratComunity(pointScored.circulation))
    const investors = (fomratComunity(pointScored.investors))




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

    const series = [100, 48, 44, 55, 67, 83]
    const options =  {
        chart: {
          height: 300,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            track: {
              background: '#3D3D3D',
              margin: '15px',
            },
            offsetY: 0,
            startAngle: 0,
            endAngle:358,

            hollow: {
              margin: 0,
              size: '30px',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            }
          }
        },
        colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        labels: ['Founders', 'Messenger', 'Facebook', 'LinkedIn','Facebook', 'LinkedIn'],
        legend: {
          show: false,

          offsetX: 18,
          offsetY: 6,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size:8
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
            vertical: 5
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
                show: false
            }
          }
        }]
      }






    return(
    <section>
      <div className="text-center mb-8">




                 <MainContent className="min-h-0 !pt-4">
                    <h3 className="text-center text-xl lg:text-5xl">{locale == 'en' ? "Real time Token Overview": "Vista previa en tiempo real de DISR Tokens"}</h3>


                    <div className="lg:inline-flex  mx-auto my-4">
                        <div className=" text-center lg:text-right lg:border-r lg:border-r-light lg:pr-7">
                            <h4 className=" text-xl lg:text-4xl text-primary font-title_bold">{totalSupply}</h4>
                            <p className=" text-gray">Total Supply</p>
                        </div>
                        <div className=" border-b border-b-light-light w-14 mx-auto mt-4 lg:hidden"></div>
                        <div className="mt-4 lg:mt-0 text-left flex lg:pl-8 items-center">
                            <svg className="hidden   mr-4 lg:inline-block" width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6719 6.51114C16.277 6.73576 15.8244 6.83823 15.3712 6.80559C14.9181 6.77295 14.4848 6.60666 14.1262 6.32775C13.7676 6.04884 13.4998 5.66985 13.3566 5.23871C13.2134 4.80757 13.2013 4.34364 13.3218 3.90561C13.4422 3.46758 13.6899 3.07513 14.0335 2.77788C14.3771 2.48063 14.8011 2.29195 15.2519 2.2357C15.7027 2.17944 16.16 2.25814 16.5661 2.46185C16.9722 2.66555 17.3087 2.9851 17.5331 3.38009C17.834 3.90954 17.9123 4.53679 17.7508 5.12393C17.5892 5.71108 17.2012 6.21005 16.6719 6.51114Z" stroke="#5D5FEF" strokeWidth="2" strokeMiterlimit="10"/>
                                <path d="M35.044 2.82489C29.35 0.776048 23.0891 0.974606 17.5364 3.38013" stroke="#5D5FEF" strokeWidth="2"/>
                                <path d="M5.59345 24.8337C5.59014 25.288 5.45222 25.731 5.19711 26.1069C4.942 26.4827 4.58117 26.7745 4.16025 26.9453C3.73933 27.116 3.27721 27.1582 2.83235 27.0663C2.38748 26.9745 1.97984 26.7528 1.66097 26.4293C1.34211 26.1057 1.12634 25.6949 1.04095 25.2488C0.955556 24.8026 1.00438 24.3412 1.18125 23.9228C1.35811 23.5043 1.65508 23.1478 2.03459 22.8982C2.4141 22.6485 2.85911 22.517 3.31335 22.5203C3.61496 22.5225 3.91319 22.5841 4.19102 22.7015C4.46884 22.8189 4.72081 22.99 4.93254 23.2048C5.14426 23.4196 5.31161 23.674 5.42501 23.9535C5.53841 24.233 5.59564 24.5321 5.59345 24.8337Z" stroke="#5D5FEF" strokeWidth="2" strokeMiterlimit="10"/>
                                <path d="M11.5867 7.07959C6.96479 10.9863 4.00606 16.5081 3.31323 22.5201" stroke="#5D5FEF" strokeWidth="2"/>
                                <path d="M15.922 43.5887C16.3137 43.8187 16.6284 44.1598 16.8263 44.5686C17.0241 44.9775 17.0964 45.4359 17.0337 45.8858C16.9711 46.3357 16.7765 46.7569 16.4745 47.0962C16.1725 47.4355 15.7767 47.6777 15.337 47.792C14.8974 47.9064 14.4338 47.8878 14.0047 47.7386C13.5757 47.5894 13.2005 47.3164 12.9266 46.954C12.6527 46.5916 12.4924 46.1562 12.466 45.7027C12.4396 45.2492 12.5483 44.7981 12.7783 44.4064C12.931 44.1462 13.1335 43.9188 13.3741 43.7369C13.6148 43.555 13.8889 43.4223 14.1808 43.3464C14.4727 43.2705 14.7767 43.2528 15.0755 43.2944C15.3742 43.336 15.6619 43.436 15.922 43.5887Z" stroke="#5D5FEF" strokeWidth="2" strokeMiterlimit="10"/>
                                <path d="M3.54297 29.5212C4.61518 35.4774 7.91789 40.8006 12.7782 44.4065" stroke="#5D5FEF" strokeWidth="2"/>
                                <path d="M37.3281 44.0218C37.723 43.7972 38.1757 43.6947 38.6288 43.7274C39.0819 43.76 39.5152 43.9263 39.8738 44.2052C40.2324 44.4841 40.5002 44.8631 40.6434 45.2943C40.7866 45.7254 40.7987 46.1893 40.6783 46.6274C40.5578 47.0654 40.3101 47.4578 39.9665 47.7551C39.6229 48.0523 39.199 48.241 38.7481 48.2973C38.2973 48.3535 37.84 48.2748 37.4339 48.0711C37.0278 47.8674 36.6913 47.5479 36.4669 47.1529C36.166 46.6234 36.0877 45.9962 36.2493 45.409C36.4108 44.8219 36.7988 44.3229 37.3281 44.0218Z" stroke="#5D5FEF" strokeWidth="2" strokeMiterlimit="10"/>
                                <path d="M18.9561 47.7086C24.6504 49.7579 30.9119 49.5591 36.4648 47.1528" stroke="#5D5FEF" strokeWidth="2"/>
                                <path d="M48.4066 25.7C48.4099 25.2457 48.5478 24.8027 48.8029 24.4268C49.058 24.051 49.4188 23.7592 49.8398 23.5884C50.2607 23.4176 50.7228 23.3755 51.1677 23.4674C51.6125 23.5592 52.0202 23.7809 52.339 24.1044C52.6579 24.428 52.8737 24.8388 52.9591 25.2849C53.0444 25.7311 52.9956 26.1925 52.8188 26.6109C52.6419 27.0293 52.3449 27.3859 51.9654 27.6355C51.5859 27.8852 51.1409 28.0167 50.6867 28.0134C50.385 28.0112 50.0868 27.9496 49.809 27.8322C49.5312 27.7147 49.2792 27.5437 49.0675 27.3289C48.8557 27.1141 48.6884 26.8597 48.575 26.5802C48.4616 26.3007 48.4044 26.0016 48.4066 25.7Z" stroke="#5D5FEF" strokeWidth="2" strokeMiterlimit="10"/>
                                <path d="M42.4133 43.4539C47.0351 39.5471 49.9938 34.0254 50.6868 28.0134" stroke="#5D5FEF" strokeWidth="2"/>
                                <path d="M38.078 6.94453C37.6864 6.71434 37.3718 6.37319 37.1741 5.96421C36.9763 5.55523 36.9043 5.0968 36.9671 4.6469C37.0299 4.19699 37.2248 3.77581 37.527 3.43663C37.8291 3.09745 38.2251 2.8555 38.6648 2.74138C39.1045 2.62726 39.5682 2.64609 39.9972 2.7955C40.4262 2.9449 40.8013 3.21817 41.0749 3.58074C41.3486 3.94331 41.5087 4.3789 41.5348 4.83242C41.5609 5.28594 41.4519 5.73702 41.2217 6.12861C40.913 6.65365 40.4084 7.03456 39.8188 7.18757C39.2293 7.34059 38.6031 7.25316 38.078 6.94453V6.94453Z" stroke="#5D5FEF" strokeWidth="2" strokeMiterlimit="10"/>
                                <path d="M50.4569 21.0119C49.384 15.0566 46.0814 9.73434 41.2217 6.12891" stroke="#5D5FEF" strokeWidth="2"/>
                                <path d="M27 23.7012C29.1665 23.7012 30.9229 21.9449 30.9229 19.7783C30.9229 17.6118 29.1665 15.8555 27 15.8555C24.8335 15.8555 23.0771 17.6118 23.0771 19.7783C23.0771 21.9449 24.8335 23.7012 27 23.7012Z" stroke="#5D5FEF" strokeWidth="2"/>
                                <path d="M18.5488 32.5194C18.9777 27.5705 22.6009 23.6987 26.9997 23.6987C31.3986 23.6987 35.0223 27.5705 35.4512 32.5194C32.8692 33.9602 29.9564 34.7039 26.9997 34.6772C24.0432 34.7038 21.1307 33.9601 18.5488 32.5194V32.5194Z" stroke="#5D5FEF" strokeWidth="2"/>
                                <path d="M17.527 19.1255C18.0333 19.1255 18.5282 19.2756 18.9491 19.5569C19.3701 19.8381 19.6982 20.2379 19.8919 20.7057C20.0856 21.1734 20.1363 21.6881 20.0376 22.1846C19.9388 22.6811 19.695 23.1372 19.337 23.4952C18.979 23.8532 18.5229 24.097 18.0264 24.1958C17.5299 24.2945 17.0152 24.2438 16.5474 24.0501C16.0797 23.8564 15.6799 23.5283 15.3987 23.1073C15.1174 22.6864 14.9673 22.1915 14.9673 21.6852C14.9674 21.0064 15.2372 20.3554 15.7172 19.8754C16.1972 19.3954 16.8482 19.1256 17.527 19.1255V19.1255Z" stroke="#5D5FEF" strokeWidth="2"/>
                                <path d="M36.4733 19.1255C35.967 19.1255 35.4721 19.2756 35.0512 19.5569C34.6303 19.8381 34.3022 20.2379 34.1084 20.7057C33.9147 21.1734 33.864 21.6881 33.9628 22.1846C34.0615 22.6811 34.3053 23.1372 34.6633 23.4952C35.0213 23.8532 35.4774 24.097 35.9739 24.1958C36.4705 24.2945 36.9851 24.2438 37.4529 24.0501C37.9206 23.8564 38.3204 23.5283 38.6016 23.1073C38.8829 22.6864 39.033 22.1915 39.033 21.6852C39.0329 21.0064 38.7632 20.3554 38.2831 19.8754C37.8031 19.3954 37.1521 19.1256 36.4733 19.1255V19.1255Z" stroke="#5D5FEF" strokeWidth="2"/>
                                <path d="M18.9422 31.3249C18.4725 31.3803 17.9999 31.4081 17.5269 31.4081C15.5983 31.425 13.6986 30.9396 12.0146 29.9996C12.2943 26.7704 14.6559 24.2451 17.5269 24.2451C18.3674 24.2613 19.1919 24.4782 19.9317 24.8777C20.6714 25.2772 21.3049 25.8478 21.7793 26.5419" stroke="#5D5FEF" strokeWidth="2"/>
                                <path d="M35.0579 31.3249C35.5276 31.3803 36.0002 31.4081 36.4732 31.4081C38.4017 31.425 40.3014 30.9396 41.9854 29.9996C41.7058 26.7704 39.3442 24.2451 36.4732 24.2451C35.6326 24.2613 34.808 24.4783 34.0682 24.8778C33.3284 25.2773 32.6948 25.8478 32.2202 26.5419" stroke="#5D5FEF" strokeWidth="2"/>
                            </svg>

                            <div className="mx-auto text-center lg:text-left">
                                <h5 className=" font-title_bold text-lg">{locale == 'en' ? "Community": "Comunidad"}</h5>
                                <h4 className=" font-title_bold text-lg lg:text-2xl">{community}</h4>
                            </div>

                        </div>

                    </div>

                    <div className=" text-center lg:text-left mx-auto max-w-md">
                      <CopyClipboard adress="0xd70a9d1c9fdd3d8dd2fb672bb399f7bca61666bd"/>

                    </div>

                    <div className="hidden lg:flex justify-center text-center mb-0 scale-75">
                         <RadialBars series={series} options={options} type="radialBar" height={400} width={400}/>
                     </div>



                 </MainContent>

             </div>
             <div className=" absolute w-full left-0 bottom-0">
             <MainContent className="!py-0">
                 <div className="pt-24">


                    <div >
                        <ul className="grid grid-cols-2 lg:grid-cols-4 text-center">
                            <li className="flex flex-col items-center  mx-auto   lg:my-8 max-w-[140px]">
                                <svg   className="scale-50 lg:scale-100"  width="61" height="78" viewBox="0 0 61 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_382_566)">
                                <path d="M45.3262 38.1C45.3128 40.4065 44.6165 42.6574 43.3253 44.5687C42.0341 46.48 40.2057 47.9661 38.0709 48.8395C35.9361 49.7129 33.5904 49.9345 31.3298 49.4763C29.0691 49.018 26.9949 47.9006 25.3686 46.2649C23.7423 44.6291 22.6369 42.5484 22.1919 40.2852C21.7468 38.0219 21.982 35.6776 22.8677 33.5478C23.7535 31.4181 25.2502 29.5984 27.1689 28.3183C29.0877 27.0382 31.3426 26.355 33.6492 26.355C36.7548 26.3653 39.7292 27.6082 41.9187 29.8105C44.1083 32.0129 45.3339 34.9944 45.3262 38.1V38.1Z" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="square"/>
                                <path d="M32.506 46.4269C31.6016 46.4246 30.7113 46.2022 29.912 45.7789C29.0285 45.3299 28.2874 44.6438 27.7717 43.7975C27.256 42.9511 26.986 41.9779 26.992 40.9869V34.8999C26.9885 33.9125 27.2739 32.9456 27.813 32.1183C28.3521 31.291 29.1213 30.6395 30.026 30.2439C30.93 29.8298 31.9338 29.6836 32.9183 29.8225C33.9029 29.9615 34.827 30.3798 35.581 31.0279L39.432 34.3119C40.0943 34.8826 40.6151 35.5992 40.9534 36.4054C41.2917 37.2115 41.4382 38.0852 41.3815 38.9576C41.3248 39.83 41.0664 40.6774 40.6266 41.433C40.1868 42.1885 39.5776 42.8317 38.847 43.3119L35.575 45.4889C34.6678 46.0995 33.5996 46.427 32.506 46.4299V46.4269ZM28.513 35.2329V40.9869C28.5084 41.7043 28.7038 42.4088 29.0772 43.0213C29.4506 43.6339 29.9873 44.1303 30.627 44.4549C31.265 44.7962 31.984 44.9569 32.7065 44.9195C33.4291 44.8821 34.1277 44.6482 34.727 44.2429L38 42.0649C38.5378 41.7116 38.9863 41.2383 39.3102 40.6823C39.6342 40.1263 39.8247 39.5028 39.8669 38.8607C39.909 38.2186 39.8017 37.5755 39.5532 36.9819C39.3048 36.3883 38.922 35.8605 38.435 35.4399L34.59 32.1599C34.0568 31.7013 33.4031 31.4054 32.7066 31.3074C32.0101 31.2094 31.3002 31.3133 30.661 31.6069C30.4457 31.7036 30.2398 31.8201 30.046 31.9549C30.9073 31.8811 31.7638 32.1434 32.436 32.6869L37.184 36.5079C37.4957 36.7569 37.7439 37.0761 37.9084 37.4395C38.0729 37.8029 38.1489 38.2002 38.1303 38.5986C38.1116 38.9971 37.9989 39.3854 37.8012 39.7319C37.6035 40.0784 37.3266 40.3731 36.993 40.5919L33.858 42.6709C33.5035 42.9056 33.0924 43.0408 32.6677 43.0623C32.2431 43.0837 31.8204 42.9907 31.444 42.7929C31.0698 42.5985 30.756 42.3053 30.5367 41.9451C30.3174 41.5849 30.201 41.1716 30.2 40.7499V34.9839L35.839 39.4409C35.8634 39.46 35.8865 39.4807 35.908 39.5029L36.145 39.3469C36.2819 39.257 36.3956 39.1359 36.4767 38.9936C36.5578 38.8514 36.6041 38.6919 36.6117 38.5283C36.6193 38.3647 36.588 38.2016 36.5205 38.0524C36.4529 37.9032 36.351 37.7721 36.223 37.6699L31.47 33.8499C31.2054 33.6314 30.8835 33.4936 30.5428 33.4529C30.2021 33.4121 29.8568 33.4701 29.548 33.6199C29.2373 33.7588 28.9738 33.9855 28.7899 34.272C28.6061 34.5585 28.5099 34.8925 28.513 35.2329ZM31.713 38.1089V40.7499C31.712 40.8986 31.7524 41.0447 31.8298 41.1717C31.9072 41.2987 32.0184 41.4016 32.151 41.4689C32.2831 41.5402 32.4322 41.5739 32.5821 41.5663C32.7319 41.5587 32.8769 41.5101 33.001 41.4259L34.582 40.3769L31.713 38.1089Z" fill="#5D5FEF"/>
                                <path d="M13.3931 52.326C13.2931 52.105 12.4631 50.654 12.3761 50.426C11.6948 48.6432 11.4274 46.729 11.594 44.8278C11.7607 42.9266 12.357 41.088 13.3381 39.451L27.4631 16.5H39.8361L53.9611 39.454C55.3776 41.8025 55.981 44.5522 55.6781 47.278" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M39.8172 11.8311H27.4822V16.4991H39.8172V11.8311Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M27.4671 11.831C27.4671 11.831 24.8441 8.38203 23.0881 6.07103C22.6421 5.48497 22.4 4.76905 22.3989 4.03254C22.3978 3.29604 22.6378 2.57941 23.0821 1.99203V1.99203C23.5125 1.4221 24.1251 1.01678 24.818 0.843567C25.5109 0.670351 26.2422 0.739688 26.8901 1.04003L31.5511 3.20003C32.209 3.50582 32.9257 3.66425 33.6511 3.66425C34.3766 3.66425 35.0933 3.50582 35.7511 3.20003L40.4091 1.04003C41.057 0.739582 41.7882 0.670088 42.481 0.84312C43.1739 1.01615 43.7866 1.42127 44.2171 1.99103V1.99103C44.661 2.57861 44.9006 3.29516 44.8995 4.03154C44.8985 4.76792 44.6567 5.48377 44.2111 6.07003L39.8311 11.83L27.4671 11.831Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.323 58.217L17.823 54.067C19.4571 53.1628 21.3118 52.7343 23.177 52.83L27.577 53.055C28.71 53.1128 29.8168 53.4172 30.82 53.947C32.2139 54.6821 33.7337 55.1482 35.3 55.321L40.678 55.911C41.0332 55.9508 41.3769 56.0607 41.6893 56.2343C42.0017 56.4079 42.2766 56.6418 42.4979 56.9225C42.7192 57.2031 42.8825 57.5249 42.9785 57.8692C43.0745 58.2135 43.1012 58.5734 43.057 58.928V58.928C42.9634 59.6672 42.5923 60.3431 42.0189 60.8188C41.4455 61.2946 40.7127 61.5345 39.969 61.49L28.94 60.829" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M43.0161 59.6681L46.5161 58.7291C48.762 58.125 50.6868 56.675 51.8871 54.6831L53.3561 52.2461C53.7921 51.5225 54.4161 50.9306 55.1616 50.5334C55.9071 50.1361 56.7464 49.9484 57.5901 49.9901V49.9901C57.9005 50.0058 58.2022 50.0973 58.4689 50.2568C58.7357 50.4162 58.9592 50.6386 59.12 50.9045C59.2808 51.1704 59.3739 51.4717 59.3912 51.7819C59.4085 52.0922 59.3494 52.4019 59.2191 52.6841L55.7571 60.1401C54.7851 62.238 53.1161 63.9342 51.0341 64.9401L41.8881 69.3581C39.3583 70.58 36.5362 71.0671 33.7431 70.7641L19.4431 69.2101L17.1501 70.2191" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.01391 58.0252L0.749023 61.6421L9.35126 76.5422L15.6162 72.9253L7.01391 58.0252Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_382_566">
                                <rect width="60.14" height="77.292" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>


                                <div>
                                    <p className="lg:mt-2 font-medium">{locale == 'en' ? "Founders": "Fundadores"}</p>
                                    <p className="font-medium">Locked Funds</p>
                                    <h3 className="mb-4 lg:text-2xl font-title_bold">{founders}</h3>
                                    <CopyClipboard adress="0x44b0b0d24047161c1d8297b045810d762c453253"/>

                                </div>
                            </li>
                            <li className="flex flex-col items-center  mx-auto   lg:my-8 max-w-[140px]">
                                <svg className="mb-[7px] scale-50 lg:scale-100" width="68" height="62" viewBox="0 0 68 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_382_563)">
                                <path d="M66.0989 23.377L63.3609 28.811L59.3989 24.193L66.0989 23.377Z" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                                <path d="M1.30005 37.7787L4.03905 32.3447L8.00105 36.9627L1.30005 37.7787Z" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                                <path d="M54.8 51.6729C51.0399 55.4335 46.3429 58.1206 41.1954 59.4559C36.0479 60.7913 30.637 60.7265 25.523 59.2681C20.409 57.8096 15.7778 55.0107 12.1089 51.1611C8.44007 47.3115 5.86695 42.5511 4.65601 37.3729M12.6 9.4819C16.3602 5.7214 21.0573 3.03436 26.2048 1.699C31.3524 0.363651 36.7633 0.42853 41.8774 1.88692C46.9914 3.34531 51.6227 6.1442 55.2917 9.99379C58.9606 13.8434 61.5339 18.6037 62.745 23.7819" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M34.023 44.6806C41.7677 44.6806 48.046 38.3665 48.046 30.5776C48.046 22.7887 41.7677 16.4746 34.023 16.4746C26.2783 16.4746 20 22.7887 20 30.5776C20 38.3665 26.2783 44.6806 34.023 44.6806Z" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="square"/>
                                <path d="M32.65 40.58C31.5639 40.5774 30.4947 40.3104 29.535 39.802C28.4737 39.2627 27.5835 38.4386 26.9641 37.422C26.3447 36.4054 26.0206 35.2364 26.028 34.046V26.734C26.0238 25.5483 26.3664 24.3873 27.0137 23.3939C27.661 22.4005 28.5846 21.6181 29.671 21.143C30.7565 20.6447 31.9622 20.4686 33.1449 20.6354C34.3276 20.8022 35.4376 21.305 36.343 22.084L40.968 26.029C41.7634 26.7141 42.3889 27.5745 42.7953 28.5424C43.2018 29.5103 43.378 30.5593 43.3101 31.6069C43.2423 32.6545 42.9322 33.672 42.4043 34.5794C41.8764 35.4868 41.1451 36.2592 40.268 36.836L36.336 39.45C35.2461 40.183 33.9633 40.5762 32.65 40.58ZM27.85 27.137V34.046C27.8445 34.9076 28.079 35.7537 28.5273 36.4895C28.9756 37.2253 29.6198 37.8217 30.388 38.212C31.1543 38.6218 32.018 38.8146 32.8859 38.7697C33.7538 38.7248 34.593 38.4438 35.313 37.957L39.242 35.342C39.8873 34.9172 40.4254 34.3486 40.8141 33.6809C41.2027 33.0132 41.4314 32.2645 41.482 31.4936C41.5327 30.7226 41.404 29.9504 41.1061 29.2376C40.8082 28.5247 40.3491 27.8906 39.765 27.385L35.148 23.446C34.5075 22.8952 33.7224 22.5398 32.8859 22.4219C32.0494 22.3041 31.1967 22.4287 30.429 22.781C30.1702 22.8976 29.9228 23.0378 29.69 23.2C30.7243 23.1108 31.753 23.4259 32.56 24.079L38.26 28.668C38.6333 28.9671 38.9307 29.3503 39.1276 29.7863C39.3245 30.2223 39.4155 30.6987 39.3931 31.1766C39.3707 31.6545 39.2355 32.1203 38.9985 32.5359C38.7616 32.9515 38.4297 33.3052 38.03 33.568L34.265 36.068C33.8391 36.3503 33.3452 36.5128 32.835 36.5385C32.3247 36.5642 31.817 36.4521 31.365 36.214C30.9143 35.9816 30.5361 35.63 30.2716 35.1975C30.0071 34.7649 29.8664 34.268 29.865 33.761V26.838L36.637 32.19C36.666 32.2134 36.6937 32.2385 36.72 32.265L37.004 32.077C37.1684 31.9692 37.305 31.824 37.4025 31.6532C37.5 31.4824 37.5556 31.2909 37.5648 31.0945C37.574 30.8981 37.5365 30.7022 37.4553 30.5231C37.3742 30.344 37.2517 30.1866 37.098 30.064L31.398 25.475C31.0799 25.213 30.6934 25.0479 30.2843 24.9991C29.8751 24.9504 29.4606 25.0201 29.09 25.2C28.7167 25.3668 28.4003 25.639 28.1795 25.9831C27.9587 26.3271 27.8431 26.7282 27.847 27.137H27.85ZM31.703 30.59V33.762C31.7016 33.9407 31.7502 34.1162 31.8431 34.2688C31.936 34.4214 32.0696 34.5451 32.229 34.626C32.3875 34.7112 32.5664 34.7514 32.7462 34.7422C32.926 34.733 33.0998 34.6749 33.249 34.574L35.149 33.314L31.703 30.59Z" fill="#5D5FEF"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_382_563">
                                <rect width="67.4" height="61.155" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>



                                <div>
                                    <p className="lg:mt-4 max-w-[140px] mx-auto inline-block font-medium">{locale == 'en' ? "Revolving Treasury Funds": "Fondos rotatorios del Tesoro"}</p>
                                    <h3 className="mb-4  lg:text-2xl font-title_bold">{revolvingTreasuryFunds}</h3>
                                    <CopyClipboard adress="0x8aeed93a7962e3f0ee357e3d490b09539be521f7"/>
                                </div>
                            </li>
                            <li className="flex flex-col items-center  mx-auto   lg:my-8 max-w-[140px]">
                                <svg  className="mb-[10px] scale-50 lg:scale-100" width="75" height="59" viewBox="0 0 75 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_370_112)">
                                <path d="M25.4221 52.4038C31.669 52.4038 36.7331 47.311 36.7331 41.0288C36.7331 34.7466 31.669 29.6538 25.4221 29.6538C19.1752 29.6538 14.1111 34.7466 14.1111 41.0288C14.1111 47.311 19.1752 52.4038 25.4221 52.4038Z" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="square"/>
                                <path d="M24.314 49.0999C23.4381 49.0974 22.576 48.8819 21.802 48.4719C20.9461 48.037 20.2281 47.3724 19.7284 46.5526C19.2288 45.7327 18.9672 44.79 18.973 43.8299V37.9299C18.9692 36.9734 19.2454 36.0366 19.7677 35.2352C20.29 34.4338 21.0354 33.8027 21.912 33.4199C22.7875 33.0182 23.7599 32.8762 24.7137 33.0108C25.6676 33.1453 26.5627 33.5507 27.293 34.1789L31.024 37.3609C31.6651 37.9138 32.1692 38.6079 32.4966 39.3886C32.824 40.1693 32.9659 41.0153 32.9109 41.8601C32.8559 42.7049 32.6057 43.5254 32.1799 44.2571C31.7541 44.9888 31.1643 45.6118 30.457 46.0769L27.287 48.1859C26.4081 48.7775 25.3734 49.0949 24.314 49.0979V49.0999ZM20.447 38.2539V43.8269C20.4426 44.5217 20.6318 45.2039 20.9934 45.7972C21.3549 46.3904 21.8745 46.8713 22.494 47.1859C23.1111 47.5169 23.8069 47.6732 24.5063 47.6379C25.2057 47.6027 25.8822 47.3773 26.463 46.9859L29.632 44.8759C30.153 44.5337 30.5875 44.0752 30.9014 43.5367C31.2153 42.9981 31.3999 42.394 31.4408 41.772C31.4817 41.1499 31.3778 40.5269 31.1371 39.9519C30.8965 39.3768 30.5257 38.8654 30.054 38.4579L26.33 35.2769C25.8134 34.8327 25.1803 34.546 24.5057 34.4508C23.8311 34.3556 23.1433 34.456 22.524 34.7399C22.314 34.8338 22.1131 34.947 21.924 35.0779C22.7583 35.006 23.588 35.2601 24.239 35.7869L28.839 39.4869C29.141 39.728 29.3817 40.0372 29.5411 40.3892C29.7005 40.7413 29.7742 41.1261 29.7562 41.5121C29.7381 41.8982 29.6288 42.2744 29.4372 42.61C29.2456 42.9457 28.9772 43.2311 28.654 43.4429L25.62 45.4579C25.2766 45.6852 24.8785 45.8162 24.4673 45.8371C24.056 45.8581 23.6467 45.7682 23.282 45.5769C22.9193 45.3885 22.6151 45.1044 22.4025 44.7553C22.1899 44.4063 22.077 44.0056 22.076 43.5969V38.0119L27.538 42.3299C27.5618 42.3483 27.5845 42.3679 27.606 42.3889L27.834 42.2379C27.9674 42.1515 28.0782 42.0345 28.1574 41.8967C28.2365 41.7589 28.2817 41.6042 28.2891 41.4454C28.2965 41.2867 28.266 41.1284 28.2001 40.9838C28.1342 40.8392 28.0347 40.7124 27.91 40.6139L23.31 36.9139C23.0534 36.7026 22.7416 36.5694 22.4115 36.5301C22.0815 36.4907 21.7471 36.5469 21.448 36.6919C21.1473 36.8269 20.8926 37.0467 20.715 37.3243C20.5373 37.6019 20.4446 37.9254 20.448 38.2549L20.447 38.2539ZM23.548 41.0399V43.5999C23.5465 43.7446 23.5855 43.8868 23.6606 44.0105C23.7357 44.1342 23.8439 44.2345 23.973 44.2999C24.101 44.3684 24.2452 44.4007 24.3902 44.3935C24.5352 44.3863 24.6754 44.3398 24.796 44.2589L26.328 43.2419L23.548 41.0399Z" fill="#5D5FEF"/>
                                <path d="M32.3291 18.3271L48.1001 40.7671C49.2565 42.4132 49.9389 44.3452 50.0728 46.3525C50.2068 48.3597 49.7871 50.3652 48.8597 52.1504C47.9323 53.9355 46.5326 55.4318 44.8132 56.4762C43.0938 57.5206 41.1208 58.073 39.1091 58.0732H11.7381C9.7263 58.0732 7.75314 57.5209 6.0337 56.4765C4.31427 55.4321 2.91456 53.9357 1.98716 52.1504C1.05977 50.3652 0.640295 48.3596 0.774469 46.3523C0.908644 44.345 1.59132 42.4131 2.74806 40.7671L18.5161 18.3271H32.3291Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M32.3071 13.1172H18.5371V18.3272H32.3071V13.1172Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18.5201 13.116L13.6201 6.67503C13.1247 6.02372 12.8561 5.22829 12.855 4.41004C12.8539 3.59179 13.1205 2.79565 13.6141 2.14303V2.14303C14.0965 1.50312 14.7839 1.04815 15.5614 0.85413C16.339 0.660109 17.1595 0.738791 17.8861 1.07703L23.3241 3.60003C23.9821 3.90529 24.6987 4.06343 25.4241 4.06343C26.1494 4.06343 26.8661 3.90529 27.5241 3.60003L32.9591 1.07803C33.6857 0.740732 34.506 0.662554 35.2833 0.856517C36.0606 1.05048 36.748 1.50488 37.2311 2.14403V2.14403C37.7245 2.79676 37.9909 3.59296 37.9896 4.41121C37.9884 5.22945 37.7195 6.02483 37.2241 6.67603L32.3241 13.117L18.5201 13.116Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M73.3771 29.073C73.3772 28.8004 73.3236 28.5305 73.2192 28.2786C73.1148 28.0268 72.9617 27.798 72.7688 27.6055C72.5759 27.4129 72.3468 27.2603 72.0948 27.1564C71.8427 27.0525 71.5727 26.9993 71.3001 27H56.2361C55.9638 26.9999 55.6942 27.0534 55.4426 27.1575C55.1911 27.2617 54.9625 27.4144 54.77 27.6069C54.5774 27.7994 54.4247 28.028 54.3206 28.2795C54.2165 28.5311 54.163 28.8007 54.1631 29.073V40.754C54.163 41.0263 54.2165 41.2959 54.3206 41.5475C54.4247 41.799 54.5774 42.0276 54.77 42.2201C54.9625 42.4127 55.1911 42.5653 55.4426 42.6695C55.6942 42.7736 55.9638 42.8271 56.2361 42.827H71.3001C71.5724 42.8271 71.842 42.7736 72.0935 42.6695C72.3451 42.5653 72.5737 42.4127 72.7662 42.2201C72.9587 42.0276 73.1114 41.799 73.2156 41.5475C73.3197 41.2959 73.3732 41.0263 73.3731 40.754L73.3771 29.073Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M48.262 21.649C48.262 20.2781 48.8066 18.9633 49.7759 17.9939C50.7453 17.0246 52.0601 16.48 53.431 16.48V16.48C54.1098 16.48 54.7819 16.6137 55.4091 16.8734C56.0362 17.1332 56.606 17.514 57.086 17.9939C57.566 18.4739 57.9467 19.0438 58.2065 19.6709C58.4663 20.298 58.6 20.9702 58.6 21.649V27" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M63.7701 31.4751C64.2448 31.4751 64.7088 31.6159 65.1035 31.8796C65.4982 32.1433 65.8058 32.5181 65.9874 32.9567C66.1691 33.3952 66.2166 33.8778 66.124 34.3433C66.0314 34.8089 65.8028 35.2365 65.4672 35.5722C65.1315 35.9078 64.7039 36.1364 64.2383 36.229C63.7728 36.3216 63.2902 36.2741 62.8517 36.0924C62.4131 35.9108 62.0383 35.6031 61.7746 35.2085C61.5109 34.8138 61.3701 34.3498 61.3701 33.8751C61.3701 33.2386 61.623 32.6281 62.0731 32.178C62.5232 31.728 63.1336 31.4751 63.7701 31.4751V31.4751Z" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M63.77 36.2803V38.5193" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_370_112">
                                <rect width="74.127" height="58.823" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>




                                <div>
                                    <p className="lg:mt-4 max-w-[124px] mx-auto inline-block font-medium">{locale == 'en' ? "Initial Investors Unlocked Funds": "Initial Investors Unlocked Funds"}</p>
                                    <h3 className="mb-4 lg:text-2xl font-title_bold">{investors}</h3>
                                    <CopyClipboard adress="0xef147130e1f7016ecF39916fCF8eEca7E5eD0729"/>
                                </div>
                            </li>

                            <li className="flex flex-col items-center  mx-auto   lg:my-8 max-w-[140px]">
                                <svg  className="mb-[5px] scale-50 lg:scale-100" width="67" height="66" viewBox="0 0 67 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_382_565)">
                                <path d="M33.135 0.633301C37.88 0.633301 41.7331 3.05141 41.7331 6.02866C41.7331 9.0059 37.88 11.424 33.135 11.424C28.39 11.424 24.5369 9.00674 24.5369 6.02866C24.5369 3.05057 28.3891 0.633301 33.135 0.633301Z" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="square"/>
                                <path d="M41.7331 6.02881V8.17158C41.7331 11.1497 37.88 13.5669 33.135 13.5669C28.39 13.5669 24.5369 11.1488 24.5369 8.17158V6.02881" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="round"/>
                                <path d="M41.7331 8.13574V10.2785C41.7331 13.2566 37.88 15.6747 33.135 15.6747C28.39 15.6747 24.5369 13.26 24.5369 10.2785V8.13574" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="round"/>
                                <path d="M41.7331 10.2432V12.3859C41.7331 15.364 37.88 17.7821 33.135 17.7821C28.39 17.7821 24.5369 15.364 24.5369 12.3859V10.2432" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="round"/>
                                <path d="M9.23165 40.0239C13.9767 40.0239 17.8298 42.442 17.8298 45.4193C17.8298 48.3965 13.9767 50.8155 9.23165 50.8155C4.48665 50.8155 0.633545 48.3957 0.633545 45.4193C0.633545 42.4429 4.4858 40.0239 9.23165 40.0239Z" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="square"/>
                                <path d="M17.8298 45.4194V47.5622C17.8298 50.5403 13.9767 52.9584 9.23165 52.9584C4.48665 52.9584 0.633545 50.5403 0.633545 47.5622V45.4194" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="round"/>
                                <path d="M17.8298 47.5269V49.6705C17.8298 52.6477 13.9767 55.0658 9.23165 55.0658C4.48665 55.0658 0.633545 52.6477 0.633545 49.6705V47.5269" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="round"/>
                                <path d="M17.8298 49.6348V51.7742C17.8298 54.7522 13.9767 57.1704 9.23165 57.1704C4.48665 57.1704 0.633545 54.7548 0.633545 51.7742V49.6348" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="round"/>
                                <path d="M57.0373 40.0239C61.7832 40.0239 65.6354 42.442 65.6354 45.4193C65.6354 48.3965 61.7832 50.8155 57.0373 50.8155C52.2915 50.8155 48.4392 48.3974 48.4392 45.4193C48.4392 42.4412 52.2923 40.0239 57.0373 40.0239Z" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="square"/>
                                <path d="M65.6354 45.4194V47.5622C65.6354 50.5403 61.7832 52.9584 57.0373 52.9584C52.2915 52.9584 48.4392 50.5403 48.4392 47.5622V45.4194" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="round"/>
                                <path d="M65.6354 47.5269V49.6705C65.6354 52.6477 61.7832 55.0658 57.0373 55.0658C52.2915 55.0658 48.4392 52.6477 48.4392 49.6705V47.5269" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="round"/>
                                <path d="M65.6354 49.6348V51.7742C65.6354 54.7522 61.7832 57.1704 57.0373 57.1704C52.2915 57.1704 48.4392 54.7522 48.4392 51.7742V49.6348" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="round"/>
                                <path d="M33.135 47.1594C39.6762 47.1594 44.9789 41.8265 44.9789 35.2479C44.9789 28.6694 39.6762 23.3364 33.135 23.3364C26.5937 23.3364 21.291 28.6694 21.291 35.2479C21.291 41.8265 26.5937 47.1594 33.135 47.1594Z" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="1.5" strokeLinecap="square"/>
                                <path d="M31.9745 43.6965C31.0571 43.694 30.1541 43.4681 29.3435 43.0386C28.4468 42.5833 27.6947 41.8871 27.1716 41.0283C26.6484 40.1694 26.3748 39.1818 26.3815 38.1762V32.0021C26.3781 31.0007 26.6676 30.0202 27.2145 29.1813C27.7613 28.3424 28.5416 27.6818 29.4592 27.2807C30.3759 26.8599 31.3942 26.711 32.3929 26.8519C33.3917 26.9928 34.3291 27.4175 35.0936 28.0755L38.9999 31.4067C39.6717 31.9853 40.2001 32.712 40.5433 33.5295C40.8866 34.347 41.0354 35.233 40.9781 36.1178C40.9208 37.0026 40.6589 37.862 40.2131 38.6284C39.7672 39.3948 39.1495 40.0472 38.4087 40.5343L35.0902 42.7421C34.17 43.3618 33.0864 43.6943 31.977 43.6974L31.9745 43.6965ZM27.9229 32.3425V38.1762C27.9182 38.9042 28.1164 39.6192 28.4953 40.2408C28.8743 40.8625 29.4189 41.3663 30.0682 41.6957C30.715 42.0413 31.4438 42.204 32.1762 42.1662C32.9085 42.1284 33.6167 41.8916 34.2245 41.4811L37.543 39.2742C38.088 38.9154 38.5425 38.4352 38.8708 37.8712C39.199 37.3072 39.3922 36.6749 39.435 36.0237C39.4778 35.3726 39.3691 34.7204 39.1174 34.1183C38.8658 33.5162 38.4781 32.9807 37.9847 32.5536L34.0851 29.2233C33.5442 28.7581 32.8811 28.458 32.1746 28.3584C31.4681 28.2588 30.7479 28.3641 30.0994 28.6617C29.8809 28.7596 29.6722 28.8781 29.4761 29.0156C30.3495 28.9398 31.2182 29.206 31.8993 29.758L36.7136 33.633C37.0289 33.8857 37.28 34.2093 37.4464 34.5776C37.6127 34.9458 37.6896 35.3482 37.6706 35.7518C37.6517 36.1554 37.5375 36.5488 37.3374 36.8999C37.1373 37.2509 36.8569 37.5497 36.5193 37.7716L33.3393 39.8831C32.9799 40.1218 32.5628 40.2594 32.1318 40.2814C31.7008 40.3034 31.2719 40.209 30.89 40.0081C30.5103 39.8109 30.1919 39.5134 29.9693 39.148C29.7468 38.7827 29.6285 38.3633 29.6273 37.9355V32.0891L35.347 36.6103C35.3719 36.6293 35.3953 36.6502 35.4171 36.6728L35.657 36.514C35.796 36.4233 35.9117 36.3009 35.9944 36.1569C36.0771 36.0129 36.1245 35.8513 36.1327 35.6854C36.1409 35.5196 36.1098 35.3541 36.0418 35.2026C35.9738 35.0511 35.8708 34.9179 35.7414 34.8138L30.9271 30.9387C30.6586 30.7172 30.332 30.5774 29.9862 30.5361C29.6405 30.4948 29.2902 30.5536 28.9769 30.7056C28.6617 30.8465 28.3944 31.0764 28.2079 31.367C28.0215 31.6576 27.9238 31.9963 27.9271 32.3416L27.9229 32.3425ZM31.1771 35.2589V37.938C31.1762 38.0889 31.2173 38.237 31.2958 38.3659C31.3742 38.4948 31.487 38.5993 31.6214 38.6677C31.7554 38.7397 31.9064 38.7736 32.0583 38.7659C32.2101 38.7581 32.357 38.709 32.4829 38.6238L34.0877 37.5596L31.1771 35.2589Z" fill="#5D5FEF"/>
                                <path d="M14.8542 12.5903L19.992 12.7018L17.9126 17.4012L14.8542 12.5903Z" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                                <path d="M21.2176 63.8819L18.8315 59.3294L23.9507 58.8784L21.2176 63.8819Z" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                                <path d="M62.5863 30.6851L60.1724 35.2223L56.9131 31.2493L62.5863 30.6851Z" stroke="#5D5FEF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                                <path d="M45.2205 12.043C48.9201 13.8871 52.151 16.5496 54.6681 19.8286C57.1852 23.1076 58.9224 26.9168 59.7478 30.9673M48.4393 58.7844C44.6899 61.3433 40.3591 62.9217 35.8425 63.3755C31.326 63.8294 26.7677 63.1441 22.5842 61.3824M5.9834 36.3584C5.98154 32.2415 6.91727 28.1782 8.71961 24.4768C10.522 20.7754 13.1436 17.5331 16.3856 14.9957" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_382_565">
                                <rect width="66.2688" height="65.224" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>


                                <div>
                                    <p className="lg:mt-4 font-medium max-w-[124px] mx-auto inline-block">{locale == 'en' ? "Circulating Supply": "Circulating Supply"}</p>
                                    <h3 className="mb-4 lg:text-2xl font-title_bold">{circulation}</h3>
                                    <CopyClipboard adress="0x7ffa738850ad1867e416e65c88a264f6e425a6b3"/>
                                </div>
                            </li>




                        </ul>
                    </div>

                 </div>

                </MainContent>
             </div>
    </section>
    )
};
