import React, { useEffect } from "react";
import product1 from "../../Assets/Images/Product1.jpg";
import {
  FavoriteBorderOutlined,
  FavoriteRounded,
  Star,
  StarBorderOutlined,
} from "@mui/icons-material";
import "./product.css";
import CurrencyFormatter from "../../helpers/CurrencyFormatter";
import CurrencyFormat from "../../helpers/CurrencyFormatter";
import DiscountPrice from "../../helpers/DiscountPrice";
import { Link, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartAction";
import { useSelector } from "react-redux";
import {
  addToWishlist,
  clearErrors,
  getWishlist,
  removeFromWishlist,
} from "../../actions/wishlistAction";
import Loading from "../Loading";

const Product = ({ product }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { wishlist, isLoading, error } = useSelector((state) => state.wishlist);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quantity = 1;
  // console.log(wishlist?.wishlist?.wishlistItems);
  const imageUrl =
    product.images && product.images.length > 0
      ? product.images[0].url
      : product1;

  const options = {
    edit: false,
    activeColor: "tomato",
    value: product.ratings,
    size: 20,
    isHalf: true,
  };
  const calculateTotalRating = () => {
    if (!product || !product.reviews || product.reviews.length === 0) return 0;
    return product.reviews.reduce((acc, review) => acc + review.rating, 0);
  };
  const totalRating = calculateTotalRating();

  const handleAddToCart = (id) => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    } else {
      dispatch(addToCart(quantity, id));
    }
  };

  const isInWishlist = (id) =>
    wishlist?.wishlist?.wishlistItems.some((item) => item.product._id === id);

  const handleAddWishlist = () => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    } else {
      dispatch(addToWishlist(product._id)).then(() => {
        dispatch(getWishlist()); // Refetch wishlist after adding
      });
    }
  };

  const handleRemoveWishlist = () => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    } else {
      dispatch(removeFromWishlist(product._id)).then(() => {
        dispatch(getWishlist()); // Refetch wishlist after adding
      });
    }
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, error]);
  return (
    <>
      <div className="" key={product._id}>
        {isLoading && <Loading />}
        <div className="relative bg-white rounded-xl product">
          <div className="relative text-center p_Thumb p-5">
            <Link
              className=" w-full h-full"
              to={`/${product._id}+${encodeURIComponent(product.name)}`}
            >
              <img src={imageUrl} alt="" />
            </Link>
            {product.discount ? (
              <div className="absolute top-3 left-3 bg-[#ff3e6c] text-white py-0.5 px-2  rounded">
                <span className=" text-white text-sm font-semibold">
                  -{product.discount}%
                </span>
              </div>
            ) : (
              ""
            )}
            {isInWishlist(product._id) ? (
              <button
                className="wishlist absolute top-5 right-5 w-8 h-8 rounded-full flex justify-center items-center bg-white hover:bg-[#ff3e6c] text-[#ff3e6c] hover:text-white duration-300 shadow-lg "
                onClick={handleRemoveWishlist}
              >
                <FavoriteRounded className="!text-lg" />
              </button>
            ) : (
              <button
                className="wishlist absolute top-5 right-5 w-8 h-8 rounded-full flex justify-center items-center bg-white hover:bg-[#ff3e6c] text-[#ff3e6c] hover:text-white duration-300 shadow-lg "
                onClick={handleAddWishlist}
              >
                <FavoriteBorderOutlined className="!text-lg" />
              </button>
            )}
          </div>
          <div className=" p-5 pt-3 p_Info text-left bg-[#f7f7f9] rounded-t-3xl rounded-b-xl">
            <span className="text-sm text-gray-400">{product.category}</span>
            <h4 className="text-base text-gray-600 font-semibold p_title">
              <Link
                to={`/${product._id}+${encodeURIComponent(product.name)}`}
                className="hover:text-gray-8009 hover:text-orange-400"
              >
                {product.name}
              </Link>
            </h4>
            {product.ratings > 0 && (
              <div className="flex mt-2">
                <div className="rating flex items-center w-fit text-sm ">
                  <div className="flex items-center gap-1 border-r border-gray-400 mr-2 pr-2">
                    <span className="font-medium text-xs flex items-center px-1 py-0.5 bg-[#388e3c] text-white rounded-sm">
                      {product.ratings} <Star className="!text-base" />
                    </span>
                  </div>
                  <span className="text-gray-500 font-semibold">
                    {totalRating} Ratings
                  </span>
                </div>
              </div>
            )}
            <div className="mt-2">
              <span className="text-red-500 font-semibold text-lg">
                {product.discount
                  ? CurrencyFormat(
                      DiscountPrice(product.price, product.discount)
                    )
                  : CurrencyFormat(product.price)}
              </span>
              {product.discount ? (
                <del className="text-gray-500 text-sm ml-2">
                  {CurrencyFormat(product.price)}
                </del>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="p_bottom left-[-0.6px] border border-white border-t-0 absolute shadow-lg rounded-b-xl p-5 bg-[#f7f7f9] text-white w-[calc(100%_+_2px)] top-[96%]">
            <div className="">
              <button
                className={`text-center uppercase inline-block w-full rounded-full text-white py-2 px-4 bg-[#ff3e6c] hover:bg-[#ff3e6bda]`}
                onClick={() => handleAddToCart(product._id)}
                disabled={product.Stock < 1}
              >
                {product.Stock < 1 ? "Out of stock" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
