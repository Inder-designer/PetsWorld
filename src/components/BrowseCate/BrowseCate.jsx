import React, { useRef } from "react";
import bgBottom from "../../Assets/Images/slides/bgBottom.png";
import categories_1 from "../../Assets/Images/categories/categories-1.jpg";
import categories_2 from "../../Assets/Images/categories/categories-2.jpg";
import categories_3 from "../../Assets/Images/categories/categories-3.jpg";
import categories_4 from "../../Assets/Images/categories/categories-4.jpg";
import categories_5 from "../../Assets/Images/categories/categories-5.jpg";
import categories_6 from "../../Assets/Images/categories/categories-6.jpg";
import categories_7 from "../../Assets/Images/categories/categories-7.jpg";
import categories_8 from "../../Assets/Images/categories/categories-8.jpg";
import categories_9 from "../../Assets/Images/categories/categories-9.jpg";
import categories_10 from "../../Assets/Images/categories/categories-10.jpg";
import Slider from "react-slick";
import "./BrowseCate.css";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";

const BrowseCate = () => {
  let sliderRef = useRef(null);

  const slides = [
    {
      id: 1,
      name: "Food",
      image: categories_1,
    },
    {
      id: 2,
      name: "Phamacy",
      image: categories_2,
    },
    {
      id: 3,
      name: "Furniture",
      image: categories_3,
    },
    {
      id: 4,
      name: "Toys",
      image: categories_4,
    },
    {
      id: 5,
      name: "Beds",
      image: categories_5,
    },
    {
      id: 6,
      name: "Bowls",
      image: categories_6,
    },
    {
      id: 7,
      name: "Treats",
      image: categories_7,
    },
    {
      id: 8,
      name: "Crates",
      image: categories_8,
    },
    {
      id: 9,
      name: "Flea & Tick",
      image: categories_9,
    },
    {
      id: 10,
      name: "Clothing",
      image: categories_10,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <div className="mb-[70px] weeklyDeals bg-[#bb6b6c26] py-28 relative cate">
      <div className="absolute -top-1 w-full rotate-[180deg] ">
        <img src={bgBottom} alt="" className="w-full" />
      </div>
      <div className="container mx-auto">
        <div className="mb-7 flex justify-between items-center">
          <h4 className="text-3xl font-bold text-center relative">
            <span>Browse By Categories</span>
            <i className="custom-icon-foot-dog absolute right-[-28px] top-[-22px]"></i>
          </h4>
          <div className="flex gap-3">
            <button
              className="SlideBtn w-9 h-9 bg-white hover:bg-[#ff3e6c] text-black hover:text-white rounded-full"
              onClick={previous}
            >
              <KeyboardArrowLeftOutlined />
            </button>
            <button
              className="SlideBtn w-9 h-9 bg-white hover:bg-[#ff3e6c] text-black hover:text-white rounded-full"
              onClick={next}
            >
              <KeyboardArrowRightOutlined />
            </button>
          </div>
        </div>
        <div className="">
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef = slider;
            }}
          >
            {slides.map((slide, index) => (
              <div key={index}>
                <div className=" flex justify-center">
                  <div className=" flex flex-col items-center box">
                    <div className=" rounded-full overflow-hidden w-36 h-46 mb-4 border border-dashed border-white box_inner relative">
                      <img src={slide.image} alt="" />
                    </div>
                    <p className="font-bold duration-300">{slide.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="absolute -bottom-1 w-full">
        <img src={bgBottom} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default BrowseCate;
