import React from "react";
import PropTypes from "prop-types";
import IconSet from "./../../components/icons/icons";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

let HomeOverviewItem = props => (
  <Col xs="12" md="6" className="d-flex align-items-stretch">
    <Card className="box-shadow">
      <CardBody>
        <IconSet icon={props.icon} className="mb-4" />
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.body}</CardText>
      </CardBody>
    </Card>
  </Col>
);
  
const HeroOverview = props => (
  <section className="home-overview pt-10 pb-8 section-angle--white">
    <Container>
      <Row className="justify-content-md-center mb-5">
        <Col md="8" className="text-center">
          <h4>{props.title}</h4>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="10">
          <Row>
            <HomeOverviewItem
              icon="serverless"
              title="Serverless Architecture"
              body="Host your always-on static pages with unlimited scalability and runs WordPress in a fully-managed container environment that only runs when you need it."
            />
            <HomeOverviewItem
              icon="wordpress"
              title="Built for WordPress"
              body="Use the same WordPress themes, Plugins, and tools you know and love without the headaches of hosting and threats from bots or cybervillains."
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

HeroOverview.propTypes = {
  title: PropTypes.string,
};

HeroOverview.defaultProps = {
  title: '',
};

export default HeroOverview;
