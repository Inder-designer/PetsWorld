import React from "react";
import product1 from "../../Assets/Images/Product1.jpg";
import {
  FavoriteBorderOutlined,
  Star,
  StarBorderOutlined,
} from "@mui/icons-material";
import "./product.css";
import CurrencyFormatter from "../../helpers/CurrencyFormatter";
import CurrencyFormat from "../../helpers/CurrencyFormatter";
import DiscountPrice from "../../helpers/DiscountPrice";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartAction";

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const quantity = 1
  // console.log(products);
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
    dispatch(addToCart(quantity, id));
  };

  return (
    <>
      <div className="" key={product._id}>
        <div className="relative bg-white rounded-xl product">
          <div className="relative text-center p_Thumb p-5">
            <Link
              className=" w-full h-full"
              to={`/${product._id}+${encodeURIComponent(product.name)}`}
            >
              <img src={imageUrl} alt="" />
            </Link>
            {product.discount ? (
              <div className="absolute top-5 left-5 bg-blue-500 text-white py-1 px-2  rounded">
                <span className=" text-white text-sm">-{product.discount}%</span>
              </div>
            ) : (
              ""
            )}
            <button className="wishlist absolute top-5 right-5 w-8 h-8 rounded-full border flex justify-center items-center hover:bg-green-500 text-gray-600 hover:text-white">
              <FavoriteBorderOutlined className="!text-lg" />
            </button>
          </div>
          <div className=" p-5 pt-3 p_Info text-left bg-[#f7f7f9] rounded-t-3xl rounded-b-xl">
            <span className="text-sm text-gray-400">Dog</span>
            <h4 className="text-base text-gray-600 font-semibold p_title">
              <Link
                to={`/${product._id}+${encodeURIComponent(product.name)}`}
                className="hover:text-gray-8009 hover:text-orange-400"
              >
                {product.name}
              </Link>
            </h4>
            {product.numOfReviews > 0 && (
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
                className="text-center uppercase inline-block w-full rounded-full text-white py-2 px-4 bg-[#ff3e6c] hover:bg-[#ff3e6bda]"
                onClick={() => handleAddToCart(product._id)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
