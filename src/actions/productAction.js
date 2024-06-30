import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUESTS, PRODUCT_DETAIL_SUCCESS } from "../constants/productConstants";
import axios from "axios";

import { API_URL } from "../constants/apiConstants.js";

// Get Product
export const getProduct = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST });
        const { data } = await axios.get(`${API_URL}/products`)
        dispatch({ type: ALL_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL, payload: error.response && error.response.data.message ? error
                .response.data.message : error.message
        });
    }
}

// Get Product Detail
export const getProductDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUESTS });
        const { data } = await axios.get(`${API_URL}/product/${id}`)
        dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data.product });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}