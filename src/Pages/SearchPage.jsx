import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getFilterProduct, getProduct, getSearchProduct } from "../actions/productAction";
import { Slider } from "@mui/material";
import CurrencyFormat from "../helpers/CurrencyFormatter";
import { Dropdown } from "flowbite-react";

const SearchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation hook to access location
  const keywoard = new URLSearchParams(location.search).get("q");
  const [value, setValue] = useState([0, 30000]);
  const [category, setCategory] = useState();
  const [sort, setSort] = useState("Relevance");
  const [ratings, setRating] = useState();
  const { products } = useSelector((state) => state.products);
  const filterProducts = useSelector((state) => state.filterProducts);

  const categories = ["dog", "cat", "bird", "fish", "reptile", "food"];

  console.log(filterProducts);
  const minDistance = 1000;
  const priceHandler = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  useEffect(() => {
    dispatch(getSearchProduct(keywoard, value, category, ratings));
    navigate(
      `/search?q=${keywoard}&price[gte]=${value[0]}&price[lte]=${value[1]}`
    );
  }, [keywoard, value, category, ratings]);

  const sortDiv = <span className="text-bod">{category}</span>

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-[20%]">
            <p className="uppercase font-medium mb-5">
              Filters
            </p>
          </div>
          <div className="w-[80%] px-6">
            <div className="flex justify-between">
              <div>
                <p className="font-medium mb-5">
                  Showing {filterProducts.productsCount} results for "{keywoard}
                  "
                </p>
              </div>
              <div className="sortDrp">
                <Dropdown
                  label={`Sort by: ${sort}`}
                  bg
                  dismissOnClick={false}
                  className="drpMenu"
                >
                  <Dropdown.Item onClick={() => {setSort("Relevance"); }}>Relevance</Dropdown.Item>
                  <Dropdown.Item onClick={() => {setSort("Low to High"); }}>Price: Low to High</Dropdown.Item>
                  <Dropdown.Item onClick={() => {setSort("High to Low"); }}>Price: High to Low</Dropdown.Item>
                  <Dropdown.Item onClick={() => {setSort("Top Rated"); }}>Top Rated</Dropdown.Item>
                  <Dropdown.Item onClick={() => {setSort("Newest"); }}>Newest</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-[20%] p-5 border-r">
              <div>
                <p className="font-bold">Price</p>
                <div className="flex justify-center">
                  <span>
                    {CurrencyFormat(value[0], 0)} -{" "}
                    {value[1] === 30000
                      ? `${CurrencyFormat(value[1], 0)}+`
                      : CurrencyFormat(value[1], 0)}
                  </span>
                </div>
                <Slider
                  getAriaLabel={() => "Minimum distance"}
                  value={value}
                  onChange={priceHandler}
                  valueLabelDisplay="off"
                  aria-labelledby="range-slider"
                  min={0}
                  max={30000}
                  disableSwap
                />
              </div>
              <div className="mt-4">
                <p className="font-bold">Category</p>
                <ul className=" gap-3">
                  {categories.map((category) => (
                    <li
                      key={category}
                      className="text-gray-600 capitalize py-1 cursor-pointer hover:text-[#ff3e6c]"
                      onClick={() => setCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="font-bold">Rating</p>
                <Slider
                  value={ratings}
                  onChange={(e, newRating) => {
                    setRating(newRating);
                  }}
                  aria-labelledby="continuous-slider"
                  min={0}
                  max={5}
                  valueLabelDisplay="auto"
                />
              </div>
            </div>
            <div className="w-[80%] p-6">
              <div className=" mb-5 flex gap-3">
                <span className="font-medium">Sort By:</span>
                <span
                  className="text-gray-600"
                  onClick={() => {
                    dispatch({
                      type: "SORT_PRODUCTS",
                      payload: {
                        sortBy: "newest",
                      },
                    });
                  }}
                >
                  Newest
                </span>
                <span className="text-gray-600">Low to High</span>
                <span className="text-gray-600">High to Low</span>
                <span className="text-gray-600">Rating: High to Low</span>
                <span className="text-gray-600">Rating: Low to High</span>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 productSection">
                {filterProducts.products
                  ? filterProducts.products.map((product) => (
                      <Product key={product._id} product={product} />
                    ))
                  : products.map((product) => (
                      <Product key={product._id} product={product} />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
