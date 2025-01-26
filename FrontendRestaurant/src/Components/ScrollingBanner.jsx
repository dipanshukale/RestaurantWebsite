import React from "react";

const ScrollingBanner = () => {
  return (
    <div className="w-full bg-[#B88A5B] h-20 overflow-hidden relative">
      {/* Scrolling content */}
      <div className="absolute w-full mt-6 flex items-center animate-scroll whitespace-nowrap">
        {Array(12)
          .fill("Order Now")
          .map((text, index) => (
            <span
              key={index}
              className="text-white font-extrabold  text-lg lg:text-2xl md:text-3xl px-4"
            >
              {text}
            </span>
          ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
