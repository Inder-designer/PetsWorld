import React, { useEffect, useState } from "react";
import "../../index.css";
import "./Header.css";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const [OpenSearch, setOpenSearch] = useState(false);
  const [OpenTpsideInfo, setOpenTpsideInfo] = useState(false);

  const handleToggleSearch = () => {
    setOpenSearch(!OpenSearch);
  };
  const handleToggleTpsideInfo = () => {
    setOpenTpsideInfo(!OpenTpsideInfo);
  };

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };
  return (
    <div className="" style={{ width: "100%" }}>
      <header>
        <div className={`header__top theme-bg-1 d-none d-md-block`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="header__top-left">
                  <span>
                    Due to the <strong>COVID-19</strong> epidemic, orders may be
                    processed with a slight delay.
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="header__top-right d-flex align-items-center">
                  <div className="header__top-link">
                    <Link to={"/contact"}>Contact Us</Link>
                    <Link htmlFor="#">Order Tracking</Link>
                    <Link htmlFor="faq.html">FAQs</Link>
                  </div>
                  <div className="header__lang">
                    {/* <span className="header__lang-select">
                      English <IoIosArrowDown />
                    </span> */}
                    <span className="header__lang-select">
                      English <i className="far fa-angle-down"></i>
                    </span>
                    <ul className="header__lang-submenu">
                      <li>
                        <Link htmlFor="#">Australia</Link>
                      </li>
                      <li>
                        <Link htmlFor="#">Spain</Link>
                      </li>
                      <li>
                        <Link htmlFor="#">Brazil</Link>
                      </li>
                      <li>
                        <Link htmlFor="#">English</Link>
                      </li>
                      <li>
                        <Link htmlFor="#">France</Link>
                      </li>
                      <li>
                        <Link htmlFor="#">United States</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top-price">
                    <select style={{ display: "none" }}>
                      <option>USD</option>
                      <option>ARS</option>
                      <option>AUD</option>
                      <option>BRL</option>
                      <option>GBP</option>
                      <option>DKK</option>
                      <option>EUR</option>
                    </select>
                    <div className="nice-select" tabindex="0">
                      <span className="current">USD</span>
                      <ul className="list">
                        <li data-value="USD" className="option selected">
                          USD
                        </li>
                        <li data-value="ARS" className="option">
                          ARS
                        </li>
                        <li data-value="AUD" className="option">
                          AUD
                        </li>
                        <li data-value="BRL" className="option">
                          BRL
                        </li>
                        <li data-value="GBP" className="option">
                          GBP
                        </li>
                        <li data-value="DKK" className="option">
                          DKK
                        </li>
                        <li data-value="EUR" className="option">
                          EUR
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="header__main-area d-none d-xl-block">
          <div className="container">
            <div className="header__for-megamenu p-relative">
              <div className="row align-items-center">
                <div className="col-xl-2">
                  <div className="header__logo">
                    <Link htmlFor="index.html">
                      <img src="./assets/img/logo/PEts_WORLD_1.png" width="200px" alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="header__menu main-menu text-center">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown has-homemenu">
                          <Link to={`/dogs`}>Dogs</Link>
                          <ul
                            className="sub-menu mega-menu"
                          >
                            <li className="level1">
                              <Link
                                to={`/dogs/food`}
                                className="mega-menu-title"
                              >
                                Food
                              </Link>
                              <ul>
                                <li>
                                  <Link to={"/shop"}>Dry </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-2.html">Wet</Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-2.html">Puppy</Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-2.html">Premium</Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-3.html">Veterinary Diet</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">Treats</Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Sticks
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-grid.html">
                                    Bones
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Biscuits
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Dental Treats
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Spiral Treats
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-top.html">
                                    Training Treats
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-top.html">
                                    Sausages
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">Toys</Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                   Puppy Chew Toys
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Soft Toys
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Ball Toys
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Bone Toys
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Rope & Pull Toys
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Interactive Toys
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Other Toys
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Bowls & Feeders
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Steel Bowls
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Melamine Bowls
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Plastic Bowls
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Adjustable Bowls
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Double Bowls
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Water Bottles
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">Grooming</Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Shampoos & Conditioners
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Wet Tissues
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                  Brushes & Combs
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Nail Cutters & Hair Trimmers
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Paw Care
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                   Deo's & Perfumes
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Hair Care
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Clothing
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    T-Shirts & Shirts
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Winter Jackets & Sweaters
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Raincoats & Shoes
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Bows & Bandana
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Premium Collecction
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Leashes, Collars & Harness
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Leash & Harness
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Leash & Collars
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Rope Leashes
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Collars
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Harness
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Cages & Carriers
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Steel Cages
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Fiber Cages
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    IATA Cages
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Carry Bags
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Supplements
                              </Link>
                              <ul>
                                <li>
                                  <Link to={"/product"}>Vitamins & Calcium</Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-grid.html">
                                    Hair Supplements
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-top.html">
                                    Joints
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Liver Supplements & Digestive
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">Health & Hygiene</Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Trainning Pads & Diapers
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Wipes
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Puppy Training Products
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Towels
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Bathing Gloves & Hair Removers
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Paw Cleaners
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Dental Care
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Scoopers
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Ear & Eye Wipes
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Bedding
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Beds
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Mattresses
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Huts
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Cot Beds
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Blankets
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Cooling Mats
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Premium Collection
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown has-megamenu">
                          <Link to={`/cats`}>Cats</Link>
                          <ul
                            className="sub-menu mega-menu"
                          >
                            <li className="level1">
                              <Link
                                to={`/dogs/food`}
                                className="mega-menu-title"
                              >
                                Food
                              </Link>
                              <ul>
                                <li>
                                  <Link to={"/shop"}>Dry </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-2.html">Wet</Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-2.html">Kitten</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">Treats</Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Creamy Treats
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-grid.html">
                                    Chicken Treats
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Fish Treats
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Cat Biscuits
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">Toys</Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                   Teasing Toys
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Catnip Toys
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Soft Toys
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Interactive Toys
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Cat Trees
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Scratchers
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Other Toys
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Bowls & Feeders
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Steel Bowls
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Melamine Bowls
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Plastic Bowls
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Double Bowls
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Water Bottles & Fountains
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Litter & Accessories
                              </Link>
                              <ul>
                                <li>
                                  <Link to={"/product"}>Litter</Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-grid.html">
                                    Deodorizers & Scroopers
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-top.html">
                                    Little Boxes
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Premium Cat Litter
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">Grooming</Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Shampoos & Conditioners
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Wet Tissues
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                  Brushes & Combs
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Nail Cutters & Hair Trimmers
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Paw Care
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                   Deo's & Perfumes
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Hair Care
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Clothing
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    T-Shirts & Shirts
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Winter Jackets & Sweaters
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Bows & Bandana
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Premium Collecction
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Leashes, Collars & Harness
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Leash & Harness
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Leash & Collars
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Collars
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Harness
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Cages & Carriers
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Steel Cages
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Fiber Cages
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    IATA Cages
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Carry Bags
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">Health & Hygiene</Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Trainning Pads & Diapers
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Wipes
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Towels
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Bathing Gloves & Hair Removers
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Paw Cleaners
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Dental Care
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Scoopers
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Bedding
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Beds
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Mattresses
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Cat House & Huts
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Blankets
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Premium Collection
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown has-megamenu">
                          <Link to={`/small-pets`}>Others Pets</Link>
                          <ul className="sub-menu mega-menu OtherPets">
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Foods
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Bird Foods
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Rabbit Food
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Hamster & Guinea Pig
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Fish & Turtle Food
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Treats
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Calcium Treats
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Hays
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-4.html">
                                    Smackers
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Cages, Carriers & Toys
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                    Bird Cages
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                    Toys
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="level1">
                              <Link className="mega-menu-title">
                                Health & Hygiene & Supplements
                              </Link>
                              <ul>
                                <li>
                                  <Link htmlFor="shop-details.html">
                                  Vitamins & Calcium
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                  Wood Shaving
                                  </Link>
                                </li>
                                <li>
                                  <Link htmlFor="shop-details-3.html">
                                  Wipes
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown has-megamenu brand_menu">
                          <Link htmlFor="about.html">Brands</Link>
                          <ul className="sub-menu mega-menu">
                            <Tabs
                              defaultActiveKey="home"
                              transition={false}
                              id="noanim-tab-example"
                              className="mb-2"
                            >
                              <Tab eventKey="home" title="Dogs">
                                <ul className="brands_ul">
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Pedigree-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/PedigreePro-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/RoyaCanin-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Orijen-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Acana-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Drools-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Purepet-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Chappi-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Purina-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/SmartHeart-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Farmina-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/VetLife-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Calibra-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Himalaya-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/PetStar-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Signature-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Gnawlers-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/FirstBark-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Goodies-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Jerhigh_Logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Marvo-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Petaholic-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Wanpy-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Superbone-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Chipchop-Logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Pawpaya-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Rena-Logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>   
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/BowJerky-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Dogaholic-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Moochie-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li> 
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Woofy-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li> 
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Trixie-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li> 
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Beeps-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li> 
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Petkin-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li> 
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/SimpleSolution-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li> 
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Forcans-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li> 
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/OUTpetcare-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li> 
                                </ul>
                              </Tab>
                              <Tab eventKey="cat" title="Cats">
                                <ul className="brands_ul">
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Purepet-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Himalaya-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Signature-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Whiskas-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Me-O-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Drools-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Mattise-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Bellotta-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Gnawlers-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/FirstMeow-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Goodies-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Sheba-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Temptations-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/KiteKat-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Marvo-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Petaholic-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Pawpaya-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/KittyLicks-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Moochie-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Trixie-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li> 
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Petkin-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li> 
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/SimpleSolution-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li> 
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Forcans-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li> 
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/OUTpetcare-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li> 
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Cataholic-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>   
                                </ul>
                              </Tab>
                              <Tab eventKey="others" title="Other Pets">
                                <ul className="brands_ul">
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Pawpaya-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src="./assets/img/brand/Trixie-logo.png"
                                        alt=""
                                        width="111"
                                        height="111"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </Tab>
                            </Tabs>
                          </ul>
                          {/* <ul className="sub-menu">
                            <li>
                              <Link to={"/shop"}>Shop Page</Link>
                            </li>
                            <li>
                              <Link to={"/product"}>Product Page</Link>
                            </li>
                            <li>
                              <Link to={"/faq"}>FAQs</Link>
                            </li>
                            <li>
                              <Link to={"/checkout"}>Checkout</Link>
                            </li>
                            <li>
                              <Link to={"/cart"}>Cart Page</Link>
                            </li>
                            <li>
                              <Link to={"/wishlist"}>Wishlist</Link>
                            </li>
                            <li>
                              <Link to={"/sign-in"}>Sign In</Link>
                            </li>
                          </ul> */}
                        </li>
                        <li className="has-dropdown brands">
                          <Link htmlFor="about.html">Age Groups</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link htmlFor="blog.html">Puppy</Link>
                            </li>
                            <li>
                              <Link htmlFor="blog-right-sidebar.html">
                                Kitten
                              </Link>
                            </li>
                            <li>
                              <Link htmlFor="blog-left-sidebar.html">
                                Adult
                              </Link>
                            </li>
                            <li>
                              <Link htmlFor="blog-details.html">Senior</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to={"/blog"}>Blog</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2">
                  <div className="header__info d-flex align-items-center">
                    <div className="header__info-search tpcolor__purple ml-10">
                      <button
                        className="tp-search-toggle"
                        onClick={handleToggleSearch}
                      >
                        <i className="icon-search"></i>
                      </button>
                    </div>
                    <div className="header__info-user tpcolor__yellow ml-10">
                      <Link to={"/sign-in"}>
                        <i className="icon-user"></i>
                      </Link>
                    </div>
                    <div className="header__info-wishlist tpcolor__greenish ml-10">
                      <Link to={"/wishlist"}>
                        <i className="icon-heart icons"></i>
                      </Link>
                    </div>
                    <div className="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle">
                      <button onClick={handleOpenCart}>
                        <i>
                          <img src="./assets/img/icon/cart-1.svg" alt="" />
                        </i>
                        <span>5</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* header-search  */}
        <div
          className={`tpsearchbar tp-sidebar-area ${
            OpenSearch ? "tp-searchbar-opened" : ""
          }`}
        >
          <button className="tpsearchbar__close" onClick={handleToggleSearch}>
            <i className="icon-x"></i>
          </button>
          <div className="search-wrap text-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-6 pt-100 pb-100">
                  <h2 className="tpsearchbar__title">
                    What Are You Looking For?
                  </h2>
                  <div className="tpsearchbar__form">
                    <form action="#">
                      <input
                        type="text"
                        name="search"
                        placeholder="Search Product..."
                      />
                      <button className="tpsearchbar__search-btn">
                        <i className="icon-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`search-body-overlay ${OpenSearch ? "opened" : ""}`}
          onClick={handleToggleSearch}
        ></div>
        {/* header-search-end  */}

        {/* header-cart-start  */}
        <div
          className={`tp-cart-info-area tpcartinfo p-relative ${
            openCart ? "tp-sidebar-opened" : ""
          }`}
        >
          <button className="tpcart__close" onClick={handleCloseCart}>
            <i className="icon-x"></i>
          </button>
          <div className="tpcart">
            <h4 className="tpcart__title">Your Cart</h4>
            <div className="tpcart__product">
              <div className="tpcart__product-list">
                <ul>
                  <li>
                    <div className="tpcart__item">
                      <div className="tpcart__img">
                        <img src="./assets/img/product/product1.jpg" alt="" />
                        <div className="tpcart__del">
                          <Link htmlFor="#">
                            <i className="icon-x-circle"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="tpcart__content">
                        <span className="tpcart__content-title">
                          <Link htmlFor="shop-details.html">
                            Stacy's Pita Chips Parmesan Garlic & Herb From
                            Nature
                          </Link>
                        </span>
                        <div className="tpcart__cart-price">
                          <span className="quantity">1 x</span>
                          <span className="new-price">$162.80</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="tpcart__item">
                      <div className="tpcart__img">
                        <img src="./assets/img/product/product2.jpg" alt="" />
                        <div className="tpcart__del">
                          <Link htmlFor="#">
                            <i className="icon-x-circle"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="tpcart__content">
                        <span className="tpcart__content-title">
                          <Link htmlFor="shop-details.html">
                            Banana, Beautiful Skin, Good For Health 1Kg
                          </Link>
                        </span>
                        <div className="tpcart__cart-price">
                          <span className="quantity">1 x</span>
                          <span className="new-price">$138.00</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="tpcart__item">
                      <div className="tpcart__img">
                        <img src="./assets/img/product/product3.jpg" alt="" />
                        <div className="tpcart__del">
                          <Link htmlFor="#">
                            <i className="icon-x-circle"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="tpcart__content">
                        <span className="tpcart__content-title">
                          <Link htmlFor="shop-details.html">
                            Quaker Popped Rice Crisps Snacks Chocolate
                          </Link>
                        </span>
                        <div className="tpcart__cart-price">
                          <span className="quantity">1 x</span>
                          <span className="new-price">$162.8</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tpcart__checkout">
                <div className="tpcart__total-price d-flex justify-content-between align-items-center">
                  <span> Subtotal:</span>
                  <span className="heilight-price"> $300.00</span>
                </div>
                <div className="tpcart__checkout-btn">
                  <Link className="tpcart-btn mb-10" htmlFor="cart.html">
                    View Cart
                  </Link>
                  <Link className="tpcheck-btn" htmlFor="checkout.html">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
            <div className="tpcart__free-shipping text-center">
              <span>
                Free shipping for orders <b>under 10km</b>
              </span>
            </div>
          </div>
        </div>
        <div
          className={`cartbody-overlay ${openCart ? "opened" : ""}`}
          onClick={handleCloseCart}
        ></div>
        {/* <!-- header-cart-end  */}

        {/* <!-- mobile-menu-area  */}
        <div
          id="header-sticky-2"
          className="tpmobile-menu secondary-mobile-menu d-xl-none"
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-3 col-sm-3">
                <div className="mobile-menu-icon">
                  <button className="tp-menu-toggle" onClick={handleToggleTpsideInfo}>
                    <i className="icon-menu1"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-6 col-sm-4">
                <div className="header__logo text-center">
                  <Link htmlFor="index.html">
                    {/* <img src="./assets/img/logo/android-chrome-512x512.png" width='48px' alt="logo" /> */}
                    <img src="./assets/img/logo/PEts_WORLD_1.png" width='200px' alt="logo" />

                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-3 col-sm-5">
                <div className="header__info d-flex align-items-center">
                  <div className="header__info-search tpcolor__purple ml-10 d-none d-sm-block">
                    <button className="tp-search-toggle">
                      <i className="icon-search"></i>
                    </button>
                  </div>
                  <div className="header__info-user tpcolor__yellow ml-10 d-none d-sm-block">
                    <Link htmlFor="#">
                      <i className="icon-user"></i>
                    </Link>
                  </div>
                  <div className="header__info-wishlist tpcolor__greenish ml-10 d-none d-sm-block">
                    <Link htmlFor="#">
                      <i className="icon-heart icons"></i>
                    </Link>
                  </div>
                  <div className="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle">
                    <button>
                      <i>
                        <img src="./assets/img/icon/cart-1.svg" alt="" />
                      </i>
                      <span>5</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`body-overlay ${OpenTpsideInfo ? "opened" : ""}`}  onClick={handleToggleTpsideInfo}></div>
        {/* <!-- mobile-menu-area-end  */}

        {/* <!-- sidebar-menu-area  */}
        <div className={`tpsideinfo ${OpenTpsideInfo ? "tp-sidebar-opened" : ""}`}>
          <button className="tpsideinfo__close"  onClick={handleToggleTpsideInfo}>
            Close<i className="fal fa-times ml-10"></i>
          </button>
          <div className="tpsideinfo__search text-center pt-35">
            <span className="tpsideinfo__search-title mb-20">
              What Are You Looking For?
            </span>
            <form action="#">
              <input type="text" placeholder="Search Products..." />
              <button>
                <i className="icon-search"></i>
              </button>
            </form>
          </div>
          <div className="tpsideinfo__account-link">
            <Link htmlFor="log-in.html">
              <i className="icon-user icons"></i> Login / Register
            </Link>
          </div>
          <div className="tpsideinfo__wishlist-link">
            <Link htmlFor="wishlist.html" target="_parent">
              <i className="icon-heart"></i> Wishlist
            </Link>
          </div>
        </div>
        {/* sidebar-menu-area-end  */}
      </header>
    </div>
  );
};

export default Header;
