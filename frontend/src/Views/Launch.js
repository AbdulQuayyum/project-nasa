import React, { useState, useRef, useEffect } from 'react';
import Flatpickr from 'react-flatpickr'
import Layout from '../Layout/Layout'

import "flatpickr/dist/flatpickr.css";

const Launch = () => {
  const [picker, setPicker] = useState(new Date())
  const [missionName, setMissionName] = useState("")

  const handleMissionName = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    setMissionName(value);
  }

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
            <li>Planetary radius 1.6 times Earth's radius.</li>
            <li>Effective stellar flux 0.36 times Earth's value and 1.11 times Earth's value</li>
          </ul>
        </div>
        <div className="main-div flex items-center justify-center">
          <div className="main-div-sub w-full py-4 flex items-center justify-center">
            <label className='form-label' htmlFor='default-picker'>
              Launch Date
            </label>
            <Flatpickr className='' value={picker} onChange={date => setPicker(date)} id='default-picker' />
          </div>
          <div className="main-div-sub w-full py-4 flex items-center justify-center">
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
              className="bg-[#F7F7F7] text-gray-400 text-lg rounded-xl outline-none focus:bg-[#F0F0F0] block w-full px-5 py-2.5 dark:placeholder-gray-400"
            />
          </div>
          <div className="main-div-sub w-full py-4 flex items-center justify-center">
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
              className="bg-[#F7F7F7] text-gray-400 text-lg rounded-xl outline-none focus:bg-[#F0F0F0] block w-full px-5 py-2.5 dark:placeholder-gray-400"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Launch
