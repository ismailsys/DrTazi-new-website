import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { QUESTIONS_REPONSES, CONTACT_INFO } from '../data/drtaziData';
import { ConsultationFormSection } from '../components/ConsultationFormSection';
import { PageRoute } from '../types/data';

interface QuestionsReponsesPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const QuestionsReponsesPage: React.FC<QuestionsReponsesPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="animate-fadeIn">
      {/* Dark Hero */}
      <section className="bg-ink py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-primary">FAQ · Interview du Dr. Tazi</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Questions & Réponses
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Dr El Hassane Tazi est spécialiste, diplômé de médecine de Montpellier, en chirurgie plastique et esthétique. Avec lui, nous vous proposons de faire un tour d'horizon d'une discipline peu connue ou méconnue chez nous.
          </p>
        </div>
      </section>

      {/* Main Section: 2 Columns */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            
            {/* Left Column: Quote & Direct Question Card */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                « Le spectre du bistouri a laissé place à un climat de confiance. »
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Retoucher aujourd'hui son corps au gré de ses imperfections, de ses désirs et de ses complexes n'est plus une tâche impossible. De plus en plus de gens ont recours à la chirurgie esthétique pour corriger des défauts acquis à la naissance, à l'adolescence ou encore à l'âge adulte. Améliorer son apparence pour une meilleure image de soi est désormais un acte anodin. Le spectre du bistouri a laissé place à un climat de confiance.
              </p>

              {/* Box: Une question personnelle ? */}
              <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Une question personnelle ?
                </h3>
                <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                  Chaque projet chirurgical commence par une consultation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#consultation"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('consultation');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:brightness-105"
                  >
                    Prendre RDV
                  </a>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappClean}?text=Bonjour%20Dr.%20Tazi,%20j'ai%20une%20question%20personnelle`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/40 px-5 py-2.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: 8 Accordion Items (Q1 to Q8) */}
            <div className="space-y-3">
              {QUESTIONS_REPONSES.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-border bg-card overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left cursor-pointer hover:bg-accent/30 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-display text-base font-bold text-primary shrink-0 mt-0.5">
                          Q{idx + 1}
                        </span>
                        <span className="text-sm font-medium text-foreground leading-snug">
                          {item.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-primary' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-border/60 bg-muted/20 px-5 py-4 text-xs sm:text-sm text-muted-foreground leading-relaxed animate-fadeIn">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Consultation Form */}
      <ConsultationFormSection />
    </div>
  );
};
