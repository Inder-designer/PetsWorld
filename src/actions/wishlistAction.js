import { WISHLIST_ADD_REQUEST, WISHLIST_ADD_FAIL, WISHLIST_ADD_SUCCESS, GET_WISHLIST_FAIL, GET_WISHLIST_REQUEST, GET_WISHLIST_SUCCESS, CLEAR_ERRORS, REMOVE_WISHLIST_REQUEST, REMOVE_WISHLIST_FAIL } from "../constants/wishlistConstants";
import { API_URL, getConfig } from "../constants/apiConstants"
import axios from "axios";
import { toast } from "react-toastify";
import { REMOVE_ADDRESS_SUCCESS } from "../constants/addressConstants";
import { addToCart } from "./cartAction";

// Add Wishlist
export const addToWishlist = (productId) => async (dispatch) => {
    try {
        dispatch({ type: WISHLIST_ADD_REQUEST });
        console.log(productId);
        const config = getConfig()
        const { data } = await axios.put(`${API_URL}/wishlist`,
            { productId }, config
        );
        dispatch({
            type: WISHLIST_ADD_SUCCESS,
            payload: data
        });
        toast.success("Added to wishlist")
    } catch (error) {
        dispatch({
            type: WISHLIST_ADD_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
        console.log(error);
    }
};

// Remove Wishlist
export const removeFromWishlist = (productId, movetoCart) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_WISHLIST_REQUEST });
        console.log(productId);
        const config = getConfig()
        const { data } = await axios.delete(`${API_URL}/wishlist-item/${productId}`,
            config);
        dispatch({
            type: REMOVE_ADDRESS_SUCCESS,
            payload: { data }
        });
        if (movetoCart) {
            const quantity = 1;
            dispatch(addToCart(quantity, productId))
            console.log("movetocart");
        } else {
            toast.success("Removed from wishlist")
        }
    } catch (error) {
        dispatch({
            type: REMOVE_WISHLIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

// Get Wishlist
export const getWishlist = () => async (dispatch) => {
    try {
        dispatch({ type: GET_WISHLIST_REQUEST });
        const config = getConfig()
        const { data } = await axios.get(`${API_URL}/wishlist`, config);
        dispatch({
            type: GET_WISHLIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_WISHLIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};