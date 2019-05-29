import React from "react";
import {
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
  DropdownItem
} from "reactstrap";

export default class Navigation extends React.Component {
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
    return (
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/">El Hackathon Muñón</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/" className="primary">
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#perks" className="primary">
                  Perks
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" className="primary">
                  Workshops
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" className="primary">
                  Sponsors
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/reactstrap/reactstrap"
                  className="primary"
                >
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
