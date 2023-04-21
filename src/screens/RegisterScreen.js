import React, {useEffect, useState} from "react";
// import {Navigate, useNavigate} from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import { userRegisterReducer } from "../reducer/userReducers";
// import { RegisterThunk } from "../services/userThunks";
import {Container, Button, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {register} from "../actions/userActions"

function RegisterScreen( { history, location }) {
    /*const { currentUser }= useSelector((state) => state.user);*/
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hint, setHint] = useState(null);
    /*    const navigate = useNavigate();*/
    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister)
    const{error, userInfo} = userRegister;
    const redirect = location ? location.search.split("=")[1] : "/";


    /*   const handleRegister = async () => {
           try {
               await dispatch(RegisterThunk({ email, password }));
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
    const handleRegister = (e) => {
        e.preventDefault()
        //dispatch(RegisterThunk({email, password}))
        if(password !== confirmPassword) {
            setHint("Check your password")
        } else {
            dispatch(register({username, email, password}))
        }
    };
    return (
        <Container className="justify-content-md-center col col-6">>
            <h1 className="text-center fw-bold py-3">Register</h1>
            {error && error.message("Invalid")}
            {hint && {setHint}}
            <Form onSubmit={handleRegister}>
                <Form.Group controlId="username" className="py-3">
                    <Form.Control type="name"
                                  placeholder="* Choose your name" value={username}
                                  onChange={(e) => setUsername(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="email" className="py-3">
                    <Form.Control type="email"
                                  placeholder="* Enter your email" value={email}
                                  onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="password" className="py-3">
                    <Form.Control type="password"
                                  placeholder="* Enter your password" value={password}
                                  onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="confirmPassword" className="py-3">
                    <Form.Control type="password"
                                  placeholder="* Confirm your password" value={confirmPassword}
                                  onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>

            </Form>
            <Button type="submit" onClick={handleRegister}>Register</Button>
            <Row className="py-3">
                <p>Have registered already?</p>
                <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>Go to Login!</Link>
            </Row>
        </Container>
    );
}
export default RegisterScreen;