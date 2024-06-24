import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>

      {/* contact-area-start  */}
      <section className="contact-area mb-45">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="tpcontact-inner text-center mt-20 mb-40">
                <div className="tpcontact-inner-text">
                  <h5 className="tpcontact-inner-sub-title">Contact us</h5>
                  <h5 className="tpcontact-inner-title mb-20">
                    Looking For Orfarm?
                  </h5>
                  <p>
                    The liber tempor cum soluta nobis eleifend option congue
                    doming quod mazim.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="tpcontact mb-30">
                <div className="tpcontact__img mb-15 w-img">
                  <img src="./assets/img/banner/contact-big-bg1.jpg" alt="" />
                </div>
                <div className="tplocation__text">
                  <h4 className="tplocation__text-title">Rue Pelleport - Paris</h4>
                  <div className="tplocation__content tplocation__content-two">
                    <ul>
                      <li>
                        <Link href="#">Add: Heaven Stress, Beverly Melbourne </Link>
                      </li>
                      <li>
                        <Link href="tel:012345678">Phone: (+100) 123 456 7890</Link>
                      </li>
                      <li>
                        <Link href="mailto:orfarm@google.com">
                          Email: Orfarm@google.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="tpcontact mb-30">
                <div className="tpcontact__img mb-15 w-img">
                  <img src="./assets/img/banner/contact-big-bg2.jpg" alt="" />
                </div>
                <div className="tplocation__text">
                  <h4 className="tplocation__text-title">Prospect - New York</h4>
                  <div className="tplocation__content tplocation__content-two">
                    <ul>
                      <li>
                        <Link href="#">Add: Heaven Stress, Beverly Melbourne </Link>
                      </li>
                      <li>
                        <Link href="tel:012345678">Phone: (+100) 123 456 7890</Link>
                      </li>
                      <li>
                        <Link href="mailto:orfarm@google.com">
                          Email: Orfarm@google.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="tpcontact mb-30">
                <div className="tpcontact__img mb-15 w-img">
                  <img src="./assets/img/banner/contact-big-bg3.jpg" alt="" />
                </div>
                <div className="tplocation__text">
                  <h4 className="tplocation__text-title">Budapest - Hungary</h4>
                  <div className="tplocation__content tplocation__content-two">
                    <ul>
                      <li>
                        <Link href="#">Add: Heaven Stress, Beverly Melbourne </Link>
                      </li>
                      <li>
                        <Link href="tel:012345678">Phone: (+100) 123 456 7890</Link>
                      </li>
                      <li>
                        <Link href="mailto:orfarm@google.com">
                          Email: Orfarm@google.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="tpcontact mb-30 w-img">
                <div className="tpcontact__img mb-15">
                  <img src="./assets/img/banner/contact-big-bg4.jpg" alt="" />
                </div>
                <div className="tplocation__text">
                  <h4 className="tplocation__text-title">Kastrup - Denmark</h4>
                  <div className="tplocation__content tplocation__content-two">
                    <ul>
                      <li>
                        <Link href="#">Add: Heaven Stress, Beverly Melbourne </Link>
                      </li>
                      <li>
                        <Link href="tel:012345678">Phone: (+100) 123 456 7890</Link>
                      </li>
                      <li>
                        <Link href="mailto:orfarm@google.com">
                          Email: Orfarm@google.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact-area-end  */}

      {/* map-area-start  */}
      <section className="map-area tpmap__box">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-6 col-md-6 order-2 order-md-1">
              <div className="tpmap__wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56215.718841453985!2d-0.19959027821222705!3d51.48739183082915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slondon%20eye!5e0!3m2!1sen!2sbd!4v1656749326947!5m2!1sen!2sbd"
                  style={{border: 0}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  width="600"
                  height="450"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 order-1 order-md-2">
              <div className="tpform__wrapper pt-120 pb-80 ml-60">
                <h4 className="tpform__title">LEAVE A REPLY</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div className="tpform__box">
                  <form action="#">
                    <div className="row gx-7">
                      <div className="col-lg-6">
                        <div className="tpform__input mb-20">
                          <input type="text" placeholder="Your Name *" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="tpform__input mb-20">
                          <input type="email" placeholder="Your Email *" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="tpform__input mb-20">
                          <input type="text" placeholder="Subject *" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="tpform__input mb-20">
                          <input type="text" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="tpform__textarea">
                          <textarea
                            name="message"
                            placeholder="Message"
                          ></textarea>
                          <div className="tpform__textarea-check mt-20 mb-25">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault01"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault01"
                              >
                                I am bound by the terms of the{" "}
                                <Link href="#">Service I accept Privacy Policy.</Link>
                              </label>
                            </div>
                          </div>
                          <button>Send message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* map-area-end  */}

      {/* feature-area-start  */}
      {/* <section
        className="feature-area mainfeature__bg pt-50 pb-40"
        data-background="./assets/img/shape/footer-shape-1.svg"
      >
        <div className="container">
          <div className="mainfeature__border pb-15">
            <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2">
              <div className="col">
                <div className="mainfeature__item text-center mb-30">
                  <div className="mainfeature__icon">
                    <img src="./assets/img/icon/feature-icon-1.svg" alt="" />
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
                    <img src="./assets/img/icon/feature-icon-2.svg" alt="" />
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
                    <img src="./assets/img/icon/feature-icon-3.svg" alt="" />
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
                    <img src="./assets/img/icon/feature-icon-4.svg" alt="" />
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
                    <img src="./assets/img/icon/feature-icon-5.svg" alt="" />
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
      </section> */}
      {/* feature-area-end  */}
    </div>
  );
};

export default ContactUs;
