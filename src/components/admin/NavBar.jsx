import React from "react";

/* import { Navbar, Nav, Form, FormControl, Button } from "reactstrap"; */
import {
  NavbarBrand,
  Nav,
  NavLink,
  Navbar,
  Button,
  Form,
  Input,
} from "reactstrap";

function NavBar() {
  return (
    <>
      <Navbar className="mb-5" bg="dark" variant="dark">
        <NavbarBrand href="#home">Navbar</NavbarBrand>
        <Nav className="mr-auto">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
        </Nav>
        <Form inline>
          <Input type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;
