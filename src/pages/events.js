// General Imports
import React, { useState, useEffect } from 'react';

// Import CSS
import '../scss/events.scss';
import '../scss/landingpage.scss';

// Import Components/Images
import search_icon from '../images/search_icon.png';
import ieee_logo from '../images/ieee_logo.png';

function Events() {
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
    <div className="events">
      {showNav && <div className="landingpage__intro--navbar events-navbar">
          <div className="landingpage__intro--navbar-IEEE">
            <a href="https://www.ieee.org" className="landingpage__intro--navbar-IEEE-button">
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
        <div className="events__content">
          <div className="events__content-text">
            Upcoming <span className="events__content-text__events">Events</span>
          </div>
        </div>
        <div className="events__content"
          style={{ overflow: 'hidden'}}>
          <div className="events__content-text"
            style={{ color: 'black' }}>
            Upcoming <span className="events__content-text__events">Events</span>
          </div>
        </div>
    </div>
  );
}

export default Events;
