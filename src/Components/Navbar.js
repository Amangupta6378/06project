import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// import input from "react-bootstrap/Input";

// import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            width="150px"
            src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Men</Nav.Link>
            <Nav.Link href="#home">Women</Nav.Link>
            <Nav.Link href="#home">Mobile Cover</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
          <input
            className="input"
            type="search"
            placeholder="search by product, category or collection"
          ></input>
          <button className="button1 ms-3 px-2">Login</button>
          <FontAwesomeIcon icon="fa-regular fa-heart" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
