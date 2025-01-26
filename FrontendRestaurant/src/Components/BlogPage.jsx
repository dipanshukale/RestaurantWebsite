import React from "react";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();
  const blogs = [
    {
      id: 1,
      title: "The Best Dining Experience in Nagpur",
      description:
        "Discover why our restaurant is the top choice for food lovers in the city. From exceptional dishes to a cozy ambiance, we promise a memorable dining experience.",
      image: "./Dine-in1.jpg",
      date: "2025-01-15",
      time: "10:00 AM",
    },
  ];

  return (
    <div className="relative min-h-screen  py-20">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 sm:px-6 text-center pb-2">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl font-serif text-black mb-2">
            Welcome to Our Blog
          </h1>
          <div className="text-gray-600 text-lg mb-8">
            Insights, Recipes, and Behind-the-Scenes Stories
          </div>
        </div>

        {/* Blog Content with Left Title, Blog Name, Description and Right View All Button */}
        <div className="lg:flex lg:space-x-12">
          {/* Left Column - Blog Title, Blog Name, Description */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="text-left">
              <h2 className="text-2xl font-thin text-gray-800 mb-4">
                Featured Blog
              </h2>

              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-200"
                >
                  {/* Blog Image */}
                  <div className="mb-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  {/* Blog Title and Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {blog.description}
                    </p>

                    {/* Date and Time */}
                    <div className="text-gray-500 text-xs">
                      <span>{blog.date}</span> | <span>{blog.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Same Content + View All Blogs Button */}
          <div className="lg:w-1/2">
            <div className="text-left mt-12">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white shadow-xl rounded-lg p-6 mb-8 border border-gray-200"
                >
                  {/* Blog Image */}
                  <div className="mb-4">
                    <img
                      src="./Dine-in2.jpg"
                      alt={blog.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  {/* Blog Title and Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {blog.description}
                    </p>

                    {/* Date and Time */}
                    <div className="text-gray-500 text-xs">
                      <span>{blog.date}</span> | <span>{blog.time}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* View All Blogs Button */}
              {/* <div className="mt-8 text-center"> */}
                {/* <button onClick={()=> navigate("/all-blog")} className=" bg-black hover:bg-[#FF5733] text-white py-2 px-6 rounded-lg shadow-md  transition duration-300"> */}
                  {/* View All Blogs */}
                {/* </button> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
