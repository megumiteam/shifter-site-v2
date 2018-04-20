import React, { Component } from "react";
import PropTypes from "prop-types";
import IconSet from "./../../components/icons/icons";
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
    return <section className="features-overview section-angle--gray pt-10 pb-8 bg-gray-100">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="10">
              <div className="browser-mockup _gradient-purple-dark">
                <IconSet icon="code-editor" className="icon-100" />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-7 mb-5">
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
