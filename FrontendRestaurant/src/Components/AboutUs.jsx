import React from "react";
import About from "../../public/about.jpeg";
import About1 from "../../public/about1.jpeg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <section className="h-auto md:h-screen mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Left Section */}
      <div className="md:w-1/2 px-6 lg:px-20">
        <h1 className="text-2xl lg:text-5xl font-bold text-gray-800 text-center md:text-left">
          How we started and why we love what we do
        </h1>
        <p className="mt-6 text-gray-600 text-lg text-center font-serif leading-relaxed">
          Welcome to Flavor Fusion, where we serve love on a plate. Our story
          is built on the passion for crafting unforgettable dining experiences,
          combining the freshest ingredients with a touch of innovation. Join us
          to explore a culinary journey like no other.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center ">
          <button onClick={()=> navigate("/about")} className="w-full md:w-auto px-6 py-3 bg-black text-white rounded-md shadow-md transition">
            About Us
          </button>
          <button onClick={()=> navigate("/services")} className="w-full md:w-auto px-6 py-3 border-black border-2 text-gray-800 rounded-md shadow-md hover:bg-black hover:text-white transition">
            Services
          </button>
        </div>

        {/* Mobile Images */}
        <div className="flex md:hidden mt-8 gap-4 justify-center">
          <img
            src={About1}
            alt="About 1"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
          <img
            src={About}
            alt="About"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

     
      <div className="relative hidden md:flex md:w-1/2 justify-center items-center">
        {/* Background Image */}
        <img
          src={About1}
          alt="About 1"
          className="w-80 h-80 rounded-lg object-cover shadow-lg"
        />
        {/* Foreground Image */}
        <img
          src={About}
          alt="About"
          className="absolute top-12 left-16 w-60 h-70 rounded-lg object-cover border-4 border-white shadow-xl"
          style={{ zIndex: 10 }}
        />
      </div>
    </section>
  );
};

export default AboutUs;
