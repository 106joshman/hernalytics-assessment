import React, { useState, useEffect } from "react";
import moment from "moment";
// import Map from "./Map";
import Chart from "./Chart";
import MapOne from "./MapOne";
import Statistics from "./Statistics";
import Table from "./Table";
import { Select } from "antd";

const Hero = () => {
  const [years, setYears] = useState(new Date().getFullYear());
  const [electionData, setElectionData] = useState("");
  const [presidentData, setPresidentData] = useState("");
  const yearList = [];
  const yearEnd = 1959;

  for (let i = years; i >= yearEnd; i -= 4) {
    yearList.push(i);
  }

  // const screenSize = window.innerWidth > 768;

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const [mapState, setMapState] = useState(false);
  const [mapOneState, setMapOneState] = useState(true);
  const [tableState, setTableState] = useState(false);
  const [statisticState, setStatisticState] = useState(false);

  const electionOptions = [
    { value: "Pre-Election", label: "Pre-Election" },
    { value: "Election Day", label: "Election Day Live Update" },
    { value: "Post-Election Data", label: "Post-Election Analysis" },
  ];

  const officeOptions = [
    { value: "Presidential", label: "Presidential" },
    { value: "Gubernatorial", label: "Gubernatorial" },
    { value: "Senate", label: "Senate" },
    { value: "House of Representatives", label: "House of Representatives" },
  ];
  const [titleText, setTitleText] = useState("");

  const handleYearChange = (years) => {
    setYears(years);
    console.log(years);
  };
  // console.log(electionOptions[0])

  const handleElectionChange = (electionData) => {
    // const ElectValue = value;
    setElectionData(electionData);
    setTitleText(electionData);

    // console.log(electionData);
    // console.log(titleText);

    if (electionData === "Pre-Election") {
      setMapOneState(true);
      setTableState(false);
      setMapState(false);
      setStatisticState(false);
    } else if (electionData === "Election Day") {
      setMapOneState(false);
      setTableState(false);
      setMapState(false);
      setStatisticState(true);
    } else if (electionData === "Post-Election Data") {
      setMapOneState(false);
      setStatisticState(false);
      setTableState(false);
      setMapState(true);
    } else {
      setTableState(false);
      setMapOneState(true);
    }
  };

  const handleOfficeChange = (presidentData) => {
    const valueP = presidentData;
    setPresidentData(valueP);
    if (
      valueP === "Presidential" ||
      "Gubernatorial" ||
      "Senate" ||
      "House of Representatives"
    ) {
      setTableState(true);
      setMapState(false);
      setStatisticState(false);
      setMapOneState(false);
    } else {
      setTableState(false);
      setMapState(true);
      setStatisticState(false);
      setMapOneState(false);
    }
    console.log(presidentData);
  };

  return (
    <section className="px-5 lg:px-14 mb-8">
      <div className="flex justify-between flex-wrap">
        <div className="heading items-start lg:items-center flex-col text-white">
          <div className="headTop flex flex-col lg:flex-row lg:items-center">
            <h1 className="text-3xl font-semibold">
              {titleText ? titleText : "Pre-Election"}
            </h1>{" "}
            <span className="lg:ml-2 text-xs lg:text-sm uppercase w-max bg-[#181C2E] border border-[#242B47] rounded p-1">
              presidential / {moment().format("YYYY")}
            </span>
          </div>
          <div className="mt-2 text-xs lg:text-sm">
            <p className="uppercase flex">
              <span className="text-[#E5B805]">Updated</span>
              <span className="ml-2 flex">mar. 15, 2021, 9:43 a.m. edt</span>
            </p>
          </div>
        </div>
        <div className="filter">
          <div className="relative my-5 flex lg:hidden w-[300px] mx-auto">
            <button
              className="flex justify-between w-full h-[57px] text-base border text-[#E5B805] border-[#E5B805] items-center whitespace-nowrap rounded bg-[#1C2031] px-6 pt-2.5 pb-2 font-medium transition duration-150 ease-in-out motion-reduce:transition-none"
              type="button"
              onClick={handleShow}
            >
              Filter Option
              <span className="ml-2 w-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-[#E5B805]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>

          {show && (
            <div className="filterOptio text-white flex flex-col lg:flex-row justify-between">
              <div className="selectOne">
                <Select
                  className="p-3 rounded-md bg-[#181C2E] my-2 lg:ml-5 border-2 border-[#393C4A] text-white text-base outline-none"
                  bordered={false}
                  popupClassName="text-white border-t-2"
                  defaultValue="Pre-Election"
                  onChange={handleElectionChange}
                  listHeight={400}
                  style={{
                    width: 250,
                  }}
                >
                  {electionOptions.map((item, index) => {
                    return (
                      <Select.Option
                        className="bg-[#181C2E] my-2 border-t-2 hover:bg-[#181C2E] border-[#393C4A] rounded-none"
                        key={index}
                        value={item.value}
                      >
                        {item.value}
                      </Select.Option>
                    );
                  })}
                </Select>
              </div>

              <div className="selectTwo">
                <Select
                  className="p-3 rounded-md bg-[#181C2E] my-2 lg:ml-5 border-2 border-[#393C4A] text[#393C4A] text-base outline-none"
                  bordered={false}
                  popupClassName="text-white border-t-2"
                  defaultValue="Presidential"
                  onChange={handleOfficeChange}
                  style={{
                    width: 250,
                  }}
                >
                  {officeOptions.map((item, index) => {
                    return (
                      <Select.Option
                        className="bg-[#181C2E] my-2 border-t-2 hover:bg-[#181C2E] border-[#393C4A] rounded-none"
                        key={index}
                        value={item.value}
                      >
                        {item.value}
                      </Select.Option>
                    );
                  })}
                </Select>
              </div>

              <div className="selectThree">
                <Select
                  className="p-3 rounded-md bg-[#181C2E] my-2 lg:ml-5 border-2 border-[#393C4A] text[#393C4A] text-base outline-none"
                  bordered={false}
                  popupClassName="text-white border-t-2"
                  defaultValue="2023"
                  onChange={handleYearChange}
                  style={{
                    width: 250,
                  }}
                >
                  {yearList.map((item, index) => {
                    return (
                      <Select.Option
                        className="bg-[#181C2E] my-2 border-t-2 hover:bg-[#181C2E] border-[#393C4A] rounded-none"
                        key={index}
                        value={item}
                      >
                        {item}
                      </Select.Option>
                    );
                  })}
                </Select>
              </div>
            </div>
          )}

          <div className="filterOptio text-white hidden lg:flex lg:flex-row justify-between">
            <div className="selectOne">
              <Select
                className="p-3 rounded-md bg-[#181C2E] my-2 lg:ml-5 border-2 border-[#393C4A] text-white text-base outline-none"
                bordered={false}
                popupClassName="text-white border-t-2"
                defaultValue="Pre-Election"
                onChange={handleElectionChange}
                listHeight={400}
                style={{
                  width: 250,
                  backgroundColor: "#181C2E !important",
                }}
              >
                {electionOptions.map((item, index) => {
                  return (
                    <Select.Option
                      className="bg-[#181C2E] my-2 border-t-2 hover:bg-[#181C2E] border-[#393C4A] rounded-none"
                      key={index}
                      value={item.value}
                    >
                      {item.value}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>

            <div className="selectTwo">
              <Select
                className="p-3 rounded-md bg-[#181C2E] my-2 lg:ml-5 border-2 border-[#393C4A] text[#393C4A] text-base outline-none"
                bordered={false}
                popupClassName="text-white border-t-2"
                defaultValue="Presidential"
                onChange={handleOfficeChange}
                style={{
                  width: 250,
                }}
              >
                {officeOptions.map((item, index) => {
                  return (
                    <Select.Option
                      className="bg-[#181C2E] my-2 border-t-2 hover:bg-[#181C2E] border-[#393C4A] rounded-none"
                      key={index}
                      value={item.value}
                    >
                      {item.value}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>

            <div className="selectThree">
              <Select
                className="p-3 rounded-md bg-[#181C2E] my-2 lg:ml-5 border-2 border-[#393C4A] text[#393C4A] text-base outline-none"
                bordered={false}
                popupClassName="text-white border-t-2"
                defaultValue="2023"
                onChange={handleYearChange}
                style={{
                  width: 250,
                }}
              >
                {yearList.map((item, index) => {
                  return (
                    <Select.Option
                      className="bg-[#181C2E] my-2 border-t-2 hover:bg-[#181C2E] border-[#393C4A] rounded-none"
                      key={index}
                      value={item}
                    >
                      {item}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="horitontalLine my-8 hidden lg:flex border border-gray-600"></div>

      {mapOneState && (
        <>
          <MapOne />
        </>
      )}

      {mapState && (
        <>
          <MapOne />
          <Chart />
        </>
      )}

      {tableState && (
        <>
          <Table />
        </>
      )}
      {statisticState && (
        <>
          <Statistics />
        </>
      )}
    </section>
  );
};

export default Hero;
