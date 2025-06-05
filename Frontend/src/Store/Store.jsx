import { configureStore } from '@reduxjs/toolkit'
import { UserSlice } from './reducers/UserSlice'
import { ProductSlice } from './reducers/ProductSlice'
import { CartSlice } from './reducers/CartSlice'


export const store = configureStore({
    reducer:{
        userReducer : UserSlice,
        productReducer: ProductSlice,
        cartReducer : CartSlice
    }
})