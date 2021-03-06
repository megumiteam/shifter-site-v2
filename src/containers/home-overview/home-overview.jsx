import React, { Component } from "react";
import PropTypes from "prop-types";
import IconSet from "./../../components/icons/icons"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

let HomeOverviewItem = props => (
  <Col xs="12" md="6" className="d-flex align-items-stretch">
    <Card className="box-shadow w-100">
      <CardBody>
        <IconSet icon={props.icon} className="mb-4" />
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.subtitle}</CardText>
      </CardBody>
    </Card>
  </Col>
);

class HomeOverview extends Component {
  render() {
    let items = this.props.content.items.map((props, index) => {
      return (
        <HomeOverviewItem
          key={props.title}
          title={props.title}
          subtitle={props.subtitle}
          icon={props.icon}
        />
      );
    });

    return <section className="home-overview pt-10 pb-6 section-angle--white">
        <Container>
          <Row className="justify-content-md-center mb-5">
            <Col md="8" className="text-center">
              <h4 className="balance-text">{this.props.content.title}</h4>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xl="10">
              <Row className="mb-gutter-row-sm">{items}</Row>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="8" className="text-center mt-5">
              <a href="/features" className="btn text-uppercase btn-gradient-purple btn-lg btn-arrow">
                All The Features
              </a>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

HomeOverview.propTypes = {
  content: PropTypes.object
};

HomeOverview.defaultProps = {
  content: null
};

HomeOverviewItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

HomeOverviewItem.defaultProps = {
  title: "",
  subtitle: ""
};

export default HomeOverview;
