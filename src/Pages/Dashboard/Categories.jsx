import {
  DeleteOutlineOutlined,
  DoNotDisturbAltRounded,
  EditOutlined,
  Folder,
  FolderOpen,
  InsertDriveFileOutlined,
  KeyboardArrowDown,
  KeyboardArrowRight,
  VisibilityOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../Services/dashboard/actions/CategoryActions";
import EditCategory from "../../components/Dashboard/Modals/EditCategory";
import AddCategory from "../../components/Dashboard/Category/AddCategory";
import AddSubCategory from "../../components/Dashboard/Category/AddSubCategory";

const Categories = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editCate, setEditCate] = useState();
  const [expandedLevel0, setExpandedLevel0] = useState({});
  const [expandedLevel1, setExpandedLevel1] = useState({});
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories) {
      setData(categories.categories);

      const initialExpandedLevel0 = {};
      categories.categories.forEach((_, index) => {
        initialExpandedLevel0[index] = true;
      });
      setExpandedLevel0(initialExpandedLevel0);
    }
  }, [categories]);

  const toggleExpandLevel0 = (index) => {
    setExpandedLevel0((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleExpandLevel1 = (index, index1) => {
    setExpandedLevel1((prev) => ({
      ...prev,
      [`${index}-${index1}`]: !prev[`${index}-${index1}`],
    }));
  };
  //   { id: 1, name: "dry", parentCate: "dog" },
  //   { id: 2, name: "wet", parentCate: "cat" },
  //   { id: 3, name: "Snow", parentCate: "dog" },
  //   { id: 4, name: "bowls", parentCate: "dog" },
  //   { id: 5, name: "service", parentCate: "cat" },
  //   { id: 6, name: "Snow", parentCate: "dog" },
  //   { id: 7, name: "bowls", parentCate: "dog" },
  //   { id: 8, name: "service", parentCate: "cat" },
  //   { id: 9, name: "Snow", parentCate: "dog" },
  //   { id: 10, name: "bowls", parentCate: "dog" },
  //   { id: 11, name: "service", parentCate: "cat" },
  // ];
  return (
    <div className="flex gap-6">
      <div className="w-[40%]">
        <div className="bg-white rounded-lg">
          <div className="mb-4 px-4 pt-4">
            <h6 className="text-lg font-semibold">Categories</h6>
          </div>
          <div className="py-4 border-t px-4 select-none">
            <ul>
              {data.map((level0, index) => (
                <li key={index}>
                  <div
                    className="flex justify-between cursor-pointer mb-1"
                    onClick={() => toggleExpandLevel0(index)}
                  >
                    <p className="flex items-center">
                      {expandedLevel0[index] ? (
                        <FolderOpen className="!text-lg mr-1 text-blue-600" />
                      ) : (
                        <Folder className="!text-lg mr-1 text-blue-600" />
                      )}
                      <span className="text-sm capitalize font-medium text-blue-700">
                        {level0.level0}
                      </span>
                    </p>
                    <span className="flex gap-2">
                      <button>
                        {expandedLevel0[index] ? (
                          <KeyboardArrowDown className="!text-lg" />
                        ) : (
                          <KeyboardArrowRight className="!text-lg" />
                        )}
                      </button>
                    </span>
                  </div>
                  {expandedLevel0[index] && (
                    <ul className="ml-2 pl-3 border-l">
                      {level0?.level1.map((level1, index1) => (
                        <li key={index1}>
                          <div
                            className="flex justify-between cursor-pointer mb-1"
                            onClick={() => toggleExpandLevel1(index, index1)}
                          >
                            <p className="flex items-center">
                              {level1?.level2.length < 1 ? (
                                <Folder className="!text-lg mr-1 text-blue-400" />
                              ) : expandedLevel1[`${index}-${index1}`] ? (
                                <FolderOpen className="!text-lg mr-1 text-blue-400" />
                              ) : (
                                <Folder className="!text-lg mr-1 text-blue-400" />
                              )}
                              <span className="text-sm capitalize font-medium text-blue-400">
                                {level1?.name}
                              </span>
                            </p>
                            <span className="flex gap-2">
                              <button>
                                <VisibilityOutlined className="!text-lg text-yellow-400" />
                              </button>
                              <button
                                className="relative z-10"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  {
                                    setOpenModal(true);
                                    setEditCate({
                                      level0: level0.level0,
                                      level1: {
                                        name: level1.name,
                                        _id: level1._id,
                                        slug: level1.slug,
                                        orderNo: level1.orderNo,
                                      },
                                    });
                                  }
                                }}
                              >
                                <EditOutlined className="!text-lg text-green-600" />
                              </button>
                              <button>
                                <DeleteOutlineOutlined className="!text-lg text-red-600" />
                              </button>
                              <button>
                                {level1?.level2.length < 1 ? (
                                  <DoNotDisturbAltRounded className="!text-lg !text-gray-400" />
                                ) : expandedLevel1[`${index}-${index1}`] ? (
                                  <KeyboardArrowDown className="!text-lg" />
                                ) : (
                                  <KeyboardArrowRight className="!text-lg" />
                                )}
                              </button>
                            </span>
                          </div>
                          {expandedLevel1[`${index}-${index1}`] && (
                            <ul className="ml-2 pl-3 border-l">
                              {level1?.level2.map((level2, index1) => (
                                <li key={index1}>
                                  <div className="flex gap-4 cursor-pointer mb-1">
                                    <p className="flex items-center min-w-[150px]">
                                      <InsertDriveFileOutlined className="!text-lg mr-1 text-gray-600" />
                                      <span className="text-sm capitalize font-medium text-gray-600">
                                        {level2?.name}
                                      </span>
                                    </p>
                                    <span className="flex gap-2">
                                      <button>
                                        <VisibilityOutlined className="!text-lg text-yellow-400" />
                                      </button>
                                      <button
                                        className="relative z-10"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          {
                                            setOpenModal(true);
                                            setEditCate({
                                              level0: level0.level0,
                                              level1: level1.name,
                                              level2: {
                                                name: level2.name,
                                                _id: level2._id,
                                                slug: level2.slug,
                                                orderNo: level2.orderNo,
                                              },
                                            });
                                          }
                                        }}
                                      >
                                        <EditOutlined className="!text-lg text-green-600" />
                                      </button>
                                      <button>
                                        <DeleteOutlineOutlined className="!text-lg text-red-600" />
                                      </button>
                                    </span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <AddCategory categories={data}/>
      </div>
      <div className="w-[30%]">
        <AddSubCategory categories={data}/>
      </div>
      <EditCategory
        openModal={openModal}
        setOpenModal={setOpenModal}
        editCate={editCate}
        categories={data}
      />
    </div>
  );
};

export default Categories;
