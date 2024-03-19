import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CartModal from "./CartModal";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State for managing cart modal

  // Toggle cart modal
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const categories = [
    { name: "Fruits & Vegetables" },
    { name: "Foodgrains, Oil & Masala" },
    { name: "Bakery, Cakes & Dairy" },
    // ... add other categories as needed
  ];

  return (
    <nav className='bg-green-600'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-4'>
            {/* -- Dropdown menu -- */}
            <div className='hidden md:flex items-center space-x-1 text-white '>
              <div
                className='py-5 px-2 hover:text-green-200'
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Shop by Category
                {/* Dropdown icon indicator */}
              </div>
              {/* Dropdown Menu */}
              <div
                onMouseDown={() => setIsDropdownOpen(false)}
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } absolute bg-white shadow-md rounded mt-5 py-1 w-48 top-44`}>
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-white'>
                    {category.name}
                  </a>
                ))}
              </div>
              <div className='py-5 px-2 hover:text-green-200'>Groceries</div>
              <div className='py-5 px-2 hover:text-green-200'>
                Oil & Kerosene
              </div>
            </div>
          </div>
          <div
            className='flex gap-2 items-center text-white cursor-pointer'
            onClick={toggleCart}>
            Cart
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>
      </div>
      <CartModal /> {/* Render the CartModal component */}
    </nav>
  );
};

export default Navbar;
