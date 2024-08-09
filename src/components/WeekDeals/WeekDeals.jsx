import React from "react";
import offer1 from "../../Assets/Images/offers/offer1.png";
import offer1Bg from "../../Assets/Images/offers/offer1Bg.jpg";
import offer2 from "../../Assets/Images/offers/offer2.png";
import offer2Bg from "../../Assets/Images/offers/offer2Bg.jpg";
import offer3 from "../../Assets/Images/offers/offer3.png";
import offer3Bg from "../../Assets/Images/offers/offer3Bg.jpg";
import offer4 from "../../Assets/Images/offers/offer4.png";
import offer4Bg from "../../Assets/Images/offers/offer4Bg.jpg";
import offer5 from "../../Assets/Images/offers/offer5.png";
import offer5Bg from "../../Assets/Images/offers/offer5Bg.jpg";
import "./weekDeals.css";

const WeekDeals = () => {
  const offers = [
    {
      image: offer1,
      bg: offer1Bg,
    },
    {
      image: offer2,
      bg: offer2Bg,
    },
    {
      image: offer3,
      bg: offer3Bg,
    },
  ];
  return (
    <div className="mb-[70px] weeklyDeals">
      <div className="container mx-auto">
        <div className="mb-7 flex justify-center">
          <h4 className="text-3xl font-bold text-center relative">
            <span>This Week Deals</span>
            <i className="custom-icon-foot-dog absolute right-[-28px] top-[-22px]"></i>
          </h4>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-6">
            {offers.map((item) => (
              <div className="relative overflow-hidden box_outer rounded-md">
                <div
                  className="absolute w-[calc(100%_+_50px)] h-full -z-10 translate-x-[-50px] duration-300 boxBg"
                  style={{
                    backgroundImage: `url(${item.bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div>
                  <img src={item.image} alt="" width="100%" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="relative overflow-hidden box_outer rounded-md">
              <div
                className="absolute w-[calc(100%_+_50px)] h-full -z-10 translate-x-[-50px] duration-300 boxBg"
                style={{
                  backgroundImage: `url(${offer4Bg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div>
                <img src={offer4} alt="" width="100%" />
              </div>
            </div>
            <div className="relative overflow-hidden box_outer rounded-md">
              <div
                className="absolute w-[calc(100%_+_50px)] h-full -z-10 translate-x-[-50px] duration-300 boxBg"
                style={{
                  backgroundImage: `url(${offer5Bg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div>
                <img src={offer5} alt="" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekDeals;
