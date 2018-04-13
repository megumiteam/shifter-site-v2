import React, { Component } from "react";
import Logo from "./../logos/logos";
import { Container, Row, Col, Nav, NavLink } from "reactstrap";

class Footer extends Component {
  render() {
    return <footer class="py-5" role="contentinfo">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="10">
              <Row>
                <Col md="3">
                  <Row>
                    <Col md="3" sm="6">
                      <Logo LogoStyle="primary-color-black" />
                    </Col>
                  </Row>
                </Col>
                <Col md="9">
                  <Row>
                    <Col md="3" sm="6">
                      <h6 className="text-uppercase mb-3">Product</h6>
                      <Nav vertical className="small">
                        <NavLink href="#" className="p-0 mb-3 text-black">
                          Link
                        </NavLink>
                        <NavLink href="#" className="p-0 mb-3 text-black">
                          Link
                        </NavLink>
                        <NavLink href="#" className="p-0 text-black">
                          Another Link
                        </NavLink>
                      </Nav>
                    </Col>
                    <Col md="3" sm="6">
                      <h6 className="text-uppercase mb-3">
                        Expand &amp; Learn
                      </h6>
                      <Nav vertical className="small">
                        <NavLink href="#" className="p-0 mb-3 text-black">
                          Link
                        </NavLink>
                        <NavLink href="#" className="p-0 mb-3 text-black">
                          Link
                        </NavLink>
                        <NavLink href="#" className="p-0 text-black">
                          Another Link
                        </NavLink>
                      </Nav>
                    </Col>
                    <Col md="3" sm="6">
                      <h6 className="text-uppercase mb-3">Company</h6>
                      <Nav vertical className="small">
                        <NavLink href="#" className="p-0 mb-3 text-black">
                          Link
                        </NavLink>
                        <NavLink href="#" className="p-0 mb-3 text-black">
                          Link
                        </NavLink>
                        <NavLink href="#" className="p-0 text-black">
                          Another Link
                        </NavLink>
                      </Nav>
                    </Col>
                    <Col md="3" sm="6">
                      <h6 className="text-uppercase mb-3">Stay In Touch</h6>
                      <Nav vertical className="small">
                        <NavLink href="#" className="p-0 mb-3 text-black">
                          Link
                        </NavLink>
                        <NavLink href="#" className="p-0 mb-3 text-black">
                          Link
                        </NavLink>
                        <NavLink href="#" className="p-0 text-black">
                          Another Link
                        </NavLink>
                      </Nav>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="10">
              <h6 className="text-uppercase small mt-10">
                ©2018 Shifter | A DigitalCube Company
              </h6>
            </Col>
          </Row>
        </Container>
      </footer>;
  }
}

export default Footer;
