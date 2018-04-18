import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Table,
} from "reactstrap";

function PlansTableFeature(props) {
  return <tr>
      <th scope="row">{props.feature}</th>
      <td>1GB</td>
      <td>10GB</td>
      <td>500GB</td>
      <td>1TB</td>
      <td>1TB</td>
    </tr>;
}

class PlansTable extends Component {
  render() {
    return <section className="py-10 bg-gray-100">
        <Container>
          <Row className="justify-content-md-center mb-5">
            <Col md="8" className="text-center">
              <h4>{this.props.title}</h4>
              <div className="mt-3 small">{this.props.subtitle}</div>
            </Col>
          </Row>
          <Row>
            <Table className="table-borderless plans-table">
              <thead>
                <tr>
                  <th />
                  <th>Forever Trial</th>
                  <th>Personal</th>
                  <th>Business</th>
                  <th>Agency</th>
                  <th>Agency Plus</th>
                </tr>
              </thead>
              <tbody className="small">
                <PlansTableFeature feature="WordPress Installs" />
                <PlansTableFeature feature="Monthly Visits" />
                <PlansTableFeature feature="SSD Storage" />
                <PlansTableFeature feature="CDN" />
                <PlansTableFeature feature="HTTPS" />
                <PlansTableFeature feature="HTTP/2" />
                <PlansTableFeature feature="WordPress Installs" />
                <PlansTableFeature feature="Monthly Visits" />
                <PlansTableFeature feature="SSD Storage" />
                <PlansTableFeature feature="CDN" />
                <PlansTableFeature feature="HTTPS" />
                <PlansTableFeature feature="HTTP/2" />
                <PlansTableFeature feature="WordPress Installs" />
                <PlansTableFeature feature="Monthly Visits" />
                <PlansTableFeature feature="SSD Storage" />
                <PlansTableFeature feature="CDN" />
                <PlansTableFeature feature="HTTPS" />
                <PlansTableFeature feature="HTTP/2" />
              </tbody>
            </Table>
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
