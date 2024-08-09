import React, { useState } from "react";
import product1 from "../../Assets/Images/Product1.jpg";
import product2 from "../../Assets/Images/Product2.jpg";
import "./TodayDeals.css";
import { Rating } from "@mui/material";
import { OfferEndTimer } from "../../helpers/Timer";
import { FavoriteBorderRounded, FavoriteOutlined, ShoppingBasketOutlined } from "@mui/icons-material";

const TodayDeals = () => {
  const data = [
    {
      id: 1,
      title: "Golden Retriever",
      price: 250,
      image: product2,
      description:
        "A gentle and affectionate breed with a strong sense of companionship. They are known for their friendly, curious nature and love to play fetch.",
      rating: 4.5,
      quantity: 50,
      discount: 50,
      category: "Pets",
      numOfReviews: 20,
      offerEnd: "10-08-2024",
    },
    {
      id: 2,
      title: "Pedigree",
      price: 2000,
      image: product1,
      description:
        "A gentle and affectionate breed with a strong sense of companionship. They are known for their friendly, curious nature and love to play fetch.",
      rating: 3,
      quantity: 50,
      discount: 20,
      category: "Pets",
      numOfReviews: 6,
      offerEnd: "12-08-2024",
    },
  ];

  const [timeLefts, setTimeLefts] = useState(data.map(() => ""));

  //   calculate Discount
  const calculateDiscount = (price, discount) => {
    const discountAmount = (price * discount) / 100;
    return price - discountAmount;
  };

  // set description two line ellipse
  const descriptionShort = (description) => {
    return description.length > 70
      ? `${description.substring(0, 70)}...`
      : description;
  };

  return (
    <div className="my-[70px] todayDeals">
      <div className="container mx-auto">
        <div className="mb-7 flex justify-center">
          <h4 className="text-3xl font-bold text-center relative">
            <span>Today’s Best Deals</span>
            <i className="custom-icon-foot-dog absolute right-[-28px] top-[-22px]"></i>
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div
              className="p-6 grid grid-cols-2 rounded-md border-[2px] hover:border-orange-500 !duration-300 border-orange-300 gap-6 box"
              key={item.id}
            >
              <div className="p-4 border border-dashed rounded-md relative imgOuter">
                <img
                  src={item.image}
                  alt=""
                  width="250px"
                  className="mx-auto"
                />
                <span className="px-3 py-1 rounded-md bg-orange-500 text-white font-medium text-sm absolute top-3 left-3">
                  -{item.discount}%
                </span>
                <ul className="absolute top-4 right-4 option">
                    <li className="mb-2">
                        <span className="cursor-pointer">
                            <FavoriteBorderRounded className="text-orange-500 !text-xl"/>
                        </span>
                    </li>
                    <li>
                        <span className="cursor-pointer">
                            <ShoppingBasketOutlined className="text-orange-500 !text-xl"/>
                        </span>
                    </li>
                </ul>
              </div>
              <div>
                <h6 className="text-xl hover:text-orange-500 duration-300 cursor-pointer">{item.title}</h6>
                <p className="mt-3 mb-2">
                  <span className="text-xl font-bold text-orange-500">
                    ${calculateDiscount(item.price, item.discount)}
                  </span>{" "}
                  <span className="line-through opacity-50 ml-1">
                    ${item.price}
                  </span>
                </p>
                <div className="flex items-center gap-1.5 mb-5">
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <span className="text-sm text-gray-500">
                    ({item.numOfReviews} Reviews)
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  {descriptionShort(item.description)}
                </p>
                <div className="mt-6">
                  <OfferEndTimer
                    endDate={item.offerEnd}
                    setTimeLeft={(time) => {
                      setTimeLefts((prev) => {
                        const newTimes = [...prev];
                        newTimes[index] = time;
                        return newTimes;
                      });
                    }}
                  />
                  <p>Hurry up! Sale ends in:</p>
                  <div className="flex gap-3 mt-2">
                    <p className="flex flex-col justify-between items-center py-1 px-3 border rounded-md border-orange-400">
                        <span className="text-xl font-bold text-orange-400">{timeLefts[index].days}</span>
                        <span className="text-sm">Days</span>
                    </p>
                    <p className="flex flex-col justify-between items-center py-1 px-3 border rounded-md border-orange-400">
                        <span className="text-xl font-bold text-orange-400">{timeLefts[index].hours}</span>
                        <span className="text-sm">Hrs</span>
                    </p>
                    <p className="flex flex-col justify-between items-center py-1 px-3 border rounded-md border-orange-400">
                        <span className="text-xl font-bold text-orange-400">{timeLefts[index].minutes}</span>
                        <span className="text-sm">Mins</span>
                    </p>
                    <p className="flex flex-col justify-between items-center py-1 px-3 border rounded-md border-orange-400">
                        <span className="text-xl font-bold text-orange-400">{timeLefts[index].seconds}</span>
                        <span className="text-sm">Secs</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodayDeals;
