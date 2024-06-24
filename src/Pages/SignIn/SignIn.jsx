import React from 'react'

const SignIn = () => {
  return (
    <div>
       <section className="track-area pb-40">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-12">
                     <div className="tptrack__product mb-40">
                        <div className="tptrack__content grey-bg">
                           <div className="tptrack__item d-flex mb-20">
                              <div className="tptrack__item-icon">
                                 <i className="fal fa-user-unlock"></i>
                              </div>
                              <div className="tptrack__item-content">
                                 <h4 className="tptrack__item-title">Login Here</h4>
                                 <p>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                              </div>
                           </div>
                           <div className="tptrack__id mb-10">
                              <form action="#">
                                 <span><i className="fal fa-user"></i></span>
                                 <input type="email" placeholder="Username / email address"/>
                              </form>
                           </div>
                           <div className="tptrack__email mb-10">
                              <form action="#">
                                 <span><i className="fal fa-key"></i></span>
                                 <input type="text" placeholder="Password"/>
                              </form>
                           </div>
                           <div className="tpsign__remember d-flex align-items-center justify-content-between mb-15">
                              <div className="form-check">
                                 <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
                                 <label className="form-check-label" htmlFor="flexCheckDefault2">Remember me</label>
                              </div>
                              <div className="tpsign__pass">
                                 <a href="#">Forget Password</a>
                              </div>
                           </div>
                           <div className="tptrack__btn">
                              <button className="tptrack__submition active">Login Now<i className="fal fa-long-arrow-right"></i></button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                     <div className="tptrack__product mb-40">
                        <div className="tptrack__content grey-bg">
                           <div className="tptrack__item d-flex mb-20">
                              <div className="tptrack__item-icon">
                                 <i className="fal fa-lock"></i>
                              </div>
                              <div className="tptrack__item-content">
                                 <h4 className="tptrack__item-title">Sign Up</h4>
                                 <p>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                              </div>
                           </div>
                           <div className="tptrack__id mb-10">
                              <form action="#">
                                 <span><i className="fal fa-envelope"></i></span>
                                 <input type="email" placeholder="Email address"/>
                              </form>
                           </div>
                           <div className="tptrack__email mb-10">
                              <form action="#">
                                 <span><i className="fal fa-key"></i></span>
                                 <input type="text" placeholder="Password"/>
                              </form>
                           </div>
                           <div className="tpsign__account mb-15">
                              <a href="#">Already Have Account?</a>
                           </div>
                           <div className="tptrack__btn">
                              <button className="tptrack__submition tpsign__reg">Register Now<i className="fal fa-long-arrow-right"></i></button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </div>
  )
}

export default SignIn
