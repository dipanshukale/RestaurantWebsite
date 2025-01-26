import React, { useState } from "react";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted", { name, email, message });
  };

  return (
    <div className="bg-[#5bb84d] text-white py-16">
      <div className="max-w-6xl mx-auto px-8 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-16">
          {/* Left Column - Footer Details */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-sans text-black mb-6">Flavor Fusion</h3>
            <p className="text-sm mb-2 leading-relaxed text-black">
              <strong>Address:</strong> 123, Delicious St, Foodie Town, FL
            </p>
            <p className="text-sm mb-2 leading-relaxed text-black">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-sm mb-6 leading-relaxed text-black">
              <strong>Email:</strong> contact@restaurant.com
            </p>
            <div className="flex space-x-6 justify-center text-center">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Right Column - Feedback Form */}
          <div className="lg:w-1/2 text-left">
            <h3 className="text-3xl font-sans text-black mb-6">We Value Your Feedback</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm mb-2 font-medium text-black">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-gray-800 rounded-md shadow-md focus:ring-2 focus:ring-[#B88A5B] transition duration-300"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm mb-2 font-medium text-black">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-gray-800 rounded-md shadow-md focus:ring-2 focus:ring-[#B88A5B] transition duration-300"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm mb-2 font-medium text-black">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 text-gray-800 rounded-md shadow-md focus:ring-2 focus:ring-[#B88A5B] transition duration-300"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-[#A57D4B] transition-all duration-300"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>

        {/* Copyrights and Developer Section */}
        <div className="text-center text-sm mt-12">
          <p className="text-black">&copy; {new Date().getFullYear()} Flavor Fusion. All rights reserved.</p>
          <p className="mt-2 text-black">Developed by Dipanshu Dilip Kale</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
