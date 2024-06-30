import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct, getProductDetail } from "../actions/productAction";
import CurrencyFormat from "../helpers/CurrencyFormatter";
import DiscountPrice from "../helpers/DiscountPrice";
import ReactStars from "react-rating-stars-component";
import product1 from "../Assets/Images/Product1.jpg";
import {
  AddOutlined,
  Error,
  FavoriteBorderOutlined,
  RemoveOutlined,
  ShoppingBasket,
  Star,
  StarBorderOutlined,
} from "@mui/icons-material";
import Product from "../components/product/Product";
import { toast } from "react-toastify";
import { addToCart, getCartItems } from "../actions/cartAction";

const ProductDetail = () => {
  const { productId } = useParams();
  const id = productId.split("+")[0];
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((state) => state.product);
  const { products } = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);
  const reviewSectionRef = useRef(null);
  // console.log(product);

  const calculateTotalRating = () => {
    if (!product || !product.reviews || product.reviews.length === 0) return 0;
    return product.reviews.reduce((acc, review) => acc + review.rating, 0);
  };
  const totalRating = calculateTotalRating();

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

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleIncrement = () => {
    const maxQuantity = Math.min(product.Stock, product.orderLimit);
    if (quantity < maxQuantity) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      toast.error(
        <div className="flex items-center">
          <p className="text-sm w-full">
            {" "}
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

  const scrollToReviewSection = () => {
    if (reviewSectionRef.current) {
      const topOffset =
        reviewSectionRef.current.getBoundingClientRect().top +
        window.scrollY -
        100; // Adjust 100 to the desired offset
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(quantity, product._id));
  };

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getProductDetail(id));
    setQuantity(1);
  }, [dispatch, id]);

  return (
    <div className="py-10">
      {isLoading ? (
        "Loading"
      ) : (
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-3/5">
              <div className=" sticky top-0">
                <img src={imageUrl} alt="" />
              </div>
            </div>
            <div className="w-2/5  px-8">
              <div className="title  mb-3">
                <h5 className="text-2xl font-bold text-[#282c3f]">Brand</h5>
                <h6 className="text-[#535665] text-xl">{product.name}</h6>
              </div>
              {product.numOfReviews > 0 && (
                <a
                  onClick={scrollToReviewSection}
                  className="rating flex items-center border w-fit border-gray-300 hover:border-gray-700 px-2 py-1 text-sm mb-4 "
                >
                  <div className="flex items-center gap-1 border-r border-gray-400 mr-2 pr-2">
                    <span className="font-bold text-gray-700">
                      {product.ratings}
                    </span>
                    <ReactStars {...options} />
                  </div>

                  <span className="text-gray-500">
                    {product.numOfReviews} Ratings
                  </span>
                </a>
              )}
              <hr />
              <div className="mt-2 price ">
                <span className=" font-bold  text-2xl">
                  {product.discount
                    ? CurrencyFormat(
                        DiscountPrice(product.price, product.discount)
                      )
                    : CurrencyFormat(product.price)}
                </span>
                {product.discount ? (
                  <span className="text-gray-400 text-sm ml-3">
                    MRP <del>{CurrencyFormat(product.price)}</del>
                  </span>
                ) : (
                  ""
                )}
                {product.discount ? (
                  <span className="ml-2 text-orange-400 font-semibold">
                    ({product.discount}% OFF)
                  </span>
                ) : (
                  ""
                )}
                {product.Stock < 2 ? (
                  <p className="text-sm font-semibold text-red-400">
                    Only {product.Stock} left in stock - order soon.
                  </p>
                ) : product.Stock < 5 ? (
                  <p className="text-sm font-semibold text-red-400">
                    Hurry, only few left!
                  </p>
                ) : (
                  ""
                )}
                <p className="text-sm font-semibold text-gray-400 mt-2">
                  Inclusive of all taxes
                </p>
              </div>
              <div className="quantity mt-4">
                <div className="flex items-center">
                  <span className="mr-2">Quantity:</span>
                  <button
                    className="bg-[#636363] text-white font-semibold 
             w-6 flex items-center justify-center py-0.5"
                    onClick={handleDecrement}
                    disabled={quantity <= 1}
                  >
                    <RemoveOutlined className="!text-lg" />
                  </button>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="text-center text-black text-sm font-semibold w-8
             px-2 py-0.5 !border-gray-300"
                    disabled
                    value={quantity}
                  />
                  <button
                    className="bg-[#636363] text-white font-semibold 
              w-6 flex items-center justify-center py-0.5"
                    onClick={handleIncrement}
                  >
                    <AddOutlined className="!text-lg" />
                  </button>
                </div>
              </div>
              <div className="cartBtn mt-6 flex gap-5 ">
                <button
                  className="w-3/5 bg-[#ff3e6c] hover:bg-[#ff3e6bda] uppercase  text-white font-semibold py-4
             text-sm rounded flex items-center justify-center "
                  onClick={handleAddToCart}
                >
                  <ShoppingBasket className="mr-3 !text-xl" /> Add to Cart
                </button>
                <button
                  className="w-2/5 border hover:border-[#636363] uppercase  text-gray-600 font-semibold py-4
             text-sm rounded flex items-center justify-center "
                >
                  <FavoriteBorderOutlined className="mr-3 !text-xl" /> Whishlist
                </button>
              </div>
              <hr className="my-7" />
              <div className="p_detail ">
                <h6 className="uppercase font-bold text-gray-700 mb-3 ">
                  Product Details
                </h6>
                <p className="text-base text-gray-800">
                  {product.description} Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quod maxime optio magni, eveniet odio
                  pariatur voluptates velit aliquam omnis veritatis quis dolorem
                  laboriosam repellat commodi quidem et eius, necessitatibus
                  iste.ctetur adipisicing elit. Quod maxime optio magni, eveniet
                  odio pariatur voluptates velit aliquam omnis veritatis quis
                  dolorem laboriosam repellat commodi quidem et eius,
                  necessitatibus iste.ctetur adipisicing elit. Quod maxime optio
                  magni, eveniet odio pariatur voluptates velit aliquam omnis
                  veritatis quis dolorem laboriosam repellat commodi quidem et
                  eius, necessitatibus iste.ctetur adipisicing elit. Quod maxime
                  optio magni, eveniet odio pariatur voluptates velit aliquam
                  omnis veritatis quis dolorem laboriosam repellat commodi
                  quidem et eius, necessitatibus iste.ctetur adipisicing elit.
                  Quod maxime optio magni, eveniet odio pariatur voluptates
                  velit aliquam omnis veritatis quis dolorem laboriosam repellat
                  commodi quidem et eius, necessitatibus iste.ctetur adipisicing
                  elit. Quod maxime optio magni, eveniet odio pariatur
                  voluptates velit aliquam omnis veritatis quis dolorem
                  laboriosam repellat commodi quidem et eius, necessitatibus
                  iste.ctetur adipisicing elit. Quod maxime optio magni, eveniet
                  odio pariatur voluptates velit aliquam omnis veritatis quis
                  dolorem laboriosam repellat commodi quidem et eius,
                  necessitatibus iste.ctetur adipisicing elit. Quod maxime optio
                  magni, eveniet odio pariatur voluptates velit aliquam omnis
                  veritatis quis dolorem laboriosam repellat commodi quidem et
                  eius, necessitatibus iste.ctetur adipisicing elit. Quod maxime
                  optio magni, eveniet odio pariatur voluptates velit aliquam
                  omnis veritatis quis dolorem laboriosam repellat commodi
                  quidem et eius, necessitatibus iste.ctetur adipisicing elit.
                  Quod maxime optio magni, eveniet odio pariatur voluptates
                  velit aliquam omnis veritatis quis dolorem laboriosam repellat
                  commodi quidem et eius, necessitatibus iste.ctetur adipisicing
                  elit. Quod maxime optio magni, eveniet odio pariatur
                  voluptates velit aliquam omnis veritatis quis dolorem
                  laboriosam repellat commodi quidem et eius, necessitatibus
                  iste.ctetur adipisicing elit. Quod maxime optio magni, eveniet
                  odio pariatur voluptates velit aliquam omnis veritatis quis
                  dolorem laboriosam repellat commodi quidem et eius,
                  necessitatibus iste.ctetur adipisicing elit. Quod maxime optio
                  magni, eveniet odio pariatur voluptates velit aliquam omnis
                  veritatis quis dolorem laboriosam repellat commodi quidem et
                  eius, necessitatibus iste.
                </p>
              </div>
              <hr className="my-7" />
              <div className="p_Info ">
                <p className="text-sm text-gray-600">
                  Product ID:{" "}
                  <span className="font-bold text-gray-800">{product._id}</span>
                </p>
              </div>
              <hr className="my-7" />
              {product.numOfReviews != 0 ? (
                <div id="Ratings" className="p_review " ref={reviewSectionRef}>
                  <h6 className="uppercase font-bold text-gray-700 mb-3 ">
                    Ratings & Review
                  </h6>
                  <div className="rating flex items-center px-2 py-1 text-sm mb-4 ">
                    <div className="flex items-center flex-col gap-1">
                      <span className="font-bold text-gray-700 text-3xl flex items-center justify-center">
                        {product.ratings} <Star />
                      </span>
                      <span className="text-gray-500 text-center">
                        {totalRating} Ratings & <br />
                        {product.numOfReviews} Reviews
                      </span>
                    </div>
                  </div>
                  <div className="reviewBox">
                    {product && product.reviews && product.reviews.length > 0
                      ? product.reviews.map((review) => (
                          <div className="border p-3" key={review._id}>
                            <div className="flex items-center gap-3">
                              <span className="flex items-center px-2 bg-[#388e3c] text-white rounded-md *:text-xs">
                                {review.rating}{" "}
                                <Star className="!text-base ml-0.5" />
                              </span>
                              <h6 className="text-sm font-semibold">
                                {review.title}
                              </h6>
                            </div>
                            <p className="text-sm text-gray-700 mt-2">
                              {review.comment}
                            </p>
                            <p className="text-xs text-[#878787] flex gap-3 mt-3">
                              <span className="font-semibold">
                                {review.name}
                              </span>{" "}
                              <span>3 months ago</span>
                            </p>
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Similar Products
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* {products.isLoading ? "Loading" : */}
              {products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
              {/* } */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
