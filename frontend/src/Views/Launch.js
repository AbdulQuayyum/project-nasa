import React from 'react'
import Layout from '../Layout/Layout'

const Launch = () => {
  return (
    <Layout>
      <div>
        <div className="info-div">
          <h3>
            Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets
          </h3>

          <h3>
            Only confirmed planets matching the following criteria are available for the earliest scheduled missions:
          </h3>
          <ul>
            <li>Planetary radius 1.6 times Earth's radius</li>
            <li>Effective stellar flux 0.36 times Earth's value and 1.11 times Earth's value</li>
          </ul>
        </div>
        <div className="main-div">
          <div className="main-div-sub">
            <h3>
              Launch Date
            </h3>
            <div className="flex items-center justify-center">
              <div
                className="relative mb-3 xl:w-96"
                dataTeDatepickerInit
                dataTeInputWrapperInit>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="Select a date" />
                <label
                  htmlFor="floatingInput"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >Select a date
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Launch