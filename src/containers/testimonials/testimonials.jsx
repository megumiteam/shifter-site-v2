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
      autoplaySpeed: 4000,
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
            <Col md="8" className="text-center text-white mb-5">
              <h4>{this.props.content.title}</h4>
              <div className="mt-3">{this.props.content.subtitle}</div>
            </Col>
          </Row>
          <Row className="justify-content-md-center text-center">
            <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
              <img
                src="./assets/images/amon.png"
                srcset="./assets/images/amon.png 1x, ./assets/images/amon@2x.png 2x"
                alt="amon"
              />
            </Col>
            <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
              <img
                src="./assets/images/hde.png"
                srcset="./assets/images/hde.png 1x, ./assets/images/hde@2x.png 2x"
                alt="hde"
              />
            </Col>
            <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
              <img
                src="./assets/images/heptagon.png"
                srcset="./assets/images/heptagon.png 1x,./assets/images/heptagon@2x.png 2x"
                alt="heptagon"
              />
            </Col>
            <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
              <img
                src="./assets/images/monstarlab.png"
                srcset="./assets/images/monstarlab.png 1x,./assets/images/monstarlab@2x.png 2x"
                alt="monstarlab"
              />
            </Col>
            <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
              <img
                src="./assets/images/ntt-docomo.png"
                srcset="./assets/images/ntt-docomo.png 1x,./assets/images/ntt-docomo@2x.png 2x"
                alt="Docomo"
              />
            </Col>
            <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
              <img
                src="./assets/images/section-9.png"
                srcset="./assets/images/section-9.png 1x,./assets/images/section-9@2x.png 2x"
                alt="Section9"
              />
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
