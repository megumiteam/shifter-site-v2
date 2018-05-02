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
    return <div className="_gradient-purple-dark nav-primary">
        <Navbar expand="md" className="navbar-dark navbar-expand-md text-uppercase">
          <Container>
            <NavbarBrand href="/">
              <Logo LogoStyle="primary-color-white" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <div className="d-none d-md-inline-flex nav-primary__wrapper">
              <Nav navbar className="ml-5 d-flex mr-auto">
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
                  <NavLink className="pr-0" href="#">
                    <Button className="btn btn-gradient-primary text-uppercase btn-arrow">
                      Sign Up
                    </Button>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </div>;
  }
}

export default PrimaryNav;