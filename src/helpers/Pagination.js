import React, { useEffect } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 4,
  productsPerPage,
  totalProducts,
}) => {
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  // Scroll to the top of the product section when currentPage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Determine the start and end page numbers to display
  let startPage, endPage;
  if (totalPages <= maxVisiblePages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= maxVisiblePages - 1) {
      startPage = 1;
      endPage = maxVisiblePages;
    } else if (currentPage + 1 >= totalPages) {
      startPage = totalPages - maxVisiblePages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  // Helper function to render pagination buttons
  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-4 py-2 border ${
            currentPage === i ? "bg-gray-300" : "bg-white"
          }`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  // Calculate the range of products being displayed
  const startProduct = (currentPage - 1) * productsPerPage + 1;
  const endProduct = Math.min(currentPage * productsPerPage, totalProducts);

  return (
    <div className="flex items-center justify-between mt-8">
      <div>
        Products {startProduct} to {endProduct} of <span>{totalProducts}</span>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className={`px-4 py-2 mx-2 border ${
            isPrevDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-white"
          } ${isPrevDisabled ? "pointer-events-none" : ""}`}
          disabled={isPrevDisabled}
        >
          <KeyboardArrowLeft />
        </button>
        {renderPaginationButtons()}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className={`px-4 py-2 mx-2 border ${
            isNextDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-white"
          } ${isNextDisabled ? "pointer-events-none" : ""}`}
          disabled={isNextDisabled}
        >
          <KeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
