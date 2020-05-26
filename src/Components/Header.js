import React, { useState } from 'react';
import '../Styling/Header.css';
import LoginModal from '../Components/LoginModal'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import logo from "../Images/coderdojo-logo-light-bg.svg"



//navbar inspiration from https://reactstrap.github.io/
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  console.log(props)
  return (
    <div>
      <Navbar color="purple" dark expand="md">
        {/* <NavbarBrand size="sm"> */}
        <NavLink href="/">
          <img src={logo}
            alt="HeaderLogo"
            height="100"
            width="250"
            style={{ visibility: isOpen ? 'hidden' : 'visible' }}
          />
        </NavLink>
        {/* </NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Faq">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Register">Register</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Resources
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem light="true">
                  <NavItem >
                    <NavLink className="text-muted" href="/Resources/StudentResources">Student Resources</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink className="text-muted" href="/Resources/Files">Files</NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/Login">{props.isSignedIn == "false" ? "Login" : "Logout"}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Header;

