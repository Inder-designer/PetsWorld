import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_REQUESTS, FILTER_PRODUCT_REQUESTS, FILTER_PRODUCT_SUCCESS, FILTER_PRODUCT_FAIL } from "../constants/productConstants";

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
                isisLoading: true
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

export const productDetailReducer = (state = { product: {} }, action) => {
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
                isisLoading: true
            }
        case FILTER_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload.products,
                productsCount: action.payload.filteredProductsCount
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