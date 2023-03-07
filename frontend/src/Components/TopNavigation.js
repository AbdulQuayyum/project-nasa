import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BsClockHistory } from 'react-icons/bs';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import logo from '../Assets/Images/logo.png';

const TopNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="top-navigation">
      <div className="top-navigation-links">
        <div className="top-navigation-links-logo">
          <img src={logo} alt='' height='auto' />
        </div>
      </div>
      <div className="top-navigation-links-container">
        <Link to="/">
          <p>
            Launch <HiOutlineRocketLaunch />
          </p>
        </Link>
        <Link to="/Upcoming">
          <p>
            Upcoming <HiOutlineClipboardList />
          </p>
        </Link>
        <Link to="/History">
          <p>
            History <BsClockHistory />
          </p>
        </Link>
      </div>
      <div className="top-navigation-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="top-navigation-menu-container scale-up-center">
            <div className="top-navigation-menu-container-links">
              <Link to="/">
                <p>
                  Launch <HiOutlineRocketLaunch />
                </p>
              </Link>
              <Link to="/Upcoming">
                <p>
                  Upcoming <HiOutlineClipboardList />
                </p>
              </Link>
              <Link to="/History">
                <p>
                  History <BsClockHistory />
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavigation;
