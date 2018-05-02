import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

class Hero extends Component {

  render() {

    return <section className="hero _gradient-purple-dark section-angle--purple-dark text-white py-8 text-center text-md-left">
        <Container>
          <Row className="justify-content-md-center">
            <Col md={{ size: 9, offset: 1 }}>
              <h1 className="h2 balance-text">{this.props.content.title}</h1>
              <div className="mt-3 balance-text">{this.props.content.subtitle}</div>
              <div className="hero__links mt-5">
                <a href="https://go.getshifter.io" className="btn btn-gradient-primary text-uppercase mr-2 btn-arrow">
                  Free Trial
                </a>
                <a href="/pricing" className="btn btn-link text-white btn-outline-white text-uppercase">
                  View Pricing
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

Hero.propTypes = {
  content: PropTypes.array
};

Hero.defaultProps = {
  content: null
};

export default Hero;
