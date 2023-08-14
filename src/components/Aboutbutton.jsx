import React from 'react';
import { Button } from 'react-bootstrap';



const AboutButton = () => {
  const buttonStyles = {
    margin: '20px',
    border: '2px solid #010ED0', 
    borderRadius: '5px', 
  };

  return (
    <div className="about-button-container">
      <Button
        style={buttonStyles} 
        className="custom-button custom-link-button custom-small-size"
        href="https://tecnologia.vamtam.com/about/"
      >
        <span className="button-content-wrapper">
          <span className="button-text">
            <span className="button-label">About Tecnologia</span>
          </span>
        </span>
      </Button>
    </div>
  );
};

export default AboutButton;
