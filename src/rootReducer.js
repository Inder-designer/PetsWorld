import { combineReducers } from "redux";
import { forgotPasswordReducer, updateProfileReducer, userReducer } from "./reducers/userReducer";
import { CreateReviewReducer, ProductReviewsReducer, UserProductsReview, filterProductReducer, productDetailReducer, productReducer } from "./reducers/productReducer";
import { cartItemsReducer } from "./reducers/cartReducer";
import { addressReducer } from "./reducers/addressReducer";
import { OrderReducer } from "./reducers/orderReducer";
import { AdminProductsReducer, EditProductReducer } from "./Services/dashboard/reducers/ProductReducers";
import { AdminUserReducer } from "./Services/dashboard/reducers/UserReducers";
import { AdminOrdersReducer, SingleOrderReducer } from "./Services/dashboard/reducers/OrderReducers";
import { Categories, updateCategory } from "./Services/dashboard/reducers/CategoryReducers";
import { attributesReducer, updateAttributeReducer } from "./Services/dashboard/reducers/AttributeReducers";
import { LOGOUT_SUCCESS } from "./constants/userConstants";
import { WishlistReducer } from "./reducers/wishlistReducer";

const appReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    product: productDetailReducer,
    cartItems: cartItemsReducer,
    address: addressReducer,
    order: OrderReducer,
    filterProducts: filterProductReducer,
    profile: updateProfileReducer,
    forgotPswd: forgotPasswordReducer,
    adminProducts: AdminProductsReducer,
    EditProduct: EditProductReducer,
    adminUsers: AdminUserReducer,
    adminOrders: AdminOrdersReducer,
    singleOrder: SingleOrderReducer,
    categories: Categories,
    updateCategory: updateCategory,
    attributes: attributesReducer,
    updateAttribute: updateAttributeReducer,
    CreateReview: CreateReviewReducer,
    UserProductsReview: UserProductsReview,
    wishlist: WishlistReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;