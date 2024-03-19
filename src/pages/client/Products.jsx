import TopNavbar from "@/components/client/Navbar";
import React, { useEffect, useState } from "react";
import CartModal from "@/components/products/CartModal";
import ProductCard from "@/components/products/ProductCard";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}/product/all`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token-client"),
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
    <>
      <TopNavbar />
      <CartModal />
      <div className='bg-gray-100 p-4'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-[60vh]'>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              name={product.name}
              imageUrl={product.image}
              scale={product.scale}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
