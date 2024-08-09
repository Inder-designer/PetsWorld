import { CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, GET_ALL_PRODUCT_FAIL, GET_ALL_PRODUCT_REQUEST, GET_ALL_PRODUCT_SUCCESS, CLEAR_ERRORS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_RESET, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_RESET, UPDATE_PRODUCT_SUCCESS } from "../constants/productConstants";

const initialState = {
    product: {},
    isLoading: false,
    error: null
};

export const AdminProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT_REQUEST:
        case CREATE_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_ALL_PRODUCT_SUCCESS:
        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: action.payload
            };
        case GET_ALL_PRODUCT_FAIL:
        case CREATE_PRODUCT_FAIL:
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
};
export const EditProductReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDeleted: action.payload
            };
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isUpdated: action.payload
            };
        case DELETE_PRODUCT_FAIL:
        case UPDATE_PRODUCT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case DELETE_PRODUCT_RESET:
            return {
                ...state,
                isDeleted: false
            }
        case UPDATE_PRODUCT_RESET:
            return {
                ...state,
                isUpdated: false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};