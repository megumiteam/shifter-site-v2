import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tweet } from "react-twitter-widgets";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";

var settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  autoplaySpeed: 5000,
  autoplay: false
};

function Quote(props) {
  return <div>
      <Tweet className="box-shadow p-4 card" tweetId={props.tweetId} options={{ cards: "hidden", linkColor: "#451D39", conversation: "none" }} />
    </div>;
}

class Testimonials extends Component {
  render() {

    return <section className="testimonials py-10 _gradient-purple-dark">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="8" className="text-center text-white mb-4">
              <h4>{this.props.title}</h4>
              <div className="mt-3">{this.props.subtitle}</div>
            </Col>
          </Row>
        </Container>
        <Slider {...settings}>
          <Quote tweetId="925062079773585411" />
          <Quote tweetId="822127402851581953" />
          <Quote tweetId="982998258468442113" />
          <Quote tweetId="822357134725812224" />
          <Quote tweetId="789180722049196033" />
          <Quote tweetId="834087318298333185" />
        </Slider>
        <Container>
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

Testimonials.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Testimonials.defaultProps = {
  title: "",
  subtitle: ""
};

export default Testimonials;
