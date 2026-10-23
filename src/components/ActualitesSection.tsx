import React, { useState } from 'react';
import { Newspaper, ArrowRight, BookOpen, X, ExternalLink } from 'lucide-react';
import { ACTUALITES_LIST, ActualiteItem } from '../data/drtaziData';

export const ActualitesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ActualiteItem | null>(null);

  return (
    <section id="actualites" className="py-20 lg:py-28 bg-white border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE1] text-[#A98044] text-xs font-semibold tracking-wider uppercase mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>REVUE DE PRESSE &amp; PUBLICATIONS</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal tracking-tight mb-4 leading-tight">
            Actualités &amp; Revue de Presse
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Retrouvez les interviews, reportages et analyses médicales du Dr. El Hassan TAZI parus dans la presse marocaine et internationale.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTUALITES_LIST.map((act) => (
            <article
              key={act.id}
              onClick={() => setSelectedArticle(act)}
              className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#E8E2D5] hover:border-[#A98044]/60 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="font-semibold uppercase tracking-wider text-[#A98044] bg-white px-3 py-1 rounded-full border border-[#E8E2D5]">
                    Presse Médicale
                  </span>
                  <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-[#A98044] transition-colors" />
                </div>

                <h3
                  className={`text-slate-900 group-hover:text-[#A98044] transition-colors mb-3 leading-snug ${
                    act.isArabic ? 'font-arabic font-bold text-lg text-right' : 'font-serif-luxury text-xl sm:text-2xl font-normal'
                  }`}
                  dir={act.isArabic ? 'rtl' : 'ltr'}
                >
                  {act.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm text-slate-600 leading-relaxed font-light line-clamp-3 ${
                    act.isArabic ? 'font-arabic text-right' : ''
                  }`}
                  dir={act.isArabic ? 'rtl' : 'ltr'}
                >
                  {act.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E2D5] flex items-center justify-between text-xs text-slate-500">
                <span>Dr. Hassan TAZI</span>
                <span className="font-semibold text-[#A98044] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Lire <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-[#E8E2D5]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="inline-block px-3 py-1 rounded-full bg-[#F3EDE1] text-[#A98044] text-[11px] font-semibold tracking-wider uppercase mb-3">
              Revue de Presse
            </div>

            <h3 
              className={`text-slate-900 mb-4 leading-snug ${
                selectedArticle.isArabic ? 'font-arabic font-bold text-xl text-right' : 'font-serif-luxury text-2xl font-normal'
              }`}
              dir={selectedArticle.isArabic ? 'rtl' : 'ltr'}
            >
              {selectedArticle.title}
            </h3>

            <div 
              className={`text-slate-600 text-sm leading-relaxed mb-6 font-light ${
                selectedArticle.isArabic ? 'font-arabic text-right' : ''
              }`}
              dir={selectedArticle.isArabic ? 'rtl' : 'ltr'}
            >
              {selectedArticle.excerpt}
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] text-xs text-slate-500 mb-6">
              Source : Archives de presse médicale officielle du Dr. El Hassan Tazi — Clinique des Spécialités Achifaa Casablanca.
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#A98044] hover:bg-[#977038] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
