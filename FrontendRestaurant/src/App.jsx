import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router
import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import BrowseMenuPage from "./Pages/BrowseMenuPage.jsx";
import AllPage from "./Components/AllPage.jsx";
import OrderConfirmation from "./Pages/OrderConfirmation.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import LearnMorePage from "./Pages/LearnMorePage.jsx";
import HomeDeliveryMenuPage from "./Pages/HomeDeliveryMenuPage.jsx";
import OrderSummaryPage from "./Pages/OrderSummaryPage.jsx";
import CustomerDetailsPage from "./Pages/CustomerDetailspage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import AllBlogsPage from "./Pages/AllBlogsPage.jsx";

function App() {
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		setCart((prevCart) => {
			// Check if item already exists in the cart
			const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
			if (existingItem) {
				// If item exists, increment its quantity
				return prevCart.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				);
			} else {
				// If item doesn't exist, add it with a quantity of 1
				return [...prevCart, { ...item, quantity: 1 }];
			}
		});
  };

  const updateCartItem = (item, action) => {
  setCart((prevCart) => {
    // Clone the previous cart to avoid direct mutation
    const updatedCart = [...prevCart];
    const itemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (action === "increase") {
      if (itemIndex >= 0) {
        // Increase the quantity by 1
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + 1,
        };
      } else {
        // Add the item with quantity 1 if not already in cart
        updatedCart.push({ ...item, quantity: 1 });
      }
    } else if (action === "decrease") {
      if (itemIndex >= 0) {
        if (updatedCart[itemIndex].quantity > 1) {
          // Decrease the quantity by 1
          updatedCart[itemIndex] = {
            ...updatedCart[itemIndex],
            quantity: updatedCart[itemIndex].quantity - 1,
          };
        } else {
          // Remove the item from the cart if quantity reaches 0
          updatedCart.splice(itemIndex, 1);
        }
      }
    }

    return updatedCart;
  });
};

  



	const menuItems = [
		{
			id: 1,
			name: "Margherita Pizza",
			category: "Pizza",
			price: 149,
			description: "Classic cheese and tomato pizza.",
			image: "./Margherita Pizza.jpeg",
		},
		{
			id: 2,
			name: "Pepperoni Pizza",
			category: "Pizza",
			price: 299,
			description: "Topped with spicy pepperoni and mozzarella cheese.",
			image: "./PepperoniPizza.jpeg",
		},
		{
			id: 3,
			name: "Veggie Supreme Pizza",
			category: "Pizza",
			price: 349,
			description: "Loaded with fresh vegetables and mozzarella.",
			image: "./vegpizza.jpeg",
		},
		{
			id: 4,
			name: "Chicken Tikka Pizza",
			category: "Pizza",
			price: 299,
			description: "Tandoori chicken tikka with onions and peppers.",
			image: "./Pizza Tikka.jpeg",
		},
		{
			id: 5,
			name: "Classic Veggie Burger",
			category: "Burger",
			price: 149,
			description: "Fresh veggies, cheese, and sauces in a soft bun.",
			image: "./VeggieBurger.jpeg",
		},
		{
			id: 6,
			name: "Spicy Chicken Burger",
			category: "Burger",
			price: 189,
			description: "Juicy chicken patty with a spicy twist.",
			image: "./ChickenBurger1.jpeg",
		},
		{
			id: 7,
			name: "Double Cheeseburger",
			category: "Burger",
			price: 179,
			description: "Two beef patties with melted cheese and lettuce.",
			image: "./DoubleCheeseburger.jpeg",
		},
		{
			id: 8,
			name: "Pasta Alfredo",
			category: "Pasta",
			price: 199,
			description: "Creamy Alfredo sauce with herbs and parmesan.",
			image: "./AlferdoPasta.jpeg",
		},
		{
			id: 9,
			name: "Pasta Arrabbiata",
			category: "Pasta",
			price: 189,
			description: "Spicy tomato-based pasta with chili flakes.",
			image: "./ArrabbiataPasta.jpeg",
		},
		{
			id: 10,
			name: "Garlic Bread",
			category: "Sides",
			price: 89,
			description: "Toasted bread with garlic butter and herbs.",
			image: "./GarlicBread.jpeg",
		},
		{
			id: 11,
			name: "French Fries",
			category: "Fries",
			price: 99,
			description: "Crispy and golden fries served with ketchup.",
			image: "./FrenchFries.jpeg",
		},
		{
			id: 12,
			name: "Classic Mocktail",
			category: "Mocktail",
			price: 129,
			description: "A refreshing blend of juices and soda.",
			image: "./ClassicMocktail1.jpeg",
		},
		{
			id: 13,
			name: "Blue Lagoon",
			category: "Mocktail",
			price: 159,
			description: "A tropical mocktail with a hint of citrus.",
			image: "./BlueLagoon1.jpeg",
		},
		{
			id: 14,
			name: "Cold Coffee",
			category: "Coffee",
			price: 119,
			description: "Chilled coffee blended with milk and sugar.",
			image: "./ColdCoffee1.jpeg",
		},
		{
			id: 15,
			name: "Cappuccino",
			category: "Coffee",
			price: 149,
			description: "Espresso topped with steamed milk and foam.",
			image: "./Cappuccino.jpeg",
		},
		{
			id: 16,
			name: "Chocolate Shake",
			category: "Shakes",
			price: 139,
			description: "Rich and creamy chocolate milkshake.",
			image: "./ChocolateShake.jpeg",
		},
		{
			id: 17,
			name: "Strawberry Shake",
			category: "Shakes",
			price: 149,
			description: "Sweet and refreshing strawberry milkshake.",
			image: "./StrawberryShake.jpeg",
		},
		{
			id: 18,
			name: "Mango Smoothie",
			category: "Shakes",
			price: 159,
			description: "Tropical mango smoothie blended to perfection.",
			image: "./MangoSmoothie.jpeg",
		},
	];

	// Function to add an item to the cart, updating the quantity if already exists

	return (
		<Router>
			{/* Navbar with cart information */}
			<Navbar />

			{/* Main Sections */}
			<Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<AllPage addToCart={addToCart} cart={cart} updateCartItem={updateCartItem} />} />
				<Route
					path="/browsemenu"
					element={
						<BrowseMenuPage addToCart={addToCart} menuItems={menuItems} cart={cart} updateCartItem={updateCartItem} />
					}
				/>
				<Route path="/orderconfirm" element={<OrderConfirmation cart={cart} />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/learn-more" element={<LearnMorePage />} />
				<Route path="/home-delivery" element={<HomeDeliveryMenuPage menuItems={menuItems} cart={cart} updateCartItem={updateCartItem} />} />
				<Route path="/checkout" element={<CustomerDetailsPage cart={cart} />} />
				<Route path="/order-summary" element={<OrderSummaryPage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="/all-blog" element={<AllBlogsPage/>}/>
				{/* You can also add more routes for other pages as needed */}
			</Routes>
		</Router>
	);
}

export default App;
