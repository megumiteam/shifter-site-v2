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
  <Col xs="12" lg="4" className="align-items-stretch icon-card">
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
        <div>
          <p>{props.subtitle}</p>
        </div>
      </Media>
    </Media>
  </Col>
);

class FeaturesOverview extends Component {
  render() {

    let features = this.props.content.items.map((props, index) => {
      return <FeatureOverviewItem title={props.title} subtitle={props.subtitle} icon={props.icon} key={index} />;
    });

    const title = this.props.content.title;
    const subtitle = this.props.content.subtitle;

    return <section className="features-overview section-angle--gray pt-10 pb-7 bg-gray-100">
        <Container>
          <Row className="justify-content-md-center">
          <Col md="10">
            <div className="browser-mockup _gradient-purple-dark">
              <img className="w-100 rounded-bottom" src="/assets/images/shifter-dashboard.png" alt="Shifter Dashboard" />
            </div>
          </Col>
        </Row>
          <Row className="justify-content-md-center mt-7 mb-5">
            <Col md="8" className="text-center">
              <h4>{title}</h4>
              <div className="mt-3 balance-text">{subtitle}</div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs="12" xl="10">
              <Row>{features}</Row>
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
  content: PropTypes.object,
};

FeaturesOverview.defaultProps = {
  content: null,
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
