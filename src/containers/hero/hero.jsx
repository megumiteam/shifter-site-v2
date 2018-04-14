import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

const Hero = props => (
  <section className="_gradient-purple-dark text-white hero section-angle pb-20">
    <Container>
      <Row className="justify-content-md-center">
        <Col md={{ size: 9, offset: 1 }}>
          <h2 className="mt-10">{props.title}</h2>
          <div className="mt-3">{props.subtitle}</div>
          <div className="hero__links mt-5">
            <a
              href="https://go.getshifter.io"
              className="btn btn-gradient-primary text-uppercase btn-arrow"
            >
              Free Trial
            </a>{" "}
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
