import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SpecialProducts.css";
import ProductCard from "../ProductCard/ProductCard";

const SpecialProducts = () => {

  const ProductList = [
    {
      id: 1,
      img:"./assets/img/product/product1.jpg"
    },
    {
      id: 1,
      img:"./assets/img/product/product2.jpg"
    },
    {
      id: 1,
      img:"./assets/img/product/product3.jpg"
    },
    {
      id: 1,
      img:"./assets/img/product/product4.jpg"
    },
    {
      id: 1,
      img:"./assets/img/product/product5.jpg"
    },
    {
      id: 1,
      img:"./assets/img/product/product6.png"
    },
    {
      id: 1,
      img:"./assets/img/product/product7.png"
    },
  ]
  return (
    <div class="specialProducts">
      <section class="product-area grey-bg pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="tpsection mb-35">
                <h4 class="tpsection__sub-title">~ Special Products ~</h4>
                <h4 class="tpsection__title">Weekly Food Offers</h4>
                <p>
                  The liber tempor cum soluta nobis eleifend option congue
                  doming quod mazim.
                </p>
              </div>
            </div>
          </div>
          <div class="tpproduct__arrow p-relative">
            <div class="swiper-container tpproduct-active tpslider-bottom p-relative">
              <Swiper
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={20} // Set the space between slides
                slidesPerView={6} // Set the number of slides to show at once
                navigation
                loop={true} // Enable looping
                // autoplay={{ delay: 3000 }}
                breakpoints={{
                  1200: {
                    slidesPerView: 6,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
                class=""
              >
                <div className="">
                  {ProductList.map((product) => (
                  <SwiperSlide key={product.id} className="swiper-slide">
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialProducts;
