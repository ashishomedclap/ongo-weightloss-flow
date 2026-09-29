import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

export default function Screen14Allergies({ formData, updateFormData, onNext, onBack }) {
  const [hasAllergies, setHasAllergies] = useState(formData.hasAllergies ?? null);
  const [allergyDetails, setAllergyDetails] = useState(formData.allergyDetails || '');
  const [error, setError] = useState('');

  const handleSelect = (val) => {
    setHasAllergies(val);
    setError('');
    if (!val) setAllergyDetails('');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (hasAllergies === null) {
      setError('Please select Yes or No to continue.');
      return;
    }
    if (hasAllergies && !allergyDetails.trim()) {
      setError('Please list your allergies.');
      return;
    }
    
    updateFormData({ hasAllergies, allergyDetails });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 3 OF 13 · MEDICAL HISTORY
      </div>

      <div className="heading-section">
        <h1 className="page-title">Do you have any known allergies?</h1>
        <p className="page-subtitle">
          Include allergies to medications, foods, or environmental factors.
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
          className={`choice-card ${hasAllergies === true ? 'selected' : ''}`}
        >
          <div 
            style={{ 
              width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
              border: `2px solid ${hasAllergies === true ? 'var(--color-primary)' : 'var(--color-border)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF',
              transition: 'all 0.2s ease'
            }}
            aria-hidden="true"
          >
            {hasAllergies === true && <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }} />}
          </div>
          <span className="choice-title">Yes</span>
        </div>

        <div
          onClick={() => handleSelect(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelect(false); }}
          className={`choice-card ${hasAllergies === false ? 'selected' : ''}`}
        >
          <div 
            style={{ 
              width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
              border: `2px solid ${hasAllergies === false ? 'var(--color-primary)' : 'var(--color-border)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF',
              transition: 'all 0.2s ease'
            }}
            aria-hidden="true"
          >
            {hasAllergies === false && <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }} />}
          </div>
          <span className="choice-title">No</span>
        </div>
      </div>

      {hasAllergies && (
        <div className="fade-in" style={{ marginTop: '20px' }}>
          <label className="field-top-label" style={{ display: 'block', marginBottom: '8px' }}>
            Please list your allergies and your reaction
          </label>
          <textarea
            className="input-capsule"
            style={{ minHeight: '120px', padding: '16px', resize: 'vertical' }}
            placeholder="E.g., Penicillin (hives), Peanuts (anaphylaxis)..."
            value={allergyDetails}
            onChange={(e) => setAllergyDetails(e.target.value)}
          />
        </div>
      )}

      {/* Why we ask */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '16px', fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.45' }}>
        <Info size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
        <span><strong>Why we ask:</strong> This helps your physician make safer treatment decisions and avoid potential allergic reactions.</span>
      </div>

      <button
        type="button"
        className={`cta-button-pill ${(hasAllergies === false) || (hasAllergies === true && allergyDetails.trim().length > 0) ? 'active' : ''}`}
        style={{ marginTop: '24px' }}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
