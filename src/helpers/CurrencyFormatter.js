import React, { useEffect, useState } from 'react';

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

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  // Get the components of the date
  const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if needed
  const month = date.toLocaleString('default', { month: 'short' });
  const weekday = date.toLocaleString('default', { weekday: 'short' });

  // Construct the desired format
  return `${weekday}, ${day} ${month}`;
};

export const Progress = ({ progress, size }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (progress === "Processing") {
        setWidth(0);
      } else if (progress === "Shipped") {
        setWidth(40);
      } else if (progress === "Delivered" || progress === "Cancelled") {
        setWidth(100);
      } else {
        setWidth(0); // Default width when progress doesn't match any condition
      }
    };

    // Simulate delay for animation effect (adjust the delay time as needed)
    const timeout = setTimeout(updateWidth, 200);

    return () => clearTimeout(timeout);
  }, [progress]);

  // Determine the size of the progress bar based on the size prop
  let barHeight = 'h-3'; // Default height
  if (size === 'sm') {
    barHeight = 'h-1'; // Small height
  }

  return (
    <div className='pr-14'>
      <div className='flex items-center text-xs relative py-4'>
        <span className={`absolute top-0 -left-8 after:content-[""] after:w-3 after:h-3 after:absolute after:bottom-[-23px] after:rounded-[100%] after:left-[26px] ${width >= 0 ? 'after:bg-blue-600 text-blue-600 font-medium' : 'after:bg-gray-300'}`}>Order Confirmed</span>
        {progress !== "Cancelled" &&
        <span className={`absolute top-0 left-[34%] after:content-[""] after:w-3 after:h-3 after:absolute after:bottom-[-23px] after:rounded-[100%] after:left-[17px] ${width >= 40 ? 'after:bg-blue-600 text-blue-600 font-medium' : 'after:bg-gray-300'}`}>Shipped</span>
        }
        <span className={`absolute top-0 right-[-20px] after:content-[""] after:w-3 after:h-3 after:absolute after:bottom-[-23px] after:rounded-[100%] after:left-[24px] ${width >= 100
              ? progress == "Cancelled"
                ? "after:bg-red-600 text-red-600 font-medium"
                : "after:bg-blue-600 text-blue-600 font-medium"
              : "after:bg-gray-300 text-gray-300 font-medium"
          }`}>{progress !== "Cancelled" ? "Delivered" : "Cancelled"}</span>
      </div>
      <div className={`w-[400px] ${barHeight} rounded-lg bg-gray-200`}>
        <div className={`h-full bg-blue-600 !duration-[1.5s]`} style={{ width:  `${width}%`, transition: 'width 1s ease-in-out' }}></div>
      </div>
    </div>
  );
};

