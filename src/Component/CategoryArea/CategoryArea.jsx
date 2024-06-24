import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CategoryArea.css";
import { Link } from "react-router-dom";

const CategoryArea = () => {

  return (
    <div>
      <section className="category-area grey-bg pb-40">
        <div className="container">
          <div className="swiper-container category-active">
            <Swiper
              spaceBetween={20}
              loop={false}
              autoplay={{ delay: 1000 }}
              breakpoints={{
                1400: {
                  slidesPerView: 8,
                },
                1200: {
                  slidesPerView: 6,
                },
                992: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 4,
                },
                576: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: 2,
                },
              }}
              slidesPerView={8}
              className="swiper-wrapper"
            >
              <SwiperSlide className="swiper-slide">
                <div className="category__item mb-30">
                  <div className="category__thumb fix mb-15">
                    <Link href="shop-details-3.html">
                      <img
                        src="./assets/img/catagory/s1.png"
                        alt="category-thumb"
                      />
                    </Link>
                  </div>
                  <div className="category__content">
                    <h5 className="category__title">
                      <Link href="shop-details-4.html">Dog Toys</Link>
                    </h5>
                    <span className="category__count">05 items</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="category__item mb-30">
                  <div className="category__thumb fix mb-15">
                    <Link href="shop-details-3.html">
                      <img
                        src="./assets/img/catagory/s2.png"
                        alt="category-thumb"
                      />
                    </Link>
                  </div>
                  <div className="category__content">
                    <h5 className="category__title">
                      <Link href="shop-details-3.html">Dog Treats</Link>
                    </h5>
                    <span className="category__count">06 items</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="category__item mb-30">
                  <div className="category__thumb fix mb-15">
                    <Link href="shop-details-3.html">
                      <img
                        src="./assets/img/catagory/s3.png"
                        alt="category-thumb"
                      />
                    </Link>
                  </div>
                  <div className="category__content">
                    <h5 className="category__title">
                      <Link href="shop-details-3.html">Shampoos</Link>
                    </h5>
                    <span className="category__count">09 items</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="category__item mb-30">
                  <div className="category__thumb fix mb-15">
                    <Link href="shop-details-3.html">
                      <img
                        src="./assets/img/catagory/s4.png"
                        alt="category-thumb"
                      />
                    </Link>
                  </div>
                  <div className="category__content">
                    <h5 className="category__title">
                      <Link href="shop-details-3.html">Bowls</Link>
                    </h5>
                    <span className="category__count">11 items</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="category__item mb-30">
                  <div className="category__thumb fix mb-15">
                    <Link href="shop-details-3.html">
                      <img
                        src="./assets/img/catagory/s5.png"
                        alt="category-thumb"
                      />
                    </Link>
                  </div>
                  <div className="category__content">
                    <h5 className="category__title">
                      <Link href="shop-details-3.html">Cat Food</Link>
                    </h5>
                    <span className="category__count">02 items</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="category__item mb-30">
                  <div className="category__thumb fix mb-15">
                    <Link href="shop-details-3.html">
                      <img
                        src="./assets/img/catagory/s6.png"
                        alt="category-thumb"
                      />
                    </Link>
                  </div>
                  <div className="category__content">
                    <h5 className="category__title">
                      <Link href="shop-details-3.html">Cat Litter</Link>
                    </h5>
                    <span className="category__count">16 items</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="category__item mb-30">
                  <div className="category__thumb fix mb-15">
                    <Link href="shop-details-3.html">
                      <img
                        src="./assets/img/catagory/s7.png"
                        alt="category-thumb"
                      />
                    </Link>
                  </div>
                  <div className="category__content">
                    <h5 className="category__title">
                      <Link href="shop-details-3.html">Cat Treats</Link>
                    </h5>
                    <span className="category__count">10 items</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="category__item mb-30">
                  <div className="category__thumb fix mb-15">
                    <Link href="shop-details-3.html">
                      <img
                        src="./assets/img/catagory/s8.png"
                        alt="category-thumb"
                      />
                    </Link>
                  </div>
                  <div className="category__content">
                    <h5 className="category__title">
                      <Link href="shop-details-3.html">Cat Carries</Link>
                    </h5>
                    <span className="category__count">11 items</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryArea;
