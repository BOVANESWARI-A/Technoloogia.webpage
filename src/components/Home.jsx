// src/components/Home.jsx
import React from 'react';
import { Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoComponent from '../About/LogoComponent';
import Reviews from '../About/Reviews';
import Background from '../About/Background';
import HeadSubheadImage from '../About/HeadSubheadImage';
import FeaturesSection from '../About/FeaturesSection';
import Aboutbutton from './Aboutbutton';
import Solutions from './Solutions';
import Industries from './Industries';
import Challenges from '../challenges/Challenges';
import CardsGrid from '../About/CardsGrid';
import ContactSection from '../About/ContactSection';
import Section from '../About/Section';
import FooterSect from './FooterSect';
import Footer from './Footer';




const Home = () => {
  return (
    <div>
     
      <Navbar collapseOnSelect expand="md" bg="white" variant="dark">
        <Navbar.Brand>
          <LogoComponent />
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-middle'>

          <Nav className="mr-auto">
          <NavDropdown className='fw-bold text-secondary' title=".h" id="collapsible-nav-dropdown">
          <NavDropdown.Item href="#">IT Services</NavDropdown.Item>
              <NavDropdown.Item href="#">App Development</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className='fw-bold text-secondary' title="solutions" id="collapsible-nav-dropdown">
          <NavDropdown.Item href="#action3">About us</NavDropdown.Item>
                <NavDropdown.Item href="#">Why us</NavDropdown.Item>
                <NavDropdown.Item href="#">Team</NavDropdown.Item>
                <NavDropdown.Item href="#">Careers</NavDropdown.Item>
                <NavDropdown.Item href="#">Partners & Certifications</NavDropdown.Item>
                <NavDropdown.Item href="#">Reviews & Awards</NavDropdown.Item>
          </NavDropdown>
            <NavDropdown className='fw-bold text-secondary' title="Company" id="collapsible-nav-dropdown"></NavDropdown>
            <Nav.Link href="#" className='fw-bold text-secondary'>Case Studies</Nav.Link>
            <Nav.Link href="#" className='fw-bold text-secondary'>Blog</Nav.Link>
            <NavDropdown className='fw-bold text-secondary' title="Resources" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action3">Schedule a consultation</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Events</NavDropdown.Item>
                <NavDropdown.Item href="#action4">FAQ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto align-items-center">
            <Nav.Link href="#" className="text-secondary">
              Client Support
            </Nav.Link>
            <Nav.Link href="#" className='fw-bold text-secondary'>1-800-356-8933</Nav.Link>
            <Button variant="primary"  className="ml-2" style={{ backgroundColor: '#010ED0'}}>
              Contact Us
            </Button>  
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr style={{ borderColor: 'black', marginTop: '30px' }} />
      <HeadSubheadImage />
      <Reviews />
     <Background />
      < FeaturesSection />
      <Aboutbutton />
   <Solutions />
 <Industries />
 <Challenges />
 <CardsGrid />


 
 <ContactSection />
 <Section />
 <FooterSect />
 <Footer />
 
    </div>
  )
};
export default Home;












