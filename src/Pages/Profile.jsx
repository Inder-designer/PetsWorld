import React, { useEffect, useState } from "react";
import userLogo from "../Assets/Images/userLogo.png";
import { Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import EditProfileModal from "../components/Modals/EditProfileModal";
import ChangePswd from "../components/Profile/ChangePswd";
import { useNavigate } from "react-router-dom";
import ManageAddrs from "../components/Profile/ManageAddrs";
import ManagePets from "../components/Profile/ManagePets";
import EditAddressModal from "../components/Modals/EditAddressModal";

const Profile = () => {
  const [defaultAddress, setDefaultAddress] = useState(null);
  const [edAddressModal, setEdAddressModal] = useState(false);
  const [editAddress, setEditAddress] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      setUserDetails(user.user);
    } else {
      setUserDetails({});
      setDefaultAddress(null); // Reset default address when user logs out
    }
  }, [user]);

  if (isLoading) {
    return <Loading />;
  }

  const addressDetails = defaultAddress ? (
    <div className="p-5">
      <p>{defaultAddress.name}</p>
      <div className="flex">
        <p>{defaultAddress.streetAddress},</p>
        <p>&nbsp;{defaultAddress.locality},</p>
      </div>
      <p>
        <span>{defaultAddress.city}</span>,{" "}
        <span>{defaultAddress.state}</span>,{" "}
        <span>{defaultAddress.pincode}</span>
      </p>
      <p>India</p>
      <p>{defaultAddress.mobile}</p>
    </div>
  ) : (
    <div className="p-5 text-center">No default address set</div>
  );
    const imgPrv = userDetails.avatar?.url || userLogo
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className=" bg-[#f6f6f6] rounded-lg">
              <div className="flex gap-4 items-center p-5">
                <div className="w-[100px] h-[100px] relative">
                  <img
                    src={imgPrv}
                    alt="user"
                    className="w-full rounded-full h-full object-contain"
                  />
                  <EditProfileModal user={userDetails} />
                </div>
                <div className="ml-3">
                  <p className="mb-2 text-xl font-semibold leading-6 ">
                    {userDetails.name}
                  </p>
                  <p className="mb-2 text-sm font-semibold leading-6 ">
                    {userDetails.email}
                  </p>
                </div>
              </div>
              <div className="">
                <div className="border-2 rounded-t-md px-5 py-2 border-[#9f9f9f36] flex justify-between items-center">
                  <h6 className="text-lg font-semibold">Default Address</h6>
                  <Edit
                    className="text-[#1d1d1d] !text-lg cursor-pointer"
                    onClick={() => {
                      setEdAddressModal(true);
                      setEditAddress(defaultAddress);
                    }}
                  />
                </div>
                {addressDetails}
              </div>
            </div>
            <ChangePswd />
            <ManagePets />
          </div>
          <ManageAddrs setDefaultAddress={setDefaultAddress} />
        </div>
      </div>
      <EditAddressModal
        openModal={edAddressModal}
        setOpenModal={setEdAddressModal}
        address={editAddress}
      />
    </div>
  );
};

export default Profile;
