import { Bounce, toast } from "react-toastify";
import { API_URL, CONFIG, getConfig } from "../constants/apiConstants";
import { CART_ITEMS_FAIL, CART_ITEMS_SUCCESS, CART_ITEMS_REQUEST, ADD_CART_FAIL, ADD_CART_REQUEST, ADD_CART_SUCCESS, UPDATE_CART_FAIL, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS, REMOVE_CART_FAIL, REMOVE_CART_SUCCESS } from "../constants/cartConstants";
import axios from "axios";
import { CheckCircle, Error } from "@mui/icons-material";

// Get Cart Items
export const getCartItems = () => async (dispatch) => {
    try {
        dispatch({ type: CART_ITEMS_REQUEST });
        const config = getConfig()
        const { data } = await axios.get(`${API_URL}/cart-items`, config);
        dispatch({ type: CART_ITEMS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: CART_ITEMS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

// Add Cart Items
export const addToCart = (quantity, product) => async (dispatch) => {
    try {
        dispatch({ type: ADD_CART_REQUEST });
        const config = getConfig()
        const { data } = await axios.put(`${API_URL}/cart`,
            { quantity, product }, config
        );
        dispatch({
            type: ADD_CART_SUCCESS,
            payload: data
        });
        toast.success(
            <div className="flex items-center">
                <p className="text-sm w-full">{data.message}</p>
            </div>
            , {
                hideProgressBar: true,
                draggable: true,
                theme: "dark",
                transition: Bounce,
            });
    } catch (error) {
        dispatch({
            type: ADD_CART_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
        console.log(error);
        toast.error(
            <div className="flex items-center">
                <p className="text-sm w-full">{error.response.data.message}</p>
            </div>
            , {
                hideProgressBar: true,
                draggable: true,
                theme: "dark",
            });
    }
};

// Update Cart
export const updateCart = (quantity, cartItemId) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_CART_REQUEST });
        const config = getConfig()
        const { data } = await axios.put(`${API_URL}/cart-item/${cartItemId}`
            , { quantity }, config
        );
        dispatch({
            type: UPDATE_CART_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: UPDATE_CART_FAIL, payload: error.response && error.response.data.message ? error.
                response.data.message : error.message
        });
        toast.error(
            <div className="flex items-center">
                <p className="text-sm w-full">{error.response.data.message}</p>
            </div>
            , {
                hideProgressBar: true,
                draggable: true,
                theme: "dark",
            });
    }
};

// Remove cart Item
export const removeCartItem = (id) => async (dispatch) => {
    try {
        const config = getConfig()
        const { data } = await axios.delete(`${API_URL}/cart-item/${id}`, config
        );
        dispatch({
            type: REMOVE_CART_SUCCESS,
            payload: data
        });
        toast.success(
            <div className="flex items-center">
                <p className="text-sm w-full">{data.message}</p>
            </div>
            , {
                hideProgressBar: true,
                draggable: true,
                theme: "dark",
            });
    } catch (error) {
        dispatch({
            type: REMOVE_CART_FAIL, payload: error.response && error.response.data.message ? error
                .response.data.message : error.message
        });
    }
};