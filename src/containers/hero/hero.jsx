import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

const Hero = props => (
  <section className="_gradient-purple-dark text-white hero section-angle pb-20">
    <Container>
      <Row>
        <Col md={{ size: 9, offset: 1 }}>
          <h2 className="mt-10">{props.title}</h2>
          <div className="mt-3">{props.subtitle}</div>
          <div className="hero__links mt-5">
            <a
              href="https://go.getshifter.io"
              className="btn btn-gradient-primary text-uppercase"
            >
              Free Trial &rarr;
            </a>{" "}
            <a
              href="https://go.getshifter.io"
              className="btn btn-outline-white text-uppercase"
            >
              Sign Up &rarr;
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
  title: "test",
  subtitle: "test"
};

export default Hero;
