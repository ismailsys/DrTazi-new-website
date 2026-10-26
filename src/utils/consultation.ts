export interface RdvFormData {
  yourName: string;
  countryCode: string;
  phone: string;
  email: string;
  selectedProcedures: string[];
  message: string;
}

export interface RdvValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  referenceCode?: string;
}

export function validateRdvForm(data: RdvFormData): RdvValidationResult {
  const errors: Record<string, string> = {};

  if (!data.yourName || data.yourName.trim().length < 2) {
    errors.yourName = 'Veuillez renseigner votre nom complet.';
  }

  const phoneClean = (data.phone || '').replace(/[\s\-\+\(\)]/g, '');
  if (!phoneClean || phoneClean.length < 6) {
    errors.phone = 'Numéro de téléphone requis.';
  }

  if (data.email && data.email.trim() !== '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Veuillez renseigner une adresse email valide.';
    }
  }

  if (!data.selectedProcedures || data.selectedProcedures.length === 0) {
    errors.selectedProcedures = 'Veuillez sélectionner au moins une intervention.';
  }

  const isValid = Object.keys(errors).length === 0;
  const referenceCode = isValid ? `TAZI-RDV-${Math.floor(1000 + Math.random() * 9000)}` : undefined;

  return {
    isValid,
    errors,
    referenceCode,
  };
}
