import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Reviews = () => {
  return (
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

          <div className="next-container">
            <span className="next"></span>
          </div>
          <div className="logo-container">
            <a href="https://clutch.co/profile/red-key-solutions#summary" target="_blank" rel="noreferrer">
              <img width="77" height="22" src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg" 
              className="logo-image" alt="Clutch Logo" loading="lazy" />
            </a>
          </div>
          <div className="review-count-container">
            <span className="review-count">
              <a href="https://clutch.co/profile/red-key-solutions#summary" target="_blank" rel="noreferrer">31 Reviews</a>
            </span>
          </div>
        </Col>
        
       
        <Col md={2} className="review-info">
          <div className="info-label">
            <span className="info-number"><b>20 </b></span>
            <span className="info-unit"> Years</span>
          </div>
          <div className="info-description">Proven Track Record</div>
        </Col>
        
        <Col md={2} className="review-info">
          <div className="info-label">
            <span className="info-number"><b>98</b></span>
            <span className="info-unit">%</span>
          </div>
          <div className="info-description">Customer Satisfaction</div>
        </Col>
        <Col md={2} className="review-info">
          <div className="info-label">
            <span className="info-number"><b>1,500 </b></span>
            <span className="info-unit"> Projects</span>
          </div>
          <div className="info-description">We Have Completed</div>
        </Col>
        
        <Col md={2} className="review-info">
          <div className="info-label">
            <span className="info-number"><b>3 </b></span>
            <span className="info-unit"> Mins</span>
          </div>
          <div className="info-description">Average Answer Time</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
