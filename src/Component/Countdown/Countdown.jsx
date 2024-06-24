import React from 'react'
import { Link } from 'react-router-dom'
import TimerCountdown from '../TimerCountdown/TimerCountdown'

const Countdown = () => {
  return (
    <div>
      <section className="product-coundown-area tpcoundown__bg grey-bg pb-25" style={{backgroundImage: `url(assets/img/banner/banner2.png)`, backgroundPosition:'center'}}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="tpcoundown p-relative ml-175">
                        <div className="section__content mb-35">
                           <span className="section__sub-title mb-10">~ Deals Of The Day ~</span>
                           <h2 className="section__title mb-25">Pedigree Chicken & <br/> Vegetables Dog Food</h2>
                           <p>Strong muscles: Has high quality digestible animal  <br/>
                           Protein from meat & cereals.</p>
                        </div>
                        <div className="tpcoundown__count">
                           <h4 className="tpcoundown__count-title">hurry up! Offer End In:</h4>
                           <TimerCountdown date="2024/06/20 " />
                           <div className="tpcoundown__countdown" data-countdown="2022/11/11"></div>
                           <div className="tpcoundown__btn mt-50">
                              <Link className="whight-btn" href="shop-details-grid.html">Shop Now</Link>
                              <Link className="whight-btn border-btn ml-15" href="shop-list-view.html">View Menu</Link>
                           </div>
                        </div>
                        <div className="tpcoundown__shape d-none d-lg-block">
                           <img className="tpcoundown__shape-one" src="./assets/img/shape/tree-leaf-1.svg" alt=""/>
                           <img className="tpcoundown__shape-two" src="./assets/img/shape/tree-leaf-2.svg" alt=""/>
                           {/* <img className="tpcoundown__shape-three" src="./assets/img/shape/tree-leaf-3.svg" alt=""/> */}
                           {/* <img className="tpcoundown__shape-four" src="./assets/img/shape/fresh-shape-1.svg" alt=""/> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </div>
  )
}

export default Countdown
