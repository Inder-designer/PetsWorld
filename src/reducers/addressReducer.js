import { GET_ADDRESS_FAIL, GET_ADDRESS_SUCCESS, GET_ADDRESS_REQUEST, ADD_ADDRESS_FAIL, ADD_ADDRESS_REQUEST, ADD_ADDRESS_SUCCESS, REMOVE_ADDRESS_FAIL, REMOVE_ADDRESS_SUCCESS, REMOVE_ADDRESS_REQUEST, UPDATE_ADDRESS_FAIL, UPDATE_ADDRESS_REQUEST, UPDATE_ADDRESS_SUCCESS } from '../constants/addressConstants'

const initialState = {
    address: [],
    loading: false,
    error: null
}

export const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADDRESS_REQUEST:
        case ADD_ADDRESS_REQUEST:
        case REMOVE_ADDRESS_REQUEST:
        case UPDATE_ADDRESS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_ADDRESS_SUCCESS:
        case REMOVE_ADDRESS_SUCCESS:
        case UPDATE_ADDRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                address: action.payload
            }
        case GET_ADDRESS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_ADDRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                address: action.payload
            }
        case ADD_ADDRESS_FAIL:
        case REMOVE_ADDRESS_FAIL:
        case UPDATE_ADDRESS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}