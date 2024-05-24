import React, { useState } from 'react';
import './ButtonToggle.css';

const ButtonToggle = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    console.log("oooop");
    onClick();
  };

  return (
    <div
      className={isActive ? 'active' : ''}
      id="g-btn"
      onClick={handleClick}
    ></div>
  );
};

export default ButtonToggle;
