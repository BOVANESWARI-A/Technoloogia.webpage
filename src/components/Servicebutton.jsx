import React from 'react';
import { Button } from 'react-bootstrap';




const Servicebutton = () => {
    return (
      <div className="custom-button-container animated fadeIn">
        <div className="custom-button-widget-container">
          <div className="custom-button-wrapper">
            <a className="custom-button-link custom-button-size" href="https://tecnologia.vamtam.com/solutions/">
              <Button className="custom-button-content" variant="primary" style={{ backgroundColor: '#DEE0FF', marginBottom: '10px' }}>
                <span className="custom-button-text">Services</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Servicebutton;
  