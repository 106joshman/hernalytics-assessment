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
      <div className="flex justify-between">
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
        <div className="filterOption hdden text-white flex justify-between">
          <div className="selectOne">
            <Select
              className="p-3 rounded-md bg-[#181C2E] ml-5 border-2 border-[#393C4A] text-white text-base outline-none"
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
                  <Select.Option className="" key={index} value={item.value}>
                    {item.value}
                  </Select.Option>
                );
              })}
            </Select>
          </div>

          <div className="selectTwo">
            <Select
              className="p-3 rounded-md bg-[#181C2E] ml-5 border-2 border-[#393C4A] text[#393C4A] text-base outline-none"
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
                    className="text-white"
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
              className="p-3 rounded-md bg-[#181C2E] ml-5 border-2 border-[#393C4A] text[#393C4A] text-base outline-none"
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
                    className="text-white"
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

      <div className="horitontalLine my-8 border border-gray-600"></div>

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
