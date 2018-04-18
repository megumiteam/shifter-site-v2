import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col
} from "reactstrap";

class GetStarted extends Component {
  render() {
    const layout = this.props.layout;

    if (layout === "centered") {
      return <section className="home-overview py-10 _gradient-purple-dark text-white">
          <Container>
            <Row className="justify-content-md-center text-center">
              <Col md="10">
                <h3>{this.props.title}</h3>
                <div className="mt-3 mb-5">{this.props.subtitle}</div>
                <a href="https:go.getshifter.io" className="btn btn-gradient-primary text-uppercase btn-arrow mr-2">
                  Free Trial
                </a> <a href="https:go.getshifter.io" className="btn btn-outline-white text-uppercase btn-arrow">
                  Sign Up
                </a>
              </Col>
            </Row>
          </Container>
        </section>;
    }

    return <section className="home-overview py-10 section-angle">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="10">
              <Row className="justify-content-between">
                <Col md="5">
                  <h3>{this.props.title}</h3>
                  <div className="mt-3">{this.props.subtitle}</div>
                </Col>
                <Col md="5" className="d-flex align-items-end">
                  <div className="hero__links">
                    <a href="https:go.getshifter.io" className="btn btn-gradient-primary text-uppercase btn-arrow mr-2">
                      Free Trial
                    </a>
                    <a href="https:go.getshifter.io" className="btn btn-secondary text-uppercase btn-arrow">
                      Sign Up
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

GetStarted.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

GetStarted.defaultProps = {
  title: "Let’s get started!",
  subtitle: "Follow these simple steps and you’ll have a brand new site in no time."
};

export default GetStarted;
