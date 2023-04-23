import React from "react";
import {Container, Table, Col} from "react-bootstrap";
// import {useSelector} from "react-redux";
import Orders from "../data/orders";
import useFetch from "../products/fetch-api";
import {Link} from "react-router-dom";

function OrdersListScreen () {
    // const ordersJson = useFetch('http://localhost:4000/coffee/hot');
    // const orders = JSON.parse(ordersJson);
    if (!Orders) {
        return <p>Loading...</p>;
    }
    return (
        <Container className="py-5">
            <Link to="/admin" className="btn btn-light">Back</Link>
            <h1 className="pb-5">Orders</h1>
            <Table striped bordered responsive>
                <thead>
                <tr className="text-center">
                    <th>OrderNumber</th>
                    <th>Date</th>
                    <th>UserName</th>
                    <th>Total Amount</th>
                    <th>Paid</th>
                    <th>Modify</th>
                </tr>
                </thead>
                <tbody>
                {Orders.map((order) => (
                    <tr key={order.id} className="text-center">
                        <td>{order.id}</td>
                        <td>{order.date}</td>
                        <td>{order.customer.name}</td>
                        <td>$ {order.total}</td>
                        <td>{order.isPaid ? "YES" : "NO"}</td>
                        <td>
                            <div className="d-inline-flex">
                                <Link to={`/admin/orders/${order.id}/edit`}>
                                    <button className="btn btn-success">Edit</button>
                                </Link>
                                <button className="btn btn-warning">Delete</button>
                            </div>
                        </td>
                    </tr>))
                }
                </tbody>
            </Table>
        </Container>
    );
}
export default OrdersListScreen;