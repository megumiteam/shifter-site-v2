import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tweet } from "react-twitter-widgets";
import Slider from "react-slick";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";

function Quote(props) {
  return (
    <div>
      <Tweet
        className="box-shadow p-4 card"
        tweetId={props.tweetId}
        options={{
          cards: "hidden",
          linkColor: "#451D39",
          conversation: "none"
        }}
      />
    </div>
  );
}

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    let tweets = this.props.content.tweets.map((props, index) => {
      return <Quote key={props.tweetId} tweetId={props.tweetId} />;
    });

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      autoplaySpeed: 3500,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 903,
          settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true }
        },
        {
          breakpoint: 711,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true }
        }
      ]
    };

    return <section className="testimonials pt-10 pb-8 section-angle--purple-dark _gradient-purple-dark">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="8" className="text-center text-white mb-4">
              <h4>{this.props.content.title}</h4>
              <div className="mt-3">{this.props.content.subtitle}</div>
            </Col>
          </Row>
        </Container>
        <div className="twitter-feed">
          <Container>
            <Row>
              <Col className="text-center mb-5">
                <ButtonGroup className="btn-toggle">
                  <Button className="btn-outline-white" onClick={this.previous}>
                    <i className="fa fa-angle-left" />
                  </Button>
                  <Button className="btn-outline-white" onClick={this.next}>
                    <i className="fa fa-angle-right" />
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Container>
          <Slider ref={c => (this.slider = c)} {...settings}>
            {tweets}
          </Slider>
        </div>
      </section>;
  }
}

Testimonials.propTypes = {
  content: PropTypes.object
};

Testimonials.defaultProps = {
  content: null
};

export default Testimonials;
