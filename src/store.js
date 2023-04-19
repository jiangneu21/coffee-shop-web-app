import { createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailReducer } from './reducer/productReducer';
//import { productListReducer } from './reducer/productReducer';
import { cartReducer } from './reducer/shopCartReducer';
const rootReducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
     ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cart: { cartItems: cartItemsFromStorage }
};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;