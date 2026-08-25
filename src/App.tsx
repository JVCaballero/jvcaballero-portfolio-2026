import React, { useState, useEffect } from 'react';
import { ScreenView, Project, LabExperiment, TransmissionLog } from './types';
import { PROJECTS_DATA, LAB_EXPERIMENTS } from './data/portfolioData';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { SelectedWorksSection } from './components/SelectedWorksSection';
import { AboutLabsSection } from './components/AboutLabsSection';
import { EstablishResonanceContact } from './components/EstablishResonanceContact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { InteractiveLabModal } from './components/InteractiveLabModal';
import { ResumeModal } from './components/ResumeModal';
import { Sparkles, CheckCircle2, FlaskConical } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<ScreenView>('all');
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreWork = () => {
    const el = document.getElementById('selected-works-section');
    if (el && currentView === 'all') {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentView('screen5-works');
    }
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact-section');
    if (el && currentView === 'all') {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentView('screen4-contact');
    }
  };

  const handleTransmissionComplete = (log: TransmissionLog) => {
    showToast(`Transmission packet ${log.id} confirmed to John Vincent Caballero in Cebu!`);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-primary flex flex-col justify-between">
      {/* Top Fixed Navigation Header */}
      <Navigation
        currentView={currentView}
        onSelectView={handleSelectView}
        onOpenHire={handleOpenContact}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 w-full pt-16">
        {/* VIEW 1: ALL-IN-ONE (UNIFIED EXPERIENCE) */}
        {currentView === 'all' && (
          <div>
            <HeroSection
              onExploreWork={handleExploreWork}
              onOpenHire={handleOpenContact}
              variant="screen1"
            />
            <SelectedWorksSection onSelectProject={setSelectedProject} />
            <AboutLabsSection
              onOpenResume={() => setIsResumeOpen(true)}
              onOpenLabExperiment={setSelectedLabExp}
              onSelectContact={handleOpenContact}
            />
            <EstablishResonanceContact onTransmissionComplete={handleTransmissionComplete} />
          </div>
        )}

        {/* VIEW 2: SCREEN 1 (HERO & VECTOR AVATAR FOCUS) */}
        {currentView === 'screen1-hero' && (
          <div className="min-h-[85vh] flex flex-col justify-center">
            <HeroSection
              onExploreWork={() => setCurrentView('screen5-works')}
              onOpenHire={handleOpenContact}
              variant="screen1"
            />
          </div>
        )}

        {/* VIEW 3: SCREEN 2 (EDITORIAL FRAME HERO FOCUS) */}
        {currentView === 'screen2-hero-alt' && (
          <div className="min-h-[85vh] flex flex-col justify-center">
            <HeroSection
              onExploreWork={() => setCurrentView('screen5-works')}
              onOpenHire={handleOpenContact}
              variant="screen2"
            />
          </div>
        )}

        {/* VIEW 4: SCREEN 5 (SELECTED WORKS 2021—2024 FOCUS) */}
        {currentView === 'screen5-works' && (
          <div className="min-h-[85vh] py-8">
            <SelectedWorksSection onSelectProject={setSelectedProject} />
          </div>
        )}

        {/* VIEW 5: SCREEN 3 (ABOUT & THE LABORATORY FOCUS) */}
        {currentView === 'screen3-about-labs' && (
          <div className="min-h-[85vh] py-8">
            <AboutLabsSection
              onOpenResume={() => setIsResumeOpen(true)}
              onOpenLabExperiment={setSelectedLabExp}
              onSelectContact={handleOpenContact}
              standalone={true}
            />
          </div>
        )}

        {/* VIEW 6: SCREEN 4 (ESTABLISH RESONANCE CONTACT FOCUS) */}
        {currentView === 'screen4-contact' && (
          <div className="min-h-[85vh] py-8">
            <EstablishResonanceContact onTransmissionComplete={handleTransmissionComplete} />
          </div>
        )}

        {/* VIEW 7: LAB SANDBOX DIRECT LAUNCHER */}
        {currentView === 'lab-sandbox' && (
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest border border-primary/40 rounded-sm mb-3">
                <FlaskConical className="w-3.5 h-3.5 text-primary" />
                <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                  INTERACTIVE LABORATORY
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-medium text-on-surface">
                Engineering Laboratory & Live Sandboxes
              </h2>
              <p className="font-body text-base text-on-surface-variant max-w-xl mt-2">
                Simulate transactional outbox workers, run multi-role Playwright test matrices, and execute structured AI Kanban prompt parsers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LAB_EXPERIMENTS.map((exp) => (
                <div
                  key={exp.id}
                  onClick={() => setSelectedLabExp(exp)}
                  className="bg-surface-container-lowest border border-primary p-6 rounded-sm shadow-[8px_8px_0px_0px_#bae6fd] hover:shadow-[12px_12px_0px_0px_#bae6fd] hover:-translate-y-1 transition-all cursor-pointer group"
                >
                  <div className="font-mono text-xs text-primary font-bold mb-2">
                    [{exp.expNumber}]
                  </div>
                  <h3 className="font-display text-2xl font-medium text-on-surface group-hover:text-primary mb-2">
                    {exp.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant mb-6">
                    {exp.description}
                  </p>
                  <span className="px-4 py-2 bg-primary text-on-primary font-mono text-xs uppercase tracking-wider rounded-xs inline-block">
                    LAUNCH SANDBOX →
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
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
      {notificationToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-5 py-3 rounded-sm shadow-xl font-mono text-xs flex items-center gap-2 border border-primary-container animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-4 h-4 text-secondary-container" />
          <span>{notificationToast}</span>
        </div>
      )}

      {/* Footer */}
      <Footer onSelectView={handleSelectView} onOpenHire={handleOpenContact} />
    </div>
  );
}

export default App;
