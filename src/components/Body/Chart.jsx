import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import SmallMap from "../../assets/small-map.png";
import { Data } from "../../../Utils/Data";
import { IoMdFemale, IoMdMale } from "react-icons/io";

const Chart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;

      ctx.font = "bold 10px sans-serif";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseLine = "middle";
      ctx.fillText("TOTAL VOTES", xCoor, yCoor - 10);

      ctx.font = "bolder 18px sans-serif";
      ctx.fillStyle = "white";
      ctx.fillText("168,912,222", xCoor, yCoor + 10);
    },
  };

  const options = {};
  return (
    <div className="chart rounded-md p-3 mt-8 lg:p-5 bg-[#1B1F30] border border-[#393C4A] flex flex-col lg:flex-row justify-between ">
      <div
        className="rounded-md bg-transpaent p-2 bg-[#1B1F0] justify-center flex border border-[#272935] mx-auto lg:mx-0"
        style={{ width: 350 }}
      >
        <Doughnut
          data={Data}
          className="bg-tranarent"
          options={options}
          plugins={[textCenter]}
        />
      </div>

      <div className=" bg-[#1B1F30] flex flex-col lg:flex-row wauto lg:w-[550px] border-[#272935] justify-between rounded-md items-center p-2 mx-auto w-[350px] lg:p-5 border">
        <h3 className="text-white relative flex lg:bottom-[8.5rem] bottom-[-0.5rem] lg:left-[3.5rem] left-2 text-sm lg:w-[inherit]">
          CANDIDATES BY GEOPOLITICAL ZONES
        </h3>
        <div className="w-[300px] lg:absolute lg:w-[22%]">
          <img
          loading="lazy"
            src={SmallMap}
            alt="Map of Nigeria"
            className="bg-transparent relatve p-5 w-full mx-auto"
          />
        </div>
        <div className="regionGrid flex lg:flex-col justify-between px-2 w-full lg:ml-10 lg:w-3/5 ">
          <div className="northRegion">
            <p className="text-[10px] mb-2 flex justify-between">
              <span className="text-white font-medium items-center">
                <span className="w-5 h-3 inline-flex mr-2 bg-[#449352]"></span>
                North East
              </span>
              <span className="text-white opacity-60]">3,000</span>
            </p>
            <p className="text-[10px] mb-2 flex justify-between">
              <span className="text-white font-medium items-center">
                <span className="w-5 h-3 inline-flex mr-2 bg-[#6D769D]"></span>
                North West
              </span>
              <span className="text-white opacity-60]">3,000</span>
            </p>
            <p className="text-[10px] mb-2 flex justify-between">
              <span className="text-white font-medium items-center">
                <span className="w-5 h-3 inline-flex mr-2 bg-[#A163BE]"></span>
                North Central
              </span>
              <span className="text-white opacity-60]">3,000</span>
            </p>
          </div>

          <div className="southRegion">
            <p className="text-[10px] mb-2 flex justify-between">
              <span className="text-white font-medium items-center">
                <span className="w-5 h-3 inline-flex mr-2 bg-[#E30325]"></span>
                South West
              </span>
              <span className="text-white opacity-60]">3,000</span>
            </p>
            <p className="text-[10px] mb-2 flex justify-between">
              <span className="text-white font-medium items-center">
                <span className="w-5 h-3 inline-flex mr-2 bg-[#2249D1]"></span>
                South South
              </span>
              <span className="text-white opacity-60]">3,000</span>
            </p>
            <p className="text-[10px] mb-2 flex justify-between">
              <span className="text-white font-medium items-center">
                <span className="w-5 h-3 inline-flex mr-2 bg-[#018796]"></span>
                South East
              </span>
              <span className="text-white opacity-60]">3,000</span>
            </p>
          </div>
        </div>

        {/* <img
        loading="lazy"
            src={StatOne}
            alt="Map of Nigeria"
            className=" bg-transparent w-1/2"
          /> */}
      </div>
      <div className=" bg-[#1B1F30] uppercase border-[#272935] text-white flex flow-row lg:flex-col justify-between lg:justify-center w-[350px] mx-auto  rounded-md lg:p-5 p-2 lg:border">
        <div className="flex flex-col">
          <p className="bg-transparent text-xs lg:text-sm font-normal">
            total elected members
          </p>{" "}
          <span className="bg-transparent text-sm lg:text-xl font-bold">
            10,000
          </span>
        </div>
        <div className="flex flex-col lg:my-10">
          <p className="bg-transparent text-xs lg:text-sm font-normal flex">
            male <IoMdMale className="text-[#E5B805] ml-1" />{" "}
          </p>{" "}
          <span className="bg-transparent text-sm lg:text-xl font-bold">
            9,000
          </span>
        </div>
        <div className="flex flex-col">
          <p className="bg-transparent text-xs lg:text-sm font-normal flex">
            female <IoMdFemale className="text-[#E5B805] ml-1" />{" "}
          </p>{" "}
          <span className="bg-transparent text-sm lg:text-xl font-bold">
            1,000
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
