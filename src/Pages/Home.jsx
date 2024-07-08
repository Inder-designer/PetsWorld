import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../actions/productAction";
import Pagination from "../helpers/Pagination";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Logic for handling page changes
  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="py-10">
      <div className="container mx-auto">
        
        {/* Search Product acc to condtion */}

        <div className="grid grid-cols-5 gap-x-6 gap-y-8 productSection">
          {currentProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        {products.length > productsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(products.length / productsPerPage)}
            onPageChange={onPageChange}
            maxVisiblePages={4} // Adjust as needed
            productsPerPage={productsPerPage}
            totalProducts={products.length}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
