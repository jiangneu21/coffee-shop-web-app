import React from "react";
import {Container, Table, Col} from "react-bootstrap";
// import {useSelector} from "react-redux";
import Users from "../data/users";
// import useFetch from "../Users/fetch-api";
import {Link} from "react-router-dom";

function UsersListScreen () {
    // const UsersJson = useFetch('http://localhost:4000/coffee/hot');
    // const Users = JSON.parse(UsersJson);
    if (!Users) {
        return <p>Loading...</p>;
    }
    return (
        <Container className="py-5">
            <Link to="/admin" className="btn btn-light">Back</Link>
            <h1 className="pb-5">Users</h1>
            <Table striped bordered responsive>
                <thead>
                <tr className="text-center">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>Modify</th>
                </tr>
                </thead>
                <tbody>
                {Users.map((user) => (
                    <tr key={user.id}>
                        <td><Col xs={2}>{user.id}</Col></td>
                        <td><Col xs={2}>{user.userName}</Col></td>
                        <td><Col xs={6}>{user.email}</Col></td>
                        <td><Col xs={1}>{user.password}</Col></td>
                        <td><Col xs={2}>{user.isAdmin ? "Admin" : "Customer"}</Col></td>
                        <td className="text-center">
                            <div className="d-inline-flex">
                                <Link to={`/admin/users/${user.id}/edit`}>
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
export default UsersListScreen;