import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const DashboardLayout = () => {
	const navigate = useNavigate();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	// Function to handle navigation and close the sidebar
	const handleNavigation = (path) => {
		navigate(path); // Navigate to the specified path
		setIsSidebarOpen(false); // Close the sidebar
	};

	return (
		<div className="min-h-screen overflow-hidden flex md:flex-row bg-gray-100">
			{/* Mobile Sidebar Toggle Button */}
			<button
				className="md:hidden bg-black text-white p-4 fixed top-8 left-4 z-50 rounded-full shadow-lg"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				{isSidebarOpen ? "Close" : "Menu"}
			</button>

			{/* Sidebar */}
			<nav
				className={`fixed top-0 left-0 z-40 h-screen w-full bg-blue-900 text-white p-6 transform ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:w-1/4 lg:w-1/5`}
			>
				<h1 className="text-2xl mt-6 font-bold text-center md:text-left">
					Flavor Fusion
				</h1>
				<ul className="flex flex-col h-full justify-center space-y-6">
					<li>
						<button
							onClick={() => handleNavigation("/")}
							className="block w-full text-left px-4 py-2 rounded hover:bg-blue-700"
						>
							Admin Panel Home
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation("/restaurantcharts")}
							className="block w-full text-left px-4 py-2 rounded hover:bg-blue-700"
						>
							Restaurant Orders Analytics
						</button>
					</li>
					<li>
						<button
							onClick={() =>
								handleNavigation("/Home-delivery-restaurantcharts")
							}
							className="block w-full text-left px-4 py-2 rounded hover:bg-blue-700"
						>
							Home Delivery Orders Analytics
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation("/order")}
							className="block w-full text-left px-4 py-2 rounded hover:bg-blue-700"
						>
							Restaurant Orders
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation("/home-delivery")}
							className="block w-full text-left px-4 py-2 rounded hover:bg-blue-700"
						>
							Home Delivery Orders
						</button>
					</li>
				</ul>
			</nav>

			{/* Main Content */}
			<main className="flex-grow h-screen overflow-y-auto p-6 md:p-12">
				<Outlet />
			</main>
		</div>
	);
};

export default DashboardLayout;
