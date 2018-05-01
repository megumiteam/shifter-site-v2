import React, { Component } from "react";
import PropTypes from "prop-types";
import IconSet from "./../../components/icons/icons";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardHeader
} from "reactstrap";

let HomeOverviewItem = props => (
  <Col xs="12" md="6" className="d-flex align-items-stretch">
    <Card className="box-shadow">
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
          title={props.title}
          subtitle={props.subtitle}
          icon={props.icon}
        />
      );
    });

    return <section className="home-overview pt-10 pb-8 section-angle--white">
        <Container>
          <Row className="justify-content-md-center mb-5">
            <Col md="8" className="text-center">
              <h4>{this.props.content.title}</h4>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="10">
              <Row>{items}</Row>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="8" className="text-center mt-5">
              <a href="/features" className="btn text-uppercase btn-gradient-primary btn-lg btn-arrow">
                All The Features
              </a>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

HomeOverview.propTypes = {
  content: PropTypes.array,
  title: PropTypes.string,
  items: PropTypes.array
};

HomeOverview.defaultProps = {
  title: "",
  items: false,
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
