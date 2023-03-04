import React from "react";
import BigMap from "../../assets/Frame.png";
import Bttn from "../../assets/Frame-adjust.png";
import Indicator from "../../assets/Frame-indicate.png";
import PartyIndicator from "../../assets/Frame-party.png";

const Map = () => {
  return (
    <div className="map rounded-md h-full">
      <div className="bttn bg-[#1B1F30] relative w-[30px] left-[92%] top-[75px] lg:left-[90%] lg:top-[150px]">
        <img src={Bttn} alt="" className="bg-transparent w-[20px] h-[40px]" />
      </div>

      <div className=" bg-[#1B1F30] rounded-md flex justify-center  items-center">
        <img src={BigMap} alt="Map of Nigeria" className="bg-transparent" />
      </div>

      <div className="indicator bg-[#1B1F30] relative left-[65%] bottom-[60px] w-[130px]  lg:bottom-[190px] lg:w-[100px] lg:left-[82%]">
        <img
          src={Indicator}
          alt="key indicator"
          className="bg-transparent hidden lg:flex rounded-md"
        />
        <img
          src={PartyIndicator}
          alt="key indicator"
          className="bg-transparent lg:hidden"
        />
      </div> <div className="bttn bg-[#1B1F30] relative w-[30px] left-[92%] top-[75px] lg:left-[90%] lg:top-[150px]">
        <img src={Bttn} alt="" className="bg-transparent w-[20px] h-[40px]" />
      </div>

      {/* <div className=" bg-[#1B1F30] rounded-md flex justify-center  items-center">
        <img src={BigMap} alt="Map of Nigeria" className="bg-transparent" />
      </div>

      <div className="indicator bg-[#1B1F30] relative left-[65%] bottom-[60px] w-[130px]  lg:bottom-[190px] lg:w-[100px] lg:left-[82%]">
        <img
          src={Indicator}
          alt="key indicator"
          className="bg-transparent hidden lg:flex rounded-md"
        />
        <img
          src={PartyIndicator}
          alt="key indicator"
          className="bg-transparent lg:hidden"
        />
      </div> */}
    </div>
  );
};

export default Map;
