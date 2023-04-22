import React, {useEffect, useState} from "react";
// import {Navigate, useNavigate} from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import { updateProfileReducer } from "../reducer/userReducers";
// import { Profile } from "../services/userThunks";
import {Button, Form} from "react-bootstrap";
// import {Link} from "react-router-dom";
import {getProfile, updateProfile} from "../actions/userActions"

function ProfileScreen( { history }) {
    /*const { currentUser }= useSelector((state) => state.user);*/
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hint, setHint] = useState(null);
    /*    const navigate = useNavigate();*/
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.getProfile)
    const {user} = userProfile;

    const useLogin = useSelector((state) => state.userLogin);
    const {userInfo} = useLogin;

    const updateProfile = useSelector((state) => state.updateProfile);
    const {success} = useLogin;

    useEffect(() => {
        if(userInfo) {
            history.push('/login')
        } else {
            if (!user || !user.username || success) {
                dispatch({type: 'USER_UPDATE_RESET'})
                dispatch(getProfile('profile'))
            } else {
                setUsername(user.username)
                setEmail(user.email)
                setPassword(user.password)

            }
        }
    }, [dispatch, history, userInfo, user])
    const handleProfile = (e) => {
        e.preventDefault()
        //dispatch(ProfileThunk({email, password}))
        if(password !== confirmPassword) {
            setHint("Check your password")
        } else {
            dispatch(updateProfile({username, email, password}));
        }
    };


    return (
        <>
            <h1 className="text-center fw-bold py-3">Profile</h1>
            {hint && {setHint}}
            <Form onSubmit={handleProfile}>
                <Form.Group controlId="email" className="py-3">
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
            <Button type="submit" onClick={handleProfile}>Update</Button>

        </>
    );
}
export default ProfileScreen;

