import React, { useState } from 'react';
import { InteractiveRobbAvatar } from './InteractiveRobbAvatar';
import { ThreeToonScene } from './ThreeToonScene';
import { REFERENCE_ARTWORK_URL } from '../data/portfolioData';
import { ArrowRight, Sparkles, Code2, Compass, MoveDown, ToggleLeft, ToggleRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onOpenHire: () => void;
  variant?: 'screen1' | 'screen2' | 'standard';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onOpenHire,
  variant = 'standard',
}) => {
  // Toggle between Screen 1 Illustrated Vector Avatar & Screen 2 Editorial Tape Frame
  const [avatarMode, setAvatarMode] = useState<'vector' | 'editorial'>(
    variant === 'screen2' ? 'editorial' : 'vector'
  );

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 md:pt-32 pb-8 px-6 md:px-12 lg:px-20 overflow-hidden bg-surface">
      {/* Background 3D Floating Toon Scene (from Screen 1) */}
      <div className="absolute inset-0 pointer-events-none opacity-40 md:opacity-75 z-0">
        <ThreeToonScene interactive={true} />
      </div>

      {/* Blueprint Grid Accent Lines */}
      <div className="absolute inset-0 bg-blueprint-grid-lg opacity-25 pointer-events-none z-0" />

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Typography & Intent */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-sm shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
              AVAILABLE FOR PROJECTS
            </span>
          </div>

          {/* Display Heading with Sky Blue Tilt Highlight */}
          <div className="space-y-1">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-on-surface leading-[1.05] font-normal">
              Hi,
              <br />
              <span className="relative inline-block mt-1">
                {/* Sky Blue Highlight Behind 'my name' */}
                <span className="absolute -inset-x-2 inset-y-1 bg-secondary-container -rotate-1 rounded-sm -z-10 transition-transform duration-300 hover:rotate-0 hover:scale-105" />
                <span className="relative text-primary font-serif font-medium">
                  my name
                </span>
              </span>{' '}
              is John Vincent.
            </h1>
          </div>

          {/* Subtext */}
          <p className="font-body text-lg sm:text-xl md:text-2xl text-on-surface-variant max-w-xl font-normal leading-relaxed">
            I'm a full-stack product engineer & AI automation specialist based in{' '}
            <span className="text-on-surface font-medium underline decoration-primary/40 underline-offset-4">
              Cebu, Philippines
            </span>
            . Turning complex product requirements into resilient, high-velocity web platforms and automated workflows.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* View Projects with Hatched Fill on Hover */}
            <button
              onClick={onExploreWork}
              className="group relative px-7 py-3.5 bg-primary text-on-primary font-mono text-xs uppercase tracking-widest border border-primary overflow-hidden transition-all duration-300 rounded-sm shadow-sm active:scale-95 cursor-pointer"
            >
              <div className="absolute inset-0 bg-hatched opacity-0 group-hover:opacity-100 transition-opacity bg-secondary-container text-primary" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-primary transition-colors font-semibold">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            {/* Hire Me / Let's Talk */}
            <button
              onClick={onOpenHire}
              className="px-7 py-3.5 bg-surface-container-lowest text-primary font-mono text-xs uppercase tracking-widest border border-primary hover:bg-secondary-container/40 transition-all duration-200 rounded-sm shadow-xs active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Technical Blueprint Coordinates & Stack Note */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-[11px] font-mono text-outline">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-primary" />
              <span>10.2447° N, 123.8494° E (Cebu, PH)</span>
            </span>
            <span className="hidden sm:inline opacity-40">|</span>
            <span className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-secondary" />
              <span>Next.js • Django • Postgres • n8n • Playwright</span>
            </span>
          </div>
        </div>

        {/* Right Column: Hero Visual Asset (Vector Avatar or Framed Editorial) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Avatar Switcher Controls */}
          <div className="absolute -top-10 right-2 z-20 flex items-center gap-2 bg-surface-container-lowest/90 px-3 py-1 border border-outline-variant rounded-full text-[11px] font-mono text-on-surface-variant shadow-xs">
            <span>Visual Mode:</span>
            <button
              onClick={() =>
                setAvatarMode((prev) => (prev === 'vector' ? 'editorial' : 'vector'))
              }
              className="flex items-center gap-1 text-primary hover:text-primary-container font-semibold transition-colors cursor-pointer"
            >
              {avatarMode === 'vector' ? (
                <>
                  <span>Vector Avatar (Interactive)</span>
                  <ToggleRight className="w-4 h-4 text-primary" />
                </>
              ) : (
                <>
                  <span>Blueprint Frame (Artwork)</span>
                  <ToggleLeft className="w-4 h-4 text-secondary" />
                </>
              )}
            </button>
          </div>

          {avatarMode === 'vector' ? (
            /* Mode 1: Vector Cartoon Avatar with Eye Tracking */
            <div className="w-full flex justify-center py-4">
              <InteractiveRobbAvatar
                className="w-full max-w-[380px] lg:max-w-[420px]"
                showHatchedBackdrop={true}
              />
            </div>
          ) : (
            /* Mode 2: Screen 2 Framed Polaroid with Scotch Tape */
            <div className="relative p-4 md:p-6 bg-surface-container-lowest border border-primary shadow-xl rounded-sm max-w-[380px] group transition-all duration-300 hover:shadow-2xl">
              {/* Scotch Tape at top */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-amber-100/70 border border-amber-300/40 backdrop-blur-xs -rotate-2 shadow-xs z-20 pointer-events-none"
                style={{
                  clipPath: 'polygon(0% 10%, 5% 0%, 95% 0%, 100% 10%, 98% 90%, 95% 100%, 5% 100%, 0% 90%)',
                }}
              />

              {/* Technical Crosshairs */}
              <div className="absolute top-2 left-2 font-mono text-[9px] text-primary opacity-60">
                + [ENGINEER_ARCHETYPE]
              </div>
              <div className="absolute top-2 right-2 font-mono text-[9px] text-primary opacity-60">
                SCALE: 1.00 +
              </div>

              {/* Artwork Image */}
              <div className="mt-4 border border-outline-variant overflow-hidden bg-surface-container">
                <img
                  src={REFERENCE_ARTWORK_URL}
                  alt="John Vincent Caballero Avatar"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover filter contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Polaroid Caption */}
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-on-surface-variant">
                <span>John Vincent — Product Dev</span>
                <span className="text-primary font-semibold">FIG. 00</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footer Details: Scroll Indicator & Cebu Note */}
      <div className="relative z-10 max-w-[1500px] mx-auto w-full pt-8 flex items-end justify-between text-xs font-mono text-on-surface-variant border-t border-outline-variant/60">
        {/* Animated Scroll Track */}
        <button
          onClick={onExploreWork}
          className="flex items-center gap-3 group focus:outline-none text-left cursor-pointer"
        >
          <div className="w-5 h-8 border border-primary rounded-full flex justify-center p-1 relative overflow-hidden">
            <div className="w-1.5 h-2 bg-primary rounded-full animate-slide-down" />
          </div>
          <span className="uppercase tracking-widest text-[11px] text-primary group-hover:underline">
            SCROLL TO EXPLORE
          </span>
        </button>

        {/* Note */}
        <div className="text-right text-[11px] text-outline font-mono">
          <span>© MMXXVI. Built for Production.</span>
          <span className="hidden sm:inline ml-2 text-primary font-medium">
            (Cebu, Philippines • Remote Ready)
          </span>
        </div>
      </div>
    </section>
  );
};
