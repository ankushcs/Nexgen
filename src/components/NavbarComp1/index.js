import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import nexgen from "../../imgs/nexgen.png";
import "./index.css";

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" className="link">
            <img
              src={nexgen}
              alt="company logo"
              className="navbar-company-logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-right-side-content"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/" className="link" id="home">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about-us" className="link" id="about">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/mission-and-vision"
                className="link"
                id="missionAndVision"
              >
                Mission and Vision
              </Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/our-values" className="link" id="ourValues">
                Our Values
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/our-core-competencies"
                className="link"
                id="ourCoreCompetencies"
              >
                Our Core Competencies
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/product-and-services"
                className="link"
                id="productAndServices"
              >
                Product and services
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="link" id="contactUs">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
