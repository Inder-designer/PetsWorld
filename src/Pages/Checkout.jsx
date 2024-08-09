import { Remove } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../actions/addressAction";
import AddressModal from "../components/Modals/AddressModal";
import RemoveAddress from "../components/Modals/RemoveAddress";
import EditAddressModal from "../components/Modals/EditAddressModal";
import CurrencyFormat from "../helpers/CurrencyFormatter";
import { Link, useNavigate } from "react-router-dom";
import { SessionExpire } from "../helpers/sessionExpire";
import CheckoutSteps from "../components/CheckoutSteps";

const Checkout = () => {
  const [defaultAddress, setDefaultAddress] = useState(null);
  const [otherAddresses, setOtherAddresses] = useState([]);
  const [shippingAddress, setShippingAddress] = useState({});
  const [addressModal, setAddressModal] = useState(false);
  const [edAddressModal, setEdAddressModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [editAddress, setEditAddress] = useState({});
  const [addressId, setAddressId] = useState("");
  const [cartDetails, setCartDetails] = useState({});
  const [isActive, setIsActive] = useState("");
  const dispatch = useDispatch();
  const { userAddresses } = useSelector((state) => state.address.address);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  useEffect(() => {
    const isSessionExpired = SessionExpire();
    if (isSessionExpired) {
      navigate("/cart");
    }
  });
  useEffect(() => {
    const cartDetails = JSON.parse(sessionStorage.getItem("orderDetails"));
    if (cartDetails) {
      setCartDetails(cartDetails);
    } else {
      navigate("/cart");
    }
  }, []);

  useEffect(() => {
    if (userAddresses && userAddresses.addresses) {
      const defaultAddr = userAddresses.addresses.find((e) => e.isDefault);
      const otherAddrs = userAddresses.addresses.filter((e) => !e.isDefault);
      setDefaultAddress(defaultAddr);
      setOtherAddresses(otherAddrs);
      setIsActive(defaultAddr?._id || "");
    }
  }, [userAddresses]);

  useEffect(() => {
    if (userAddresses && userAddresses.addresses) {
      const shippingAddrs = userAddresses.addresses.find(
        (e) => e._id === isActive
      );
      setShippingAddress(shippingAddrs);
    }
  }, [userAddresses, isActive]);

  const handleSetActive = (id) => {
    setIsActive(id);
  };

  const handleContinue = () => {
    const orderDetails = {
      ...cartDetails,
      shippingAddress: shippingAddress,
    };
    navigate("/checkout/payment");
    sessionStorage.setItem("orderDetails", JSON.stringify(orderDetails));
  };

  return (
    <div className="py-10">
      <div className="container mx-auto max-w-[1000px]">
        <CheckoutSteps activeStep={0} />
        <div className="flex gap-5 mt-5">
          <div className="leftSide w-[65%] bg-white">
            <div className="flex justify-between py-3">
              <h6 className="text-lg font-semibold text-gray-800">
                Select Delivery Address
              </h6>

              <button
                onClick={() => setAddressModal(true)}
                className="border border-gray-600 rounded-md py-2.5 px-4 uppercase text-xs font-bold text-gray-500"
              >
                Add New Address
              </button>
            </div>
            {defaultAddress && (
              <div>
                <p className="uppercase text-xs font-bold text-gray-500 mt-3">
                  Default Address
                </p>
                <div
                  className={`border border-[#f0f0f0] hover:shadow-[rgba(0,0,0,0.2)_0px_1px_2px_0px] py-4 px-6 mt-3 bg-white z-10 ${
                    isActive === defaultAddress._id && "border-[#ff3e6c]"
                  }`}
                  onClick={() => handleSetActive(defaultAddress._id)}
                >
                  <div className="flex gap-5 items-start">
                    <div
                      className={`w-4 h-4 border rounded-[50%] flex justify-center items-center cursor-pointer ${
                        isActive === defaultAddress._id && "border-[#ff3e6c]"
                      }`}
                    >
                      <span
                        className={`w-2.5 h-2.5 inline-block rounded-full ${
                          isActive === defaultAddress._id && "bg-[#ff3e6c]"
                        }`}
                      ></span>
                    </div>
                    <div
                      className={`${
                        isActive !== defaultAddress._id &&
                        "h-[104px] overflow-hidden "
                      }`}
                    >
                      <div className="font-bold text-sm text-gray-700">
                        {defaultAddress.name}{" "}
                        <span className="text-[10px] border rounded-full px-2 py-0.5 ml-1 border-[#388e3c] text-[#388e3c] uppercase">
                          {defaultAddress.addressType}
                        </span>
                      </div>
                      <div className="text-[13px] mt-3 text-[#424553]">
                        <div>
                          {defaultAddress.streetAddress},{" "}
                          {defaultAddress.locality}
                        </div>
                        <div>
                          <span>
                            {defaultAddress.city}, {defaultAddress.state?.name}{" "}
                            -{" "}
                          </span>
                          <span>{defaultAddress.pincode}</span>
                        </div>
                        <div className="mt-3 mb-4">
                          <span>Mobile: </span>
                          <span className="font-bold">
                            {defaultAddress.mobile}
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="mr-1">•</span>
                          <span>Cash on Delivery available</span>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-4">
                        <button
                          onClick={() => {
                            setRemoveModal(true);
                            setAddressId(defaultAddress._id);
                          }}
                          className="py-1.5 px-4 text-[#282c3f] border border-[#282c3f] uppercase font-semibold text-xs rounded"
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => {
                            setEdAddressModal(true);
                            setEditAddress(defaultAddress);
                          }}
                          className="py-1.5 px-4 text-[#282c3f] border border-[#282c3f] uppercase font-semibold text-xs rounded"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {otherAddresses.length > 0 && (
              <div>
                <p className="uppercase text-xs font-bold text-gray-500 mt-8 mb-3">
                  Other Addresses
                </p>
                {otherAddresses.map((address) => (
                  <div
                    className={`border border-[#f0f0f0] py-4 px-6 bg-white z-10 mt-3 hover:shadow-[rgba(0,0,0,0.2)_0px_1px_2px_0px] ${
                      isActive === address._id && "border-[#ff3e6c]"
                    }`}
                    key={address._id}
                    onClick={() => handleSetActive(address._id)}
                  >
                    <div className="flex gap-5 items-start">
                      <div
                        className={`w-4 h-4 border rounded-[50%] flex justify-center items-center cursor-pointer ${
                          isActive === address._id && "border-[#ff3e6c]"
                        }`}
                      >
                        <span
                          className={`w-2.5 h-2.5 inline-block rounded-full ${
                            isActive === address._id && "bg-[#ff3e6c]"
                          }`}
                        ></span>
                      </div>
                      <div
                        className={`${
                          isActive !== address._id &&
                          "h-[104px] overflow-hidden "
                        }`}
                      >
                        <div className="font-bold text-sm text-gray-700">
                          {address.name}{" "}
                          <span className="text-[10px] border rounded-full px-2 py-0.5 ml-1 border-[#388e3c] text-[#388e3c] uppercase">
                            {address.addressType}
                          </span>
                        </div>
                        <div className="text-[13px] mt-3 text-[#424553]">
                          <div>
                            {address.streetAddress}, {address.locality}
                          </div>
                          <div>
                            <span>
                              {address.city}, {address.state?.name} -{" "}
                            </span>
                            <span>{address.pincode}</span>
                          </div>
                          <div className="mt-3 mb-4">
                            <span>Mobile: </span>
                            <span className="font-bold">{address.mobile}</span>
                          </div>
                          <div className="text-sm">
                            <span className="mr-1">•</span>
                            <span>Cash on Delivery available</span>
                          </div>
                        </div>
                        <div className="mt-4 flex gap-4">
                          <button
                            onClick={() => {
                              setRemoveModal(true);
                              setAddressId(address._id);
                            }}
                            className="py-1.5 px-4 text-[#282c3f] border border-[#282c3f] uppercase font-semibold text-xs rounded"
                          >
                            Remove
                          </button>
                          <button
                            onClick={() => {
                              setEdAddressModal(true);
                              setEditAddress(address);
                            }}
                            className="py-1.5 px-4 text-[#282c3f] border border-[#282c3f] uppercase font-semibold text-xs rounded"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div
              onClick={() => setAddressModal(true)}
              className="text-base font-bold text-[#ff3f6c] py-5 px-5 border cursor-pointer border-dashed mt-3 border-[#d4d5d9]"
            >
              + Add new address
            </div>
          </div>
          <div className="rightSide w-[35%] sticky top-0 border-l">
            <div className=" bg-white  sticky top-0 px-6">
              <div className="py-3 border-b">
                <h6 className="uppercase text-gray-500 font-semibold">
                  Price Details
                </h6>
              </div>
              <div className="">
                <div className="text-gray-600 font-semibold flex justify-between my-4 items-start">
                  <p className="">
                    Price ({cartDetails?.cartItems?.length || 0} items)
                  </p>
                  <span>{CurrencyFormat(cartDetails?.subTotal || 0)}</span>
                </div>
                {/* dicount */}

                {cartDetails?.totalDiscount > 0 && (
                  <div className="text-gray-600 font-semibold flex justify-between my-4 items-start">
                    <p className="">Discount</p>
                    <span className="text-[#388e3c]">
                      <Remove className="!text-sm" />
                      {CurrencyFormat(
                        cartDetails?.totalDiscount || 0
                      )}
                    </span>
                  </div>
                )}
                <div className=" my-4 ">
                  <div className="flex justify-between items-start">
                    <p className="text-gray-600 font-medium">
                      Delivery Charges
                    </p>
                    {cartDetails?.deliveryCharges === 40 ? (
                      <span>40</span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <span className="text-[#388e3c] font-medium">Free</span>
                        <del className="text-gray-600">40</del>
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">
                    Free Delivery on order above 499.00
                  </p>
                </div>
                <div className="border-[#e0e0e0] border-t  border-dashed">
                  <div className="flex justify-between my-4 items-start text-xl font-semibold ">
                    <p className="text-gray-800 ">Total Amount</p>
                    <span>{CurrencyFormat(cartDetails?.total)}</span>
                  </div>
                </div>
                {cartDetails?.totalDiscount > 0 && (
                  <div className="border-[#e0e0e0] border-t  border-dashed py-3 text-[#388e3c] font-medium">
                    <p>
                      You will save{" "}
                      {CurrencyFormat(
                        cartDetails?.totalDiscount,
                        0 || 0
                      )}{" "}
                      on this order
                    </p>
                  </div>
                )}

                <div className="mt-6">
                  <Link
                    // to="/checkout"
                    className="block text-center tracking-wide bg-[#ff3e6c] hover:bg-[#ff3e6bda] uppercase text-white font-bold py-3
             text-base rounded px-10 "
                    onClick={() => handleContinue()}
                  >
                    Continue
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditAddressModal
        openModal={edAddressModal}
        setOpenModal={setEdAddressModal}
        address={editAddress}
      />
      <AddressModal openModal={addressModal} setOpenModal={setAddressModal} />
      <RemoveAddress
        openModal={removeModal}
        setOpenModal={setRemoveModal}
        id={addressId}
      />
    </div>
  );
};

export default Checkout;
