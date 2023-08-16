import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Section = () => {
  return (
    <section className="custom-section" style={{ marginTop: '40px' }}>
      <Container className="custom-container">
        <Row className="custom-column">
          <Col className="widget-wrap">
            <div className="widget-heading">
              <div className="widget-container">
                <div className="heading-title">Where WE DO</div>
              </div>
            </div>
            <div className="widget-heading">
              <div className="widget-container">
                <h2 className="heading-mid"><b>Recognized by the best</b></h2>
              </div>
            </div>
            <div className="widget-text">
              <div className="widget-container">
                <p>The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.</p>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <div className="circle-images">
              <div className="rounded-circle-image">
                <Row>
                  <div className="col-xs-12 col-md-6">
                    <img
                      width="100"
                      height="100"
                      src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/ND-ty6SkWNaiYy3I6E9J3lgFJJIeuHzzcdx74aHvaQ-9PFabsPmUhe_uKKqItjbtrcbw.png"
                      alt=""
                      className="square-image"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <img
                      width="100"
                      height="100"
                      src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/acronis-logo2.png"
                      alt=""
                      className="square-image"
                    />
                  </div>
                </Row>
                <Row>
                  <div className="col-xs-12 col-md-4">
                    <img
                      width="100"
                      height="100"
                      src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/pngfind.com-registered-logo-png-2230159-300x103.png"
                      alt=""
                      className="square-image"
                    />
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <img
                      width="100"
                      height="100"
                      src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/kisspng-microsoft-certified-partner-microsoft-partner-netw-partner-5b13fff40de7b5.358475291528037364057-300x77.png"
                      alt=""
                      className="square-image"
                    />
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <img
                      width="100"
                      height="100"
                      src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/5b7d7d3778a94.png"
                      alt=""
                      className="square-image"
                    />
                  </div>
                </Row>
                <Row>
                  <div className="col-xs-12 col-md-6">
                    <img
                      width="100"
                      height="100"
                      src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/url.png"
                      alt=""
                      className="square-image"
                    />
                  </div>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section;
