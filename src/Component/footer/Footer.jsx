import React from 'react'
import "../../index.css"
import "./Footer.css"
import { Link } from 'react-router-dom'
// import img from 'assets/img/shape/footer-shape-1.svg'
// import footerShape from '../../../public/assets/img/shape/footer-shape-1.svg'

const Footer = () => {
  return (
    <div className=''>
      <section className="feature-area mainfeature__bg grey-bg pt-50 pb-40" style={{backgroundImage: `url(/assets/img/shape/footer-shape-1.svg)`}}>
            <div className="container">
               <div className="mainfeature__border pb-15">
                  <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2">
                     <div className="col">
                        <div className="mainfeature__item text-center mb-30">
                           <div className="mainfeature__icon">
                              <img src="./assets/img/icon/feature-icon-1.svg" alt=""/>
                           </div>
                           <div className="mainfeature__content">
                              <h4 className="mainfeature__title">Fast Delivery</h4>
                              <p>Across West & East India</p>
                           </div>
                        </div>
                     </div>
                     <div className="col">
                        <div className="mainfeature__item text-center mb-30">
                           <div className="mainfeature__icon">
                              <img src="./assets/img/icon/feature-icon-2.svg" alt=""/>
                           </div>
                           <div className="mainfeature__content">
                              <h4 className="mainfeature__title">safe payment</h4>
                              <p>100% Secure Payment</p>
                           </div>
                        </div>
                     </div>
                     <div className="col">
                        <div className="mainfeature__item text-center mb-30">
                           <div className="mainfeature__icon">
                              <img src="./assets/img/icon/feature-icon-3.svg" alt=""/>
                           </div>
                           <div className="mainfeature__content">
                              <h4 className="mainfeature__title">Online Discount</h4>
                              <p>Add Multi-buy Discount </p>
                           </div>
                        </div>
                     </div>
                     <div className="col">
                        <div className="mainfeature__item text-center mb-30">
                           <div className="mainfeature__icon">
                              <img src="./assets/img/icon/feature-icon-4.svg" alt=""/>
                           </div>
                           <div className="mainfeature__content">
                              <h4 className="mainfeature__title">Help Center</h4>
                              <p>Dedicated 24/7 Support </p>
                           </div>
                        </div>
                     </div>
                     <div className="col">
                        <div className="mainfeature__item text-center mb-30">
                           <div className="mainfeature__icon">
                              <img src="./assets/img/icon/feature-icon-5.svg" alt=""/>
                           </div>
                           <div className="mainfeature__content">
                              <h4 className="mainfeature__title">Curated items</h4>
                              <p>From Handpicked Sellers</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
       {/* footer-area-start  */}
      <footer>
         <div className="tpfooter__area theme-bg-2">
            <div className="tpfooter__top pb-15">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="tpfooter__widget footer-col-1 mb-50">
                           <h4 className="tpfooter__widget-title">Let Us Help You</h4>
                           <p>If you have any question, please <br/> contact us at: 
                              <Link htmlFor="mailto:support@example.com">support@example.com</Link>
                           </p>
                           <div className="tpfooter__widget-social mt-45">
                              <span className="tpfooter__widget-social-title mb-5">Social Media:</span>
                              <Link htmlFor="#"><i className="fab fa-facebook-f"></i></Link>
                              <Link htmlFor="#"><i className="fab fa-twitter"></i></Link>
                              <Link htmlFor="#"><i className="fab fa-youtube"></i></Link>
                              <Link htmlFor="#"><i className="fab fa-pinterest-p"></i></Link>
                              <Link htmlFor="#"><i className="fab fa-skype"></i></Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="tpfooter__widget footer-col-2 mb-50">
                           <h4 className="tpfooter__widget-title">Looking for Orfarm?</h4>
                           <p>68 St. Vicent Place, Glasgow, Greater <br/> Newyork NH2012, UK.</p>
                           <div className="tpfooter__widget-time-info mt-35">
                              <span>Monday – Friday: <b>8:10 AM – 6:10 PM</b></span>
                              <span>Saturday: <b>10:10 AM – 06:10 PM</b></span>
                              <span>Sunday: <b>Close</b></span>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-4 col-md-4 col-sm-5">
                        <div className="tpfooter__widget footer-col-3 mb-50">
                           <h4 className="tpfooter__widget-title">HOT CATEGORIES</h4>
                           <div className="tpfooter__widget-links">
                              <ul>
                                 <li><Link htmlFor="#">Fruits & Vegetables</Link></li>
                                 <li><Link htmlFor="#">Dairy Products</Link></li>
                                 <li><Link htmlFor="#">Package Foods</Link></li>
                                 <li><Link htmlFor="#">Beverage</Link></li>
                                 <li><Link htmlFor="#">Health & Wellness</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-8 col-sm-7">
                        <div className="tpfooter__widget footer-col-4 mb-50">
                           <h4 className="tpfooter__widget-title">Our newsletter</h4>
                           <div className="tpfooter__widget-newsletter">
                              <p>Subscribe to the Orfarm mailing list to receive updates <br/> on new arrivals & other information.</p>
                              <form action="index.html">
                                 <span><i><img src="./assets/img/shape/message-1.svg" alt=""/></i></span>
                                 <input type="email" placeholder="Your email address..."/>
                                 <button className="tpfooter__widget-newsletter-submit tp-news-btn">Subscribe</button>
                              </form>
                              <div className="tpfooter__widget-newsletter-check mt-10">
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                       I accept terms & conditions & privacy policy.
                                    </label>
                                  </div>                                  
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tpfooter___bottom pt-40 pb-40">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6 col-md-7 col-sm-12">
                        <div className="tpfooter__copyright">
                           <span className="tpfooter__copyright-text">Copyright © <Link htmlFor="#">ORFARM</Link> all rights reserved. Powered by <Link htmlFor="#">ThemePure</Link>.</span>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-5 col-sm-12">
                        <div className="tpfooter__copyright-thumb text-end">
                           <img src="./assets/img/shape/footer-payment.png " alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
       {/* footer-area-end  */}
    </div>
  )
}

export default Footer
