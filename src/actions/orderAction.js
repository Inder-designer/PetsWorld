import { NEW_ORDER_FAIL, NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS, GET_ORDERS_FAIL, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from '../constants/orderConstants'
import axios from 'axios'
import { API_URL, CONFIG } from "../constants/apiConstants";
import { toast } from 'react-toastify';
import { getCartItems } from './cartAction';

// New Order
export const newOrder = (order, navigate) => async (dispatch, getState) => {
    console.log("newOrder", order);
    try {
        dispatch({
            type: NEW_ORDER_REQUEST
        })
        const { data } = await axios.post(`${API_URL}/order/new`, order, CONFIG)
        dispatch({
            type: NEW_ORDER_SUCCESS,
            payload: data,
        })
        console.log(data, "data");
        if (data.success) {
            dispatch(getCartItems())
            sessionStorage.removeItem('orderDetails')
            console.log(data.newOrderId);
            navigate(`/checkout/confirm?orderId=${data.newOrderId}`)
        }
    } catch (error) {
        dispatch({
            type: NEW_ORDER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
        toast.error(error.response && error.response.data.message ? error.response.data.message : error.message)
    }
}

// Get Orders
export const getOrders = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_ORDERS_REQUEST
        })
        const { data } = await axios.get(`${API_URL}/orders/me`, CONFIG)
        dispatch({
            type: GET_ORDERS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_ORDERS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        toast.error(error.response && error.response.data.message ? error.response.data.message : error.message)
    }
}