import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './Challenges.css';

const h2Style = {
    fontSize: '38px',
    color: '#DEE0FF', 
  };

const Challenges = () => {
  return (
    <section className="bg-dark py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="text-center">
          <Col md={12} lg={6} className="text-top-left mt-4 mt-lg-0">
            <button className="btn btn-dark btn-sm my-5">What we use</button>
          </Col>
            <h2 className="text-light" style={h2Style}> 
            <b>Bringing the best IT vendors to you.</b></h2>

            <button className="btn btn-dark btn-lg btn-full-width"> Working only with the best, to ensure the quality of our services,and to bring state of the art technology to those who need it.
            </button>
          </Col>
        </Row>
            
            </Container>
        </section>
  );
};

export default Challenges;
