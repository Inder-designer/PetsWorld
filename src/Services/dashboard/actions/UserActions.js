import { GET_USERS_REQUEST, GET_USERS_FAIL, GET_USERS_SUCCESS, CLEAR_ERRORS } from "../constants/userConstants";
import axios from "axios";
import { API_URL, CONFIG, CONFIG_MULTI, getConfig } from "../../../constants/apiConstants";
import { toast } from "react-toastify";

// Get All Users
export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_REQUEST });
        const config = getConfig()
        const { data } = await axios.get(`${API_URL}/admin/users`, config);
        dispatch({ type: GET_USERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GET_USERS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
        toast.error(error.response && error.response.data.message ? error.response.data.message : error.message);
    }
};

// Clear Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};