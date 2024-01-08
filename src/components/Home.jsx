import React from 'react';

import Navbar from './Navbar';
import Analytics from './Analytics';
import Cards from './Cards';
import Footer from './Footer';
import Hero from './Hero';
import Newsletter from './Newsletter';
import About from './About';
import { Outlet } from 'react-router-dom';
function Home() {
  return (
    <div>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />

        
        
        
      
        
    </div>
  )
}
export default Home;