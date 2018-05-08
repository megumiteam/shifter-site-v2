import React, { Component } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";

function PlansItemFeature(props) {
  return <li className="mb-2">{props.feature}</li>;
}

function PlansItem(props) {
  return (
    <Card className="box-shadow text-center plans__item">
      <CardBody>
        <div className="plans__item-inner">
          <CardTitle>{props.plan}</CardTitle>
          <div className="h2">
            {props.price}
            <span className="h6">{props.interval}</span>
          </div>
          <CardText>
            <small>
              <ul class="list-unstyled">
                <PlansItemFeature feature={props.sites} />
                <PlansItemFeature feature={props.storage} />
                <PlansItemFeature feature={props.transfer} />
                <PlansItemFeature feature={props.domain} />
                <PlansItemFeature feature={props.https} />
                <PlansItemFeature feature={props.cdn} />
              </ul>
            </small>
          </CardText>
        </div>
        <a className="btn btn-gradient-primary" href="https://go.getshifter.io">
          Select
        </a>
      </CardBody>
    </Card>
  );
}

class Plans extends Component {
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
    const settings = {
      centerMode: true,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 1,
      autoplaySpeed: 5000,
      autoplay: false,
      initialSlide: 1,
      arrows: false
    };

    const title = this.props.content.title;
    const subtitle = this.props.content.subtitle;

    return (
      <section className="pricing-plans py-10 _gradient-purple-dark">
        <Container>
          <Row className="justify-content-md-center mb-5 text-white">
            <Col md="8" className="text-center">
              <h4>{title}</h4>
              <div className="mt-3 small">{subtitle}</div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="plans-slider justify-content-md-center">
            <div className="pricing-plans__control">
              <Button
                className="pricing-plans__control-item left btn-link"
                onClick={this.previous}
              >
                <i className="fa fa-angle-left" />
              </Button>
              <Button
                className="pricing-plans__control-item right btn-link"
                onClick={this.next}
              >
                <i className="fa fa-angle-right" />
              </Button>
            </div>
            <Col xs="12" sm="12" md="6" lg="5" xl="4">
              <Slider
                className="plans"
                ref={c => (this.slider = c)}
                {...settings}
              >
                <PlansItem
                  plan="Trial"
                  price="Free"
                  sites="1 Site"
                  domain="Shifter Domain"
                  storage="1GB Storage"
                  transfer="10GB Transfer"
                />
                <PlansItem
                  plan="Personal"
                  interval="mo"
                  price="$15"
                  sites="3 Sites"
                  storage="10GB Storage"
                  transfer="1TB Transfer"
                  domain="Custom Domain"
                  https="Free HTTPS"
                  cdn="Integrated CDN"
                />
                <PlansItem
                  plan="Business"
                  price="$30"
                  interval="mo"
                  sites="10 Sites"
                  storage="500GB Storage"
                  transfer="5TB Transfer"
                  domain="Custom Domain"
                  https="Free HTTPS"
                  cdn="Integrated CDN"
                />
                <PlansItem
                  plan="Agency"
                  price="$60"
                  interval="mo"
                  sites="30 Sites"
                  storage="1TB Storage"
                  transfer="10TB Transfer"
                  domain="Custom Domain"
                  https="Free HTTPS"
                  cdn="Integrated CDN"
                />
                <PlansItem
                  plan="Agency Plus"
                  price="$140"
                  interval="mo"
                  sites="50 Sites"
                  storage="1TB Storage"
                  transfer="10TB Transfer"
                  domain="Custom Domain"
                  https="Free HTTPS"
                  cdn="Integrated CDN"
                />
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

PlansItemFeature.propTypes = {
  feature: PropTypes.string
};

PlansItemFeature.defaultProps = {
  feature: ""
};

PlansItem.propTypes = {
  plan: PropTypes.string,
  sites: PropTypes.string,
  storage: PropTypes.string,
  transfer: PropTypes.string
};

PlansItem.defaultProps = {
  plan: "",
  sites: "",
  storage: "",
  transfer: ""
};

Plans.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Plans.defaultProps = {
  title: "",
  subtitle: ""
};

export default Plans;
