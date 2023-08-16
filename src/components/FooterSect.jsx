import React from 'react';
import { Col, Button, Image, Form, Nav } from 'react-bootstrap';

const FooterSect = () => {
  return (
    <div className="footer" style={{ background: '#000', display: 'flex' }}>
    
      <Col xs={12} md={9} className="footer-column" style={{ paddingRight: '30px' }}>
        <div style={{ marginLeft: '20px' }}>
          <h4 className="footer-heading text-white">Solutions</h4>
          <Nav className="flex-column">
            <Nav.Link href="https://tecnologia.vamtam.com/solutions/managed-services/" className="text-white">Managed Services</Nav.Link>
            <Nav.Link href="https://tecnologia.vamtam.com/solutions/it-consulting-advisory/" className="text-white">IT Consulting & Advisory</Nav.Link>
          </Nav>
        </div>
        <div style={{ marginLeft: '20px', marginTop: '30px' }}>
          <h4 className="footer-heading text-white">Company</h4>
          <Nav className="flex-column">
            <Nav.Link href="https://tecnologia.vamtam.com/about/" className="text-white">About us</Nav.Link>
            <Nav.Link href="https://tecnologia.vamtam.com/why-us/" className="text-white">Why us</Nav.Link>
          </Nav>
        </div>
        <div style={{ marginTop: '30px' }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-white">Don’t miss out updates</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I agree to the Privacy Policy and give my permission to process my personal data for the 
                purposes specified in the Privacy Policy."
                className="text-white"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </div>
      </Col>

    
    <Col xs={12} md={3} className="footer-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <div className="footer-logo">
          <a href="/">
            <Image
              src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/logo-footer.svg"
              alt=""
              width={113}
              height={77}
              loading="lazy"
            />
          </a>
        </div>
        <Button variant="primary" size="sm" href="#form" className="text-white" style={{ marginTop: '30px' }}>
          Schedule Consultation
        </Button>
      </div>
    </Col>
  </div>


  );
};
              
        
export default FooterSect;
