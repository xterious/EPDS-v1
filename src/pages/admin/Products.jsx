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
    <div className='p-4'>
      <AddProductForm />
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th className='px-4 py-2'>ID</th>
            <th className='px-4 py-2'>Name</th>
            <th className='px-4 py-2'>Image</th>
            <th className='px-4 py-2'>Price</th>
            <th className='px-4 py-2'>Scale</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className='border px-4 py-2'>{product.id}</td>
              <td className='border px-4 py-2'>{product.name}</td>
              <td className='border px-4 py-2'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='h-20 w-auto'
                />
              </td>
              <td className='border px-4 py-2'>{product.price}</td>
              <td className='border px-4 py-2'>{product.scale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
