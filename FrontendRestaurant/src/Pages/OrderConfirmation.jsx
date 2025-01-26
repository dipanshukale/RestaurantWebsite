import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const OrderConfirmation = () => {
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();
  const { orderSummary,subtotal} = state || {};

  const sendOtp = async () => {
    if (mobileNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      const response = await axios.post("https://restaurantwebsite-yd5g.onrender.com/send-otp", {
        mobile: mobileNumber,
	  },{
		  withCredentials: true,
		  headers: {"content-type": "application/json"},
	  });

      if (response.status === 200) {
        toast.success("OTP sent successfully!");
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while sending OTP.");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post("https://restaurantwebsite-yd5g.onrender.com/verify-otp", {
        mobile: mobileNumber,
        otp,
	  }, {
		  withCredentials: true,
		  headers : {"content-type": "application/json"}
	  });

      if (response.data.success) {
        toast.success("OTP verified!", {
          position: "top-center",
          autoClose: 3000,
        });

        setConfirmOrder(true);
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred during OTP verification.");
    }
  };

  const orderconfirm = async () => {
    if (!customerName || !mobileNumber || orderSummary.length === 0) {
    toast.error("Please fill in all fields before confirming the order.");
    return;
  }
    try {
      const response = await axios.post("https://restaurantwebsite-yd5g.onrender.com/confirm-order", {
        customerName,
        mobileNumber,
        orderSummary,
        subtotal,
        
      }, {
        withCredentials: true,
        headers: {"content-type": "application/json"},
      });

      if (response.data.success) {
        toast.success("Your order has been confirmed successfully", {
          position: "top-center",
          autoClose: 3000,
        })

        setCustomerName("");
        setMobileNumber("");
        setOtp("");
        
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      toast.error("error occured while while processing order plese order once again");
      console.log("order confirmation error", error);
    }
  }

  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <ToastContainer />
      <div className="bg-white w-11/12 max-w-sm rounded-lg p-6 shadow-lg">
        <h2 className="text-lg font-bold text-center mb-4">Order Confirmation</h2>

        <form className="space-y-4 text-left">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Customer Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {isOtpSent && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          )}
        </form>
        

        <button onClick={orderconfirm} className="w-full bg-black text-white py-2 px-4 rounded-lg mt-4 ">Confirm Order</button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
