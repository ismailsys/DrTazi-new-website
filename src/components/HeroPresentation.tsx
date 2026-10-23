import React from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { DR_TAZI_PROFILE, CONTACT_INFO } from '../data/drtaziData';

interface HeroPresentationProps {
  onOpenConsultation?: () => void;
}

export const HeroPresentation: React.FC<HeroPresentationProps> = ({ onOpenConsultation }) => {
  const handleScrollToConsultation = (e: React.MouseEvent) => {
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
    <section className="relative overflow-hidden bg-ink">
      {/* Background ambient blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-[30rem] w-[30rem] rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        
        {/* Left Column: Heading, Subtitle, Bio, Checkpoints, CTAs */}
        <div>
          <p className="eyebrow text-primary">Casablanca · Clinique des Spécialités Achifaa</p>
          
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl">
            {DR_TAZI_PROFILE.name}
          </h1>
          
          <p className="mt-3 font-display text-2xl italic text-primary sm:text-3xl">
            {DR_TAZI_PROFILE.subtitle}
          </p>
          
          <p className="mt-6 text-sm leading-relaxed text-white/75 sm:text-base">
            {DR_TAZI_PROFILE.bio}
          </p>

          <ul className="mt-8 grid gap-3 text-xs text-white/85 sm:grid-cols-2">
            {DR_TAZI_PROFILE.checkpoints.map((pt, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#consultation"
              onClick={handleScrollToConsultation}
              className="rounded-full bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-[0_20px_40px_-15px_rgba(182,137,76,0.6)] transition-all hover:-translate-y-0.5 hover:brightness-105 cursor-pointer"
            >
              Prendre RDV
            </a>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappClean}?text=Bonjour%20Dr.%20Tazi,%20je%20souhaite%20des%20renseignements`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold text-white transition-all hover:border-emerald-500 hover:text-emerald-400"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              WhatsApp {CONTACT_INFO.whatsapp}
            </a>
          </div>
        </div>

        {/* Right Column: Doctor's Cutout Portrait with backdrop glow */}
        <div className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 -bottom-6 rounded-full bg-primary/20 blur-2xl" />
            <img
              src={DR_TAZI_PROFILE.portraitUrl}
              alt="Dr. El Hassan Tazi, chirurgien plasticien"
              className="relative mx-auto max-h-[30rem] w-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)]"
              loading="eager"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
