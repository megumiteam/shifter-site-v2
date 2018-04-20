import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

const Hero = props => (
  <section className="hero _gradient-purple-dark section-angle--purple-dark text-white py-8">
    <Container>
      <Row className="justify-content-md-center">
        <Col md={{ size: 9, offset: 1 }}>
          <h2>{props.title}</h2>
          <div className="mt-3">{props.subtitle}</div>
          <div className="hero__links mt-5">
            <a
              href="https://go.getshifter.io"
              className="btn btn-gradient-primary text-uppercase btn-arrow mr-2"
            >
              Free Trial
            </a>
            <a
              href="https://go.getshifter.io"
              className="btn btn-outline-white text-uppercase btn-arrow"
            >
              Sign Up
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Hero.defaultProps = {
  title: "",
  subtitle: ""
};

export default Hero;
