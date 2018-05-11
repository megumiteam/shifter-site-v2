import React, { Component } from "react";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

class NavPrimaryMobile extends Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <nav className="nav-mobile d-block d-lg-none">
        <Button className="nav-mobile-toggle" onClick={this.toggle}>
          <i className="fa fa-bars mr-2" />Menu
        </Button>
        <Collapse isOpen={this.state.isOpen} navbar>
          <a className="nav-mobile-toggle" onClick={this.toggle}>
            <i className="fa fa-times" />
          </a>
          <Nav navbar className="d-flex">
            <NavItem>
              <NavLink href="/features/">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pricing/">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="https://support.getshifter.io">
                Support
              </NavLink>
            </NavItem>
            &mdash;
          </Nav>
          <Nav navbar className="d-flex">
            <NavItem>
              <NavLink href="https://go.getshifter.io">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Button className="btn btn-gradient-primary text-uppercase btn-arrow btn-signup">
                  Sign Up
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </nav>;
  }
}

export default NavPrimaryMobile;