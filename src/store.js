import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {userLoginReducer, userRegisterReducer, getProfileReducer, updateProfileReducer} from "./reducer/userReducers";


const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    getProfile: getProfileReducer,
    updateProfile: updateProfileReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin: {userInfo: userInfoFromStorage},

};

const middlewares = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default store;

