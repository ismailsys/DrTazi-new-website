import React, { useState, useRef, useCallback } from 'react';
import { ShieldCheck } from 'lucide-react';
import { AVANT_APRES_ITEMS, AvantApresItem } from '../data/drtaziData';
import { PageRoute } from '../types/data';

interface AvantApresPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const AvantApresPage: React.FC<AvantApresPageProps> = ({ onNavigate }) => {
  const [selectedCase, setSelectedCase] = useState<AvantApresItem>(AVANT_APRES_ITEMS[0]);
  const [activeCategory, setActiveCategory] = useState<'tous' | 'visage' | 'silhouette' | 'poitrine'>('tous');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement> | PointerEvent) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setSliderPosition(percent);
    },
    [isDragging]
  );

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const filteredCases = activeCategory === 'tous'
    ? AVANT_APRES_ITEMS
    : AVANT_APRES_ITEMS.filter((c) => c.category === activeCategory);

  return (
    <div className="animate-fadeIn">
      {/* Dark Hero */}
      <section className="bg-ink py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-primary">Exemples d'opérations effectuées par Dr Hassan TAZI</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Avant – Après
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Des cas cliniques réels et documentés. Cliquez sur une photo pour la comparer dans le comparateur interactif.
          </p>
        </div>
      </section>

      {/* Main Comparator & Gallery Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Top Interactive Comparison Slider */}
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start mb-16">
            
            {/* Draggable Slider Box */}
            <div
              ref={containerRef}
              role="slider"
              aria-label="Comparateur avant / après"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
              tabIndex={0}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className="relative cursor-ew-resize select-none overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_40px_80px_-40px_rgba(0,0,0,0.4)] touch-none"
            >
              {/* After image (underneath) */}
              <div className="aspect-[4/3] w-full">
                <img
                  src={selectedCase.afterUrl}
                  alt={selectedCase.title}
                  draggable={false}
                  className="pointer-events-none h-full w-full object-cover"
                />
              </div>

              {/* Before image (clipped on left) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={selectedCase.beforeUrl}
                  alt={`${selectedCase.title} — avant`}
                  draggable={false}
                  className="pointer-events-none h-full w-full object-cover"
                />
              </div>

              {/* Badges */}
              <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-white shadow-sm">
                Avant
              </span>
              <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary-foreground shadow-sm">
                Après
              </span>

              {/* Slider Divider Bar and Handle */}
              <div
                className="absolute inset-y-0 w-px bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.45)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-ink/80 text-white shadow-lg">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 6 4 12l5 6M15 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Case Details on Right */}
            <div>
              <p className="eyebrow text-primary">Comparateur interactif</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-foreground">
                {selectedCase.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Faites glisser le curseur de gauche à droite pour révéler le résultat obtenu. Les documents présentés proviennent du cabinet du Dr. Tazi.
              </p>

              {selectedCase.description && (
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {selectedCase.description}
                </p>
              )}

              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/25 bg-gold-soft p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-xs leading-relaxed text-foreground/80">
                  <strong className="font-semibold">Confidentialité médicale.</strong> Chaque cas clinique est documenté et publié avec l'accord du patient. Les résultats peuvent varier d'une personne à l'autre : chaque intervention fait l'objet d'un plan de traitement personnalisé.
                </p>
              </div>
            </div>

          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {(['tous', 'visage', 'silhouette', 'poitrine'] as const).map((cat) => {
              const isSelected = activeCategory === cat;
              const label = cat === 'tous' ? 'Tous' : cat.charAt(0).toUpperCase() + cat.slice(1);
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'border border-border bg-card text-foreground hover:border-primary/50'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* 16 Clinical Cases Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCases.map((c) => {
              const isCurrent = selectedCase.id === c.id;
              return (
                <figure
                  key={c.id}
                  onClick={() => {
                    setSelectedCase(c);
                    setSliderPosition(50);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className={`group overflow-hidden rounded-3xl border bg-card cursor-pointer transition-all ${
                    isCurrent
                      ? 'border-primary ring-2 ring-primary/30 shadow-md'
                      : 'border-border hover:-translate-y-1 hover:border-primary/50'
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={c.afterUrl}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-white">
                      Avant
                    </span>
                    <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-primary-foreground">
                      Après
                    </span>
                  </div>
                  <figcaption className="p-3.5 text-center text-xs font-semibold text-foreground line-clamp-2">
                    {c.title}
                  </figcaption>
                </figure>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
};
