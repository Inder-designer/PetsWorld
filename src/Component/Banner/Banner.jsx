import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='banner'>
      {/* slider-area-start  */}
      <section className="slider-area tpslider-delay">
        <div className="swiper-container slider-active">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
            spaceBetween={50} // Set the space between slides
            slidesPerView={1} // Set the number of slides to show at once
            navigation
            effect={'fade'}
            pagination={{ clickable: true }}
            loop={true} // Enable looping
            // autoplay={{ delay: 3000 }} // Set autoplay delay to 3 seconds
          >
            <SwiperSlide className="swiper-slide">
              <div className="tpslider pt-90 pb-0 grey-bg" style={{backgroundImage: `url(assets/img/slider/shape-bg.jpg)`}}>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-5 col-lg-6 col-md-6 col-12 col-sm-6">
                      <div className="tpslider__content pt-20">
                        <span className="tpslider__sub-title mb-35">Top Seller In The Week</span>
                        <h2 className="tpslider__title mb-30">Choose Your Healthy Lifestyle.</h2>
                        <p>Presentation matters. Our fresh Vietnamese vegetable rolls <br/> look good and taste even better</p>
                        <div className="tpslider__btn">
                          <Link className="tp-btn" href="shop-2.html">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-7 col-lg-6 col-md-6 col-12 col-sm-6">
                      <div className="tpslider__thumb p-relative pt-15">
                        <img className="tpslider__thumb-img" src="./assets/img/slider/my-hero-product.png" alt="slider-bg"/>
                        <div className="tpslider__shape d-none d-md-block">
                          <img className="tpslider__shape-one" style={{width:'180px'}} src="./assets/img/slider/boneShape.png" alt="shape"/>
                          {/* <img className="tpslider__shape-two" src="./assets/img/slider/boneShape.png" alt="shape"/> */}
                          {/* <img className="tpslider__shape-three" src="./assets/img/slider/boneShape.png" alt="shape"/> */}
                          {/* <img className="tpslider__shape-four" src="./assets/img/slider/slider-shape-4.png" alt="shape"/> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="tpslider pt-90 pb-0 grey-bg" style={{backgroundImage: `url(assets/img/slider/shape-bg.jpg)`}}>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-5 col-lg-6 col-md-6 col-sm-6">
                      <div className="tpslider__content pt-20">
                        <span className="tpslider__sub-title mb-35">Top Seller In The Week</span>
                        <h2 className="tpslider__title mb-30">Fresh Br/ead <br/> Oatmeal Crumble. </h2>
                        <p>Presentation matters. Our fresh Vietnamese vegetable rolls <br/> look good and taste even better</p>
                        <div className="tpslider__btn">
                          <Link className="tp-btn" href="shop-2.html">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-7 col-lg-6  col-md-6 col-sm-6">
                      <div className="tpslider__thumb p-relative">
                        <img className="tpslider__thumb-img" src="./assets/img/slider/slider-bg-2.png" alt="slider-bg"/>
                        <div className="tpslider__shape d-none d-md-block">
                          <img className="tpslider__shape-one" style={{width:'180px'}} src="./assets/img/slider/boneShape.png" alt="shape"/>
                          {/* <img className="tpslider__shape-two" src="./assets/img/slider/slider-shape-2.png" alt="shape"/>
                          <img className="tpslider__shape-three" src="./assets/img/slider/slider-shape-3.png" alt="shape"/>
                          <img className="tpslider__shape-four" src="./assets/img/slider/slider-shape-4.png" alt="shape"/> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="tpslider pt-90 pb-0 grey-bg" style={{backgroundImage: `url(assets/img/slider/shape-bg.jpg)`}}>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="tpslider__content pt-20">
                        <span className="tpslider__sub-title mb-35">Top Seller In The Week</span>
                        <h2 className="tpslider__title mb-30">The Best <br/> Health Fresh.</h2>
                        <p>Presentation matters. Our fresh Vietnamese vegetable rolls <br/> look good and taste even better</p>
                        <div className="tpslider__btn">
                          <Link className="tp-btn" href="shop-2.html">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="tpslider__thumb p-relative">
                        <img className="tpslider__thumb-img" src="./assets/img/slider/slider3.png" alt="slider-bg"/>
                        <div className="tpslider__shape d-none d-md-block">
                          <img className="tpslider__shape-one" style={{width:'180px'}} src="./assets/img/slider/boneShape.png" alt="shape"/>
                          {/* <img className="tpslider__shape-two" src="./assets/img/slider/slider-shape-2.png" alt="shape"/>
                          <img className="tpslider__shape-three" src="./assets/img/slider/slider-shape-3.png" alt="shape"/>
                          <img className="tpslider__shape-four" src="./assets/img/slider/slider-shape-4.png" alt="shape"/> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* slider-area-end  */}
    </div>
  )
}

export default Banner
