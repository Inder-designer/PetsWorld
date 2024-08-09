import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getFilterProduct, getProduct } from "../actions/productAction";
import { Slider } from "@mui/material";
import CurrencyFormat from "../helpers/CurrencyFormatter";
import { Dropdown } from "flowbite-react";
import menuData from "../category.json";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation hook to access location
  const category = new URLSearchParams(location.search).get("category");
  const type = new URLSearchParams(location.search).get("type");
  const [price, setPrice] = useState([0, 30000]);
  const [selectedMainCategory, setSelectedMainCategory] =
    useState(categoryName);
  const [selectedSubmenu, setSelectedSubmenu] = useState(category);
  const [selectedSubMenuItem, setSelectedSubmenuItem] = useState(type);
  const [sort, setSort] = useState("Relevance");
  const [ratings, setRating] = useState();
  const { products } = useSelector((state) => state.products);
  const filterProducts = useSelector((state) => state.filterProducts);
  const CategoryList = menuData.menuItems;
  console.log(categoryName, "qwerty");

  const minDistance = 1000;
  const priceHandler = (event, newPrice, activeThumb) => {
    if (!Array.isArray(newPrice)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([Math.min(newPrice[0], price[1] - minDistance), price[1]]);
    } else {
      setPrice([price[0], Math.max(newPrice[1], price[0] + minDistance)]);
    }
  };

  const handleCate = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedMainCategory(value);
      setSelectedSubmenu("");
    } else {
      setSelectedMainCategory("");
    }
  };

  const handleSubmenu = (submenuLabel) => {
    setSelectedSubmenu((prev) => (prev === submenuLabel ? "" : submenuLabel));
    setSelectedSubmenuItem("");
  };

  const handleSubmenuItem = (submenuItemLabel) => {
    setSelectedSubmenuItem((prev) =>
      prev === submenuItemLabel ? "" : submenuItemLabel
    );
  };

  useEffect(() => {
    // Initial effect when component mounts or URL parameters are present
    if (categoryName || category || type) {
      let url = `${categoryName || ""}`;
      const params = new URLSearchParams();

      if (category) {
        params.append("category", category);
      }
      if (type) {
        params.append("type", type);
      }

      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      console.log(url, "Initial URL");
      window.history.pushState(null, "", url);
      dispatch(getFilterProduct(url));
    }
  }, [categoryName, category, type, dispatch]);

  const transformLabelToUrl = (label) => {
    // Convert to lowercase, replace "&" with "+", and replace non-alphanumeric characters with hyphens
    return label
      .toLowerCase()
      .replace(/[^a-z0-9+]+/g, "-") // Replace any character that is not a-z, 0-9, or "+" with a hyphen
      .replace(/-+/g, "+"); // Replace multiple hyphens with a single hyphen
  };
  const transformLabelCapitalize = (label) => {
    // Convert to capitalize
    return label.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  useEffect(() => {
    // Effect to handle filter updates
    let url = `${selectedMainCategory || ""}`;
    const params = new URLSearchParams();

    if (selectedSubmenu) {
      params.append("category", transformLabelToUrl(selectedSubmenu));
    }
    if (selectedSubMenuItem) {
      params.append("type", transformLabelToUrl(selectedSubMenuItem));
    }
    if (ratings) {
      params.append("ratings", ratings);
    }
    if (price[0] !== 0 || price[1] !== 30000) {
      params.append("price[gte]", price[0]);
      if (price[1] === 30000) {
        params.append("price[lte]", "30000");
      } else {
        params.append("price[lte]", price[1]);
      }
    }

    let paramString = params.toString();

    // Manually replace "%2B" with "+" to ensure correct URL formatting
    if (paramString) {
      paramString = paramString.replace(/%2B/g, "+");
      url += `?${paramString}`;
    }
    console.log(url, "Filter URL");

    dispatch(getFilterProduct(url));
    window.history.pushState(null, "", url);
  }, [
    selectedMainCategory,
    selectedSubmenu,
    selectedSubMenuItem,
    ratings,
    price,
    dispatch,
  ]);

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-[20%]">
            <p className="uppercase font-medium mb-5">Filters</p>
          </div>
          <div className="w-[80%] px-6">
            <div className="flex justify-between">
              <div>
                <p className="font-medium mb-5">
                  Showing {filterProducts.productsCount} results
                </p>
              </div>
              <div className="sortDrp">
                <Dropdown
                  label={`Sort by: ${sort}`}
                  dismissOnClick={false}
                  className="drpMenu"
                >
                  <Dropdown.Item
                    onClick={() => {
                      setSort("Relevance");
                    }}
                  >
                    Relevance
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setSort("Low to High");
                    }}
                  >
                    Price: Low to High
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setSort("High to Low");
                    }}
                  >
                    Price: High to Low
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setSort("Top Rated");
                    }}
                  >
                    Top Rated
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setSort("Newest");
                    }}
                  >
                    Newest
                  </Dropdown.Item>
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
                    {CurrencyFormat(price[0], 0)} -{" "}
                    {price[1] === 30000
                      ? `${CurrencyFormat(price[1], 0)}+`
                      : CurrencyFormat(price[1], 0)}
                  </span>
                </div>
                <Slider
                  getAriaLabel={() => "Minimum distance"}
                  value={price}
                  onChange={priceHandler}
                  valueLabelDisplay="off"
                  aria-labelledby="range-slider"
                  min={0}
                  max={30000}
                  disableSwap
                />
              </div>
              <div className="mt-4">
                <p className="font-bold text-sm uppercase mb-1">Category</p>
                <form className="text-[13px] font-medium text-gray-700">
                  {CategoryList.map((mainCategory, index) => (
                    <div key={index} className="">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedMainCategory === mainCategory.label}
                          className="form-checkbox h-3 w-3"
                          value={mainCategory.label}
                          onChange={(e) => handleCate(e)}
                        />
                        <span className="ml-2">{mainCategory.label}</span>
                      </label>
                      {selectedMainCategory === mainCategory.label && (
                        <div className="level2 ml-[14px] pb-2.5 pt-1">
                          {mainCategory.submenus.map(
                            (subCategory, subIndex) => (
                              <div key={subIndex} className="gap-3">
                                <label className="inline-flex items-center">
                                  <input
                                    type="checkbox"
                                    className="form-checkbox h-3 w-3"
                                    value={subCategory.label}
                                    checked={
                                      selectedSubmenu === subCategory.label
                                    }
                                  />
                                  <span className="ml-2">
                                    {subCategory.label}
                                  </span>
                                </label>
                                {selectedSubmenu === subCategory.label &&
                                  subCategory.items && (
                                    <div className="level2 ml-[14px] pb-2.5 pt-1">
                                      {subCategory.items.map(
                                        (item, itemIndex) => (
                                          <div key={itemIndex}>
                                            <label className="">
                                              <input
                                                type="checkbox"
                                                className="form-checkbox h-3 w-3"
                                                value={item}
                                                checked={
                                                  selectedSubMenuItem === item
                                                }
                                                onChange={() =>
                                                  handleSubmenuItem(item)
                                                }
                                              />
                                              <span className="ml-2">
                                                {item}
                                              </span>
                                            </label>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </form>
              </div>
              <div className="mt-4">
                <p className="font-bold">Life Stage</p>
                <form className="text-[13px] font-medium text-gray-700 pt-1">
                  {CategoryList[4].submenus.map((category, index) => (
                    <div key={index} className="flex gap-3">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-3 w-3"
                        />
                        <span className="ml-2">{category.label}</span>
                      </label>
                    </div>
                  ))}
                </form>
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
              {filterProducts?.products?.length > 0 ? (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 productSection">
                  {filterProducts.products
                    ? filterProducts.products.map((product) => (
                        <Product key={product._id} product={product} />
                      ))
                    : products.map((product) => (
                        <Product key={product._id} product={product} />
                      ))}
                </div>
              ) : (
                <div className="flex items-center justify-center flex-col">
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png?f=webp"
                    alt=""
                    width="300px"
                  />
                  <p className="text-3xl font-bold text-gray-800 mb-3 mt-5">
                    No Products Found
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
