import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogout } from '../../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { PersonOutlineOutlined } from '@mui/icons-material';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleMouseEnter = () => {
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
    };
  
    const HandleLogout = () => {
      dispatch(userLogout(navigate));
      navigate('/sign-in')
    };;

  return (
    <div>
      <header className="bg-white border-b py-3 px-5">
        <div className="">
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
            <div>
              <ul className="flex items-center gap-3">
                <li className="relative inline-block text-left">
                  <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="w-10 h-10 rounded-full bg-[#f5f2ff] flex justify-center items-center peer"
                  >
                    <PersonOutlineOutlined className="bg-transparent !text-xl text-gray-700" />

                    <div
                      className={`absolute top-full right-0 mt-1 w-[120px] z-10 text-left shadow-lg bg-white ${
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
                          <Link
                            className="px-4 py-2 w-full inline-block hover:bg-gray-50"
                            to="/"
                          >
                            Home
                          </Link>
                        </li>
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
        </div>
      </header>
    </div>
  )
}

export default Header
