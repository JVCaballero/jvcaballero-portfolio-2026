import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, LabExperiment } from '../types';
import { PROJECTS_DATA, LAB_EXPERIMENTS } from '../data/portfolioData';
import {
  FolderKanban,
  FlaskConical,
  ArrowUpRight,
  ArrowRight,
  Maximize2,
  Code2,
  Copy,
  Check,
  Sparkles,
  Layers,
  Terminal,
  Activity,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenLabExperiment: (experiment: LabExperiment) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenLabExperiment,
}) => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'SYSTEMS' | 'LABS' | 'AI' | 'TESTING'>('ALL');
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const { isDark } = useTheme();

  const handleCopyCode = (id: string, code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const categories = [
    { id: 'ALL', label: 'All Work & Experiments' },
    { id: 'SYSTEMS', label: 'Production Systems' },
    { id: 'LABS', label: 'Interactive Labs & Sandboxes' },
    { id: 'AI', label: 'AI & Automation' },
    { id: 'TESTING', label: 'Testing & QA' },
  ] as const;

  const showSystems = activeCategory === 'ALL' || activeCategory === 'SYSTEMS' || activeCategory === 'AI' || activeCategory === 'TESTING';
  const showLabs = activeCategory === 'ALL' || activeCategory === 'LABS' || activeCategory === 'AI' || activeCategory === 'TESTING';

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === 'ALL' || activeCategory === 'SYSTEMS') return true;
    if (activeCategory === 'AI') {
      return project.tags.some((t) => t.toLowerCase().includes('ai') || t.toLowerCase().includes('n8n'));
    }
    if (activeCategory === 'TESTING') {
      return project.tags.some((t) => t.toLowerCase().includes('playwright') || t.toLowerCase().includes('testing'));
    }
    return false;
  });

  const filteredLabs = LAB_EXPERIMENTS.filter((lab) => {
    if (activeCategory === 'ALL' || activeCategory === 'LABS') return true;
    if (activeCategory === 'AI') {
      return lab.id.includes('003') || lab.title.toLowerCase().includes('ai');
    }
    if (activeCategory === 'TESTING') {
      return lab.id.includes('002') || lab.title.toLowerCase().includes('playwright');
    }
    return false;
  });

  return (
    <section
      id="projects-section"
      className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-transparent relative z-10"
    >
      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest border border-outline-variant rounded-xs mb-3">
              <FolderKanban className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                PROJECTS & EXPERIMENTS // SEC. 02
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-on-surface font-normal leading-[1.08]">
              Engineered systems, client deliverables & live interactive sandboxes.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-4">
            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              Explore full production applications alongside interactive engineering laboratories simulating transactional outboxes, Playwright suites, and AI prompt extractors.
            </p>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-outline-variant mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileTap={{ scale: 0.94 }}
              whileHover={{ y: -1 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-primary text-on-primary font-semibold shadow-xs'
                  : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:text-primary hover:border-primary'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* PART 1: INTERACTIVE LABS & SANDBOXES (When active) */}
        <AnimatePresence>
          {showLabs && filteredLabs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-20"
            >
              <div className="flex items-center justify-between border-b border-primary/30 pb-3 mb-8">
                <div className="flex items-center gap-3">
                  <FlaskConical className="w-5 h-5 text-primary animate-pulse" />
                  <h3 className="font-mono text-sm uppercase tracking-widest text-primary font-bold">
                    INTERACTIVE LABORATORY SANDBOXES
                  </h3>
                </div>
                <span className="font-mono text-xs text-on-surface-variant">
                  LIVE IN-BROWSER SIMULATIONS
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredLabs.map((exp, idx) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    whileHover={{ y: -6 }}
                    onClick={() => onOpenLabExperiment(exp)}
                    className="bg-surface-container-lowest border border-outline-variant hover:border-primary p-6 rounded-xs shadow-xs hover:shadow-[10px_10px_0px_0px_var(--shadow-cyan-drop)] transition-shadow duration-300 group flex flex-col justify-between cursor-pointer relative overflow-hidden"
                  >
                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-outline-variant mb-4">
                        <span className="text-primary font-bold">[{exp.expNumber}]</span>
                        <span className="text-on-surface-variant text-[11px] truncate max-w-[180px]">
                          {exp.subtitle}
                        </span>
                      </div>

                      {/* Preview Image with Sandbox Overlay */}
                      {exp.image && (
                        <div className="relative aspect-[16/9] overflow-hidden bg-surface-container mb-4 border border-outline-variant rounded-xs">
                          <img
                            src={exp.image}
                            alt={exp.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter contrast-[1.02]"
                          />
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                            <span className="px-3.5 py-2 bg-surface-container-lowest text-primary font-mono text-xs uppercase tracking-wider border border-primary shadow-md flex items-center gap-1.5 font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span>LAUNCH LIVE SANDBOX</span>
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Code Snippet Box */}
                      <div className="bg-surface-container text-on-surface p-3 rounded-xs font-mono text-[11px] mb-4 overflow-x-auto border border-outline-variant max-h-32 transition-colors group-hover:border-primary/40">
                        <pre>
                          <code>{exp.codeSnippet}</code>
                        </pre>
                      </div>

                      {/* Title & Description */}
                      <h4 className="font-display text-xl font-medium text-on-surface group-hover:text-primary transition-colors mb-2">
                        {exp.title}
                      </h4>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">
                        {exp.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-outline-variant flex items-center justify-between">
                      <span className="font-mono text-xs text-primary font-semibold flex items-center gap-1">
                        <span>OPEN SIMULATOR</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                      </span>

                      <motion.button
                        whileTap={{ scale: 0.86 }}
                        onClick={(e) => handleCopyCode(exp.id, exp.codeSnippet, e)}
                        className="font-mono text-[10px] text-on-surface-variant hover:text-primary flex items-center gap-1 px-2.5 py-1 bg-surface-container-low rounded-xs border border-outline-variant hover:border-primary cursor-pointer transition-colors"
                        title="Copy Code Snippet"
                      >
                        {copiedCodeId === exp.id ? (
                          <motion.span
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="flex items-center gap-1 text-emerald-600 font-bold"
                          >
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span>COPIED</span>
                          </motion.span>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>COPY</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PART 2: PRODUCTION SYSTEMS & CLIENT APPLICATIONS */}
        <AnimatePresence>
          {showSystems && filteredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between border-b border-primary/30 pb-3 mb-8">
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-primary" />
                  <h3 className="font-mono text-sm uppercase tracking-widest text-primary font-bold">
                    PRODUCTION SYSTEMS & DELIVERABLES
                  </h3>
                </div>
                <span className="font-mono text-xs text-on-surface-variant">
                  FULL-STACK & CLOUD ARCHITECTURES
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    whileHover={{ y: -6 }}
                    onClick={() => onSelectProject(project)}
                    className="bg-surface-container-lowest border border-outline-variant hover:border-primary p-6 md:p-8 rounded-xs shadow-xs hover:shadow-[12px_12px_0px_0px_var(--shadow-cyan-drop)] transition-shadow duration-300 group flex flex-col justify-between cursor-pointer relative overflow-hidden"
                  >
                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between border-b border-outline-variant pb-3 mb-4 font-mono text-xs">
                        <span className="text-primary font-bold tracking-wider">
                          [{project.categoryTag}]
                        </span>
                        <span className="text-on-surface-variant font-medium">{project.year}</span>
                      </div>

                      {/* Image */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-surface-container-high border border-outline-variant mb-5 rounded-xs">
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                          <span className="px-4 py-2 bg-surface-container-lowest text-primary font-mono text-xs uppercase tracking-widest border border-primary shadow-md flex items-center gap-1.5 font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <span>VIEW ARCHITECTURE</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="font-display text-2xl font-medium text-on-surface group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h4>

                      <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
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

                    {/* Deliverables snippet */}
                    <div className="pt-4 border-t border-outline-variant flex items-center justify-between font-mono text-xs">
                      <span className="text-on-surface-variant truncate max-w-[240px]">
                        Client: {project.client}
                      </span>
                      <span className="text-primary font-semibold flex items-center gap-1">
                        <span>EXPLORE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

