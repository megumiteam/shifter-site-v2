import React, { Component } from "react";
import PropTypes from "prop-types";
import { Collapse, CardBody, Card, CardTitle } from "reactstrap";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return <article className="accordian mb-3">
        <Card className="box-shadow-sm" onClick={this.toggle}>
          <CardBody>
            <CardTitle className="mb-0 d-flex justify-content-between" isOpen={this.state.collapse}>
              <h3 className="mb-0 h6">{this.props.title}</h3>
              <i className={this.state.collapse ? "fa fa-angle-up" : "fa fa-angle-down"} />
            </CardTitle>
            <Collapse isOpen={this.state.collapse}>
              <div className="mt-4">{this.props.subtitle}</div>
            </Collapse>
          </CardBody>
        </Card>
      </article>;
  }
}

Accordian.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Accordian.propTypes = {
  title: "",
  subtitle: ""
};

export default Accordian;
