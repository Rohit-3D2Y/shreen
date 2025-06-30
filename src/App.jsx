import React from 'react'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import DesignProcess from './components/DesignProcess'
import HeroStats from './components/HeroStats'
import Services from './components/Services'
import ProductShowcase from './components/ProductShowcase'
import Footer from './components/Footer'
import AllProducts from './components/AllProducts'

const App = () => {
  return (
      <>
      <div>
        <Navbar />
        <Landing />
        <Services />
        <ProductShowcase />
        <DesignProcess />
        <HeroStats />
        <Footer />
        <AllProducts />
      </div>
      </>
  )
}

export default App