import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { userLoginAction } from "../action/userAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Login({ location }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { error, userInfo } = userLogin;
    //console.log(userInfo);
    // console.log(loading);


    location = useLocation();
    const redirect = location.search ? location.search.split("=")[1]:"/";
    useEffect(() => {
        if (userInfo) {
            window.location.href = redirect;
        }
    }, [userInfo, redirect]);


    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(userLoginAction(email, password));
        console.log(email, password);
    }
    return (
        //https://mdbootstrap.com/docs/standard/extended/login/
        <div className="container pt-5" style={{ width: '50%' }}>
            {/* {loading && <div className="text-center"/>} */}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={formSubmit} >

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

                <div className="text-center ">
                    <button type="submit" className="btn btn-primary mb-4 ">Sign in</button>
                </div>



                <div className="text-center">
                    <p>Not a member? <Link to={redirect ? `/register?redirect=${redirect}`:'/register'}>Register</Link></p>
                </div>
            </form></div>
    );

}

