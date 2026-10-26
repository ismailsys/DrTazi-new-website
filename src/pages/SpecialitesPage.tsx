import React, { useState } from 'react';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { SPECIALTIES, CONTACT_INFO } from '../data/drtaziData';
import { PageRoute } from '../types/data';

interface SpecialitesPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const SpecialitesPage: React.FC<SpecialitesPageProps> = ({ onNavigate }) => {
  const [activePoleId, setActivePoleId] = useState<string>('seins');

  const activePole = SPECIALTIES.find((s) => s.id === activePoleId) || SPECIALTIES[0];

  return (
    <div className="animate-fadeIn">
      {/* Dark Hero */}
      <section className="bg-ink py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-primary">Nos spécialités</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Découvrez nos spécialités
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Quatre pôles d'excellence, une même exigence : un résultat naturel, harmonieux et adapté à chaque patient.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {SPECIALTIES.map((spec) => {
              const isSelected = activePoleId === spec.id;
              return (
                <button
                  key={spec.id}
                  onClick={() => setActivePoleId(spec.id)}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'border border-border bg-card text-foreground hover:border-primary/50'
                  }`}
                >
                  {spec.title}
                </button>
              );
            })}
          </div>

          {/* Active Pôle Highlight Card */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm mb-16">
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5">
                <p className="eyebrow text-primary">PÔLE</p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-foreground">
                  {activePole.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {activePole.shortDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/contact');
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:brightness-105"
                  >
                    Consulter pour ce pôle
                  </a>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappClean}?text=Bonjour%20Dr.%20Tazi,%20je%20souhaite%20des%20informations%20sur%20${encodeURIComponent(activePole.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/40 px-5 py-2.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Procedures Pills in Active Card */}
              <div className="lg:col-span-7 grid gap-3 sm:grid-cols-2">
                {activePole.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-2xl border border-border bg-background p-3.5 text-xs sm:text-sm font-medium text-foreground"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Comprehensive Cards Grid below */}
          <div className="grid gap-6 md:grid-cols-2">
            {SPECIALTIES.map((spec) => (
              <div
                key={spec.id}
                className="rounded-3xl border border-border bg-card p-6 sm:p-8 transition-shadow hover:shadow-md"
              >
                <p className="eyebrow text-primary">PÔLE {spec.title.toUpperCase()}</p>
                <h3 className="mt-2 font-display text-xl sm:text-2xl font-semibold text-foreground">
                  {spec.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {spec.items.map((it, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
