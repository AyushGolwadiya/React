import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

export const asyncGetProducts = () => async (dispatch,getState) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products")
        // here we have synchronus data of products
        dispatch(getProducts(response.data));

    } catch (error) {
       console.log(error); 
    }
}