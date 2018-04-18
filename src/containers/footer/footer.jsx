import React, { Component } from "react";
import Logo from "./../logos/logos";
import { Container, Row, Col, Nav, NavLink } from "reactstrap";

class Footer extends Component {
  render() {
    return <footer className="py-5" role="contentinfo">
        <Container>
          <Row className="justify-content-md-center">
            <Col xl="10">
              <Row>
                <Col sm="12" lg="3" className="mb-sm-5 mb-lg-0">
                  <Row>
                    <Col>
                      <Logo LogoStyle="primary-color-black" />
                    </Col>
                  </Row>
                </Col>
                <Col sm="12" lg="9">
                  <Row>
                    <Col sm="12" md="3" className="mb-5">
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
                    <Col sm="12" md="3" className="mb-5">
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
                    <Col sm="12" md="3" className="mb-5">
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
                    <Col sm="12" md="3" className="mb-5">
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
