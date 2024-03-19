import Navbar from "@/components/client/products/Navbar";
import TopNavbar from "@/components/client/Navbar";
import { CaretDownIcon, DropdownMenuIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import CartModal from "@/components/client/products/CartModal";

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
  // State to track quantity for each product
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 0; // Initially set quantity to 0 for all products
      return acc;
    }, {})
  );
  const isZero = Object.values(quantities).every((quantity) => quantity === 0);

  const handleAdd = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
    addToCart(productId);
  };

  const handleSubtract = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(0, prevQuantities[productId] - 1),
    }));
    removeFromCart(productId);
  };

  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="bg-gray-100 p-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 flex flex-col items-center shadow-lg"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-32 h-32 object-cover"
              />
              <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
              <div className="flex justify-between w-[60%] items-center">
                <p className="mt-1">₹{product.price}</p>
                {!isZero && (
                  <div className="mt-auto flex items-center">
                    <button
                      className="bg-none border border-red-500 text-red-500 py-1 px-2 rounded-l hover:bg-red-500 hover:text-white transition duration-300"
                      onClick={() => handleSubtract(product.id)}
                    >
                      -
                    </button>
                    <span className="px-2">{quantities[product.id]}</span>
                    <button
                      className="bg-none border border-red-500 text-red-500 py-1 px-2 rounded-r hover:bg-red-500 hover:text-white transition duration-300"
                      onClick={() => handleAdd(product.id)}
                    >
                      +
                    </button>
                  </div>
                )}
                {isZero && (
                  <button
                    onClick={() => handleAdd(product.id)}
                    className="px-3 py-1 text-red-500 rounded-lg bg-none border border-red-500 hover:bg-red-500 hover:text-white transition duration-300"
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CartModal isOpen={true} handleClose={() => {}} cartItems={cartItems} />
    </>
  );
};

export default Products;
