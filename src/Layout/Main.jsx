import React from 'react';
import Header from '../Component/header/Header';
import Footer from '../Component/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Breadcrumb from '../Component/Breadcrumb/Breadcrumb';
import { BreadcrumbColorProvider, useBreadcrumbColor } from '../Component/Breadcrumb/BreadcrumbContext';
import ScrollToTopButton from '../Component/ScrollToTopButton/ScrollToTopButton';

const Main = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean); // Filter out empty segments

  // Capitalize each segment for the breadcrumb
  let pageName = '';
  if (pathSegments.length > 0) {
    pageName = pathSegments.map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)).join(" / ");
  }

  const { breadcrumbColor, handleBreadcrumbColorChange } = useBreadcrumbColor();

  const defaultColor = '#fff'; // Define your default color here

  // Reset breadcrumb color to default when the location changes and no specific color is set
  React.useEffect(() => {
    handleBreadcrumbColorChange(defaultColor);
  }, [location]);

  return (
    <div>
      <ScrollToTopButton/>
      <Header />
      <div>
        {pathSegments.length > 0 && <Breadcrumb bg_color={breadcrumbColor || pageName} />}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BreadcrumbColorProvider>
      <Main />
    </BreadcrumbColorProvider>
  );
};

export default App;
