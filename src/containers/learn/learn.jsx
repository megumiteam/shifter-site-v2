import React from "react";
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
  <Col className="d-flex align-items-stretch">
    <Card className="box-shadow">
      <CardBody>
        <Media>
          <Media href="#">
            <IconSet icon={props.icon} className="mr-4" />
          </Media>
          <Media body>
            <Media heading tag="h5" className="mb-4">
              {props.title}
            </Media>
            <small>{props.body}</small>
          </Media>
        </Media>
      </CardBody>
    </Card>
  </Col>
);

const Learn = props => (
  <section className="learn bg-gray-100 pt-10 pb-8 section-angle--gray">
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8" className="text-center">
          <h4>{props.title}</h4>
          <div className="mt-3">{props.subtitle}</div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="10">
          <Row className="mt-5">
            <ResourceItem
              icon="blog"
              title="Blog"
              body="Get the latest and greatest updates from team Shifter. And make sure to check back often to learn what’s new and exciting in our world."
            />
            <ResourceItem
              icon="support"
              title="Support"
              body="Get the latest and greatest updates from team Shifter. And make sure to check back often to learn what’s new and exciting in our world."
            />
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="8" className="text-center mt-5">
          <a
            href="https://go.getshifter.io"
            className="btn text-uppercase btn-gradient-primary btn-lg"
          >
            Learn More
          </a>
        </Col>
      </Row>
    </Container>
  </section>
);

Learn.propTypes = {
  title: PropTypes.string
};

Learn.defaultProps = {
  title: ""
};

ResourceItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string
};

ResourceItem.defaultProps = {
  icon: "",
  title: "",
  body: ""
};

export default Learn;