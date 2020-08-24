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
                <a className="navHome"><NavLink to="/">Home</NavLink></a>
                <a className="navAbout"><NavLink to="/about">About</NavLink></a>
                <a className="navPortfolio"><NavLink to="/portfolio">Portfolio</NavLink></a>
                <a className="navContact"><NavLink to="/contact">Contact</NavLink></a>
            </Nav>
        </Navbar>
        </React.Fragment>
    )
    }

}

export default NavTest;