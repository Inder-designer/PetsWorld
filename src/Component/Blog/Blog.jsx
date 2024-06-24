import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const Blog = () => {
  return (
    <div>
      <section className="blog-area pt-100 pb-100 grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="tpsection mb-35">
                <h4 className="tpsection__sub-title">~ Read Our Blog ~</h4>
                <h4 className="tpsection__title">Our Latest Post</h4>
                <p>
                  The liber tempor cum soluta nobis eleifend option congue
                  doming quod mazim.
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-container tpblog-active">
            <Swiper
              spaceBetween={20}
              loop={false}
              autoplay={{ delay: 1000 }}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              slidesPerView={4}
              className="swiper-wrapper"
            >
              <SwiperSlide className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <Link href="blog-details.html">
                      <img src="assets/img/blog/Blog1.png" alt="" />
                    </Link>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      {/* <span className="cat-links">
                        <Link href="shop-details.html">Lifestyle</Link>
                      </span> */}
                      <span className="author-by">
                        <Link href="#">Admin</Link>
                      </span>
                      <span className="post-data">
                        <Link href="#">SEP 15. 2022</Link>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <Link href="blog-details.html">
                        Avocado Grilled Salmon, Rich In Nutrients For The Body
                      </Link>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <Link href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <Link href="blog-details.html">
                      <img src="./assets/img/blog/Blog2.png" alt="" />
                    </Link>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      {/* <span className="cat-links">
                        <Link href="shop-details.html">Organics</Link>
                      </span> */}
                      <span className="author-by">
                        <Link href="#">Admin</Link>
                      </span>
                      <span className="post-data">
                        <Link href="#">SEP 15. 2022</Link>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <Link href="blog-details.html">
                        The Best Great Benefits Of Fresh Beef For Women's Health
                      </Link>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <Link href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <Link href="blog-details.html">
                      <img src="./assets/img/blog/Blog3.png" alt="" />
                    </Link>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      {/* <span className="cat-links">
                        <Link href="shop-details.html">Organics</Link>
                      </span> */}
                      <span className="author-by">
                        <Link href="#">Admin</Link>
                      </span>
                      <span className="post-data">
                        <Link href="#">SEP 15. 2022</Link>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <Link href="blog-details.html">
                        Ways To Choose Fruits & Seafoods Good For Pregnancy
                      </Link>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <Link href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <Link href="blog-details.html">
                      <img src="./assets/img/blog/Blog4.png" alt="" />
                    </Link>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      {/* <span className="cat-links">
                        <Link href="shop-details.html">Shopping</Link>
                      </span> */}
                      <span className="author-by">
                        <Link href="#">Admin</Link>
                      </span>
                      <span className="post-data">
                        <Link href="#">SEP 15. 2022</Link>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <Link href="blog-details.html">
                        Summer Breakfast For The Healthy Morning With Tomatoes
                      </Link>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <Link href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <Link href="blog-details.html">
                      <img src="./assets/img/blog/Blog5.png" alt="" />
                    </Link>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      {/* <span className="cat-links">
                        <Link href="#">Foods</Link>
                      </span> */}
                      <span className="author-by">
                        <Link href="#">Admin</Link>
                      </span>
                      <span className="post-data">
                        <Link href="#">SEP 15. 2022</Link>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <Link href="blog-details.html">
                        Popular Reasons You Must Drinks Juice Everyday
                      </Link>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <Link href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <Link href="blog-details.html">
                      <img src="./assets/img/blog/Blog6.png" alt="" />
                    </Link>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      {/* <span className="cat-links">
                        <Link href="shop-details.html">Lifestyle</Link>
                      </span> */}
                      <span className="author-by">
                        <Link href="#">Admin</Link>
                      </span>
                      <span className="post-data">
                        <Link href="#">SEP 15. 2022</Link>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <Link href="blog-details.html">
                        Perfect Quality Reasonable Price For Your Family
                      </Link>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <Link href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <Link href="blog-details.html">
                      <img src="./assets/img/blog/Blog3.png" alt="" />
                    </Link>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      {/* <span className="cat-links">
                        <Link href="shop-details.html">Dairy Farm</Link>
                      </span> */}
                      <span className="author-by">
                        <Link href="#">Admin</Link>
                      </span>
                      <span className="post-data">
                        <Link href="#">SEP 15. 2022</Link>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <Link href="blog-details.html">
                        Ways To Choose Fruits Seafoods Good For Pregnancy
                      </Link>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <Link href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <Link href="blog-details.html">
                      <img src="./assets/img/blog/Blog5.png" alt="" />
                    </Link>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      {/* <span className="cat-links">
                        <Link href="#">organis</Link>
                      </span> */}
                      <span className="author-by">
                        <Link href="#">Admin</Link>
                      </span>
                      <span className="post-data">
                        <Link href="#">SEP 15. 2022</Link>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <Link href="blog-details.html">
                        The Best Great Benefits Of Fresh Beef For Women’s Health
                      </Link>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <Link href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </Link>
                    </div>
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

export default Blog;
