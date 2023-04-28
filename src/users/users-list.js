import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { listUsers, deleteUser } from "../action/userAction";
import { Link } from "react-router-dom";




export default function UserList() {
    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userDelete = useSelector((state) => state.userDelete);
    const { message } = userDelete;


    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers());
        } else {
            window.location.href = "/login";
        }
    }, [dispatch, userInfo, message]);

    const deleteHandler = (id) => {
        dispatch(deleteUser(id));
    };



    return (
        <div className="container">
            <h1>User List</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            {loading && <div className="text-center" />}
            {/* {message && <div className="alert alert-danger">{message}</div>} */}
            <table className="table ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ADMIN</th>
                        {/* <th>     </th> */}
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.isAdmin ? (<p>True</p>) : (<p>False</p>)}</td>
                            <td />

                            <td>
                                {/* <Link to={`/admin/user/${user._id}/edit`}>
                                    <button variant="light" className="btn-sm">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                </Link> */}
                                {/* <button variant="danger" className="btn-sm" onClick={() => deleteHandler(user._id)}>
                                    <i className="fas fa-trash"></i>
                                </button> */}
                                <button className="btn btn-warning btn-sm"
                                    onClick={() => deleteHandler(user._id)}>x</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>


        </div>
    );
}