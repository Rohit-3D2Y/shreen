import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Mock product database
const productData = {
  sofa: {
    title: "Sofa",
    heroImage: "https://images.unsplash.com/photo-1749741335932-f5295ee9afd0?w=1600",
    description: "Comfortable modern sofas for every living space.",
    variants: [
      {
        name: "Modern Gray Sofa",
        image: "https://images.unsplash.com/photo-1600585153944-2506f3c3f43d?w=600",
        description: "3-seater, sleek design, stain-resistant fabric.",
      },
      {
        name: "Velvet Blue Sofa",
        image: "https://images.unsplash.com/photo-1600607687486-2d5c5cd3b03b?w=600",
        description: "Premium blue velvet, mid-century style legs.",
      },
      {
        name: "Beige Sectional",
        image: "https://images.unsplash.com/photo-1622015661624-b238cd558b1b?w=600",
        description: "L-shaped, perfect for large spaces.",
      },
      {
        name: "Compact Sofa Bed",
        image: "https://images.unsplash.com/photo-1622611154673-12b448ddb1e3?w=600",
        description: "Dual-purpose sofa that unfolds into a bed.",
      },
      {
        name: "Tufted Leather Sofa",
        image: "https://images.unsplash.com/photo-1628758884749-6901ac6a4299?w=600",
        description: "Classic brown leather with deep tufting.",
      },
    ],
    whatsappNumber: "919999999999",
  },

  // Add other categories (e.g., chairs, lights) in similar format
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData[id];

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-600 font-bold">
        Product not found.
        <button onClick={() => navigate(-1)} className="ml-4 underline text-blue-600">Go Back</button>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f4ef] min-h-screen font-brico">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={product.heroImage}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-5xl md:text-7xl font-bold">{product.title}</h1>
        </div>
      </div>

      {/* Product Variants Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-[#3a2e25]">{product.description}</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {product.variants.map((variant, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={variant.image}
                alt={variant.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-bold text-[#402d22]">{variant.name}</h3>
                <p className="text-gray-600 text-sm">{variant.description}</p>
                <a
                  href={`https://wa.me/${product.whatsappNumber}?text=I'm interested in the ${variant.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition"
                >
                  Buy on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
