import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const projects = [
  {
    title: "lorem ipsum dolor sit amet consectetur adipiscing elit  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tag: "Buy Now",
    image: "https://images.unsplash.com/photo-1749741335932-f5295ee9afd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
  },
  {
    title: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tag: "Buy Now",
    image: "https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tag: "Buy Now",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tag: "Buy Now",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tag: "Buy Now",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGludGVyaW9yfGVufDB8fDB8fHww",
  },
  {
    title: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tag: "Buy Now",
    image: "https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVyaW9yfGVufDB8fDB8fHww",
  },
  {
    title: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tag: "Buy Now",
    image: "https://plus.unsplash.com/premium_photo-1686090449194-04ac2af9f758?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGludGVyaW9yfGVufDB8fDB8fHww",
  },
  {
    title: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tag: "Buy Now",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGludGVyaW9yfGVufDB8fDB8fHww",
  },
];

const images = [
  'https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/Modern-Sculptural-Chair-1300x1200.jpeg'
];

const AllProducts = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on load and on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md = 768px
    };
    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects =
    !isMobile || showAll ? projects : projects.slice(0, 6);

  return (
    <>
    <div className="bg-[#eae5df] brico -tracking-wider ">
      <div className="">
        {/* Hero Section */}
        <div className="relative w-full h-[70vh] overflow-hidden">
          <img
            src={images}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 space-y-6">
            <p className="text-base md:text-xl uppercase font-semibold">
              Futuristic Elegance
            </p>
            <h1 className="text-5xl md:text-[10rem] brico -tracking-wider">
              Our Products
            </h1>
            <button className="px-6 py-3 rounded-2xl text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition-all duration-200">
              Buy Now
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mt-20 max-w-7xl mx-auto">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#e7daca] rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transition duration-300"
              />
              <div className="p-5">
                <h3 className="text-md font-semibold text-gray-900">
                  {project.title}
                </h3>
                <span className="inline-block px-4 py-1 text-sm bg-[#a85f31] text-white rounded-full mt-4">
                  {project.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less only for mobile */}
        {isMobile && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white border border-[#a85f31] text-[#a85f31] font-semibold px-6 py-2 rounded-full shadow-md transition-all hover:bg-[#a85f31] hover:text-white"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
};

export default AllProducts;
