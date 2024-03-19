import React from "react";

const Hero = () => {
  const data = [
    "Objectives of the Public Distribution System",
    "Elimination of chronic hunger and starvation in Tamil Nadu.",
    "NPHH- NC card holders does not draw any commodity from the FPS.",
    "Ensuring easy accessibility of Fair Price Shops by cardholders.",
    "Ensuring affordable prices of essential commodities, especially for the poorest.",
    "Ensuring availability of essential commodities at the right time every month.",
  ];

  return (
    <div className='space-y-6'>
      <div className='space-y-5'>
        <h1 className='text-green-900 font-bold text-2xl'>
          Mission of the Public Distribution System
        </h1>
        <p className='font-serif text-lg'>
          The goal of the Public Distribution System in Tamil Nadu is to ensure
          food security to all citizens, particularly poor people, by making
          available essential commodities of good quality at affordable prices
          every month, through fair price shops which are easily accessible.
        </p>
      </div>
      <div className='space-y-6'>
        <h1 className='text-green-900 font-bold text-2xl'>
          Objectives of the Public Distribution System
        </h1>
        <div className='flex flex-col lg:flex-row gap-4'>
          {data.map((item, index) => (
            <Card key={index} desc={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ desc }) => {
  return (
    <div className='border-2 rounded-lg p-2 font-serif h-fit lg:h-24 w-full lg:w-64 hover:scale-105 hover:bg-green-800 hover:text-white transition-all ease-in duration-150 cursor-pointer'>
      {desc}
    </div>
  );
};

export default Hero;
