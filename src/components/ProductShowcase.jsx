import React from 'react'
import ProductSlider from './ProductSlider'

const ProductShowcase = () => {
  return (
    <div className=' px-4 md:px-12 lg:px-24 text-black relative'>
    <div className='max-w-7xl mx-auto sm:pb-0'>
       <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <h2 className="text-4xl md:text-6xl brico -tracking-wider leading-tight mb-6 lg:mb-0">
            Our Interior <br /> Products
          </h2>
          <div className="max-w-md">
            <p className="uppercase text-sm -tracking-wider brico text-gray-500 mb-2">
              Our Products
            </p>
            <p className="text-lg text-gray-700">
              Whether you're dreaming of a cozy home retreat or a bold, modern workspace, our expert designers bring your vision to life.
            </p>
          </div>
        </div>
    </div>
    <ProductSlider />
    </div>
  )
}

export default ProductShowcase