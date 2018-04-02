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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  ButtonToolbar,
  ButtonGroup
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
    return <div className="bg-gray-100">
        <Navbar expand="md">
          <Container>
            <NavbarBrand href="/">
              <Logo LogoStyle="primary-color-black" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto mr-4" navbar>
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
                  <NavLink href="/support/">Support</NavLink>
                </NavItem>
              </Nav>
              <Nav>
                <Button color="primary" className="mr-2" href="https://go.getshifter.io/">
                  Log In
                </Button>
                <Button outline href="https://go.getshifter.io/register/">
                  Sign Up
                </Button>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>;
  }
}

export default PrimaryNav;