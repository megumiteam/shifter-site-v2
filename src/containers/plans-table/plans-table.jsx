import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Table, Button, ButtonGroup } from "reactstrap";

let PlansTableFeature = props => (
  <tr>
    <th scope="row">{props.title}</th>
    <td>{props.trial}</td>
    <td>{props.personal}</td>
    <td>{props.business}</td>
    <td>{props.agency}</td>
    <td>{props.plus}</td>
  </tr>
);

class PlansTable extends Component {

  constructor(props) {
    super(props);
    this.state = { rSelected: null };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      rSelected: 'month'
    })
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {
    
    const title = this.props.content.title;

    let personal = this.state.rSelected === 'month' ? '$20' : '$15';
    let business = this.state.rSelected === "month" ? '$40' : '$30';
    let agency = this.state.rSelected === "month" ? '$90' : '$60';
    let agencyPlus = this.state.rSelected === "month" ? '$150' : '$100';

    return <section className="py-7 bg-gray-100">
        <Container>
          <Row className="justify-content-md-center mb-5">
            <Col md="8" className="text-center">
              <h4>{title}</h4>
            </Col>
          </Row>
          <Row className="text-center mb-7">
            <Col>
              <ButtonGroup className="">
                <Button className="btn-outline-secondary" onClick={() => this.onRadioBtnClick("year")} active={this.state.rSelected === "year"}>
                  Annual
                </Button>
                <Button className="btn-outline-secondary" onClick={() => this.onRadioBtnClick("month")} active={this.state.rSelected === "month"}>
                  Monthly
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="table-responsive">
                <Table className="table-striped plans-table">
                  <thead>
                    <tr>
                      <th />
                      <th>
                        Forever Trial
                        <div className="h3">Free</div>
                      </th>
                      <th className="personal">
                        Personal
                        <div className="h3">{personal}</div>
                      </th>
                      <th>
                        Business
                        <div className="h3">{business}</div>
                      </th>
                      <th>
                        Agency
                        <div className="h3">{agency}</div>
                      </th>
                      <th>
                        Agency Plus
                        <div className="h3">{agencyPlus}</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="small">
                    <PlansTableFeature title="WordPress Sites" trial="1" personal="3" business="10" agency="30" plus="50" />
                    <PlansTableFeature title="Custom Domain" trial="Disabled" personal="Enabled" business="Enabled" agency="Enabled" plus="Enabled" />
                    <PlansTableFeature title="Storage" trial="1GB" personal="10GB" business="500GB" agency="1TB" plus="1TB" />
                    <PlansTableFeature title="Data Transfer" trial="10GB" personal="1TB" business="5TB" agency="10TB" plus="10TB" />
                    <PlansTableFeature title="Users" trial="1" personal="Unlimited" business="Unlimited" agency="Unlimited" plus="Unlimited" />
                    <PlansTableFeature title="Backups" trial="Disabled" personal="1 Year" business="1 Year" agency="1 Year" plus="1 Year" />
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Select Plan</th>
                      <td>
                        <a class="btn btn-gradient-primary" href="https://go.getshifter.io">
                          Select
                        </a>
                      </td>
                      <td>
                        <a class="btn btn-gradient-primary" href="https://go.getshifter.io">
                          Select
                        </a>
                      </td>
                      <td>
                        <a class="btn btn-gradient-primary" href="https://go.getshifter.io">
                          Select
                        </a>
                      </td>
                      <td>
                        <a class="btn btn-gradient-primary" href="https://go.getshifter.io">
                          Select
                        </a>
                      </td>
                      <td>
                        <a class="btn btn-gradient-primary" href="https://go.getshifter.io">
                          Select
                        </a>
                      </td>
                    </tr>
                  </tfoot>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </section>;
  }
}

PlansTable.propTypes = {
  content: PropTypes.object,
};

PlansTable.defaultProps = {
  content: null
};

PlansTableFeature.propTypes = {
  title: PropTypes.string.required
};

export default PlansTable;
