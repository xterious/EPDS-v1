import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isempty, setIsempty] = useState(false);

  const fetchProducts = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}/admin/getOrders`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token-admin"),
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  // const isempty
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      <div className="overflow-x-auto">
        {!isempty && (
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Created At</th>
                <th className="px-4 py-2">Client Phone</th>
                <th className="px-4 py-2">Dispatched</th>
                <th className="px-4 py-2">Delivered</th>
                <th className="px-4 py-2">Order Items</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className={order.id % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">{order.clientPhone}</td>
                  <td className="border px-4 py-2">
                    {order.isDispatched ? "Yes" : "No"}
                  </td>
                  <td className="border px-4 py-2">
                    {order.isDelivered ? "Yes" : "No"}
                  </td>
                  <td className="border px-4 py-2">
                    <ul>
                      {order.orderItems.map((item) => (
                        <li key={item.id} className="capitalize">
                          {item.name} - {item.quantity} {item.scale}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
