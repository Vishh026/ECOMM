import axios from "../../Api/axiosConfig"
import { loadProduct } from "../reducers/ProductSlice"

export const asyncLoadProducts = () => async(dispatch,getState) => {
    try {
        // Hey backend! Send me the latest product list.
        // “Bhaiya, mujhe sab kurti ka list dikhaiye.”
        const { data } = await axios.get("/products")
        // Got it? Cool — now save it into the Redux store
        dispatch(loadProduct(data))
    } catch (error) {
        console.log(error)
    }
}

export const asyncCreateProduct = (product) => async(dispatch,getState) => {
    try {
        // "Hey server, here’s a new product. Please post it to the database."
        await axios.post("/products",product)
        dispatch(asyncLoadProducts())
    } catch (error) {
        console.log(error)
    }
}

export const asyncUpdateProduct = (id,product) => async(dispatch,getState) => {
    try {
        await axios.patch("/products/"+id,product);
        dispatch(asyncLoadProducts())
    } catch (error) {
        console.log(error)
    }
}
export const asyncDeleteProduct = (id) => async(dispatch) => {
    try {
        await axios.delete("/products/"+id)
        dispatch(asyncLoadProducts())
    } catch (error) {
        console.log(error)
    }
}