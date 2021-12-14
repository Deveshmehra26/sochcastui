import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import nav from "../img/sochlogo-1.png";
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
    <div className="navcont">
      <Navbar  expand="md" light className="px-5">
        <NavbarBrand className="ml-5" href="/">
          <img src={nav} className="navimg" />
        </NavbarBrand>
        <Container className="px-5">
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <NavItem>
                <NavLink  className="text-white" href="">Create</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="text-white" href="">Listen</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="text-white" href="">Brand & Enterprise</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="text-white" href="">Blog</NavLink>
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
