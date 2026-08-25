import React, { useState } from 'react';
import { Project } from '../types';
import {
  X,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Code2,
  Zap,
  Globe,
  Sliders,
} from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenHire: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenHire,
}) => {
  if (!project) return null;

  const [interactiveMode, setInteractiveMode] = useState(false);
  const [wireframeMesh, setWireframeMesh] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#191c1e]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest border-2 border-primary w-full max-w-5xl max-h-[92vh] rounded-sm shadow-[16px_16px_0px_0px_#bae6fd] flex flex-col overflow-hidden">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant bg-surface-container-low">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 bg-primary text-on-primary font-mono text-xs uppercase tracking-wider font-bold rounded-xs">
              {project.categoryTag}
            </span>
            <span className="font-mono text-xs text-on-surface-variant">
              PROJECT // {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors"
            title="Close Case Study"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 space-y-10">
          {/* Title and Overview */}
          <div className="space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-on-surface font-medium tracking-tight">
              {project.title}
            </h2>
            <p className="font-body text-xl text-primary font-normal leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Media Showcase with Interactive Blueprint Controls */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] bg-surface-container-high rounded-sm overflow-hidden border-2 border-primary shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-all duration-500 ${
                  wireframeMesh ? 'filter invert contrast-150' : ''
                }`}
              />

              {/* Corner crosshairs */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-primary pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-primary pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-primary pointer-events-none" />

              {/* Interactive Control Pill */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-surface-container-lowest/90 px-3 py-1.5 border border-primary rounded-sm shadow-md font-mono text-xs">
                <button
                  onClick={() => setWireframeMesh(!wireframeMesh)}
                  className="flex items-center gap-1.5 text-primary hover:text-primary-container font-semibold"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{wireframeMesh ? 'Standard Raster' : 'Inspect Wireframe'}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between font-mono text-xs text-on-surface-variant px-1">
              <span>Client: {project.client}</span>
              <span>Role: {project.role}</span>
            </div>
          </div>

          {/* Key Metrics Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low border border-outline-variant p-5 rounded-sm"
              >
                <div className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant mb-1">
                  {metric.label}
                </div>
                <div className="font-display text-3xl md:text-4xl text-primary font-bold">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Narrative & Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-outline-variant">
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-display text-2xl font-medium text-on-surface">
                Architectural Breakdown
              </h3>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                {project.longDescription}
              </p>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                Every component was engineered around the principle of structural intent: eliminating unnecessary visual noise and emphasizing low-friction cognitive workflows.
              </p>
            </div>

            <div className="md:col-span-5 space-y-4 bg-surface-container-low p-6 border border-outline-variant rounded-sm">
              <h4 className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
                CORE DELIVERABLES
              </h4>
              <ul className="space-y-2.5 font-body text-sm text-on-surface-variant">
                {project.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-outline-variant font-mono text-xs">
                <span className="text-outline block mb-2">TECHNOLOGY STACK</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-surface-container-lowest border border-outline-variant text-on-surface text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-6 bg-secondary-container/30 border border-primary rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-display text-xl text-primary font-medium">
                Looking for similar technical craftsmanship?
              </h4>
              <p className="font-body text-sm text-on-surface-variant">
                Let's discuss architecture and design systems for your next milestone.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenHire();
              }}
              className="px-6 py-3 bg-primary text-on-primary font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-secondary-container hover:text-primary transition-all shrink-0"
            >
              Start Conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
