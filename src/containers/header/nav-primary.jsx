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
    return <Navbar expand="md" className="_gradient-purple-dark navbar-dark navbar-expand-md" toggleable>
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
                  Docs
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://go.getshifter.io">Login</NavLink>
              </NavItem>
              <NavItem className="d-none d-lg-block">
                <NavLink className="px-0" href="https://go.getshifter.io">
                  Or
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="pr-0">
                  <a href="https://go.getshifter.io" className="btn btn-gradient-primary">
                    Sign Up &rarr;
                  </a>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>;
  }
}

export default PrimaryNav;