import React, { useEffect, useState } from "react";
import product1 from "../Assets/Images/Product1.jpg";
import CurrencyFormat from "../helpers/CurrencyFormatter";
import DiscountPrice from "../helpers/DiscountPrice";
import { AddOutlined, Remove, RemoveOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../actions/productAction";
import { handleDecrement, handleIncrement } from "../helpers/QuantitySelect";
import { removeCartItem, updateCart } from "../actions/cartAction";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const CartPage = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [cartProduct, setCartProduct] = useState([]);
  const { cartItems } = useSelector(
    (state) => state.cartItems.cart || { cartItems: [] }
  );
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0 && cartItems && cartItems.length > 0) {
      const filteredProducts = products.filter((product) =>
        cartItems.some((cartItem) => cartItem.product === product._id)
      );

      const cartProductDetails = cartItems.map((cartItem) => {
        const product = filteredProducts.find(
          (product) => product._id === cartItem.product
        );
        return {
          ...cartItem,
          product: product
            ? {
                name: product.name,
                id: product._id,
                image:
                  product.images && product.images.length > 0
                    ? product.images[0].url
                    : null,
                stock: product.Stock,
                orderLimit: product.orderLimit,
                discount: product.discount,
                OrignalPrice: product.price * cartItem.quantity,
                discountPrice: product.discount
                  ? DiscountPrice(product.price, product.discount) *
                    cartItem.quantity
                  : product.price * cartItem.quantity,
              }
            : null,
        };
      });
      const subAmount = cartProductDetails.reduce((sum, cartItem) => {
        return sum + (cartItem.product ? cartItem.product.OrignalPrice : 0);
      }, 0);
      const total = cartProductDetails.reduce((sum, cartItem) => {
        return sum + (cartItem.product ? cartItem.product.discountPrice : 0);
      }, 0);

      setCartProduct(cartProductDetails);
      setSubTotal(subAmount);
      setTotal(total);
    }
  }, [products, cartItems]);

  const handleDecrementClick = (cartItemId, quantity) => {
    const newQuantity = quantity - 1;
    dispatch(updateCart(newQuantity, cartItemId));
  };

  const handleIncrementClick = (cartItemId, quantity, stock, limit) => {
    const maxQuantity = Math.min(stock, limit);
    if (maxQuantity > quantity) {
      const newQuantity = quantity + 1;
      dispatch(updateCart(newQuantity, cartItemId));
    } else {
      toast.error(
        <div className="flex items-center">
          <p className="text-sm w-full">
            We're sorry! Only {maxQuantity} unit(s) allowed in each order
          </p>
        </div>,
        {
          hideProgressBar: true,
          draggable: true,
          theme: "dark",
        }
      );
    }
  };

  const removeItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const handleOrder = () => {
    var expires = new Date(Date.now() + 30 * 60 * 1000);
    const orderDetails = {
      cartItems: cartProduct.map(
        (item) =>
          item.product && {
            productId: item.product.id,
            quantity: item.quantity,
            price: item.product.OrignalPrice,
            name: item.product.name,
            image: item.product.image || "",
            discountPrice: item.product.discountPrice,
          }
      ),
      subTotal: subTotal,
      total: total,
      expiresAt: expires,
    };
    sessionStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    navigate("/checkout");
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto max-w-[1100px]">
        {cartItems.length > 0 ? (
          <div className="flex gap-5">
            <div className="leftSide w-[65%] bg-white shadow-[rgba(0,0,0,0.2)_0px_1px_2px_0px]">
              {cartProduct.length > 0 &&
                cartProduct.map((cartItem) => (
                  <div className="flex p-6 border gap-5" key={cartItem._id}>
                    <Link
                      to={`/${cartItem.product.id}+${encodeURIComponent(
                        cartItem.product.name
                      )}`}
                    >
                      <img
                        src={cartItem.product.image || product1}
                        alt=""
                        width="150px"
                      />
                    </Link>
                    <div>
                      <h6 className="font-semibold">
                        <Link
                          to={`/${cartItem.product.id}+${encodeURIComponent(
                            cartItem.product.name
                          )}`}
                        >
                          {cartItem.product.name}
                        </Link>
                      </h6>
                      <h6 className="text-sm text-gray-400">brand</h6>

                      {cartItem.product.stock > 0 ? (
                        <div>
                          <span className="mt-3 inline-block text-xs text-green-700 font-semibold">
                            In Stock
                          </span>
                          <div className="price">
                            <span className="font-bold text-xl">
                              {!cartItem.product.discount
                                ? CurrencyFormat(cartItem.product.OrignalPrice)
                                : CurrencyFormat(
                                    cartItem.product.discountPrice
                                  )}
                            </span>
                            {cartItem.product.discount ? (
                              <>
                                <span className="text-gray-400 text-xs ml-3">
                                  MRP{" "}
                                  <del>
                                    {CurrencyFormat(
                                      cartItem.product.OrignalPrice
                                    )}
                                  </del>
                                </span>
                                <span className="ml-2 text-orange-400 text-sm font-semibold">
                                  ({cartItem.product.discount}% OFF)
                                </span>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      ) : (
                        <span className="mt-6 inline-block text-xl font-semibold text-red-700">
                          Out of Stock
                        </span>
                      )}

                      <div className="flex items-center mt-4 text-base">
                        {cartItem.product.stock > 0 && (
                          <div className="quantity border-r pr-2">
                            <div className="flex items-center">
                              <button
                                className="bg-[#c3c3c3] border border-[#c3c3c3] text-white font-semibold w-6 flex items-center justify-center py-0.5 h-6"
                                onClick={() =>
                                  handleDecrementClick(
                                    cartItem.product.id,
                                    cartItem.quantity
                                  )
                                }
                                disabled={cartItem.quantity <= 1}
                              >
                                <RemoveOutlined className="!text-lg" />
                              </button>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="h-6 text-center text-black text-sm font-semibold w-8 px-2 py-0.5 !border-gray-300"
                                disabled
                                value={cartItem.quantity}
                              />
                              <button
                                className="bg-[#c3c3c3] border border-[#c3c3c3] text-white font-semibold w-6 flex items-center justify-center py-0.5 h-6"
                                onClick={() =>
                                  handleIncrementClick(
                                    cartItem.product.id,
                                    cartItem.quantity,
                                    cartItem.product.stock,
                                    cartItem.product.orderLimit
                                  )
                                }
                              >
                                <AddOutlined className="!text-lg" />
                              </button>
                            </div>
                          </div>
                        )}
                        <p className="border-r px-2 font-semibold text-gray-600 hover:text-gray-800">
                          Move to wishlist
                        </p>
                        <button
                          onClick={() => removeItem(cartItem._id)}
                          href=""
                          className="px-2 font-semibold text-gray-600 hover:text-gray-800"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="border border-[#f0f0f0] flex justify-end py-4 px-8 shadow-[0_-2px_10px_0_rgba(0,0,0,0.1)] sticky bottom-0 bg-white z-10">
                <button
                  className={`uppercase text-white font-semibold py-3 text-base rounded px-10 ${
                    cartProduct.some((item) => item.product.stock <= 0)
                      ? "bg-gray-500"
                      : "bg-[#ff3e6c] hover:bg-[#ff3e6bda]"
                  }`}
                  disabled={cartProduct.some((item) => item.product.stock <= 0)}
                  onClick={() => handleOrder()}
                >
                  Place Order
                </button>
              </div>
            </div>
            <div className="leftSide w-[35%] sticky top-0">
              <div className=" bg-white shadow-[rgba(0,0,0,0.2)_0px_1px_2px_0px] sticky top-0">
                <div className="py-3 px-6 border-b">
                  <h6 className="uppercase text-gray-500 font-semibold">
                    Price Details
                  </h6>
                </div>
                <div className="px-6">
                  <div className="text-gray-600 font-semibold flex justify-between my-4 items-start">
                    <p className="">Price ({cartItems.length} items)</p>
                    <span>{CurrencyFormat(subTotal)}</span>
                  </div>
                  {/* dicount */}
                  {subTotal - total > 0 && (
                    <div className="text-gray-600 font-semibold flex justify-between my-4 items-start">
                      <p className="">Discount</p>
                      <span className="text-[#388e3c]">
                        <Remove className="!text-sm" />
                        {CurrencyFormat(subTotal - total)}
                      </span>
                    </div>
                  )}
                  <div className=" my-4 ">
                    <div className="flex justify-between items-start">
                      <p className="text-gray-600 font-medium">
                        Delivery Charges
                      </p>
                      <span>40</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Free Delivery on order above 499.00
                    </p>
                  </div>
                  <div className="border-[#e0e0e0] border-t py-4 border-dashed">
                    <div className="flex justify-between  items-start text-xl font-semibold ">
                      <p className="text-gray-800 ">Total Amount</p>
                      <span>{CurrencyFormat(total)}</span>
                    </div>
                  </div>

                  {subTotal - total > 0 && (
                    <div className="border-[#e0e0e0] border-t  border-dashed py-3 text-[#388e3c] font-medium">
                      <p>
                        You will save {CurrencyFormat(subTotal - total, 0)} on
                        this order
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-center flex-col text-center p-10 border-[#cacaca] border bg-white rounded-sm">
              <img
                src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
                alt=""
                width="200px"
              />
              <p className="text-lg font-medium">Your cart is empty!</p>
              <p className="text-xs mt-3">Add items to it now.</p>
              <Link
                to="/"
                className="text-sm font-semibold px-16 rounded-sm py-2.5 mt-4 inline-block bg-blue-500 text-white"
              >
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
