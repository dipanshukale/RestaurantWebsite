import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AdminPanel = () => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedOrder, setSelectedOrder] = useState(null); // State for selected order
	const [showModal, setShowModal] = useState(false); // State for modal visibility

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await axios.get("http://localhost:8000/home-delivery-orders");
				setOrders(response.data.data);
			} catch (err) {
				setError("Failed to fetch orders");
			} finally {
				setLoading(false);
			}
		};
		fetchOrders();

	}, []);

	const handleRowClick = (order) => {
		setSelectedOrder(order); // Set the selected order
		setShowModal(true); // Show the modal
	};

	const closeModal = () => {
		setShowModal(false); // Hide the modal
		setSelectedOrder(null); // Clear the selected order
	};

	
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/home-delivery-orders/${id}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
      toast.success("Order deleted successfully", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } catch (err) {
      console.error("Failed to delete the order:", err);
      toast.error("Failed to delete the order", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };


const handleStatusChange = async (id) => {
   try {
     await axios.put(`http://localhost:8000/home-delivery-orders/status/${id}`, { status: "Completed" });
     setOrders((prevOrders) =>
       prevOrders.map((order) =>
         order._id === id ? { ...order, status: "Completed" } : order
       )
     );
     toast.success("Order marked as Completed!", {
       position: "top-right",
       autoClose: 3000,
       theme: "dark",
     });
   } catch (err) {
     console.error("Failed to update order status:", err);
     toast.error("Failed to update order status", {
       position: "top-right",
       autoClose: 3000,
       theme: "dark",
     });
   }
 };

	return (
		<div className="min-h-screen bg-gray-50 py-10">
			<ToastContainer/>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h3 className="text-xl font-serif text-center text-orange-800">
					Flavor Fusion
				</h3>
				<h1 className="text-2xl font-bold text-green-600 text-center mb-8">
					Home Delivery - Orders
				</h1>
				{loading ? (
					<p className="text-center text-lg text-gray-600">Loading orders...</p>
				) : error ? (
					<p className="text-center text-red-500">{error}</p>
				) : (
					<div className="overflow-x-auto bg-white shadow-2xl rounded-lg border border-gray-200 mt-44 lg:mt-70">
						<table className="table-auto w-full text-left">
							<thead className="bg-gray-200 border-b">
								<tr>
									<th className="px-4 py-3 text-sm font-medium text-gray-600">
										Customer Name
									</th>
									<th className="px-4 py-3 text-sm font-medium text-gray-600">
										Mobile
									</th>
									<th className="px-4 py-3 text-sm font-medium text-gray-600">
										Total Amount
									</th>
									<th className="px-4 py-3 text-sm font-medium text-gray-600">
										Status
											</th>
									<th className="px-4 py-3 text-sm font-medium text-gray-600">
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((order, index) => (
									<tr
										key={order._id}
										className={`${
											index % 2 === 0 ? "bg-gray-50" : "bg-white"
										} hover:bg-gray-100 cursor-pointer`}
									>
										<td  onClick={() => handleRowClick(order)} className="px-4 py-3 text-sm text-gray-700">
											{order.customerDetails.name}
										</td>
										<td className="px-4 py-3 text-sm text-gray-700">
											{order.customerDetails.mobile}
										</td>
										<td className="px-4 py-3 text-sm text-gray-700 font-medium">
											₹{order.totalAmount.toFixed(2)}
										</td>
										<td className="px-4 py-3 text-sm">
											<button onClick={() => handleStatusChange(order._id)}
												className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
												order.status === "Completed" ? "bg-green-500 text-black" : order.status === "pending" ? "bg-yellow-400 text-black" : "bg-gray-300 text-black"
												
												}`}
											>
												{order.status}
											</button>
										</td>
										<td className="px-4 py-3 text-sm">
											<button  onClick={() => handleDelete(order._id)} className="bg-red-500 text-white px-3 py-1 rounded-2xl hover:bg-red-600">Delete</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>

			{/* Modal for order details */}
			{showModal && selectedOrder && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg shadow-lg w-3/4 max-w-md p-6 relative">
						<h2 className="text-xl font-bold mb-4 text-center">
							Order Details
						</h2>
						<p className="text-sm text-gray-600">
							<strong>Customer:</strong> {selectedOrder.customerDetails.name}
						</p>             
						<p className="text-sm text-gray-600">
							<strong>Address:</strong> {selectedOrder.customerDetails.address}
						</p>
						<p className="text-sm text-gray-600">
							<strong>Mobile:</strong> {selectedOrder.customerDetails.mobile}
						</p>
						<div className="mt-4">
							<h3 className="text-lg font-bold mb-2">Items Ordered :- </h3>
							<ul className="list-disc pl-5">
								{selectedOrder.cart?.map((item, index) => (
									<p key={index} className="text-sm text-gray-700">
										{item.name} Qty {item.quantity} = ₹{item.price.toFixed(2)}
									</p>
								))}
							</ul>
							<p className="mt-6 font-bold">
								{" "}
								Total Amount is :- {selectedOrder.totalAmount}
							</p>
						</div>
						<button
							onClick={closeModal}
							className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
						>
							&times;
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default AdminPanel;
