import React from "react";
import Skeleton from "react-loading-skeleton";

const CartSkeleton = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div className="leftSide w-[65%] bg-white shadow-[rgba(0,0,0,0.2)_0px_1px_2px_0px]">
          <div className="flex p-6 border gap-5">
            <div>
              <Skeleton width={150} height={150} />
            </div>
            <span className="w-full">
              <Skeleton height={32} />
              <Skeleton height={20} width={180} />
              <Skeleton height={20} width={100} />
              <Skeleton height={20} width={180} />
              <Skeleton height={32} />
            </span>
          </div>
          <div className="flex p-6 border gap-5">
            <div>
              <Skeleton width={150} height={150} />
            </div>
            <span className="w-full">
                <Skeleton height={32}/>
                <Skeleton height={20} width={180}/>
                <Skeleton height={20} width={100}/>
                <Skeleton height={20} width={180}/>
                <Skeleton height={32}/>
            </span>
          </div>
        </div>
        <div className="leftSide w-[35%] sticky top-0">
          <div className=" bg-white shadow-[rgba(0,0,0,0.2)_0px_1px_2px_0px] py-3 px-6">
            <Skeleton className="mb-2" height={32}/>
            <Skeleton className="mb-2" height={20}/>
            <Skeleton className="mb-2" height={20}/>
            <Skeleton className="mb-2" height={32}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;
