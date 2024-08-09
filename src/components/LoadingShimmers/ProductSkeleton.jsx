import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductSkeleton = ({ cards }) => {
  return Array(cards).fill(0).map((item) => (
      <div className="">
        <div className="relative bg-white rounded-xl product">
          <div className="relative text-center p_Thumb p-5">
            <Skeleton height={220} />
          </div>
          <div className=" p-5 pt-0 p_Info text-left rounded-t-3xl rounded-b-xl">
            <span>
              <Skeleton width={60} />
            </span>
            <h2>
              <Skeleton height={25} />
            </h2>
            <p className="mt-2">
              <Skeleton width={110} height={20} />
            </p>
            <p className="mt-2">
              <Skeleton width={150} height={28} />
            </p>
          </div>
        </div>
      </div>
    ));
};

export default ProductSkeleton;
