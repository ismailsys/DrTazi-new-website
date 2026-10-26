import React, { useState, useEffect } from 'react';
import { X, Calendar, Check, Send, ShieldCheck, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, COUNTRY_CODES } from '../data/drtaziData';
import { validateRdvForm, RdvFormData } from '../utils/consultation';

interface RdvModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProcedure?: string;
  onSuccess: (refCode: string) => void;
}

const MODAL_PROCEDURES = [
  "Lifting du visage",
  "Rhinoplastie",
  "Blépharoplastie",
  "Implants mammaires",
  "Réduction mammaire",
  "Lifting des seins",
  "Liposuccion HD",
  "Abdominoplastie",
  "Bodylift",
  "Greffe de cheveux",
  "Médecine esthétique",
  "Injections Botox / Acide",
  "Traitement des cicatrices",
  "Chirurgie des brûlures",
  "Autre demande"
];

export const RdvModal: React.FC<RdvModalProps> = ({
  isOpen,
  onClose,
  preselectedProcedure,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<RdvFormData>({
    yourName: '',
    countryCode: '+212',
    phone: '',
    email: '',
    selectedProcedures: preselectedProcedure ? [preselectedProcedure] : ['Liposuccion HD'],
    message: '',
  });

  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaAnswer] = useState('2109');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successRef, setSuccessRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedProcedure) {
      setFormData((prev) => ({
        ...prev,
        selectedProcedures: [preselectedProcedure],
      }));
    }
  }, [preselectedProcedure]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleProcedure = (proc: string) => {
    setFormData((prev) => {
      const exists = prev.selectedProcedures.includes(proc);
      if (exists) {
        return {
          ...prev,
          selectedProcedures: prev.selectedProcedures.filter((p) => p !== proc),
        };
      } else {
        return {
          ...prev,
          selectedProcedures: [...prev.selectedProcedures, proc],
        };
      }
    });
    if (errors.selectedProcedures) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.selectedProcedures;
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateRdvForm(formData);
    const newErrors = { ...result.errors };

    if (captchaInput.trim() !== captchaAnswer) {
      newErrors.captcha = 'Code de vérification incorrect. Veuillez saisir 2109.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const ref = result.referenceCode || `TAZI-${Math.floor(1000 + Math.random() * 9000)}`;
    setSuccessRef(ref);
    onSuccess(ref);
  };

  const handleResetAndClose = () => {
    setSuccessRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E8E2D5] overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#E8E2D5] bg-[#FAF7F2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F3EDE1] text-[#A98044] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-normal text-slate-900 leading-tight">
                Demande de Consultation
              </h3>
              <p className="text-[11px] text-slate-500">
                Dr. El Hassan TAZI · Clinique Achifaa Casablanca
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {successRef ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-serif-luxury text-2xl text-slate-900 font-medium">
                Demande transmise avec succès
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                Votre référence dossier est :
              </p>
              <div className="inline-block px-4 py-2 bg-[#FAF7F2] rounded-lg border border-emerald-300 font-mono font-bold text-slate-900 text-sm">
                {successRef}
              </div>
              <p className="text-slate-500 text-xs max-w-sm mx-auto">
                Le secrétariat médical vous recontactera sous 24h par téléphone ou WhatsApp.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappClean}?text=Bonjour%20Dr.%20Tazi,%20ma%20demande%20de%20consultation%20est%20la%20référence%20${successRef}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Confirmer sur WhatsApp</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-medium"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold tracking-wider text-slate-700 uppercase mb-1.5">
                  Nom complet <span className="text-[#A98044]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Sarah Benali"
                  value={formData.yourName}
                  onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D5] focus:outline-none focus:border-[#A98044] text-xs sm:text-sm"
                />
                {errors.yourName && <p className="text-red-500 text-xs mt-1">{errors.yourName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider text-slate-700 uppercase mb-1.5">
                  Téléphone <span className="text-[#A98044]">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="px-2.5 py-2.5 rounded-xl border border-[#E8E2D5] bg-[#FAF8F5] text-xs font-medium focus:outline-none focus:border-[#A98044]"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>{c.label}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    required
                    placeholder="06 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-[#E8E2D5] focus:outline-none focus:border-[#A98044] text-xs sm:text-sm"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider text-slate-700 uppercase mb-1.5">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  placeholder="votre.email@exemple.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D5] focus:outline-none focus:border-[#A98044] text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider text-slate-700 uppercase mb-2">
                  Intervention souhaitée :
                </label>
                <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1">
                  {MODAL_PROCEDURES.map((p) => {
                    const isSelected = formData.selectedProcedures.includes(p);
                    return (
                      <button
                        type="button"
                        key={p}
                        onClick={() => toggleProcedure(p)}
                        className={`px-3 py-1.5 rounded-full text-xs transition-all border ${
                          isSelected
                            ? 'bg-[#A98044] text-white border-[#A98044]'
                            : 'bg-[#FAF7F2] text-slate-700 border-[#E8E2D5] hover:bg-[#F3EDE1]'
                        }`}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider text-slate-700 uppercase mb-1.5">
                  Message ou précision
                </label>
                <textarea
                  rows={2}
                  placeholder="Précisez votre demande..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-[#E8E2D5] focus:outline-none focus:border-[#A98044] text-xs"
                />
              </div>

              {/* Anti-spam */}
              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A98044]" />
                  <span>Code anti-spam : <strong className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-300">2109</strong></span>
                </div>
                <input
                  type="text"
                  required
                  placeholder="2109"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  className="w-24 px-2.5 py-1 text-center font-mono font-bold rounded-lg border border-[#E8E2D5] bg-white focus:outline-none focus:border-[#A98044]"
                />
              </div>
              {errors.captcha && <p className="text-red-500 text-xs">{errors.captcha}</p>}

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#A98044] hover:bg-[#977038] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer ma demande</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
