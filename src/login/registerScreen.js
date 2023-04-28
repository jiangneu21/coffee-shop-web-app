import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { userReg } from "../action/userAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Register({ location }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;
    //console.log(userInfo);
    // console.log(loading);
    location = useLocation();
    const redirect = location.search?location.search.split("=")[1]:"/";
    useEffect(() => {
        if (userInfo) {
            window.location.href = redirect;
        }
    }, [userInfo, redirect]);
    const formSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Password do not match");
        } else {
            setMessage(null);
            dispatch(userReg(name, email, password));
        }
        
        console.log(name, email, password);
    }
    return (
        <div className="container pt-5" style={{ width: '50%' }}>
            {error && <div className="alert alert-danger">{error}</div>}
            {loading && <div className="text-center"/>}
            {message && <div className="alert alert-danger">{message}</div>}

            <form onSubmit={formSubmit} >
                <div className="form-outline mb-4">
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <label className="form-label">Username</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <label className="form-label">Email address</label>
                </div>


                <div className="form-outline mb-4">
                    <input
                        className="form-control"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label">Password</label>
                </div>
                <div className="form-outline mb-4">
                    <input
                        className="form-control"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    <label className="form-label">Confirm Password</label>
                </div>

                <div className="text-center ">
                    <button type="submit" className="btn btn-primary mb-4 ">Sign in</button>
                </div>



                <div className="text-center">
                    <p>Already a member? <Link to={redirect?`/login?redirect=${redirect}`:'/login'}>Login</Link></p>
                </div>
            </form></div>
    );

}

