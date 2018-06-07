import React, { Component } from "react";
import PropTypes from "prop-types";
import IconSet from "./../../components/icons/icons";
import {
  Container,
  Row,
  Col,
  Media
} from "reactstrap";

let FeatureHighlightItem = props => (
  <Col xs="12">
    <Media>
      <Media className="feature__highlight-icon mr-5" href="#">
        <IconSet className="icon icon-lg" icon={props.icon} />
      </Media>
      <Media body>
        <Media heading tag="h5" className="mb-4">
          {props.title}
        </Media>
        <small>
          <p>{props.subtitle}</p>
        </small>
      </Media>
    </Media>
  </Col>
);

class FeaturesHighlights extends Component {
  render() {

    let features = this.props.content.items.map((props, index) => {
      return <FeatureHighlightItem title={props.title} subtitle={props.subtitle} icon={props.icon} key={index} />;
    });

    const title = this.props.content.title;
    const subtitle = this.props.content.subtitle;

    return <section className="feature-highlights pt-10 pb-7 section-angle--white">
        <Container>
          <Row className="justify-content-md-center mb-5">
          <Col md="8" className="text-center balance-text">
            <h4 className="balance-text">{title}</h4>
              <div className="mt-3 small">{subtitle}</div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="8">
              <Row className="mb-gutter-row">{features}</Row>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="8" className="text-center mt-5">
              <a href="https://go.getshifter.io" className="btn text-uppercase btn-gradient-primary btn-lg btn-arrow">
                Get Started
              </a>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

FeaturesHighlights.propTypes = {
  content: PropTypes.object
};

FeaturesHighlights.defaultProps = {
  content: null
};

export default FeaturesHighlights;
