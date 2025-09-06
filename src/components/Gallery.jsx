import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Footer from "./Footer";
import { projects as projectList } from "../utils/projects";

// consume projects from utils for single source of truth
const projects = projectList;

const Gallery = () => {
  const navigate = useNavigate();

  const openProject = (project) => {
    navigate(`/gallery/${project.slug}/1`);
  };

  const closeModal = () => {};

  const navigateImage = () => {};

  // Keyboard navigation for modal
  useEffect(() => {}, []);

  return (
    <>
      {/* no-scrollbar utility is defined globally in index.css */}

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

        {/* Routed project page now handles detail view at /gallery/:slug */}

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
