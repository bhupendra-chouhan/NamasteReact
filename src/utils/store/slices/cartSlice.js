import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (initialState, action) => {
            initialState.cartItems.push(action.payload);
        },
        removeFromCart: (initialState) => { 
            initialState.cartItems.pop();
        },
        clearCart: (initialState) => {
            initialState.cartItems = [];
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer;