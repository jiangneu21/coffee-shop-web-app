import axios from 'axios';
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: 'USER_LOGIN_REQUEST'})
        const config = {header: {'Content-type': 'application/json'}}
        const { data } = await axios.post('/login', {email, password}, config)
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: data})
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: console.log("invalid"),
            // payload: error.message.send('Invalid email or password!')
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: 'USER_LOGOUT'})
    document.location.href = '/login'
}

export const register = (username, email, password) => async (dispatch) => {
    try {
        dispatch({type: 'USER_REGISTER_REQUEST'})
        const config = {header: {'Content-type': 'application/json'}}
        const { data } = await axios.post('/register', {username, email, password}, config)
        dispatch({type: 'USER_REGISTER_SUCCESS', payload: data})
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: data})
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAIL',
            // payload: error.message('Invalid email or password!')
        })
    }
}

export const getProfile = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: 'GETPROFILE_REQUEST'})
        const {userLogin: {userInfo}} = getState();
        const config = {header: {'Content-type': 'application/json'}}
        const { data } = await axios.get(`/users/${id}`,  config)
        dispatch({type: 'GET_PROFILE_SUCCESS', payload: data})
    } catch (error) {
        dispatch({
            type: 'GET_PROFILE_FAIL',
            // payload: error.message('Invalid email or password!')
        })
    }
}

export const updateProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({type: 'UPDATE_PROFILE_REQUEST'})
        const {userLogin: {userInfo}} = getState();
        const config = {header: {'Content-type': 'application/json'}}
        const { data } = await axios.put('/api/users/profile', user, config)
        dispatch({type: 'UPDATE_PROFILE_SUCCESS', payload: data})
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: data})
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: 'UPDATE_PROFILE_FAIL',
            // payload: error.message('Invalid email or password!')
        })
    }
}