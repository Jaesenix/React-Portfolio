import React, {Component} from "react";
import { Navbar, Nav } from "react-bootstrap";
// import "./style.css";


class NavTest extends Component {
    render() {
        return(
        <React.Fragment>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">  </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
        </React.Fragment>
    )
    }

}

export default NavTest