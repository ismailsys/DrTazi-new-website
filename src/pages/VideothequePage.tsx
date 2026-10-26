import React, { useState } from 'react';
import { Sparkles, Youtube, MessageCircle, ExternalLink, Play, X } from 'lucide-react';
import { VIDEOS_LIST, ACTUALITES_LIST, DR_TAZI_PROFILE, CONTACT_INFO } from '../data/drtaziData';
import { PageRoute } from '../types/data';

interface VideothequePageProps {
  onNavigate: (path: PageRoute) => void;
}

export const VideothequePage: React.FC<VideothequePageProps> = ({ onNavigate }) => {
  const [activeModalVideo, setActiveModalVideo] = useState<string | null>(null);

  return (
    <div className="animate-fadeIn">
      {/* Dark Hero */}
      <section className="bg-ink py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-primary">Vidéothèque</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Interventions & passages médias
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Liposuccion brevetée, lifting du visage et sourcils, traitement de la calvitie, rhinoplastie et émission 2M « Défi Obésité ».
          </p>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
              
              {/* Featured Video Preview */}
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-md group">
                <img
                  src="https://tazi-aesthetic-consultations.lovable.app/assets/video-lifting-BgYKyp-E.jpg"
                  alt="Le lifting des sourcils et du visage"
                  className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href={DR_TAZI_PROFILE.youtubeChannelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform group-hover:scale-110"
                    aria-label="Regarder sur YouTube"
                  >
                    <Play className="h-7 w-7 fill-current ml-0.5" />
                  </a>
                </div>
              </div>

              {/* À La Une Info */}
              <div>
                <p className="eyebrow text-primary">À LA UNE</p>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-foreground">
                  Le lifting des sourcils et du visage, en direct / vidéo
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Retrouvez toutes les vidéos du Dr. Tazi sur sa chaîne YouTube officielle.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={DR_TAZI_PROFILE.youtubeChannelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#9c7237] px-5 py-2.5 text-xs font-semibold text-white hover:brightness-105"
                  >
                    <Youtube className="h-4 w-4" /> Chaîne YouTube
                  </a>

                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappClean}?text=Bonjour%20Dr.%20Tazi,%20j'ai%20une%20question%20après%20avoir%20vu%20vos%20vidéos`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/40 px-5 py-2.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" /> Poser une question
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Sélection d'interventions Grid (6 videos) */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-8">
            Sélection d'interventions
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS_LIST.map((vid) => (
              <a
                key={vid.id}
                href={vid.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-xs transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={vid.imageUrl}
                    alt={vid.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 border border-white/30 text-white transition-transform group-hover:scale-110">
                      <Play className="h-5 w-5 fill-current ml-0.5" />
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  {vid.tag && (
                    <p className="eyebrow text-primary text-[0.65rem] mb-1">
                      {vid.tag}
                    </p>
                  )}
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground leading-snug line-clamp-2">
                    {vid.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Revue de presse */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-8">
            Revue de presse
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ACTUALITES_LIST.map((art) => (
              <article
                key={art.id}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={art.imageUrl}
                      alt={art.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      {art.date}
                    </p>
                    <h3 className="font-display text-base sm:text-lg font-semibold text-foreground leading-snug line-clamp-2">
                      {art.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={art.articleUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-foreground transition-colors"
                  >
                    Lire l'article
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer Callout */}
      <section className="bg-accent/60 py-12 mb-8">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
            Une intervention vous intéresse ?
          </h3>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/contact');
            }}
            className="inline-block rounded-full bg-primary px-7 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:brightness-105"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>

    </div>
  );
};
