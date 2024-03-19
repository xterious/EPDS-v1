import React from "react";

const AuthForm = () => {
  return (
    <div className='bg-red-700 p-2 flex flex-col items-center rounded-md text-xl text-white font-semibold md:w-1/3 w-full'>
      Authorization Form
      <a
        href='/authorization-form.pdf'
        target='_blank'
        className='text-xs text-yellow-200 hover:underline'>
        Download
      </a>
    </div>
  );
};

export default AuthForm;
