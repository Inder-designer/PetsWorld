import React from "react";
import Skeleton from "react-loading-skeleton";

const TableSkeleton = () => {
  return (
    <div>
      <div className="bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center pl-0 mb-5">
          <div className="text-lg font-semibold">
            <Skeleton height={25} width={150} />
          </div>
          <div className="text-lg font-semibold">
            <Skeleton height={25} width={150} />
          </div>
        </div>
        <div>
          <Skeleton height={40} />
          <div className="mt-2">
            <Skeleton height={25} count={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
