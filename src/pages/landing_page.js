// General Imports
import React from 'react';

// Import CSS
import '../scss/landingpage.scss';

// Images Imports
import search_icon from '../images/search_icon.png';
import ieee_logo from '../images/ieee_logo.png';
import stanford_logo from '../images/stanford_logo.png';
import vertical_circuit from '../images/vertical_circuit.jpeg';
import horizontal_circuit from '../images/horizontal_circuit.jpeg';
import stanford_scientists from '../images/stanford_scientists.jpeg';
import ai_error from '../images/ai_error.png';

// SVG Imports
import { ReactComponent as JoinLogo } from '../images/join_now.svg';

// Components Import
import Circle from '../components/shapes.js';
import BubbleButton from '../components/functional.js';

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
            <Circle className="landingpage__intro--info-text_circle"/> 
            <div className="landingpage__intro--info-text_info"> <b>IEEE</b> is the world's largest professional organization dedicated to advancing technology. <br /> <br /> This is <b>Stanford</b>'s chapter.</div>
          </div>
          <div className="landingpage__intro--info-join">
            <JoinLogo className="landingpage__intro--info-join_image"/>
            <div className="landingpage__intro--info-join_text"> JOIN <br /> NOW </div>
          </div>
          <div className="landingpage__intro--info-stanford">
            <img src={stanford_logo} alt="Stanford"/>
          </div>
        </div>
      </div>
      <div className="landingpage__bottom">
        <div className="landingpage__bottom--decal">
          <div>Stanford University</div>
          <div>IEEE</div>
          <div>Stanford, California</div>
        </div>
        <div className="landingpage__bottom--about">
          <div className="landingpage__bottom--about-text">
            <div> <span className="landingpage__bottom--about-text_about">ABOUT</span> The Institute of Electrical and Electronics Engineers (IEEE) is committed to fostering technological innovation and excellence for the benefit of humanity. Stanford's chapter focuses on cultivating
              close connections between students, professors, and companies. Events include faculty lunches, VIP company tours, and more. 
            </div>
          </div>
          <div className="landingpage__bottom--about-buttons">
            <BubbleButton text="Events" link="/Events"/>
            <BubbleButton text="IEEE" link=""/>
          </div>
          <img className="landingpage__bottom--about_imgvertical" src={vertical_circuit} alt=""/>
          <img className="landingpage__bottom--about_imghorizontal" src={horizontal_circuit} alt=""/>
        </div>
        <div className="landingpage__bottom--people">
          <div className="landingpage__bottom--people-text">
            <div className="landingpage__bottom--people-text_title"> Our People </div>
            <div className="landingpage__bottom--people-text_body"> This club is for you. Whether you’ve just taken your first STEM class or you’re about to start your career, we aim to provide the highest quality opportunities for your time. 
              Our network spans across all divisions of Stanford and industry. Read about our leadership <a className="landingpage__bottom--people-text_here" href="/Leadership">here</a>.
            </div>
          </div>
          <div className="landingpage__bottom--people-imgwrapper">
            <img className="landingpage__bottom--people-imgwrapper_scientists" src={stanford_scientists} alt=""/>
          </div>
          <img className="landingpage__bottom--people_aierror" src={ai_error} alt=""/>
        </div>
        <div className="landingpage__bottom--join">
          Ready to join?
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
