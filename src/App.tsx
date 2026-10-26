import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroPresentation } from './components/HeroPresentation';
import { ConsultationFormSection } from './components/ConsultationFormSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { AvantApresSection } from './components/AvantApresSection';
import { QRSection } from './components/QRSection';
import { VideothequeSection } from './components/VideothequeSection';
import { ContactExactSection } from './components/ContactExactSection';
import { PreFooterCta } from './components/PreFooterCta';
import { FooterExact } from './components/FooterExact';

import { SpecialitesPage } from './pages/SpecialitesPage';
import { AvantApresPage } from './pages/AvantApresPage';
import { QuestionsReponsesPage } from './pages/QuestionsReponsesPage';
import { VideothequePage } from './pages/VideothequePage';
import { ActualitesPage } from './pages/ActualitesPage';
import { ContactPage } from './pages/ContactPage';

import { PageRoute } from './types/data';

export default function App() {
  const getRouteFromUrl = (): PageRoute => {
    const p = window.location.pathname;
    const h = window.location.hash;
    const combined = `${p} ${h}`.toLowerCase();
    if (combined.includes('specialites')) return '/specialites';
    if (combined.includes('avant-apres')) return '/avant-apres';
    if (combined.includes('questions-reponses') || combined.includes('qr')) return '/questions-reponses';
    if (combined.includes('videotheque')) return '/videotheque';
    if (combined.includes('actualites')) return '/actualites';
    if (combined.includes('contact')) return '/contact';
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<PageRoute>(getRouteFromUrl);

  const [toastNotification, setToastNotification] = useState<string | null>(null);

  // Sync with browser back/forward buttons and hashchange
  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentPath(getRouteFromUrl());
    };
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handleNavigate = (path: PageRoute) => {
    setCurrentPath(path);
    try {
      const isSubpath = window.location.pathname.includes('/DrTazi-new-website');
      if (isSubpath) {
        window.location.hash = path === '/' ? '' : path.replace(/^\//, '');
      } else {
        window.history.pushState({}, '', path);
      }
    } catch {
      // fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConsultationSuccess = (ref: string) => {
    setToastNotification(`Demande enregistrée avec succès (Réf : ${ref}). Le secrétariat vous contactera sous 24h.`);
    setTimeout(() => {
      setToastNotification(null);
    }, 7000);
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-foreground flex flex-col font-sans selection:bg-primary/20 selection:text-foreground">
      
      {/* Toast Notification */}
      {toastNotification && (
        <div
          className="fixed top-20 right-4 sm:right-8 z-50 bg-ink text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-primary/60 text-xs sm:text-sm flex items-center gap-3 animate-fadeIn max-w-md"
          role="status"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
          <span className="flex-1 font-light leading-snug">{toastNotification}</span>
          <button
            onClick={() => setToastNotification(null)}
            className="text-slate-400 hover:text-white ml-2 p-1 text-sm cursor-pointer"
            aria-label="Fermer la notification"
          >
            ✕
          </button>
        </div>
      )}

      {/* Global Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenRdv={() => handleNavigate('/contact')}
      />

      {/* Route Views */}
      <main className="flex-1">
        {currentPath === '/' && (
          <>
            {/* Section 1: Hero presentation */}
            <HeroPresentation onOpenConsultation={() => {}} />

            {/* Section 2: Quick Consultation Booking Form */}
            <ConsultationFormSection onSuccessSubmit={handleConsultationSuccess} />

            {/* Section 3: Nos Spécialités (01, 02, 03, 04) */}
            <SpecialtiesSection onNavigate={handleNavigate} />

            {/* Section 4: Avant – Après (3 Featured Clinical Cases + Button) */}
            <AvantApresSection onNavigate={handleNavigate} />

            {/* Section 5: Questions & Réponses (Editorial intro, quote, photo with badge) */}
            <QRSection onNavigate={handleNavigate} />

            {/* Section 6: Vidéothèque & revue de presse (3 video cards + 1 info card) */}
            <VideothequeSection onNavigate={handleNavigate} />

            {/* Section 7: Contact & Accès (Clinique Achifaa + OpenStreetMap) */}
            <ContactExactSection onNavigate={handleNavigate} />

            {/* Pre-footer Call to Action */}
            <PreFooterCta />
          </>
        )}

        {currentPath === '/specialites' && (
          <SpecialitesPage onNavigate={handleNavigate} />
        )}

        {currentPath === '/avant-apres' && (
          <AvantApresPage onNavigate={handleNavigate} />
        )}

        {currentPath === '/questions-reponses' && (
          <QuestionsReponsesPage onNavigate={handleNavigate} />
        )}

        {currentPath === '/videotheque' && (
          <VideothequePage onNavigate={handleNavigate} />
        )}

        {currentPath === '/actualites' && (
          <ActualitesPage onNavigate={handleNavigate} />
        )}

        {currentPath === '/contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <FooterExact onNavigate={handleNavigate} />

    </div>
  );
}
