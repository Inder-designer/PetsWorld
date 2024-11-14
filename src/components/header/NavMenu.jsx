import React, { useEffect, useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import "./header.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Services/Api";

const NavMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [categories, setCategories] = useState([]);
  const [newcategories, setNewCategories] = useState([]);

  const getCategories = async () => {
    try {
      const res = await axios.get(`${API_URL}/categories`);
      setCategories(res.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const newCategories = [
      ...categories, // Spread the existing categories
      ...[
        {
          level0: "Life Stage",
          level1: [
            {
              name: "Puppy",
              level2: [],
            },
            {
              name: "Kitten",
              level2: [],
            },
            {
              name: "Senior",
              level2: [],
            },
            {
              name: "Adult",
              level2: [],
            },
          ],
        },
      ],
    ];

    setNewCategories(newCategories);
  }, [categories]);

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const transformLabelToUrl = (label) => {
    return label;
    // .toLowerCase()
    // .replace(/\s+/g, "+") // Replace spaces with plus signs
    // .trim(); // Trim leading and trailing spaces
  };

  return (
    <div className="menu">
      <ul className="flex items-center">
        {newcategories.map((level0, index) => (
          <li
            key={index}
            className={`px-3 ${level0.level1 ? "has-submenu" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {level0.level0 === "Life Stage" ? (
              <button
                aria-disabled
                className={`py-6 border-b-[3px] text-sm uppercase font-semibold flex items-center text-gray-800 ${
                  activeMenu === index ? "border-red-400" : "border-white"
                }`}
              >
                {level0.level0}
                {level0.level1 && (
                  <KeyboardArrowDown
                    className={`!text-lg ${
                      activeMenu === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
            ) : (
              <Link
                to={`/shop/${transformLabelToUrl(level0.level0)}`}
                className={`py-6 border-b-[3px] text-sm uppercase font-semibold flex items-center text-gray-800 ${
                  activeMenu === index ? "border-red-400" : "border-white"
                }`}
              >
                {level0.level0}
                {level0.level1 && (
                  <KeyboardArrowDown
                    className={`!text-lg ${
                      activeMenu === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
            )}
            {activeMenu === index && level0.level1 && (
              <div
                className={`absolute z-[999] shadow-[0_10px_16px_1px_#00000026] mt-px px-5 py-[30px] bg-white grid grid-cols-5 gap-4 top-[69px] border-t border-gray-300 box min-w-[120px] ${
                  level0.level0 === "Life Stage"
                    ? "!grid-cols-1 "
                    : level0.level1.length < 5
                    ? "!grid-cols-4 inset-x-[10%] overflow-x-hidden max-h-[calc(100vh_-_140px)]"
                    : "inset-x-[10%] overflow-x-hidden max-h-[calc(100vh_-_140px)]"
                }`}
              >
                {level0.level1.map((submenu, subIndex) => (
                  <div key={subIndex} className={`nav_${subIndex + 1} level1`}>
                    <Link
                      to={
                        level0.level0 === "Life Stage"
                          ? `/shop/${transformLabelToUrl(submenu.name)}`
                          : `/shop/${transformLabelToUrl(
                              level0.level0
                            )}?category=${transformLabelToUrl(submenu.name)}`
                      }
                      className="mb-2 inline-block text-xs uppercase font-semibold text-red-400"
                    >
                      {submenu.name}
                    </Link>
                    {submenu.level2 && (
                      <ul className="level2 submenu">
                        {submenu.level2.map((item, itemIndex) => (
                          <li key={itemIndex} className="level2 mb-2">
                            <Link
                              className="text-xs font-semibold capitalize text-gray-500 hover:ml-1 hover:text-gray-900"
                              to={`/shop/${transformLabelToUrl(
                                level0.level0
                              )}?category=${transformLabelToUrl(
                                submenu.name
                              )}&type=${transformLabelToUrl(item.name)}`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
            {activeMenu === index && level0.level1 && (
              <div
                className="menu_overlay fixed h-[calc(100vh_-_70px)] z-[99] inset-x-0 bg-[#00000021] top-[70px]"
                onMouseEnter={handleMouseLeave}
              ></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
