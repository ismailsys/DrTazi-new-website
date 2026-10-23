import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AVANT_APRES_ITEMS } from '../data/drtaziData';
import { PageRoute } from '../types/data';

interface AvantApresSectionProps {
  onNavigate?: (path: PageRoute) => void;
  onSelectIntervention?: (item: string) => void;
}

export const AvantApresSection: React.FC<AvantApresSectionProps> = ({ onNavigate }) => {
  // 4 featured cards for home section
  const featuredCases = AVANT_APRES_ITEMS.slice(0, 4);

  const handleNavigateGallery = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/avant-apres');
    }
  };

  return (
    <section className="bg-accent/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow text-primary">Avant – Après</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Des résultats réels, documentés et confidentiels
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Exemples d'opérations effectuées par Dr. Hassan TAZI. Comparez avant et après grâce à notre comparateur interactif.
          </p>
        </div>

        {/* 4 Featured Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCases.map((c) => (
            <figure
              key={c.id}
              onClick={handleNavigateGallery}
              className="group overflow-hidden rounded-3xl border border-border bg-card cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.afterUrl}
                  alt={c.title}
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-widest text-white">
                  Avant
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-widest text-primary-foreground">
                  Après
                </span>
              </div>
              <figcaption className="p-4 text-center text-xs font-semibold text-foreground">
                {c.title}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Button to Full Gallery */}
        <div className="mt-10 text-center">
          <a
            href="/avant-apres"
            onClick={handleNavigateGallery}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-6 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:-translate-y-0.5 hover:border-primary cursor-pointer"
          >
            Voir toute la galerie
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
