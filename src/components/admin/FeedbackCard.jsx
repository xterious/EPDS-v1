import React from "react";

function FeedbackCard({ username, type, content }) {
  return (
    <div className='mb-3'>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-xl font-bold mb-2'>{username}</h2>
        <div className='bg-blue-500 text-white inline-block px-2 py-1 rounded mb-4'>
          {type}
        </div>
        <p className='text-gray-700'>{content}</p>
        <button className='bg-green-200 hover:bg-blue-700 hover:text-white  text-black font-bold py-1 px-3 rounded mt-2'>
          Answer
        </button>
      </div>
    </div>
  );
}

export default FeedbackCard;
