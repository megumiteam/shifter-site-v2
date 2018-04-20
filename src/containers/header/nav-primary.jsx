import React, { Component } from "react";
import Logo from "./../logos/logos";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

class PrimaryNav extends Component {
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
    return <Navbar expand="md" className="_gradient-purple-dark navbar-dark navbar-expand-md text-uppercase">
        <Container>
          <NavbarBrand href="/">
            <Logo LogoStyle="primary-color-white" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto ml-5" navbar>
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
              <NavItem>
                <NavLink target="_blank">Contact</NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://go.getshifter.io">Login</NavLink>
              </NavItem>
              <NavItem className="d-none d-lg-block">
                <NavLink className="px-0 text-lowercase" href="https://go.getshifter.io">
                  or
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="pr-0" href="#">
                  <Button className="btn btn-gradient-primary text-uppercase btn-arrow">
                    Sign Up
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>;
  }
}

export default PrimaryNav;