import { Add } from "@mui/icons-material";
import React from "react";

const ManagePets = () => {
  return (
    <div className=" bg-[#f6f6f6] rounded-lg">
      <div className="border-2 rounded-t-md px-5 py-2 border-[#9f9f9f36] flex justify-between items-center">
        <h6 className="text-lg font-semibold">Manage Pets</h6>
      </div>
      <div className="px-5 pb-5 pt-2 flex items-center flex-col justify-center h-[calc(100%_-_48px)]">
        <p>You have no pet entries in your account.</p>
        <div className="flex items-center justify-between mt-4">
          <button
            type="submit"
            className="flex items-center text-white bgGradient focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5"
          >
            Add New Pet <Add className="!text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagePets;
