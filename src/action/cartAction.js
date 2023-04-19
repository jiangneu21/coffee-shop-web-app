import axios from "axios";

export const addCart = (id, qty) => async (dispatch, getState) => {

    const { data } = await axios.get(`http://localhost:4000/coffee/hot/${id}`)
    const existingCartItem = getState().cart.cartItems.find(item => item.product === id)
  
    // if (existingCartItem) {
    //     dispatch({
    //         type: 'CART_UPDATE_QUANTITY',
    //         payload: { id, qty: existingCartItem.qty + 1 },
    //     })
    // if (qty === 1 && existingCartItem) {
    //     dispatch({
    //       type: 'CART_UPDATE_QUANTITY',
    //       payload: { id, qty: existingCartItem.qty + 1 },
    //     });
    //   } else if (qty === -1 && existingCartItem.qty === 1) {
    //     dispatch({
    //       type: 'CART_REMOVE_ITEM',
    //       payload: id,
    //     });


    if (qty === 1 && existingCartItem) {
        dispatch({
          type: 'CART_UPDATE_QUANTITY',
          payload: { id, qty: existingCartItem.qty + 1 },
        });
      } else if (qty <= -1) {
        dispatch({
          type: 'CART_UPDATE_QUANTITY',
          payload: { id, qty: existingCartItem.qty - 1 },
        });
      
        // if (existingCartItem.qty === 1) {
        //   dispatch({
        //     type: 'CART_REMOVE_ITEM',
        //     payload: id,
        //   });
        //}
      
    } else {
        dispatch({
            type: 'CART_ADD_ITEM',
            payload: {
                product: data.id,
                name: data.title,
                price: 3.99,
                image: data.image,
                qty

            }
        })
    }
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
        

export const removeCart = (id) => (dispatch, getState) => {
    dispatch({
        type: 'CART_REMOVE_ITEM',
        payload: id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}