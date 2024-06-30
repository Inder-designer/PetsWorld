import {
    CART_ITEMS_FAIL, CART_ITEMS_SUCCESS, CART_ITEMS_REQUEST, ADD_CART_FAIL, ADD_CART_REQUEST, ADD_CART_SUCCESS, UPDATE_CART_FAIL, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS
    , REMOVE_CART_SUCCESS,
    REMOVE_CART_FAIL
} from "../constants/cartConstants";

const initialState = {
    cart: {
        cartItems: {}
    },
    isLoading: false,
    error: null,
    message: "null"
};
export const cartItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ITEMS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case CART_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cart: action.payload.cart,
            }
        case CART_ITEMS_FAIL:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            }
        case ADD_CART_REQUEST:
        case UPDATE_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case ADD_CART_SUCCESS:
        case UPDATE_CART_SUCCESS:
        case REMOVE_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cart: action.payload.cart,
                message: action.payload.message
            }
        case ADD_CART_FAIL:
        case UPDATE_CART_FAIL:
            case REMOVE_CART_FAIL:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            }
        default:
            return state;
    }
}