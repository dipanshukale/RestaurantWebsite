import React, { useEffect, useState } from 'react';

const Dashboard = () => {

  const [orders, setOrders] = useState([
  {
    orderId: "001",
    tableId: "T1",
    customerName: "John Doe",
    mobileNumber: "9876543210",
    items: [
      { name: "Margherita Pizza", quantity: 2 },
      { name: "Coke", quantity: 2 },
    ],
    status: "pending",
    timestamp: "2025-01-14T10:00:00Z",
  },
  {
    orderId: "002",
    tableId: "T2",
    customerName: "Jane Smith",
    mobileNumber: "9123456789",
    items: [
      { name: "Veggie Burger", quantity: 1 },
      { name: "Fries", quantity: 1 },
      { name: "Lemonade", quantity: 1 },
    ],
    status: "pending",
    timestamp: "2025-01-14T10:30:00Z",
  },
  {
    orderId: "003",
    tableId: "T3",
    customerName: "Alice Johnson",
    mobileNumber: "8765432190",
    items: [
      { name: "Pasta Alfredo", quantity: 1 },
      { name: "Iced Tea", quantity: 2 },
    ],
    status: "completed",
    timestamp: "2025-01-14T11:00:00Z",
  },
  {
    orderId: "004",
    tableId: "T4",
    customerName: "Bob Williams",
    mobileNumber: "9988776655",
    items: [
      { name: "Chicken Wings", quantity: 1 },
      { name: "Beer", quantity: 3 },
    ],
    status: "pending",
    timestamp: "2025-01-14T11:15:00Z",
  },
]);


  // useEffect(() => {
    // Fetch orders from backend
    // axios.get('/api/orders').then((res) => setOrders(res.data));
  // }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Order Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-black">
                 {order.customerName}
              </h2>
              <p className="text-gray-600">Mobile: {order.mobileNumber}</p>
              <p className="text-gray-600">Table: {order.tableId}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Order Details:</h3>
              <ul className="list-disc list-inside">
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} x {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span
                className={`inline-block px-3 py-1 text-sm rounded ${
                  order.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : order.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {order.status}
              </span>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
