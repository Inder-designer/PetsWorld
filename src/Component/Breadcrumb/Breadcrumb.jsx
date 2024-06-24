import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Breadcrumb.css';

const Breadcrumb = ({bg_color}) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;
    const decodedSegment = decodeURIComponent(segment.replace(/\+/g, ' '));
    const capitalizedSegment = decodedSegment.charAt(0).toUpperCase() + decodedSegment.slice(1);
    
    return isLast ? (
      <span key={index}>{capitalizedSegment}</span>
    ) : (
      <span className="tp-breadcrumb__active" key={index}>
        <Link to={path} className="tp-breadcrumb__active">{capitalizedSegment}</Link> <span className="dvdr">/</span> 
      </span>
    );
  });

  return (
    <div className="breadcrumb__area pb-3" style={{background:bg_color }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-breadcrumb__content">
              <div className="tp-breadcrumb__list">
                <span className="tp-breadcrumb__active">
                  <Link to="/">Home</Link> <span className="dvdr">/</span>
                </span>
                {breadcrumbItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
