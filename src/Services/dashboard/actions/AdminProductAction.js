import { CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAIL, CLEAR_ERRORS, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL } from "../constants/productConstants";
import axios from "axios";
import { API_URL, CONFIG, CONFIG_MULTI } from "../../../constants/apiConstants";
import { toast } from "react-toastify";

// Create Product
export const createProduct = (product, navigate) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_PRODUCT_REQUEST });

        const { data } = await axios.post(`${API_URL}/admin/product/new`, product, CONFIG);

        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
        toast.success(data.message)
        navigate("/admin/products")
    } catch (error) {
        dispatch({
            type: CREATE_PRODUCT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

// Get All Products
export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch({ type: CREATE_PRODUCT_REQUEST });

        const { data } = await axios.get(`${API_URL}/products`, CONFIG);

        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: CREATE_PRODUCT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

// Delete Product
export const deleteProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        const { data } = await axios.delete(`${API_URL}/admin/product/${productId}`, CONFIG);

        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data.success });
        toast.success(data.message)
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

// Update Product
export const updateProduct = (product, id) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });

        const { data } = await axios.put(`${API_URL}/admin/product/${id}`, product, CONFIG);

        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data.success });
        toast.success(data.message)
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};