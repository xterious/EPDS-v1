import AddProductForm from "@/components/admin/AddProductForm";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}/product/all`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token-admin"),
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='p-4 space-y-4'>
      <AddProductForm />
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-200 grid grid-cols-6'>
              <th className='px-4 py-2 col-span-1'>ID</th>
              <th className='px-4 py-2 col-span-1'>Name</th>
              <th className='px-2 py-2 col-span-2'>Image</th>
              <th className='px-4 py-2 col-span-1'>Price</th>
              <th className='px-4 py-2 col-span-1'>Scale</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-gray-100 text-center"
                    : "bg-white text-center"
                } grid grid-cols-6`}>
                <td className='border px-4 py-2 col-span-1'>{product.id}</td>
                <td className='border px-4 py-2 capitalize col-span-1'>
                  {product.name}
                </td>
                <td className='border flex justify-center col-span-2 max-h-40'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full object-cover'
                    title={product.name}
                  />
                </td>
                <td className='border px-4 py-2 col-span-1'>
                  ₹{product.price.toLocaleString()}
                </td>
                <td className='border px-4 py-2 capitalize col-span-1'>
                  {product.scale}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
