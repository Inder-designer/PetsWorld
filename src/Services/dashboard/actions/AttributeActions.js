import { GET_ATTRIBUTES_FAIL, GET_ATTRIBUTES_REQUEST, GET_ATTRIBUTES_SUCCESS, UPDATE_ATTRIBUTE_FAIL, UPDATE_ATTRIBUTE_REQUEST, UPDATE_ATTRIBUTE_SUCCESS, UPDATE_ATTRIBUTE_RESET, ADD_ATTRIBUTE_FAIL, ADD_ATTRIBUTE_REQUEST, ADD_ATTRIBUTE_SUCCESS, CLEAR_ERRORS } from "../constants/attributesConstants";
import axios from "axios";
import { API_URL, CONFIG } from "../../../constants/apiConstants";
import { toast } from "react-toastify";

// Get Attributes
export const getAttributes = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ATTRIBUTES_REQUEST });
        const { data } = await axios.get(`${API_URL}/attributes`, CONFIG);
        dispatch({ type: GET_ATTRIBUTES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GET_ATTRIBUTES_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
        // toast.error(error.response && error.response.data.message? error.response.data.message : error.message);
    }
};

// Add Attribute
export const addAttribute = (attribute,setOpenModal) => async (dispatch) => {
    try {
        dispatch({ type: ADD_ATTRIBUTE_REQUEST });
        const { data } = await axios.post(`${API_URL}/admin/attribute/new`, attribute, CONFIG);
        dispatch({ type: ADD_ATTRIBUTE_SUCCESS, payload: data });
        toast.success(data.message);
        setOpenModal(false)
    } catch (error) {
        dispatch({
            type: ADD_ATTRIBUTE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
        toast.error(error.response && error.response.data.message ? error.response.data.message : error.message);
    }
};

// Update Attribute
export const updateAttribute = (attribute, id) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ATTRIBUTE_REQUEST });
        const { data } = await axios.put(`${API_URL}/admin/attribute/${id}`, attribute, CONFIG);
        dispatch({ type: UPDATE_ATTRIBUTE_SUCCESS, payload: data.success });
        toast.success(data.message);
    } catch (error) {
        dispatch({
            type: UPDATE_ATTRIBUTE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
        toast.error(error.response && error.response.data.message ? error.response.data.message : error.message);
    }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};