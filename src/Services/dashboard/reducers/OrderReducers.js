import { GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_FAIL, GET_ALL_ORDERS_SUCCESS, CLEAR_ERRORS, GET_SINGLE_ORDERS_FAIL, GET_SINGLE_ORDERS_REQUEST, GET_SINGLE_ORDERS_SUCCESS } from "../constants/orderConstants";

export const AdminOrdersReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_ORDERS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_ALL_ORDERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orders: action.payload
            };
        case GET_ALL_ORDERS_FAIL:
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

export const SingleOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SINGLE_ORDERS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_SINGLE_ORDERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                order: action.payload
            };
        case GET_SINGLE_ORDERS_FAIL:
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
