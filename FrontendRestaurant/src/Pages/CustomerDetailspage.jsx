import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerDetailsPage = ({ cart}) => {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    mobile: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });

    // Clear error for the field being edited
    setErrors({ ...errors, [name]: "" });
  };

  const validateFields = () => {
    const newErrors = {};
    if (!customerDetails.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!customerDetails.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(customerDetails.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }
    if (!customerDetails.address.trim()) {
      newErrors.address = "Address is required.";
    }
    return newErrors;
  };

  const handleConfirmOrder = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Navigate to order summary if validation passes
    navigate("/order-summary", { state: { customerDetails, cart} });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl lg:text-4xl font-sans mb-6 tracking-widest">Customer Details</h1>
      <form className="bg-white text-left shadow-2xl rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={customerDetails.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Mobile</label>
          <input
            type="tel"
            name="mobile"
            value={customerDetails.mobile}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter your mobile number"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Address</label>
          <textarea
            name="address"
            value={customerDetails.address}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter your address"
            rows="3"
          ></textarea>
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>
        <button
          type="button"
          onClick={handleConfirmOrder}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-green-500 transition"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CustomerDetailsPage;
