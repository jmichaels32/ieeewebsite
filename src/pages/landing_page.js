// General Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Import CSS
import '../scss/landingpage.scss';

// Images Imports
import search_icon from '../images/search_icon.png';
import ieee_logo from '../images/ieee_logo.png';
import { ReactComponent as JoinLogo } from '../images/join_now.svg';

function LandingPage() {
  return (
    <div className="landingpage">
      <div className="landingpage__intro">
        <div className="landingpage__intro--navbar">
          <div className="landingpage__intro--navbar-IEEE">
            <button className="landingpage__intro--navbar-IEEE-button">
              <img src={ieee_logo} height="25" alt="IEEE" />
            </button>
          </div>
          <div className="landingpage__intro--navbar-search">
            <button className="landingpage__intro--navbar-search-image">
              <img src={search_icon} height="25" alt="" />
            </button>
            <input type="text" placeholder="Search" className="landingpage__intro--navbar-search-input"/>
          </div>
          <button className="landingpage__intro--navbar-other">
            About
          </button>
          <button className="landingpage__intro--navbar-other">
            People
          </button>
          <button className="landingpage__intro--navbar-other">
            Get Involved
          </button>
        </div>
        <div className="landingpage__intro--info">
          <div className="landingpage__intro--info-text">
            Info Text
          </div>
          <div className="landingpage__intro--info-join">
            <JoinLogo className="landingpage__intro--info-join_image"/>
            <div className="landingpage__intro--info-join_text"> JOIN <br /> NOW </div>
          </div>
          <div className="landingpage__intro--info-stanford">
            Stanford Logo
          </div>
        </div>
      </div>
      <div className="landingpage__bottom">
        <div className="landingpage__bottom--decal">
          Decal Bottom
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
