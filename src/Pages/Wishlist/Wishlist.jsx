import React from 'react'

const Wishlist = () => {
  return (
    <div>
      <div className="cart-area pb-80">
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
                                       <th className="product-add-to-cart">Add To Cart</th>
                                       <th className="product-remove">Remove</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td className="product-thumbnail">
                                          <a href="shop-details.html">
                                             <img src="./assets/img/product/product1.jpg" alt=""/>
                                          </a>
                                       </td>
                                       <td className="product-name">
                                          <a href="shop-details.html">Summer Breakfast For Healthy Morning</a>
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
                                       <td className="product-add-to-cart">
                                          <button className="tp-btn tp-color-btn  tp-wish-cart banner-animation">Add To Cart</button>
                                       </td>
                                       <td className="product-remove">
                                          <a href="#"><i className="fa fa-times"></i></a>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="product-thumbnail">
                                          <a href="shop-details.html">
                                             <img src="./assets/img/product/product2.jpg"  alt=""/>
                                          </a>
                                       </td>
                                       <td className="product-name">
                                          <a href="shop-details.html">The Best Great Benefits Of Fresh Beef</a>
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
                                       <td className="product-add-to-cart">
                                          <button className="tp-btn tp-color-btn tp-wish-cart banner-animation">Add To Cart</button>
                                       </td>
                                       <td className="product-remove">
                                          <a href="#"><i className="fa fa-times"></i></a>
                                       </td>
                                    </tr>
                                 </tbody>
                           </table>
                        </div>
                     </form>
               </div>
            </div>
            </div>
         </div>
    </div>
  )
}

export default Wishlist
