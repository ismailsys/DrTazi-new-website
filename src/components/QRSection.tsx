import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DR_TAZI_PROFILE } from '../data/drtaziData';
import { PageRoute } from '../types/data';

interface QRSectionProps {
  onNavigate?: (path: PageRoute) => void;
}

export const QRSection: React.FC<QRSectionProps> = ({ onNavigate }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/questions-reponses');
    }
  };

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        
        {/* Left Column: Heading, intro, quote box, and CTA */}
        <div>
          <div className="max-w-2xl">
            <p className="eyebrow text-primary">Questions – Réponses</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Une discipline méconnue, expliquée par le Dr. Tazi
            </h2>
          </div>
          
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Le Dr El Hassane Tazi, spécialiste diplômé de médecine de Montpellier, vous propose un tour d'horizon de la chirurgie esthétique : la confiance, l'harmonie naturelle, la recherche continue et la déontologie.
          </p>

          <div className="mt-6 rounded-2xl border border-border bg-card p-6">
            <blockquote className="font-display text-lg italic text-foreground sm:text-xl">
              « {DR_TAZI_PROFILE.quote} »
            </blockquote>
            <p className="mt-3 text-xs font-bold uppercase tracking-wider text-primary">
              — {DR_TAZI_PROFILE.name}
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/questions-reponses"
              onClick={handleClick}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Lire l'interview complète
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Photo of Dr. Tazi simple */}
        <div className="relative">
          <img
            src={DR_TAZI_PROFILE.photoSuitUrl}
            alt="Dr. El Hassan Tazi"
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-[0_40px_80px_-40px_rgba(0,0,0,0.4)]"
          />
        </div>

      </div>
    </section>
  );
};
