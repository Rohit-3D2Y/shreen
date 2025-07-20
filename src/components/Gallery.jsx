import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Footer from "./Footer";

// Sample project data with interior design images
const projects = [
  {
    id: 1,
    title: "Modern Living Space",
    category: "Residential Design",
    mainImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&auto=format&fit=crop&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    details:
      "This contemporary living space showcases clean lines, neutral tones, and carefully curated furnishings that create a harmonious blend of comfort and sophistication. The open-plan design maximizes natural light while maintaining distinct zones for relaxation and entertainment.",
    year: "2024",
  },
  {
    id: 2,
    title: "Elegant Bedroom Suite",
    category: "Interior Design",
    mainImage:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&auto=format&fit=crop&q=80",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    details:
      "A serene bedroom design that prioritizes rest and relaxation through thoughtful material selection, ambient lighting, and a carefully curated color palette that promotes tranquility and comfort.",
    year: "2024",
  },
  {
    id: 3,
    title: "Contemporary Kitchen",
    category: "Kitchen Design",
    mainImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&auto=format&fit=crop&q=80",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt.",
    details:
      "A functional yet beautiful kitchen space that combines modern appliances with timeless design elements, creating an environment that's perfect for both everyday cooking and entertaining guests.",
    year: "2023",
  },
  {
    id: 4,
    title: "Cozy Reading Nook",
    category: "Interior Styling",
    mainImage:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&auto=format&fit=crop&q=80",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    details:
      "An intimate reading corner designed to provide the perfect escape from daily life, featuring comfortable seating, optimal lighting, and carefully selected accessories that create a personal sanctuary within the home.",
    year: "2023",
  },
  {
    id: 5,
    title: "Minimalist Bathroom",
    category: "Bathroom Design",
    mainImage:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=200&auto=format&fit=crop&q=80",
    description:
      "Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    details:
      "A spa-like bathroom retreat that emphasizes clean lines, natural materials, and a calming atmosphere, transforming daily routines into moments of relaxation and renewal.",
    year: "2024",
  },
  {
    id: 6,
    title: "Modern Office Space",
    category: "Commercial Design",
    mainImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&auto=format&fit=crop&q=80",
    description:
      "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    details:
      "A productive workspace design that balances functionality with aesthetic appeal, incorporating ergonomic solutions and inspiring elements that enhance creativity and focus.",
    year: "2023",
  },
  {
    id: 7,
    title: "Luxury Dining Room",
    category: "Dining Design",
    mainImage:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&auto=format&fit=crop&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    details:
      "An elegant dining space that combines classic sophistication with modern functionality, creating the perfect atmosphere for memorable gatherings and intimate meals.",
    year: "2024",
  },
  {
    id: 8,
    title: "Stylish Walk-in Closet",
    category: "Storage Design",
    mainImage:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=200&auto=format&fit=crop&q=80",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.",
    details:
      "A luxurious walk-in closet that maximizes storage while maintaining an elegant aesthetic, featuring custom built-ins and sophisticated lighting design.",
    year: "2023",
  },
  {
    id: 9,
    title: "Contemporary Terrace",
    category: "Outdoor Design",
    mainImage:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=200&auto=format&fit=crop&q=80",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollit anim.",
    details:
      "An outdoor living space that seamlessly blends indoor comfort with natural beauty, featuring weather-resistant materials and thoughtful landscaping design.",
    year: "2024",
  },
];

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(projects[0]); // Set first project as default
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'slider'

  const handleProjectHover = (project) => {
    if (!isModalOpen && viewMode === "grid") {
      setHoveredProject(project);
    }
  };

  const handleProjectClick = (project) => {
    if (viewMode === "slider") {
      // In slider mode, clicking opens modal directly
      setSelectedProject(project);
      setIsModalOpen(true);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    } else {
      // In grid mode, clicking opens modal
      setSelectedProject(project);
      setIsModalOpen(true);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };

  const toggleViewMode = (mode) => {
    setViewMode(mode);
    if (mode === "slider") {
      setHoveredProject(null); // Hide preview box in slider mode
    } else {
      setHoveredProject(projects[0]); // Show first project in grid mode
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    if (viewMode === "grid") {
      setHoveredProject(projects[0]); // Reset to first project in grid mode
    }
  };

  const handleProjectChange = (project) => {
    if (project.id === selectedProject?.id || isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setSelectedProject(project);
      setIsAnimating(false);
    }, 300);
  };

  const getCurrentIndex = () =>
    selectedProject
      ? projects.findIndex((p) => p.id === selectedProject.id)
      : 0;

  const navigateProject = (direction) => {
    const currentIndex = getCurrentIndex();
    let nextIndex;

    if (direction === "prev") {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    } else {
      nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    }

    handleProjectChange(projects[nextIndex]);
  };

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="min-h-screen bg-[#f5f2ef]">
        {/* Header */}
        <div className="pt-20 pb-8">
          <div className="px-6">
            <div className="flex items-center justify-center mb-8">
              <div className="text-center">
                <h1 className="text-7xl font-bold text-[#a85f31] brico tracking-wide">
                  Our Projects
                </h1>
                <p className="text-sm text-gray-600 mt-2">
                  Interior Design Portfolio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Gallery Layout */}
        <div className="px-6">
          <div
            className={`grid grid-cols-1 gap-8 max-w-7xl mx-auto ${
              viewMode === "grid" ? "lg:grid-cols-3" : "lg:grid-cols-1"
            } transition-all duration-500`}
          >
            {/* Left Side - Numbered Project Grid/Slider */}
            <div
              className={`${
                viewMode === "grid" ? "lg:col-span-2" : "lg:col-span-1"
              } transition-all duration-500`}
            >
              <AnimatePresence mode="wait">
                {viewMode === "grid" ? (
                  <motion.div
                    key="grid-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-3 gap-4 mb-8"
                  >
                    {projects.map((project, index) => (
                      <motion.button
                        key={project.id}
                        onClick={() => handleProjectClick(project)}
                        onMouseEnter={() => handleProjectHover(project)}
                        onMouseLeave={() => setHoveredProject(projects[0])}
                        className={`relative group transition-all duration-300 ${
                          hoveredProject?.id === project.id
                            ? "ring-2 ring-[#a85f31] scale-105"
                            : ""
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                          />

                          {/* Number overlay */}
                          <div className="absolute top-2 left-2">
                            <span className="bg-white text-black px-2 py-1 text-xs font-bold rounded">
                              {index + 1}
                            </span>
                          </div>

                          {/* Hover overlay with project info */}
                          <div
                            className={`absolute inset-0 transition-all duration-300 ${
                              hoveredProject?.id === project.id
                                ? "bg-black/60"
                                : "bg-black/0 group-hover:bg-black/30"
                            }`}
                          >
                            {hoveredProject?.id === project.id && (
                              <div className="absolute bottom-2 left-2 right-2">
                                <h4 className="text-white text-xs font-bold mb-1">
                                  {project.title}
                                </h4>
                                <p className="text-white/80 text-xs">
                                  {project.category}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="slider-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8"
                  >
                    <div className="overflow-hidden">
                      <div
                        className="flex gap-6 pb-4 overflow-x-auto no-scrollbar"
                        style={{
                          scrollbarWidth: "none",
                          msOverflowStyle: "none",
                        }}
                      >
                        {projects.map((project, index) => (
                          <motion.button
                            key={project.id}
                            onClick={() => handleProjectClick(project)}
                            className="relative group flex-shrink-0 w-80 transition-all duration-300"
                            whileHover={{ y: -5, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{
                              opacity: 0,
                              x: -50,
                              scale: 0.9,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              scale: 1,
                            }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1,
                              ease: "easeOut",
                            }}
                          >
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                              <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                  src={project.mainImage}
                                  alt={project.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Project number badge */}
                                <div className="absolute top-4 left-4">
                                  <span className="bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                    {index + 1}
                                  </span>
                                </div>

                                {/* Category badge */}
                                <div className="absolute top-4 right-4">
                                  <span className="bg-[#a85f31]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                                    {project.year}
                                  </span>
                                </div>

                                {/* Hover info */}
                                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                  <h4 className="text-white font-bold text-lg mb-1 brico">
                                    {project.title}
                                  </h4>
                                  <p className="text-white/80 text-sm uppercase tracking-wide">
                                    {project.category}
                                  </p>
                                </div>
                              </div>

                              {/* Card content */}
                              <div className="p-4">
                                <h3 className="font-bold text-lg text-gray-800 mb-2 brico">
                                  {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                  {project.description.substring(0, 100)}...
                                </p>
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-[#a85f31] font-medium uppercase tracking-wide">
                                    {project.category}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {project.year}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Grid/Slider Toggle */}
              <div className="flex justify-center mb-12">
                <div className="bg-gray-200 rounded-full p-1 flex shadow-lg">
                  <button
                    onClick={() => toggleViewMode("grid")}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-[#a85f31] text-white shadow-md"
                        : "text-gray-600 hover:bg-[#a85f31]/10 hover:text-[#a85f31]"
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => toggleViewMode("slider")}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      viewMode === "slider"
                        ? "bg-[#a85f31] text-white shadow-md"
                        : "text-gray-600 hover:bg-[#a85f31]/10 hover:text-[#a85f31]"
                    }`}
                  >
                    Slider
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Project Preview Box (Only in Grid Mode) */}
            {viewMode === "grid" && (
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100">
                    <div className="p-0">
                      <AnimatePresence mode="wait">
                        {hoveredProject && (
                          <motion.div
                            key={hoveredProject.id}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="relative"
                          >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                              <img
                                src={hoveredProject.mainImage}
                                alt={hoveredProject.title}
                                className="w-full h-full object-cover"
                              />

                              {/* Gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                              {/* Project number badge */}
                              <div className="absolute top-4 left-4">
                                <div className="bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                  {hoveredProject.id
                                    .toString()
                                    .padStart(2, "0")}
                                </div>
                              </div>

                              {/* Category badge */}
                              <div className="absolute top-4 right-4">
                                <div className="bg-[#a85f31]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                                  {hoveredProject.year}
                                </div>
                              </div>

                              {/* Bottom info overlay */}
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="text-white">
                                  <p className="text-xs uppercase tracking-wider font-medium opacity-80 mb-1">
                                    {hoveredProject.category}
                                  </p>
                                  <h4 className="font-bold text-lg leading-tight brico">
                                    {hoveredProject.title}
                                  </h4>
                                </div>
                              </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 bg-white">
                              <div className="space-y-4">
                                {/* Description */}
                                <div>
                                  <p className="text-gray-600 text-sm leading-relaxed">
                                    {hoveredProject.description.substring(
                                      0,
                                      120
                                    )}
                                    ...
                                  </p>
                                </div>

                                {/* Action Button */}
                                <button
                                  onClick={() =>
                                    handleProjectClick(hoveredProject)
                                  }
                                  className="w-full bg-[#a85f31] hover:bg-[#8b4a2a] text-white py-3 px-6 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                  View Full Project
                                </button>

                                {/* Project Meta */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                  <span className="text-xs text-gray-400 uppercase tracking-wide">
                                    Project Details
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span className="text-xs text-gray-500">
                                      Completed {hoveredProject.year}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal for Project Details */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%" }}
                animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                exit={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed top-1/2 left-1/2 w-[95vw] h-[90vh] md:w-[90vw] md:h-[80vh] max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-full flex flex-col md:flex-row">
                  {/* Main Image - Center */}
                  <div className="flex-1 relative h-1/2 md:h-full">
                    <img
                      src={selectedProject.mainImage}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Close button */}
                    <button
                      onClick={closeModal}
                      className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/90 hover:bg-white text-black p-2 rounded-full transition-all z-10"
                    >
                      <X size={16} />
                    </button>

                    {/* Navigation buttons - Hidden on mobile, visible on desktop */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateProject("prev");
                      }}
                      className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black px-3 py-2 rounded-full transition-all"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateProject("next");
                      }}
                      className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black px-3 py-2 rounded-full transition-all"
                    >
                      <ChevronRight size={20} />
                    </button>

                    {/* Project info overlay - Adjusted for mobile */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 md:p-6">
                      <span className="text-xs text-white/80 font-medium uppercase tracking-wider block mb-1 md:mb-2">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 brico">
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-white/80">
                        <span>
                          Project #
                          {selectedProject.id.toString().padStart(2, "0")}
                        </span>
                        <span>•</span>
                        <span>Completed {selectedProject.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Project Details & Navigation */}
                  <div className="w-full md:w-80 bg-white flex flex-col h-1/2 md:h-full">
                    {/* Mobile Navigation Buttons */}
                    <div className="flex md:hidden justify-between items-center p-4 border-b border-gray-100">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateProject("prev");
                        }}
                        className="bg-gray-100 hover:bg-gray-200 text-black p-2 rounded-full transition-all"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <span className="text-sm text-gray-600 font-medium">
                        {projects.findIndex(
                          (p) => p.id === selectedProject.id
                        ) + 1}{" "}
                        of {projects.length}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateProject("next");
                        }}
                        className="bg-gray-100 hover:bg-gray-200 text-black p-2 rounded-full transition-all"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    {/* Project Details */}
                    <div className="flex-1 p-4 md:p-6 overflow-y-auto">
                      <div className="space-y-4 md:space-y-6">
                        <div>
                          <h3 className="text-sm font-semibold text-[#a85f31] mb-2 md:mb-3 uppercase tracking-wide">
                            Description
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {selectedProject.description}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-[#a85f31] mb-2 md:mb-3 uppercase tracking-wide">
                            Design Details
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {selectedProject.details}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Thumbnails - Hidden on mobile for better space usage */}
                    <div className="hidden md:block border-t border-gray-100 p-4">
                      <h4 className="text-xs font-semibold text-[#a85f31] mb-3 uppercase tracking-wide">
                        Other Projects
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {projects
                          .filter((p) => p.id !== selectedProject.id)
                          .slice(0, 6)
                          .map((project) => (
                            <button
                              key={`modal-nav-${project.id}`}
                              onClick={() => handleProjectChange(project)}
                              className="aspect-square overflow-hidden rounded hover:ring-2 hover:ring-[#a85f31] transition-all"
                            >
                              <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                              />
                            </button>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Attribution */}
        {/* <div className="mt-20 mb-12 text-center">
          <p className="text-xs text-gray-400">© 2025 Shreen Interiors</p>
        </div> */}
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
