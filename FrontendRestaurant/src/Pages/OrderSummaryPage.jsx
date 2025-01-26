import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const OrderSummaryPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { customerDetails, cart} = location.state || {}
	


	const handlePlaceOrder = async () => {
		try {
			const response = await axios.post(
				"https://restaurantwebsite-yd5g.onrender.com/home-delivery",
				{
					customerDetails,
					cart,
				},
				{
					withCredentials: true,
					headers: { "Content-Type": "application/json" },
				}
			);

			if (response.data.success) {
				toast.success("Your Order has been placed successfully", {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});

				setTimeout(() => {
					navigate("/");
				}, 3000);
			}

			console.log("Homedelivery Order has been placed successfully", customerDetails, cart);
		} catch (error) {
			toast.error("Failed to place order");
			console.log(error);
		}
	};

	return (
		<div className="relative w-full h-screen">
			<ToastContainer />
			{/* Blur Background */}
			<div className="absolute inset-0 shadow-2xl"></div>

			{/* Modal */}
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3 p-6">
				<h2 className="text-xl font-sans tracking-widest mb-4">
					Order Confirmation
				</h2>
				<div className="mb-4">
					<p>
						<strong>Name:</strong> {customerDetails.name}
					</p>
					<p>
						<strong>Mobile:</strong> {customerDetails.mobile}
					</p>
					<p>
						<strong>Address:</strong> {customerDetails.address}
					</p>
				</div>
				<h3 className="font-bold text-lg mb-4">Order Items:</h3>
				<ul className="mb-4">
					{cart.map((item) => (
						<li key={item.id} className="flex justify-between">
							<span>
								{item.name} x {item.quantity}
							</span>
							<span>₹{(item.price * item.quantity).toFixed(2)}</span>
						</li>
					))}
				</ul>
				<div className="flex justify-between font-bold text-lg">
					<span>Total:</span>
					<span>
						₹
						{cart
							.reduce((total, item) => total + item.price * item.quantity, 0)
							.toFixed(2)}
					</span>
				</div>
				<button
					onClick={handlePlaceOrder}
					className="w-full bg-black text-white py-2 rounded-lg mt-6 hover:bg-green-600 transition"
				>
					Place Order
				</button>
			</div>
		</div>
	);
};

export default OrderSummaryPage;
