import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Media,
  Table,
  Tooltip
} from "reactstrap";

function PlansOverviewItem(props) {
  return (
    <Col md="4">
      <Media className="mb-5">
        <Media href="#">
          <Media
            className="rounded-circle mr-4"
            object
            src="//placehold.it/40"
            alt=""
          />
        </Media>
        <Media body>
          <Media heading tag="h5" className="mb-4">
            Media heading
          </Media>
          <small>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </small>
        </Media>
      </Media>
    </Col>
  );
}

class PlansTable extends Component {
  render() {
    return <section className="pricing-plans py-10">
        <Container>
          <Row className="justify-content-md-center mb-5">
            <Col md="8" className="text-center">
              <h4>{this.props.title}</h4>
              <div className="mt-3 small">{this.props.subtitle}</div>
            </Col>
          </Row>
          <Row>
            <PlansOverviewItem />
            <PlansOverviewItem />
            <PlansOverviewItem />
            <PlansOverviewItem />
            <PlansOverviewItem />
            <PlansOverviewItem />
          </Row>
        </Container>
      </section>;
  }
}

PlansTable.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

PlansTable.propTypes = {
  title: "",
  subtitle: ""
};

export default PlansTable;
