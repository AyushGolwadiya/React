import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducers/userReducer';
import ProductReducer from './reducers/ProductReducer';

export const store = configureStore({
    reducer:{
        UserReducer:UserReducer,
        ProductReducer:ProductReducer
    },
})