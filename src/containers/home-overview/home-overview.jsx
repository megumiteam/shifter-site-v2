import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardDeck
} from "reactstrap";
  
const HeroOverview = props => (
  <section className="home-overview py-10 section-angle">
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8" className="text-center">
          <h4>{props.title}</h4>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="10">
          <CardDeck className="mt-5">
            <Card className="box-shadow">
              <CardBody>
                <img
                  src="//placehold.it/75"
                  alt="..."
                  class="rounded-circle mb-4"
                />
                <CardTitle>Serverless Architecture</CardTitle>
                <CardText>
                  Static web pages are nearly maintenance-free and load at
                  lightining speed. But they require outside development
                  resources and don’t offer the functionality of a dynamic web
                  page.
                </CardText>
              </CardBody>
            </Card>
            <Card className="box-shadow">
              <CardBody>
                <img
                  src="//placehold.it/75"
                  alt="..."
                  class="rounded-circle mb-4"
                />
                <CardTitle>Built for WordPress</CardTitle>
                <CardText>
                  WordPress makes building a website easy and cost effective for
                  almost any user. But it needs regular updates and security can
                  be a concern.
                </CardText>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="8" className="text-center mt-5">
          <a
            href="https://go.getshifter.io"
            className="btn text-uppercase btn-gradient-primary btn-lg"
          >
            Learn More
          </a>
        </Col>
      </Row>
    </Container>
  </section>
);

HeroOverview.propTypes = {
  title: PropTypes.string,
};

HeroOverview.defaultProps = {
  title: '',
};

export default HeroOverview;
