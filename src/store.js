import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { forgotPasswordReducer, updateProfileReducer, userReducer } from "./reducers/userReducer";
import { filterProductReducer, productDetailReducer, productReducer } from "./reducers/productReducer";
import { cartItemsReducer } from "./reducers/cartReducer";
import { addressReducer } from "./reducers/addressReducer";
import { OrderReducer } from "./reducers/orderReducer";

const reducer = combineReducers({
    user: userReducer,
    products: productReducer,
    product: productDetailReducer,
    cartItems: cartItemsReducer,
    address: addressReducer,
    order: OrderReducer,
    filterProducts: filterProductReducer,
    profile: updateProfileReducer,
    forgotPswd: forgotPasswordReducer
})

let initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;