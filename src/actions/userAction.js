import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, LOAD_USER_FAIL, LOAD_USER_SUCCESS, LOAD_USER_REQUEST, REGISTER_FAIL, REGISTER_SUCCESS, REGISTER_REQUEST } from "../constants/userConstants"
import axios from "axios"


// LOGIN
export const userLogin = (email, password, navigate) => async (dispatch) => {
    // const navigate = useNavigate()
    try {
        dispatch({ type: LOGIN_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
        const res = await axios.post('http://localhost:4000/api/v1/login', { email, password }, 
        config
        )
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        console.log(res);
        navigate('/')
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response && error.response.data.message ? error : error.message })
    }
}

// REGISTER
export const userRegister = ({name, email, password, navigate}) => async (dispatch) => {
    console.log(name, email, password);
    try {
        dispatch({ type: REGISTER_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        }
        const res = await axios.post('http://localhost:4000/api/v1/register'
            , { name, email, password },
            config
        )
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        navigate('/')
        console.log(res);
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
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
        const { data } = await axios.get('http://localhost:4000/api/v1/me'
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
export const userLogout = () => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
        const { data } = await axios.get('http://localhost:4000/api/v1/logout',
            config
        )
        dispatch({ type: LOGOUT_SUCCESS, payload: data })
        console.log("logout");
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL, payload: error.response && error.response.data.message ? error
                : error.message
        })
        console.log(error);
    }
}
