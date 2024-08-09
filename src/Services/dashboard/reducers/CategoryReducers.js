import { GET_CATEGORIES_FAIL, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, CLEAR_ERRORS, UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_REQUEST, UPDATE_CATEGORY_RESET, UPDATE_CATEGORY_SUCCESS, ADD_CATEGORY_REQUEST, ADD_CATEGORY_FAIL, ADD_CATEGORY_SUCCESS } from "../constants/categoryConstants";

export const Categories = (state = {}, action) => {
    switch (action.type) {
        case GET_CATEGORIES_REQUEST:
        case ADD_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_CATEGORIES_SUCCESS:
        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload
            };
        case GET_CATEGORIES_FAIL:
        case ADD_CATEGORY_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const updateCategory = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isUpdated: action.payload
            };
        case UPDATE_CATEGORY_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case UPDATE_CATEGORY_RESET:
            return {
                ...state,
                isUpdated: false
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