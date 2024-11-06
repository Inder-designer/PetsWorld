import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../actions/productAction";
import Pagination from "../helpers/Pagination";
import { Link } from "react-router-dom";
import ProductSkeleton from "../components/LoadingShimmers/ProductSkeleton";
import Banner from "../components/Banner/Banner";
import TodayDeals from "../components/TodayDeals/TodayDeals";
import WeekDeals from "../components/WeekDeals/WeekDeals";
import BestSelling from "../components/BestSelling/BestSelling";
import TrendingCollection from "../components/TrendingCollection/TrendingCollection.jsx";
import CustomersReviews from "../components/CustomersReviews/CustomersReviews.jsx";
import BrowseCate from "../components/BrowseCate/BrowseCate";

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(getProduct());
    setTimeout(
      () => {
        setLoading(false);
      },
      500
    )
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
    <div className="pb-10">
      <div className="">
        <Banner/>
        <TodayDeals/>
        <BrowseCate/>
        <BestSelling pet="dog"/>
        <WeekDeals/>
        <BestSelling pet="cat"/>
        <TrendingCollection/>
        {/* <CustomersReviews/> */}
        {/* {Loading ? (
          <div className="grid grid-cols-5 gap-x-6 gap-y-8 container mx-auto">
            <ProductSkeleton cards={10}/>
          </div>
        ) : (
          <div className="container mx-auto">
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
        )} */}
      </div>
    </div>
  );
};

export default Home;
