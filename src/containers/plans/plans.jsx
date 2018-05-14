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
  Button,
  ButtonGroup
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
    this.state = { cSelected: null };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      rSelected: 'month'
    })
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    const settings = {
      centerMode: true,
      infinite: false,
      centerPadding: "0",
      slidesToShow: 1,
      autoplay: false,
      initialSlide: 1,
      arrows: false
    };

    const title = this.props.content.title;
    const subtitle = this.props.content.subtitle;

    let personal = this.state.rSelected === 'month' ? '$20' : '$15';
    let business = this.state.rSelected === "month" ? '$40' : '$30';
    let agency = this.state.rSelected === "month" ? '$90' : '$60';
    let agencyPlus = this.state.rSelected === "month" ? '$210' : '$140';

    return <section className="pricing-plans py-7 _gradient-purple-dark">
        <Container>
          <Row className="justify-content-md-center mb-5 text-white">
            <Col md="8" className="text-center">
              <h2>{title}</h2>
              <div className="mt-3 small">{subtitle}</div>
            </Col>
          </Row>
          <Row className="text-center mb-7">
            <Col>
              <ButtonGroup className="btn-toggle">
                <Button className="btn-outline-white" onClick={() => this.onRadioBtnClick("year")} active={this.state.rSelected === "year"}>
                  Annual
                </Button>
                <Button className="btn-outline-white" onClick={() => this.onRadioBtnClick("month")} active={this.state.rSelected === "month"}>
                  Monthly
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center">
            <Col xs="9" sm="12">
              <Row className="plans-slider justify-content-center">
                <Button className="pricing-plans__control-item left btn-link" onClick={this.previous}>
                  <i className="fa fa-angle-left" />
                </Button>
                <Button className="pricing-plans__control-item right btn-link" onClick={this.next}>
                  <i className="fa fa-angle-right" />
                </Button>
                <Col md="6" lg="4">
                  <Slider className="plans" ref={c => (this.slider = c)} {...settings}>
                    <PlansItem plan="Trial" price="Free" sites="1 Site" domain="Shifter Domain" storage="1GB Storage" transfer="10GB Transfer" />
                    <PlansItem plan="Personal" interval="mo" price={personal} sites="3 Sites" storage="10GB Storage" transfer="1TB Transfer" domain="Custom Domain" https="Free HTTPS" cdn="Integrated CDN" />
                    <PlansItem plan="Business" price={business} interval="mo" sites="10 Sites" storage="500GB Storage" transfer="5TB Transfer" domain="Custom Domain" https="Free HTTPS" cdn="Integrated CDN" />
                    <PlansItem plan="Agency" price={agency} interval="mo" sites="30 Sites" storage="1TB Storage" transfer="10TB Transfer" domain="Custom Domain" https="Free HTTPS" cdn="Integrated CDN" />
                    <PlansItem plan="Agency Plus" price={agencyPlus} interval="mo" sites="50 Sites" storage="1TB Storage" transfer="10TB Transfer" domain="Custom Domain" https="Free HTTPS" cdn="Integrated CDN" />
                  </Slider>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>;
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
