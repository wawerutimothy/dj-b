import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 hover:scale-105 duration-300'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-black font-bold '>  </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Mission and Vision</h1>
          <p>
            To deliver quality, competent cost-effective service to our valued clients at all times.
            We invite you to join the Path to Prosperity, Profit, Perfection, and Peace (P2P).
            Work with us as long-term partners for a mutually beneficial association.
            We are also committed to quality, 
            making use of our knowledge of raw materials for the continued development of new products
          </p>
          <button className='bg-[#EFBD48] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
