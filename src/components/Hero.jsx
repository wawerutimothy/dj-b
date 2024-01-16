import React from 'react';



const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      
        {/*<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> OUR COOL COMPANY. </h1> */}
        
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
           What we Offer
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-white'> We provide Logistical supply chain solutions for Special Minerals to Our Clients </p>
        <button className='bg-[#EFBD48] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get More Info</button>
        
      </div>

    </div>
  );
};

export default Hero;
