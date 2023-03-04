import React, { useState } from "react";
import moment from "moment";
import Map from "./Map";
import Chart from "./Chart";
import MapOne from "./MapOne";
import Statistics from "./Statistics";
import Table from "./Table";

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
  const [mapOneState, setMapOneState] = useState(false);
  const [tableState, setTableState] = useState(false);
  // const [mapState, setMapState] = useState(false);
  // const [mapState, setMapState] = useState(false);

  const ElectionOptions = [
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
  const [titleText, setTileText] = useState("");

  const handleYearChange = (e) => {
    setYears(e.target.value);
    console.log(years);
  };

  const handleElection = (e) => {
    const ElectValue = e.target.value;
    setElectionData(ElectValue);
    setTileText(ElectValue);

    if (titleText === "Pre-Election") {
      setMapOneState(true);
      setTableState(false);
      setMapState(false);
    } else if (titleText === "Election Data") {
      setMapState(true);
      setMapOneState(false);
      setTableState(false);
    } else if (titleText === "Post-Election Data") {
      setMapState(true);
      setMapOneState(false);

    }
    console.log(electionData);
  };

  const handleChange = (e) => {
    const valueP = e.target.value;
    setPresidentData(valueP);
    if (
      valueP === "Presidential" ||
      "Gubernatorial" ||
      "Senate" ||
      "House of Representatives"
    ) {
      setTableState(true);
      setMapState(false);
      setMapOneState(false);
    } else {
      setTableState(false);
      setMapState(true);
      setMapOneState(false);
    }
    console.log(presidentData);
  };

  return (
    <section className="px-5 lg:px-14">
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
        <div className="filterOption text-white flex justify-between">
          <select
            name="electionData"
            value={electionData}
            onChange={handleElection}
            className="p-3 rounded-md bg-[#181C2E] border-[#393C4A] outline-none w-[250px] h-[60px] border-2"
            data-te-select-init
          >
            {/* {ElectionOptions.map((items, index) => {
              <option key={index} value={items.value}>
                {items.label}
              </option>;
            })} */}
            <option className="border-b text-sm p-3" value="Pre-Election">
              Pre-Election
            </option>
            <option value="Election Data">Election Day Live Updates</option>
            <option value="Post-Election Data">Post-Election Analysis</option>
          </select>

          <select
            name="electoral-office"
            className="p-3 rounded-md bg-[#181C2E] border-[#393C4A] outline-none w-[250px] h-[60px] border-2 ml-5"
            value={presidentData}
            data-te-select-init
            onChange={handleChange}
          >
            {/* {officeOptions.map((items, index) => {
              <option key={index} value={items.value}>
                {items.label}
              </option>;
            })} */}
            <option className="border-b text-sm p-3" value="Presidential">
              Presidential
            </option>
            <option className="border-b text-sm p-3" value="Gubernatorial">
              Gubernatorial
            </option>
            <option className="border-b text-sm p-5 my-5" value="Senate">
              Senate
            </option>{" "}
            <option
              className="border-b text-sm p-3"
              value="House of Representatives"
            >
              House of Representatives
            </option>
          </select>

          <select
            value="years"
            className="p-3 rounded-md bg-[#181C2E] border-[#393C4A] outline-none w-[250px] h-[60px] border ml-5"
            onChange={handleYearChange}
            data-te-select-init
          >
            {yearList.map((items, index) => (
              <option
                className="border-t border-[#393C4A] outline-none bg-[#181C2E] text-sm p-5"
                key={index}
                value={items}
              >
                {items}
              </option>
            ))}
          </select>
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
          <Map />
          <Chart />
        </>
      )}

      {tableState && (
        <>
          <Table />
        </>
      )}
      {/* <>
        <Statistics />
      </> */}
    </section>
  );
};

export default Hero;
