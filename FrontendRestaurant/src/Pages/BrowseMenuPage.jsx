import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const BrowseMenuPage = ({menuItems, cart, updateCartItem }) => {
	const [filter, setFilter] = useState("All");
	const [iscart, setiscart] = useState(false);
  	const navigate = useNavigate();

	// Scroll to top on page render
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Group menu items by category and filter based on selected category
	const filteredItems =
		filter === "All"
			? menuItems
			: menuItems.filter((item) => item.category === filter);

	// Calculate the subtotal
	const calculateSubtotal = () => {
		return cart
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(2);
	};

	// Find the quantity of a specific item in the cart
	const getItemQuantity = (itemId) => {
		const item = cart.find((cartItem) => cartItem.id === itemId);
		return item ? item.quantity : 0;
  };
  
  const handleconfirmOrder = () => {
	const orderSummary = cart.map((item) => ({
		name: item.name,
		price: item.price,
		quantity: item.quantity,
		totalPrice: (item.price * item.quantity).toFixed(2),
    }));
	  const subtotal = calculateSubtotal();
	navigate("/orderconfirm", { state: { orderSummary,subtotal}});
 };

	return (
		<div className="w-full px-6 py-6 mb-20">
			<h1 className="lg:text-5xl text-3xl font-serif text-center mb-8 text-gray-900">
				Browse Our Menu
			</h1>

			{/* Filter Buttons */}
			<div className="flex flex-wrap justify-center p-2 gap-2 lg:gap-4 mb-8">
				{[
					"All",
					"Pizza",
					"Burger",
					"Fries",
					"Momo bros!",
					"Pasta",
					"Mocktail",
					"Coffee",
					"Shakes",
				].map((category) => (
					<button
						key={category}
						onClick={() => setFilter(category)}
						className={`px-4 py-2 rounded-md lg:w-28 font-semibold transition ${
							filter === category
								? "bg-black text-white"
								: "border-[#58b749] text-black border-2 hover:bg-[#58b749] hover:text-white"
						}`}
					>
						{category}
					</button>
				))}
			</div>

			{/* Card List */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredItems.map((item) => (
					<div
						key={item.id}
						className="border cursor-pointer rounded-lg p-6 shadow-md bg-white hover:shadow-xl transition"
					>
						{/* Image */}
						<img
							src={item.image}
							alt={item.name}
							className="w-full h-48 rounded-lg object-cover mb-4"
						/>
						{/* Content */}
						<h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
						<p className="text-gray-600 mt-2">{item.description}</p>
						<p className="text-gray-800 font-semibold mt-4">₹{item.price}</p>
						{/* Add to Cart Button */}
						<div className="flex justify-center mt-4 items-center gap-4">
							<button
								onClick={() => updateCartItem(item, "decrease")}
								className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition"
							>
								-
							</button>
							<span className="text-lg font-semibold">
								Add{" "}
								{cart.length > 0 && (
									<span className="ml-2">{getItemQuantity(item.id)}</span>
								)}
							</span>
							<button
								onClick={() => { updateCartItem(item, "increase"); setiscart(true)}}
								className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition"
							>
								+
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Cart Summary */}
			{cart.length > 0 && (
				<div className={`fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 md:p-6 border-t border-gray-200 z-10 ${!iscart ? "hidden" : "block"}`}>
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

export default BrowseMenuPage;
