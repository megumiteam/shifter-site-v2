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
      return <section className="home-overview py-8 _gradient-purple-dark text-white">
          <Container>
            <Row className="justify-content-md-center text-center">
              <Col>
                <h3>{this.props.content.title}</h3>
                <div className="mt-3 mb-5 balance-text">{this.props.content.subtitle}</div>
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

    return <section className="home-overview pt-10 pb-8">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="10">
              <Row className="justify-content-between text-center text-lg-left">
                <Col lg="5" xs="12">
                  <h3>{this.props.content.title}</h3>
                  <div className="mt-3 balance-text">{this.props.content.subtitle}</div>
                </Col>
                <Col lg="5" xs="12" className="d-lg-flex align-items-end mt-lg-0 mt-4">
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
  content: PropTypes.array,
};

GetStarted.defaultProps = {
  content: null
};

export default GetStarted;
