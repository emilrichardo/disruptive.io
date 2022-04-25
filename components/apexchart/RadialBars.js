
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function RadialBars(params) {


    const series = [100, 48, 44, 55, 67, 83]
    const options =  {
        chart: {
          height: 400,
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
              size: '45px',
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
    <div className=" mx-auto inline-block">
        <Chart className="inline-block mx-autos" options={options} series={series} type="radialBar" height={500} width={500} />
    </div>
    )
};
