import React, { useEffect } from "react";
const AboutPage = () => {
     // Scroll to top on page render
 useEffect(() => {
   window.scrollTo(0, 0);
 }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-sans text-center text-gray-800 mb-8 tracking-widest">About Our Restaurant</h1>

        <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Section - Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="./Restaurant.jpeg"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section - Description */}
          <div className="w-full lg:w-1/2 p-6 lg:p-12">
            <h2 className="text-3xl font-thin text-gray-800 mb-4">Welcome to Flavour Fusion</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Flavour Fusion, we believe in delivering a culinary experience that tantalizes your taste buds.
              Our chefs prepare each dish with passion, using only the freshest ingredients and authentic flavors. Whether
              you're craving a hearty breakfast, a delightful lunch, or an elegant dinner, we have something for everyone.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Established in [Year], our restaurant has become a beloved destination for food enthusiasts. We pride
              ourselves on offering not just meals, but memories. Come and enjoy a cozy ambiance, exceptional service,
              and a menu crafted to perfection.
            </p>
            <div className="mt-4 mb-4">
              <a
                href="/browsemenu"
                className="bg-black text-white py-4 px-4 rounded-lg shadow transition"
              >
                Explore Our Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
