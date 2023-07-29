import { combineReducers } from "redux";
import { configureStore  } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { newProductReducer, productDetailsReducers, productReducers } from './reducers/productReducers';
import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
    products: productReducers,
    productDetails: productDetailsReducers,
    newProduct: newProductReducer,
    user: userReducer,
});

let initialState = {} ;

const middle = [thunk];

export const store = configureStore({
    reducer: rootReducer,
    initialState,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middle],
});
