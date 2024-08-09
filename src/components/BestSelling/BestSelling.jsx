import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProduct } from "../../actions/productAction";
import ProductSkeleton from "../LoadingShimmers/ProductSkeleton";
import Product from "../product/Product";

const BestSelling = ({ pet }) => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div className="mb-[70px] bestSellingDeals">
      <div className="container mx-auto">
        <div className="mb-7 flex justify-start">
          <h4 className="text-3xl font-bold text-center relative">
            <span>Best Selling For {pet === "dog" ? "Dog" : "Cat"}</span>
            <i className="custom-icon-foot-dog absolute right-[-28px] top-[-22px]"></i>
          </h4>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-5 gap-x-6 gap-y-8 container mx-auto">
            <ProductSkeleton cards={10} />
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-5 gap-x-6 gap-y-8">
              {products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSelling;
