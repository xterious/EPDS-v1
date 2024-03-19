import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Download = () => {
  return (
    <div className='w-full flex justify-center items-center gap-14 bg-gray-500 text-white p-4'>
      <h1 className='text-xl font-semibold'>Download the free app now!</h1>
      <div className='flex gap-3'>
        <FontAwesomeIcon className='text-5xl' icon={faAndroid} />
        <FontAwesomeIcon className='text-5xl' icon={faApple} />
      </div>
    </div>
  );
};

export default Download;
