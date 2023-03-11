import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        // This is an action creator that will be called when the cart state changes, i.e. when the user adds to the cart
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        }
    }
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;