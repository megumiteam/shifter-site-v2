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

    let items = this.props.content.items.map((props, index) => {
      return <Accordian key={props.title}  title={props.title} subtitle={props.subtitle} />;
    });

    return <section className="py-7 bg-gray-100 section-angle--gray">
        <Container>
          <Row className="justify-content-md-center mb-5">
            <Col md="8" className="text-center">
              <h2 className="h4">{this.props.content.title}</h2>
            </Col>
          </Row>
          {items}
          <Row className="justify-content-md-center">
            <Col className="text-center mt-5">
              <a href="https://support.getshifter.io/faqs" className="btn text-uppercase btn-gradient-primary btn-lg btn-arrow">
                More FAQs
              </a>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

Faqs.propTypes = {
  content: PropTypes.object
};

Faqs.propTypes = {
  content: null
};

export default Faqs;
