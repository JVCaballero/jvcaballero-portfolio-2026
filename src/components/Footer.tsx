import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Heart, Terminal, Compass, Sparkles } from 'lucide-react';
import { ScreenView } from '../types';

interface FooterProps {
  onSelectView: (view: ScreenView) => void;
  onOpenHire?: () => void;
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
              <span className="font-mono text-xs px-2 py-0.5 bg-surface-container-lowest border border-primary/40 text-primary rounded-xs shadow-xs">
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
                <motion.button
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectView('case-studies')}
                  className="hover:text-primary transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span className="text-primary opacity-60">›</span>
                  <span>[01] Case Studies (2021—Present)</span>
                </motion.button>
              </li>
              <li>
                <motion.button
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectView('projects')}
                  className="hover:text-primary transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span className="text-primary opacity-60">›</span>
                  <span>[02] Projects & Experiments</span>
                </motion.button>
              </li>
              <li>
                <motion.button
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectView('about')}
                  className="hover:text-primary transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span className="text-primary opacity-60">›</span>
                  <span>[03] About & The Arsenal</span>
                </motion.button>
              </li>
              <li>
                <motion.button
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectView('contact')}
                  className="hover:text-primary transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span className="text-primary opacity-60">›</span>
                  <span>[04] Establish Resonance (Contact)</span>
                </motion.button>
              </li>
            </ul>
          </div>

          {/* External Networks */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              EXTERNAL NETWORKS
            </div>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/JVCaballero"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-surface-container-lowest border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all rounded-xs shadow-xs"
              >
                GitHub ↗
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/john-vincent-c-06814b111"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-surface-container-lowest border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all rounded-xs shadow-xs"
              >
                LinkedIn ↗
              </motion.a>
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectView('contact')}
                className="px-3.5 py-1.5 bg-primary text-on-primary hover:bg-secondary-container hover:text-primary transition-all rounded-xs font-bold cursor-pointer shadow-xs"
              >
                Get In Touch ✦
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Top Anchor */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span>© MMXXVI. Built for Production.</span>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-primary hover:text-primary-container transition-colors group cursor-pointer font-bold"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

