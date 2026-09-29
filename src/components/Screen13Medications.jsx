import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Screen13Medications({ formData, updateFormData, onNext, onBack }) {
  const [takesMedication, setTakesMedication] = useState(formData.takesMedication ?? null);
  const [medicationDetails, setMedicationDetails] = useState(formData.medicationDetails || '');
  const [error, setError] = useState('');

  const handleSelect = (val) => {
    setTakesMedication(val);
    setError('');
    if (!val) setMedicationDetails('');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (takesMedication === null) {
      setError('Please select Yes or No to continue.');
      return;
    }
    if (takesMedication && !medicationDetails.trim()) {
      setError('Please list your medications.');
      return;
    }
    
    updateFormData({ takesMedication, medicationDetails });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 4 · MEDICATIONS
      </div>

      <div className="heading-section">
        <h1 className="page-title">Do you take any medication?</h1>
        <p className="page-subtitle">
          Please include prescriptions, over-the-counter medications, and supplements.
        </p>
      </div>

      {error && (
        <div className="form-error-banner" style={{ marginBottom: '16px' }}>
          {error}
        </div>
      )}

      <div className="choice-cards-pair">
        <div
          onClick={() => handleSelect(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelect(true); }}
          className={`choice-card ${takesMedication === true ? 'selected' : ''}`}
        >
          <div 
            style={{ 
              width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
              border: `2px solid ${takesMedication === true ? 'var(--color-primary)' : 'var(--color-border)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF',
              transition: 'all 0.2s ease'
            }}
            aria-hidden="true"
          >
            {takesMedication === true && <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }} />}
          </div>
          <span className="choice-title">Yes</span>
        </div>

        <div
          onClick={() => handleSelect(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelect(false); }}
          className={`choice-card ${takesMedication === false ? 'selected' : ''}`}
        >
          <div 
            style={{ 
              width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
              border: `2px solid ${takesMedication === false ? 'var(--color-primary)' : 'var(--color-border)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF',
              transition: 'all 0.2s ease'
            }}
            aria-hidden="true"
          >
            {takesMedication === false && <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }} />}
          </div>
          <span className="choice-title">No</span>
        </div>
      </div>

      {takesMedication && (
        <div className="fade-in" style={{ marginTop: '20px' }}>
          <label className="field-top-label" style={{ display: 'block', marginBottom: '8px' }}>
            Please list your medications, dosages, and frequency
          </label>
          <textarea
            className="input-capsule"
            style={{ minHeight: '120px', padding: '16px', resize: 'vertical' }}
            placeholder="E.g., Lisinopril 10mg once daily, Vitamin D 2000 IU..."
            value={medicationDetails}
            onChange={(e) => setMedicationDetails(e.target.value)}
          />
        </div>
      )}

      <button
        type="button"
        className={`cta-button-pill ${(takesMedication === false) || (takesMedication === true && medicationDetails.trim().length > 0) ? 'active' : ''}`}
        style={{ marginTop: '24px' }}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
