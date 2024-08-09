import { GET_USERS_REQUEST, GET_USERS_FAIL, GET_USERS_SUCCESS, CLEAR_ERRORS } from "../constants/userConstants";

export const AdminUserReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.payload
            };
        case GET_USERS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}