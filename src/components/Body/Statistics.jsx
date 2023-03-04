import React from "react";
import Tinubu from "../../assets/Tinubu.png";
import Peter from "../../assets/Peter.png";
import Atiku from "../../assets/Atiku.png";
import { BiUpArrow } from "react-icons/bi";

const Statistics = () => {
  return (
    <>
      <div className="top">
        <h4 className="text-white uppercase mb-4">president</h4>
        {/* <Line data={LineData} options={options} /> */}
        <div className="flex items-center justify-around">
          <div className="bg-[#64CCFF] h-4 w-[51.3%]"></div>
          <div className="bg-[#0AA83F] h-4 w-[42%]"></div>
          <div className="bg-[#D62B3C] h-4 w-[7.3%]"></div>
        </div>
        <div className="bg-white flex w-[250px] p-2 shadow-md h-14 shadow-[0_4px _15px_rgb(0,0,0,0.15)] justify-evenly absolute left-[20%]">
          <BiUpArrow className="absolute bottom-[90%]" color="yellow" size={30} />
          <img src={Tinubu} alt="" srcset="" />
          <div className="">
            <h3 className="text-[#64CCFF]">Tinubu, APC</h3>
            <p className="text-[[#585858]">81,283,786 votes (51.3%)</p>
          </div>

          <div className="bg-white flex w-[250px] p-2 shadow-md h-14 shadow-[0_4px _15px_rgb(0,0,0,0.15)] justify-evenly absolute left-[50%]">
            <BiUpArrow className="absolute bottom-[90%]" size={24} />
            <img src={Peter} alt="" srcset="" />
            <div className="">
              <h3 className="text-[#0AA83F]">Peter, LP</h3>
              <p className="text-[#585858]">60,283,786 votes (42%)</p>
            </div>
          </div>

          <div className="bg-white flex w-[250px] p-2 shadow-md h-14 shadow-[0_4px _15px_rgb(0,0,0,0.15)] justify-evenly absolute w-[90%]">
            <BiUpArrow className="absolute bottom-[90%]" size={24} />
            <img src={Atiku} alt="" srcset="" />
            <div className="">
              <h3 className="text-[#D62B3C]">Atiku, PDP</h3>
              <p className="text-[#585858]">283,786 votes (7.3%)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
