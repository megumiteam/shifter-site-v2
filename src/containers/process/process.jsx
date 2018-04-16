import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardDeck
} from "reactstrap";
  
const Process = props => (
  <section className="get-started bg-gray-100 py-10">
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8" className="text-center mb-4">
          <h4>{props.title}</h4>
          <div className="mt-3">{props.subtitle}</div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="10">
          <div class="browser-mockup">
            <pre>
              <code className="language-css">{`p { content: 'code' }`}</code>
            </pre>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm="12" md="6" lg="3" className="mb-sm-4 mb-lg-0">
          <Card className="box-shadow text-center">
            <CardBody>
              <img
                src="//placehold.it/75"
                alt="..."
                class="rounded-circle mb-4"
              />
              <CardTitle>Create</CardTitle>
              <small>
                <CardText>
                  Choose your plan based on storage, bandwidth, number of users,
                  or Perfered CDN.
                </CardText>
              </small>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="3" className="mb-sm-4 mb-lg-0">
          <Card className="box-shadow text-center">
            <CardBody>
              <img
                src="//placehold.it/75"
                alt="..."
                class="rounded-circle mb-4"
              />
              <CardTitle>Customize</CardTitle>
              <small>
                <CardText>
                  Choose your plan based on storage, bandwidth, number of users,
                  or Perfered CDN.
                </CardText>
              </small>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="3" className="mb-sm-4 mb-lg-0">
          <Card className="box-shadow text-center">
            <CardBody>
              <img
                src="//placehold.it/75"
                alt="..."
                class="rounded-circle mb-4"
              />
              <CardTitle>Generate</CardTitle>
              <small>
                <CardText>
                  Choose your plan based on storage, bandwidth, number of users,
                  or Perfered CDN.
                </CardText>
              </small>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card className="box-shadow text-center">
            <CardBody>
              <img
                src="//placehold.it/75"
                alt="..."
                class="rounded-circle mb-4"
              />
              <CardTitle>Deploy</CardTitle>
              <small>
                <CardText>
                  Choose your plan based on storage, bandwidth, number of users,
                  or Perfered CDN.
                </CardText>
              </small>
            </CardBody>
          </Card>
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

Process.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Process.defaultProps = {
  title: '',
  subtitle: ''
};

export default Process;
