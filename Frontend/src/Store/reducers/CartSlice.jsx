import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: []
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        loadCart:(state,action) => {
            state.data = action.payload
        }
    }
})

export const {loadCart} = CartSlice.actions;

export default CartSlice.reducer
