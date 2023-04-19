import axios from 'axios';

const COFFEE_API = 'http://localhost:4000/coffee/hot'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: 'PRODUCT_LIST_REQUEST' });
        const { data } = await axios.get(COFFEE_API);
        dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'PRODUCT_LIST_FAIL', payload: error.message });
    }
}

export const detailProducts = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'PRODUCT_DETAIL_REQUEST' });
        const { data } = await axios.get(`http://localhost:4000/coffee/hot/${id}`);
        dispatch({ type: 'PRODUCT_DETAIL_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'PRODUCT_DETAIL_FAIL', payload: error.message });
    }
} 