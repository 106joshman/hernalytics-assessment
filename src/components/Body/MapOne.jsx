import React from "react";
import BigMap from "../../assets/Frame.png";
import Bttn from "../../assets/Frame-adjust.png";
import Indicator from "../../assets/Frame-indicate.png";
import PartyIndicator from "../../assets/Frame-party.png";

const MapOne = () => {
  return (
    <div className="rounded-md p-3 bg-[#1B1F30] border-2 border-[#393C4A]">
      <div className="bttn bg-[transparent] rounded-md relative w-[50px] left-[84%] top-[33px] lg:left-[93%] lg:top-[128px]">
        <img
          loading="lazy"
          src={Bttn}
          alt=""
          className="bg-transparent w-[50px] h-[80px]"
        />
      </div>
      <div className=" ">
        <img
          loading="lazy"
          src={BigMap}
          alt="Map of Nigeria"
          className="bg-transparent w-full mx-auto"
        />
      </div>
      <div className="indicator bg-[#1B1F30] relative left-[49%] bottom-[10px] w-[130px] md:bottom-[60px] md:left-[70%] lg:bottom-[190px] lg:w-[100px] lg:left-[82%]">
        <img
          loading="lazy"
          src={Indicator}
          alt="key indicator"
          className="bg-transparent hidden lg:flex rounded-md"
        />
        <img
          loading="lazy"
          src={PartyIndicator}
          alt="key indicator"
          className="bg-transparent lg:hidden"
        />
      </div>{" "}
    </div>
  );
};

export default MapOne;
