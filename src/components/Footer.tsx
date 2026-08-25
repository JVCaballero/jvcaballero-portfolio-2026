import React from 'react';
import { ArrowUp, Heart, Terminal, Compass, Sparkles } from 'lucide-react';
import { ScreenView } from '../types';

interface FooterProps {
  onSelectView: (view: ScreenView) => void;
  onOpenHire: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectView, onOpenHire }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-high border-t border-outline-variant py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-outline-variant/80">
          {/* Brand & Cebu Roots */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl md:text-3xl font-bold text-primary">
                John Vincent Caballero
              </span>
              <span className="font-mono text-xs px-2 py-0.5 bg-surface-container-lowest border border-primary/40 text-primary rounded-xs">
                PRODUCT DEV
              </span>
            </div>

            <p className="font-body text-sm md:text-base text-on-surface-variant max-w-sm leading-relaxed">
              Full-Stack Product Engineer architecting scalable web platforms, resilient API pipelines, and high-velocity workflow automation.
            </p>

            <div className="font-mono text-xs text-outline pt-2 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-primary" />
              <span>Talisay City, Cebu, Philippines (Remote Ready, UTC+8)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              SYSTEM DIRECTORY
            </div>
            <ul className="space-y-2 font-mono text-xs text-on-surface-variant">
              <li>
                <button
                  onClick={() => onSelectView('screen5-works')}
                  className="hover:text-primary hover:underline transition-colors cursor-pointer"
                >
                  [01] Selected Works (2021—Present)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectView('screen3-about-labs')}
                  className="hover:text-primary hover:underline transition-colors cursor-pointer"
                >
                  [02] About & The Arsenal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectView('lab-sandbox')}
                  className="hover:text-primary hover:underline transition-colors cursor-pointer"
                >
                  [03] The Laboratory (Outbox, QA & AI)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectView('screen4-contact')}
                  className="hover:text-primary hover:underline transition-colors cursor-pointer"
                >
                  [04] Establish Resonance (Contact)
                </button>
              </li>
            </ul>
          </div>

          {/* External Networks */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              EXTERNAL NETWORKS
            </div>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <a
                href="https://github.com/johnvincentcaballero"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-surface-container-lowest border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all rounded-xs"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/johnvincentcaballero"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-surface-container-lowest border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all rounded-xs"
              >
                LinkedIn ↗
              </a>
              <button
                onClick={onOpenHire}
                className="px-3 py-1.5 bg-primary text-on-primary hover:bg-secondary-container hover:text-primary transition-all rounded-xs font-bold cursor-pointer"
              >
                Hire John Vincent ✦
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Top Anchor */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-on-surface-variant">
          <div className="flex flex-wrap items-center gap-2">
            <span>© MMXXVI. Built for Production.</span>
            <span className="opacity-40">•</span>
            <span className="text-primary font-medium">Cebu, Philippines (Remote Ready)</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-primary hover:text-primary-container transition-colors group cursor-pointer"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
