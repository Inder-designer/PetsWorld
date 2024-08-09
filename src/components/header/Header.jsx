import {
  Close,
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
import { getFilterProduct, getProduct } from "../../actions/productAction";
import { useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { cart, isLoading } = useSelector((state) => state.cartItems);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [searchValue, setSearchValue] = useState();
  const [searchActive, setSearchActive] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const HandleLogout = () => {
    dispatch(userLogout(navigate));
  };

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const searchProduct = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?q=${searchValue}`);
      dispatch(getFilterProduct(searchValue.trim()));
      setSearchActive(false)
    } else {
      dispatch(getProduct());
    }
  };

  return (
    <>
      <header className="bg-white border-b">
        <div className="container mx-auto">
          <nav
            className="flex items-center justify-between px-4 relative"
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
            <NavMenu/>
            <div>
              <ul className="flex items-center gap-3">
                <li>
                  <a
                    className="w-10 h-10 rounded-full cursor-pointer bg-[#f5f2ff] flex justify-center items-center"
                    onClick={() => setSearchActive(true)}
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
                    to={!isAuthenticated ? "/sign-in?redirect=cart" : "/cart"}
                  >
                    <ShoppingCartOutlined className="bg-transparent !text-xl text-gray-700" />
                    {!isLoading && cart && cart.cartItems.length > 0 && (
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
                      className={`absolute top-[90%] right-0 mt-1 w-[120px] z-10 text-left shadow-lg bg-white ${
                        isOpen ? "opacity-1 visible" : "opacity-0 invisible"
                      }`}
                    >
                      <ul>
                        <li>
                          <Link
                            className="px-4 py-2 w-full inline-block hover:bg-gray-50"
                            to={
                              !isAuthenticated
                                ? "/sign-in?redirect=profile"
                                : "/profile"
                            }
                          >
                            Profile
                          </Link>
                        </li>
                        {user?.user?.role === 'admin' &&
                        <li>
                          <Link
                            className="px-4 py-2 w-full inline-block hover:bg-gray-50"
                            to="/admin/dashboard"
                          >
                            Dashboard
                          </Link>
                        </li>

                        }
                        <Link
                          to={
                            !isAuthenticated
                              ? "/sign-in?redirect=my/orders"
                              : "/my/orders"
                          }
                        >
                          <a className="px-4 py-2 w-full inline-block hover:bg-gray-50">
                            My Orders
                          </a>
                        </Link>
                        <li>
                          {!isAuthenticated ? (
                            <Link
                              to="/sign-in"
                              className="px-4 py-2 w-full inline-block hover:bg-gray-50"
                            >
                              Login
                            </Link>
                          ) : (
                            <a
                              className="px-4 py-2 w-full inline-block hover:bg-gray-50"
                              onClick={HandleLogout}
                            >
                              Logout
                            </a>
                          )}
                        </li>
                      </ul>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          {/* Search Nav */}
          <div className={`fixed top-0 left-0 w-full min-h-[320px] bg-white p-8 mx-auto transition-all shadow-[rgba(5,13,54,0.05)_5px_15px_30px_0px] z-20 ${!searchActive && "-translate-y-full"} `}>
            <div className="container mx-auto">
              <button className="absolute text-gray-800 z-30 top-[15%] right-[15%] !text-8"
              onClick={() => setSearchActive(false)}>
                <Close />
              </button>
              <div>
                <div className="flex justify-center py-24">
                  <div className="w-1/2">
                    <h6 className="text-lg text-gray-700 text-center font-bold mb-9 uppercase">
                      WHAT ARE YOU LOOKING FOR?
                    </h6>
                    <form onSubmit={searchProduct}>
                      <div className="relative border border-gray-300 rounded-md overflow-hidden ">
                        <input
                          type="text"
                          placeholder="Search Product..."
                          className="w-full px-5 pr-11 placeholder:text-gray-400 py-3 text-sm border-none"
                          name="search"
                          id="search"
                          autoComplete="off"
                          autoFocus={true}
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          required={true}
                          onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <button
                          className="text-gray-600 absolute right-6 top-1/2 -translate-y-1/2 rounded-md"
                          type="submit"
                          onClick={() => setSearchActive(true)}
                        >
                          <Search />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`top-0 left-0 overLay bg-[rgba(0,0,0,0.5)] fixed h-full w-full z-10 ${!searchActive && "invisible opacity-0"} `}
            onClick={() => setSearchActive(false)}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;
