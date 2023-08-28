// General Imports
import React from 'react';

// Import CSS
import '../scss/landingpage.scss';

// Images Imports
import search_icon from '../images/search_icon.png';
import ieee_logo from '../images/ieee_logo.png';

function LandingPage() {
  return (
    <div className="landingpage">
      <div className="landingpage__intro">
        <div className="landingpage__intro--navbar">
          <div className="landingpage__intro--navbar-IEEE">
            <img src={ieee_logo} height="25" alt="IEEE" />
          </div>
          <div className="landingpage__intro--navbar-search">
            <img src={search_icon} className="landingpage__intro--navbar-search-image" height="25" alt="" />
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
          <div id="landingpage__intro--infotext">
            Info Text
          </div>
          <div id="landingpage__intro--infojoin">
            Info Join
          </div>
          <div id="landingpage__intro--infostanford">
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
