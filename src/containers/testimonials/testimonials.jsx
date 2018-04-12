import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck
} from "reactstrap";

const Testimonials = props => (
  <section className="testimonials py-10 _gradient-purple-dark section-angle">
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8" className="text-center text-white">
          <h4>{props.title}</h4>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="12">
          <CardDeck className="mt-5">
            <Card className="box-shadow p-4">
              <p>
                Shifter built a docker based system, deploying Wordpress to
                Netlify - awesome!
              </p>
              <div class="media mt-auto">
                <img
                  class="rounded-circle align-self-start mr-3"
                  src="https://pbs.twimg.com/profile_images/560874041452408833/a8obZPqr_normal.jpeg"
                  alt=""
                />
                <div class="media-body">
                  <h5 className="mb-0">
                    <small>
                      <b> Twitter User</b>
                    </small>
                  </h5>
                  <small>
                    <p>@example</p>
                  </small>
                </div>
              </div>
            </Card>
            <Card className="box-shadow p-4">
              <p>
                Shifter built a docker based system, deploying Wordpress to
                Netlify - awesome!
              </p>
              <div class="media mt-auto">
                <img
                  class="rounded-circle align-self-start mr-3"
                  src="https://pbs.twimg.com/profile_images/560874041452408833/a8obZPqr_normal.jpeg"
                  alt=""
                />
                <div class="media-body">
                  <h5 className="mb-0">
                    <small>
                      <b> Twitter User</b>
                    </small>
                  </h5>
                  <small>
                    <p>@example</p>
                  </small>
                </div>
              </div>
            </Card>
            <Card className="box-shadow p-4">
              <p>
                Shifter built a docker based system, deploying Wordpress to
                Netlify - awesome!
              </p>
              <div class="media mt-auto">
                <img
                  class="rounded-circle align-self-start mr-3"
                  src="https://pbs.twimg.com/profile_images/560874041452408833/a8obZPqr_normal.jpeg"
                  alt=""
                />
                <div class="media-body">
                  <h5 className="mb-0">
                    <small>
                      <b> Twitter User</b>
                    </small>
                  </h5>
                  <small>
                    <p>@example</p>
                  </small>
                </div>
              </div>
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

Testimonials.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Testimonials.defaultProps = {
  title: "",
  subtitle: ""
};

export default Testimonials;
