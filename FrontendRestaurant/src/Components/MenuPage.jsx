import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const MenuPage = ({ addToCart,updateCartItem,cart,setiscart }) => {
	  const navigate = useNavigate();

	// Sample data for menu items
	const menuItems = [
		{
			id: 1,
			name: "Margherita Pizza",
			category: "Pizza",
			price: 139,
			description: "Classic cheese and tomato pizza.",
			image: "./Margherita Pizza.jpeg",
		},
		{
			id: 2,
			name: "Veggie Burger",
			category: "Burger",
			price: 129,
			description: "Loaded with fresh veggies and sauces.",
			image: "./Veggie Burger.jpeg",
		},
		{
			id: 3,
			name: "Pasta Alfredo",
			category: "Pasta",
			price: 169,
			description: "Creamy Alfredo pasta with herbs.",
			image: "./AlferdoPasta.jpeg",
		},
		{
			id: 4,
			name: "Pepperoni Pizza",
			category: "Pizza",
			price: 189,
			description: "Topped with spicy pepperoni.",
			image: "./PepperoniPizza.jpeg",
		},
		{
			id: 5,
			name: "Veg loaded",
			category: "Pizza",
			price: 199,
			description: "Topped with spicy pepperoni.",
			image: "./vegpizza.jpeg",
		},
		{
			id: 6,
			name: "Chicken Burger",
			category: "Burger",
			price: 159,
			description: "Juicy chicken patty with lettuce.",
			image: "./ChickenBurger.jpeg",
		},
	];

	// Find the quantity of a specific item in the cart
const getItemQuantity = (itemId) => {
  const item = cart.find((cartItem) => cartItem.id === itemId);
  return item ? item.quantity : 0;
};

	return (
		<div className="w-full px-6 py-6">
			<h1 className="lg:text-6xl text-4xl font-serif text-center mb-8 text-gray-900">
				Check our our delicious menu
			</h1>
			<h2 className="font-thin text-center text-2xl">Our Recommended Items</h2>


			{/* Card List */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-6 lg:p-20">
				{menuItems.map((item) => (
					<div
						key={item.id}
						className="border cursor-pointer rounded-lg p-6 shadow-md bg-white  hover:shadow-xl transition"
					>
						{/* Image */}
						<img
							src={item.image}
							alt={item.name}
							className="w-full h-48 rounded-lg object-cover mb-4"
						/>
						{/* Content */}
						<h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
						<p className="text-gray-600 mt-2">{item.description}</p>
						<p className="text-gray-800 font-semibold mt-4">₹{item.price}</p>
						{/* Buttons */}
						<div className="flex  justify-center  mt-4">
							<button
							 // Add to cart
								className=" flex items-center px-4 py-2 border border-gray-800 text-gray-800 rounded-md hover:bg-white hover:text-black transition"
							>
								<span onClick={() => updateCartItem(item, "decrease")} className="px-4 py-2 text-2xl hover:bg-white hover:text-black font-bold mr-2">-</span>
								Add {cart.length > 0 && (!setiscart || getItemQuantity(item.id))}
								<span onClick={() => { updateCartItem(item, "increase"); setiscart(true)}} className="px-4 py-2 text-2xl  hover:bg-white hover:text-black font-bold ml-2">+</span>
							</button>
                        </div>
                        
                    </div>
				))}

            </div>
            
            <div className="flex justify-center mt-8">
	<button onClick={()=> navigate("/browsemenu")} className="bg-black text-white rounded-xl px-10 py-3 text-lg hover:bg-[#58b749] transition">
		Browse Menu
	</button>
</div>
		</div>
	);
};

export default MenuPage;
