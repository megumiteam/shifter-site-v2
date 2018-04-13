import React from "react";
import PropTypes from "prop-types";
import { Tweet } from "react-twitter-widgets";
import Slider from "react-slick";
import { Container, Row, Col, Card, CardDeck } from "reactstrap";

var settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  autoplaySpeed: 5000,
  autoplay: false
};

const Testimonials = props => (
  <section className="testimonials py-10 _gradient-purple-dark">
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8" className="text-center text-white mb-4">
          <h4>{props.title}</h4>
          <div className="mt-3">{props.subtitle}</div>
        </Col>
      </Row>
    </Container>
    <Slider {...settings}>
      <div>
        <Tweet className="box-shadow p-4 card" tweetId="822127402851581953" />
      </div>
      <div>
        <Tweet className="box-shadow p-4 card" tweetId="982998258468442113" />
      </div>
      <div>
        <Tweet className="box-shadow p-4 card" tweetId="822357134725812224" />
      </div>
      <div>
        <Tweet className="box-shadow p-4 card" tweetId="789180722049196033" />
      </div>
      <div>
        <Tweet className="box-shadow p-4 card" tweetId="834087318298333185" />
      </div>
      <div>
        <Tweet className="box-shadow p-4 card" tweetId="925062079773585411" />
      </div>
    </Slider>
    <Container>
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
