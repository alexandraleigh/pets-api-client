import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Find-a-Pet</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={1} title="Organization" id="basic-nav-dropdown">
              <LinkContainer to="/login">
                <NavItem eventKey={1.1}>Login</NavItem>
              </LinkContainer>
              <LinkContainer to="/signup">
                <MenuItem eventKey={1.2}>Sign Up</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}



export default NavBar;
