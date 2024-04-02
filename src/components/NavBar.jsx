import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="dark" className="container-fluid navbar" data-bs-theme="dark">
      <Container>
        <Navbar.Brand
          to="/"
          as={NavLink}
          className="navBrand justify-content-center d-flex"
        >
          <img src={logo} alt="logo" width={30} />
          <p>Central de productos</p>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/category/alimentos" as={NavLink}>
            Alimentos
          </Nav.Link>
          <Nav.Link to="/category/servicios" as={NavLink}>
            Servicios
          </Nav.Link>
          <Nav.Link to="/category/tecnologia" as={NavLink}>
            Tecnología
          </Nav.Link>
        </Nav>
      </Container>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
