import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProjectBySlug, projects } from "../utils/projects";

const ProjectGallery = () => {
  const { slug, photo } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "unset"; // page route, no modal lock
    // If no photo segment, redirect to first photo for deep-link consistency
    if (!photo) {
      navigate(`/gallery/${slug}/1`, { replace: true });
      return;
    }

    // When a specific photo is in the URL, scroll to that stacked image
    const idx = Math.max(
      1,
      Math.min(Number(photo || 1), project.images.length)
    );
    const el = document.getElementById(`photo-${idx}`);
    if (el) {
      // slight timeout helps after route transitions
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
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

  // Find neighbors for next/prev projects
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = projects[(idx - 1 + projects.length) % projects.length];
  const nextProject = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen bg-[#f5f2ef]">
      <header className="pt-24 pb-6 px-6 max-w-6xl mx-auto sticky top-5 bg-[#f5f2ef] z-10">
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
        {/* Stacked photos */}
        <div className="space-y-4">
          {project.images.map((src, i) => (
            <section
              id={`photo-${i + 1}`}
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow border border-gray-100"
            >
              <img
                src={src}
                alt={`${project.title} - ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-500">
                <span>
                  {project.title} — Photo {i + 1} / {project.images.length}
                </span>
                
              </div>
            </section>
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
