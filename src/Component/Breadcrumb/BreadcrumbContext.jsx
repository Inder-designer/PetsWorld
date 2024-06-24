import React, { createContext, useContext, useState } from 'react';

const defaultColor = '#fff'; // Set your default color value here
const BreadcrumbColorContext = createContext();

export const useBreadcrumbColor = () => {
  return useContext(BreadcrumbColorContext);
};

export const BreadcrumbColorProvider = ({ children }) => {
  const [breadcrumbColor, setBreadcrumbColor] = useState(defaultColor);

  const handleBreadcrumbColorChange = (color) => {
    setBreadcrumbColor(color || defaultColor);
  };

  return (
    <BreadcrumbColorContext.Provider value={{ breadcrumbColor, handleBreadcrumbColorChange }}>
      {children}
    </BreadcrumbColorContext.Provider>
  );
};
