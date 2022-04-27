
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ApexChart({series,options,type, height,width}) {
    return(
    <div className=" mx-auto  inline-flex justify-center">
        <Chart className="inline-block mx-autos scale-75 lg:scale-100" options={options} series={series} type={type} height={height} width={width} />
    </div>
    )
};
