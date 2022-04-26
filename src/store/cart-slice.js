import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            // check if item is in array already
            const existingItems = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItems) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                });
            } else {
                // item already exists
                existingItems.quantity++;
                existingItems.totalPrice += newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItems = state.items.find(item => item.id === id);
            state.totalQuantity--;
            // if existing item quantity is 1 then remove from array
            if (existingItems.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItems.quantity--;
                existingItems.totalPrice -= existingItems.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;