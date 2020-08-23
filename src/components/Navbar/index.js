import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

class NavTest extends Component {
    render() {
        return(
        <React.Fragment>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">  </Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Nav>
        </Navbar>
        </React.Fragment>
    )
    }

}

export default NavTest;