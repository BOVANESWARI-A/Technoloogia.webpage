import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialIcon from './SocialIcon';

const Footer = () => {
  return (
    <section className="contacts-section" style={{ backgroundColor: 'whitesmoke', color: 'Grey' }}>
     
        
        <Container className="review-section">
      <Row>
        <Col md={2} className="review-info">

          <div className="review-label">
            <span className="review-heading">Reviewed on</span>
          </div>

          <div className="star-rating-container">
          <div className="star-rating orange-stars"  itemScope itemType="http://schema.org/Rating">
           
              <i className="star-icon">★</i>
              <i className="star-icon">★</i>
              <i className="star-icon">★</i>
              <i className="star-icon">★</i>
              <i className="star-icon">★</i>

              
            </div>
          </div>
            <div className="clutch-section">
              <a href="https://clutch.co/profile/red-key-solutions#summary" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg"
                  alt="Clutch Logo"
                  className="clutch-logo"
                />
              </a>
              <span className="clutch-reviews" style={{ color: 'orange' }}>
                <a href="https://clutch.co/profile/red-key-solutions#summary" target="_blank" rel="noopener noreferrer">
                  31 Reviews
                </a>
              </span>
            </div>
          </Col>
          <Col md={3} className="d-flex align-items-start">
            <div className="address-section">
              <p style={{ marginBottom: '0' }}>
                <a
                  href="https://www.google.com/maps/place/WeWork+Office+Space+%26+Coworking/@40.7532064,-74.0243453,14z/data=!4m6!3m5!1s0x89c2593c748dd72f:0x71cfc30dce729157!8m2!3d40.7532064!4d-73.9893264!16s%2Fg%2F11gh63n3wc"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  Seventh Ave, 20th Floor New York, NY 10018
                </a>
              </p>
              <div className="contact-info">
                <a href="tel:18003568933" className="contact-link" style={{ color: 'black', textDecoration: 'none' }}>
                  T: 1-800-356-8933
                </a>
                <a href="mailto:office@tecnologia.com" className="contact-link" style={{ color: 'black', textDecoration: 'none' }}>
                  E: office@tecnologia.com
                </a>
              </div>
            </div>
          </Col>
          <Col md={3} className="d-flex align-items-start">
            <div className="social-links">
              <div className="d-flex flex-column">
               <SocialIcon />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom justify-content-center">
          <Col md={12} className="text-center"> 
            <p>© 2023 Tecnologia</p>
            <p>
              <a href="https://tecnologia.vamtam.com/terms-conditions/" style={{ color: 'black' }}>
                Terms & Conditions
              </a>{' '}
              |{' '}
              <a href="https://tecnologia.vamtam.com/privacy-policy/" style={{ color: 'black' }}>
                Privacy Policy
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
