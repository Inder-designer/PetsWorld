import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  return (
    <div className="tpproduct p-relative">
      <div className="tpproduct__thumb p-relative text-center">
        <Link href="shop-details-4.html">
          <img src={product.img} alt="" />
        </Link>
        <Link className="tpproduct__thumb-img" href="shop-details-4.html">
          <img src={product.img} alt="" />
        </Link>
        <div className="tpproduct__info bage">
          <span className="tpproduct__info-discount bage__discount">-50%</span>
          <span className="tpproduct__info-hot bage__hot">HOT</span>
        </div>
        <div className="tpproduct__shopping">
          <Link className="tpproduct__shopping-wishlist" href="wishlist.html">
            <i className="icon-heart icons"></i>
          </Link>
          <Link className="tpproduct__shopping-wishlist" href="#">
            <i className="icon-layers"></i>
          </Link>
          <Link className="tpproduct__shopping-cart" href="#">
            <i className="icon-eye"></i>
          </Link>
        </div>
      </div>
      <div className="tpproduct__content">
        <span className="tpproduct__content-weight">
          <Link href="shop-details-4.html">Fresh Fruits</Link>,
          <Link href="shop-details-4.html">Vagetables</Link>
        </span>
        <h4 className="tpproduct__title">
          <Link href="shop-details-4.html">Mangosteen Organic From VietNamese</Link>
        </h4>
        <div className="tpproduct__rating mb-5">
          <Link href="#">
            <i className="icon-star_outline1"></i>
          </Link>
          <Link href="#">
            <i className="icon-star_outline1"></i>
          </Link>
          <Link href="#">
            <i className="icon-star_outline1"></i>
          </Link>
          <Link href="#">
            <i className="icon-star_outline1"></i>
          </Link>
          <Link href="#">
            <i className="icon-star_outline1"></i>
          </Link>
        </div>
        <div className="tpproduct__price">
          <span>$56.00</span>
          <del>$19.00</del>
        </div>
      </div>
      <div className="tpproduct__hover-text">
        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
          <Link className="tp-btn-2" href="shop-details-4.html">
            Add to cart
          </Link>
        </div>
        <div className="tpproduct__descrip">
          <ul>
            <li>Type: Organic</li>
            <li>MFG: August 4.2021</li>
            <li>LIFE: 60 days</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
