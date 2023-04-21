import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../actions/userActions";
// import {current} from "@reduxjs/toolkit";

function NavigationBar() {

    // const userLogin = useSelector((state) => state.userLogin);
    // const {userInfo} = userLogin();
    let userInfo = null;
    const dispatch = useDispatch();


    const handleLogout =() =>{
        dispatch(logout);
    }
    /*let currentUser = null;*/
    return (
        //https://react-bootstrap.github.io/components/navbar/
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/">
            <img
              src='../images/starbucksLogo.png'
              width="50"
              height="50"
              className="d-inline-block align-top rounded float-start"
              alt="Logo"
            />
          </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link href="#features">Menu</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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

                    <Nav>
                        <Nav.Link href="#deets">Cart</Nav.Link>
                        <NavDropdown title="Sign In" id="collasible-nav-dropdown">
                            {!userInfo && <NavDropdown.Item href="/login">Login</NavDropdown.Item>}
                            {!userInfo && <NavDropdown.Item href="/register">Register</NavDropdown.Item>}
                            {userInfo && <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>}
                            {<NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>}
                            <NavDropdown.Divider />
                            {userInfo && userInfo.isAdmin
                                && <NavDropdown.Item href="/admin">
                                Login as ADMIN
                            </NavDropdown.Item>}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
export default NavigationBar;