import React from "react";
import ProductsListScreen from "./ProductsListScreen";
import UsersListScreen from "./UsersListScreen";
import {Container, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function AdminScreen () {
    return (
        <Container className="py-5">
            <h1 className="pb-5">Admin</h1>
            <Row className="justify-content-between">
                <Col md={5}>
                    <Card style={{width: "20rem", height: "20rem"}} className="d-flex align-items-center justify-content-center">
                        <Link to='/admin/users' className="text-decoration-none">
                            Manage All User
                        </Link>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card style={{width: "20rem", height: "20rem"}} className="d-flex align-items-center justify-content-center">
                        <Link to='/admin/products' className="text-decoration-none justify-content-center">
                            Manage All Products
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminScreen;