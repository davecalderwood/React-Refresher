import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import counterSlice from './counter-slice';
import uiSlice from './ui-slice';
import cartSlice from './cart-slice';


const store = configureStore({
    reducer: {
        counter: counterSlice,
        auth: authSlice,
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
});


export default store;