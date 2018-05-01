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

    let tweets = this.props.content.tweets.map((props, index) => {
      return <Quote tweetId={props.tweetId} />;
    });

    return <section className="testimonials pt-10 pb-8 section-angle--purple-dark _gradient-purple-dark">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="8" className="text-center text-white mb-4">
              <h4>{this.props.content.title}</h4>
              <div className="mt-3">{this.props.content.subtitle}</div>
            </Col>
          </Row>
        </Container>
        <Slider {...settings}>{tweets}</Slider>
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
  content: PropTypes.array
};

Testimonials.defaultProps = {
  content: null
};

export default Testimonials;
