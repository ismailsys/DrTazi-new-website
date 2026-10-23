import React from 'react';
import { CONTACT_INFO } from '../data/drtaziData';

interface PreFooterCtaProps {
  onOpenConsultation?: () => void;
}

export const PreFooterCta: React.FC<PreFooterCtaProps> = ({ onOpenConsultation }) => {
  const handleRdvClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenConsultation) {
      onOpenConsultation();
    }
    const target = document.getElementById('consultation');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-accent/60 py-14">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Prêt à retrouver l'harmonie qui vous ressemble ?
        </h2>
        
        <p className="text-sm text-muted-foreground">
          Prenez rendez-vous avec le Dr. El Hassan Tazi — consultation en présentiel à Casablanca ou premier échange par WhatsApp.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#consultation"
            onClick={handleRdvClick}
            className="rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Prendre RDV
          </a>
          
          <a
            href={`tel:${CONTACT_INFO.phones[0].replace(/[\s()]/g, '')}`}
            className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
          >
            {CONTACT_INFO.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
};
