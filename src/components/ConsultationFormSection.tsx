import React, { useState } from 'react';
import { CalendarCheck, Phone, MessageCircle, Check } from 'lucide-react';
import { CONTACT_INFO, COUNTRY_CODES, RDV_INTERVENTIONS } from '../data/drtaziData';

interface ConsultationFormSectionProps {
  onSuccessSubmit?: (refCode: string) => void;
  preselectedProcedure?: string;
  isCompact?: boolean;
}

export const ConsultationFormSection: React.FC<ConsultationFormSectionProps> = ({
  onSuccessSubmit,
  preselectedProcedure,
  isCompact = false
}) => {
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+212');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedProcedures, setSelectedProcedures] = useState<string[]>(
    preselectedProcedure ? [preselectedProcedure] : []
  );
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleProcedure = (proc: string) => {
    setSelectedProcedures(prev =>
      prev.includes(proc) ? prev.filter(p => p !== proc) : [...prev, proc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg('Veuillez renseigner votre nom complet et votre numéro de téléphone.');
      return;
    }

    setErrorMsg(null);
    const refCode = `TAZI-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(refCode);
    if (onSuccessSubmit) {
      onSuccessSubmit(refCode);
    }
  };

  return (
    <section id="consultation" className={isCompact ? "" : "scroll-mt-24 bg-accent/50 py-16"}>
      <div className={isCompact ? "w-full" : "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"}>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-3xl border border-border bg-card p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] sm:p-8"
        >
          {/* Header */}
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-soft text-primary shrink-0">
              <CalendarCheck className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                Prendre RDV avec Dr. El Hassan TAZI
              </h2>
              <p className="text-xs text-muted-foreground">
                Réponse personnelle du cabinet — Clinique des Spécialités Achifaa, Casablanca
              </p>
            </div>
          </div>

          {submittedRef ? (
            <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                Demande transmise avec succès
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                Votre référence dossier : <strong className="text-foreground font-mono font-bold">{submittedRef}</strong>
              </p>
              <p className="text-xs text-muted-foreground max-w-md mx-auto mb-4">
                Le secrétariat du Dr. El Hassan TAZI à la Clinique Achifaa vous contactera sous 24h par téléphone ou WhatsApp.
              </p>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappClean}?text=Bonjour%20Dr.%20Tazi,%20je%20confirme%20ma%20demande%20de%20rendez-vous%20(Ref:%20${submittedRef}).`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Accélérer via WhatsApp
              </a>
            </div>
          ) : (
            <>
              {errorMsg && (
                <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600">
                  {errorMsg}
                </div>
              )}

              {/* Main Fields */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Votre nom et prénom"
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/25"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1.5 flex gap-2">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="rounded-xl border border-border bg-background px-3 py-3 text-xs font-semibold text-foreground outline-none focus:border-primary shrink-0"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="6 12 34 56 78"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/25"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Adresse e-mail
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vous@exemple.com"
                      className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/25"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Décrivez brièvement votre demande..."
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/25 resize-none"
                  />
                </div>
              </div>

              {/* Procedures Checkbox Grid */}
              <fieldset className="mt-6">
                <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Je veux faire :
                </legend>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {RDV_INTERVENTIONS.map((proc) => {
                    const isChecked = selectedProcedures.includes(proc);
                    return (
                      <label
                        key={proc}
                        className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-[0.8rem] font-medium transition-all ${
                          isChecked
                            ? 'border-primary bg-gold-soft/50 text-foreground'
                            : 'border-border bg-background text-muted-foreground hover:border-primary/50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleProcedure(proc)}
                          className="h-4 w-4 shrink-0 rounded accent-[#b6894c]"
                        />
                        <span className="truncate">{proc}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[0_16px_40px_-16px_rgba(182,137,76,0.6)] transition-all hover:-translate-y-0.5 hover:brightness-105 cursor-pointer"
              >
                <CalendarCheck className="h-4 w-4" />
                Envoyer ma demande de rendez-vous
              </button>

              {/* Direct links */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${CONTACT_INFO.phones[0].replace(/[\s()]/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary"
                >
                  <Phone className="h-3.5 w-3.5" /> {CONTACT_INFO.phones[0]}
                </a>
                <span className="text-border">|</span>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappClean}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-600"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp {CONTACT_INFO.whatsapp}
                </a>
              </div>

              {/* Legal Notice */}
              <p className="mt-4 border-t border-border pt-4 text-[0.68rem] leading-relaxed text-muted-foreground">
                {CONTACT_INFO.legalNotice}
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
};
