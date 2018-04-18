import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Media
} from "reactstrap";

function FeatureOverviewItem(props) {
  return <Media top>
      <Media href="#">
        <Media className="rounded-circle mb-4" object src="//placehold.it/75" alt="" />
      </Media>
      <Media body>
        <Media heading tag="h5">
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

class FeaturesOverview extends Component {
  render() {
    return <section className="home-overview py-10 section-angle bg-gray-100">
        <Container>
          <Row className="justify-content-md-center mb-5">
            <Col md="10">
              <div class="browser-mockup">
                <pre>
                  <code className="language-css">{`p { content: 'code' }`}</code>
                </pre>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center mb-5">
            <Col md="9" className="text-center">
              <h4>{this.props.title}</h4>
              <div className="mt-3 small">{this.props.subtitle}</div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="10">
              <Row>
                <Col>
                  <FeatureOverviewItem />
                </Col>
                <Col>
                  <FeatureOverviewItem />
                </Col>
                <Col>
                  <FeatureOverviewItem />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col className="text-center mt-5">
              <a href="https://go.getshifter.io" className="btn text-uppercase btn-gradient-primary btn-lg btn-arrow">
                Learn More
              </a>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

FeaturesOverview.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

FeaturesOverview.propTypes = {
  title: "",
  subtitle: ""
};

export default FeaturesOverview;
