import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


const CardsGrid = () => {
  return (
    <section className="section-boxed">
      <Container>
      <Row className="justify-content-center row-cols-1 row-cols-md-3 g-4">
          <Col>
            <Card className="post card-custom mb-4">
              <Card.Link className="post__thumbnail__link" href="https://tecnologia.vamtam.com/2023/03/20/major-insurance-provider-saves-750k-per-month-with-big-data-migration/">
                <Card.Img variant="top" src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Insurance-1024x743.jpg" alt="Post thumbnail" className="Medium-image img-fluid" />
              </Card.Link>
              <Card.Body className="text">
                <Card.Title className="post__title">
                  <Card.Link href="https://tecnologia.vamtam.com/2023/03/20/major-insurance-provider-saves-750k-per-month-with-big-data-migration/">
                    Major Insurance Provider Saves $750k per Month With Big Data Migration
                  </Card.Link>
                </Card.Title>
                <Card.Text className="post">
                  The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.
                </Card.Text>
                <Button variant="primary" className="post__read-more" href="https://tecnologia.vamtam.com/2023/03/20/major-insurance-provider-saves-750k-per-month-with-big-data-migration/" aria-label="Read more about Major Insurance Provider Saves $750k per Month With Big Data Migration">
                  Learn more
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="post card-custom mb-4"  >
              <Card.Link className="post__thumbnail__link" href="https://tecnologia.vamtam.com/2023/03/20/maximizing-efficiency-with-proper-technology-implementation-coffee-success-story/">
                <Card.Img variant="top" src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/nespresso-1024x743.jpg" alt="Post thumbnail" className="medium-image img-fluid" />
              </Card.Link>
              <Card.Body className="text">
                <Card.Title className="post__title">
                  <Card.Link href="https://tecnologia.vamtam.com/2023/03/20/maximizing-efficiency-with-proper-technology-implementation-coffee-success-story/">
                    Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story
                  </Card.Link>
                </Card.Title>
                <Card.Text className="post">
                  The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.
                </Card.Text>
                <Button variant="primary" className="post__read-more" href="https://tecnologia.vamtam.com/2023/03/20/maximizing-efficiency-with-proper-technology-implementation-coffee-success-story/" aria-label="Read more about Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story">
                  Learn more
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="post card-custom mb-4">
              <Card.Link className="post__thumbnail__link" href="https://tecnologia.vamtam.com/2023/03/20/strategic-move-to-an-ai-supported-application-for-public-safety-travel-app-in-london/">
                <Card.Img variant="top" src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/undergroup-1024x743.jpg" alt="Post thumbnail" className="medium-image img-fluid" />
              </Card.Link>
              <Card.Body className="text">
                <Card.Title className="post__title">
                  <Card.Link href="https://tecnologia.vamtam.com/2023/03/20/strategic-move-to-an-ai-supported-application-for-public-safety-travel-app-in-london/">
                    Strategic Move to an AI-supported application for Public Safety Travel App in London
                  </Card.Link>
                </Card.Title>
                <Card.Text className="post">
                  Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.
                </Card.Text>
                <Button variant="primary" className="post__read-more" href="https://tecnologia.vamtam.com/2023/03/20/strategic-move-to-an-ai-supported-application-for-public-safety-travel-app-in-london/" aria-label="Read more about Strategic Move to an AI-supported application for Public Safety Travel App in London">
                  Learn more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CardsGrid;
