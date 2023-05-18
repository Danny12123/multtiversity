import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="gray" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./image/lo.png" width="100" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#partner"
              style={{ color: "#fff", fontWeight: "700" }}
            >
              <span>Partners</span>
            </Nav.Link>
            <Nav.Link
              href="#coirses"
              style={{ color: "#fff", fontWeight: "700" }}
            >
              <span>Our Courses</span>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#vision">Our Vision</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link
              href="#deets"
              style={{ color: "#fff", fontWeight: "700" }}
            >
              <span>Our Mission</span>
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#memes"
              style={{ color: "#fff", fontWeight: "700" }}
            >
              <span>Our Vision</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
