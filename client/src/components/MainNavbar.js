import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          {/* <img
            src="/path-to-your-logo.png" 
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="FerryTravel Logo"
          /> */}
          Nextflix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://www.netflix.com/browse">Home</Nav.Link>
            <Nav.Link href="https://www.netflix.com/browse/genre/83">TV Shows</Nav.Link>
            <Nav.Link href="https://www.netflix.com/browse/genre/34399">Movies</Nav.Link>
            <Nav.Link href="https://www.netflix.com/latest">News&Popular</Nav.Link>
            <Nav.Link href="https://www.netflix.com/browse/my-list">My List</Nav.Link>
            <Nav.Link href="https://www.netflix.com/browse/original-audio">Browse by Languages</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login/Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;