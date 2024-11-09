import { toast } from "react-toastify"
import { API_URL, CONFIG, getConfig } from "../constants/apiConstants"
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, LOAD_USER_FAIL, LOAD_USER_SUCCESS, LOAD_USER_REQUEST, REGISTER_FAIL, REGISTER_SUCCESS, REGISTER_REQUEST, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, CHANGE_PSWD_FAIL, CHANGE_PSWD_REQUEST, CHANGE_PSWD_RESET, CHANGE_PSWD_SUCCESS, FORGOT_PSWD_REQUEST, FORGOT_PSWD_SUCCESS, FORGOT_PSWD_FAIL, RESET_PSWD_FAIL, RESET_PSWD_REQUEST, RESET_PSWD_SUCCESS } from "../constants/userConstants"
import axios from "axios"
import Cookies from "js-cookie"


// LOGIN
export const userLogin = (email, password) => async (dispatch) => {
    // const navigate = useNavigate()
    try {
        dispatch({ type: LOGIN_REQUEST })

        const config = getConfig();

        const res = await axios.post(`${API_URL}/login`, { email, password },
            config
        )

        dispatch({ type: LOGIN_SUCCESS, payload: res.data })

        localStorage.setItem('token', res.data.token)
        // navigate('/')
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response && error.response.data.message ? error : error.message })
    }
}

// REGISTER
export const userRegister = ({ name, email, password, navigate }) => async (dispatch) => {
    console.log(name, email, password);
    try {
        dispatch({ type: REGISTER_REQUEST })

        const config = getConfig('multipart/form-data');

        const res = await axios.post(`${API_URL}/register`
            , { name, email, password },
            config
        )
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        navigate('/')
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL, payload: error.response && error.response.data.message ?
                error : error.message
        })
        console.log(error);
    }
}

// LOAD USER
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST })
        const config = getConfig();
        console.log(config);
        const { data } = await axios.get(`${API_URL}/me`
            , config
        )
        dispatch({ type: LOAD_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL, payload: error.response && error.response.data.message ?
                error : error.message
        })
    }
}

// LOGOUT
export const userLogout = ({ navigate }) => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT_REQUEST })

        Cookies.get("token")
        const { data } = await axios.get(`${API_URL}/logout`)
        localStorage.removeItem('token')
        dispatch({ type: LOGOUT_SUCCESS, payload: data })
        console.log(data);
        if (data.success) {
            navigate("logged out")
        } else {
            console.log("Not Logged");
        }
        // console.log("Redirected using window.location.href.");
        // console.log("logout");
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL, payload: error.response && error.response.data.message ? error
                : error.message
        })
        console.log(error);
    }
}

// Update Profile

export const updateUserProfile = (formData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const config = getConfig('multipart/form-data');

        const { data } = await axios.put(`${API_URL}/me/update`, formData, config);

        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
        toast.success("Profile updated successfully");
        console.log(data);
    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
        console.log(error);
    }
};

//Change Pswd

export const changePassword = (values, { resetForm }) => async (dispatch) => {
    try {
        dispatch({ type: CHANGE_PSWD_REQUEST });

        const config = getConfig();
        const { data } = await axios.put(`${API_URL}/password/update`, values, config);

        dispatch({ type: CHANGE_PSWD_SUCCESS, payload: data.success });
        toast.success('Password changed successfully');
        resetForm();
    } catch (error) {
        dispatch({
            type: CHANGE_PSWD_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
        toast.error(error.response && error.response.data.message
            ? error.response.data.message
            : error.message);
    }
}

// Forgot Password

export const forgotPassword = (email, setOpenModal) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PSWD_REQUEST });

        const { data } = await axios.post(`${API_URL}/password/forgot`, email);

        dispatch({ type: FORGOT_PSWD_SUCCESS, payload: data.message });
        // toast.success('Password reset link sent to your email');
        setOpenModal(true)
    } catch (error) {
        dispatch({
            type: FORGOT_PSWD_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
        toast.error(error.response && error.response.data.message
            ? error.response.data.message
            : error.message);
    }
}

// Reset Password
export const reserPassword = (token, values) => async (dispatch) => {
    try {
        dispatch({ type: RESET_PSWD_REQUEST });

        const { data } = await axios.put(`${API_URL}/password/reset/${token}`, values);

        dispatch({ type: RESET_PSWD_SUCCESS, payload: data.success });
        toast.success('Password reset successful');
    } catch (error) {
        dispatch({
            type: RESET_PSWD_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
        toast.error(error.response && error.response.data.message
            ? error.response.data.message
            : error.message);
    }
}