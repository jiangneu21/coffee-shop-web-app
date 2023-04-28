export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'CART_ADD_ITEM':
            const item = action.payload;
            const product = state.cartItems.find(x => x.product === item.product);
            if (product) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === product.product ? item : x)
                };
            }
            return { ...state, cartItems: [...state.cartItems, item] };

            case 'CART_UPDATE_QUANTITY':
                const { id, qty } = action.payload;
                const cartItem = state.cartItems.find(x => x.product === id);
                if (cartItem) {
                    return {
                        ...state,
                        cartItems: state.cartItems.map((x) =>
                            x.product === id ? { ...x, qty } : x
                        ),
                    };
                }
                return state;

        case 'CART_REMOVE_ITEM':
            return { 
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload) };

        case 'CART_SAVE_SHIPPING_ADDRESS':
            return { 
                ...state, 
                shippingAddress: action.payload };

        default:
            return state;
    }
}