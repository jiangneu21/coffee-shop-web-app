import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userProfiles } from "../action/userAction";
import { userUpdateInfo } from "../action/userAction";

export default function Profile() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userProfile = useSelector((state) => state.userProfile);
    const { loading, error, user } = userProfile;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdate = useSelector((state) => state.userUpdate);
    const { success } = userUpdate;
    //console.log('profile')
    //console.log(userProfile)
    //console.log(loading);
    //console.log(userInfo.name);

    //console.log(users);
    useEffect(() => {
        if (!userInfo) {
            window.location.href = "/login";
        } else if (success || !user || !user.name) {
            //console.log('user');
            //console.log(user);
            //console.log('else if');
            dispatch({ type: 'USER_UPDATE_RESET' })
            dispatch(userProfiles('profile'));
        } else {
            //console.log('else');
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, userInfo, user, success]);




    const formSubmit = (e) => {
        console.log('formSubmit?');
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Password do not match");
        } else {
            setMessage(null);
            dispatch(userUpdateInfo({ name, email, password }));
        }
        console.log('formSubmit');
        console.log(name, email, password);
    }

    return (
        <div className="container pt-5">
         
            <div className="row">

                <div className="col">
                       {error && <div className="alert alert-danger">{error}</div>}
            {loading && <div className="text-center" />}
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
                            <button type="submit" className="btn btn-primary mb-4" onClick={() => console.log('Save button clicked')}>Save</button>
                        </div>

                    </form>
                </div>
                <div className="col">
                </div>



            </div>   </div>


    );

}