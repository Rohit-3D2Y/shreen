import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Services from "./components/Services";
import ProductShowcase from "./components/ProductShowcase";
import DesignProcess from "./components/DesignProcess";
import HeroStats from "./components/HeroStats";
import Footer from "./components/Footer";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppContactForm from "./components/WhatsappContactForm";
import Gallery from "./components/Gallery";
import { ReactLenis } from "@studio-freight/react-lenis";
import Service2 from "./components/ServiceBackup";

const Home = () => (
  <>
    <Landing />
    <Services />
    {/* <Service2/> */}
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
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <ReactLenis root>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<AllProducts />} />
          <Route path="/features" element={<Features />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<WhatsAppContactForm />} />
        </Routes>
      </ReactLenis>
    </Router>
  );
};

export default App;
