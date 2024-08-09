import { Label, Radio, Select } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { SessionExpire } from "../helpers/sessionExpire";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newOrder } from "../actions/orderAction";
import CheckoutSteps from "../components/CheckoutSteps";
import CardPayment from "../components/payments/CardPayment";
import commingSoon from "../Assets/Images/comminSoon.png";
import CurrencyFormat from "../helpers/CurrencyFormatter";
import { Remove } from "@mui/icons-material";

const PaymentPage = () => {
  const [isActive, setIsActive] = useState("cod");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [orderDetails, setOrderDetails] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const isSessionExpired = SessionExpire();
    if (isSessionExpired) {
      navigate("/cart");
    }
  });
  useEffect(() => {
    const orderDetails = JSON.parse(sessionStorage.getItem("orderDetails"));
    if (orderDetails) {
      setOrderDetails(orderDetails);
    } else {
      navigate("/cart");
    }
  }, []);

  const orderHandler = ({ paymentMethod }) => {
    const newOrderDetails = {
      shippingInfo: orderDetails.shippingAddress,
      orderItems: orderDetails.cartItems,
      subTotal: orderDetails.subTotal,
      totalDiscount: orderDetails.totalDiscount,
      totalPrice: orderDetails.total,
      shippingPrice: orderDetails.deliveryCharges,
      paymentMethod: paymentMethod,
      paymentInfo: {},
    };
    dispatch(newOrder(newOrderDetails, navigate));
  };

  const renderPaymentOption = () => {
    switch (isActive) {
      case "cod":
        return (
          <div>
            <h6 className="pb-5 text-base font-bold text-gray-600">
              Cash On Delivery (Cash/UPI)
            </h6>
            <div>
              <p className="text-xs font-medium bg-[#f4f4f5] p-2 mb-5 w-fit">
                ₹ 10 will be charged extra for Cash On Delivery option.
              </p>
            </div>
            <button
              onClick={() => orderHandler({ paymentMethod: "cash" })}
              className="block w-full text-center tracking-wide bg-[#ff3e6c] hover:bg-[#ff3e6bda] uppercase text-white font-bold py-3 text-base rounded px-10"
            >
              Place Order
            </button>
          </div>
        );
      case "upi":
        return (
          <div className="flex justify-center items-center">
            <img src={commingSoon} alt="" width="160px" />
          </div>
          //   <div>
          //     <h6 className="pb-4 text-base font-bold text-gray-600">
          //       Pay using UPI
          //     </h6>
          //     <fieldset className="flex max-w-md flex-col gap-4 mb-4">
          //       <legend className="text-xs font-medium p-2 mb-2 w-fit">
          //         Choose an option
          //       </legend>
          //       <div className="flex items-center gap-5">
          //         <div className="flex items-center gap-2">
          //           <Radio id="phonePe" name="upi" value="PhonePe" />
          //           <Label htmlFor="phonePe">PhonePe</Label>
          //         </div>
          //         <div className="flex items-center gap-2">
          //           <Radio id="customUpi" name="upi" value="Your UPI ID" />
          //           <Label htmlFor="customUpi">Your UPI ID</Label>
          //         </div>
          //       </div>
          //     </fieldset>
          //     <button className="block w-full text-center tracking-wide bg-[#ff3e6c] hover:bg-[#ff3e6bda] uppercase text-white font-bold py-3 text-base rounded px-10">
          //       Pay Now
          //     </button>
          //   </div>
        );
      case "cards":
        return <CardPayment orderDetails={orderDetails} />;
      case "banking":
        return (
          <div className="flex justify-center items-center">
            <img src={commingSoon} alt="" width="160px" />
          </div>
          //   <div>
          //     <h6 className="pb-4 text-base font-bold text-gray-600">
          //       Net Banking
          //     </h6>
          //     <fieldset className="flex max-w-md flex-col gap-4 mb-4">
          //       <legend className="text-xs font-bold p-2 mb-2 w-fit">
          //         Popular Banks
          //       </legend>
          //       <div className="flex items-center gap-5 flex-wrap">
          //         {[
          //           "HDFC Bank",
          //           "SBI Bank",
          //           "ICICI Bank",
          //           "Axis Bank",
          //           "Kotak Mahindra Bank",
          //         ].map((bank) => (
          //           <div key={bank} className="flex items-center gap-2">
          //             <Radio id={bank} name="bank" value={bank} />
          //             <Label className="text-xs" htmlFor={bank}>
          //               {bank}
          //             </Label>
          //           </div>
          //         ))}
          //       </div>
          //       <p className="text-xs font-bold p-2 mb-2 w-fit">Other Banks</p>
          //       <div>
          //         <Label htmlFor="otherBanks" value="Select Bank" />
          //         <Select id="otherBanks" required>
          //           <option>Select Bank</option>
          //           {["Bank of Baroda", "Yes Bank", "Punjab National Bank"].map(
          //             (bank) => (
          //               <option key={bank} value={bank}>
          //                 {bank}
          //               </option>
          //             )
          //           )}
          //         </Select>
          //       </div>
          //     </fieldset>
          //     <button className="block w-full text-center tracking-wide bg-[#ff3e6c] hover:bg-[#ff3e6bda] uppercase text-white font-bold py-3 text-base rounded px-10">
          //       Pay Now
          //     </button>
          //   </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-10">
      <div className="container mx-auto max-w-[1000px]">
        <CheckoutSteps activeStep={2} />
        <div className="flex gap-5 mt-5">
          <div className="leftSide w-[65%] bg-white">
            <div className="flex justify-between">
              <h6 className="text-lg font-semibold text-gray-800">
                Choose Payment Mode
              </h6>
            </div>
            <div className="flex border border-[#eaeaec] rounded mt-4">
              <div className="w-[30%]">
                <ul>
                  {[
                    { id: "cod", label: "Cash On Delivery" },
                    { id: "upi", label: "UPI" },
                    { id: "cards", label: "Credit/Debit Card" },
                    { id: "banking", label: "Net Banking" },
                  ].map(({ id, label }) => (
                    <li
                      key={id}
                      onClick={() => setIsActive(id)}
                      className={`text-sm cursor-pointer pl-2 border border-t-0 border-[#eaeaec] border-l-[5px] flex items-center h-14 ${
                        isActive === id
                          ? "bg-white border-r-0 border-l-[#ff3e6c]"
                          : "bg-[#f4f4f5] border-l-[#f4f4f5]"
                      }`}
                    >
                      <span className="text-[#424553] font-bold">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[70%] px-8 py-6">{renderPaymentOption()}</div>
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
                    Price ({orderDetails?.cartItems?.length || 0} items)
                  </p>
                  <span>{CurrencyFormat(orderDetails?.subTotal || 0)}</span>
                </div>
                {/* dicount */}
                {orderDetails?.totalDiscount > 0 && (
                  <div className="text-gray-600 font-semibold flex justify-between my-4 items-start">
                    <p className="">Discount</p>
                    <span className="text-[#388e3c]">
                      <Remove className="!text-sm" />
                      {CurrencyFormat(
                        orderDetails?.totalDiscount || 0
                      )}
                    </span>
                  </div>
                )}
                <div className=" my-4 ">
                  <div className="flex justify-between items-start">
                    <p className="text-gray-600 font-medium">
                      Delivery Charges
                    </p>
                    {orderDetails?.deliveryCharges === 40 ? (
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
                    <span>{CurrencyFormat(orderDetails?.total)}</span>
                  </div>
                </div>
                {orderDetails?.totalDiscount > 0 && (
                  <div className="border-[#e0e0e0] border-t  border-dashed py-3 text-[#388e3c] font-medium">
                    <p>
                      You will save{" "}
                      {CurrencyFormat(
                        orderDetails?.totalDiscount,
                        0 || 0
                      )}{" "}
                      on this order
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
