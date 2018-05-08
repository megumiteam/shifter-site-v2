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
  <Media className="mb-5">
    <Media href="#">
      <IconSet className="mr-5 icon icon-lg" icon={props.icon} />
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
);

class FeaturesHighlights extends Component {
  render() {

    let features = this.props.content.items.map((props, index) => {
      return <FeatureHighlightItem title={props.title} subtitle={props.subtitle} icon={props.icon} />;
    });

    const title = this.props.content.title;
    const subtitle = this.props.content.subtitle;

    return <section className="home-overview py-10 section-angle">
        <Container>
          <Row className="justify-content-md-center mb-5">
            <Col md="8" className="text-center">
              <h4>{title}</h4>
              <div className="mt-3 small">{subtitle}</div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="8">
              <Row>
                {features}
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="8" className="text-center mt-5">
              <a href="https://go.getshifter.io" className="btn text-uppercase btn-gradient-primary btn-lg btn-arrow">
                Learn More
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
