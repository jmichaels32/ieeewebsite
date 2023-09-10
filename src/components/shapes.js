// General Imports
import React from 'react';

// Import CSS
import '../scss/shapes.scss';

const Circle = ({ className }) => {
  const combinedClassName = `circle ${className}`;
  return <div className={combinedClassName}></div>;
}

export default Circle;
