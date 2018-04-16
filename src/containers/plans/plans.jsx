import React, { Component } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import $ from "jquery"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Media
} from "reactstrap";

var settings = {
  centerMode: true,
  infinite: false,
  centerPadding: "60px",
  slidesToShow: 3,
  autoplaySpeed: 5000,
  autoplay: false,
  initialSlide: 1
};

function PlansItemFeature(props) {
  return <li className="mb-2">{props.feature}</li>;
}

function PlansItem(props) {
  return <Card className="box-shadow text-center plans__item">
      <CardBody>
        <div className="plans__item-inner">
          <CardTitle>Personal</CardTitle>
          <div>$15</div>
          <CardText>
            <small>
              <ul class="list-unstyled">
                <PlansItemFeature feature="3 Projects" />
                <PlansItemFeature feature="10GB Storage" />
                <PlansItemFeature feature="1TB Data Transfer" />
                <PlansItemFeature feature="Integrated CDN" />
                <PlansItemFeature feature="HTTPS Included" />
                <PlansItemFeature feature="Custom Domain" />
              </ul>
            </small>
          </CardText>
        </div>
        <a className="btn btn-gradient-primary" href="https://go.getshifter.io">
          Choose
        </a>
      </CardBody>
    </Card>;
}

class Plans extends Component {
  render() {
    return <section className="pricing-plans py-10 _gradient-purple-dark">
        <Container>
          <Row className="justify-content-md-center mb-5 text-white">
            <Col md="8" className="text-center">
              <h4>{this.props.title}</h4>
              <div className="mt-3 small">{this.props.subtitle}</div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="10">
              <Slider className="plans" {...settings}>
                <PlansItem />
                <PlansItem />
                <PlansItem />
                <PlansItem />
                <PlansItem />
                <PlansItem />
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

PlansItemFeature.propTypes = {
  feature: PropTypes.string
}

Plans.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Plans.propTypes = {
  title: "",
  subtitle: ""
};

export default Plans;
