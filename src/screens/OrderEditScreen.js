import React from "react";
import {Container, Button, Form, ListGroup, ListGroupItem, Row, Col} from "react-bootstrap";
import Orders from '../data/orders'
import {useParams, Link} from "react-router-dom";
// import useFetch from "../products/fetch-api";
// import {useDispatch} from "react-redux";
// import {useState} from "react";

const OrderEditScreen = () => {
    const { id } = useParams();
    const order = Orders.find(order => order.id === id);
    /*    const productData = useFetch(`http://localhost:4000/coffee/hot/${id}`);
        const products = JSON.parse(productData);*/

    // const dispatch = useDispatch();

    if (!Orders) {
        return <p>Loading...</p>;
    }
    return (
        <Container>
            <Link to="/admin/orders" className="btn btn-light">Back</Link>
            <h1 className="text-center fw-bold py-3">Update Customer Order</h1>
            <ListGroup>
                <ListGroup.Item>
                    <h2>Customer Info</h2>
                    {order.customer.name}
                </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item>
                   <h2>Order Items</h2>
                    <ListGroup variant="flush">
                        {order.items.map((item, index) => (
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col>
                                        <Link to={`/coffee/${item.product}`}>
                                            {item.product}
                                        </Link>
                                    </Col>
                                    <Col md={4}>
                                        {item.qty} x ${item.price} = ${item.qty * item.price}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h2>Order Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={3}>Total</Col>
                        <Col xs={3}>${order.total}</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={3}>Payment Status?</Col>
                        <Col xs={3}>
                            {order.isPaid ? "Payment Received" : "To Be Paid"}</Col>
                        <Col xs={3}>
                            <Button className="btn-success" onClick=''>Edit</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
            <Button type="submit" className="mt-3">Update</Button>
        </Container>
    );
}

export default OrderEditScreen;