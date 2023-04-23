import React from "react";
// import ProductsListScreen from "./ProductsListScreen";
// import UsersListScreen from "./UsersListScreen";
import {Container, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function AdminScreen () {
    return (
        <Container className="py-5">
            <h1 className="pb-5">Admin</h1>
            <Row className="justify-content-between">
                <Col md={4}>
                    <Card style={{width: "20rem", height: "20rem", backgroundColor: "#1e3932"}}
                          className="d-flex align-items-center justify-content-center">
                        <Link to='/admin/users' className="text-decoration-none">
                            <h3>Manage All Users</h3>
                        </Link>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{width: "20rem", height: "20rem", backgroundColor: "lightgreen"}}
                          className="d-flex align-items-center justify-content-center">
                        <Link to='/admin/orders' className="text-decoration-none">
                            <h3>Manage All Orders</h3>
                        </Link>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{width: "20rem", height: "20rem", backgroundColor: "#1e3932"}}
                          className="d-flex align-items-center justify-content-center">
                        <Link to='/admin/products' className="text-decoration-none">
                            <h3>Manage All Products</h3>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminScreen;