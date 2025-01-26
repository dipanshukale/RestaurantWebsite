import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-white shadow-2xl p-6 md:p-8 mt-56 rounded-lg text-center max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-6 text-gray-800">
                Flavor Fusion Dashboard
            </h1>

            {/* Description */}
            <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
                Seamlessly manage and oversee all customer orders in one place. 
                Our Admin Panel ensures efficient tracking and processing, 
                enabling you to deliver exceptional service to your valued customers.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center">
                <button onClick={() => navigate("/home-delivery")}
                    className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out"
                >
                    Home Delivery Orders
                </button>
                <button   onClick={() => navigate("/order")}
                    className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out"
                >
                    Restaurant Orders
                </button>
            </div>
        </div>
    );
};

export default Homepage;
