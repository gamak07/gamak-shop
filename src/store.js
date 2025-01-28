import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './features/carts/cartSlice'
import countReducer from './features/carts/countSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        count: countReducer,
    }
})

