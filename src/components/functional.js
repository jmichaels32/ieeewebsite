// General Imports
import React from 'react';

// Import CSS
import '../scss/functional.scss';

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

export default BubbleButton;
