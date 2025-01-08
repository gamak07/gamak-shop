import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './features/carts/cartSlice'
import countReducer from './features/carts/countSlice'
import savedReducer from './features/carts/savedSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        count: countReducer,
        saved: savedReducer,
    }
})

