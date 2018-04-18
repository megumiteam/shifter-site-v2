import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Media
} from "reactstrap";

function FeatureHighlightItem(props) {
  return <Media className="mb-5">
      <Media href="#">
        <Media className="rounded mr-5" object src="//placehold.it/150" alt="" />
      </Media>
      <Media body>
        <Media heading tag="h5" className="mb-4">
          Media heading
        </Media>
        <small>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </small>
      </Media>
    </Media>;
}

class FeaturesHighlights extends Component {
  render() {
    return <section className="home-overview py-10 section-angle">
        <Container>
          <Row className="justify-content-md-center mb-5">
            <Col md="8" className="text-center">
              <h4>{this.props.title}</h4>
              <div className="mt-3 small">{this.props.subtitle}</div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="8">
              <Row>
                <FeatureHighlightItem />
                <FeatureHighlightItem />
                <FeatureHighlightItem />
                <FeatureHighlightItem />
                <FeatureHighlightItem />
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
  title: PropTypes.string,
  subtitle: PropTypes.string
};

FeaturesHighlights.propTypes = {
  title: "",
  subtitle: ""
};

export default FeaturesHighlights;
