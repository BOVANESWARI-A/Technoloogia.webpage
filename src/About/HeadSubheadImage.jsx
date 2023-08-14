import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';



const HeadSubheadImage = () => {
  return (
    <Container>
      <Row className="heading-subheading-image-container">
        <Col md={6} className="heading-subheading-column animated fadeIn">
          <h1 className="main-heading" style={{ fontSize: '60px' }}>
            <b>We manage your IT,
            <br />
            so you can manage
            <br />
            your business.</b>
          </h1>
          <p className="subheading" style={{ fontSize: '40px' }}>
            Take charge of your business
            <br />
             continuity with innovative IT
             <br /> solutions
          </p>
          <Button className="consultation-button mt-3" href="#form" style={{ backgroundColor: '#010ED0' }}>
            Schedule a Free Consultation
          </Button>
          <Button className="services-button  mt-2" href="https://tecnologia.vamtam.com/solutions/" style={{ backgroundColor: '#DEE0FF', marginLeft: '10px' }}>
          <span style={{ color: '#010ED0' }}>Services</span>
          </Button>
        </Col>
        <Col md={6} className="image-column animated fadeIn">
          <Image
            src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/GettyImages-618762080-1.jpg"
            alt=""
            className="main-image"
            fluid
          />
        </Col>
      </Row>
      <hr style={{ borderColor: 'black', marginTop: '30px' }} />
    </Container>
   
  );
};

export default HeadSubheadImage;
