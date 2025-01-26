import React from "react";

const AllBlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "The Art of Italian Cuisine",
      description: "Discover the secrets of authentic Italian cooking.",
      image: "https://images.unsplash.com/photo-1589952288361-1306863ee8b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "5 Must-Try Dishes Around the World",
      description: "Explore the most iconic dishes from various countries.",
      image: "https://images.unsplash.com/photo-1604908177997-e94043a77aaf?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "A Guide to Perfect Wine Pairing",
      description: "Learn how to pair wines with your favorite meals.",
      image: "https://images.unsplash.com/photo-1504904106987-e80e7ec3185d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Healthy Eating Habits",
      description: "Tips to maintain a balanced and healthy diet.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Secrets of French Pastry",
      description: "Delve into the world of exquisite French desserts.",
      image: "https://images.unsplash.com/photo-1612392061784-216d930f2f03?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">All Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <a
                href={`/blog/${blog.id}`}
                className="text-green-500 hover:underline mt-4 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
