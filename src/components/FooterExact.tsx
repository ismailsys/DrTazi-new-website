import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { DR_TAZI_PROFILE, CONTACT_INFO } from '../data/drtaziData';
import { PageRoute } from '../types/data';

interface FooterExactProps {
  onNavigate?: (path: PageRoute) => void;
}

export const FooterExact: React.FC<FooterExactProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, path: PageRoute) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <footer className="bg-ink text-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        
        {/* Col 1: Doctor branding, Bio, Social */}
        <div>
          <p className="font-display text-2xl font-semibold text-white">
            Dr. El Hassan <span className="text-primary">TAZI</span>
          </p>
          <p className="eyebrow mt-2 text-[0.6rem] text-white/50">
            Chirurgie plastique · esthétique · obésité
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {DR_TAZI_PROFILE.footerBio}
          </p>
          
          <div className="mt-6 flex gap-3">
            <a
              href={DR_TAZI_PROFILE.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href={DR_TAZI_PROFILE.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href={DR_TAZI_PROFILE.youtubeChannelUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary"
            >
              <Youtube className="h-4 w-4" />
            </a>

            <a
              href={DR_TAZI_PROFILE.wikipediaUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Wikipédia"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-bold text-white/70 transition-colors hover:border-primary hover:text-primary"
            >
              W
            </a>
          </div>
        </div>

        {/* Col 2: Contact & Accès */}
        <div>
          <p className="eyebrow text-primary">Contact & accès</p>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {CONTACT_INFO.clinicName}
                <br />
                {CONTACT_INFO.address}
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a
                href={`tel:${CONTACT_INFO.phones[0].replace(/[\s()]/g, '')}`}
                className="hover:text-primary transition-colors"
              >
                {CONTACT_INFO.phones[0]}
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a
                href={`tel:${CONTACT_INFO.phones[1].replace(/[\s()]/g, '')}`}
                className="hover:text-primary transition-colors"
              >
                {CONTACT_INFO.phones[1]}
              </a>
            </li>

            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappClean}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                WhatsApp {CONTACT_INFO.whatsapp}
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-primary transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Navigation */}
        <div>
          <p className="eyebrow text-primary">Navigation</p>
          <ul className="mt-5 grid grid-cols-1 gap-3 text-sm text-white/75 sm:grid-cols-2">
            <li>
              <a
                className="hover:text-primary transition-colors cursor-pointer"
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary transition-colors cursor-pointer"
                href="/specialites"
                onClick={(e) => handleLinkClick(e, '/specialites')}
              >
                Spécialités
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary transition-colors cursor-pointer"
                href="/avant-apres"
                onClick={(e) => handleLinkClick(e, '/avant-apres')}
              >
                Avant-Après
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary transition-colors cursor-pointer"
                href="/questions-reponses"
                onClick={(e) => handleLinkClick(e, '/questions-reponses')}
              >
                Questions & Réponses
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary transition-colors cursor-pointer"
                href="/videotheque"
                onClick={(e) => handleLinkClick(e, '/videotheque')}
              >
                Vidéothèque
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary transition-colors cursor-pointer"
                href="/actualites"
                onClick={(e) => handleLinkClick(e, '/actualites')}
              >
                Actualités
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary transition-colors cursor-pointer"
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
              >
                Contact
              </a>
            </li>
          </ul>

          <a
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 cursor-pointer"
            href="/contact"
            onClick={(e) => handleLinkClick(e, '/contact')}
          >
            Prendre rendez-vous
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/45 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Dr. El Hassan TAZI — Tous droits réservés.</p>
          <p className="text-center sm:text-right">
            Les interventions chirurgicales sont précédées d'une consultation obligatoire.
          </p>
        </div>
      </div>
    </footer>
  );
};
