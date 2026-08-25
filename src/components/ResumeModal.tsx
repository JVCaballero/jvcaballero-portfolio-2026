import React from 'react';
import { motion } from 'motion/react';
import {
  X,
  Download,
  MapPin,
  Mail,
  Phone,
  Globe,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Shield,
  Bot,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenHire: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onOpenHire,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-surface-container-lowest border-2 border-primary w-full max-w-4xl max-h-[92vh] rounded-xs shadow-[16px_16px_0px_0px_var(--shadow-cyan-drop)] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant bg-surface-container-low">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-primary font-bold">
              [JV_CABALLERO_RESUME.PDF]
            </span>
            <span className="text-on-surface-variant font-mono text-xs">
              // CURRICULUM VITAE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => window.print()}
              className="px-3 py-1 bg-surface-container-lowest border border-outline-variant hover:border-primary text-xs font-mono text-primary rounded-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
              title="Print / Save PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </motion.button>
            <motion.button
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.88 }}
              onClick={onClose}
              className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-xs transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Resume Document Body */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 space-y-10 font-body text-on-surface">
          {/* Header Info */}
          <div className="border-b border-outline-variant pb-8 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-normal text-on-surface">
                John Vincent Caballero
              </h2>
              <p className="font-mono text-sm text-primary font-bold uppercase tracking-widest mt-1">
                Full-Stack Product Engineer | AI & Automation Specialist
              </p>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 font-mono text-xs text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>Talisay City, Cebu, Philippines</span>
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>+63 905 525 5742</span>
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <a href="mailto:jvcaballero@tuta.io" className="hover:text-primary underline">
                    jvcaballero@tuta.io
                  </a>
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-primary" />
                  <a
                    href="https://github.com/JVCaballero"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary underline"
                  >
                    github.com/JVCaballero
                  </a>
                </span>
                <span className="flex items-center gap-1">
                  <ExternalLink className="w-3.5 h-3.5 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/john-vincent-c-06814b111"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary underline"
                  >
                    linkedin.com/in/john-vincent-c-06814b111
                  </a>
                </span>
              </div>
            </div>

            <div className="text-right font-mono text-xs text-on-surface-variant hidden sm:block bg-surface-container-low p-3 border border-outline-variant rounded-xs">
              <div className="text-primary font-bold">STATUS: AVAILABLE</div>
              <div>LOCATION: Cebu, PH / Remote</div>
              <div>EXPERIENCE: 2021 — PRESENT</div>
            </div>
          </div>

          {/* Statement */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              // PROFESSIONAL SUMMARY
            </h3>
            <p className="text-base text-on-surface-variant leading-relaxed font-normal">
              Full-stack product engineer and AI/automation specialist across legal-services and EdTech platforms. Skilled in React/Next.js, Python/Django, PHP/WordPress, and workflow automation (n8n, OpenAI API), with a proven track record of shipping reliable systems as a sole engineer for fast-moving teams.
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              // CORE COMPETENCIES
            </h3>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {[
                'Full-Stack Engineering',
                'AI & Workflow Automation',
                'QA & Test Automation',
                'Cloud & CI/CD',
                'Database Architecture',
                'WordPress/PHP Integrations',
              ].map((comp) => (
                <span
                  key={comp}
                  className="px-3 py-1 bg-surface-container-low border border-primary/40 text-primary font-medium rounded-xs"
                >
                  ✦ {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              <span>PROFESSIONAL EXPERIENCE</span>
            </h3>

            <div className="space-y-8 border-l-2 border-primary/30 pl-4 sm:pl-6 ml-1">
              {/* Role 1: Simple.biz */}
              <div className="space-y-2">
                <div className="flex flex-wrap justify-between items-center text-sm font-mono">
                  <span className="font-bold text-on-surface text-base">
                    Full-Stack Product Engineer | AI & Automation Specialist
                  </span>
                  <span className="text-primary font-semibold">2025 — PRESENT</span>
                </div>
                <div className="text-xs font-mono text-on-surface-variant">
                  Simple.biz • Remote
                </div>
                <ul className="space-y-2 text-sm text-on-surface-variant mt-2 list-disc list-outside pl-4 leading-relaxed">
                  <li>
                    Own end-to-end delivery for two client platforms, Hogan-Smith Law (legal services) and EarlyBird College (EdTech), from requirements through implementation, QA, deployment, and production support.
                  </li>
                  <li>
                    <strong>Hogan-Smith Law:</strong> Built and modernized an internal hearings & medical-records operations dashboard (Next.js, React, TypeScript, Neon PostgreSQL, Tailwind CSS, shadcn/ui, TanStack Virtual) with role/field-level permissions, virtualized tables, and audit-history views.
                  </li>
                  <li>
                    <strong>Hogan-Smith Law:</strong> Designed an event-driven Postgres/n8n sync (outbox pattern, persistent watermarks) for Google Sheets/Drive, and configured Neon PostgreSQL and Vercel CI/CD pipelines to reduce deployment failures.
                  </li>
                  <li>
                    <strong>EarlyBird College:</strong> Provisioned an AWS EC2 Django staging environment with a GitHub Actions CI/CD pipeline, cutting deploy time and eliminating CPU exhaustion on t3.micro, and built a companion WordPress/Lightsail pipeline with Slack deploy alerts.
                  </li>
                  <li>
                    <strong>EarlyBird College:</strong> Converted 180+ use cases into a risk-based Playwright test matrix across Student/Parent/Practitioner roles; developed a US high-school autocomplete feature and a versioned essay-content data pipeline seeding prompts across 13+ institutions.
                  </li>
                  <li>
                    <strong>EarlyBird College:</strong> Root-caused and resolved production defects in the transcript and GPA-calculation pipeline using an evidence-first workflow (logs, HAR captures, isolation tests).
                  </li>
                  <li>
                    <strong>EarlyBird College:</strong> Translated Figma mockups into a responsive, interactive UI for a new gamified coursework dashboard, wiring the full component and user-flow implementation from design handoff to production.
                  </li>
                  <li>
                    <strong>EarlyBird College:</strong> Authored comparative technical specs for React Native, Expo, Flutter, and Capacitor/Ionic to plan a desktop-to-mobile port, modeling zero-cost EAS build/OTA paths and sequencing native integrations by risk.
                  </li>
                </ul>
              </div>

              {/* Role 2: TTEC Digital */}
              <div className="space-y-2 pt-2">
                <div className="flex flex-wrap justify-between items-center text-sm font-mono">
                  <span className="font-bold text-on-surface text-base">
                    Senior Developer
                  </span>
                  <span className="text-primary font-semibold">2024 — 2025</span>
                </div>
                <div className="text-xs font-mono text-on-surface-variant">
                  TTEC Digital (Client: Cisco) • Remote
                </div>
                <ul className="space-y-2 text-sm text-on-surface-variant mt-2 list-disc list-outside pl-4 leading-relaxed">
                  <li>
                    Migrated internal frontend applications from Vue 2 to Vue 3, modernizing component architecture for maintainability.
                  </li>
                  <li>
                    Monitored and analyzed application performance using Datadog and ScienceLogic to improve reliability and troubleshooting.
                  </li>
                  <li>
                    Contributed to Cisco's QTC (Quote-to-Cash) tool configuration with custom Dynamic Apps in ScienceLogic, tailored to monitoring and compliance needs for U.S. Navy, Army, and FedRAMP clients.
                  </li>
                  <li>
                    Evaluated and revitalized stale tools and dormant servers across Cisco's ecosystem (CUC/Unity Connection, CUCM/Unified Communications Manager, VMware vSphere/ESXi, UCS/Unified Computing System), running health checks, debugging, and custom Dynamic App revisions in ScienceLogic.
                  </li>
                </ul>
              </div>

              {/* Role 3: BPOSeats / HQZen */}
              <div className="space-y-2 pt-2">
                <div className="flex flex-wrap justify-between items-center text-sm font-mono">
                  <span className="font-bold text-on-surface text-base">
                    Full Stack Developer
                  </span>
                  <span className="text-primary font-semibold">2021 — 2024</span>
                </div>
                <div className="text-xs font-mono text-on-surface-variant">
                  BPOSeats (now HQZen) • Mandaue City, Cebu, Philippines
                </div>
                <ul className="space-y-2 text-sm text-on-surface-variant mt-2 list-disc list-outside pl-4 leading-relaxed">
                  <li>
                    Led development of a generative AI chatbot (OpenAI API, Python, DynamoDB) assisting users with Kanban card creation, saving roughly 10–20 minutes of manual effort per task.
                  </li>
                  <li>
                    Refactored backend modules and optimized APIs for performance and scalability using Python/Django, Vue.js, and TypeScript; mentored junior developers on clean, maintainable implementation.
                  </li>
                  <li>
                    Performed unit/snapshot testing (Jest, Factory Boy) and used New Relic to monitor system health and investigate slow queries.
                  </li>
                </ul>
              </div>

              {/* Earlier Experience */}
              <div className="space-y-1 pt-2">
                <div className="text-xs font-mono text-primary font-bold uppercase tracking-wider">
                  EARLIER EXPERIENCE
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Technical support (TSR) and merchant/desktop support roles at Convergys, Accenture, and 24/7 Intouch (Shopify).
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>EDUCATION</span>
            </h3>
            <div className="p-4 bg-surface-container-low border border-outline-variant rounded-xs font-mono text-xs space-y-2">
              <div className="flex justify-between items-center font-bold text-sm text-on-surface">
                <span>Associate in Computer Technology</span>
                <span className="text-primary">2017 — 2020</span>
              </div>
              <div className="text-on-surface-variant">
                Cebu Institute of Technology - University | Cebu, Philippines
              </div>
              <ul className="list-disc list-inside space-y-1 text-on-surface-variant pt-1">
                <li>Built foundational skills in programming, web development, and database/system administration through a hands-on curriculum.</li>
                <li>Balanced coursework with active freelance development work throughout the program.</li>
              </ul>
            </div>
          </div>

          {/* Skills & Tools Grid */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              // SKILLS & TOOLS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 bg-surface-container-low border border-outline-variant rounded-xs space-y-1">
                <span className="text-primary font-bold block">LANGUAGES & FRONTEND</span>
                <span className="text-on-surface-variant block">
                  JavaScript (ES6+), TypeScript, Python, PHP, SQL
                </span>
                <span className="text-on-surface-variant block text-[11px] opacity-80">
                  React, Next.js, Vue.js, Tailwind CSS, shadcn/ui, TanStack Virtual, Figma
                </span>
              </div>

              <div className="p-3.5 bg-surface-container-low border border-outline-variant rounded-xs space-y-1">
                <span className="text-primary font-bold block">BACKEND, DATA & AI</span>
                <span className="text-on-surface-variant block">
                  Python/Django, Node.js, REST APIs, PostgreSQL, Neon, DynamoDB
                </span>
                <span className="text-on-surface-variant block text-[11px] opacity-80">
                  OpenAI API, n8n, Gemini, Claude, Outbox Pattern, Webhooks
                </span>
              </div>

              <div className="p-3.5 bg-surface-container-low border border-outline-variant rounded-xs space-y-1">
                <span className="text-primary font-bold block">TESTING, CLOUD & DEVOPS</span>
                <span className="text-on-surface-variant block">
                  Playwright, Jest, Factory Boy, Vercel, AWS (EC2, Lightsail), GCP, Docker, CI/CD
                </span>
                <span className="text-on-surface-variant block text-[11px] opacity-80">
                  Datadog, New Relic, ScienceLogic
                </span>
              </div>

              <div className="p-3.5 bg-surface-container-low border border-outline-variant rounded-xs space-y-1">
                <span className="text-primary font-bold block">SOFT SKILLS & ARCHITECTURE</span>
                <span className="text-on-surface-variant block">
                  Solo Ownership, Cross-Functional Delivery, Mentorship, Knowledge Transfer
                </span>
                <span className="text-on-surface-variant block text-[11px] opacity-80">
                  Ambiguity-to-Execution Translation, Evidence-Based Problem Solving
                </span>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-6 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-on-surface-variant">
              Talisay City, Cebu, Philippines • Available for Remote / Global Engineering Roles.
            </div>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onClose();
                onOpenHire();
              }}
              className="px-6 py-2.5 bg-primary text-on-primary font-mono text-xs uppercase tracking-widest rounded-xs hover:bg-secondary-container hover:text-primary transition-all cursor-pointer font-bold shadow-xs"
            >
              Contact John Vincent ✦
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

