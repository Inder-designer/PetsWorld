import React, { useEffect, useState } from "react";
import bgBottom from "../../Assets/Images/slides/bgBottom.png";
import ProductSkeleton from "../LoadingShimmers/ProductSkeleton";
import Product from "../product/Product";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProduct } from "../../actions/productAction";

const TrendingCollection = () => {
  const [isActive, setIsActive] = useState("All Items");
  const { products, isLoading } = useSelector((state) => state.products);

  const cate = [
    { name: "All Items", id: 1 },
    { name: "Cat", id: 2 },
    { name: "Dog", id: 3 },
    { name: "Other Pets", id: 4 },
  ];
  return (
    <div className="mb-[70px] TrendingCollection bg-[#bb6b6c26] py-28 relative cate">
      <div className="absolute -top-1 w-full rotate-[180deg] ">
        <img src={bgBottom} alt="" className="w-full" />
      </div>
      <div className="container mx-auto">
        <div className="mb-7 flex justify-center">
          <h4 className="text-3xl font-bold text-center relative">
            <span>Trending Collection</span>
            <i className="custom-icon-foot-dog absolute right-[-28px] top-[-22px]"></i>
          </h4>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-5">
            {cate.map((e, index) => (
              <li
                className={`flex items-center justify-between h-10 px-6 rounded-full font-semibold duration-300 text-gray-700 hover:bg-[#ff3e6c] hover:text-white cursor-pointer ${
                  isActive === e.name
                    ? "bg-[#ff3e6c] text-white"
                    : "text-gray-700"
                }`}
                onClick={() => setIsActive(e.name)}
              >
                {e.name}
              </li>
            ))}
          </ul>
          <div className="mt-14">
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
      </div>
      <div className="absolute -bottom-1 w-full">
        <img src={bgBottom} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default TrendingCollection;
