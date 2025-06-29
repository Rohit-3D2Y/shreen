import { useState } from 'react';
import { ArrowLeft, ArrowRight, ShoppingCart } from 'lucide-react';

const products = [
  {
    title: 'Sofa',
    image: 'https://craftsmill.in/cdn/shop/files/sofas-accent-chairs-cider-orange-soft-velvet-touch-fabric-emily-flared-arm-2-seater-sofa-60-46567514931491.jpg?v=1725047510',
  },
  {
    title: 'Chairs',
    image: 'https://magnoliahome.co.in/wp-content/uploads/2021/08/Jasper-Arm-Chair-1.1-1.jpg',
  },
  {
    title: 'Dinning Table',
    image: 'https://m.media-amazon.com/images/I/91H82-mQZLL.jpg',
  },
  {
    title: 'Console Tables',
    image: 'https://images.woodenstreet.de/image/cache/data/console-table/erin-console-table/walnut-finish/new-logo/1-810x702.jpg',
  },
  {
    title: 'Wardrobes',
    image: 'https://images.woodenstreet.de/image/cache/data/wardrobes-mdf/zyra-4-door-wardrobe-without-mirror-gothic-grey-classic-oak-finish/new-logo/1-810x702.jpg',
  },
  {
    title: 'Tv Units',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/436466374/SY/VR/OX/199213945/43-inches-plywood-tv-unit.jpg',
  },
  {
    title: 'Lights',
    image: 'https://media.istockphoto.com/id/1300384615/photo/string-light-bulbs-at-sunset.jpg?s=612x612&w=0&k=20&c=N695nAFz9YSNxynM3auPznfA3E6wXc8D6P60bN1MaEk=',
  },
  {
    title: 'Decor Items',
    image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?cs=srgb&dl=pexels-sammsara-luxury-modern-home-372468-1099816.jpg&fm=jpg',
  },
  {
    title: 'Custom Designs',
    image: 'https://i.etsystatic.com/42182703/r/il/737786/5636910213/il_fullxfull.5636910213_8pjm.jpg',
  },
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  const next = () =>
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  const getVisibleProducts = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + products.length) % products.length;
      result.push({ ...products[index], originalIndex: index, position: i });
    }
    return result;
  };

  return (
    <div className=" px-4 md:px-12">

      <div className="relative flex items-center justify-center">
        <div className="flex items-center justify-center space-x-6 mt-10 overflow-hidden max-w-6xl">
  {getVisibleProducts().map((product, index) => (
    <div
      key={`${product.originalIndex}-${currentIndex}`}
      className={`transition-all duration-300 transform relative overflow-hidden rounded-xl shadow-md flex-shrink-0 ${
        product.position === 0
          ? 'scale-100 opacity-100 z-10'
          : 'scale-95 opacity-50 hidden md:block'
      } w-80 h-96 border-2 border-white`}
    >
      {/* Background Image */}
      <img
        src={product.image}
        alt={product.title}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Mask */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end px-4 pb-4">
        <h2 className="text-white text-xl font-semibold mb-2 text-center">{product.title}</h2>
        <button className="backdrop-blur-sm bg-white/20 text-white border border-white/40 font-medium px-5 py-2 rounded-full hover:scale-105 transition-all shadow-md flex items-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Buy Now
        </button>
      </div>
    </div>
  ))}
</div>


        {/* Navigation Buttons */}
        <div className="absolute -top-8 right-4 md:right-10 flex gap-3">
          <button
            onClick={prev}
            className="bg-orange-300 hover:bg-orange-200 rounded-full p-3 transition"
          >
            <ArrowLeft className="text-black" />
          </button>
          <button
            onClick={next}
            className="bg-orange-300 hover:bg-orange-200 rounded-full p-3 transition"
          >
            <ArrowRight className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
