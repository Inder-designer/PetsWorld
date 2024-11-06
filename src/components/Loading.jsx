import { Spinner } from "flowbite-react";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen fixed top-0 w-full flex justify-center items-center bg-[#00000003] right-0 z-[999]">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
};

export default Loading;
