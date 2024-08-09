import React, { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import "./header.css";
import { Link } from "react-router-dom";
import menuData from '../../category.json'

const NavMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const {menuItems} = menuData

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const transformLabelToUrl = (label) => {
    // Convert to lowercase and replace special characters
    return label
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/&/g, "-") // Replace & with hyphen
      .replace(/[^a-zA-Z0-9-]/g, "") // Remove any other special characters
      .replace(/-+/g, "+"); // Replace multiple hyphens with single hyphen
  };

  return (
    <div className="menu">
      <ul className="flex items-center">
        {menuItems &&
          menuItems.map((menuItem, index) => (
            <li
              key={index}
              //   if there no items array but have label in submenus array then add relative class
              className={`px-3 ${menuItem.label} ${
                menuItem.submenus &&
                menuItem.submenus.some((submenu) => !submenu.items)
                  ? "noItems relative"
                  : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={"/shop/" + transformLabelToUrl(menuItem.label)}
                className={`py-6 border-b-[3px] text-sm uppercase font-semibold flex items-center text-gray-800 ${
                  activeMenu === index ? "border-red-400" : "border-white"
                }`}
              >
                {menuItem.label}{" "}
                {menuItem.submenus && (
                  <KeyboardArrowDown
                    className={`!text-lg ${
                      activeMenu === index && "rotate-180"
                    }`}
                  />
                )}
              </Link>
              {activeMenu === index && menuItem.submenus && (
                <div
                  className={`absolute z-[999] shadow-[0_10px_16px_1px_#00000026] mt-px px-5 py-[30px] inset-x-[10%] bg-white grid grid-cols-5 gap-4 top-[69px] border-t border-gray-300 overflow-x-hidden max-h-[calc(100vh_-_140px)] box ${
                    menuItem.submenus.length < 5 && "!grid-cols-4"
                  }`}
                >
                  {menuItem.submenus.map((submenu, subIndex) => (
                    <div
                      key={subIndex}
                      className={`nav_${subIndex + 1} level1`}
                    >
                      <Link
                        to={`/shop/${transformLabelToUrl(
                          menuItem.label
                        )}?category=${transformLabelToUrl(submenu.label)}`}
                        className="mb-2 inline-block text-xs uppercase font-semibold text-red-400"
                      >
                        {submenu.label}
                      </Link>
                      <ul class="level2 submenu ">
                        {submenu.items &&
                          submenu.items.map((item, itemIndex) => (
                            <li className="level2 mb-2">
                              <Link class="text-xs font-semibold capitalize text-gray-500 hover:ml-1 hover:text-gray-900"
                                to={`/shop/${transformLabelToUrl(
                                  menuItem.label
                                )}?category=${transformLabelToUrl(
                                  submenu.label
                                )}&type=${transformLabelToUrl(item)}`}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {activeMenu === index && menuItem.submenus && (
                <div
                  className="menu_overlay fixed h-[calc(100vh_-_70px)] z-[99] inset-x-0 bg-[#00000021] top-[70px]"
                  onMouseEnter={() => handleMouseEnter(null)}
                ></div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NavMenu;
