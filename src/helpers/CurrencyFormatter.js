import React from 'react';

const CurrencyFormat = (value, digit) => {
  const formatToINR = (number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency', currency: 'INR',
      minimumFractionDigits: digit,
      maximumFractionDigits: digit,
    }).format(number);
  };

  return formatToINR(value)
};

export default CurrencyFormat;