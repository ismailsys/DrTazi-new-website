import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SPECIALTIES } from '../data/drtaziData';
import { PageRoute } from '../types/data';

interface SpecialtiesSectionProps {
  onNavigate?: (path: PageRoute) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onNavigate }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/specialites');
    }
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow text-primary">Nos spécialités</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Quatre pôles d'excellence chirurgicale et médicale
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            De la chirurgie des seins à la chirurgie du corps, en passant par le visage et les soins esthétiques, chaque prise en charge est sur-mesure.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALTIES.map((spec) => (
            <a
              key={spec.id}
              href="/specialites"
              onClick={handleClick}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)] cursor-pointer"
            >
              <span className="font-display text-4xl font-semibold text-primary/30">
                {spec.number}
              </span>
              
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-foreground">
                {spec.title}
              </h3>
              
              <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground">
                {spec.shortDescription}
              </p>

              <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                Découvrir
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
