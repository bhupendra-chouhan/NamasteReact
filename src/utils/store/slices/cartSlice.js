import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: "cart", // giving name to the slice
  initialState: {
    // setting inital state for cartItems going to be stored in the slice
    cartItems: [],
  },
  reducers: {
    // adding the type of actions/functions we want in our cart, like: 'add an item', 'remove an item', 'clear cart', etc. Actions are kind of small API use to communicate with the redux store. So if we want to 'Add an item' we will dispatch the 'addToCart' action.
    addToCart: (initialState, action) => {
      initialState.cartItems.push(action.payload); 
    },
    removeFromCart: (initialState) => {
      initialState.cartItems.pop();
    },
      clearCart: (initialState) => {
        // console.log(current(initialState)); // checking the Current State

        // In RTK we can either (MUTATE State):
        // initialState.cartItems.length = 0; // (MUTATING)setting length to 0 of a javascript Array makes it Empty: []

        // OR (CREATE NEW State):
        initialState.cartItems = [];

        // console.log(current(initialState)); // checking the Current State
      },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
// console.log(cartSlice.actions);
// console.log(cartSlice);

export default cartSlice.reducer;