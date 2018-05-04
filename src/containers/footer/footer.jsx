import React, { Component } from "react";
import Logo from "./../../assets/dc-pattern-lib/react/components/logos/logos";
import { Container, Row, Col, Nav, NavLink } from "reactstrap";

class Footer extends Component {

  render() {

    function launchIntercom(e) {
      e.preventDefault();
      window.Intercom('show');
    }

    return <footer role="contentinfo">
        <Container className="pt-5 text-center text-md-left">
          <Row className="justify-content-center">
            <Col xs="10">
              <Row>
                <Col xs="12" lg="3" className="mb-5">
                  <Row>
                    <Col>
                      <Logo LogoStyle="primary-color-black" />
                    </Col>
                  </Row>
                </Col>
                <Col xs="12" lg="9">
                  <Row>
                    <Col xs="12" md="3" className="mb-5">
                      <h6 className="text-uppercase mb-3">Product</h6>
                      <Nav vertical className="small">
                        <NavLink href="/features" className="p-0 mb-3">
                          Features
                        </NavLink>
                        <NavLink href="/pricing" className="p-0 mb-3">
                          Pricing
                        </NavLink>
                        <NavLink href="https://support.getshifter.io" className="p-0">
                          Docs
                        </NavLink>
                      </Nav>
                    </Col>
                    <Col xs="12" md="3" className="mb-5">
                      <h6 className="text-uppercase mb-3">
                        Expand & Learn
                      </h6>
                      <Nav vertical className="small">
                        <NavLink href="/blog" className="p-0 mb-3">
                          Blog
                        </NavLink>
                        <NavLink href="/blog" className="p-0 mb-3">
                          Events
                        </NavLink>
                        <NavLink href="#" className="p-0">
                          Newsletter
                        </NavLink>
                      </Nav>
                    </Col>
                    <Col xs="12" md="3" className="mb-5">
                      <h6 className="text-uppercase mb-3">Company</h6>
                      <Nav vertical className="small">
                        <NavLink href="https://en.digitalcube.jp/about/" className="p-0 mb-3">
                          About
                        </NavLink>
                        <NavLink href="https://en.digitalcube.jp/privacy-policy/" className="p-0 mb-3">
                          Privacy Policy
                        </NavLink>
                        <NavLink href="#" onClick={launchIntercom} className="p-0">
                          Contact
                        </NavLink>
                      </Nav>
                    </Col>
                    <Col xs="12" md="3" className="mb-5">
                      <h6 className="text-uppercase mb-3">Stay In Touch</h6>
                      <Nav vertical className="small">
                        <NavLink href="https://facebook.com/getshifter" className="p-0 mb-3">
                          Facebook
                        </NavLink>
                        <NavLink href="https://twitter.com/getshifter" className="p-0 mb-3">
                          Twitter
                        </NavLink>
                        <NavLink href="https://profiles.wordpress.org/getshifter" className="p-0">
                          WordPress.org
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
              <h6 className="text-uppercase text-muted small py-5">
                ©{new Date().getFullYear()} Shifter | A DigitalCube Company
              </h6>
            </Col>
          </Row>
        </Container>
      </footer>;
  }
}

export default Footer;
