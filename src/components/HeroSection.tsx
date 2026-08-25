import React from 'react';
import { motion } from 'motion/react';
import { InteractiveRobbAvatar } from './InteractiveRobbAvatar';
import { ThreeToonScene } from './ThreeToonScene';
import { ArrowRight, Code2, Compass, Send, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onOpenHire: () => void;
  variant?: 'screen1' | 'screen2' | 'standard';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onOpenHire,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center py-8 md:py-12 px-6 md:px-12 lg:px-20 overflow-hidden bg-transparent">
      {/* Background 3D Floating Toon Scene */}
      <div className="absolute inset-0 pointer-events-none opacity-40 md:opacity-75 z-0">
        <ThreeToonScene interactive={true} />
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto">
        {/* Left Column: Typography & Intent */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-xs shadow-xs cursor-default transition-colors hover:border-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              AVAILABLE FOR PROJECTS
            </span>
          </motion.div>

          {/* Display Heading with Sky Blue Tilt Highlight */}
          <motion.div variants={itemVariants} className="space-y-1">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-on-surface leading-[1.05] font-normal">
              Hi,
              <br />
              <motion.span
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="relative inline-block mt-1 cursor-pointer select-none"
              >
                {/* Sky Blue Highlight Behind 'my name' */}
                <span className="absolute -inset-x-2 inset-y-1 bg-secondary-container -rotate-1 rounded-xs -z-10 transition-all duration-300 hover:bg-sky-200 dark:hover:bg-sky-950" />
                <span className="relative text-primary font-serif font-medium">
                  my name
                </span>
              </motion.span>{' '}
              is John Vincent.
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg sm:text-xl md:text-2xl text-on-surface-variant max-w-xl font-normal leading-relaxed"
          >
            I'm a full-stack product engineer & AI automation specialist based in{' '}
            <span className="text-on-surface font-medium underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors">
              Cebu, Philippines
            </span>
            . Turning complex product requirements into resilient, high-velocity web platforms and automated workflows.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            {/* View Case Studies */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={onExploreWork}
              className="group relative px-7 py-3.5 bg-primary text-on-primary font-mono text-xs uppercase tracking-widest border border-primary overflow-hidden rounded-xs shadow-sm cursor-pointer brutal-btn"
            >
              <div className="absolute inset-0 bg-hatched opacity-0 group-hover:opacity-100 transition-opacity bg-secondary-container text-primary" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-primary transition-colors font-semibold">
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </span>
            </motion.button>

            {/* Let's Talk / Contact */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenHire}
              className="group px-7 py-3.5 bg-surface-container-lowest text-primary font-mono text-xs uppercase tracking-widest border border-primary hover:bg-secondary-container/40 transition-colors duration-200 rounded-xs shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>Get In Touch</span>
            </motion.button>
          </motion.div>

          {/* Technical Blueprint Coordinates & Stack & Production Note Inline */}
          <motion.div
            variants={itemVariants}
            className="pt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-mono text-outline"
          >
            <span className="flex items-center gap-1.5 text-primary hover:text-primary-container transition-colors cursor-default">
              <Compass className="w-3.5 h-3.5 text-primary animate-spin" style={{ animationDuration: '18s' }} />
              <span>10.2447° N, 123.8494° E (Cebu, PH)</span>
            </span>
            <span className="opacity-40">|</span>
            <span className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors cursor-default">
              <Code2 className="w-3.5 h-3.5 text-secondary" />
              <span>Next.js • Django • Postgres • n8n • Playwright</span>
            </span>
            <span className="opacity-40 hidden sm:inline">|</span>
            <span className="text-on-surface-variant font-mono">
              © MMXXVI. Built for Production. <span className="text-primary font-medium">(Cebu, Philippines • Remote Ready)</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Visual Asset (Vector Avatar) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          <div className="w-full flex justify-center py-4">
            <InteractiveRobbAvatar
              className="w-full max-w-[380px] lg:max-w-[420px]"
              showHatchedBackdrop={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

