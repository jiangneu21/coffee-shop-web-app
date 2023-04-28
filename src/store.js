import { createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailReducer } from './reducer/productReducer';
//import { productListReducer } from './reducer/productReducer';
import { cartReducer } from './reducer/shopCartReducer';
import { userLoginReducer, userUpdateReducer } from './reducer/userReducer';
import { userRegReducer } from './reducer/userReducer';
import { userProfileReducer } from './reducer/userReducer';
import { userListReducer } from './reducer/userReducer';
import { userDeleteReducer } from './reducer/userReducer';
import { OrderReducer } from './reducer/orderReducer';


const rootReducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegReducer,
    userProfile: userProfileReducer,
    userUpdate: userUpdateReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    orderAdd: OrderReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
     ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const shippingAddressFromStorage = 
localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};
const initialState = {
    cart: { 
        cartItems: cartItemsFromStorage, 
        shippingAddress: shippingAddressFromStorage
    },
    userLogin: { userInfo: userInfoFromStorage }
};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;