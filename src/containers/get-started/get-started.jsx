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
  
const GetStarted = props => (
  <section className="get-started bg-gray-100 py-10">
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8" className="text-center mb-4">
          <h4>{props.title}</h4>
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
      <Row className="justify-content-md-center">
        <Col md="12">
          <CardDeck className="mt-5">
            <Card className="box-shadow text-center">
              <CardBody>
                <img
                  src="//placehold.it/75"
                  alt="..."
                  class="rounded-circle mb-4"
                />
                <CardTitle>Create</CardTitle>
                <CardText>
                  <small>
                    Choose your plan based on storage, bandwidth, number of
                    users, or Perfered CDN.
                  </small>
                </CardText>
              </CardBody>
            </Card>
            <Card className="box-shadow text-center">
              <CardBody>
                <img
                  src="//placehold.it/75"
                  alt="..."
                  class="rounded-circle mb-4"
                />
                <CardTitle>Customize</CardTitle>
                <CardText>
                  <small>
                    Choose your plan based on storage, bandwidth, number of
                    users, or Perfered CDN.
                  </small>
                </CardText>
              </CardBody>
            </Card>
            <Card className="box-shadow text-center">
              <CardBody>
                <img
                  src="//placehold.it/75"
                  alt="..."
                  class="rounded-circle mb-4"
                />
                <CardTitle>Generate</CardTitle>
                <CardText>
                  <small>
                    Choose your plan based on storage, bandwidth, number of
                    users, or Perfered CDN.
                  </small>
                </CardText>
              </CardBody>
            </Card>
            <Card className="box-shadow text-center">
              <CardBody>
                <img
                  src="//placehold.it/75"
                  alt="..."
                  class="rounded-circle mb-4"
                />
                <CardTitle>Deploy</CardTitle>
                <CardText>
                  <small>
                    Choose your plan based on storage, bandwidth, number of
                    users, or Perfered CDN.
                  </small>
                </CardText>
              </CardBody>
            </Card>
          </CardDeck>
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

GetStarted.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

GetStarted.defaultProps = {
  title: '',
  subtitle: ''
};

export default GetStarted;
