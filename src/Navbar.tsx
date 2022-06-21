import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
/** Navbar component */

export default function NavBar(): ReactElement {
  return (
    <Navbar expand="md" className="sticky-top navbar">
      <Navbar.Brand href="#home" className="navbar-brand">
        Robyn Lam
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end me-3">
        <Nav className="text-start ms-1">
          <Nav.Link href="#about" className="mx-md-5">
            <i className="uil uil-user-circle me-2 d-md-none"></i>
            About
          </Nav.Link>
          <Nav.Link href="#projects" className="mx-md-5">
            <i className="uil uil-coffee me-2 d-md-none"></i>
            Projects
          </Nav.Link>
          <Nav.Link href="#contact" className="mx-md-5">
            <i className="uil uil-envelope me-2 d-md-none"></i>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
