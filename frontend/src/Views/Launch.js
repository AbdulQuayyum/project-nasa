import React, { useState, useMemo } from 'react';
import { HiOutlineArrowRight } from "react-icons/hi";
import Select from 'react-select'
import Flatpickr from 'react-flatpickr'
import Layout from '../Layout/Layout'

import "flatpickr/dist/flatpickr.css";

const Launch = (props) => {
  const [picker, setPicker] = useState(new Date())
  const [missionName, setMissionName] = useState("")
  const [rocketType, setrocketType] = useState("")
  const [selected, setSelected] = useState("")
  const [newData, setNewData] = useState("")
  
  const today = new Date().toISOString().split("T")[0]

  const selectorBody = useMemo(() => {
    return props.planets?.map(planet =>
      <option value={planet.kepler_name} key={planet.kepler_name}>{planet.kepler_name}</option>
    );
  }, [props.planets]);

  const handleMissionName = (event) => {
    const value = event.target.value
    setMissionName(value);
  }

  const handleRocketType = (event) => {
    const value = event.target.value
    setrocketType(value);
  }

  const changeSelectOptionHandler = (e) => {
    setSelected(e)
    const newValue = e.country_code
    // console.log(newValue)
    const fetchNewData = async () => {
      try {
        const response = await fetch(`https://makecards-bd-ulrhs.ondigitalocean.app/api/zenith/support/country/${newValue}`);
        const data = await response.json();
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchNewData();
  }

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: '#F7F7F7',
      borderColor: "transparent",
      borderRadius: "12px",
      minHeight: '48px',
      padding: "0px 10px"
    })
  };

  return (
    <Layout>
      <div>
        <div className="info-div flex items-center flex-col justify-center">
          <h3>
            Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets.
          </h3>

          <h3>
            Only confirmed planets matching the following criteria are available for the earliest scheduled missions:
          </h3>
          <ul>
            <li>Planetary radius &lt; 1.6 times Earth's radius.</li>
            <li>Effective stellar flux &gt; 0.36 times Earth's value and &lt; 1.11 times Earth's value</li>
          </ul>
        </div>
        <form onSubmit={props.submitLaunch} className="main-div flex flex-col items-center justify-center">
          <div className="main-div-sub gap-5 py-4 flex items-center justify-center">
            <label
              className="block mb-2 text-base font-semibold text-start" htmlFor='default-picker'>
              Launch Date
            </label>
            <Flatpickr className='bg-[#F7F7F7] text-gray-400 text-lg rounded-xl outline-none focus:bg-[#F0F0F0] block px-5 py-2.5 dark:placeholder-gray-400' min={today} max="2040-12-31" defaultValue={today}  value={picker} onChange={date => setPicker(date)} id='default-picker' />
          </div>
          <div className="main-div-sub gap-5 py-4 flex items-center justify-center">
            <label
              htmlFor="base-input"
              className="block mb-2 text-base font-semibold text-start"
            >
              Enter Mission Name
            </label>
            <input
              type="text"
              name="name"
              value={missionName}
              onChange={handleMissionName}
              required
              placeholder="Enter Mission Name"
              id="base-input"
              className="bg-[#F7F7F7] text-gray-400 text-lg rounded-xl outline-none focus:bg-[#F0F0F0] block px-5 py-2.5 dark:placeholder-gray-400"
            />
          </div>
          <div className="main-div-sub gap-5 py-4 flex items-center justify-center">
            <label
              htmlFor="base-input"
              className="block mb-2 text-base font-semibold text-start"
            >
              Enter Rocket Type
            </label>
            <input
              type="text"
              name="name"
              value={rocketType}
              onChange={handleRocketType}
              required 
              defaultValue="Explorer IS1" 
              id="base-input"
              className="bg-[#F7F7F7] text-gray-400 text-lg rounded-xl outline-none focus:bg-[#F0F0F0] block w-full px-5 py-2.5 dark:placeholder-gray-400"
            />
          </div>
          <div className="main-div-sub gap-5 py-4 flex items-center justify-center">
            <label
              className="block mb-2 text-base font-semibold text-start" htmlFor='default-picker'>
              Launch Date
            </label>
            <Select
              id="planets-selector"
              name="planets-selector"
              // value={selected}
              // options={newData}
              styles={customStyles}
            // onChange={changeSelectOptionHandler}
            // Placeholder="Please select a country"
            // getOptionLabel={(newData) => newData.country_name}
            // getOptionValue={(newData) => newData.country_code}
            >
              {selectorBody}
            </Select>
          </div>
          <button
            show={props.entered}
            disabled={props.isPendingLaunch}
            className="text-white inline-flex text-center items-center text-lg font-bold py-3 px-10 rounded-full outline-none focus:outline-none bg-[#32A5B6] shadow hover:shadow-lg transition-all duration-150">
            Launch Mission <HiOutlineArrowRight className="ml-2" />
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Launch
