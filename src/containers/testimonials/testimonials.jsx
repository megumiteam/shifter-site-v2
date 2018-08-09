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
          conversation: "none",
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

    return <section className="testimonials pt-10 pb-8 section-angle--purple-dark _gradient-purple-dark text-white">
      <Container>
        <Row className="text-center justify-content-center mb-3"><h4>Our Clients</h4></Row>
        <Row className="justify-content-md-center text-center mb-4">
          <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
            <img
              src="./assets/images/amon.png"
              srcSet="./assets/images/amon.png 1x, ./assets/images/amon@2x.png 2x"
              alt="amon"
            />
          </Col>
          <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
            <img
              src="./assets/images/hde.png"
              srcSet="./assets/images/hde.png 1x, ./assets/images/hde@2x.png 2x"
              alt="hde"
            />
          </Col>
          <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
            <img
              src="./assets/images/heptagon.png"
              srcSet="./assets/images/heptagon.png 1x,./assets/images/heptagon@2x.png 2x"
              alt="heptagon"
            />
          </Col>
          <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
            <img
              src="./assets/images/monstarlab.png"
              srcSet="./assets/images/monstarlab.png 1x,./assets/images/monstarlab@2x.png 2x"
              alt="monstarlab"
            />
          </Col>
          <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
            <img
              src="./assets/images/ntt-docomo.png"
              srcSet="./assets/images/ntt-docomo.png 1x,./assets/images/ntt-docomo@2x.png 2x"
              alt="Docomo"
            />
          </Col>
          <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
            <img
              src="./assets/images/section-9.png"
              srcSet="./assets/images/section-9.png 1x,./assets/images/section-9@2x.png 2x"
              alt="Section9"
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="8" className="text-center text-white mb-5">
            <h4>{this.props.content.title}</h4>
            <div className="mt-3">
            Drop us a line with <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fgetshifter.io&hashtags=GetShifter">#GetShifter</a> and let us know what you think
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
            <a href="https://www.creativebloq.com/features/10-best-new-web-design-tools-for-march-2017">
              <img
                src="./assets/images/cb.png"
                srcSet="./assets/images/cb.png 1x, ./assets/images/cb@2x.png 2x"
                alt="Creative Bloq"
              />
            </a>
          </Col>
          <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
            <a href="https://cloudacademy.com/blog/wordpress-cloud-hosting-shifter/">
              <img
                src="./assets/images/codeacademy.png"
                srcSet="./assets/images/codeacademy.png 1x, ./assets/images/codeacademy@2x.png 2x"
                alt="Code Academy"
              />
            </a>
          </Col>
          <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
            <a href="https://www.netlify.com/blog/2017/02/23/shifting-wordpress-to-the-jamstack/">
              <img
                src="./assets/images/jamstack.png"
                srcSet="./assets/images/jamstack.png 1x,./assets/images/jamstack@2x.png 2x"
                alt="JAMStack Radio"
              />
            </a>
          </Col>
          <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
            <a href="https://poststatus.com/footnotes/shifter-is-a-serverless-hosting-solution/">
              <img
                src="./assets/images/poststatus.png"
                srcSet="./assets/images/poststatus.png 1x,./assets/images/poststatus@2x.png 2x"
                alt="PostStatus"
              />
            </a>
          </Col>
          <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
            <a href="https://serverless.com/blog/serverless-wordpress-hosting-with-shifter/">
              <img
                src="./assets/images/serverless.png"
                srcSet="./assets/images/serverless.png 1x,./assets/images/serverless@2x.png 2x"
                alt="Serverless Framework Blog"
              />
            </a>
          </Col>
          <Col xs="6" sm="4" md="3" lg="2" className="mb-5">
            <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">
              <img
                src="./assets/images/wptavern.png"
                srcSet="./assets/images/wptavern.png 1x,./assets/images/wptavern@2x.png 2x"
                alt="WP Tavern"
              />
            </a>
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
