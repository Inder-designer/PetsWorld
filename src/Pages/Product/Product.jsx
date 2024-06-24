import React, { useEffect } from "react";
import "./Product.css";
import { useBreadcrumbColor } from "../../Component/Breadcrumb/BreadcrumbContext";

const Product = () => {
  const { handleBreadcrumbColorChange } = useBreadcrumbColor();
  const breadcrumbColor = "#f2f2f6"; // Define your desired breadcrumb color here

  useEffect(() => {
    handleBreadcrumbColorChange(breadcrumbColor);
  }, [handleBreadcrumbColorChange, breadcrumbColor]);
  return (
    <div>
      <section className="shopdetails-area grey-bg pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12">
              <div className="tpdetails__area mr-60 pb-30">
                <div className="tpdetails__product mb-30">
                  <div className="tpdetails__title-box">
                    <h3 className="tpdetails__title">
                      Pure Irish Organic 4 Beef Quarter Pounder Burgers - 1Kg
                    </h3>
                    <ul className="tpdetails__br/and">
                      <li>
                        {" "}
                        Br/ands: <a href="#">ORFARM</a>{" "}
                      </li>
                      <li>
                        <i className="icon-star_outline1"></i>
                        <i className="icon-star_outline1"></i>
                        <i className="icon-star_outline1"></i>
                        <i className="icon-star_outline1"></i>
                        <i className="icon-star_outline1"></i>
                        <b>02 Reviews</b>
                      </li>
                      <li>
                        SKU: <span>ORFARMVE005</span>
                      </li>
                    </ul>
                  </div>
                  <div className="tpdetails__box">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="tpproduct-details__nab">
                          <div className="tab-content" id="nav-tabContents">
                            <div
                              className="tab-pane fade show active w-img"
                              id="nav-home"
                              role="tabpanel"
                              aria-labelledby="nav-home-tab"
                              tabindex="0"
                            >
                              <img
                                src="./assets/img/product/pp1.png"
                                alt=""
                              />
                              <div className="tpproduct__info bage">
                                <span className="tpproduct__info-hot bage__hot">
                                  HOT
                                </span>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade w-img"
                              id="nav-profile"
                              role="tabpanel"
                              aria-labelledby="nav-profile-tab"
                              tabindex="0"
                            >
                              <img
                                src="./assets/img/product/pp2.png"
                                alt=""
                              />
                              <div className="tpproduct__info bage">
                                <span className="tpproduct__info-discount bage__discount">
                                  -90%
                                </span>
                                <span className="tpproduct__info-hot bage__hot">
                                  HOT
                                </span>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade w-img"
                              id="nav-4"
                              role="tabpanel"
                              aria-labelledby="nav-4-tab"
                              tabindex="0"
                            >
                              <img
                                src="./assets/img/product/pp3.png"
                                alt=""
                              />
                              <div className="tpproduct__info bage">
                                <span className="tpproduct__info-hot bage__hot">
                                  HOT
                                </span>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade w-img"
                              id="nav-contact"
                              role="tabpanel"
                              aria-labelledby="nav-contact-tab"
                              tabindex="0"
                            >
                              <img
                                src="./assets/img/product/pp4.png"
                                alt=""
                              />
                              <div className="tpproduct__info bage">
                                <span className="tpproduct__info-hot bage__hot">
                                  HOT
                                </span>
                              </div>
                            </div>
                          </div>
                          <nav>
                            <div
                              className="nav nav-tabs justify-content-center"
                              id="nav-tab"
                              role="tablist"
                            >
                              <button
                                className="nav-link active"
                                id="nav-home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-home"
                                type="button"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                              >
                                <img
                                  src="./assets/img/product/pp1.png"
                                  alt=""
                                />
                              </button>
                              <button
                                className="nav-link"
                                id="nav-profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-profile"
                                type="button"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                              >
                                <img
                                  src="./assets/img/product/pp2.png"
                                  alt=""
                                />
                              </button>
                              <button
                                className="nav-link"
                                id="nav-4-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-4"
                                type="button"
                                role="tab"
                                aria-controls="nav-4"
                                aria-selected="false"
                              >
                                <img
                                  src="./assets/img/product/pp3.png"
                                  alt=""
                                />
                              </button>
                              <button
                                className="nav-link"
                                id="nav-contact-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-contact"
                                type="button"
                                role="tab"
                                aria-controls="nav-contact"
                                aria-selected="false"
                              >
                                <img
                                  src="./assets/img/product/pp4.png"
                                  alt=""
                                />
                              </button>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="product__details">
                          <div className="product__details-price-box">
                            <h5 className="product__details-price">$56.00</h5>
                            <ul className="product__details-info-list">
                              <li>Delicious non - dairy cheese sauce</li>
                              <li>Vegan & Allergy friendly</li>
                              <li>Smooth, velvety dairy free cheese sauce</li>
                            </ul>
                          </div>
                          <div className="product__details-cart">
                            <div className="product__details-quantity d-flex align-items-center mb-15">
                              <b>Qty:</b>
                              <div className="product__details-count mr-10">
                                <span className="cart-minus">
                                  <i className="far fa-minus"></i>
                                </span>
                                <input
                                  className="tp-cart-input"
                                  type="text"
                                  value="1"
                                />
                                <span className="cart-plus">
                                  <i className="far fa-plus"></i>
                                </span>
                              </div>
                              <div className="product__details-btn">
                                <a href="cart.html">add to cart</a>
                              </div>
                            </div>
                            <ul className="product__details-check">
                              <li>
                                <a href="#">
                                  <i className="icon-heart icons"></i> add to
                                  wishlist
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-layers"></i> Add to Compare
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-share-2"></i> Share
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product__details-stock mb-25">
                            <ul>
                              <li>
                                Availability: <i>54 Instock</i>
                              </li>
                              <li>
                                Categories:{" "}
                                <span>
                                  Vegetables, Meat & Eggs, Fruit Drink{" "}
                                </span>
                              </li>
                              <li>
                                Tags: <span>Chicken, Natural, Organic</span>
                              </li>
                            </ul>
                          </div>
                          <div className="product__details-payment text-center">
                            <img src="./assets/img/product/secure.png" alt="" />
                            <span>Guarantee safe & Secure checkout</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tpdescription__box">
                  <div className="tpdescription__box-center d-flex align-items-center justify-content-center">
                    <nav>
                      <div className="nav nav-tabs" role="tablist">
                        <button
                          className="nav-link active"
                          id="nav-description-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-description"
                          type="button"
                          role="tab"
                          aria-controls="nav-description"
                          aria-selected="true"
                        >
                          Product Description
                        </button>
                        <button
                          className="nav-link"
                          id="nav-info-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-information"
                          type="button"
                          role="tab"
                          aria-controls="nav-information"
                          aria-selected="false"
                        >
                          ADDITIONAL INFORMATION
                        </button>
                        <button
                          className="nav-link"
                          id="nav-review-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-review"
                          type="button"
                          role="tab"
                          aria-controls="nav-review"
                          aria-selected="false"
                        >
                          Reviews (1)
                        </button>
                      </div>
                    </nav>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-description"
                      role="tabpanel"
                      aria-labelledby="nav-description-tab"
                      tabindex="0"
                    >
                      <div className="tpdescription__content">
                        <p>
                          Designed by Puik in 1949 as one of the first models
                          created especially for Carl Hansen & Son, and produced
                          since 1950. The last of a series of chairs wegner
                          designed based on inspiration from antique chinese
                          armchairs. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia eserunt mollit
                          anim id est laborum. Sed ut perspiciatis unde omnis
                          iste natus error sit voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, aque ipsa quae ab illo
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo.{" "}
                        </p>
                      </div>
                      <div className="tpdescription__product-wrapper mt-30 mb-30 d-flex justify-content-between align-items-center">
                        <div className="tpdescription__product-info">
                          <h5 className="tpdescription__product-title">
                            PRODUCT DETAILS
                          </h5>
                          <ul className="tpdescription__product-info">
                            <li>Material: Plastic, Wood</li>
                            <li>Legs: Lacquered oak and black painted oak</li>
                            <li>
                              Dimensions and Weight: Height: 80 cm, Weight: 5.3
                              kg
                            </li>
                            <li>Length: 48cm</li>
                            <li>Depth: 52 cm</li>
                          </ul>
                          <p>
                            Lemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut <br /> fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem <br /> sequi nesciunt.
                          </p>
                        </div>
                        <div className="tpdescription__product-thumb">
                          <img
                            src="./assets/img/product/pp2.png" style={{height:'260px'}}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="tpdescription__video">
                        <h5 className="tpdescription__product-title">
                          PRODUCT DETAILS
                        </h5>
                        <p>
                          Form is an armless modern chair with a minimalistic
                          expression. With a simple and contemporary design Form
                          Chair has a soft and welcoming ilhouette and a
                          distinctly residential look. The legs appear almost as
                          if they are growing out of the shell. This gives the
                          design flexibility and makes it possible to vary the
                          frame. Unika is a mouth blown series of small, glass
                          pendant lamps, originally designed for the Restaurant
                          Gronbech. Est eum itaque maiores qui blanditiis
                          architecto. Eligendi saepe rem ut. Cumque quia earum
                          eligendi.{" "}
                        </p>
                        <div className="tpdescription__video-wrapper p-relative mt-30 mb-35 w-img">
                          <img
                            src="./assets/img/product/pp6.png"
                            alt=""
                          />
                          <div className="tpvideo__video-btn">
                            <a
                              className="tpvideo__video-icon popup-video"
                              href=""
                            >
                              <i>
                                <svg
                                  width="20"
                                  height="22"
                                  viewBox="0 0 20 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15.6499 6.58886L15.651 6.58953C17.8499 7.85553 18.7829 9.42511 18.7829 10.8432C18.7829 12.2613 17.8499 13.8308 15.651 15.0968L15.6499 15.0975L12.0218 17.195L8.3948 19.2919C8.3946 19.292 8.3944 19.2921 8.3942 19.2922C6.19546 20.558 4.36817 20.5794 3.13833 19.8697C1.9087 19.1602 1.01562 17.5694 1.01562 15.0382V10.8432V6.64818C1.01562 4.10132 1.90954 2.51221 3.13721 1.80666C4.36609 1.1004 6.1936 1.12735 8.3942 2.39416C8.3944 2.39428 8.3946 2.3944 8.3948 2.39451L12.0218 4.49135L15.6499 6.58886Z"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </i>
                            </a>
                          </div>
                        </div>
                        <h5 className="tpdescription__product-title">
                          Product supreme quality
                        </h5>
                        <p>
                          Form is an armless modern chair with a minimalistic
                          expression. With a simple and contemporary design Form
                          Chair has a soft and welcoming ilhouette and a
                          distinctly residential look. The legs appear almost as
                          if they are growing out of the shell. This gives the
                          design flexibility and makes it possible to vary the
                          frame. Unika is a mouth blown series of small, glass
                          pendant lamps, originally designed for the Restaurant
                          Gronbech. Est eum itaque maiores qui blanditiis
                          architecto. Eligendi saepe rem ut. Cumque quia earum
                          eligendi.{" "}
                        </p>
                        <p>
                          Duis semper erat mauris, sed egestas purus commodo.
                          Cras imperdiet est in nunc tristique lacinia. Nullam
                          aliquam mauris eu accumsan tincidunt. Suspendisse
                          velit ex, aliquet vel ornare vel, dignissim a tortor.
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate.
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-information"
                      role="tabpanel"
                      aria-labelledby="nav-info-tab"
                      tabindex="0"
                    >
                      <div className="tpdescription__content">
                        <p>
                          Designed by Puik in 1949 as one of the first models
                          created especially for Carl Hansen & Son, and produced
                          since 1950. The last of a series of chairs wegner
                          designed based on inspiration from antique chinese
                          armchairs. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia eserunt mollit
                          anim id est laborum. Sed ut perspiciatis unde omnis
                          iste natus error sit voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, aque ipsa quae ab illo
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo.{" "}
                        </p>
                      </div>
                      <div className="tpdescription__product-wrapper mt-30 mb-30 d-flex justify-content-between align-items-center">
                        <div className="tpdescription__product-info">
                          <h5 className="tpdescription__product-title">
                            PRODUCT DETAILS
                          </h5>
                          <ul className="tpdescription__product-info">
                            <li>Material: Plastic, Wood</li>
                            <li>Legs: Lacquered oak and black painted oak</li>
                            <li>
                              Dimensions and Weight: Height: 80 cm, Weight: 5.3
                              kg
                            </li>
                            <li>Length: 48cm</li>
                            <li>Depth: 52 cm</li>
                          </ul>
                          <p>
                            Lemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut <br /> fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem <br /> sequi nesciunt.
                          </p>
                        </div>
                        <div className="tpdescription__product-thumb">
                          <img
                            src="./assets/img/product/pp2.png"
                            alt=""  
                          />
                        </div>
                      </div>
                      <div className="tpdescription__video">
                        <h5 className="tpdescription__product-title">
                          PRODUCT DETAILS
                        </h5>
                        <p>
                          Form is an armless modern chair with a minimalistic
                          expression. With a simple and contemporary design Form
                          Chair has a soft and welcoming ilhouette and a
                          distinctly residential look. The legs appear almost as
                          if they are growing out of the shell. This gives the
                          design flexibility and makes it possible to vary the
                          frame. Unika is a mouth blown series of small, glass
                          pendant lamps, originally designed for the Restaurant
                          Gronbech. Est eum itaque maiores qui blanditiis
                          architecto. Eligendi saepe rem ut. Cumque quia earum
                          eligendi.{" "}
                        </p>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="nav-review"
                      role="tabpanel"
                      aria-labelledby="nav-review-tab"
                      tabindex="0"
                    >
                      <div className="tpreview__wrapper">
                        <h4 className="tpreview__wrapper-title">
                          1 review for Cheap and delicious fresh chicken
                        </h4>
                        <div className="tpreview__comment">
                          <div className="tpreview__comment-img mr-20">
                            <img
                              src="./assets/img/testimonial/test-avata-1.png"
                              alt=""
                            />
                          </div>
                          <div className="tpreview__comment-text">
                            <div className="tpreview__comment-autor-info d-flex align-items-center justify-content-between">
                              <div className="tpreview__comment-author">
                                <span>admin</span>
                              </div>
                              <div className="tpreview__comment-star">
                                <i className="icon-star_outline1"></i>
                                <i className="icon-star_outline1"></i>
                                <i className="icon-star_outline1"></i>
                                <i className="icon-star_outline1"></i>
                                <i className="icon-star_outline1"></i>
                              </div>
                            </div>
                            <span className="date mb-20">--April 9, 2022: </span>
                            <p>very good</p>
                          </div>
                        </div>
                        <div className="tpreview__form">
                          <h4 className="tpreview__form-title mb-25">
                            Add a review{" "}
                          </h4>
                          <form action="#">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="tpreview__input mb-30">
                                  <input type="text" placeholder="Name" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="tpreview__input mb-30">
                                  <input type="email" placeholder="Email" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tpreview__star mb-20">
                                  <h4 className="title">Your Rating</h4>
                                  <div className="tpreview__star-icon">
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
                                </div>
                                <div className="tpreview__input mb-30">
                                  <textarea
                                    name="text"
                                    placeholder="Message"
                                  ></textarea>
                                  <div className="tpreview__submit mt-30">
                                    <button className="tp-btn">Submit</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-12">
              <div className="tpsidebar pb-30">
                <div className="tpsidebar__warning mb-30">
                  <ul>
                    <li>
                      <div className="tpsidebar__warning-item">
                        <div className="tpsidebar__warning-icon">
                          <i className="icon-package"></i>
                        </div>
                        <div className="tpsidebar__warning-text">
                          <p>
                            Free shipping apply to all <br /> orders over $90
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="tpsidebar__warning-item">
                        <div className="tpsidebar__warning-icon">
                          <i className="icon-shield"></i>
                        </div>
                        <div className="tpsidebar__warning-text">
                          <p>
                            Guaranteed 100% Organic <br /> from nature farms
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="tpsidebar__warning-item">
                        <div className="tpsidebar__warning-icon">
                          <i className="icon-package"></i>
                        </div>
                        <div className="tpsidebar__warning-text">
                          <p>
                            60 days returns if you change <br /> your mind
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tpsidebar__banner mb-30">
                  <img src="./assets/img/shape/long.png" alt="" />
                </div>
                <div className="tpsidebar__product">
                  <h4 className="tpsidebar__title mb-15">Recent Products</h4>
                  <div className="tpsidebar__product-item">
                    <div className="tpsidebar__product-thumb p-relative">
                      <img src="./assets/img/product/product1.jpg" alt="" />
                      <div className="tpsidebar__info bage">
                        <span className="tpproduct__info-hot bage__hot">HOT</span>
                      </div>
                    </div>
                    <div className="tpsidebar__product-content">
                      <span className="tpproduct__product-category">
                        <a href="shop-details-3.html">Fresh Fruits</a>
                      </span>
                      <h4 className="tpsidebar__product-title">
                        <a href="shop-details-3.html">
                          Fresh Mangosteen 100% Organic From VietNamese
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
                  </div>
                  <div className="tpsidebar__product-item">
                    <div className="tpsidebar__product-thumb p-relative">
                      <img src="./assets/img/product/product2.jpg" alt="" />
                      <div className="tpsidebar__info bage">
                        <span className="tpproduct__info-hot bage__hot">HOT</span>
                      </div>
                    </div>
                    <div className="tpsidebar__product-content">
                      <span className="tpproduct__product-category">
                        <a href="shop-details-3.html">Fresh Fruits</a>
                      </span>
                      <h4 className="tpsidebar__product-title">
                        <a href="shop-details-3.html">
                          Fresh Mangosteen 100% Organic From VietNamese
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
                  </div>
                  <div className="tpsidebar__product-item">
                    <div className="tpsidebar__product-thumb p-relative">
                      <img src="./assets/img/product/product3.jpg" alt="" />
                      <div className="tpsidebar__info bage">
                        <span className="tpproduct__info-hot bage__hot">HOT</span>
                      </div>
                    </div>
                    <div className="tpsidebar__product-content">
                      <span className="tpproduct__product-category">
                        <a href="shop-details-3.html">Fresh Fruits</a>
                      </span>
                      <h4 className="tpsidebar__product-title">
                        <a href="shop-details-grid.html">
                          Fresh Mangosteen 100% Organic From VietNamese
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
