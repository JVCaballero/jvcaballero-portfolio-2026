import React from 'react';
import { motion } from 'motion/react';
import { ARSENAL_ITEMS, BLUEPRINT_WIRE_URL } from '../data/portfolioData';
import {
  Code,
  Layers,
  Globe,
  ArrowRight,
  Terminal,
  FileText,
  Boxes,
  Cpu,
  User,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
  onSelectContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenResume,
  onSelectContact,
}) => {
  return (
    <section
      id="about-section"
      className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-transparent relative z-10"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Intro Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest border border-outline-variant rounded-xs shadow-xs">
              <User className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                ABOUT // SEC. 03
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-on-surface font-normal leading-[1.08]">
              Bridging the gap between{' '}
              <span className="italic font-serif text-primary font-medium">engineering</span>{' '}
              and{' '}
              <span className="italic font-serif text-secondary font-medium">real-world reliability</span>.
            </h2>

            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
              I'm John Vincent Caballero, a full-stack product engineer and AI specialist based in Cebu, Philippines. I thrive on solo ownership—from database architecture and zero-downtime CI/CD pipelines to high-density reactive interfaces and event-driven automation.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenResume}
                className="px-6 py-3.5 bg-primary text-on-primary font-mono text-xs uppercase tracking-widest border border-primary hover:bg-secondary-container hover:text-primary transition-colors duration-200 rounded-xs shadow-xs flex items-center gap-2 group cursor-pointer font-bold"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RÉSUMÉ</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onSelectContact}
                className="px-6 py-3.5 bg-surface-container-lowest text-primary font-mono text-xs uppercase tracking-widest border border-outline-variant hover:border-primary hover:bg-secondary-container/30 transition-colors duration-200 rounded-xs shadow-xs cursor-pointer"
              >
                LET'S TALK
              </motion.button>
            </div>
          </div>

          {/* Right Column: Technical Spec Wireframe Illustration */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-5 bg-surface-container-lowest border border-primary rounded-xs shadow-[8px_8px_0px_0px_var(--shadow-cyan-drop)] hover:shadow-[14px_14px_0px_0px_var(--shadow-cyan-drop)] transition-shadow duration-300 w-full max-w-sm relative group"
            >
              <div className="font-mono text-[10px] uppercase text-primary border-b border-outline-variant pb-2 mb-3 flex justify-between">
                <span className="font-bold">SPEC // ARCHITECTURE</span>
                <span>VER 3.2.0</span>
              </div>
              <div className="relative overflow-hidden border border-outline-variant rounded-xs">
                <img
                  src={BLUEPRINT_WIRE_URL}
                  alt="Technical wireframe architecture"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover filter contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
                {/* Corner Crosshairs */}
                <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-primary" />
                <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-primary" />
                <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-primary" />
                <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-primary" />
              </div>
              <div className="mt-3 font-mono text-[11px] text-on-surface-variant flex justify-between">
                <span>Core: Next.js / Postgres / n8n</span>
                <span className="text-primary font-bold">100% AUDIT</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION: THE ARSENAL (TOOLKIT) Bento Grid */}
        <div>
          <div className="flex items-center justify-between border-b border-primary/30 pb-3 mb-8">
            <div className="flex items-center gap-3">
              <Boxes className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-sm uppercase tracking-widest text-primary font-bold">
                THE ARSENAL // SENIOR PRODUCT TOOLKIT
              </h3>
            </div>
            <span className="font-mono text-xs text-on-surface-variant hidden sm:inline">
              STACK MATURITY: SENIOR / PRODUCTION-TESTED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bento Card 1: React, Next.js & Vue 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xs hover:border-primary shadow-xs hover:shadow-[8px_8px_0px_0px_var(--shadow-cyan-drop)] transition-shadow duration-300 group relative overflow-hidden"
            >
              <div className="font-mono text-[10px] uppercase text-primary tracking-widest mb-3 font-semibold">
                [CORE FRONTEND]
              </div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-2xl font-medium text-on-surface group-hover:text-primary transition-colors">
                  React, Next.js & Vue 3
                </h4>
                <Terminal className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300" />
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                High-density UI systems with TypeScript, Tailwind CSS, shadcn/ui, and TanStack Virtual for instant scrolling across massive legal and analytical data tables.
              </p>
            </motion.div>

            {/* Bento Card 2: Python/Django & Databases */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xs hover:border-primary shadow-xs hover:shadow-[8px_8px_0px_0px_var(--shadow-cyan-drop)] transition-shadow duration-300 group relative overflow-hidden"
            >
              <div className="font-mono text-[10px] uppercase text-primary tracking-widest mb-3 font-semibold">
                [BACKEND & STORAGE]
              </div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-2xl font-medium text-on-surface group-hover:text-primary transition-colors">
                  Python/Django & Postgres
                </h4>
                <Globe className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300" />
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Architecting REST APIs, Neon PostgreSQL with connection pooling, DynamoDB schemas, and transactional outbox patterns with persistent watermarks.
              </p>
            </motion.div>

            {/* Bento Card 3: AI & Workflow Automation */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="bg-surface-container-lowest border border-primary p-6 rounded-xs shadow-[8px_8px_0px_0px_var(--shadow-cyan-drop)] hover:shadow-[14px_14px_0px_0px_var(--shadow-cyan-drop)] transition-shadow duration-300 group relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-mono text-[10px] uppercase text-primary tracking-widest mb-3 font-semibold">
                    [AI & AUTOMATION]
                  </div>
                  <h4 className="font-display text-2xl font-medium text-on-surface group-hover:text-primary transition-colors mb-2">
                    OpenAI API & n8n Sync
                  </h4>
                </div>
                {/* 99% Automation Dial */}
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-primary flex flex-col items-center justify-center bg-secondary-container/40 group-hover:rotate-180 transition-transform duration-700">
                  <span className="font-mono text-xs font-bold text-primary">99%</span>
                  <span className="font-mono text-[8px] uppercase text-on-surface-variant">AUTO</span>
                </div>
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mt-1">
                Generative AI task parsers, automated Google Sheets/Drive synchronization webhooks, and prompt engineering saving hours of manual workload.
              </p>
            </motion.div>

            {/* Bento Card 4: Playwright & Testing */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xs hover:border-primary shadow-xs hover:shadow-[8px_8px_0px_0px_var(--shadow-cyan-drop)] transition-shadow duration-300 group"
            >
              <div className="font-mono text-[10px] uppercase text-primary tracking-widest mb-3 font-semibold">
                [TESTING & QA]
              </div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-2xl font-medium text-on-surface group-hover:text-primary transition-colors">
                  Playwright (180+ Tests)
                </h4>
                <Layers className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300" />
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Risk-based multi-role test matrices (Student, Parent, Practitioner), Jest snapshot assertions, and evidence-first debugging (HAR captures, logs).
              </p>
            </motion.div>

            {/* Bento Card 5: Cloud, CI/CD & Monitoring */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xs hover:border-primary shadow-xs hover:shadow-[8px_8px_0px_0px_var(--shadow-cyan-drop)] transition-shadow duration-300 group md:col-span-2"
            >
              <div className="font-mono text-[10px] uppercase text-primary tracking-widest mb-3 font-semibold">
                [INFRASTRUCTURE & MONITORING]
              </div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-2xl font-medium text-on-surface group-hover:text-primary transition-colors">
                  AWS EC2, Vercel, Datadog & ScienceLogic
                </h4>
                <Cpu className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300" />
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                GitHub Actions zero-downtime CI/CD, Lightsail WordPress pipelines, FedRAMP/Cisco infrastructure telemetry, and New Relic query profiling.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

