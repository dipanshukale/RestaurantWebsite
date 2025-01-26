import React, { useState } from "react";
import MenuPage from "./MenuPage";
import { useNavigate } from "react-router-dom";

const MenuApp = ({ addToCart, cart, updateCartItem }) => {
	const [iscart, setiscart] = useState(false);
	const navigate = useNavigate();

	// Calculate the subtotal
	const calculateSubtotal = () => {
		return cart
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(2);
	};

	// Handle order placement
	const handlePlaceOrder = () => {
		if (cart.length === 0) {
			alert("Your cart is empty. Add some items before placing an order.");
			return;
		}

		// const orderSummary = cart.map((item) => ({
			// name: item.name,
			// price: item.price,
			// quantity: item.quantity,
			// totalPrice: (item.price * item.quantity).toFixed(2),
		// }));

		// console.log("Order placed:");
		// console.table(orderSummary);
		// console.log(orderSummary[1].name);

		// alert(
			// `Order placed successfully!\n\nOrder Details:\n${orderSummary
				// .map((item) => `- ${item.name} (${item.quantity}): ₹${item.totalPrice}`)
				// .join("\n")}\n\nSubtotal: ₹${calculateSubtotal()}`
		// );
	};

	const handleconfirmOrder = () => {
		const orderSummary = cart.map((item) => ({
			name: item.name,
			price: item.price,
			quantity: item.quantity,
			totalPrice: (item.price * item.quantity).toFixed(2),
        }));
        
		navigate("/orderconfirm", { state: { orderSummary } });
	};

	return (
		<div className="min-h-screen bg-gray-100 z-10">
			<MenuPage
				addToCart={addToCart}
				updateCartItem={updateCartItem}
				cart={cart}
				setiscart={setiscart}
			/>

			{/* Cart Summary */}
			{cart.length > 0 &&(
				<div className={`fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 md:p-6 border-t border-gray-200 z-10 ${!iscart ? "hidden" : "block"} `}>
					<div className="flex justify-between items-center">
						<div>
							<h2 className="text-lg font-bold">Cart Items:</h2>
							<ul className="list-disc list-inside text-gray-700">
								{cart.map((item) => (
									<p key={item.id}>
										{item.name} ({item.quantity})
									</p>
								))}
							</ul>
							<h3 className="text-md font-medium mt-2">
								Subtotal: ₹{calculateSubtotal()}
							</h3>
						</div>
						<button
							className="bg-black text-white px-4 py-2 rounded-lg"
							onClick={handleconfirmOrder}
						>
							Place Order
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default MenuApp;
