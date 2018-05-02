import React, { Component } from "react";
import PropTypes from "prop-types";
import IconSet from "./../../components/icons/icons";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Media
} from "reactstrap";

let ResourceItem = props => (
  <Col xs="12" lg="6" className="d-flex align-items-stretch">
    <Card className="box-shadow align-items-stretch">
      <CardBody>
        <Media>
          <Media>
            <IconSet icon={props.icon} className="mr-4" />
          </Media>
          <Media body>
            <Media heading tag="h5" className="mb-4">
              {props.title}
            </Media>
            <small>{props.subtitle}</small>
            <div className="mt-3">
              <a href={props.url} className="text-uppercase btn-arrow small">
                {props.link}
              </a>
            </div>
          </Media>
        </Media>
      </CardBody>
    </Card>
  </Col>
);

class Learn extends Component {
  render() {

    let items = this.props.content.items.map((props, index) => {
      return <ResourceItem icon={props.icon} title={props.title} subtitle={props.subtitle} link={props.link} url={props.url} />;
    });

    return <section className="learn bg-gray-100 pt-10 pb-8 section-angle--gray">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="8" className="text-center">
              <h4>{this.props.content.title}</h4>
              <div className="mt-3">{this.props.subtitle}</div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="10">
              <Row className="mt-5 mb-gutter-row-md">
                {items}
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="8" className="text-center mt-5">
              <a href="https://go.getshifter.io" className="btn text-uppercase btn-gradient-primary btn-lg">
                Learn More
              </a>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

Learn.propTypes = {
  content: PropTypes.array
};

Learn.defaultProps = {
  content: null
};

ResourceItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  url: PropTypes.string,
  link: PropTypes.string
};

ResourceItem.defaultProps = {
  icon: "",
  title: "",
  body: "",
  link: "",
  url: ""
};

export default Learn;