import React, {useEffect, useState} from "react";
// import {Navigate, useNavigate} from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import { userLoginReducer } from "../reducer/userReducers";
import {Button, Container, Form, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {login} from "../actions/userActions"

function LoginScreen( { history, location }) {
    /*const { currentUser }= useSelector((state) => state.user);*/

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
/*    const navigate = useNavigate();*/
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin)
    const {error, userInfo} = userLogin;
    const redirect = location ? location.search.split('=')[1] : '/';

 /*   const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ email, password }));
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };*/

    useEffect(() => {
        if(userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])
    const handleLogin = (e) => {
        e.preventDefault()
        //dispatch(loginThunk({email, password}))
        dispatch(login({email, password}))
    };

    return (
        <Container className="justify-content-md-center col col-6">
            <h1 className="text-center fw-bold py-3">Sign In</h1>
            {error && error.message('invalid')}
            <Form onSubmit={handleLogin}>
                <Form.Group controlId='email' className="py-3">
                    <Form.Control type='email'
                                  placeholder="* Enter email" value={email}
                                  onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password' className="py-3">
                    <Form.Control type='password'
                                  placeholder="* Enter your password" value={password}
                                  onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
            </Form>
            <Button type="submit" onClick={handleLogin}>Sign In</Button>
            <Row className='py-3'>
                <p>Not a customer yet?</p>
                <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Go to register!</Link>
            </Row>
        </Container>
    );
}
export default LoginScreen;