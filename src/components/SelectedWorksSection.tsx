import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Compass, ArrowUpRight, Sparkles, Filter, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SelectedWorksSectionProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWorksSection: React.FC<SelectedWorksSectionProps> = ({
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
      id="selected-works-section"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-surface border-t border-outline-variant relative overflow-hidden"
    >
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Section Header (Matches Screen 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          {/* Left: Giant Display Title with Curved Cyan Accent */}
          <div className="lg:col-span-7">
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary inline-block" />
              <span>INDEX // 01</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-on-surface font-normal leading-[1.02]">
              Selected <br />
              <span className="relative inline-block">
                Works
                {/* Curved Ribbon Graphic Under 'Works' */}
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
              A curated collection of client platforms, automated pipelines, and mission-critical systems shipped as a solo product engineer and AI specialist.
            </p>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-primary text-on-primary font-bold shadow-xs'
                      : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:border-primary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid (Screen 5 Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          {filteredProjects.map((project, index) => {
            const isOffset = project.offset;

            return (
              <div
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
                <div className="bg-surface-container-lowest border border-primary p-5 md:p-7 rounded-sm shadow-[8px_8px_0px_0px_var(--shadow-cyan-drop)] md:shadow-[14px_14px_0px_0px_var(--shadow-cyan-drop)] group-hover:shadow-[18px_18px_0px_0px_var(--shadow-cyan-drop)] group-hover:-translate-y-1 transition-all duration-300 relative">
                  {/* Technical Card Header */}
                  <div className="flex items-center justify-between border-b border-outline-variant pb-3 mb-4 font-mono text-xs">
                    <span className="text-primary font-bold tracking-wider">
                      [{project.categoryTag}]
                    </span>
                    <span className="text-on-surface-variant">{project.year}</span>
                  </div>

                  {/* Project Image Preview with Blueprint border */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high border border-outline-variant mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.02]"
                    />

                    {/* Corner Crosshair Decorations */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary pointer-events-none" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary pointer-events-none" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary pointer-events-none" />

                    {/* Hover Overlay Prompt */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <span className="px-4 py-2 bg-surface-container-lowest text-primary font-mono text-xs uppercase tracking-widest border border-primary shadow-sm flex items-center gap-1.5">
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
                      <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-surface-container text-on-surface-variant font-mono text-[11px] uppercase tracking-wider border border-outline-variant"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Fig. 01 Blueprint Drafting Quote Card (Screen 5 Element) */}
          <div className="lg:col-span-6 lg:translate-y-12">
            <div className="bg-surface-container-lowest border border-primary p-7 md:p-9 rounded-sm shadow-[10px_10px_0px_0px_var(--shadow-cyan-drop)] relative overflow-hidden h-full flex flex-col justify-between">
              {/* Hatched Accent Backdrop */}
              <div className="absolute inset-0 bg-hatched opacity-60 pointer-events-none" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-primary/40 pb-3 mb-6 font-mono text-xs text-primary">
                  <span className="font-bold flex items-center gap-2">
                    <Compass className="w-4 h-4 text-primary" />
                    <span>FIG. 01 // PRINCIPLE</span>
                  </span>
                  <span>THE ART OF CRAFT & DELIVERY</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
