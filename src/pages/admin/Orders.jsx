import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isempty, setIsempty] = useState(false);

  const fetchOrders = () => {
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
    fetchOrders();
  }, []);

  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4'>Orders</h2>
      <div className='overflow-x-auto'>
        {!isempty && (
          <table className='table-auto w-full border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='px-4 py-2 border border-gray-300'>Order ID</th>
                <th className='px-4 py-2 border border-gray-300'>Order Date</th>
                <th className='px-4 py-2 border border-gray-300'>Phone</th>
                <th className='px-4 py-2 border border-gray-300'>Status</th>
                <th className='px-4 py-2 border border-gray-300 grid grid-cols-3'>
                  Order Items
                </th>
                <th className='px-4 py-2 border border-gray-300' />
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className={index % 2 !== 0 ? "bg-gray-200" : "bg-white"}>
                  <td className='border border-gray-300 px-4 py-2'>
                    {order.id}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    +91{" "}
                    {order.clientPhone.slice(0, 5) +
                      " " +
                      order.clientPhone.slice(5)}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {order.isDelivered
                      ? "Delivered"
                      : order.isDispatched
                      ? "Dispatched"
                      : "Shipping"}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <div className='grid grid-cols-3 pl-4'>
                      {order.orderItems.map((item) => (
                        <div
                          key={item.id}
                          className='capitalize flex flex-col items-center'>
                          <img
                            src={item.image}
                            alt={item.name}
                            className='size-20 rounded-full border border-gray-300'
                          />
                          {item.name} / {item.quantity} {item.scale}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {!order.isDelivered &&
                      (order.isDispatched ? (
                        <button className='bg-sky-600 hover:bg-sky-800 px-4 py-1 text-white rounded-md font-medium'>
                          Track Order
                        </button>
                      ) : (
                        <button className='bg-lime-600 hover:bg-lime-800 px-4 py-1 text-white rounded-md font-medium'>
                          Ship Order
                        </button>
                      ))}
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
