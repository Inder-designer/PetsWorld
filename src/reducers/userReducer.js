import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, LOAD_USER_FAIL, LOAD_USER_SUCCESS, LOAD_USER_REQUEST, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "../constants/userConstants"

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
                user: null,
                isAuthenticated: false
            }
        case LOAD_USER_FAIL:
            return {
                isLoading: false,
                error: action.payload,
                user: null,
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

