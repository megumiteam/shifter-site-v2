import React, { Component } from "react";
import PropTypes from "prop-types";
import IconSet from "./../../components/icons/icons";
import {
  Container,
  Row,
  Col,
  Media
} from "reactstrap";

let FeatureOverviewItem = props => (
  <Col className="align-items-stretch icon-card">
    <Media top>
      <Media
        className="icon-card__header d-flex align-items-center"
        href="#"
      >
        <IconSet icon={props.icon} className="mb-4" />
      </Media>
      <Media body>
        <Media heading tag="h5">
          {props.title}
        </Media>
        <small>
          <p>{props.subtitle}</p>
        </small>
      </Media>
    </Media>
  </Col>
);

class FeaturesOverview extends Component {
  render() {

    let features = this.props.featureOverviewItems.map((props, index) => {
      return <FeatureOverviewItem title={props.title} subtitle={props.subtitle} icon={props.icon} />;
    });

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
                {features}
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

FeaturesOverview.defaultProps = {
  title: "",
  subtitle: "",
  featureOverviewItems: PropTypes.array
};

FeatureOverviewItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

FeatureOverviewItem.defaultProps = {
  title: "",
  subtitle: ""
};



export default FeaturesOverview;
