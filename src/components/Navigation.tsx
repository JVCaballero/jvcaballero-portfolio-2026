import React, { useState } from 'react';
import { ScreenView } from '../types';
import { Menu, X, Sparkles, Layers, Send, FlaskConical, Briefcase, User, Home } from 'lucide-react';

interface NavigationProps {
  currentView: ScreenView;
  onSelectView: (view: ScreenView) => void;
  onOpenHireModal: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentView,
  onSelectView,
  onOpenHireModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewMenuOpen, setViewMenuOpen] = useState(false);

  const navLinks = [
    { id: 'screen5-works' as ScreenView, label: 'Work', icon: Briefcase },
    { id: 'screen3-about-labs' as ScreenView, label: 'About & Labs', icon: User },
    { id: 'lab-sandbox' as ScreenView, label: 'Experiments', icon: FlaskConical },
    { id: 'screen4-contact' as ScreenView, label: 'Contact', icon: Send },
  ];

  const screenPresets = [
    { id: 'all' as ScreenView, label: 'Full Interactive Portfolio (All Sections)', desc: 'Seamless unified experience' },
    { id: 'screen1-hero' as ScreenView, label: 'Screen 1: Hero & Vector Avatar', desc: 'Interactive avatar with eye tracking & Three.js' },
    { id: 'screen2-hero-alt' as ScreenView, label: 'Screen 2: Editorial Frame Hero', desc: 'Minimalist blueprint layout with tape frame' },
    { id: 'screen5-works' as ScreenView, label: 'Screen 5: Selected Works (2021—Present)', desc: 'Hogan-Smith Law, EarlyBird, HQZen, Cisco' },
    { id: 'screen3-about-labs' as ScreenView, label: 'Screen 3: About, Arsenal & Labs', desc: 'Full-stack toolkit & live interactive engineering sandboxes' },
    { id: 'screen4-contact' as ScreenView, label: 'Screen 4: Establish Resonance (Contact)', desc: 'Tactile transmission interface (Cebu Node)' },
    { id: 'lab-sandbox' as ScreenView, label: 'Engineering Sandbox: Outbox, Playwright & AI', desc: 'Live transactional outbox, test runner & AI parser' },
  ];

  const handleNavClick = (view: ScreenView) => {
    onSelectView(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#f7f9fb]/90 backdrop-blur-xl border-b border-[#c7c4d8] transition-all">
        <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-16 py-4 flex items-center justify-between">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('all')}
              className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
              title="Return to Home"
            >
              {/* Mountain Vector Icon from Screen 1 */}
              <div className="w-10 h-8 relative flex items-center justify-center">
                <svg viewBox="0 0 100 65" className="w-full h-full" fill="none">
                  {/* Left Triangle */}
                  <polygon
                    points="8,58 38,12 68,58"
                    fill="rgba(186, 230, 253, 0.4)"
                    stroke="#3525cd"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  {/* Right Overlapping Triangle */}
                  <polygon
                    points="34,58 64,18 94,58"
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  {/* Internal Ridge Line */}
                  <line
                    x1="38"
                    y1="12"
                    x2="52"
                    y2="58"
                    stroke="#3525cd"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>

              {/* Wordmark */}
              <div className="flex flex-col">
                <span className="font-display text-2xl md:text-3xl font-bold tracking-tight text-primary transition-transform group-hover:scale-[0.98]">
                  JV
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-outline-variant -mt-1 hidden sm:inline">
                  Caballero // Dev
                </span>
              </div>
            </button>

            {/* Screen Mode Switcher Pill */}
            <div className="relative ml-2 hidden sm:block">
              <button
                onClick={() => setViewMenuOpen(!viewMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-primary bg-[#bae6fd]/30 hover:bg-[#bae6fd]/60 border border-primary rounded-sm transition-colors"
                title="Switch between specific mockups or view all"
              >
                <Layers className="w-3 h-3 text-primary" />
                <span>
                  {currentView === 'all'
                    ? 'All Screens'
                    : currentView === 'screen1-hero'
                    ? 'Screen 1: Hero'
                    : currentView === 'screen2-hero-alt'
                    ? 'Screen 2: Editorial'
                    : currentView === 'screen5-works'
                    ? 'Screen 5: Works'
                    : currentView === 'screen3-about-labs'
                    ? 'Screen 3: About/Labs'
                    : currentView === 'screen4-contact'
                    ? 'Screen 4: Contact'
                    : 'Lab Sandbox'}
                </span>
                <span className="text-[10px] opacity-60">▾</span>
              </button>

              {/* Dropdown Menu */}
              {viewMenuOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-surface-container-lowest border border-primary shadow-xl rounded-sm p-2 z-50 font-body">
                  <div className="px-2 py-1.5 border-b border-outline-variant font-mono text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">
                    Screen Archetype Switcher
                  </div>
                  <div className="py-1 space-y-1">
                    {screenPresets.map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => {
                          onSelectView(preset.id);
                          setViewMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-sm text-xs transition-colors flex flex-col ${
                          currentView === preset.id
                            ? 'bg-primary text-on-primary font-medium'
                            : 'text-on-surface hover:bg-secondary-container/30'
                        }`}
                      >
                        <span className="font-semibold">{preset.label}</span>
                        <span
                          className={`text-[10px] ${
                            currentView === preset.id
                              ? 'text-primary-fixed-dim'
                              : 'text-on-surface-variant'
                          }`}
                        >
                          {preset.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('all')}
              className={`nav-link font-mono text-xs uppercase tracking-widest transition-colors ${
                currentView === 'all'
                  ? 'text-primary font-bold active'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Overview
            </button>

            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link font-mono text-xs uppercase tracking-widest transition-colors ${
                  currentView === item.id
                    ? 'text-primary font-bold active'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Hire Me Action */}
            <button
              onClick={onOpenHireModal}
              className="ml-4 px-6 py-2.5 bg-primary text-on-primary font-mono text-xs uppercase tracking-widest border border-primary hover:bg-secondary-container hover:text-primary hover:border-primary transition-all duration-300 transform active:scale-95 shadow-sm rounded-sm flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenHireModal}
              className="px-3 py-1.5 bg-primary text-on-primary font-mono text-[11px] uppercase tracking-wider rounded-sm"
            >
              Hire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary p-1.5 focus:outline-none hover:bg-secondary-container/20 rounded"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-surface-container-lowest/98 backdrop-blur-2xl border-b border-primary p-6 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="border-b border-outline-variant pb-2 font-mono text-xs uppercase text-on-surface-variant tracking-wider">
              Navigation Menu
            </div>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick('all')}
                className="flex items-center gap-3 p-3 rounded text-left font-display text-lg text-primary hover:bg-secondary-container/30"
              >
                <Home className="w-5 h-5 text-primary" />
                <span>Full Portfolio View</span>
              </button>
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center gap-3 p-3 rounded text-left font-display text-lg text-on-surface hover:text-primary hover:bg-secondary-container/30"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-outline-variant">
              <span className="font-mono text-[11px] uppercase text-on-surface-variant block mb-2">
                Screen Presets
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {screenPresets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleNavClick(preset.id)}
                    className="text-left text-xs p-2 rounded bg-surface-container-low text-on-surface hover:bg-secondary-container/40 flex justify-between items-center"
                  >
                    <span className="truncate">{preset.label}</span>
                    <span className="font-mono text-[10px] text-primary">SELECT →</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-outline-variant">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHireModal();
              }}
              className="w-full py-3 bg-primary text-on-primary font-mono text-xs uppercase tracking-widest text-center rounded-sm"
            >
              Establish Connection (Hire Me)
            </button>
          </div>
        </div>
      )}
    </>
  );
};
