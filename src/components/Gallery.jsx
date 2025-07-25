import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Footer from "./Footer";

// Sample project data with interior design images
const projects = [
  {
    id: 1,
    title: "Anil Shah Residence",
    category: "Residential Design",
    mainImage: "/projects/ANIL SHAH/1 (1).jpg",
    thumbnail: "/projects/ANIL SHAH/1 (1).jpg",
    images: [
      "/projects/ANIL SHAH/1 (1).jpg",
      "/projects/ANIL SHAH/1 (2).jpg",
      "/projects/ANIL SHAH/1 (4).jpg",
      "/projects/ANIL SHAH/1 (5).jpg",
      "/projects/ANIL SHAH/1 (6).jpg",
      "/projects/ANIL SHAH/2 (1).jpg",
      "/projects/ANIL SHAH/2 (2).jpg",
      "/projects/ANIL SHAH/2 (3).jpg",
      "/projects/ANIL SHAH/2 (4).jpg",
      "/projects/ANIL SHAH/2 (6).jpg",
      "/projects/ANIL SHAH/2 (7).jpg",
      "/projects/ANIL SHAH/2 (8).jpg",
      "/projects/ANIL SHAH/4 (1).jpg",
      "/projects/ANIL SHAH/4 (2).jpg",
      "/projects/ANIL SHAH/4 (3).jpg",
      "/projects/ANIL SHAH/5 (1).jpg",
      "/projects/ANIL SHAH/5 (2).jpg",
      "/projects/ANIL SHAH/6 (3).jpg",
      "/projects/ANIL SHAH/6 (4).jpg",
      "/projects/ANIL SHAH/6 (5).jpg",
      "/projects/ANIL SHAH/6 (6).jpg",
      "/projects/ANIL SHAH/6 (7).jpg",
      "/projects/ANIL SHAH/6 (8).jpg",
      "/projects/ANIL SHAH/6 (9).jpg",
    ],
    description:
      "A contemporary residential project featuring modern design elements with elegant finishes. The space combines functionality with aesthetic appeal, creating a perfect living environment for the family.",
    details:
      "This residential project showcases clean lines, neutral tones, and carefully curated furnishings that create a harmonious blend of comfort and sophistication. The open-plan design maximizes natural light while maintaining distinct zones for relaxation and entertainment.",
    year: "2024",
  },
  {
    id: 2,
    title: "Arjun Pabari Project",
    category: "Interior Design",
    mainImage: "/projects/ARJUN PABARI/VIEW -01.jpg",
    thumbnail: "/projects/ARJUN PABARI/VIEW -01.jpg",
    images: [
      "/projects/ARJUN PABARI/VIEW -01.jpg",
      "/projects/ARJUN PABARI/VIEW -02.jpg",
      "/projects/ARJUN PABARI/VIEW -03.jpg",
    ],
    description:
      "An elegant interior design project that emphasizes modern aesthetics with a focus on creating functional and beautiful living spaces.",
    details:
      "A serene design that prioritizes comfort and elegance through thoughtful material selection, ambient lighting, and a carefully curated color palette that promotes tranquility and sophistication.",
    year: "2024",
  },
  {
    id: 3,
    title: "Kent Valley International School",
    category: "Commercial Design",
    mainImage: "/projects/KENT VALLY INTERNATIONAL SCHOOL/BIRD EYE VIEW.jpg",
    thumbnail: "/projects/KENT VALLY INTERNATIONAL SCHOOL/BIRD EYE VIEW.jpg",
    images: [
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/BIRD EYE VIEW.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/03.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/04.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/1 (1).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/1 (2).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/1 (3).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/1 (4).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/1 (5).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/1 (6).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/1 (7).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/1 (8).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/2 (1).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/2 (4).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/2 (5).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/2 (6).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/2 (9).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/22 (2).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/3 (1).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/3 (2).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/3 (3).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/3 (4).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/3 (5).jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/4.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/AUDIO VIDEO ROOM 1.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/AUDIO VIDEO ROOM 2.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/cabin 1-2.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/cabin 2-1.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/CABIN1 1.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/CABIN1 2.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/CABIN2 1.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/CABIN2 2.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/CONFERENCE ROOM 1.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/CONFERENCE ROOM 2.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/work station -1.jpg",
      "/projects/KENT VALLY INTERNATIONAL SCHOOL/work station -2.jpg",
    ],
    description:
      "A comprehensive educational facility design that creates an inspiring learning environment with modern amenities and thoughtful space planning.",
    details:
      "A functional yet beautiful educational space that combines modern facilities with timeless design elements, creating an environment that's perfect for both learning and administrative activities.",
    year: "2023",
  },
  {
    id: 4,
    title: "Kishor Gawas Residence",
    category: "Residential Design",
    mainImage: "/projects/KISHOR GAWAS/1.jpg",
    thumbnail: "/projects/KISHOR GAWAS/1.jpg",
    images: [
      "/projects/KISHOR GAWAS/1.jpg",
      "/projects/KISHOR GAWAS/2.jpg",
      "/projects/KISHOR GAWAS/3.jpg",
      "/projects/KISHOR GAWAS/4.jpg",
      "/projects/KISHOR GAWAS/5.jpg",
    ],
    description:
      "A cozy residential project designed to provide the perfect escape from daily life, featuring comfortable living spaces and carefully selected design elements.",
    details:
      "An intimate home designed to provide the perfect sanctuary for the family, featuring comfortable spaces, optimal lighting, and carefully selected accessories that create a personal haven.",
    year: "2023",
  },
  {
    id: 5,
    title: "Mallika Shah Residence",
    category: "Interior Design",
    mainImage: "/projects/MALLIKA SHAH/1 (3).jpg",
    thumbnail: "/projects/MALLIKA SHAH/1 (3).jpg",
    images: [
      "/projects/MALLIKA SHAH/1 (3).jpg",
      "/projects/MALLIKA SHAH/1 (4).jpg",
      "/projects/MALLIKA SHAH/1 (5).jpg",
      "/projects/MALLIKA SHAH/2 (3).jpg",
      "/projects/MALLIKA SHAH/2 (4).jpg",
      "/projects/MALLIKA SHAH/2 (5).jpg",
      "/projects/MALLIKA SHAH/3 (1).jpg",
      "/projects/MALLIKA SHAH/3 (2).jpg",
      "/projects/MALLIKA SHAH/4 (2).jpg",
    ],
    description:
      "A minimalist home design that emphasizes clean lines, natural materials, and a calming atmosphere, transforming daily routines into moments of relaxation.",
    details:
      "A serene home retreat that emphasizes clean lines, natural materials, and a calming atmosphere, transforming daily routines into moments of relaxation and renewal.",
    year: "2024",
  },
  {
    id: 6,
    title: "Mayur Shah Residence",
    category: "Residential Design",
    mainImage: "/projects/MAYUR SHAH/1 (1).jpg",
    thumbnail: "/projects/MAYUR SHAH/1 (1).jpg",
    images: [
      "/projects/MAYUR SHAH/1 (1).jpg",
      "/projects/MAYUR SHAH/1 (2).jpg",
      "/projects/MAYUR SHAH/1 (3).jpg",
      "/projects/MAYUR SHAH/1 (4).jpg",
      "/projects/MAYUR SHAH/1 (5).jpg",
      "/projects/MAYUR SHAH/1 (6).jpg",
      "/projects/MAYUR SHAH/2 (1).jpg",
      "/projects/MAYUR SHAH/2 (3).jpg",
      "/projects/MAYUR SHAH/2 (4).jpg",
      "/projects/MAYUR SHAH/3 (2).jpg",
      "/projects/MAYUR SHAH/4 (1).jpg",
      "/projects/MAYUR SHAH/4 (2).jpg",
      "/projects/MAYUR SHAH/5 (1).jpg",
      "/projects/MAYUR SHAH/5 (2).jpg",
      "/projects/MAYUR SHAH/6 (1).jpg",
      "/projects/MAYUR SHAH/6 (2).jpg",
      "/projects/MAYUR SHAH/7 (1).jpg",
      "/projects/MAYUR SHAH/7 (2).jpg",
      "/projects/MAYUR SHAH/8 (1).jpeg",
      "/projects/MAYUR SHAH/8 (2).jpeg",
      "/projects/MAYUR SHAH/8 (3).jpeg",
    ],
    description:
      "A modern office and residential space design that balances functionality with aesthetic appeal, incorporating ergonomic solutions and inspiring elements.",
    details:
      "A productive space design that balances functionality with aesthetic appeal, incorporating ergonomic solutions and inspiring elements that enhance creativity and focus.",
    year: "2023",
  },
  {
    id: 7,
    title: "Piyush Shah Project",
    category: "Luxury Design",
    mainImage: "/projects/PIYUSH SHAH/IMG_6173-HDR-Pano.jpg",
    thumbnail: "/projects/PIYUSH SHAH/IMG_6173-HDR-Pano.jpg",
    images: [
      "/projects/PIYUSH SHAH/IMG_6173-HDR-Pano.jpg",
      "/projects/PIYUSH SHAH/001.jpg",
      "/projects/PIYUSH SHAH/005.jpg",
      "/projects/PIYUSH SHAH/05.jpg",
      "/projects/PIYUSH SHAH/20220611_193408.jpg",
      "/projects/PIYUSH SHAH/7.jpg",
      "/projects/PIYUSH SHAH/IMG_6306-HDR-2.jpg",
      "/projects/PIYUSH SHAH/IMG_6358-HDR-Pano-3.jpg",
      "/projects/PIYUSH SHAH/IMG_6377-HDR.jpg",
    ],
    description:
      "A luxury design project that combines classic sophistication with modern functionality, creating the perfect atmosphere for memorable experiences.",
    details:
      "An elegant space that combines classic sophistication with modern functionality, creating the perfect atmosphere for memorable gatherings and intimate moments.",
    year: "2024",
  },
  {
    id: 8,
    title: "Ramdutt Apartment",
    category: "Apartment Design",
    mainImage: "/projects/RAMDUTT APARTMENT/1 (1).jpg",
    thumbnail: "/projects/RAMDUTT APARTMENT/1 (1).jpg",
    images: [
      "/projects/RAMDUTT APARTMENT/1 (1).jpg",
      "/projects/RAMDUTT APARTMENT/1 (3).jpg",
      "/projects/RAMDUTT APARTMENT/1 (4).jpg",
      "/projects/RAMDUTT APARTMENT/1 (5).jpg",
      "/projects/RAMDUTT APARTMENT/1 (6).jpg",
      "/projects/RAMDUTT APARTMENT/2 (1).jpg",
    ],
    description:
      "A stylish apartment design that maximizes storage while maintaining an elegant aesthetic, featuring custom built-ins and sophisticated lighting design.",
    details:
      "A luxurious apartment that maximizes storage while maintaining an elegant aesthetic, featuring custom built-ins and sophisticated lighting design.",
    year: "2023",
  },
  {
    id: 9,
    title: "Shripal Ishan Project",
    category: "Contemporary Design",
    mainImage: "/projects/SHRIPAL ISHAN/1 (1).jpg",
    thumbnail: "/projects/SHRIPAL ISHAN/1 (1).jpg",
    images: [
      "/projects/SHRIPAL ISHAN/1 (1).jpg",
      "/projects/SHRIPAL ISHAN/1 (12).jpg",
      "/projects/SHRIPAL ISHAN/1 (14).jpg",
      "/projects/SHRIPAL ISHAN/1 (4).jpg",
      "/projects/SHRIPAL ISHAN/1 (5).jpg",
      "/projects/SHRIPAL ISHAN/1 (7).jpg",
      "/projects/SHRIPAL ISHAN/1 (9).jpg",
      "/projects/SHRIPAL ISHAN/2 (1).jpg",
      "/projects/SHRIPAL ISHAN/2 (2).jpg",
      "/projects/SHRIPAL ISHAN/2 (4).jpg",
      "/projects/SHRIPAL ISHAN/2 (5).jpg",
      "/projects/SHRIPAL ISHAN/2 (6).jpg",
      "/projects/SHRIPAL ISHAN/2 (7).jpg",
      "/projects/SHRIPAL ISHAN/3 (4).jpg",
      "/projects/SHRIPAL ISHAN/4 (2).jpg",
      "/projects/SHRIPAL ISHAN/5 (2).jpg",
    ],
    description:
      "A contemporary design that seamlessly blends indoor comfort with natural beauty, featuring weather-resistant materials and thoughtful design elements.",
    details:
      "A contemporary space that seamlessly blends indoor comfort with natural beauty, featuring modern materials and thoughtful design elements.",
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
      // Prevent body scroll when modal opens
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    } else {
      // In grid mode, clicking opens modal
      setSelectedProject(project);
      setIsModalOpen(true);
      setIsAnimating(true);
      // Prevent body scroll when modal opens
      document.body.style.overflow = "hidden";
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
    // Restore body scroll when modal closes
    document.body.style.overflow = "unset";
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

                    {/* Project Gallery - Hidden on mobile for better space usage */}
                    <div className="hidden md:block border-t border-gray-100 p-4">
                      <h4 className="text-xs font-semibold text-[#a85f31] mb-3 uppercase tracking-wide">
                        Project Gallery
                      </h4>
                      <div
                        className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto no-scrollbar"
                        onWheel={(e) => {
                          e.stopPropagation();
                        }}
                        onTouchMove={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        {selectedProject.images.map((image, index) => (
                          <button
                            key={`gallery-${index}`}
                            onClick={() => {
                              const updatedProject = {
                                ...selectedProject,
                                mainImage: image,
                              };
                              setSelectedProject(updatedProject);
                            }}
                            className={`aspect-square overflow-hidden rounded transition-all ${
                              selectedProject.mainImage === image
                                ? "ring-2 ring-[#a85f31] scale-105"
                                : "hover:ring-2 hover:ring-[#a85f31]/50"
                            }`}
                          >
                            <img
                              src={image}
                              alt={`${selectedProject.title} - Image ${
                                index + 1
                              }`}
                              className="w-full h-full object-cover transition-all duration-300"
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
