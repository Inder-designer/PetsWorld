import React from 'react'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <div>
      <section className="product-feature-area product-feature grey-bg pt-80 pb-40">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-12">
                     <div className="tpfeature__thumb p-relative pb-40">
                        <img src="./assets/img/product/best1.png" alt=""/>
                        <div className="tpfeature__shape d-none d-md-block">
                           {/* <img className="tpfeature__shape-one" src="./assets/img/product/feature-shape-1.png" alt=""/> */}
                           {/* <img className="tpfeature__shape-two" src="./assets/img/product/feature-shape-2.png" alt=""/> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                     <div className="tpproduct-feature p-relative pt-45 pb-40">
                        <div className="tpsection tpfeature__content mb-35">
                           <h4 className="tpsection__sub-title mb-0">~ The Best For Your ~</h4>
                           <h4 className="tpsection__title tpfeature__title mb-25">Organic Drinks <br/> <span>Easy Healthy</span> - Happy Life</h4>
                           <p>The liber tempor cum soluta nobis eleifend option congue <br/> doming quod mazim placerat facer possim assum.</p>
                        </div>
                        <div className="row">
                           <div className="col-lg-6 col-md-6">
                              <div className="tpfeature__box">
                                 <div className="tpfeature__product-item mb-25">
                                    <h4 className="tpfeature__product-title">Fresh Fruits:</h4>
                                    <span className="tpfeature__product-info">Apples, Berries & Cherries</span>
                                 </div>
                                 <div className="tpfeature__product-item mb-45">
                                    <h4 className="tpfeature__product-title">Expiry Date:</h4>
                                    <span className="tpfeature__product-">See on The Bottle Cap</span>
                                 </div>
                                 <div className="tpfeature__btn">
                                    <Link className="tp-btn-4" href="cart.html">Add To Cart</Link>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6">
                              <div className="tpfeature__box">
                                 <div className="tpfeature__product-item mb-25">
                                    <h4 className="tpfeature__product-title">Ingredient:</h4>
                                    <span className="tpfeature__product-info">Energy, Protein, Sugars</span>
                                 </div>
                                 <div className="tpfeature__product-item mb-45">
                                    <h4 className="tpfeature__product-title">Bootle Size:</h4>
                                    <span className="tpfeature__product-">500ml – 1000ml</span>
                                 </div>
                                 <div className="tpfeature__btn">
                                    <Link className="tp-btn-3" href="shop-2.html">View More</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tpfeature__shape d-none d-md-block">
                           {/* <img className="tpfeature__shape-three" src="./assets/img/product/feature-shape-3.png" alt=""/> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
          {/* banner-area-start  */}
         <section className="banner-area pb-60 grey-bg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4 col-md-6">
                     <div className="tpbanner__item mb-30">
                        <Link href="shop-3.html">
                           <div className="tpbanner__content" style={{backgroundImage: `url(/assets/img/banner/bb1.png)`}}>
                              <span className="tpbanner__sub-title mb-10">Top offers</span>
                              <h4 className="tpbanner__title mb-30">Eat Green <br/> Best For Family</h4>
                              <p>Free Shipping 05km</p>
                           </div>
                        </Link>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="tpbanner__item mb-30">
                        <Link href="shop-3.html"><div className="tpbanner__content" style={{backgroundImage: `url(assets/img/banner/bb2.png)`}}>
                           <span className="tpbanner__sub-title tpbanner__white mb-10">Weekend Deals</span>
                           <h4 className="tpbanner__title mb-30">Fresh Food <br/> Restore Health</h4>
                        </div></Link>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="tpbanner__item mb-30">
                        <Link href="shop-3.html">
                           <div className="tpbanner__content" style={{backgroundImage: `url(assets/img/banner/bb3.png)`}}>
                              <span className="tpbanner__sub-title mb-10">Top seller</span>
                              <h4 className="tpbanner__title mb-30">Healthy <br/> Fresh Free Br/ead</h4>
                              <p>Limited Time: Online Only!</p>
                           </div>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
          {/* banner-area-end  */}
    </div>
  )
}

export default Feature
