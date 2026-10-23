import React from 'react';
import { Calendar, ExternalLink, MessageCircle } from 'lucide-react';
import { ACTUALITES_LIST, CONTACT_INFO } from '../data/drtaziData';
import { PageRoute } from '../types/data';

interface ActualitesPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const ActualitesPage: React.FC<ActualitesPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fadeIn">
      {/* Dark Hero */}
      <section className="bg-ink py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-primary">Actualités</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Le Dr. Tazi dans la presse
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Retrouvez les articles et interviews consacrés au Dr. El Hassan Tazi et à la chirurgie esthétique au Maroc.
          </p>
        </div>
      </section>

      {/* Main Grid: 6 Articles */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {ACTUALITES_LIST.map((art) => (
              <article
                key={art.id}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={art.imageUrl}
                      alt={art.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{art.date}</span>
                    </div>

                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground leading-snug mb-3">
                      {art.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href={art.articleUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-foreground transition-colors"
                  >
                    Lire l'article sur drtazi.com
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer Question Box */}
      <section className="bg-accent/60 py-12 mb-8">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
            Une question après la lecture d'un article ?
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact');
              }}
              className="rounded-full bg-[#9c7237] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:brightness-105"
            >
              Poser votre question
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappClean}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/40 px-5 py-2.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp {CONTACT_INFO.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
