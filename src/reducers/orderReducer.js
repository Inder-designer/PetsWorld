import { NEW_ORDER_FAIL, NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS, GET_ORDERS_FAIL, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from '../constants/orderConstants'

const inititialState = {
    loading: false,
    error: null,
    orders: {}
}

export const OrderReducer = (state = inititialState, action) => {
    switch (action.type) {
        case NEW_ORDER_REQUEST:
        case GET_ORDERS_REQUEST:
            return { ...state, loading: true }
        case NEW_ORDER_SUCCESS:
            return { ...state, loading: false, order: action.payload }
        case NEW_ORDER_FAIL:
            return { ...state, loading: false, error: action.payload }
        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        case GET_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}