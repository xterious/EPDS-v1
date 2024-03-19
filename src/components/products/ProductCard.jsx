import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductCard = ({ id, imageUrl, name, price, scale }) => {
  return (
    <div
      key={id}
      className='bg-white p-4 flex flex-col items-center shadow-lg border rounded-md space-y-4 h-fit'>
      <img src={imageUrl} alt={name} className='w-full h-32 object-cover' />
      <div className='flex items-center justify-between w-[70%]'>
        <h3 className='mt-2 text-lg font-semibold capitalize'>{name}</h3>
        <p className=''>
          ₹{price} per <span className='capitalize'>{scale}</span>
        </p>
      </div>
      <button className='px-3 py-1 w-[60%] flex items-center justify-around gap-1 text-red-500 rounded-lg bg-none border border-red-500 hover:bg-red-500 hover:text-white transition duration-300'>
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
};

export default ProductCard;
