// General Imports
import React, { useState, useEffect } from 'react';

// Import CSS
import '../scss/landingpage.scss';
import '../scss/functional.scss';
import '../scss/connect.scss';

// Import images
import defaultProfileImage from '../images/profile_default.png'

// Creates a rounded button
// 
// Text is the text used inside the button
// Link is text for where the button directs to
const BubbleButton = ({ className, text, link }) => {
  const combinedClassName = `bubbleButton ${className}`;
  
  return (
    <a className={combinedClassName} href={link}>
      {text}
    </a>
  );
}

// Creates a profile card 
// Profile cards consist of profile photos vertically centered above the profile's name and the description provided
const ProfileCard = ({ photoPath, name, description}) => {
  photoPath = photoPath || defaultProfileImage;
  
  return (
    <div className="profile-card">
      <img className="profile-card__photo" src={photoPath} alt={name} />
      <div className="profile-card__description">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

const ConnectCard = ({ logo, style, textcolor, content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`connect_panel-pane${isFlipped ? ' flipped' : ''}`} 
      style={style}
      onClick={handleClick}
    >
      <div className="connect_panel-pane-front">
        <img src={logo} height="20%" alt={content} />
      </div>
      <div className="connect_panel-pane-back">
        <p style={{color: textcolor}}>{content}</p>
      </div>
    </div>
  );
}

export { BubbleButton, ProfileCard, ConnectCard };


