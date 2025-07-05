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
import ProductDetail from './components/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppContactForm from './components/WhatsappContactForm';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';


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

const Features = () => (
  <>
  <DesignProcess />
  <HeroStats />
  <Footer />
  </>
)

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Always visible */}
       <ScrollToTop />
       <ReactLenis root>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<AllProducts />} />
        <Route path='/features' element={<Features />}  />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<WhatsAppContactForm />} />

      </Routes>
      </ReactLenis>
    </Router>
  );
};

export default App;
