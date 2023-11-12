// General Imports
import React from 'react';

// Import CSS
import '../scss/leadership.scss';
import '../scss/landingpage.scss';

// Import Components/Images
import { ProfileCard } from '../components/functional.js';
import LeadershipBackground from '../images/leadership_text_background.png';

function Leadership() {
  return (
    <div className="leadership">
      <div className="landingpage__bottom--decal">
        <div>Stanford University</div>
        <div>IEEE</div>
        <div>Stanford, California</div>
      </div>
      <div className="leadership__profilepane">
        <img className="leadership__profilepane-background" src={LeadershipBackground} alt="Leadership Background" />
        <ProfileCard 
          photoPath="" 
          name="Peter Parker"
          description="This is spiderman. He lives in New York and saves people from comic book villains. He's got super powers."/>
        <ProfileCard 
          photoPath="" 
          name="Peter Parker"
          description="This is spiderman. He lives in New York and saves people from comic book villains. He's got super powers."/>
        <ProfileCard 
          photoPath="" 
          name="Peter Parker"
          description="This is spiderman. He lives in New York and saves people from comic book villains. He's got super powers."/>
      </div>
      <div className="leadership__profilepane">
        <img className="leadership__profilepane-background" src={LeadershipBackground} alt="Leadership Background" />
        <ProfileCard 
          photoPath="" 
          name="Peter Parker"
          description="This is spiderman. He lives in New York and saves people from comic book villains. He's got super powers."/>
        <ProfileCard 
          photoPath="" 
          name="Peter Parker"
          description="This is spiderman. He lives in New York and saves people from comic book villains. He's got super powers."/>
        <ProfileCard 
          photoPath="" 
          name="Peter Parker"
          description="This is spiderman. He lives in New York and saves people from comic book villains. He's got super powers."/>
      </div>
      <a href="/" className="leadership__return">
        Back to Home
      </a>
    </div>
  );
}

export default Leadership;
