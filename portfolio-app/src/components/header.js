import React, { Component } from 'react';
import {Container, Row, Col, Nav, Navbar} from 'react-bootstrap';
import logo from '../utils/images/logo.png';

class Header extends Component {
constructor(props) {
  super(props);
}

    render() {

      const style= {
        fontFamily: "Courier New",
        fontSize: "1.75rem",
        color: "#B0E0E6",
      }
      const homeBtn= {
        color: "#B0E0E6",
        fontFamily: "Courier New",
        fontSize: "2.25rem"
      }
      const imgStyle= {
        backgroundColor: "transparent"
      }
        
        return (
          <Navbar style={{backgroundColor: "black"}} collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand style={homeBtn} href="">
            <img style={imgStyle} src={logo} alt="logo" width={"70"} height={"70"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={style} onClick={() => this.props.fxn(1)}>About</Nav.Link>
              <Nav.Link style={style} href="#pricing">Projects</Nav.Link>
              <Nav.Link style={style} href="#deets">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default Header; 