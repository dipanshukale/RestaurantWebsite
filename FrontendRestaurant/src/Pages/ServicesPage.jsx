import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Fine Dining",
    description:
      "Experience exquisite meals crafted by our world-class chefs in a luxurious ambiance.",
    image: "./FineDining.jpeg",
  },
  {
    id: 2,
    title: "Home Delivery",
    description:
      "Enjoy your favorite dishes at the comfort of your home with our quick and safe delivery service.",
    image: "./homedelivery.jpeg",
  },
  {
    id: 3,
    title: "Event Catering",
    description:
      "Make your events memorable with our custom catering services tailored to your needs.",
    image: "./EventCatering.jpeg",
  },
  {
    id: 4,
    title: "Takeaway",
    note:"the price of takeway is different it depends on the food which are you ordering",
    description:
      "Grab your meals on the go with our fast and convenient takeaway service.",
    image: "./Takeaway.jpeg"
  },
];

const ServicesPage = () => {
  // Scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl md:text-5xl font-thin text-center mb-10 text-gray-800">
          From Our Kitchen to Your Table
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-serif text-gray-800 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={`/learn-more`}
                  state={service} // Pass service data
                  className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-[#58b749] transition block text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
