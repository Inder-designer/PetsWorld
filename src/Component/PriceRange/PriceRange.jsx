import React, { useState } from "react";
import ReactSlider from "react-slider";
import './PriceRange.css';

const PriceRange = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);

  const handleSliderChange = (values) => {
    setPriceRange(values);
  };

  return (
    <div className="tpshop__widget mb-30 pb-25">
      <h4 className="tpshop__widget-title mb-20">FILTER BY PRICE</h4>
      <div className="productsidebar">
        <div className="productsidebar__head"></div>
        <div className="productsidebar__range">
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
            min={0}
            max={1000}
            value={priceRange}
            onChange={handleSliderChange}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          />
          <div className="price-filter mt-10">
            <input
              type="text"
              id="amount"
              value={`$${priceRange[0]} - $${priceRange[1]}`}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="productsidebar__btn mt-15 mb-15">
        <a href="#">FILTER</a>
      </div>
    </div>
  );
};

export default PriceRange;
