import React from 'react';
import Analytics from './Analytics';
import Cards from './Cards';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function Home() {
  return (
    <div>

        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </Routes>
        </Router>
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
        <Footer />
    </div>
  )
}
export default Home;