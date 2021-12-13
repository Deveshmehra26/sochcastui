import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  // Button,
} from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar color="light" expand="md" light className="px-5">
      <NavbarBrand className="ml-5" href="/">reactstrap</NavbarBrand>
        <Container className="px-5">
        
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <NavItem>
              <NavLink href="">Create</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Listen</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Brand & Enterprise</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Blog</NavLink>
            </NavItem>
            <button className="button">Sign In</button>
            <button className="button">Sign Up</button>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
