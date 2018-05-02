import React, { Component } from "react";
import Logo from "./../../assets/dc-pattern-lib/react/components/logos/logos";
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

class PrimaryNavItems extends Component {
  
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
    return <div className="nav-primary__wrapper">
        <NavbarToggler onClick={this.toggle} />
        <Collapse className="nav-mobile" isOpen={this.state.isOpen} navbar>
          <Nav navbar className="ml-md-5 d-flex mr-md-auto">
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
          </Nav>
          <Nav navbar className="d-flex">
            <NavItem>
              <NavLink href="https://go.getshifter.io">Login</NavLink>
            </NavItem>
            <NavItem className="d-none d-lg-block">
              <NavLink className="px-0 text-lowercase" href="https://go.getshifter.io">
                or
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="pr-md-0" href="#">
                <Button className="btn btn-gradient-primary text-uppercase btn-arrow btn-signup">
                  Sign Up
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>;
  }
}

class PrimaryNav extends Component {

  render() {
    return <div className="_gradient-purple-dark nav-primary">
        <Navbar expand="md" className="navbar-dark navbar-expand-md text-uppercase">
          <Container>
            <NavbarBrand href="/">
              <Logo LogoStyle="primary-color-white" />
            </NavbarBrand>
            <PrimaryNavItems />
          </Container>
        </Navbar>
      </div>;
  }
}

export default PrimaryNav;