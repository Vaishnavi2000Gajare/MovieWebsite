import React from 'react'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export default function Header() {
  return (
    <div>
        {/* <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MovieDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Popular</Nav.Link>
            <Nav.Link href="#link">Top Rated</Nav.Link>
            <Nav.Link href="#link">Upcoming</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
                                {/* <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text id='pop'>
            Popular
          </Navbar.Text>
          <Navbar.Text>
           Top Rated
          </Navbar.Text>
          <Navbar.Text>
           Upcoming
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#" style={{color:'white'}}>MovieDB</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <Link to='/' style={{textDecoration:'none'}}> <a class="nav-link active" aria-current="page" href="#" style={{color:'white', marginLeft:'600px'}}>Popular</a></Link>
        </li>
        <li class="nav-item">
         <Link to='/top' style={{textDecoration:'none'}}> <a class="nav-link" href="#" style={{color:'white'}}>Top Rated</a></Link>
        </li>
        <li class="nav-item">
       <Link to='/upcome' style={{textDecoration:'none'}}>   <a class="nav-link" href="#" style={{color:'white'}}>Upcoming</a></Link>
        </li>
        
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Movie Name" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


    </div>
    
  )
}
