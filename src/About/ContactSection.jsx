import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const App = () => {
  
  return (
    <div className="app-container">
      <section className="contact-section">
      <Container>
      <Row className="justify-content-betweens" style={{ background: 'black', padding: '20px' }}>
            <Col md={6} style={{ color: '#DEE0FF' }}>
              <h2><b>Partner with Us for <br></br>
                Comprehensive IT</b></h2>
              </Col>
          </Row>
          <Row className="justify-content-between" style={{ background: '#DEE0FF', padding: '20px' }}>
            <Col md={6} >
              <div className="contact-info" style={{ width: '80%' }} >
                <h2>Contact us</h2>
                <p>
                  We’re happy to answer any questions you may have and help you determine <br></br>
                  which of our services best fit your needs.
                </p>
                <Button variant="link" href="tel:18003568933">
                  Call us at: 1-800-356-8933
                </Button>
              </div>
            </Col>
            <Col md={6} className="contact-form-right">
              <div className="consultation-form">
                <h5 className="consultation-title">Schedule a Free Consultation</h5>
                <i className="vamtamtheme- vamtam-theme-arrow-il"></i>
                <hr />
              <Form>
              <Form.Group controlId="formFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your first name" required />
    </Form.Group>
    <Form.Group controlId="formLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your last name" required />
    </Form.Group>
    <Form.Group controlId="formCompanyName">
      <Form.Label>Company / Organization</Form.Label>
      <Form.Control type="text" placeholder="Enter your company name" />
    </Form.Group>
    <Form.Group controlId="formEmail">
      <Form.Label>Company Email</Form.Label>
      <Form.Control type="email" placeholder="Enter your company email" required />
    </Form.Group>
    <Form.Group controlId="formPhone">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="tel" placeholder="Enter your phone number" pattern="[0-9()#&+*-=.]+" title="Only numbers and phone characters (#, -, *, etc) are accepted." />
    </Form.Group>
    <Form.Group controlId="formTopic">
      <Form.Label>How Can We Help You?</Form.Label>
      <Form.Control as="select">
        <option value="Select Option">Select Option</option>
        <option value="Managed Services">Managed Services</option>
        <option value="IT Consulting & Advisory">IT Consulting & Advisory</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="formMessage">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" rows={4} placeholder="To better assist you, please describe how we can help..." />
    </Form.Group>
    <Button type="submit" className="elementor-button elementor-size-sm">
      <span>
        <span className="elementor-button-text">Submit</span>
      </span>
    </Button>
    </Form>
  
    </div>
  
            </Col>
          </Row>
          
        </Container>
      </section>
     
    </div>
    
  );
};

export default App;