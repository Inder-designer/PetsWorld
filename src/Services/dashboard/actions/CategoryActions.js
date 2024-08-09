import { GET_CATEGORIES_FAIL, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, CLEAR_ERRORS, UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_REQUEST, UPDATE_CATEGORY_RESET, UPDATE_CATEGORY_SUCCESS, ADD_CATEGORY_REQUEST, ADD_CATEGORY_FAIL, ADD_CATEGORY_SUCCESS } from "../constants/categoryConstants";
import axios from "axios";
import { API_URL, CONFIG } from "../../../constants/apiConstants";
import { toast } from "react-toastify";

// Get Categories
export const getCategories = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CATEGORIES_REQUEST });
        const { data } = await axios.get(`${API_URL}/admin/categories`, CONFIG);
        dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GET_CATEGORIES_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
        toast.error(
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        );
    }
};

// Add Category
export const addCategory = (values, setNewCate) => async (dispatch) => {
    try {
        dispatch({ type: ADD_CATEGORY_REQUEST });
        const { data } = await axios.put(`${API_URL}/admin/category/new`, values, CONFIG);
        dispatch({ type: ADD_CATEGORY_SUCCESS, payload: data });
        toast.success("Category Created");
        {
            !setNewCate &&
            setNewCate({
                level0: "",
                level1: {
                    name: "",
                    slug: "",
                    orderNo: "",
                },
            });
        }
    } catch (error) {
        dispatch({
            type: ADD_CATEGORY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
        toast.error(
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        );
    }
};

// Update Category
export const updateCategory = (values) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_CATEGORY_REQUEST });
        const { data } = await axios.put(
            `${API_URL}/admin/category`,
            values,
            CONFIG
        );
        dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: data.success });
        toast.success(data.message);
    } catch (error) {
        dispatch({
            type: UPDATE_CATEGORY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
        toast.error(
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        );
    }
};

// Clear Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};