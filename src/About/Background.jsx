import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';




const Background = () => {
  return (
    <div className="background-container">
      <Container className="content-container">
        <Row className="content-row">
          <Col md={6} className="order-md-2" style={{ marginBottom: '20px', textAlign: 'right' }}>
            <img
              src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/shape-dots.svg"
              alt="Dots"
              style={{ width: '50%', height: 'auto' }}
            />
          </Col>
          <Col md={6} className="order-md-1" style={{ marginBottom: '20px' }}>
            <div className="elementor-heading-title " 
            style={{ color: '#DEE0FF', marginBottom: '20px' }}>What we do</div>

            <h2 className="elementor-heading-title " 
            style={{ color: '#DEE0FF', fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
              Simplifying IT <br /> for a complex world.
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Background;


