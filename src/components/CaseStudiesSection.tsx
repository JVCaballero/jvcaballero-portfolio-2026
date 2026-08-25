import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Compass, ArrowUpRight, Filter, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CaseStudiesSectionProps {
  onSelectProject: (project: Project) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const { isDark } = useTheme();

  const filters = ['ALL', 'NEXT.JS', 'PYTHON/DJANGO', 'N8N SYNC', 'PLAYWRIGHT QA', 'VUE 3'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'ALL') return true;
    return project.tags.some((t) => t.toUpperCase().includes(activeFilter.toUpperCase()));
  });

  return (
    <section
      id="case-studies-section"
      className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-transparent relative z-10"
    >
      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          {/* Left: Giant Display Title with Curved Accent */}
          <div className="lg:col-span-7">
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
              <span>INDEX // 01</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-on-surface font-normal leading-[1.02]">
              Case <br />
              <span className="relative inline-block">
                Studies
                {/* Curved Ribbon Graphic Under 'Studies' */}
                <svg
                  className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-4 text-secondary-container"
                  viewBox="0 0 240 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 14 C60 22 180 22 237 8"
                    stroke={isDark ? '#0284c7' : '#bae6fd'}
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 14 C60 22 180 22 237 8"
                    stroke="var(--color-primary)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              <span className="font-mono text-3xl sm:text-4xl md:text-5xl text-outline-variant font-light block sm:inline ml-0 sm:ml-4">
                2021—PRESENT
              </span>
            </h2>
          </div>

          {/* Right: Subtitle Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-end space-y-4">
            <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
              In-depth architecture, technical decisions, and measurable outcomes across production-ready web systems and automated pipelines.
            </p>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  whileTap={{ scale: 0.92 }}
                  whileHover={{ y: -1 }}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-primary text-on-primary font-bold shadow-xs'
                      : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:border-primary hover:text-primary'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isOffset = project.offset;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  key={project.id}
                  className={`${
                    isOffset
                      ? 'lg:col-span-6 lg:translate-y-12'
                      : 'lg:col-span-6'
                  } group cursor-pointer`}
                  onClick={() => onSelectProject(project)}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                >
                  {/* 3D Tilted Card Container with Drop Shadow */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="bg-surface-container-lowest border border-primary p-5 md:p-7 rounded-xs shadow-[8px_8px_0px_0px_var(--shadow-cyan-drop)] md:shadow-[14px_14px_0px_0px_var(--shadow-cyan-drop)] group-hover:shadow-[20px_20px_0px_0px_var(--shadow-cyan-drop)] transition-shadow duration-300 relative overflow-hidden"
                  >
                    {/* Technical Card Header */}
                    <div className="flex items-center justify-between border-b border-outline-variant pb-3 mb-4 font-mono text-xs">
                      <span className="text-primary font-bold tracking-wider">
                        [{project.categoryTag}]
                      </span>
                      <span className="text-on-surface-variant font-medium">{project.year}</span>
                    </div>

                    {/* Project Image Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high border border-outline-variant mb-5 rounded-xs">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter contrast-[1.02]"
                      />

                      {/* Sheen sweep animation on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                      {/* Corner Crosshairs */}
                      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary pointer-events-none transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary pointer-events-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary pointer-events-none transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary pointer-events-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />

                      {/* Hover Overlay Prompt */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                        <span className="px-4 py-2 bg-surface-container-lowest text-primary font-mono text-xs uppercase tracking-widest border border-primary shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 font-bold">
                          <span>EXPLORE CASE STUDY</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-2xl md:text-3xl font-medium text-on-surface group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>

                      <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 bg-surface-container text-on-surface-variant font-mono text-[11px] uppercase tracking-wider border border-outline-variant group-hover:border-primary/40 group-hover:text-primary transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Blueprint Principle Card */}
          <div className="lg:col-span-6 lg:translate-y-12">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-surface-container-lowest border border-primary p-7 md:p-9 rounded-xs shadow-[10px_10px_0px_0px_var(--shadow-cyan-drop)] relative overflow-hidden h-full flex flex-col justify-between group transition-shadow duration-300 hover:shadow-[16px_16px_0px_0px_var(--shadow-cyan-drop)]"
            >
              {/* Hatched Accent Backdrop */}
              <div className="absolute inset-0 bg-hatched opacity-60 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-primary/40 pb-3 mb-6 font-mono text-xs text-primary">
                  <span className="font-bold flex items-center gap-2">
                    <Compass className="w-4 h-4 text-primary animate-pulse" />
                    <span>FIG. 01 // PRINCIPLE</span>
                  </span>
                  <span className="font-semibold">THE ART OF CRAFT & DELIVERY</span>
                </div>

                {/* Big Quote */}
                <blockquote className="font-display text-2xl md:text-3xl text-primary font-normal leading-snug tracking-tight my-4">
                  “SOLO OWNERSHIP TURNS AMBIGUITY INTO PRODUCTION-READY SYSTEMS.”
                </blockquote>
              </div>

              {/* Footer */}
              <div className="relative z-10 pt-6 border-t border-primary/20 flex items-center justify-between font-mono text-xs text-on-surface-variant">
                <span>John Vincent Caballero — Product Engineer</span>
                <span className="text-primary font-bold">CEBU, PHILIPPINES</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

