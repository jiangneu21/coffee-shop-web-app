import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;

const api = axios.create({ withCredentials: true });

export const findAllUsers = async () => {
    const response = await api.get(USERS_URL);
    return response.data;
};

export const createUser = async (user) => {
    const response = await api.post(USERS_URL, user);
    return response.data;
};

export const deleteUser = async (_id) => {
    const response = await api.delete(`${USERS_URL}/${_id}`);
    return response.data;
};

export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};

export const login = async ({ email, password }) => {
    const response = await api.post(`${USERS_URL}/login`, {
        email,
        password,
    });
    return response.data;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data;
};

export const register = async (email, password) => {
    const response = await api.post(`${USERS_URL}/register`, {
        email,
        password,
    });
    return response.data;
};
