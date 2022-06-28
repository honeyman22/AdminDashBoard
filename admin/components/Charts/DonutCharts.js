import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const DonutCharts = () => {
  const series = [44, 55, 41, 17, 15];
  const options = {
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        donut: {
          expandOnClick: true,
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="  flex-col w-full h-[380px] border" id="chart">
        <div className="h-[50px] text-blue-700 text-[18px] border-b font-serif p-3">
          {" "}
          Sales
        </div>
        <div className="justify-center h-[320px] w-full items-center flex">
          <Chart options={options} type="donut" series={series} />
        </div>
      </div>
    </div>
  );
};

export default DonutCharts;
