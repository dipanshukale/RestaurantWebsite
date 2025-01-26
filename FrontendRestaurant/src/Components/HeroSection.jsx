import React from "react";
import { Link } from "react-scroll"
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center h-[800px] lg:h-[750px]"
      style={{
        backgroundImage: `url(../../public/hero1.jpg)`,
      }}
    >
     
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
       <ToastContainer />
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between container mx-auto px-6 sm:px-12 lg:px-24">
        {/* Left Content */}
        <div className="text-white max-w-lg lg:max-w-md space-y-6 lg:space-y-8">
          <h1 className="text-4xl sm:text-5xl text-balance lg:text-6xl font-bold leading-tight">
           Flavors That Speak to Your Soul
          </h1>
          <p className="text-lg sm:text-xl text-pretty lg:text-2xl">
            Experience a world of vibrant tastes and exceptional dishes that fuse global flavors into every bite. From sizzling starters to delectable desserts, we redefine dining, one flavor at a time.
          </p>
          <div className="flex justify-center space-x-4">
            <button onClick={()=> navigate("/home-delivery")} className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md  hover:bg-[#58b749] hover:text-white transition duration-300">
              Home Delivery
            </button>
            <button onClick={()=> navigate("/browsemenu")} className="border-white border-2 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-white hover:text-black transition duration-300">
              Order Now
            </button>
          </div>
        </div>

        {/* Right Content */}
        {/* <div className="hidden lg:block flex-1"></div> */}
      </div>
    </section>
    
  );
};

export default HeroSection;
