import React from "react";
import {Container, Button, Form} from "react-bootstrap";
import Users from '../data/users'
import {useParams, Link} from "react-router-dom";
// import useFetch from "../products/fetch-api";
import {useDispatch} from "react-redux";
import {useState} from "react";

const UserEditScreen = () => {
    const { id } = useParams();
    const user = Users.find(user => user.id === id);
    // const productData = useFetch(`http://localhost:4000/coffee/hot/${id}`);
    // const products = JSON.parse(productData);

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    if (!Users) {
        return <p>Loading...</p>;
    }
    return (
        <Container>
            <h1 className="text-center fw-bold py-3">Update Customer Information</h1>
            <Link to="/admin/users" className="btn btn-light">Back</Link>
            <Form>
                <Form.Group controlId="username" className="py-3">
                    <Form.Control type="username"
                                  placeholder="* Choose your name"
                                  value={user.userName}
                                  onChange={(e) => setUserName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="email" className="py-3">
                    <Form.Control type="email"
                                  placeholder="* Enter your email"
                                  value={user.email}
                                  onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="password" className="py-3">
                    <Form.Control type="password"
                                  placeholder="* Enter your password"
                                  value={user.password}
                                  onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
            </Form>
            <Button type="submit">Update</Button>

        </Container>
);
}

export default UserEditScreen;