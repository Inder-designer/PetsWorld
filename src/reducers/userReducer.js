import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, LOAD_USER_FAIL, LOAD_USER_SUCCESS, LOAD_USER_REQUEST, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_RESET, CHANGE_PSWD_FAIL, CHANGE_PSWD_REQUEST, CHANGE_PSWD_RESET, CHANGE_PSWD_SUCCESS, FORGOT_PSWD_REQUEST, FORGOT_PSWD_SUCCESS, FORGOT_PSWD_FAIL, RESET_PSWD_FAIL, RESET_PSWD_REQUEST, RESET_PSWD_SUCCESS } from "../constants/userConstants"

const initialState = {
    user: {},
    isLoading: false,
    error: null,
    isAuthenticated: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case LOAD_USER_REQUEST:
        case REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
        case LOAD_USER_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                isAuthenticated: true
            }
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                user: {},
                isAuthenticated: false
            }
        case LOAD_USER_FAIL:
            return {
                isLoading: false,
                error: action.payload,
                user: {},
                isAuthenticated: false
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: {},
                isAuthenticated: false
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                isAuthenticated: false
            }
        default:
            return state
    }
}

// UPDATE PROFILE REDUCER

const updateProfileState = {
    isLoading: false,
    error: null,
    isUpdated: false,
}

export const updateProfileReducer = (state = updateProfileState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
        case CHANGE_PSWD_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_PROFILE_SUCCESS:
        case CHANGE_PSWD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isUpdated: action.payload,
                error: null
            }
        case UPDATE_PROFILE_FAIL:
        case CHANGE_PSWD_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case UPDATE_PROFILE_RESET:
        case CHANGE_PSWD_RESET:
            return {
                ...state,
                isUpdated: false,
            }

        default:
            return state
    }
}

// Forgot Password Reducer
const forgotPasswordState = {
    isLoading: false,
    error: null,
}

export const forgotPasswordReducer = (state = forgotPasswordState, action) => {
    switch (action.type) {
        case FORGOT_PSWD_REQUEST:
        case RESET_PSWD_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FORGOT_PSWD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                message: action.payload,
            }
        case RESET_PSWD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: action.payload,
            }
        case FORGOT_PSWD_FAIL:
        case RESET_PSWD_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
