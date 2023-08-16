import React from 'react';
import { Container, Navbar , Nav} from 'react-bootstrap';

const SocialIcon = () => {
  return (
    <Navbar bg="light" variant="light" className="footer">
      <Container>
      <Nav className="ms-auto">
          <Nav.Link href="http://linkedin.com" target="_blank">
            <i className="bi bi-linkedin"></i> LinkedIn
          </Nav.Link>
          <Nav.Link href="https://github.com/" target="_blank">
            <i className="bi bi-github"></i> Github
          </Nav.Link>
          <Nav.Link href="https://twitter.com/" target="_blank">
            <i className="bi bi-twitter"></i> Twitter
          </Nav.Link>
          <Nav.Link href="https://facebook.com/" target="_blank">
            <i className="bi bi-facebook"></i> Facebook
          </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
};

export default SocialIcon; 
