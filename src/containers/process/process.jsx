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

let ProcessItem = props => (
  <Col
    xs="12"
    md="6"
    lg="3"
    className="mb-sm-4 mb-lg-0 d-flex align-items-stretch"
  >
    <Card className="box-shadow text-center icon-card">
      <CardHeader className="icon-card__header d-flex justify-content-center align-items-center">
        <IconSet icon={props.icon} />
      </CardHeader>
      <CardBody className="icon-card__body">
        <CardTitle>{props.title}</CardTitle>
        <small>
          <CardText>{props.subtitle}</CardText>
        </small>
      </CardBody>
    </Card>
  </Col>
);

class Process extends Component {
  render() {
    let items = this.props.content.items.map((props, index) => {
      return (
        <ProcessItem
          title={props.title}
          subtitle={props.subtitle}
          icon={props.icon}
        />
      );
    });

    return <section className="process bg-gray-100 pt-10 pb-8 section-angle--gray">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="8" className="text-center mb-4">
              <h4>{this.props.content.title}</h4>
              <div className="mt-3">{this.props.content.subtitle}</div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="10">
              <div className="browser-mockup section-angle--gray _gradient-purple-dark">
                <IconSet icon="code-editor" className="icon-100" />
              </div>
            </Col>
          </Row>
          <Row className="process__items mb-gutter-row-sm">{items}</Row>
          <Row className="justify-content-md-center">
            <Col md="8" className="text-center mt-5">
              <a href="https://go.getshifter.io" className="btn text-uppercase btn-gradient-primary btn-lg btn-arrow">
                Forever Free Trial
              </a>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

Process.propTypes = {
  content: PropTypes.array
};

Process.defaultProps = {
  content: null
};

ProcessItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

ProcessItem.defaultProps = {
  title: "",
  subtitle: ""
};

export default Process;
