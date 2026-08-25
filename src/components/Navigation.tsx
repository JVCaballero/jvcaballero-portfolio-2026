import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScreenView } from '../types';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, FolderKanban, BookOpen, User, Send, Home } from 'lucide-react';

interface NavigationProps {
  currentView: ScreenView;
  onSelectView: (view: ScreenView) => void;
  onOpenHire?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentView,
  onSelectView,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  const navLinks = [
    { id: 'case-studies' as ScreenView, label: 'Case Studies', icon: BookOpen },
    { id: 'projects' as ScreenView, label: 'Projects', icon: FolderKanban },
    { id: 'about' as ScreenView, label: 'About', icon: User },
    { id: 'contact' as ScreenView, label: 'Contact', icon: Send },
  ];

  const handleNavClick = (view: ScreenView) => {
    onSelectView(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-16 py-3.5 flex items-center justify-between">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
              title="Return to Home"
            >
              {/* Mountain Vector Icon */}
              <div className="w-10 h-8 relative flex items-center justify-center">
                <svg viewBox="0 0 100 65" className="w-full h-full transition-transform duration-300 group-hover:scale-105" fill="none">
                  {/* Left Triangle */}
                  <polygon
                    points="8,58 38,12 68,58"
                    fill={isDark ? 'rgba(96, 165, 250, 0.2)' : 'rgba(186, 230, 253, 0.4)'}
                    stroke="var(--color-primary)"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    className="transition-colors duration-300"
                  />
                  {/* Right Overlapping Triangle */}
                  <polygon
                    points="34,58 64,18 94,58"
                    fill="none"
                    stroke="var(--color-primary-container)"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    className="transition-colors duration-300"
                  />
                  {/* Internal Ridge Line */}
                  <line
                    x1="38"
                    y1="12"
                    x2="52"
                    y2="58"
                    stroke="var(--color-primary)"
                    strokeWidth="2.5"
                    className="transition-colors duration-300"
                  />
                </svg>
              </div>

              {/* Wordmark */}
              <div className="flex flex-col">
                <span className="font-display text-2xl md:text-3xl font-bold tracking-tight text-primary transition-transform group-hover:text-primary-container">
                  JV
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-outline-variant -mt-1 hidden sm:inline transition-colors group-hover:text-primary">
                  Caballero // Dev
                </span>
              </div>
            </motion.button>
          </div>

          {/* Desktop Nav Links & Subtle Theme Switcher */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => handleNavClick('home')}
              className={`relative px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-xs ${
                currentView === 'home'
                  ? 'text-primary font-bold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="relative z-10">Home</span>
              {currentView === 'home' && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-secondary-container/60 border border-primary/40 rounded-xs -z-0"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
            </motion.button>

            {navLinks.map((item) => {
              const isActive = currentView === item.id;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-xs ${
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span>{item.label}</span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-secondary-container/60 border border-primary/40 rounded-xs -z-0"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </motion.button>
              );
            })}

            {/* Subtle Theme Switcher Toggle */}
            <div className="pl-4">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Header Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle compact={true} />
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary p-1.5 focus:outline-none hover:bg-secondary-container/20 rounded cursor-pointer transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[61px] z-40 bg-surface/98 backdrop-blur-2xl border-b border-outline-variant p-6 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-outline-variant pb-2">
                <span className="font-mono text-xs uppercase text-on-surface-variant tracking-wider">
                  Navigation
                </span>
                <ThemeToggle />
              </div>

              <div className="flex flex-col space-y-2">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleNavClick('home')}
                  className={`flex items-center gap-3 p-3 rounded text-left font-display text-lg hover:bg-secondary-container/30 cursor-pointer transition-colors ${
                    currentView === 'home' ? 'text-primary font-semibold bg-secondary-container/20' : 'text-on-surface'
                  }`}
                >
                  <Home className="w-5 h-5 text-primary" />
                  <span>Home</span>
                </motion.button>
                {navLinks.map((item) => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 p-3 rounded text-left font-display text-lg hover:text-primary hover:bg-secondary-container/30 cursor-pointer transition-colors ${
                      currentView === item.id ? 'text-primary font-semibold bg-secondary-container/20' : 'text-on-surface'
                    }`}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

