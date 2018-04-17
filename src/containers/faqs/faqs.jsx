import React, { Component } from "react";
import PropTypes from "prop-types";
import Accordian from "./../../components/accordian/accordian";
import {
  Container,
  Row,
  Col
} from "reactstrap";

class Faqs extends Component {
  render() {
    return <section className="pricing-plans py-10 bg-gray-100">
        <Container>
          <Row className="justify-content-md-center mb-5">
            <Col md="8" className="text-center">
              <h2 className="h4">{this.props.title}</h2>
              <div className="mt-3 small">{this.props.subtitle}</div>
            </Col>
          </Row>
          <Accordian title="Is there a CDN included?" body="tk" />
          <Accordian title="Is protection from DDoS attacks included?" body="tk" />
          <Accordian title="Is Shifter also a hosting service?" body="tk" />
          <Accordian title="Is Shifter a Static Site Generator?" body="tk" />
          <Accordian title="Is HTTPS included?" body="tk" />
          <Row className="justify-content-md-center">
            <Col className="text-center mt-5">
              <a href="https://go.getshifter.io" className="btn text-uppercase btn-gradient-primary btn-lg btn-arrow">
                Read More
              </a>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

Faqs.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Faqs.propTypes = {
  title: "",
  subtitle: ""
};

export default Faqs;
