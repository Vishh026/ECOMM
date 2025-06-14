import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products :[]
}

export const ProductSlice = createSlice({
    name:"product",
    initialState,
    reducers : {
        loadProduct : (state,action) => {
            // state.products = update the data 
            // action.payload = take data from backend
            state.products = action.payload
        }
        
    }
})
// use it in store
export default ProductSlice.reducer;

export const {loadProduct} = ProductSlice.actions