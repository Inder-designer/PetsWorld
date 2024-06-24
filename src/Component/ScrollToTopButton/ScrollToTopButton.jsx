import React from 'react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling animation
    });
  };

  return (
    <button className="scroll-top scroll-to-target" data-target="html" onClick={scrollToTop}>
      <i className="icon-chevrons-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
