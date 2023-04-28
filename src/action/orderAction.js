import axios from "axios";

export const addOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: 'ORDER_REQUEST' });
        const { userLogin: { userInfo } } = getState();
        const { data } = await axios.post('http://localhost:4000/api/orders', order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: 'ORDER_SUCCESS', payload: data });
        dispatch({ type: 'CART_REMOVE_ITEM'})
        localStorage.removeItem('cartItems');
    } catch (error) {
        dispatch({ 
            type: 'ORDER_FAIL', 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}