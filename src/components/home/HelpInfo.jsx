import React from "react";

const HelpInfo = ({ title, phone }) => {
  return (
    <div className='bg-teal-500 p-2 flex flex-col items-center rounded-md text-xl text-white font-semibold md:w-1/3 w-full'>
      <p className='text-sm text-yellow-200'>{title}</p>
      <h1>{phone}</h1>
    </div>
  );
};

export default HelpInfo;
