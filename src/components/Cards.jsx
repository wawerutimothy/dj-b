import React from 'react';
import Single from '../assets/single.png'
import Team from '../assets/team.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import Customers from '../assets/customers.png'
import Competent_team from '../assets/Compe-team.png'
import Convenient from '../assets/convenient.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Competent_team} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Competent Team</h2>
              <p className='text-center text-4xl font-bold'></p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'></p>
                  <p className='py-2 border-b mx-8'></p>
                  <p className='py-2 border-b mx-8'></p>
              </div>
              <button className='bg-[#EFBD48] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'></button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Customers} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Customer Centric</h2>
              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'></p>
                  <p className='py-2 border-b mx-8'></p>
                  <p className='py-2 border-b mx-8'></p>
              </div>
              <button className='bg-[#EFBD48] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Convenient} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Affordable and Convinient</h2>
              {/*<p className='text-center text-4xl font-bold'></p> */}
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Affordable fees</p>
                  <p className='py-2 border-b mx-8'> Convenient delivery</p>
                  <p className='py-2 border-b mx-8'></p>
              </div>
              <button className='bg-[#EFBD48] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'></button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
