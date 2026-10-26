import React from 'react';
import { MapPin, Phone, MessageCircle, ArrowRight, GraduationCap } from 'lucide-react';
import { CONTACT_INFO } from '../data/drtaziData';
import { PageRoute } from '../types/data';

interface ContactExactSectionProps {
  onNavigate?: (path: PageRoute) => void;
}

export const ContactExactSection: React.FC<ContactExactSectionProps> = ({ onNavigate }) => {
  const handlePageContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/contact');
    }
  };

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        
        {/* Left Column: Clinic Contact Details */}
        <div>
          <div className="max-w-2xl">
            <p className="eyebrow text-primary">Contact & accès</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Clinique des Spécialités Achifaa
            </h2>
          </div>

          <ul className="mt-8 space-y-5 text-sm text-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <strong className="font-semibold">{CONTACT_INFO.clinicName}</strong>
                <br />
                <span className="text-muted-foreground">{CONTACT_INFO.address}</span>
              </span>
            </li>
            
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <a
                href={`tel:${CONTACT_INFO.phones[0].replace(/[\s()]/g, '')}`}
                className="font-semibold hover:text-primary transition-colors"
              >
                {CONTACT_INFO.phones[0]}
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <a
                href={`tel:${CONTACT_INFO.phones[1].replace(/[\s()]/g, '')}`}
                className="font-semibold hover:text-primary transition-colors"
              >
                {CONTACT_INFO.phones[1]}
              </a>
            </li>

            <li className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappClean}`}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-emerald-700 hover:text-emerald-600 transition-colors"
              >
                WhatsApp {CONTACT_INFO.whatsapp}
              </a>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${CONTACT_INFO.phones[0].replace(/[\s()]/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Appeler le cabinet
            </a>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappClean}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-600/40 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-600 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp direct
            </a>

            <a
              href="/contact"
              onClick={handlePageContact}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent cursor-pointer"
            >
              Page contact
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <GraduationCap className="h-8 w-8 shrink-0 text-primary" />
            <p className="text-xs leading-relaxed text-muted-foreground">
              Toutes les interventions sont précédées d'une consultation obligatoire au cours de laquelle le Dr. Tazi établit un plan de traitement personnalisé.
            </p>
          </div>
        </div>

        {/* Right Column: OpenStreetMap Embed */}
        <div className="overflow-hidden rounded-3xl border border-border shadow-[0_40px_80px_-40px_rgba(0,0,0,0.3)]">
          <iframe
            title="Clinique des Spécialités Achifaa — Casablanca"
            src={CONTACT_INFO.openStreetMapUrl}
            className="h-full min-h-[24rem] w-full border-0"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};
