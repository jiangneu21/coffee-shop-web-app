import axios from 'axios';
export const userLoginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_LOGIN_REQUEST' });
        const { data } = await axios.post('http://localhost:4000/api/users/login', { email, password });
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ 
            type: 'USER_LOGIN_FAIL', 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}




export const userLogout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: 'USER_LOGOUT' });
}



export const userReg = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_REG_REQUEST' });
        const { data } = await axios.post('http://localhost:4000/api/users', 
        { name, email, password });
        dispatch({ type: 'USER_REG_SUCCESS', payload: data });
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ 
            type: 'USER_REG_FAIL', 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}





export const userProfiles = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: 'USER_PROFILE_REQUEST' });
        const { userLogin: { userInfo } } = getState();
        const { data } = await axios.get(`http://localhost:4000/api/users/${id}`, {
            headers: {
                
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: 'USER_PROFILE_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ 
            type: 'USER_PROFILE_FAIL', 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}





export const userUpdateInfo = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: 'USER_UPDATE_REQUEST' });
        const { userLogin: { userInfo } } = getState();
        const { data } = await axios.put('http://localhost:4000/api/users/profile', user, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: 'USER_UPDATE_SUCCESS', payload: data });
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ 
            type: 'USER_UPDATE_FAIL', 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}


export const listUsers = () => async (dispatch, getState) => {
    try {
        dispatch({ type: 'USER_LIST_REQUEST' });
        const { userLogin: { userInfo } } = getState();
        const { data } = await axios.get('http://localhost:4000/api/users', {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: 'USER_LIST_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ 
            type: 'USER_LIST_FAIL', 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}

export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: 'USER_DELETE_REQUEST' });
        const { userLogin: { userInfo } } = getState();
        await axios.delete(`http://localhost:4000/api/users/${id}`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: 'USER_DELETE_SUCCESS'});
    } catch (error) {
        dispatch({ 
            type: 'USER_DELETE_FAIL', 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}