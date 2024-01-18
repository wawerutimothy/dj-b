import React from 'react'
import logo from '../assets/aboutlogo.jpg';

function About() {
    
  return (
    <div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src= {logo} alt='about Logo' />
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-white border-b-2 border-indigo-600  uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-white">DJB Global COMPANY LTD</span>
            </h2>
            <p class="text-white">

                DJB Global Company Limited is a professional company licensed and registered in Uganda. 
                We have been in the commodities business for over 8 years serving many clients from all over the world. 
                We are dealers in precious minerals.For instance gold bars, gold nuggets, copper, tantalum, iron ore and other rare earth minerals. 
                We offer logistical and supply chain solutions to our clients. 
                As advisers, we study price movements in the global and regional markets for precious minerals.
                This is because we conduct significant research on statistical data. This valuable information helps our clients in taking prompt and strategic business decisions. 
                Our major strength lies in our knowledge of the global commodities market. We are affiliated to our Dubai, Ghana, South Sudan & Tanzania partners.
                
            </p>
        </div>
    </div>
  </div>
    
  )
}

export default About