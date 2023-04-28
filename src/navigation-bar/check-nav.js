import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";

export default function CheckNav({ step1, step2, step3}) {
    return (
        <Container>
            <Nav className="d-flex justify-content-center">
                <Nav.Item>
                    {step1 ? (
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    ) : (
                        <Nav.Link disabled>Login</Nav.Link>
                    )}
                    {step2 ? (
                        <Link to="/shipping" className="nav-link">
                            Shipping
                        </Link>
                    ) : (
                        <Nav.Link disabled>Shipping</Nav.Link>
                    )}
                   
                    {step3 ? (
                        <Link to="/orderconfirm" className="nav-link">
                            Order Confirm
                        </Link>
                    ) : (
                        <Nav.Link disabled>Order Confirm</Nav.Link>
                    )}


                </Nav.Item>

            </Nav>
        </Container>
    );
}
