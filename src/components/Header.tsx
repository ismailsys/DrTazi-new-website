import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/drtaziData';
import { PageRoute } from '../types/data';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: PageRoute) => void;
  onOpenRdv?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenRdv }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; path: PageRoute }[] = [
    { label: 'Accueil', path: '/' },
    { label: 'Spécialités', path: '/specialites' },
    { label: 'Avant-Après', path: '/avant-apres' },
    { label: 'Questions & Réponses', path: '/questions-reponses' },
    { label: 'Vidéothèque', path: '/videotheque' },
    { label: 'Actualités', path: '/actualites' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: PageRoute) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-shadow ${
        isScrolled
          ? 'bg-[#fafaf9]/95 border-[#e8e2d5] shadow-xs'
          : 'bg-[#fafaf9]/90 border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Brand wordmark matching Lovable logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="group flex flex-col items-start shrink-0 cursor-pointer"
          aria-label="Dr. El Hassan TAZI"
        >
          <div className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#1c2431] leading-tight">
            Dr. El Hassan <span className="text-primary font-bold">TAZI</span>
          </div>
          <div className="hidden sm:block text-[9px] tracking-widest uppercase text-[#6c7584] font-medium -mt-0.5">
            CHIRURGIE PLASTIQUE · ESTHÉTIQUE · OBÉSITÉ
          </div>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#1c2431]">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`transition-colors whitespace-nowrap cursor-pointer py-1 hover:text-primary ${
                  isActive ? 'text-primary font-semibold border-b-2 border-primary' : 'text-[#1c2431]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Circular WhatsApp Quick Button */}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappClean}?text=Bonjour%20Dr.%20Tazi`}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-emerald-600/40 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
            aria-label="WhatsApp Dr. Tazi"
          >
            <MessageCircle className="h-4 w-4" />
          </a>

          {/* Rounded Gold Action Button */}
          <a
            href="/contact"
            onClick={(e) => {
              if (onOpenRdv && currentPath === '/') {
                e.preventDefault();
                const consultationEl = document.getElementById('consultation');
                if (consultationEl) {
                  consultationEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleLinkClick(e, '/contact');
                }
              } else {
                handleLinkClick(e, '/contact');
              }
            }}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white hover:brightness-105 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
          >
            <Calendar className="h-3.5 w-3.5 text-white" />
            <span className="whitespace-nowrap">Prendre RDV</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#1c2431] hover:text-primary focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e8e2d5] px-6 py-5 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-3 text-sm font-medium text-[#1c2431]">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`py-2 border-b border-slate-100 cursor-pointer ${
                    isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-primary rounded-full text-center shadow-sm cursor-pointer"
              >
                Prendre RDV
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappClean}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-full text-center flex items-center justify-center gap-2 border border-emerald-200"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp direct
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
