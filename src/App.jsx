import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Services from './components/Services';
import ProductShowcase from './components/ProductShowcase';
import DesignProcess from './components/DesignProcess';
import HeroStats from './components/HeroStats';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';

const Home = () => (
  <>
    <Landing />
    <Services />
    <ProductShowcase />
    <DesignProcess />
    <HeroStats />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<AllProducts />} />
      </Routes>
    </Router>
  );
};

export default App;
