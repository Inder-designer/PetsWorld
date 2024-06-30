import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userReducer } from "./reducers/userReducer";
import { productDetailReducer, productReducer } from "./reducers/productReducer";
import { cartItemsReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
    user: userReducer,
    products: productReducer,
    product: productDetailReducer,
    cartItems: cartItemsReducer
})

let initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;