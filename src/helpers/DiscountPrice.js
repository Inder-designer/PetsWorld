import React from 'react';

const DiscountPrice = (originalPrice, discountPercentage ) => {
    // console.log(originalPrice,discountedPrice, "sasa");
  // Calculate discount percentage
  const calculateDiscountPercentage = () => {
    if (originalPrice === 0) return 0;
    if (discountPercentage === 0) return originalPrice;
    const discountedPrice = originalPrice * (1 - discountPercentage / 100);
    return Math.round(discountedPrice)
  };

  return calculateDiscountPercentage(originalPrice,discountPercentage)
};

export default DiscountPrice;
