import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      {/* cart area   */}
         <section className="cart-area pb-80">
            <div className="container">
            <div className="row">
               <div className="col-12">
                     <form action="#">
                        <div className="table-content table-responsive">
                           <table className="table">
                                 <thead>
                                    <tr>
                                       <th className="product-thumbnail">Images</th>
                                       <th className="cart-product-name">Courses</th>
                                       <th className="product-price">Unit Price</th>
                                       <th className="product-quantity">Quantity</th>
                                       <th className="product-subtotal">Total</th>
                                       <th className="product-remove">Remove</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td className="product-thumbnail">
                                          <Link href="shop-details.html">
                                             <img src="./assets/img/product/product1.jpg" alt=""/>
                                          </Link>
                                       </td>
                                       <td className="product-name">
                                          <Link href="shop-details.html">Summer Breakfast For Healthy Morning</Link>
                                       </td>
                                       <td className="product-price">
                                          <span className="amount">$130.00</span>
                                       </td>
                                       <td className="product-quantity">
                                             <span className="cart-minus">-</span>
                                             <input className="cart-input" type="text" value="1"/>
                                             <span className="cart-plus">+</span>
                                       </td>
                                       <td className="product-subtotal">
                                          <span className="amount">$130.00</span>
                                       </td>
                                       <td className="product-remove">
                                          <Link href="#"><i className="fa fa-times"></i></Link>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="product-thumbnail">
                                          <Link href="shop-details.html">
                                             <img src="./assets/img/product/product2.jpg"  alt=""/>
                                          </Link>
                                       </td>
                                       <td className="product-name">
                                          <Link href="shop-details.html">The Best Great Benefits Of Fresh Beef</Link>
                                       </td>
                                       <td className="product-price">
                                          <span className="amount">$120.50</span>
                                       </td>
                                       <td className="product-quantity">
                                             <span className="cart-minus">-</span>
                                             <input className="cart-input" type="text" value="1"/>
                                             <span className="cart-plus">+</span>
                                       </td>
                                       <td className="product-subtotal">
                                          <span className="amount">$120.50</span>
                                       </td>
                                       <td className="product-remove">
                                          <Link href="#"><i className="fa fa-times"></i></Link>
                                       </td>
                                    </tr>
                                 </tbody>
                           </table>
                        </div>
                        <div className="row">
                           <div className="col-12">
                                 <div className="coupon-all">
                                    <div className="coupon">
                                       <input id="coupon_code" className="input-text" name="coupon_code" value=""
                                             placeholder="Coupon code" type="text"/>
                                       <button className="tp-btn tp-color-btn banner-animation" name="apply_coupon" type="submit">Apply
                                             Coupon</button>
                                    </div>
                                    <div className="coupon2">
                                       <button className="tp-btn tp-color-btn banner-animation" name="update_cart" type="submit">Update cart</button>
                                    </div>
                                 </div>
                           </div>
                        </div>
                        <div className="row justify-content-end">
                           <div className="col-md-5 ">
                                 <div className="cart-page-total">
                                    <h2>Cart totals</h2>
                                    <ul className="mb-20">
                                       <li>Subtotal <span>$250.00</span></li>
                                       <li>Total <span>$250.00</span></li>
                                    </ul>
                                    <Link href="checkout.html" className="tp-btn tp-color-btn banner-animation">Proceed to Checkout</Link>
                                 </div>
                           </div>
                        </div>
                     </form>
               </div>
            </div>
            </div>
         </section>
         {/* cart area end  */}
    </div>
  );
};

export default Cart;
