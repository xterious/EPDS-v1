import React from "react";

const ProductCard = ({ id, imageUrl, name, price }) => {
  return (
    <div key={id} className='bg-white p-4 flex flex-col items-center shadow-lg'>
      <img src={imageUrl} alt={name} className='w-32 h-32 object-cover' />
      <h3 className='mt-2 text-lg font-semibold'>{name}</h3>
      <div className='flex justify-between w-[60%] items-center'>
        <p className='mt-1'>₹{price}</p>
        {
          <div className='mt-auto flex items-center'>
            <button className='bg-none border border-red-500 text-red-500 py-1 px-2 rounded-l hover:bg-red-500 hover:text-white transition duration-300'>
              -
            </button>
            <span className='px-2'>{id}</span>
            <button className='bg-none border border-red-500 text-red-500 py-1 px-2 rounded-r hover:bg-red-500 hover:text-white transition duration-300'>
              +
            </button>
          </div>
        }
        {
          <button className='px-3 py-1 text-red-500 rounded-lg bg-none border border-red-500 hover:bg-red-500 hover:text-white transition duration-300'>
            Add
          </button>
        }
      </div>
    </div>
  );
};

export default ProductCard;
