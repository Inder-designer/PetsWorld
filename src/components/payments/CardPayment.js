import React, { useRef, useState } from 'react'
import {
  CardCvcElement,
  CardNumberElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { API_URL, CONFIG } from '../../constants/apiConstants';
import { newOrder } from '../../actions/orderAction';
import Loading from '../Loading';
import CurrencyFormat from '../../helpers/CurrencyFormatter';
import { useNavigate } from 'react-router-dom';

const CardPayment = ({orderDetails}) => {
    const stripe = useStripe();
    const elements = useElements();
    const btnRef = useRef(false);
    const { user } = useSelector((state) => state.user.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const order = {
        shippingInfo: orderDetails.shippingAddress,
        orderItems: orderDetails.cartItems,
        subTotal: orderDetails.subTotal,
        totalDiscount: orderDetails.subTotal - orderDetails.total,
        totalPrice: orderDetails.total,
        paymentMethod: "card",
        paymentInfo: {},
    }
    const paymentData = {
        amount: Math.round(order.totalPrice * 100)
    }
    const submitHandler = async () => {
        // e.preventDefault();
        btnRef.current.disabled = true;
        setLoading(true)
        try {
            const { data } = await axios.post(
                `${API_URL}/payment/process`,
                paymentData,
                CONFIG
            );
            const client_secret = data.client_secret;

            if (!stripe || !elements) return;

            const result = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: user.name,
                        email: user.email,
                        address: {
                            line1: orderDetails.shippingAddress.streetAddress,
                            city: orderDetails.shippingAddress.city,
                            state: orderDetails.shippingAddress.state,
                            postal_code: orderDetails.shippingAddress.pincode,
                            country: 'IN',
                        },
                    },
                },
            });
            console.log(result,"result");
            if (result.error) {
                btnRef.current.disabled = false
                    setLoading(false)

                toast.error(result.error.message)
            } else {
                if (result.paymentIntent.status === "succeeded") {
                    order.paymentInfo = {
                        id: result.paymentIntent.id,
                        status: result.paymentIntent.status,
                        paidAt: result.paymentIntent.created
                    }
                    dispatch(newOrder(order,navigate))
                    toast.success("Payment Successfull");
                    setLoading(false)
                } else {
                    toast.error("There's some issue while proccessing payment ")
                }
            }
        } catch (error) {
              btnRef.current.disabled = false;
                    setLoading(false)
            toast.error(error.response.data.message);
        }
    };
    return (
        <div>
            {loading && <Loading/>}
            <h6 className="pb-4 text-base font-bold text-gray-600">
                CREDIT/DEBIT CARD
            </h6>
            <div className="mb-4">
                <div className="relative floatingLabel">
                    {/* <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number*"
                /> */}
                    <CardNumberElement className="paymentInput" />
                    {/* <label htmlFor="cardNumber">Card Number</label> */}
                </div>
                <div className="">
                    <div className="mt-4 relative floatingLabel">
                        {/* <input
                    type="text"
                    name="expiryDate"
                    placeholder="Valid thru (MM/YY)*"
                  /> */}

                        <CardExpiryElement className="paymentInput" />
                        {/* <label htmlFor="expiryDate">Valid thru (MM/YY)</label> */}
                    </div>
                    <div className="mt-4 relative floatingLabel">
                        {/* <input type="text" name="cvv" placeholder="CVV*" /> */}
                        <CardCvcElement className="paymentInput" />
                        {/* <label htmlFor="cvv">CVV</label> */}
                    </div>
                </div>
            </div>
            <button
                className="block w-full text-center tracking-wide bg-[#ff3e6c] hover:bg-[#ff3e6bda] uppercase text-white font-bold py-3 text-base rounded px-10"
                  ref={btnRef}
                onClick={() => submitHandler()}
            >
                Pay Now ({CurrencyFormat(orderDetails.total)})
            </button>
        </div>
    )
}

export default CardPayment
