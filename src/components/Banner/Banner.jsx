import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Slide1Img1 from "../../Assets/Images/slides/rev_home6.png";
import Slide1Img2 from "../../Assets/Images/slides/rev_home6_1.png";
import SlideCommanImg1 from "../../Assets/Images/slides/rev_home6_7.png";
import SlideCommanImg2 from "../../Assets/Images/slides/rev_home6_6.png";
import bgBottom from "../../Assets/Images/slides/bgBottom.png";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  let sliderRef = useRef(null);

  const slides = [
    {
      id: 1,
      offer: "Get 10% Discount",
      title: "Rabbit Adult Complete Dry Food",
      subTitle: "95% of our clients buy in bulk & save money!",
      link: "/products",
      image1: Slide1Img1,
      image2: Slide1Img2,
      color: "#F8AA60",
    },
    {
      id: 2,
      offer: "Get 10% Discount",
      title: "Dog Adult Complete Dry Food",
      subTitle: "95% of our clients buy in bulk & save money!",
      link: "/products",
      image1: Slide1Img1,
      image2: Slide1Img2,
      color: "#d2565a",
    },
    {
      id: 3,
      offer: "Get 10% Discount",
      title: "Cat Adult Complete Dry Food",
      subTitle: "95% of our clients buy in bulk & save money!",
      link: "/products",
      image1: Slide1Img1,
      image2: Slide1Img2,
      color: "#d4ba50",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    waitForAnimate: false,
    beforeChange: (current, next) => {
      setPrevSlide(current);
      setCurrentSlide(next);
    },
  };
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div>
      <div className="sliderOuter relative">
        <button
          className="SlideBtn w-14 h-14 bg-white hover:bg-[#ff3e6c] text-black hover:text-white rounded-full top-1/2 absolute z-30 left-8 -translate-y-2/3"
          onClick={previous}
        >
          <KeyboardArrowLeftOutlined />
        </button>
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {slides.map((slide, index) => (
            <div className="slides overflow-hidden" key={index}>
              <div className="slide slide1">
                <div className="relative">
                  <div
                    style={{ backgroundColor: slide.color }}
                    className={` absolute w-full h-full -z-10 opacity-20`}
                  ></div>
                  <div className="absolute right-0 top-0 z-0 w-[494px] h-[455px]">
                    <div className="2xl:w-[70px] xl:w-[60px] 2xl:-h-[70px] xl:h-[60px] absolute right-0 top-0 z-[1]">
                      <img
                        src={SlideCommanImg1}
                        alt=""
                        className={`w-full h-full animate ${
                          currentSlide === index
                            ? "animate__animated animate__fadeInTopRight animate__delay-1s"
                            : ""
                        }`}
                      />
                    </div>
                    <div className="w-[115px] h-[190px] absolute right-0 top-0 z-[1]">
                      <svg
                        width="140"
                        height="229"
                        viewBox="0 0 140 229"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-full h-full animate ${
                          currentSlide === index
                            ? "animate__animated animate__fadeInLeft animate__delay-1s"
                            : ""
                        }`}
                      >
                        <path
                          d="M21 1C21 1 5.50002 18 2.00002 33.5M2 66.5C4.15737 73.3136 8.02741 79.7733 14 85.5C18.7738 90.0772 21.3384 91.4439 27.5 95M57 111C66.809 117.268 70.2899 122.138 72.5 133.5M73.5 149.5C72.9526 156.194 72.3861 160.25 70.5 168.5M66.5 186C65.4649 193.331 65.5963 196.136 66.5 204M73 218.5C77.643 223.831 80.1512 224.905 87.5 227.5M107 227.5C118.5 225.5 125.426 223.683 139 218.5"
                          stroke={slide.color}
                          stroke-width="3"
                        />
                      </svg>
                    </div>
                    <div className="2xl:w-[350px] 2xl:h-[380px] xl:w-[294px] xl:h-[322px] absolute right-0 top-0 z-[0]">
                      <svg
                        width="439"
                        height="481"
                        viewBox="0 0 439 481"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-full h-full ${
                          currentSlide === index
                            ? "animate__animated animate__fadeInTopRight"
                            : ""
                        }`}
                      >
                        <path
                          d="M4.75779 33C6.75775 23.2309 17.7578 0 17.7578 0H29L438.758 1.05882V481L427.258 480L415.758 478L403.758 475.5L391.758 471.5L380.258 467L367.758 461L355.758 454C355.758 454 341.258 444 339.758 442.5C338.258 441 329.258 433 329.258 433L320.758 424L313.758 415L308.258 406.5L303.258 397.5L298.346 388L295.258 380.5L291.258 371.5L288.758 363L286.758 356L284.008 346.5L281.258 338.5L276.258 326L270.758 311.5C270.758 311.5 259.758 291.5 253.758 286C247.758 280.5 241.258 273.5 230.758 268.5C220.258 263.5 219.758 262.9 211.258 259.5C202.758 256.1 188.5 253.059 188.5 253.059C182.5 252.059 166.016 248.421 151.758 246C137.5 243.579 128 242.059 113.5 237.059L105.129 233.529L96.7579 230L83.2578 223L72.2578 215.5L62.7578 209L53.7578 200.5L44.2578 190.5L34.7578 178.5C34.7578 178.5 27.2578 168 24.2578 163C21.2578 158 17.2262 150.49 13.7578 143C10.2895 135.51 4.90286 120.441 2.75784 108C0.612815 95.5589 0 90.0589 0 81.5C0 72.9412 0.84734 65.4411 1.25784 56C1.66833 46.5588 2.75784 42.7691 4.75779 33Z"
                          fill={`${slide.color}`}
                          fill-opacity="0.5"
                        />
                      </svg>
                    </div>
                    <div className="2xl:w-[610px] xl:w-[500px] absolute right-0 top-0 z-[1]">
                      <img
                        src={slide.image1}
                        alt=""
                        className={`w-full h-full bigImg ${
                          currentSlide === index
                            ? "animate__animated animate__fadeInRight animate__delay-1s"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="slideContent pt-[115px] pb-[160px] px-[30px] flex items-center justify-center relative z-20">
                    <div className="text-center max-w-[500px]">
                      <p
                        className={`uppercase text-sm font-bold text-[#f87b34] tracking-wider ${
                          currentSlide === index
                            ? "animate__animated animate__fadeInUp"
                            : prevSlide === index
                            ? "animate__animated animate__fadeOutUp"
                            : ""
                        }`}
                      >
                        {slide.offer}
                      </p>
                      <h3
                        className={`text-5xl font-bold capitalize mt-2 mb-5 leading-[58px]  ${
                          currentSlide === index
                            ? "animate__animated animate__fadeInUp"
                            : prevSlide === index
                            ? "animate__animated animate__fadeOutUp"
                            : ""
                        }`}
                      >
                        {slide.title}
                      </h3>
                      <p
                        className={`text-sm mb-10 ${
                          currentSlide === index
                            ? "animate__animated animate__fadeInUp"
                            : prevSlide === index
                            ? "animate__animated animate__fadeOutUp"
                            : ""
                        }`}
                      >
                        {slide.subTitle}
                      </p>
                      <button
                        className={`bg-[#ff3e6c] hover:bg-[#ff3e6bda] !transition-all py-3.5 px-8 rounded-full text-[15px] text-white font-bold flex items-center mx-auto gap-3 ${
                          currentSlide === index
                            ? "animate__animated animate__fadeInUp"
                            : prevSlide === index
                            ? "animate__animated animate__fadeOutUp"
                            : ""
                        }`}
                      >
                        <span>Shop Now</span>
                        <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white">
                          <KeyboardArrowRightOutlined className="!text-lg text-black" />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="absolute left-0 bottom-0 z-0 w-[475px] h-[460px]">
                    <div className="w-[74px] h-[130px] absolute left-0 top-[66px] z-[1]">
                      <img
                        src={SlideCommanImg2}
                        alt=""
                        className={`w-full h-full animate ${
                          currentSlide === index
                            ? "animate__animated animate__fadeInLeft animate__delay-1s"
                            : ""
                        }`}
                      />
                    </div>
                    <div className="2xl:w-[130px] 2xl:h-[300px] xl:w-[110px] xl:h-[280px] absolute left-0 bottom-0 z-[1]">
                      <svg
                        width="175"
                        height="378"
                        viewBox="0 0 175 378"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-full h-full animate ${
                          currentSlide === index
                            ? "animate__animated animate__fadeInLeft animate__delay-1s"
                            : ""
                        }`}
                      >
                        <path
                          d="M1 375.5C10.6674 375.619 19.3289 374.825 26 373.5C43.9322 369.288 58.7099 361.276 64.5 358.5C70.2901 355.724 93.8346 341.905 109.5 330C125.994 317.113 132.815 310.304 143 298.5C155.553 283.115 160.461 273.105 168 255C173.376 237.4 174.155 229.024 172.5 210C170.545 201.632 169.19 197.273 166 190.5C161.215 180.492 157.829 175.281 150 167C138.968 157.898 132.299 154.083 119 151M112 149C101.389 147.303 95.4671 145.587 85 142.5C75.7342 139.52 71.5241 137.354 65 133C56.5798 124.979 53.6363 120.366 50.5 112C48.2244 104.014 47.4125 99.1298 47 89.5C46.7807 80.5654 46.8504 76.5437 47 69.5C47.7344 60.8938 47.5237 55.0729 47.5 46.5C46.6938 36.1693 45.8161 32.3067 41.5 25.5C37.054 18.3303 33.4923 14.137 25.5 9C14.8784 3.72648 10.2131 2.54686 2.5 2"
                          stroke={slide.color}
                          stroke-width="3"
                        />
                      </svg>
                    </div>
                    <div className="2xl:w-[438px] 2xl:h-[418px] xl:w-[388px] xl:h-[368px] absolute left-[56px] 2xl:top-4 bottom-5 z-[1]">
                      <img
                        src={slide.image2}
                        alt=""
                        className={`w-full h-full bigImg ${
                          currentSlide === index
                            ? "animate__animated animate__fadeInUp animate__delay-1s"
                            : ""
                        }`}
                      />
                    </div>
                    <div className="2xl:w-[470px] xl:w-[420px] 2xl:h-[420px] xl:h-[370px] absolute left-0 bottom-0 z-[0]">
                      <svg
                        width="596"
                        height="533"
                        viewBox="0 0 596 533"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-full h-full ${
                          currentSlide === index
                            ? "animate__animated animate__fadeInBottomLeft"
                            : ""
                        }`}
                      >
                        <path
                          d="M585 533H0V12.5L13 8.5L28 4.5L39.5 2.5L46.5 1.5L56.5 0.5L70.5 0H82.5L90 0.5L96.5 1L109 2.5L121 4.5L137 8.5L156 14L169.5 19.5L182 26L195.5 33.5L211 43.5L219.5 50.5L227 56.5L235.5 64.5L243 72.5L249.5 80.5L255 88.5L259 95.5L264 104.5L269 115.5L272 123L275 132.5L276.5 140L277.5 147.5L278.5 156L280 168L282 183L283.5 193L286 206C286.702 209.316 287.125 211.243 289.5 218.5C290.698 223.3 291.872 226.214 293.922 231.306L294 231.5C295.75 235.635 296.967 238.164 299.5 243C300.622 245.574 301.786 247.593 306 253.5C308.676 257.2 311.055 259.421 316 263.5L321.5 268C323.579 269.662 324.994 270.755 328 273L340 279L352 282.5L359 284C359 284 365 285 370 285.5C375 286 384 287.223 385.5 287.5C387 287.777 393 288.75 396 289C399 289.25 408 289 408 289H418.5C422.97 288.958 425.629 288.991 433 290C439.753 291.289 442.412 291.423 446.5 292.5C451.554 293.659 454.606 294.918 461.5 297C465.825 298.441 468.514 299.4 474 301.5L486.5 307C492.152 309.666 494.495 311.024 499 313.5C504.105 316.184 507.119 318.266 512.5 322C518.334 326.285 521.08 328.512 525.954 332.463L526 332.5C530.117 335.982 532.984 338.53 538.5 343.5L545.5 350.5C548 353 547.815 352.355 556 363C558.048 366.117 560.381 368.587 563.5 373C566.664 377.324 568.275 380.229 571 384.5C573.9 389.738 575.448 392.692 578 398L584.5 413C585.869 417.278 588.638 425.618 589 427C589.362 428.382 592.927 438.382 594 445.5C594.518 448.437 594.76 450.079 595 453C595.24 455.921 595 458.5 595 459.5V468V479.5C594.866 483.551 594.677 486.189 594 492.5C594 492.5 593 502 592.5 505.5C592 509 591.868 511.568 591 515.5C590.025 519.861 589.355 522.142 588 526L585 533Z"
                          fill={slide.color}
                          fill-opacity="0.2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          className="SlideBtn w-14 h-14 bg-white hover:bg-[#ff3e6c] text-black hover:text-white rounded-full top-1/2 absolute z-30 right-8 -translate-y-2/3"
          onClick={next}
        >
          <KeyboardArrowRightOutlined />
        </button>
        <div>
          <img src={bgBottom} alt="" className="w-full -translate-y-9" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
