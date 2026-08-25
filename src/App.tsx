import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ScreenView, Project, LabExperiment, TransmissionLog } from './types';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { EstablishResonanceContact } from './components/EstablishResonanceContact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { InteractiveLabModal } from './components/InteractiveLabModal';
import { ResumeModal } from './components/ResumeModal';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<ScreenView>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedLabExp, setSelectedLabExp] = useState<LabExperiment | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [notificationToast, setNotificationToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotificationToast(msg);
    setTimeout(() => setNotificationToast(null), 3500);
  };

  const handleSelectView = (view: ScreenView) => {
    setCurrentView(view);
    if (view === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Attempt smooth scroll if sections exist in DOM
    const sectionMap: Record<string, string> = {
      'case-studies': 'case-studies-section',
      'projects': 'projects-section',
      'about': 'about-section',
      'contact': 'contact-section',
    };

    const targetId = sectionMap[view];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el && currentView === 'home') {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreCaseStudies = () => {
    const el = document.getElementById('case-studies-section');
    if (el && currentView === 'home') {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentView('case-studies');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact-section');
    if (el && currentView === 'home') {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentView('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTransmissionComplete = (log: TransmissionLog) => {
    showToast(`Transmission packet ${log.id} confirmed to John Vincent Caballero in Cebu!`);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 14, scale: 0.995 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -10, scale: 0.995, transition: { duration: 0.2, ease: [0.7, 0, 0.84, 0] } },
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-primary flex flex-col justify-between transition-colors duration-300 relative overflow-x-hidden">
      {/* Uniform Blueprint Grid Background across all views */}
      <div className="fixed inset-0 bg-blueprint-grid opacity-70 pointer-events-none z-0" />

      {/* Top Fixed Navigation Header */}
      <Navigation
        currentView={currentView}
        onSelectView={handleSelectView}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 w-full pt-16 relative z-10">
        <AnimatePresence mode="wait">
          {/* VIEW: HOME ONLY */}
          {currentView === 'home' && (
            <motion.div
              key="view-home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <HeroSection
                onExploreWork={handleExploreCaseStudies}
                onOpenHire={handleOpenContact}
                variant="screen1"
              />
            </motion.div>
          )}

          {/* VIEW: CASE STUDIES ONLY */}
          {currentView === 'case-studies' && (
            <motion.div
              key="view-case-studies"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="min-h-[85vh] w-full"
            >
              <CaseStudiesSection onSelectProject={setSelectedProject} />
            </motion.div>
          )}

          {/* VIEW: PROJECTS & LAB EXPERIMENTS ONLY */}
          {currentView === 'projects' && (
            <motion.div
              key="view-projects"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="min-h-[85vh] w-full"
            >
              <ProjectsSection
                onSelectProject={setSelectedProject}
                onOpenLabExperiment={setSelectedLabExp}
              />
            </motion.div>
          )}

          {/* VIEW: ABOUT ONLY */}
          {currentView === 'about' && (
            <motion.div
              key="view-about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="min-h-[85vh] w-full"
            >
              <AboutSection
                onOpenResume={() => setIsResumeOpen(true)}
                onSelectContact={handleOpenContact}
              />
            </motion.div>
          )}

          {/* VIEW: CONTACT ONLY */}
          {currentView === 'contact' && (
            <motion.div
              key="view-contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="min-h-[85vh] w-full"
            >
              <EstablishResonanceContact onTransmissionComplete={handleTransmissionComplete} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Interactive Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenHire={handleOpenContact}
      />

      <InteractiveLabModal
        experiment={selectedLabExp}
        onClose={() => setSelectedLabExp(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenHire={handleOpenContact}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {notificationToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-5 py-3 rounded-sm shadow-xl font-mono text-xs flex items-center gap-2.5 border border-primary-container"
          >
            <CheckCircle2 className="w-4 h-4 text-secondary-container animate-pulse" />
            <span>{notificationToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer (displayed on subpages) */}
      {currentView !== 'home' && <Footer onSelectView={handleSelectView} />}
    </div>
  );
}

export default App;
