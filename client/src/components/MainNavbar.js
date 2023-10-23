import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../images/nextflixlogo.png"
import { useNavigate } from "react-router-dom";

function MainNavbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/home?q=${searchQuery}`);
    }
  };



  // return (
    
    // <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    return (
      <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="120"
            height="30"
            className="d-inline-block align-top"
            alt="Nextflix Logo"
          />
   
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">News&Popular</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
            <Nav.Link href="#">Browse by Languages</Nav.Link>
          </Nav>
          <Nav>
          <Form
          onSubmit={handleSearchSubmit}
           className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            <Nav.Link href="/login">Login/Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;