import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const FeaturesSection = () => {
  return (
    <Container>
      <Row>
        <Feature
          iconSrc="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Cost-effectiveness.svg"
          title="Cost-effectiveness"
          content="We offer affordable IT solutions that help you reduce costs and improve your bottom line."
        />
        <Feature
          iconSrc="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Innovative.svg"
          title="Innovative Technology"
          content="We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition."
        />
        <Feature
          iconSrc="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Industry.svg"
          title="Industry Expertise"
          content="We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs."
        />
        <Feature
          iconSrc="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Scalability.svg"
          title="Scalability"
          content="Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment."
        />
      </Row>
      <hr /> 
    </Container>
  );
};
const Feature = ({ iconSrc, title, content }) => {
  return (
    <Col md={3}>
      <div className="feature">
        <img src={iconSrc} alt={title} className="feature-icon" />

        <h4 className="feature-title">{title}</h4>
        <p className="feature-content">{content}</p>  

        
      </div>
    </Col>
    
  );
};

export default FeaturesSection;
