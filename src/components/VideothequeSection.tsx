import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { VIDEOS_LIST } from '../data/drtaziData';
import { PageRoute } from '../types/data';

interface VideothequeSectionProps {
  onNavigate?: (path: PageRoute) => void;
}

export const VideothequeSection: React.FC<VideothequeSectionProps> = ({ onNavigate }) => {
  const homeVideos = VIDEOS_LIST.slice(0, 3);

  const handleExplorer = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/videotheque');
    }
  };

  return (
    <section className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl">
          <p className="eyebrow text-primary">Vidéothèque & revue de presse</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Interventions, médias et actualités
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeVideos.map((vid) => (
            <a
              key={vid.id}
              href={vid.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={vid.imageUrl}
                  alt={vid.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground transition-transform group-hover:scale-110 shadow-lg">
                    <Sparkles className="h-5 w-5" />
                  </span>
                </span>
              </div>
              <p className="p-4 text-xs font-semibold leading-relaxed text-white/85">
                {vid.title}
              </p>
            </a>
          ))}

          {/* 4th Card: Summary & Explore */}
          <div className="flex flex-col justify-between rounded-2xl border border-primary/30 bg-primary/10 p-5">
            <div>
              <p className="font-display text-xl font-semibold text-white">
                Vidéothèque & presse
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/65">
                6 interventions vidéo et 6 articles de presse à découvrir.
              </p>
            </div>
            
            <a
              href="/videotheque"
              onClick={handleExplorer}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-white transition-colors cursor-pointer"
            >
              Explorer
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
