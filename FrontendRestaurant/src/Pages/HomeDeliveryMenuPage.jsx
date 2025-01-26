import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeDeliveryMenuPage = ({ menuItems, cart, updateCartItem }) => {
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [iscart, setiscart] = useState(false);
  const navigate = useNavigate();

  // Scroll to the top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter menu items based on selected category
  const filteredItems =
    filteredCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filteredCategory);

  // Calculate the subtotal
  const calculateSubtotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Get the quantity of a specific item in the cart
  const getItemQuantity = (itemId) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gray-100 lg:p-6 p-16 mb-36">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl font-sans text-center text-gray-800 mb-8">
          Home Delivery Menu
        </h1>

        {/* Filter Buttons */}
        <div className="flex  justify-center mb-8">
          {["All", "Pizza", "Sandwich", "Pasta", "Burger"].map((category) => (
            <button
              key={category}
              onClick={() => setFilteredCategory(category)}
              className={`px-4 py-2 mx-2 rounded-lg ${
                filteredCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-black transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Item Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              {/* Item Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-600 mb-4">₹{item.price}</p>

                {/* Add/Remove Buttons */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => updateCartItem(item, "decrease")}
                    className="px-4 py-2 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-200 transition"
                  >
                    -
                  </button>
                  <span className="mx-4 mr-2"> Add {cart.length > 0 && getItemQuantity(item.id)}</span>
                  <button
                    onClick={() => updateCartItem(item, "increase")}
                    className="px-4 py-2 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-200 transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 border-t border-gray-200 z-10">
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
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeDeliveryMenuPage;
