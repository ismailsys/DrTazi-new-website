import test from 'node:test';
import assert from 'node:assert/strict';
import { validateRdvForm, RdvFormData } from './consultation';

test('validateRdvForm detects empty or invalid fields', () => {
  const invalidPayload: RdvFormData = {
    yourName: '',
    countryCode: '+212',
    phone: '',
    email: 'bad-email',
    selectedProcedures: [],
    message: '',
  };

  const res = validateRdvForm(invalidPayload);
  assert.equal(res.isValid, false);
  assert.ok(res.errors.yourName);
  assert.ok(res.errors.phone);
  assert.ok(res.errors.email);
  assert.ok(res.errors.selectedProcedures);
});

test('validateRdvForm accepts valid payload with selected procedures', () => {
  const validPayload: RdvFormData = {
    yourName: 'Sara Bennani',
    countryCode: '+212',
    phone: '612345678',
    email: 'sara@example.com',
    selectedProcedures: ['Liposuccion', 'Rhinoplastie'],
    message: 'Demande de consultation à la Clinique Achifaa',
  };

  const res = validateRdvForm(validPayload);
  assert.equal(res.isValid, true);
  assert.equal(Object.keys(res.errors).length, 0);
  assert.ok(res.referenceCode);
  assert.match(res.referenceCode, /^TAZI-RDV-\d{4}$/);
});
