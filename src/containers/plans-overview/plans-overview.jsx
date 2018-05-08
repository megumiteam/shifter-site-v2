import React, { Component } from "react";
import PropTypes from "prop-types";
import IconSet from "./../../components/icons/icons";
import {
  Container,
  Row,
  Col,
  Media,
} from "reactstrap";

function PlansOverviewItem(props) {
  return <Col md="4">
      <Media className="mb-5">
        <Media href="#">
          <IconSet icon={props.icon} className="mr-4 icon-sm" />
        </Media>
        <Media body>
          <Media heading tag="h5" className="mb-4">
            {props.title}
          </Media>
          <small>
            <p>{props.subtitle}</p>
          </small>
        </Media>
      </Media>
    </Col>;
}

class PlansTable extends Component {

  render() {
    
    const title = this.props.content.title;

    let items = this.props.content.items.map((props, index) => {
      return <PlansOverviewItem title={props.title} subtitle={props.subtitle} icon={props.icon} />;
    });

    return <section className="py-10">
        <Container>
          <Row className="justify-content-md-center mb-5">
            <Col md="8" className="text-center">
              <h4>{title}</h4>
              <div className="mt-3 small">{this.props.subtitle}</div>
            </Col>
          </Row>
          <Row>
            {items}
          </Row>
        </Container>
      </section>;
  }
}

PlansTable.propTypes = {
  content: PropTypes.object,
};

PlansTable.defaultProps = {
  content: null,
};

export default PlansTable;
