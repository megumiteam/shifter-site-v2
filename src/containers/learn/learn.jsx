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
  CardDeck,
} from "reactstrap";

const Learn = props => (
  <section className="home-overview bg-gray-100 py-10 section-angle">
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8" className="text-center">
          <h4>{props.title}</h4>
          <div className="mt-3">{props.subtitle}</div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="10">
          <CardDeck className="mt-5">
            <Card className="box-shadow">
              <CardBody>
                <CardTitle>Blog</CardTitle>
                <CardText>
                  Get the latest and greatest updates from team Shifter. And
                  make sure to check back often to learn what’s new and exciting
                  in our world.
                </CardText>
              </CardBody>
            </Card>
            <Card className="box-shadow">
              <CardBody>
                <CardTitle>Support</CardTitle>
                <CardText>
                  Advice and answers from the Shifter . Advice and answers from
                  the Shifter Team. Advice and answers from the Shifter.
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

Learn.propTypes = {
  title: PropTypes.string
};

Learn.defaultProps = {
  title: ""
};

export default Learn;