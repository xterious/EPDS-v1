import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchProducts = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}/admin/getOrders`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token-admin"),
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
  return (
    <div className='p-4'>
      <h2>Orders</h2>
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Order ID</th>
            <th className='px-4 py-2'>Created At</th>
            <th className='px-4 py-2'>Client Phone</th>
            <th className='px-4 py-2'>Dispatched</th>
            <th className='px-4 py-2'>Delivered</th>
            <th className='px-4 py-2'>Order Items</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className='border px-4 py-2'>{order.id}</td>
              <td className='border px-4 py-2'>
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
              <td className='border px-4 py-2'>{order.clientPhone}</td>
              <td className='border px-4 py-2'>
                {order.isDispatched ? "Yes" : "No"}
              </td>
              <td className='border px-4 py-2'>
                {order.isDelivered ? "Yes" : "No"}
              </td>
              <td className='border px-4 py-2'>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.id}>
                      {item.name} - {item.quantity}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
