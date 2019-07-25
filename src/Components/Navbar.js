import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

    render () {
        return (
        <MDBNavbar color="aqua-gradient" scrolling fixed="top" dark expand="md">
        <MDBNavbarBrand href="/">
          <strong className="white-text">Shirley Zhang</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler />
        <MDBCollapse id="navbarCollapse3" navbar>
          <MDBNavbarNav left>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavLink id="nav-links" to="/programming">Programming</MDBNavLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
        );
    }
}

export default Navbar; 
