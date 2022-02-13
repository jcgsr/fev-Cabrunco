import * as React from "react"
import { Link } from "gatsby"

// bootstrap
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"
import Container from "react-bootstrap/Container"

const Header = () => (
  <header>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>Marque Aqui</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="#parceiro">
              Parceiros
            </Nav.Link>

            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Procurar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Procurar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

export default Header
