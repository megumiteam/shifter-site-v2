import React, { Component } from "react";
import PropTypes from "prop-types";
import { Collapse, Button, CardBody, Card, CardTitle } from "reactstrap";

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
        <Card onClick={this.toggle}>
          <CardBody>
            <CardTitle className="mb-0">
              <h3 className="mb-0 h6">{this.props.title}</h3>
            </CardTitle>
            <Collapse isOpen={this.state.collapse}>
              <div className="mt-4">
                {this.props.body}
              </div>
            </Collapse>
          </CardBody>
        </Card>
      </article>;
  }
}

Accordian.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

Accordian.propTypes = {
  title: "",
  body: ""
};

export default Accordian;
