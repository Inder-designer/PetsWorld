import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getFilterProduct } from "../actions/productAction";
import { Slider } from "@mui/material";
import CurrencyFormat from "../helpers/CurrencyFormatter";
import { Dropdown } from "flowbite-react";
import Loading from "../components/Loading";
import axios from "axios";
import { API_URL } from "../constants/apiConstants";
import { filterProducts } from "../components/productFilters/productFilters";
import ProductSkeleton from "../components/LoadingShimmers/ProductSkeleton";
import DiscountPrice from "../helpers/DiscountPrice";

const ShopPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [sort, setSort] = useState("Relevance");
  const [price, setPrice] = useState([0, 30000]);
  const [categories, setCategories] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [filterAttr, setFilterAttr] = useState([]);
  const [filterAttrValues, setFilterAttrValues] = useState([]);
  const [ratings, setRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubmenu, setSelectedSubmenu] = useState("");
  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState("");
  const { isLoading, products } = useSelector((state) => state.filterProducts);
  const { isLoading: allIsLoading, products: allproducts } = useSelector(
    (state) => state.products
  );

  const { categoryName } = useParams();
  const category = new URLSearchParams(location.search).get("category");
  const type = new URLSearchParams(location.search).get("type");

  const minDistance = 1000;
  const priceHandler = (event, newPrice, activeThumb) => {
    if (!Array.isArray(newPrice)) return;
    setPrice((prev) => [
      activeThumb === 0
        ? Math.min(newPrice[0], prev[1] - minDistance)
        : prev[0],
      activeThumb === 1
        ? Math.max(newPrice[1], prev[0] + minDistance)
        : prev[1],
    ]);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(`${API_URL}/categories`);
        setCategories(res.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    const getAttributes = async () => {
      try {
        const res = await axios.get(`${API_URL}/attributes`);
        setAttributes(res.data.attributes);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
    getAttributes();
  }, []);

  useEffect(() => {
    setSelectedCategory(categoryName || "");
    setSelectedSubmenu(category || "");
    setSelectedSubMenuItem(type || "");
  }, [location]);

  const updateURL = (newCategory, newSubmenu, newSubmenuItem) => {
    const params = new URLSearchParams();
    if (newSubmenu) params.set("category", newSubmenu);
    if (newSubmenuItem) params.set("type", newSubmenuItem);

    navigate({
      pathname: newCategory ? `/shop/${newCategory}` : "/shop",
      search: params.toString(),
    });
  };

  const handleMainCategoryChange = (e) => {
    const { value, checked } = e.target;
    const newCategory = checked ? value : "";
    setSelectedCategory(newCategory);
    setSelectedSubmenu("");
    setSelectedSubMenuItem("");
    setFilterAttrValues([]);
    if (!checked && !selectedSubmenu && !selectedSubMenuItem) {
      updateURL("", "", "");
    } else {
      updateURL(newCategory, "", "");
    }
  };
  const handleSubmenuChange = (submenuLabel) => {
    const newSubmenu = selectedSubmenu === submenuLabel ? "" : submenuLabel;
    setSelectedSubmenu(newSubmenu);
    setSelectedSubMenuItem("");
    updateURL(selectedCategory, newSubmenu, "");
  };
  const handleSubmenuItemChange = (submenuItemLabel) => {
    const newSubmenuItem =
      selectedSubMenuItem === submenuItemLabel ? "" : submenuItemLabel;
    setSelectedSubMenuItem(newSubmenuItem);
    updateURL(selectedCategory, selectedSubmenu, newSubmenuItem);
  };

  useEffect(() => {
    // Parse the URL parameters on initial load
    const params = new URLSearchParams(location.search);
    const initialCategory = categoryName || "";
    const initialSubmenu = params.get("category") || "";
    const initialSubMenuItem = params.get("type") || "";

    // Set initial filter states from URL parameters
    setSelectedCategory(initialCategory);
    setSelectedSubmenu(initialSubmenu);
    setSelectedSubMenuItem(initialSubMenuItem);

    // Build URL for API call
    let url = `${initialCategory.replace(" ", "+")}`;
    if (initialSubmenu) {
      url += `?category=${initialSubmenu.replace(" ", "+")}`;
    }
    if (initialSubMenuItem) {
      url += `${initialSubmenu ? "&" : "?"}type=${initialSubMenuItem.replace(
        " ",
        "+"
      )}`;
    }

    // Dispatch action to fetch filtered products
    dispatch(getFilterProduct(url));
  }, [location, dispatch, categoryName]);

  useEffect(() => {
    if (attributes) {
      console.log(attributes);
      const filteredAttributes = attributes.filter(
        (e) =>
          e.level0.includes(selectedCategory) &&
          (e.variant === "no" || e.variant === "false")
      );
      console.log("filterAttr:", filteredAttributes);
      setFilterAttr(filteredAttributes);
    }
  }, [attributes, selectedCategory]);

  const handleAttr = (name, value) => {
    setFilterAttrValues((prev) => {
      // Find the index of the attribute with the same name
      const attrIndex = prev.findIndex((attr) => attr.name === name);

      if (attrIndex !== -1) {
        // If the attribute exists, check if the value is already in the values array
        const attr = prev[attrIndex];
        const values = attr.values.includes(value)
          ? attr.values.filter((v) => v !== value) // If exists, remove the value
          : [...attr.values, value]; // If not, add the value

        // If values array becomes empty, remove the attribute object from the array
        if (values.length === 0) {
          return [...prev.slice(0, attrIndex), ...prev.slice(attrIndex + 1)];
        }

        // Return the updated state with the modified attribute
        return [
          ...prev.slice(0, attrIndex),
          { ...attr, values },
          ...prev.slice(attrIndex + 1),
        ];
      } else {
        // If the attribute doesn't exist, add it with the new value
        return [...prev, { name, values: [value] }];
      }
    });
  };

  useEffect(() => {
    console.log(filterAttrValues);
  }, [filterAttrValues]);

  const filteredProducts = (
    selectedCategory ? products || [] : allproducts || []
  ).filter((product) => {
    const withinPriceRange =
      DiscountPrice(product.price, product.discount) >= price[0] &&
      DiscountPrice(product.price, product.discount) <= price[1];

    const meetsRatingRequirement = product.ratings >= ratings;

    // Check if the product matches all selected attribute filters
    const matchesAllAttributes = filterAttrValues.every((filterAttr) => {
      // Find the product's attribute by name
      const productAttr = product.attributes.find(
        (attr) => attr.name === filterAttr.name
      );

      // Check if product's attribute has any of the values in filterAttr
      return (
        productAttr &&
        filterAttr.values.some((value) => productAttr.values.includes(value))
      );
    });

    return withinPriceRange && meetsRatingRequirement && matchesAllAttributes;
  });

  console.log([
    { products: products },
    { filteredProducts: filteredProducts },
    { price: price },
    { categories: categories },
    { attributes: attributes },
    { selectedCategory: selectedCategory },
    { selectedSubmenu: selectedSubmenu },
    { selectedSubMenuItem: selectedSubMenuItem },
  ]);

  const sortedAndFilteredProducts = filteredProducts.sort((a, b) => {
    switch (sort) {
      case "Low to High":
        return (
          DiscountPrice(a.price, a.discount) -
          DiscountPrice(b.price, b.discount)
        );
      case "High to Low":
        return (
          DiscountPrice(b.price, b.discount) -
          DiscountPrice(a.price, a.discount)
        );
      case "Top Rated":
        return b.ratings - a.ratings;
      case "Newest":
        return new Date(b.createdAt) - new Date(a.createdAt); // Assumes products have a releaseDate property
      default:
        return 0; // Relevance or default sorting
    }
  });
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex items-center mb-4">
          <div className="w-[20%]">
            <p className="uppercase font-medium">Filters</p>
          </div>
          <div className="w-[80%] px-6">
            <div className="flex justify-between items-center">
              <p className="font-medium">
                Showing {filteredProducts.length} results
              </p>
              <Dropdown
                label={`Sort by: ${sort}`}
                dismissOnClick={false}
                className="drpMenu"
              >
                {[
                  "Relevance",
                  "Low to High",
                  "High to Low",
                  "Top Rated",
                  "Newest",
                ].map((label) => (
                  <Dropdown.Item key={label} onClick={() => setSort(label)}>
                    {label}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-[20%] p-5 border-r">
              {/* Price Filter */}
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
                  value={price}
                  onChange={priceHandler}
                  min={0}
                  max={30000}
                  disableSwap
                />
              </div>

              {/* Category Filter */}
              <div className="mt-4">
                <p className="font-bold text-sm uppercase mb-1">Category</p>
                <form className="text-[13px] font-medium text-gray-700">
                  {categories.map((mainCategory, index) => (
                    <div key={index}>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-3 w-3"
                          checked={selectedCategory === mainCategory.level0}
                          value={mainCategory.level0}
                          onChange={handleMainCategoryChange}
                        />
                        <span className="ml-2 capitalize">
                          {mainCategory.level0}
                        </span>
                      </label>
                      {selectedCategory === mainCategory.level0 && (
                        <div className="level1 ml-[14px] pb-2.5 pt-1">
                          {mainCategory.level1.map((subCategory, subIndex) => (
                            <div key={subIndex}>
                              <label className="inline-flex items-center">
                                <input
                                  type="checkbox"
                                  className="form-checkbox h-3 w-3"
                                  checked={selectedSubmenu === subCategory.name}
                                  value={subCategory.name}
                                  onChange={() =>
                                    handleSubmenuChange(subCategory.name)
                                  }
                                />
                                <span className="ml-2 capitalize">
                                  {subCategory.name}
                                </span>
                              </label>
                              {selectedSubmenu === subCategory.name &&
                                subCategory.level2.length > 0 && (
                                  <div className="level2 ml-[14px] pb-2.5 pt-1">
                                    {subCategory.level2.map(
                                      (item, itemIndex) => (
                                        <div key={itemIndex}>
                                          <label>
                                            <input
                                              type="checkbox"
                                              className="form-checkbox h-3 w-3"
                                              checked={
                                                selectedSubMenuItem ===
                                                item.name
                                              }
                                              value={item.name}
                                              onChange={() =>
                                                handleSubmenuItemChange(
                                                  item.name
                                                )
                                              }
                                            />
                                            <span className="ml-2">
                                              {item.name}
                                            </span>
                                          </label>
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </form>
              </div>

              {/* Dynamic Rating */}
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
              <div className="mt-4">
                {filterAttr.map((attr, attrIndex) => (
                  <div key={attrIndex} className="mt-4">
                    <p className="font-bold text-sm uppercase mb-1">
                      {attr.name}
                    </p>
                    {attr.values.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <label>
                          <input
                            type="checkbox"
                            className="form-checkbox h-3 w-3"
                            checked={filterAttrValues.some(
                              (filter) =>
                                filter.name === attr.name &&
                                filter.values.includes(item)
                            )}
                            value={item}
                            onChange={() => handleAttr(attr.name, item)}
                          />
                          <span className="ml-2 capitalize">{item}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Attributes */}

            {/* Products Display */}
            <div className="w-[80%] px-6 pt-6">
              {isLoading ? (
                <div className="grid grid-cols-4 gap-4">
                  <ProductSkeleton />
                  <ProductSkeleton />
                </div>
              ) : sortedAndFilteredProducts.length > 0 ? (
                <div className="grid grid-cols-4 gap-4">
                  {sortedAndFilteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <p className="mt-10 text-center text-2xl font-semibold text-gray-800">
                  No Product
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
