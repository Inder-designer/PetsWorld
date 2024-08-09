import { GET_ATTRIBUTES_FAIL, GET_ATTRIBUTES_REQUEST, GET_ATTRIBUTES_SUCCESS, UPDATE_ATTRIBUTE_FAIL, UPDATE_ATTRIBUTE_REQUEST, UPDATE_ATTRIBUTE_SUCCESS, UPDATE_ATTRIBUTE_RESET, ADD_ATTRIBUTE_FAIL, ADD_ATTRIBUTE_REQUEST, ADD_ATTRIBUTE_SUCCESS, CLEAR_ERRORS } from "../constants/attributesConstants";

export const attributesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ATTRIBUTES_REQUEST:
        case ADD_ATTRIBUTE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_ATTRIBUTES_SUCCESS:
        case ADD_ATTRIBUTE_SUCCESS:
            return {
                attributes: action.payload,
                isLoading: false,
                error: null
            }
        case ADD_ATTRIBUTE_FAIL:
            return {
                isLoading: false,
                error: action.payload
            }
        case GET_ATTRIBUTES_FAIL:
            return {
                attributes: [],
                isLoading: false,
                error: null
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const updateAttributeReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ATTRIBUTE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case UPDATE_ATTRIBUTE_SUCCESS:
            return {
                ...state,
                isUpdated: action.payload,
                isLoading: false,
            }
        case UPDATE_ATTRIBUTE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case UPDATE_ATTRIBUTE_RESET:
            return {
                ...state,
                isUpdated: false,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}
