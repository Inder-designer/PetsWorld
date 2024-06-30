import React from "react";
import userLogo from "../Assets/Images/userLogo.png";
import { Add, DeleteOutlineOutlined, Edit } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Profile = () => {
  const {user} = useSelector(state => state.user.user)
  

  return (
    <div>
      <div className="container mx-auto">
        <div className="lg:flex sm:gap-6 max-w-[1200px] mx-auto">
          {/* <div className="lg:w-1/2 2xl:w-[30%] bg-[#f6f6f6] rounded-lg">
            <div className="p-5">
              <div className="flex gap-4 items-center">
                <div className="rounded overflow-hidden">
                  <div className="w-[100px] h-[100px] relative">
                    <img
                      src={userLogo}
                      alt="userLogo"
                      className="w-full h-full object-contain"
                    />
                    <button
                      aria-label="Edit Profile"
                      className="absolute bottom-0 right-0"
                    >
                      <Edit className="text-[#1d1d1d]" />
                    </button>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="mb-2 text-xl font-semibold leading-6 ">
                    Name
                  </p>
                  <p className="mb-2 text-sm font-semibold leading-6 ">exampple@gmail.com</p>

                </div>
              </div>
            </div>
          </div> */}
          <div className="lg:w-1/2 2xl:w-[30%] mb-5 lg:mb-0">
            <div className=" bg-[#f6f6f6] rounded-lg">
              <div className="flex gap-4 items-center p-5">
                <div className="rounded overflow-hidden">
                  <div className="w-[100px] h-[100px] relative">
                    <img
                      src={userLogo}
                      alt="userLogo"
                      className="w-full h-full object-contain"
                    />
                    <button
                      aria-label="Edit Profile"
                      className="absolute bottom-0 right-0"
                    >
                      <Edit className="text-[#1d1d1d]" />
                    </button>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="mb-2 text-xl font-semibold leading-6 ">{user.name}</p>
                  <p className="mb-2 text-sm font-semibold leading-6 ">
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <div className="border-2 rounded-t-md px-5 py-2 border-[#9f9f9f36] flex justify-between items-center">
                  <h6 className="text-lg font-semibold">Default Address</h6>
                  <Edit className="text-[#1d1d1d] !text-lg cursor-pointer" />
                </div>
                <div className="p-5">
                  <p>S.C.F 36 near gurudwara bhattha sahib</p>
                  <p>Near HDFC Bank</p>
                  <p>
                    <span>Rupnagar</span>, <span>punjab</span>,{" "}
                    <span>140001</span>
                  </p>
                  <p>India</p>
                  <p>T: +917814546244</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 2xl:w-[70%]">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className=" bg-[#f6f6f6] rounded-lg">
                <div className="border-2 rounded-t-md px-5 py-2 border-[#9f9f9f36] flex justify-between items-center">
                  <h6 className="text-lg font-semibold">Change Password</h6>
                </div>
                <div className="px-5 pb-5 pt-2">
                  <form>
                    <div>
                      <label
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-gray
                      900"
                      >
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="current_password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        "
                        placeholder="Current Password"
                        required
                      />
                    </div>
                    <div className=" mt-3">
                      <label
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-gray
                          900"
                      >
                        New Password
                      </label>
                      <input
                        type="password"
                        id="new_password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                            "
                        placeholder="New Password"
                        required
                      />
                    </div>
                    <div className=" mt-3">
                      <label
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-gray
                              900"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirm_password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                                "
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <button
                        type="submit"
                        className="text-white bgGradient focus:ring-4 focus
                                  :outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 "
                      >
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className=" bg-[#f6f6f6] rounded-lg">
                <div className="border-2 rounded-t-md px-5 py-2 border-[#9f9f9f36] flex justify-between items-center">
                  <h6 className="text-lg font-semibold">Manage Pets</h6>
                </div>
                <div className="px-5 pb-5 pt-2 flex items-center flex-col justify-center h-[calc(100%_-_48px)]">
                  <p>You have no pet entries in your account.</p>
                  <div className="flex items-center justify-between mt-4 ">
                    <button
                      type="submit"
                      className="flex items-center text-white bgGradient focus:ring-4 focus
                                    :outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 "
                    >
                      Add New Pet <Add className="!text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-[#f6f6f6] rounded-lg mt-6">
              <div className="border-2 rounded-t-md px-5 py-2 border-[#9f9f9f36] flex justify-between items-center">
                <h6 className="text-lg font-semibold">Manage Addesses</h6>
                <button
                  type="submit"
                  className="flex items-center text-white bgGradient focus:ring-4 focus
                                  :outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 "
                >
                  Add Address <Add className="!text-lg" />
                </button>
              </div>
              <div className="pb-5 pt-2  flex flex-col items-center justify-center h-full">
                {/* <p>
                  You have no address entries in your account.
                </p> */}
                <table className="w-full !text-left">
                  <thead className="py-2 border-b border-[#8e8e8e72] ">
                    <th className="text-sm py-2 font-medium px-2 pl-5">
                      Street Address
                    </th>
                    <th className="text-sm py-2 font-medium px-2">City</th>
                    <th className="text-sm py-2 font-medium px-2">State</th>
                    <th className="text-sm py-2 font-medium px-2">Pincode</th>
                    <th className="text-sm py-2 font-medium px-2">India</th>
                    <th className="text-sm py-2 font-medium px-2">Phone</th>
                    <th className="text-sm py-2 font-medium px-2 pr-5">
                      Action
                    </th>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#9f9f9f36] ">
                      <td className="text-sm py-2 px-2 pl-5">
                        s.c.f. 36, New Grain Market
                      </td>
                      <td className="text-sm py-2 px-2">Rupnagar</td>
                      <td className="text-sm py-2 px-2">Punjab</td>
                      <td className="text-sm py-2 px-2">140001</td>
                      <td className="text-sm py-2 px-2">India</td>
                      <td className="text-sm py-2 px-2">+917814546244</td>
                      <td className="text-sm py-2 px-2 pr-5">
                        <button
                          className="text-blue-600 font-medium rounded-lg
                          2.5 mr-3"
                        >
                          <Edit className="!text-lg" />
                        </button>
                        <button
                          className="text-red-600 font-medium rounded-lg
                          2.5 "
                        >
                          <DeleteOutlineOutlined className="!text-lg" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex items-center justify-between mt-4 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
