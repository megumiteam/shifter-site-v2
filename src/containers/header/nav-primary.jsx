import React, { Component } from "react";
import Logo from "../../components/logo";
import {
  Container,
  Navbar,
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
    return <div className="nav-primary__wrapper d-none d-lg-flex">
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
            <NavLink href="https://go.getshifter.io/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled className="px-0 text-lowercase text-white" href="#">
              or
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="pr-md-0" href="https://go.getshifter.io/register">
              <Button className="btn btn-gradient-primary text-uppercase btn-arrow btn-signup">
                Sign Up
              </Button>
            </NavLink>
          </NavItem>
        </Nav>
      </div>;
  }
}

class PrimaryNav extends Component {
  render() {
    return (
      <div className="_gradient-purple-dark nav-primary">
        <Navbar
          expand="md"
          className="navbar-dark navbar-expand-md text-uppercase"
        >
          <Container>
            <NavbarBrand href="/">
              <Logo LogoStyle="primary-color-white" />
            </NavbarBrand>
            <PrimaryNavItems />
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default PrimaryNav;
