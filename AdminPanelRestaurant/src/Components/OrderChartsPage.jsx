import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


const ChartsPage = () => {
    const [orders, setOrders] = useState([]);


    
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8000/orders");
        setOrders(response.data.data);
      } catch (err) {
        setError("Failed to fetch orders.");
      }
    };
    fetchOrders();
  }, []);


  // Data for Bar and Line Charts
  const getChartData = () => {
    const statusCounts = orders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(statusCounts).map(([status, count]) => ({
      status,
      count,
    }));
  };

  const lineChartData = orders.map((order, index) => ({
    name: `Order ${index + 1}`,
    amount: order.subtotal,
  }));

  return (
    <div className="min-h-screen overflow-y-auto bg-gray-50 py-10 sm:mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-8">
                  Restaurant Orders Overview
        </h1>
        <div className="mb-8">
          <h2 className="text-lg font-bold text-center text-blue-600">
            Orders Status Distribution (Bar Chart)
          </h2>
          <BarChart width={600} height={300} data={getChartData()} className="mx-auto">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="orange" />
          </BarChart>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold text-center text-purple-600">
            Orders Amount (Line Chart)
          </h2>
          <LineChart width={600} height={300} data={lineChartData} className="mx-auto">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Back to Admin Panel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
