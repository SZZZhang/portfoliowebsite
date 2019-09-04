import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";

import React, { Component } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.svg';

class Navbar extends Component {

    render () {
        return (
        <MDBNavbar color="transparent" scrolling fixed="top" light expand="md" style={{ boxShadow: 'none'}}>
        <MDBNavbarBrand href="/">
          <img src={logo} alt={'Shirley Zhang'} style={{ width: '3rem', margin: '.5rem' }} />
        </MDBNavbarBrand>
        <MDBNavbarToggler />
        <MDBCollapse id="navbarCollapse3" navbar>
          <MDBNavbarNav left>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavLink id="nav-links" to="/resume">Resume</MDBNavLink>
            <MDBNavLink id="nav-links" to="/projects">Projects</MDBNavLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
        );
    }
}

export default Navbar; 
