import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products:[]
}

export const ProductSlice = createSlice({
    name:'Products',
    initialState,
    reducers:{
        getProducts:(state,action) =>{
            state.products = action.payload;
        },
        productDelete:(state,action) =>{
            state.products.splice(action.payload,1);
        }
    },
})

export const { getProducts , productDelete } = ProductSlice.actions;

export default ProductSlice.reducer;