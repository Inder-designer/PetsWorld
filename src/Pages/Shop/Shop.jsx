import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import PriceRange from "../../Component/PriceRange/PriceRange";
import { useBreadcrumbColor } from "../../Component/Breadcrumb/BreadcrumbContext";
import { Link } from "react-router-dom";

const Shop = () => {
  const { handleBreadcrumbColorChange } = useBreadcrumbColor();
  const breadcrumbColor = "#f2f2f6"; // Define your desired breadcrumb color here

  useEffect(() => {
    handleBreadcrumbColorChange(breadcrumbColor);
  }, [handleBreadcrumbColorChange, breadcrumbColor]);
  const [priceRange, setPriceRange] = useState([0, 500]);

  const handleSliderChange = (values) => {
    setPriceRange(values);
  };
  return (
    <div>
      <section className="shop-area-start grey-bg pb-200">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-12 col-md-12">
              <div className="tpshop__leftbar">
                <div className="tpshop__widget mb-30 pb-25">
                  <h4 className="tpshop__widget-title">Product Categories</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                      id="flexCheckDefault9"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault9">
                      Biscuits & Snacks (08)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault2">
                      Fresh Fruits (12)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                      id="flexCheckDefault3"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                      Exotic Fruits (09)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                      id="flexCheckDefault4"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault4">
                      Breads & Bakery (05)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault5"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault5">
                      Breakfast & Dairy (09)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault6"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault6">
                      Honey (05)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault7"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault7">
                      Milk & Flavoured (04)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault8"
                    />
                    <label className="form-check-label"htmlFor="flexCheckDefault8">
                      Meats & Seafood (08)
                    </label>
                  </div>
                </div>
                <div className="tpshop__widget mb-30 pb-25">
                  <PriceRange />
                </div>
                <div className="tpshop__widget mb-30 pb-25">
                  <h4 className="tpshop__widget-title mb-20">Filter by Color</h4>
                  <div className="tpshop__widget-color-box">
                    <div className="form-check">
                      <input
                        className="form-check-input black-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault12"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault12">
                        Black
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input blue-input"
                        type="checkbox"
                        value=""
                        checked
                        id="flexCheckChecked13"
                      />
                      <label className="form-check-label" htmlFor="flexCheckChecked13">
                        Blue
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input brown-input"
                        type="checkbox"
                        value=""
                        checked
                        id="flexCheckChecked18"
                      />
                      <label className="form-check-label" htmlFor="flexCheckChecked18">
                        Brown
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input grey-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked14"
                      />
                      <label className="form-check-label" htmlFor="flexCheckChecked14">
                        Gray
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input green-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked15"
                      />
                      <label className="form-check-label" htmlFor="flexCheckChecked15">
                        Green
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input orange-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked16"
                      />
                      <label className="form-check-label" htmlFor="flexCheckChecked16">
                        Yellow
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input red-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked17"
                      />
                      <label className="form-check-label" htmlFor="flexCheckChecked17">
                        Red
                      </label>
                    </div>
                  </div>
                </div>
                <div className="tpshop__widget mb-30 pb-25">
                  <h4 className="tpshop__widget-title">FILTER BY BRAND</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault18"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault18">
                      Chrome Hearts (15)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault19"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault19">
                      Dominique Aurientis (15)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                      id="flexCheckDefault20"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault20">
                      Galliano (15)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                      id="flexCheckDefault21"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault21">
                      Georgine (15)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault22"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault22">
                      Matthew Christopher (15)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault23"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault23">
                      Paul Gaultier (15)
                    </label>
                  </div>
                </div>
                <div className="tpshop__widget">
                  <h4 className="tpshop__widget-title">FILTER BY RATING</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault24"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault24">
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      (45)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                      id="flexCheckDefault25"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault25">
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      (10)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                      id="flexCheckDefault26"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault26">
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      (05)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault27"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault27">
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      (02)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault28"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault28">
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      <i className="icon-star_rate"></i>
                      (02)
                    </label>
                  </div>
                </div>
              </div>
              <div className="tpshop__widget">
                <div className="tpshop__sidbar-thumb mt-35">
                  <img src="./assets/img/shape/long.png" alt="" style={{width: '128%'}}/>
                </div>
              </div>
            </div>
            <div className="col-xl-10 col-lg-12 col-md-12">
              <div className="tpshop__top ml-60">
                <div
                  className="tpshop__banner mb-30"
                  style={{
                    backgroundImage: `url(assets/img/banner/dogBanner.png)`, backgroundPositionX:'-250px',height: '250px'
                  }}
                >
                  <div className="tpshop__content text-center">
                    <span>The Salad</span>
                    <h4 className="tpshop__content-title mb-20">
                      Fresh & Natural <br />
                      Healthy Food Special Offer
                    </h4>
                    <p>Do not miss the current offers of us!</p>
                  </div>
                </div>
                <div className="product__filter-content mb-40">
                  <div className="row align-items-center">
                    <div className="col-sm-4">
                      <div className="product__item-count">
                        <span>Showing 1 - 18 of 40 Products</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="tpproductnav tpnavbar product-filter-nav d-flex align-items-center justify-content-center">
                        <nav>
                          <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button
                              className="nav-link"
                              id="nav-all-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-all"
                              type="button"
                              role="tab"
                              aria-controls="nav-all"
                              aria-selected="false"
                            >
                              <i>
                                <svg
                                  width="22"
                                  height="16"
                                  viewBox="0 0 22 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M20 4C21.1046 4 22 3.10457 22 2C22 0.89543 21.1046 0 20 0C18.8954 0 18 0.89543 18 2C18 3.10457 18.8954 4 20 4Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M20 10C21.1046 10 22 9.10457 22 8C22 6.89543 21.1046 6 20 6C18.8954 6 18 6.89543 18 8C18 9.10457 18.8954 10 20 10Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M20 16C21.1046 16 22 15.1046 22 14C22 12.8954 21.1046 12 20 12C18.8954 12 18 12.8954 18 14C18 15.1046 18.8954 16 20 16Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </i>
                            </button>
                            <button
                              className="nav-link active"
                              id="nav-popular-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-popular"
                              type="button"
                              role="tab"
                              aria-controls="nav-popular"
                              aria-selected="true"
                            >
                              <i>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </i>
                            </button>
                            {/* <button
                              className="nav-link"
                              id="nav-product-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-product"
                              type="button"
                              role="tab"
                              aria-controls="nav-product"
                              aria-selected="false"
                            >
                              <i>
                                <svg
                                  width="20"
                                  height="16"
                                  viewBox="0 0 20 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M20 2C20 2.552 19.553 3 19 3H7C6.448 3 6 2.552 6 2C6 1.448 6.448 1 7 1H19C19.553 1 20 1.447 20 2Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M20 8C20 8.552 19.553 9 19 9H7C6.448 9 6 8.552 6 8C6 7.448 6.448 7 7 7H19C19.553 7 20 7.447 20 8Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M20 14C20 14.552 19.553 15 19 15H7C6.448 15 6 14.552 6 14C6 13.447 6.448 13 7 13H19C19.553 13 20 13.447 20 14Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </i>
                            </button> */}
                          </div>
                        </nav>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product__navtabs d-flex justify-content-end align-items-center">
                        <div className="tp-shop-selector">
                          <select style={{ display: "none" }}>
                            <option>Default sorting</option>
                            <option>Show 14</option>
                            <option>Show 08</option>
                            <option>Show 20</option>
                          </select>
                          <div className="nice-select" tabindex="0">
                            <span className="current">Default sorting</span>
                            <ul className="list">
                              <li data-value="Show 12" className="option selected">
                                Default sorting
                              </li>
                              <li data-value="Show 14" className="option">
                                Short popularity
                              </li>
                              <li data-value="Show 08" className="option">
                                Show 08
                              </li>
                              <li data-value="Show 20" className="option">
                                Show 20
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade"
                    id="nav-all"
                    role="tabpanel"
                    aria-labelledby="nav-all-tab"
                  >
                    <div className="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 tpproduct__shop-item">
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <Link to={'/product'} >
                              <img
                                src="./assets/img/product/product1.jpg"
                                alt=""
                              />
                            </Link>
                            <Link
                              className="tpproduct__thumb-img"
                              to={'/product'}
                            >
                              <img
                                src="./assets/img/product/product1.jpg"
                                alt=""
                              />
                            </Link>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>,
                              <a href="shop-details-3.html">Vagetables</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-top-.html">
                                Mangosteen Organic From VietNamese
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative">
                          <div className="tpproduct__thumb p-relative text-center">
                            <Link to={'/product'}>
                              <img
                                src="./assets/img/product/product2.jpg"
                                alt=""
                              />
                            </Link>
                            <Link
                              className="tpproduct__thumb-img"
                              to={'/product'}
                            >
                              <img
                                src="./assets/img/product/product2.jpg"
                                alt=""
                              />
                            </Link>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -40%
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-top.html">
                                Soda Sparkling Water Maker (Rose Gold)
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product3.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details-grid.html"
                            >
                              <img
                                src="./assets/img/product/product3.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -10%
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Vagetables</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details.html">
                                HOT - Lettuce Fresh Produce Fruit Vegetables
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product4.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/product4.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -90%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-grid.html">
                                Pure Irish Organic Beef Quarter Pounder Burgers
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product5.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details-grid.html"
                            >
                              <img
                                src="./assets/img/product/product5.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>,
                              <a href="shop-details-3.html">Vagetables</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-3.html">
                                Ginger Fresh, Whole, Organic - 250gram
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product6.png"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details-grid.html"
                            >
                              <img
                                src="./assets/img/product/product6.png"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -40%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-grid.html">
                                Laffy Taffy Laff Bites Gone Bananas - 4 Packs
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product7.png"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/product7.png"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details.html">Fresh Meat</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-top-.html">
                                Mangosteen Organic From VietNamese
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product1.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/product1.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -40%
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details.html">Fresh Meat</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-top.html">
                                Soda Sparkling Water Maker (Rose Gold)
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product2.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/product2.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -10%
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details.html">
                                HOT - Lettuce Fresh Produce Fruit Vegetables
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product4.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/product4.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -90%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-grid.html">
                                Pure Irish Organic Beef Quarter Pounder Burgers
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product3.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/product4.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Vagetables</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-3.html">
                                Ginger Fresh, Whole, Organic - 250gram
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active whight-product"
                    id="nav-popular"
                    role="tabpanel"
                    aria-labelledby="nav-popular-tab"
                  >
                    <div className="row row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 tpproduct__shop-item">
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <Link to={'/product'}>
                              <img
                                src="./assets/img/product/product1.jpg"
                                alt=""
                              />
                            </Link>
                            <Link
                              className="tpproduct__thumb-img"
                              to={'/product'}
                            >
                              <img
                                src="./assets/img/product/product1.jpg"
                                alt=""
                              />
                            </Link>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>,
                              <a href="shop-details-3.html">Vagetables</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-top-.html">
                                Mangosteen Organic From VietNamese
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product2.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details-grid.html"
                            >
                              <img
                                src="./assets/img/product/product2.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -40%
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-top.html">
                                Soda Sparkling Water Maker (Rose Gold)
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product3.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details-grid.html"
                            >
                              <img
                                src="./assets/img/product/product3.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -10%
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Vagetables</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details.html">
                                HOT - Lettuce Fresh Produce Fruit Vegetables
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product4.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details-grid.html"
                            >
                              <img
                                src="./assets/img/product/product4.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>,
                              <a href="shop-details-3.html">Vagetables</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-3.html">
                                Ginger Fresh, Whole, Organic - 250gram
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product6.png"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details-grid.html"
                            >
                              <img
                                src="./assets/img/product/product6.png"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -40%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-grid.html">
                                Laffy Taffy Laff Bites Gone Bananas - 4 Packs
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product7.png"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/product7.png"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details.html">Fresh Meat</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-top-.html">
                                Mangosteen Organic From VietNamese
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product5.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/product5.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -40%
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details.html">Fresh Meat</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-top.html">
                                Soda Sparkling Water Maker (Rose Gold)
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product1.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/product1.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -10%
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details.html">
                                HOT - Lettuce Fresh Produce Fruit Vegetables
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product4.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/product4.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -90%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-grid.html">
                                Pure Irish Organic Beef Quarter Pounder Burgers
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product2.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/product2.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Vagetables</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-3.html">
                                Ginger Fresh, Whole, Organic - 250gram
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product1.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details-grid.html"
                            >
                              <img
                                src="./assets/img/product/product1.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>,
                              <a href="shop-details-3.html">Vagetables</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-top-.html">
                                Mangosteen Organic From VietNamese
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tpproduct p-relative mb-20">
                          <div className="tpproduct__thumb p-relative text-center">
                            <a href="#">
                              <img
                                src="./assets/img/product/product2.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tpproduct__thumb-img"
                              href="shop-details-grid.html"
                            >
                              <img
                                src="./assets/img/product/product2.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -40%
                              </span>
                            </div>
                            <div className="tpproduct__shopping">
                              <a
                                className="tpproduct__shopping-wishlist"
                                href="wishlist.html"
                              >
                                <i className="icon-heart icons"></i>
                              </a>
                              <a className="tpproduct__shopping-wishlist" href="#">
                                <i className="icon-layers"></i>
                              </a>
                              <a className="tpproduct__shopping-cart" href="#">
                                <i className="icon-eye"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tpproduct__content">
                            <span className="tpproduct__content-weight">
                              <a href="shop-details-3.html">Fresh Fruits</a>
                            </span>
                            <h4 className="tpproduct__title">
                              <a href="shop-details-top.html">
                                Soda Sparkling Water Maker (Rose Gold)
                              </a>
                            </h4>
                            <div className="tpproduct__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <div className="tpproduct__price">
                              <span>$56.00</span>
                              <del>$19.00</del>
                            </div>
                          </div>
                          <div className="tpproduct__hover-text">
                            <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                              <a className="tp-btn-2" href="cart.html">
                                Add to cart
                              </a>
                            </div>
                            <div className="tpproduct__descrip">
                              <ul>
                                <li>Type: Organic</li>
                                <li>MFG: August 4.2021</li>
                                <li>LIFE: 60 days</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className="tab-pane fade whight-product"
                    id="nav-product"
                    role="tabpanel"
                    aria-labelledby="nav-product-tab"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
                          <div className="tplist__product-img">
                            <a href="#" className="tplist__product-img-one">
                              <img
                                src="./assets/img/product/product4.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tplist__product-img-two"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/products4.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                          </div>
                          <div className="tplist__content">
                            <span>500 gram</span>
                            <h4 className="tplist__content-title">
                              <a href="#">
                                Fresh Mangosteen 100% Organic From VietNamese
                              </a>
                            </h4>
                            <div className="tplist__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <ul className="tplist__content-info">
                              <li>Delicous Non-Dairy cheese sauce</li>
                              <li>Vegan & Allergy Friendly</li>
                              <li>Smooth, velvety Dairy free cheese sauce</li>
                            </ul>
                          </div>
                          <div className="tplist__price justify-content-end">
                            <h4 className="tplist__instock">
                              Availability: <span>92 in stock</span>{" "}
                            </h4>
                            <h3 className="tplist__count mb-15">$56.00</h3>
                            <button className="tp-btn-2 mb-10">Add to cart</button>
                            <div className="tplist__shopping">
                              <a href="#">
                                <i className="icon-heart icons"></i> wishlist
                              </a>
                              <a href="#">
                                <i className="icon-layers"></i>Compare
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
                          <div className="tplist__product-img">
                            <a href="#" className="tplist__product-img-one">
                              <img
                                src="./assets/img/product/products42-min.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tplist__product-img-two"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/products47-min.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                          </div>
                          <div className="tplist__content">
                            <span>500 gram</span>
                            <h4 className="tplist__content-title">
                              <a href="#">
                                Soda Sparkling Water Maker (Rose Gold)
                              </a>
                            </h4>
                            <div className="tplist__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <ul className="tplist__content-info">
                              <li>Delicous Non-Dairy cheese sauce</li>
                              <li>Vegan & Allergy Friendly</li>
                              <li>Smooth, velvety Dairy free cheese sauce</li>
                            </ul>
                          </div>
                          <div className="tplist__price justify-content-end">
                            <h4 className="tplist__instock">
                              Availability: <span>92 in stock</span>{" "}
                            </h4>
                            <h3 className="tplist__count mb-15">$56.00</h3>
                            <button className="tp-btn-2 mb-10">Add to cart</button>
                            <div className="tplist__shopping">
                              <a href="#">
                                <i className="icon-heart icons"></i> wishlist
                              </a>
                              <a href="#">
                                <i className="icon-layers"></i>Compare
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
                          <div className="tplist__product-img">
                            <a href="#" className="tplist__product-img-one">
                              <img
                                src="./assets/img/product/products43-min.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tplist__product-img-two"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/products46-min.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                          </div>
                          <div className="tplist__content">
                            <span>500 gram</span>
                            <h4 className="tplist__content-title">
                              <a href="#">
                                HOT - Lettuce Fresh Produce Fruit Vegetables
                              </a>
                            </h4>
                            <div className="tplist__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <ul className="tplist__content-info">
                              <li>Delicous Non-Dairy cheese sauce</li>
                              <li>Vegan & Allergy Friendly</li>
                              <li>Smooth, velvety Dairy free cheese sauce</li>
                            </ul>
                          </div>
                          <div className="tplist__price justify-content-end">
                            <h4 className="tplist__instock">
                              Availability: <span>92 in stock</span>{" "}
                            </h4>
                            <h3 className="tplist__count mb-15">$56.00</h3>
                            <button className="tp-btn-2 mb-10">Add to cart</button>
                            <div className="tplist__shopping">
                              <a href="#">
                                <i className="icon-heart icons"></i> wishlist
                              </a>
                              <a href="#">
                                <i className="icon-layers"></i>Compare
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
                          <div className="tplist__product-img">
                            <a href="#" className="tplist__product-img-one">
                              <img
                                src="./assets/img/product/products44-min.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tplist__product-img-two"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/products45-min.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                          </div>
                          <div className="tplist__content">
                            <span>500 gram</span>
                            <h4 className="tplist__content-title">
                              <a href="#">
                                Ginger Fresh, Whole, Organic - 250gram
                              </a>
                            </h4>
                            <div className="tplist__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <ul className="tplist__content-info">
                              <li>Delicous Non-Dairy cheese sauce</li>
                              <li>Vegan & Allergy Friendly</li>
                              <li>Smooth, velvety Dairy free cheese sauce</li>
                            </ul>
                          </div>
                          <div className="tplist__price justify-content-end">
                            <h4 className="tplist__instock">
                              Availability: <span>92 in stock</span>{" "}
                            </h4>
                            <h3 className="tplist__count mb-15">$56.00</h3>
                            <button className="tp-btn-2 mb-10">Add to cart</button>
                            <div className="tplist__shopping">
                              <a href="#">
                                <i className="icon-heart icons"></i> wishlist
                              </a>
                              <a href="#">
                                <i className="icon-layers"></i>Compare
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
                          <div className="tplist__product-img">
                            <a href="#" className="tplist__product-img-one">
                              <img
                                src="./assets/img/product/products45-min.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tplist__product-img-two"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/products41-min.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                          </div>
                          <div className="tplist__content">
                            <span>500 gram</span>
                            <h4 className="tplist__content-title">
                              <a href="#">
                                Laffy Taffy Laff Bites Gone Bananas - 4 Packs
                              </a>
                            </h4>
                            <div className="tplist__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <ul className="tplist__content-info">
                              <li>Delicous Non-Dairy cheese sauce</li>
                              <li>Vegan & Allergy Friendly</li>
                              <li>Smooth, velvety Dairy free cheese sauce</li>
                            </ul>
                          </div>
                          <div className="tplist__price justify-content-end">
                            <h4 className="tplist__instock">
                              Availability: <span>92 in stock</span>{" "}
                            </h4>
                            <h3 className="tplist__count mb-15">$56.00</h3>
                            <button className="tp-btn-2 mb-10">Add to cart</button>
                            <div className="tplist__shopping">
                              <a href="#">
                                <i className="icon-heart icons"></i> wishlist
                              </a>
                              <a href="#">
                                <i className="icon-layers"></i>Compare
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
                          <div className="tplist__product-img">
                            <a href="#" className="tplist__product-img-one">
                              <img
                                src="./assets/img/product/products46-min.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tplist__product-img-two"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/products42-min.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                          </div>
                          <div className="tplist__content">
                            <span>500 gram</span>
                            <h4 className="tplist__content-title">
                              <a href="#">Mangosteen Organic From VietNamese</a>
                            </h4>
                            <div className="tplist__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <ul className="tplist__content-info">
                              <li>Delicous Non-Dairy cheese sauce</li>
                              <li>Vegan & Allergy Friendly</li>
                              <li>Smooth, velvety Dairy free cheese sauce</li>
                            </ul>
                          </div>
                          <div className="tplist__price justify-content-end">
                            <h4 className="tplist__instock">
                              Availability: <span>92 in stock</span>{" "}
                            </h4>
                            <h3 className="tplist__count mb-15">$56.00</h3>
                            <button className="tp-btn-2 mb-10">Add to cart</button>
                            <div className="tplist__shopping">
                              <a href="#">
                                <i className="icon-heart icons"></i> wishlist
                              </a>
                              <a href="#">
                                <i className="icon-layers"></i>Compare
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
                          <div className="tplist__product-img">
                            <a href="#" className="tplist__product-img-one">
                              <img
                                src="./assets/img/product/products47-min.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tplist__product-img-two"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/products43-min.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                          </div>
                          <div className="tplist__content">
                            <span>500 gram</span>
                            <h4 className="tplist__content-title">
                              <a href="#">
                                Pure Irish Organic Beef Quarter Pounder Burgers
                              </a>
                            </h4>
                            <div className="tplist__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <ul className="tplist__content-info">
                              <li>Delicous Non-Dairy cheese sauce</li>
                              <li>Vegan & Allergy Friendly</li>
                              <li>Smooth, velvety Dairy free cheese sauce</li>
                            </ul>
                          </div>
                          <div className="tplist__price justify-content-end">
                            <h4 className="tplist__instock">
                              Availability: <span>92 in stock</span>{" "}
                            </h4>
                            <h3 className="tplist__count mb-15">$56.00</h3>
                            <button className="tp-btn-2 mb-10">Add to cart</button>
                            <div className="tplist__shopping">
                              <a href="#">
                                <i className="icon-heart icons"></i> wishlist
                              </a>
                              <a href="#">
                                <i className="icon-layers"></i>Compare
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
                          <div className="tplist__product-img">
                            <a href="#" className="tplist__product-img-one">
                              <img
                                src="./assets/img/product/products48-min.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="tplist__product-img-two"
                              href="shop-details.html"
                            >
                              <img
                                src="./assets/img/product/products44-min.jpg"
                                alt=""
                              />
                            </a>
                            <div className="tpproduct__info bage">
                              <span className="tpproduct__info-discount bage__discount">
                                -50%
                              </span>
                              <span className="tpproduct__info-hot bage__hot">
                                HOT
                              </span>
                            </div>
                          </div>
                          <div className="tplist__content">
                            <span>500 gram</span>
                            <h4 className="tplist__content-title">
                              <a href="#">
                                Fresh Mangosteen 100% Organic From VietNamese
                              </a>
                            </h4>
                            <div className="tplist__rating mb-5">
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                              <a href="#">
                                <i className="icon-star_outline1"></i>
                              </a>
                            </div>
                            <ul className="tplist__content-info">
                              <li>Delicous Non-Dairy cheese sauce</li>
                              <li>Vegan & Allergy Friendly</li>
                              <li>Smooth, velvety Dairy free cheese sauce</li>
                            </ul>
                          </div>
                          <div className="tplist__price justify-content-end">
                            <h4 className="tplist__instock">
                              Availability: <span>92 in stock</span>{" "}
                            </h4>
                            <h3 className="tplist__count mb-15">$56.00</h3>
                            <button className="tp-btn-2 mb-10">Add to cart</button>
                            <div className="tplist__shopping">
                              <a href="#">
                                <i className="icon-heart icons"></i> wishlist
                              </a>
                              <a href="#">
                                <i className="icon-layers"></i>Compare
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="basic-pagination text-center mt-35">
                  <nav>
                    <ul>
                      <li>
                        <span className="current">1</span>
                      </li>
                      <li>
                        <a href="blog.html">2</a>
                      </li>
                      <li>
                        <a href="blog.html">3</a>
                      </li>
                      <li>
                        <a href="blog.html">
                          <i className="icon-chevrons-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
