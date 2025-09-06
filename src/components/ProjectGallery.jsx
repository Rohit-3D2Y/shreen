import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { getProjectBySlug, projects } from "../utils/projects";

const ProjectGallery = () => {
  const { slug, photo } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "unset"; // page route, no modal lock
    // If no photo segment, redirect to first photo
    if (!photo) navigate(`/gallery/${slug}/1`, { replace: true });
  }, [slug, photo]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f2ef] px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#a85f31] mb-2">
            Project not found
          </h1>
          <Link to="/gallery" className="text-sm text-[#a85f31] underline">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const indexFromParam = Math.max(
    1,
    Math.min(Number(photo || 1), project.images.length)
  );
  const activeIndex = indexFromParam - 1;
  const img = project.images[activeIndex];
  const prevIndex =
    activeIndex === 0 ? project.images.length - 1 : activeIndex - 1;
  const nextIndex =
    activeIndex === project.images.length - 1 ? 0 : activeIndex + 1;

  // Find neighbors for next/prev projects
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = projects[(idx - 1 + projects.length) % projects.length];
  const nextProject = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen bg-[#f5f2ef]">
      <header className="pt-20 pb-6 px-6 max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-3 flex-wrap">
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-wide">
              {project.category}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-[#a85f31] brico">
              {project.title}
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Completed {project.year}
            </p>
          </div>
          <Link
            to="/gallery"
            className="text-sm text-white bg-[#a85f31] hover:bg-[#8b4a2a] px-4 py-2 rounded-lg"
          >
            Back to Gallery
          </Link>
        </div>
      </header>

      <main className="px-6 max-w-6xl mx-auto pb-16">
        {/* Main viewer */}
        <div className="relative aspect-[16/9] bg-black/5 rounded-xl overflow-hidden">
          <img
            src={img}
            alt={`${project.title} - ${activeIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover md:object-cover"
          />

          <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-4">
            <Link
              to={`/gallery/${project.slug}/${prevIndex + 1}`}
              className="bg-white/90 hover:bg-white text-black p-2 rounded-full shadow"
            >
              <ChevronLeft size={22} />
            </Link>
            <Link
              to={`/gallery/${project.slug}/${nextIndex + 1}`}
              className="bg-white/90 hover:bg-white text-black p-2 rounded-full shadow"
            >
              <ChevronRight size={22} />
            </Link>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-4 flex gap-2 overflow-x-auto overflow-y-hidden no-scrollbar pb-1 -mb-1">
          {project.images.map((src, i) => (
            <Link
              key={i}
              to={`/gallery/${project.slug}/${i + 1}`}
              className={`relative w-24 h-20 flex-shrink-0 rounded overflow-hidden border ${
                i === activeIndex
                  ? "border-[#a85f31] ring-2 ring-[#a85f31]/40"
                  : "border-gray-200 hover:border-[#a85f31]/40"
              }`}
            >
              <img
                src={src}
                alt={`${project.title} ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>

        {/* Description cards */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
            <h3 className="text-sm font-semibold text-[#a85f31] mb-2 uppercase tracking-wide">
              Overview
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
            <h3 className="text-sm font-semibold text-[#a85f31] mb-2 uppercase tracking-wide">
              Design Details
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {project.details}
            </p>
          </div>
        </div>

        {/* Project-to-project navigation */}
        <div className="mt-10 flex items-center justify-between">
          <Link
            to={`/gallery/${prevProject.slug}/1`}
            className="text-sm text-[#a85f31] hover:underline"
          >
            ← {prevProject.title}
          </Link>
          <span className="text-xs text-gray-500">
            {String(project.id).padStart(2, "0")} / {projects.length}
          </span>
          <Link
            to={`/gallery/${nextProject.slug}/1`}
            className="text-sm text-[#a85f31] hover:underline"
          >
            {nextProject.title} →
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProjectGallery;
