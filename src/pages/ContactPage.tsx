import React from 'react';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data/drtaziData';
import { ConsultationFormSection } from '../components/ConsultationFormSection';
import { PageRoute } from '../types/data';

interface ContactPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="animate-fadeIn">
      {/* Dark Hero */}
      <section className="bg-ink py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-primary">Contact & accès</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Prenons rendez-vous
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Le cabinet vous accueille à la Clinique des Spécialités Achifaa, en face de l'Hôpital 20 Août, à Casablanca.
          </p>
        </div>
      </section>

      {/* Main Grid: Left Details & Map, Right Full Booking Form */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            
            {/* Left Column (5 cols): Info Card & Map */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Contact Card */}
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                <div className="space-y-6">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-soft text-primary">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="text-sm font-semibold text-foreground">
                        {CONTACT_INFO.clinicName}
                      </h2>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone 1 */}
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-soft text-primary">
                      <Phone className="h-5 w-5" />
                    </span>
                    <a
                      href={`tel:${CONTACT_INFO.phones[0].replace(/[\s()]/g, '')}`}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {CONTACT_INFO.phones[0]}
                    </a>
                  </div>

                  {/* Phone 2 */}
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-soft text-primary">
                      <Phone className="h-5 w-5" />
                    </span>
                    <a
                      href={`tel:${CONTACT_INFO.phones[1].replace(/[\s()]/g, '')}`}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {CONTACT_INFO.phones[1]}
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappClean}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-foreground hover:text-emerald-600 transition-colors"
                    >
                      WhatsApp {CONTACT_INFO.whatsapp}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-soft text-primary">
                      <Mail className="h-5 w-5" />
                    </span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>

                </div>

                {/* Big Action Buttons Row */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${CONTACT_INFO.phones[0].replace(/[\s()]/g, '')}`}
                    className="flex items-center justify-center gap-2 rounded-full bg-[#9c7237] py-3 text-xs font-bold uppercase tracking-wider text-white hover:brightness-105"
                  >
                    <Phone className="h-4 w-4" /> Appeler
                  </a>

                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappClean}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-emerald-700 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-800"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp direct
                  </a>
                </div>

              </div>

              {/* OpenStreetMap Box */}
              <div className="overflow-hidden rounded-3xl border border-border shadow-sm min-h-[18rem]">
                <iframe
                  title="Clinique des Spécialités Achifaa — Casablanca"
                  src={CONTACT_INFO.openStreetMapUrl}
                  className="h-full min-h-[18rem] w-full border-0"
                  loading="lazy"
                />
              </div>

            </div>

            {/* Right Column (7 cols): Full Consultation Form */}
            <div className="lg:col-span-7">
              <ConsultationFormSection isCompact />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
