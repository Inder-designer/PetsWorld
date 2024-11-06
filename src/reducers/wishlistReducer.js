import { WISHLIST_ADD_REQUEST, WISHLIST_ADD_FAIL, WISHLIST_ADD_SUCCESS, GET_WISHLIST_FAIL, GET_WISHLIST_REQUEST, GET_WISHLIST_SUCCESS, REMOVE_WISHLIST_FAIL, REMOVE_WISHLIST_REQUEST, REMOVE_WISHLIST_SUCCESS, CLEAR_ERRORS } from "../constants/wishlistConstants";

export const WishlistReducer = (state = {}, action) => {
    switch (action.type) {
        case WISHLIST_ADD_REQUEST:
        case GET_WISHLIST_REQUEST:
        case REMOVE_WISHLIST_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case WISHLIST_ADD_SUCCESS:
        case GET_WISHLIST_SUCCESS:
        case REMOVE_WISHLIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                wishlist: action.payload
            };
        case WISHLIST_ADD_FAIL:
        case GET_WISHLIST_FAIL:
        case REMOVE_WISHLIST_FAIL:
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