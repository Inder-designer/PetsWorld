import { GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_FAIL, GET_ALL_ORDERS_SUCCESS, CLEAR_ERRORS, GET_SINGLE_ORDERS_FAIL, GET_SINGLE_ORDERS_REQUEST, GET_SINGLE_ORDERS_SUCCESS } from "../constants/orderConstants";
import axios from "axios";
import { API_URL, CONFIG } from "../../../constants/apiConstants";
import { toast } from "react-toastify";

// Get All Orders
export const getAllOrders = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_ORDERS_REQUEST });
        const { data } = await axios.get(`${API_URL}/admin/orders`, CONFIG);
        dispatch({ type: GET_ALL_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GET_ALL_ORDERS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

// Get Single Order
export const getSingleOrder = (orderId) => async (dispatch) => {
    try {
        dispatch({ type: GET_SINGLE_ORDERS_REQUEST });
        const { data } = await axios.get(`${API_URL}/order/${orderId}`, CONFIG);
        dispatch({ type: GET_SINGLE_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GET_SINGLE_ORDERS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
        // toast.error(error.response && error.response.data.message ? error.response.data.message : error.message);
    }
};

// Clear Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};