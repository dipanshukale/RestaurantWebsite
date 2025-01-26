import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate} from "react-router-dom";

const LearnMorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve service data from state
  const { id, title, description, image,note } = location.state || {};

// Scroll to top on page render
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  // Redirect to Services Page if no data is passed
  if (!id) {
    navigate("/services");
    return null;
  }

  // Sample pricing and highlights data
  const pricing = [
    { plan: "Basic", price: "₹599", details: "Ideal for quick meals." },
    { plan: "Standard", price: "₹1199", details: "Includes appetizers and desserts." },
    { plan: "Premium", price: "₹1599", details: "Full course meals with beverages." },
  ];

  const highlights = [
    "Customizable menu options",
    "High-quality ingredients sourced locally",
    "Professional and courteous staff",
    "Adherence to safety and hygiene protocols",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
          <div className="bg-white max-w-4xl w-full rounded-lg shadow-2xl p-8">
              <p className="text-yellow-600 text-center font-serif mb-4">{note}</p>
        {/* Service Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* Service Content */}
        <h1 className="text-3xl font-serif text-gray-800 mb-4">{title}</h1>
        <p className="text-lg text-gray-700 mb-6">{description}</p>

        {/* Pricing Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 bg-gray-50 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {plan.plan}
                </h3>
                <p className="text-xl font-bold text-green-600">{plan.price}</p>
                <p className="text-sm text-gray-600 mt-2">{plan.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {highlights.map((highlight, index) => (
              <p key={index}>{highlight}</p>
            ))}
          </ul>

          <h3 className="mt-4 text-black font-bold"> To Book Now send Mail on this E-mail dipanshukale2003@gmail.com</h3>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center lg:justify-center gap-2 items-center">
          <button
            onClick={() => navigate("/services")}
            className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition"
          >
            Back to Services
          </button>
        </div>
      </div>
    </div>
  );
};


export default LearnMorePage;
