import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_REQUESTS, FILTER_PRODUCT_REQUESTS, FILTER_PRODUCT_SUCCESS, FILTER_PRODUCT_FAIL, CREATE_REVIEW_FAIL, CREATE_REVIEW_REQUESTS, CREATE_REVIEW_SUCCESS, USER_PRODUCTS_REVIEW_FAIL, USER_PRODUCTS_REVIEW_REQUEST, USER_PRODUCTS_REVIEW_SUCCESS, CREATE_REVIEW_RESET, CLEAR_ERRORS } from "../constants/productConstants";

const initialState = {
    products: [],
    isLoading: false,
    error: null,
    productsCount: 0
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount
            }
        case ALL_PRODUCT_FAIL:
            return {
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUESTS:
            return {
                ...state,
                isLoading: true
            }
        case PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: action.payload
            }
        case PRODUCT_DETAIL_FAIL:
            return {
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// Filter Product Reducer

const initialStateFilter = {
    products: [],
    isLoading: false,
    error: null,
    productsCount: 0
}
export const filterProductReducer = (state = initialStateFilter, action) => {
    switch (action.type) {
        case FILTER_PRODUCT_REQUESTS:
            return {
                ...state,
                isLoading: true
            }
        case FILTER_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload.products,
                productsCount: action.payload.filteredProductsCount || action.payload.productsCount
            }
        case FILTER_PRODUCT_FAIL:
            return {
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const CreateReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_REVIEW_REQUESTS:
            return {
                ...state,
                isLoading: true
            }
        case CREATE_REVIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isUpdated: action.payload.success
            }
        case CREATE_REVIEW_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case CREATE_REVIEW_RESET:
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
            return state
    }
}

// export const ProductReviewsReducer = (state = {}, action) => {

// }

export const UserProductsReview = (state = {}, action) => {
    switch (action.type) {
        case USER_PRODUCTS_REVIEW_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case USER_PRODUCTS_REVIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: action.payload.success,
                reviews: action.payload.reviews
            }
        case USER_PRODUCTS_REVIEW_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}