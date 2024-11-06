import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CurrencyFormat from "../helpers/CurrencyFormatter";
import DiscountPrice from "../helpers/DiscountPrice";
import { FavoriteRounded, Star } from "@mui/icons-material";
import {
  clearErrors,
  getWishlist,
  removeFromWishlist,
} from "../actions/wishlistAction";
import { useDispatch } from "react-redux";
import ProductSkeleton from "../components/LoadingShimmers/ProductSkeleton";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist, isLoading, error } = useSelector((state) => state.wishlist);

  const handleRemoveWishlist = (id, movetoCart) => {
    console.log(id, movetoCart);
    dispatch(removeFromWishlist(id, movetoCart)).then(() => {
      dispatch(getWishlist()); // Refetch wishlist after adding
    });
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, error]);
  return (
    <div className="py-10">
      <div className="container mx-auto">
        {isLoading ? (
          <div className="grid grid-cols-5 gap-4 gap-y-6">
            <>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </>
          </div>
        ) : wishlist?.wishlist?.wishlistItems.length > 0 ? (
          <>
            <h6 className="text-lg  text-gray-800 mb-8">
              <span className="font-semibold">My Wishlist </span>
              {wishlist?.wishlist?.wishlistItems.length > 1 ? (
                <>{wishlist?.wishlist?.wishlistItems.length} items</>
              ) : (
                <>{wishlist?.wishlist?.wishlistItems.length} item</>
              )}
            </h6>
            <div className="grid grid-cols-5 gap-4 gap-y-6">
              {wishlist?.wishlist?.wishlistItems.map((product) => (
                <div className="" key={product.product._id}>
                  <div className="border border-gray-300 relative bg-white rounded-xl product">
                    <div className="relative text-center p_Thumb p-5">
                      <Link
                        className=" w-full h-full"
                        to={`/${product.product._id}+${encodeURIComponent(
                          product.product.name
                        )}`}
                      >
                        <img src={product?.product?.images[0]?.url} alt="" />
                      </Link>
                      {product.product.discount ? (
                        <div className="absolute top-3 left-3 bg-[#ff3e6c] text-white py-0.5 px-2  rounded">
                          <span className=" text-white text-sm font-semibold">
                            -{product.product.discount}%
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                      <button
                        className="wishlist absolute top-5 right-5 w-8 h-8 rounded-full flex justify-center items-center bg-white hover:bg-[#ff3e6c] text-[#ff3e6c] hover:text-white duration-300 shadow-lg "
                        onClick={() =>
                          handleRemoveWishlist(product.product._id)
                        }
                      >
                        <FavoriteRounded className="!text-lg" />
                      </button>
                    </div>
                    <div className="px-3 sm:px-5 py-4 p_Info text-left bg-[#f7f7f9] rounded-t-3xl">
                      <span className="text-sm text-gray-400">
                        {product.product.category}
                      </span>
                      <h4 className="text-base text-gray-600 font-semibold">
                        <Link
                          to={`/${product.product._id}+${encodeURIComponent(
                            product.product.name
                          )}`}
                          className="hover:text-gray-8009 hover:text-orange-400"
                        >
                          {product.product.name}
                        </Link>
                      </h4>
                      <div className="mt-2">
                        <span className="text-red-500 font-semibold text-lg">
                          {product.product.discount
                            ? CurrencyFormat(
                                DiscountPrice(
                                  product.product.price,
                                  product.product.discount
                                )
                              )
                            : CurrencyFormat(product.product.price)}
                        </span>
                        {product.product.discount ? (
                          <del className="text-gray-500 text-sm ml-2">
                            {CurrencyFormat(product.product.price)}
                          </del>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="px-3 sm:px-5 pb-4 bg-[#f7f7f9] text-white rounded-b-xl">
                      <div className="">
                        <button
                          className={`text-center uppercase inline-block w-full rounded-full text-white py-2 px-4 bg-[#ff3e6c] hover:bg-[#ff3e6bda]`}
                          onClick={() => {
                            handleRemoveWishlist(product.product._id, {
                              movetoCart: true,
                            });
                          }}
                          disabled={product.product.Stock < 1}
                        >
                          {product.product.Stock < 1
                            ? "Out of stock"
                            : "Move to cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="min-h-[400px] flex items-center justify-center w-full col-span-5">
              <div className="text-center text-gray-500">
                <p className="text-xl font-semibold">YOUR WISHLIST IS EMPTY</p>
                <p className="pt-4 pb-10">
                  Add items that you like to your wishlist.
                  <br /> Review them anytime and easily move them to the bag.
                </p>
                <Link
                  to="/"
                  className="text-white py-2 px-4 bg-[#ff3e6c] hover:bg-[#ff3e6bda] inline-block"
                >
                  CONTINUE SHOPPING
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
