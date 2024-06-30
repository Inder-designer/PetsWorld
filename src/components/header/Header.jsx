import {
  FavoriteBorder,
  KeyboardArrowDown,
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../../actions/userAction";
import { getCartItems } from "../../actions/cartAction";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { cart, isLoading } = useSelector((state) => state.cartItems);
  // console.log(cart,"cart");

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const HandleLogout = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);


  return (
    <>
      <header className="bg-white border-b">
        <div className="container mx-auto">
          <nav
            className="flex items-center justify-between px-4"
            aria-label="Global"
          >
            <div className="flex">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
            </div>
            <div className=" menu">
              <ul className="flex items-center">
                <li className="py-6 px-3 text-sm uppercase font-semibold ">
                  <a href="" className="flex items-center text-gray-800">
                    Dogs <KeyboardArrowDown className="!text-lg" />
                  </a>
                </li>
                <li className="py-6 px-3 text-sm uppercase font-semibold ">
                  <a href="" className="flex items-center text-gray-800">
                    Cats <KeyboardArrowDown className="!text-lg" />
                  </a>
                </li>
                <li className="py-6 px-3 text-sm uppercase font-semibold ">
                  <a href="" className="flex items-center text-gray-800">
                    Other Pets <KeyboardArrowDown className="!text-lg" />
                  </a>
                </li>
                <li className="py-6 px-3 text-sm uppercase font-semibold ">
                  <a href="" className="flex items-center text-gray-800">
                    Brands <KeyboardArrowDown className="!text-lg" />
                  </a>
                </li>
                <li className="py-6 px-3 text-sm uppercase font-semibold ">
                  <a href="" className="flex items-center text-gray-800">
                    Age Groups <KeyboardArrowDown className="!text-lg" />
                  </a>
                </li>
                <li className="py-6 px-3 text-sm uppercase font-semibold ">
                  <a href="" className="text-gray-800">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex items-center gap-3">
                <li>
                  <a
                    className="w-10 h-10 rounded-full bg-[#f5f2ff] flex justify-center items-center"
                    href=""
                  >
                    <Search className="bg-transparent !text-xl text-gray-700" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-10 h-10 rounded-full bg-[#ecfbff] flex justify-center items-center"
                    href=""
                  >
                    <FavoriteBorder className="bg-transparent !text-xl text-gray-700" />
                  </a>
                </li>
                <li>
                  <Link
                    className="relative w-10 h-10 rounded-full bg-[#feefd0] flex justify-center items-center"
                    to="/cart"
                  >
                    <ShoppingCartOutlined className="bg-transparent !text-xl text-gray-700" />
                    {!isLoading && cart && cart.cartItems && (
                      <span className="absolute w-5 h-5 -top-1.5 -right-1.5 flex items-center justify-center bg-[#ee6666cc] rounded-full text-white font-semibold text-xs">
                        {cart.cartItems.length}
                      </span>
                    )}
                  </Link>
                </li>
                <li className="relative inline-block text-left">
                  <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="w-10 h-10 rounded-full bg-[#f5f2ff] flex justify-center items-center peer"
                  >
                    <PersonOutlineOutlined className="bg-transparent !text-xl text-gray-700" />

                    <div
                      className={`absolute top-full right-0 mt-1 w-[120px] text-left shadow-lg bg-white ${
                        isOpen ? "opacity-1 visible" : "opacity-0 invisible"
                      }`}
                    >
                      <ul>
                        <li>
                          <Link
                            className="px-4 py-2 w-full inline-block hover:bg-gray-50"
                            to="/profile"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <a
                            className="px-4 py-2 w-full inline-block hover:bg-gray-50"
                            href="/orders"
                          >
                            My Orders
                          </a>
                        </li>
                        <li>
                          <a
                            className="px-4 py-2 w-full inline-block hover:bg-gray-50"
                            onClick={HandleLogout}
                          >
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
