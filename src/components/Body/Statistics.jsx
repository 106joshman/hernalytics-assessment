import React from "react";
import Tinubu from "../../assets/Tinubu.png";
import APC from "../../assets/party-logo/APC.png";
import LP from "../../assets/party-logo/LP.png";
import PDP from "../../assets/party-logo/PDP.png";
import { BsFillCaretUpFill } from "react-icons/bs";
import Map from "./Map";
import { useState } from "react";
import { useEffect } from "react";
import numeral from "numeral";

const Statistics = () => {
  const [data, setData] = useState({});
  const [dataResult, setDataResult] = useState({});

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    const getResult = () => {
      fetch(
        "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=president",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setDataResult(result);
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    };
    const getData = () => {
      fetch(
        "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          // console.log(result);
        })
        .catch((error) => console.log("error", error));
    };
    getData();
    getResult();
  }, []);

  const objectKeys = Object.entries(data);
  const resultKeys = Object.entries(dataResult);

  // console.log(objectKeys);
  console.log(resultKeys);

  return (
    <>
      <div className="top">
        <h4 className="text-white uppercase mb-4">president</h4>

        <div className="flex items-center justify-around">
          <div className="bg-[#0AA83F] h-4 w-[40.7%]"></div>
          <div className="bg-[#D62B3C] h-4 w-[42%]"></div>
          <div className="bg-[#64CCFF] h-4 w-[17.3%]"></div>
        </div>
        <div className="candidateResult absolute">
          {resultKeys.map((items, index) => {
            return (
              <div
                key={index}
                id={items[1].candidate_id}
                className="bg-white flex candidateWrap relative flex-col lg:flex-row w-[100px] md:w-[160px] lg:w-[250px] p-3 shadow-md h-[9rem] lg:h-20 justify-evenly mt-5"
              >
                <BsFillCaretUpFill
                  className="absolute left-[34%] bottom-[90%] z-10"
                  color="white"
                  size={30}
                />
                <img
                  loading="lazy"
                  src={Tinubu}
                  className="w-3/5 md:w-[60px] mx-auto lg:m-0"
                  alt=""
                  srcset=""
                />
                <div className="flex flex-col lg:ml-4 text-center text-xs md:text-sm">
                  <h3 className="text-[#64CCFF] font-semibold mt-2 text-center">
                    {items[1].political_party_name}
                  </h3>
                  <p className="text-[#585858] flex-wrap mt-2">
                    {numeral(items[1].candidates_vote).format("0,0")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <div className="hidden lg:flex justify-between mt-48 lg:mt-40">
        <div className="senate w-2/5">
          <h4 className="text-white uppercase mb-4">senate</h4>
          <div className="flex items-center justify-around">
            <div className="bg-[#64CCFF] h-4 w-[51.3%]"></div>
            <div className="bg-[#0AA83F] h-4 w-[16.3%]"></div>
            <div className="bg-[#D62B3C] h-4 w-[46%]"></div>
          </div>
          <div className="bg-white flex flex-col lg:flex-row w-[100px] lg:w-[180px] p-2 shadow-md xl h-44 lg:h-20 shadow-[0_4px _15px_rgb(0,0,0,0.15)] justify-evenly absolute left-[%] mt-5">
            <BsFillCaretUpFill
              className="absolute bottom-[90%]"
              color="white"
              size={30}
            />
            <img
              loading="lazy"
              src={APC}
              alt=""
              srcset=""
              className=" w-10 h-9"
            />
            <div className="flex flex-col ml-2  text-sm">
              <h3 className="text-[#64CCFF] font-normal mt-2">
                All progressive Congress
              </h3>
              <p className="text-[#585858] mt-1">54 Seats (51.3%)</p>
            </div>
          </div>
          <div className="bg-white flex flex-col lg:flex-row w-[100px] lg:w-[180px] p-2 shadow-md h-44 lg:h-20 shadow-[0_4px _15px_rgb(0,0,0,0.15)] justify-evenly absolute left-[17%] mt-5">
            <BsFillCaretUpFill
              className="absolute fill-current bottom-[90%]"
              color="white"
              size={30}
            />
            <img
              loading="lazy"
              src={LP}
              alt=""
              srcset=""
              className=" w-10 h-9"
            />
            <div className="flex flex-col ml-2 text-sm">
              <h3 className="text-[#0AA83F] font-normal mt-2">
                The <br /> Labor party
              </h3>
              <p className="text-[#585858] mt-1">12 Seats (16.3%)</p>
            </div>
          </div>

          <div className="bg-white flex flex-col lg:flex-row w-[100px] lg:w-[180px] p-2 shadow-md h-44 lg:h-20 shadow-[0_4px _15px_rgb(0,0,0,0.15)] justify-evenly absolute left-[30%] mt-5">
            <BsFillCaretUpFill
              className="absolute fill-current bottom-[90%]"
              color="white"
              size={30}
            />
            <img
              loading="lazy"
              src={PDP}
              alt=""
              srcset=""
              className=" w-10 h-9"
            />
            <div className="ml-2 text-sm">
              <h3 className="text-[#D62B3C] font-normal mt-2">
                People Democratic Party
              </h3>
              <p className="text-[#585858] mt-1">36 Seats (46%)</p>
            </div>
          </div>
        </div>
        <div className="house w-[45%]">
          <h4 className="text-white uppercase mb-4">House</h4>
          <div className="flex items-center justify-around">
            <div className="bg-[#64CCFF] h-4 w-[51.3%]"></div>
            <div className="bg-[#0AA83F] h-4 w-[16.3%]"></div>
            <div className="bg-[#D62B3C] h-4 w-[46%]"></div>
          </div>

          <div className="bg-white flex flex-col lg:flex-row w-[100px] lg:w-[180px] p-2 shadow-md h-44 lg:h-20 shadow-[0_4px _15px_rgb(0,0,0,0.15)] justify-evenly absolute mt-5">
            <BsFillCaretUpFill
              className="absolute bottom-[90%]"
              color="white"
              size={30}
            />
            <img
              loading="lazy"
              src={APC}
              alt=""
              srcset=""
              className=" w-10 h-9"
            />
            <div className="flex flex-col ml-2 text-sm">
              <h3 className="text-[#64CCFF] font-normal mt-2">
                All progressive Congress
              </h3>
              <p className="text-[#585858] mt-1">54 Seats (51.3%)</p>
            </div>
          </div>
          <div className="bg-white flex flex-col lg:flex-row w-[100px] lg:w-[180px] p-2 shadow-md h-44 lg:h-20 shadow-[0_4px _15px_rgb(0,0,0,0.15)] justify-evenly absolute left-[69%] mt-5">
            <BsFillCaretUpFill
              className="absolute fill-current bottom-[90%]"
              color="white"
              size={30}
            />
            <img
              loading="lazy"
              src={LP}
              alt=""
              srcset=""
              className=" w-10 h-9"
            />
            <div className="flex flex-col ml-2 text-sm">
              <h3 className="text-[#0AA83F] font-normal mt-2">
                The <br /> Labor party
              </h3>
              <p className="text-[#585858] mt-1">12 Seats (16.3%)</p>
            </div>
          </div>

          <div className="bg-white flex flex-col lg:flex-row w-[100px] lg:w-[180px] p-2 shadow-md h-44 lg:h-20 shadow-[0_4px _15px_rgb(0,0,0,0.15)] justify-evenly absolute left-[83%] mt-5">
            <BsFillCaretUpFill
              className="absolute fill-current bottom-[90%]"
              color="white"
              size={30}
            />
            <img
              loading="lazy"
              src={PDP}
              alt=""
              srcset=""
              className=" w-10 h-9"
            />
            <div className="ml-2 text-sm">
              <h3 className="text-[#D62B3C] font-normal mt-2">
                People Democratic Party
              </h3>
              <p className="text-[#585858] mt-1">36 Seats (46%)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="map mt-[215px] lg:mt-[150px]">
        <h3 className="text-white my-5 text-2xl"> Presidential Race</h3>
        <Map />

        <div className="stateDataTable">
          <div className="flex flex-col">
            <div className="overflow-x-auto bg-[#1B1F30] sm:-mx-6 border rounded-md border-[#393C4A] lg:--8 mt-8">
              <div className="title p-3 text-white rounded-tr-md rounded-tl-md ">
                <p className=" text-2xl font-medium">State results</p>
              </div>
              <div className="inline-block min-w-full text-white py-2 sm:px-6 lg:px-5">
                <div className="overflow-hidden text-sm">
                  <table className="min-w-full border rounded-md border-[#393C4A] text-left text-sm font-light">
                    <thead className="border-b font-bold dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          States
                        </th>
                        <th scope="col" className="px-6 py-4">
                          APC
                        </th>
                        <th scope="col" className="px-6 py-4">
                          LP
                        </th>
                        <th scope="col" className="px-6 py-4">
                          PDP
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Leading
                        </th>
                      </tr>
                    </thead>
                    {objectKeys.map((items, index) => {
                      return (
                        <tbody>
                          <tr
                            key={index}
                            className="border-b dark:border-neutral-500"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {items[0]}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {numeral(items[1][2].candidate_votes).format(
                                "0,0"
                              )}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {numeral(items[1][0].candidate_votes).format(
                                "0,0"
                              )}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {numeral(items[1][1].candidate_votes).format(
                                "0,0"
                              )}
                            </td>
                            <td className="whitespace-nowrap px-6 py-7 bg-[#0AA83F]">
                              LP
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
