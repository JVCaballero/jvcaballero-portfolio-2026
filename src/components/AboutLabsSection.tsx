import React, { useState } from 'react';
import { ARSENAL_ITEMS, LAB_EXPERIMENTS, BLUEPRINT_WIRE_URL } from '../data/portfolioData';
import { LabExperiment } from '../types';
import {
  Code,
  Layers,
  Sparkles,
  Zap,
  Globe,
  ArrowRight,
  Terminal,
  Activity,
  Maximize2,
  FileText,
  Boxes,
  Cpu,
} from 'lucide-react';

interface AboutLabsSectionProps {
  onOpenResume: () => void;
  onOpenLabExperiment: (experiment: LabExperiment) => void;
  onSelectContact: () => void;
  standalone?: boolean;
}

export const AboutLabsSection: React.FC<AboutLabsSectionProps> = ({
  onOpenResume,
  onOpenLabExperiment,
  onSelectContact,
  standalone = false,
}) => {
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <section
      id="about-labs-section"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-surface-container-low border-t border-outline-variant relative"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Intro Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest border border-primary/40 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                ABOUT & LABS // SEC. 02
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-on-surface font-normal leading-[1.08]">
              Bridging the gap between{' '}
              <span className="italic font-serif text-primary font-medium">engineering</span>{' '}
              and{' '}
              <span className="italic font-serif text-secondary font-medium">real-world reliability</span>.
            </h2>

            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
              I'm a full-stack product engineer who thrives on solo ownership—from database architecture and zero-downtime CI/CD pipelines to high-density reactive interfaces and AI automated workflows.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 bg-primary text-on-primary font-mono text-xs uppercase tracking-widest border border-primary hover:bg-secondary-container hover:text-primary transition-all duration-200 rounded-sm shadow-sm flex items-center gap-2 group active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RÉSUMÉ</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onSelectContact}
                className="px-6 py-3.5 bg-surface-container-lowest text-primary font-mono text-xs uppercase tracking-widest border border-outline-variant hover:border-primary transition-all duration-200 rounded-sm shadow-xs active:scale-95 cursor-pointer"
              >
                LET'S TALK
              </button>
            </div>
          </div>

          {/* Right Column: Technical Spec Wireframe Illustration */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="p-5 bg-surface-container-lowest border border-primary rounded-sm shadow-[8px_8px_0px_0px_#bae6fd] w-full max-w-sm relative">
              <div className="font-mono text-[10px] uppercase text-primary border-b border-outline-variant pb-2 mb-3 flex justify-between">
                <span>SPEC // ARCHITECTURE</span>
                <span>VER 3.2.0</span>
              </div>
              <img
                src={BLUEPRINT_WIRE_URL}
                alt="Technical wireframe architecture"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover border border-outline-variant filter contrast-125"
              />
              <div className="mt-3 font-mono text-[11px] text-on-surface-variant flex justify-between">
                <span>Core: Next.js / Neon Postgres / n8n</span>
                <span className="text-primary font-bold">100% AUDIT</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: THE ARSENAL (TOOLKIT_V2.4) Bento Grid */}
        <div className="mb-24">
          <div className="flex items-center justify-between border-b border-primary/30 pb-3 mb-8">
            <div className="flex items-center gap-3">
              <Boxes className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-sm uppercase tracking-widest text-primary font-bold">
                THE ARSENAL // PRODUCT TOOLKIT
              </h3>
            </div>
            <span className="font-mono text-xs text-on-surface-variant hidden sm:inline">
              STACK MATURITY: SENIOR / PRODUCTION-TESTED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bento Card 1: React, Next.js & Vue 3 */}
            <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-sm hover:border-primary hover:shadow-[6px_6px_0px_0px_#bae6fd] transition-all group relative overflow-hidden">
              <div className="font-mono text-[10px] uppercase text-primary tracking-widest mb-3">
                [CORE FRONTEND]
              </div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-2xl font-medium text-on-surface">
                  React, Next.js & Vue 3
                </h4>
                <Terminal className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                High-density UI systems with TypeScript, Tailwind CSS, shadcn/ui, and TanStack Virtual for instant scrolling across massive legal data tables.
              </p>
            </div>

            {/* Bento Card 2: Python/Django & Databases */}
            <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-sm hover:border-primary hover:shadow-[6px_6px_0px_0px_#bae6fd] transition-all group relative overflow-hidden">
              <div className="font-mono text-[10px] uppercase text-primary tracking-widest mb-3">
                [BACKEND & STORAGE]
              </div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-2xl font-medium text-on-surface">
                  Python/Django & Postgres
                </h4>
                <Globe className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Architecting REST APIs, Neon PostgreSQL with connection pooling, DynamoDB schemas, and transactional outbox patterns with persistent watermarks.
              </p>
            </div>

            {/* Bento Card 3: AI & Workflow Automation */}
            <div className="bg-surface-container-lowest border border-primary p-6 rounded-sm shadow-[6px_6px_0px_0px_#bae6fd] group relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-mono text-[10px] uppercase text-primary tracking-widest mb-3">
                    [AI & AUTOMATION]
                  </div>
                  <h4 className="font-display text-2xl font-medium text-on-surface mb-2">
                    OpenAI API & n8n Sync
                  </h4>
                </div>
                {/* 99% Automation Dial */}
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-primary flex flex-col items-center justify-center bg-secondary-container/30">
                  <span className="font-mono text-xs font-bold text-primary">99%</span>
                  <span className="font-mono text-[8px] uppercase text-on-surface-variant">AUTO</span>
                </div>
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mt-1">
                Generative AI task parsers, automated Google Sheets/Drive synchronization webhooks, and prompt engineering saving hours of manual workload.
              </p>
            </div>

            {/* Bento Card 4: Playwright & Testing */}
            <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-sm hover:border-primary hover:shadow-[6px_6px_0px_0px_#bae6fd] transition-all group">
              <div className="font-mono text-[10px] uppercase text-primary tracking-widest mb-3">
                [TESTING & QA]
              </div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-2xl font-medium text-on-surface">
                  Playwright (180+ Tests)
                </h4>
                <Layers className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Risk-based multi-role test matrices (Student, Parent, Practitioner), Jest snapshot assertions, and evidence-first debugging (HAR captures, logs).
              </p>
            </div>

            {/* Bento Card 5: Cloud, CI/CD & Monitoring */}
            <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-sm hover:border-primary hover:shadow-[6px_6px_0px_0px_#bae6fd] transition-all group md:col-span-2">
              <div className="font-mono text-[10px] uppercase text-primary tracking-widest mb-3">
                [INFRASTRUCTURE & MONITORING]
              </div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-2xl font-medium text-on-surface">
                  AWS EC2, Vercel, Datadog & ScienceLogic
                </h4>
                <Cpu className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                GitHub Actions zero-downtime CI/CD, Lightsail WordPress pipelines, FedRAMP/Cisco infrastructure telemetry, and New Relic query profiling.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: THE LABORATORY (FRAGMENTS & SKETCHES) */}
        <div>
          <div className="flex items-center justify-between border-b border-primary/30 pb-3 mb-8">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-sm uppercase tracking-widest text-primary font-bold">
                THE LABORATORY // FRAGMENTS & SKETCHES
              </h3>
            </div>
            <span className="font-mono text-xs text-on-surface-variant">
              LIVE INTERACTIVE EXPERIMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LAB_EXPERIMENTS.map((exp) => (
              <div
                key={exp.id}
                className="bg-surface-container-lowest border border-outline-variant hover:border-primary p-5 rounded-sm shadow-sm hover:shadow-[8px_8px_0px_0px_#bae6fd] transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-outline-variant mb-4">
                    <span className="text-primary font-bold">[{exp.expNumber}]</span>
                    <span className="text-on-surface-variant">{exp.subtitle}</span>
                  </div>

                  {/* Visual Preview or Code Snippet */}
                  {exp.image ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-surface-container mb-4 border border-outline-variant">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <button
                        onClick={() => onOpenLabExperiment(exp)}
                        className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <span className="px-3 py-1.5 bg-surface-container-lowest text-primary font-mono text-xs uppercase tracking-wider border border-primary shadow-sm flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>LAUNCH SANDBOX</span>
                        </span>
                      </button>
                    </div>
                  ) : (
                    <div className="bg-[#191c1e] text-[#f7f9fb] p-3 rounded font-mono text-[11px] mb-4 overflow-x-auto border border-outline-variant max-h-40">
                      <pre>
                        <code>{exp.codeSnippet}</code>
                      </pre>
                    </div>
                  )}

                  {/* Title & Description */}
                  <h4 className="font-display text-xl font-medium text-on-surface group-hover:text-primary transition-colors mb-2">
                    {exp.title}
                  </h4>
                  <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 mt-4 border-t border-outline-variant flex items-center justify-between">
                  <button
                    onClick={() => onOpenLabExperiment(exp)}
                    className="font-mono text-xs text-primary font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>LAUNCH LAB EXPERIMENT</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => handleCopyCode(exp.id, exp.codeSnippet)}
                    className="font-mono text-[10px] text-on-surface-variant hover:text-primary"
                    title="Copy GLSL Snippet"
                  >
                    {copiedCodeId === exp.id ? 'COPIED ✓' : 'COPY CODE'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
