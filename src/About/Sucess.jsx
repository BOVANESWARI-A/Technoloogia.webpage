import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CardsGrid from './CardsGrid'; 

const Success = () => {
  return (
    <section className="do-section bg-light py-5">
      <Container>
        <Row className="do-row justify-content-between">
          <Col md={6} className="do-col">
          <Col md={6} className="text-md-left">
            <Button variant="light" size="sm" className="mt-3">WHERE WE DO</Button>
          </Col>
          <h2 className="heading-title  font-weight-bolder mt-3" style={{ fontSize: '70px'}}>
            
            <b>Success Stories</b></h2>  
            <CardsGrid/>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default Success;
