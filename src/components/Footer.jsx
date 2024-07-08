import {
  Facebook,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2d2c6e] text-white py-10 border-t">
      <div className="container mx-auto">
        <div className="">
          <div className="flex pb-12">
            <div className="w-[30%]">
              <h6 className="font-medium uppercase text-sm">Let us help you</h6>
              <p className="text-sm mt-5 font-medium mb-8 text-gray-400">
                If you have any question, please contact us at:
                <span className="text-[#388e3c]"> support@example.com</span>
              </p>
              <div>
                <p className="text-sm font-medium text-gray-400">
                  Social Media:
                </p>
                <ul className="flex gap-2 mt-2">
                  <li>
                    <FacebookOutlined className="!text-xl hover:text-[#388e3c]" />
                  </li>
                  <li>
                    <Instagram className="!text-xl hover:text-[#388e3c]" />
                  </li>
                  <li>
                    <Twitter className="!text-xl hover:text-[#388e3c]" />
                  </li>
                  <li>
                    <YouTube className="!text-xl hover:text-[]#388e3c" />
                  </li>
                  <li>
                    <LinkedIn className="!text-xl hover:text-[#388e3c]" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[15%]">
              <h6 className="font-medium uppercase text-sm">Quick Links</h6>
              <ul className="mt-5">
                <li className="my-3">
                  <a
                    href=""
                    className="hover:ml-2 text-gray-400 hover:text-[white]"
                  >
                    About Us
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href=""
                    className="hover:ml-2 text-gray-400 hover:text-[white]"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href=""
                    className="hover:ml-2 text-gray-400 hover:text-[white]"
                  >
                    FAQ
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href=""
                    className="hover:ml-2 text-gray-400 hover:text-[white]"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[15%]">
              <div className="ml-5">
                <h6 className="font-medium uppercase text-sm">
                  CUSTOMER POLICIES
                </h6>
                <ul className="mt-5">
                  <li className="my-3">
                    <a
                      href=""
                      className="hover:ml-2 text-gray-400 hover:text-white"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="my-3">
                    <a
                      href=""
                      className="hover:ml-2 text-gray-400 hover:text-white"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="my-3">
                    <a
                      href=""
                      className="hover:ml-2 text-gray-400 hover:text-white"
                    >
                      Return Policy
                    </a>
                  </li>
                  <li className="my-3">
                    <a
                      href=""
                      className="hover:ml-2 text-gray-400 hover:text-white"
                    >
                      Refund Policy
                    </a>
                  </li>
                  <li className="my-3">
                    <a
                      href=""
                      className="hover:ml-2 text-gray-400 hover:text-white"
                    >
                      Shipping Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[40%]">
              <div className="pl-20 ml-12 border-l border-[rgba(255,255,255,0.3)]">
                <h6 className="font-medium uppercase text-sm">
                  OUR NEWSLETTER
                </h6>
                <p className="text-sm mt-5 font-medium text-gray-400">
                  Subscribe to the Orfarm mailing list to receive updates on new
                  arrivals & other information.
                </p>
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600"
                  />
                  <button className="bg-indigo-500 text-white px-3 py-2 rounded-md mt-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-8 border-t border-[rgba(255,255,255,0.3)]">
            <div>
              <p className="text-sm text-gray-400">
                Copyright © 2021 Pet World. All rights reserved
              </p>
            </div>
            <div>
                {/* Logo */}
                {/* <img src="" alt="" width="100px" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
