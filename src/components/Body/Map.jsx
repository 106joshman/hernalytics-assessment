import React, { useState, useEffect } from "react";
import BigMap from "../../assets/Frame.png";
import Bttn from "../../assets/Frame-adjust.png";
import Indicator from "../../assets/Frame-indicate.png";
import PartyIndicator from "../../assets/Frame-party.png";
import numeral from "numeral";

const Map = () => {
  const [newData, setNewData] = useState({});

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    const getData = () => {
      fetch(
        "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=map",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setNewData(result);
          // console.log(result);
        })
        .catch((error) => console.log("error", error));
    };
    getData();
  }, []);

  const DataKeys = Object.entries(newData);

  // console.log(DataKeys);
  return (
    <div className="mapParent rounded-md p-3 bg-[#1B1F30] border-2 border-[#393C4A]">
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
      </div>

      <div className="hoverDiv w-[230x] lg:w-[x] absolute -bottom-[40%] md:-bottom-[66%] lg:-bottom-[120%] left-[20%] md:left-[41%]">
        <div className="contain bg-[#1B1F30] rounded-md border border-[#212842] p-2 lg:p-5">
          <div className="title flex justify-between uppercase text-sm">
            <p className="text-white opacity-50">vote count</p>
            <p className="text-[#E5B805]"> see full list</p>
          </div>

          <div className="body mt-5 text-white max-w-full">
            <table>
              <thead className="border-b font-bold dark:border-neutral-500">
                <tr>
                  <th scope="col" className=" p-2 text-start lg:px-6 lg:py-4">
                    States
                  </th>
                  <th scope="col" className=" p-2 lg:px-6 lg:py-4">
                    LP
                  </th>
                </tr>
              </thead>
              {DataKeys.map((items, index) => {
                return (
                  <tbody>
                    <tr key={index} id={items[1].country_id} className="">
                      <td className="whitespace-nowrap p-2 lg:px-6 lg:py-4 font-medium">
                        {items[1].name}
                      </td>
                      <td className="whitespace-nowrap p-2 lg:px-6 lg:py-4">
                        {numeral(items[1].candidate_votes).format("0,0")}
                      </td>
                      {/* <td className="whitespace-nowrap p-1 md:px-6 md:py-4">
                        {/* {items[1].political_party_name}
                      </td> */}
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
