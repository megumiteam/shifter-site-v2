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

const GetStarted = props => (
  <section className="home-overview py-10 section-angle">
    <Container>
      <Row className="justify-content-md-center">
        <Col md="10">
          <Row className="justify-content-between">
            <Col md="5">
              <h3>{props.title}</h3>
              <div className="mt-3">{props.subtitle}</div>
            </Col>
            <Col md="5" className="d-flex align-items-end">
              <div className="hero__links">
                <a
                  href="https://go.getshifter.io"
                  className="btn btn-gradient-primary text-uppercase"
                >
                  Free Trial &rarr;
                </a>{" "}
                <a
                  href="https://go.getshifter.io"
                  className="btn btn-secondary text-uppercase"
                >
                  Sign Up &rarr;
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

GetStarted.propTypes = {
  title: PropTypes.string
};

GetStarted.defaultProps = {
  title: ""
};

export default GetStarted;