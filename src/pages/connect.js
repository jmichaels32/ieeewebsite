// General Imports
import React, { useState, useEffect } from 'react';

// Import CSS
import '../scss/connect.scss';
import '../scss/landingpage.scss';

// Import Components/Images
import { ConnectCard } from '../components/functional.js';
import search_icon from '../images/search_icon.png';
import ieee_logo from '../images/ieee_logo.png';
import instagram from '../images/instagram.png';
import outlook from '../images/outlook.png';
import slack from '../images/slack.png';

function Connect() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const navbarHeight = document.querySelector('.landingpage__intro--navbar').offsetHeight * 2;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      if (currentScrollY > viewportHeight - navbarHeight) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="connect">
      {showNav && <div className="landingpage__intro--navbar events-navbar">
        <div className="landingpage__intro--navbar-IEEE">
          <a href="/" className="landingpage__intro--navbar-IEEE-button">
            <img src={ieee_logo} height="25" alt="IEEE" />
          </a>
        </div>
        <div className="landingpage__intro--navbar-search">
          <button className="landingpage__intro--navbar-search-image">
            <img src={search_icon} height="25" alt="" />
          </button>
          <input type="text" placeholder="Search" className="landingpage__intro--navbar-search-input"/>
        </div>
        <a href="https://www.ieee.org" className="landingpage__intro--navbar-other">
          About
        </a>
        <a href="../Leadership" className="landingpage__intro--navbar-other">
          People
        </a>
        <a href="../Connect" className="landingpage__intro--navbar-other">
          Get Involved
        </a>
      </div>}
      <div className="connect_panel">
        <ConnectCard logo={instagram} style={{ background: 'linear-gradient(45deg, red, blue)' }} textcolor={'var(--offwhite)'} content={"INSTAGRAM LINK"}/>
        <ConnectCard logo={slack} style={{ background: 'white', border: "1px solid black"}} content={"SLACK LINK"}/>
        <ConnectCard logo={outlook} style={{ background: 'lightblue' }} content={"EMAIL LIST"}/>
      </div>
    </div>
  )
}

export default Connect;
