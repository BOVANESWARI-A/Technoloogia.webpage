import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faLaptopCode, faShieldAlt, faCloud, faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';


const Solutions = () => {
  return (
    <section className="solution-section" style={{ backgroundColor: '#AFC6E6' }}>


      <div className="solution-container" >
      <button className="solution-title-button" 
      style={{ fontWeight: '300', border: 'none', backgroundColor: 'transparent', color: 'black' }}>
            How We Do
          </button>
          <div className="solution-title" style={{ textAlign: 'top-left', margin: '10px 0' }}>
          <h2 style={{ fontWeight: 'bold' }}>Solutions</h2>
        </div>
        
        
        <CardGroup>

          {/* Managed Services Card */}
          <Card className="solution-card" style={{ margin: '10px'}}>
            <Card.Body>
              <div className="solution-card-icon">
                <FontAwesomeIcon icon={faCog} size="3x"  />
              </div>
              <Card.Title className="solution-card-title">Managed Services</Card.Title>
              <Card.Text className="solution-card-description">
                Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.
              </Card.Text>
              <a className="solution-card-link" href="https://tecnologia.vamtam.com/solutions/managed-services/">Learn more</a>
            </Card.Body>
          </Card>

          {/* IT Consulting & Advisory Card */}
          <Card className="solution-card" style={{ margin: '10px' }}>
            <Card.Body>
              <div className="solution-card-icon">
                <FontAwesomeIcon icon={faLaptopCode} size="3x" />
              </div>
              <Card.Title className="solution-card-title">IT Consulting & Advisory</Card.Title>
              <Card.Text className="solution-card-description">
                The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth.
              </Card.Text>
              <a className="solution-card-link" href="https://tecnologia.vamtam.com/solutions/it-consulting-advisory/">Learn more</a>
            </Card.Body>
          </Card>

          {/* Cyber Security Card */}
          <Card className="solution-card" style={{ margin: '10px' }}>
            <Card.Body>
              <div className="solution-card-icon">
                <FontAwesomeIcon icon={faShieldAlt} size="3x"  />
              </div>
              <Card.Title className="solution-card-title">Cyber Security</Card.Title>
              <Card.Text className="solution-card-description">
                Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.
              </Card.Text>
              <a className="solution-card-link" href="https://tecnologia.vamtam.com/solutions/cyber-security/">Learn more</a>
            </Card.Body>
          </Card>
          </CardGroup>
<br></br>

<br></br>
          {/* Web Development Card */}
          <CardGroup>
          <Card className="solution-card" style={{ margin: '10px' }}>
            <Card.Body>
              <div className="solution-card-icon">
                <FontAwesomeIcon icon={faCode} size="3x"  />
              </div>
              <Card.Title className="solution-card-title">Web Development</Card.Title>
              <Card.Text className="solution-card-description">
                Our web development services can help you establish an impactful online presence and reach your target audience effectively.
              </Card.Text>
              <a className="solution-card-link" href="https://tecnologia.vamtam.com/solutions/web-development/">Learn more</a>
            </Card.Body>
          </Card>

          {/* Mobile Development Card */}
          <Card className="solution-card" style={{ margin: '10px' }}>
            <Card.Body>
              <div className="solution-card-icon">
                <FontAwesomeIcon icon={faMobileAlt} size="3x" />
              </div>
              <Card.Title className="solution-card-title">Mobile Development</Card.Title>
              <Card.Text className="solution-card-description">
                We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.
              </Card.Text>
              <a className="solution-card-link" href="https://tecnologia.vamtam.com/solutions/mobile-development/">Learn more</a>
            </Card.Body>
          </Card>

          {/* Cloud Services Card */}
          <Card className="solution-card" style={{ margin: '10px' }}>
            <Card.Body>
              <div className="solution-card-icon">
                <FontAwesomeIcon icon={faCloud} size="3x" />
              </div>
              <Card.Title className="solution-card-title">Cloud Services</Card.Title>
              <Card.Text className="solution-card-description">
                With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.
              </Card.Text>
              <a className="solution-card-link" href="https://tecnologia.vamtam.com/solutions/cloud-services/">Learn more</a>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>


      
      <div className="view-all-button-container" style={{ textAlign: 'center', margin: '20px' }}>
      <a className="view-all-link blue-button" href="https://tecnologia.vamtam.com/solutions/">
        View All Solutions
      </a>
    </div>
    </section>
  );
};

export default Solutions;