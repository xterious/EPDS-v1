import TopNavbar from "@/components/client/Navbar";
import React, { useState } from "react";
import CartModal from "@/components/products/CartModal";
import ProductCard from "@/components/products/ProductCard";

// Sample product data
const products = [
  {
    id: 1,
    name: "Organic Bananas",
    price: "0.99",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    price: "1.49",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Fresh Mangoes",
    price: "2.49",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Avocado",
    price: "1.99",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Grapes",
    price: "0.79",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Watermelon",
    price: "3.99",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Pineapple",
    price: "2.99",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Oranges",
    price: "0.69",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Apples",
    price: "0.89",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Blueberries",
    price: "1.99",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const Products = () => {
  return (
    <>
      <TopNavbar />
      <CartModal />
      <div className='bg-gray-100 p-4'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {products.map((product) => (
            <ProductCard />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
