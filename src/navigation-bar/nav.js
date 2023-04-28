import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { userLogout } from "../action/userAction";

function NavigationBar() {

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    console.log(userInfo);
    const logoutHandler = () => {
        console.log("logout");

    }
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(userLogout());
    }

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
                        <Nav.Link href="/">Menu</Nav.Link>
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
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        {/* <Nav.Link href="/login">Sign In</Nav.Link> */}
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id="username">
                                <LinkContainer to="/profile">
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item href="/login" onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
          
                                
                            
                        ) : (
                            <Nav.Link href="/login">Sign In</Nav.Link>
                        )}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
export default NavigationBar;