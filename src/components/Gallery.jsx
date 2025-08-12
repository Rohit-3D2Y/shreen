import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Info, Sparkles } from "lucide-react";
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
  // Simpler state: currently viewed project and image index
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project, index = 0) => {
    setSelectedProject(project);
    setActiveImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setActiveImageIndex(0);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (dir) => {
    if (!selectedProject) return;
    const total = selectedProject.images.length;
    setActiveImageIndex((prev) =>
      dir === "prev" ? (prev - 1 + total) % total : (prev + 1) % total
    );
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handler = (e) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isModalOpen, selectedProject]);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="min-h-screen bg-[#f5f2ef]">
        {/* Header */}
        <header className="pt-20 pb-8">
          <div className="px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-[#a85f31] brico tracking-wide">
                Our Projects
              </h1>
              <p className="text-sm text-gray-600 mt-2">
                Interior Design Portfolio
              </p>
            </div>
          </div>
        </header>

        {/* Simple stack of project cards */}
        <main className="px-6 max-w-6xl mx-auto grid gap-8 pb-16">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Cover */}
              <button
                onClick={() => openProject(project, 0)}
                className="block w-full text-left"
              >
                <div className="relative aspect-[16/9]">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/80 text-xs uppercase tracking-wide">
                      {project.category}
                    </p>
                    <h2 className="text-white text-2xl font-bold brico leading-tight">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-2 text-white/80 text-xs mt-1">
                      <span>Completed {project.year}</span>
                      <span>•</span>
                      <span>{project.images.length} Photos</span>
                    </div>
                  </div>
                </div>
              </button>

              {/* Content */}
              <div className="p-5">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-[#a85f31] uppercase tracking-wide">
                    {String(project.id).padStart(2, "0")} / {projects.length}
                  </span>
                  <button
                    onClick={() => openProject(project, 0)}
                    className="px-4 py-2 rounded-lg bg-[#a85f31] text-white text-sm hover:bg-[#8b4a2a] transition-colors"
                  >
                    View Photos
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </main>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top bar */}
                <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
                  <div>
                    <p className="text-white/70 text-xs uppercase tracking-wide">
                      {selectedProject.category}
                    </p>
                    <h3 className="text-white text-lg md:text-2xl font-semibold brico">
                      {selectedProject.title}
                    </h3>
                    <p className="text-white/70 text-xs mt-0.5">
                      {selectedProject.year}
                    </p>
                  </div>
                  <button
                    aria-label="Close"
                    onClick={closeModal}
                    className="bg-white/90 hover:bg-white text-black p-2 rounded-full"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Image viewer */}
                <div className="relative flex-1 min-h-0">
                  <img
                    src={selectedProject.images[activeImageIndex]}
                    alt={`${selectedProject.title} - ${activeImageIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-contain md:object-cover"
                  />

                  {/* Prev/Next */}
                  <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-4">
                    <button
                      onClick={() => navigateImage("prev")}
                      className="bg-white/90 hover:bg-white text-black p-2 rounded-full shadow"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={() => navigateImage("next")}
                      className="bg-white/90 hover:bg-white text-black p-2 rounded-full shadow"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </div>

                  {/* Mobile Prev/Next */}
                  <div className="md:hidden absolute bottom-0 left-0 right-0 flex items-center justify-between px-4">
                    <button
                      onClick={() => navigateImage("prev")}
                      className="bg-white/90 hover:bg-white text-black p-2 rounded-full shadow"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <span className="text-white text-xs px-2 py-1 rounded-full bg-black/60">
                      {activeImageIndex + 1} / {selectedProject.images.length}
                    </span>
                    <button
                      onClick={() => navigateImage("next")}
                      className="bg-white/90 hover:bg-white text-black p-2 rounded-full shadow"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Thumbnails & Info */}
                <div className="bg-black/40 border-t border-white/10">
                  <div className="px-4 md:px-6 py-3 md:py-4">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                      {selectedProject.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(i)}
                          className={`relative w-20 h-20 md:w-24 md:h-20 flex-shrink-0 rounded overflow-hidden border ${
                            i === activeImageIndex
                              ? "border-[#a85f31] ring-2 ring-[#a85f31]/40"
                              : "border-white/20 hover:border-white/40"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${selectedProject.title} thumb ${i + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {/* Overview */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 rounded-md bg-[#a85f31]/20 text-[#eaddd1]">
                            <Info size={14} />
                          </div>
                          <h4 className="text-white/95 text-sm font-semibold tracking-wide">
                            Overview
                          </h4>
                        </div>
                        <p className="text-white/85 text-sm md:text-base leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      {/* Design Details */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 rounded-md bg-[#a85f31]/20 text-[#eaddd1]">
                            <Sparkles size={14} />
                          </div>
                          <h4 className="text-white/95 text-sm font-semibold tracking-wide">
                            Design Details
                          </h4>
                        </div>
                        <p className="text-white/80 text-sm md:text-base leading-relaxed">
                          {selectedProject.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
