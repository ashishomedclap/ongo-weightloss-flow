import React, { useState } from 'react';

const COMMON_DOSES = ['0.25 mg', '0.5 mg', '1.0 mg', '1.7 mg', '2.4 mg', '2.5 mg', '5.0 mg', 'Other'];

export default function Screen5cDosage({ formData, updateFormData, onNext, onBack }) {
  const [dose, setDose] = useState(formData.glp1Dose || '0.5 mg');
  const [customDose, setCustomDose] = useState('');
  const [frequency, setFrequency] = useState(formData.glp1Frequency || 'Once weekly');
  const [error, setError] = useState('');

  const handleSelectDose = (d) => {
    setDose(d);
    setError('');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const finalDose = dose === 'Other' ? customDose.trim() : dose;
    if (!finalDose) {
      setError('Please specify your dose (or choose closest estimate).');
      return;
    }
    updateFormData({
      glp1Dose: finalDose,
      glp1Frequency: frequency
    });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        PREVIOUS TREATMENT · DOSAGE
      </div>

      <div className="heading-section">
        <h1 className="page-title">What dose were you taking?</h1>
        <p className="page-subtitle">
          Select your most recent maintenance dose or amount.
        </p>
      </div>

      {error && (
        <div className="form-error-banner">
          {error}
        </div>
      )}

      {/* Common Dose Chips */}
      <div className="section-label-small">DOSE AMOUNT</div>
      <div className="dose-grid-4">
        {COMMON_DOSES.map((d) => {
          const isSelected = dose === d;
          return (
            <div
              key={d}
              onClick={() => handleSelectDose(d)}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelectDose(d); }}
              className={`dose-chip ${isSelected ? 'selected' : ''}`}
            >
              {d}
            </div>
          );
        })}
      </div>

      {dose === 'Other' && (
        <div className="input-capsule-wrap fade-in" style={{ marginBottom: '16px' }}>
          <input
            id="custom-dose"
            type="text"
            className="input-capsule"
            placeholder="e.g. 15 units (0.375 mL)"
            value={customDose}
            onChange={(e) => setCustomDose(e.target.value)}
            autoFocus
          />
        </div>
      )}

      {/* Frequency */}
      <div className="section-label-small" style={{ marginTop: '14px' }}>HOW OFTEN DID YOU TAKE IT?</div>
      <div className="dose-grid-3">
        {['Once weekly', 'Daily', 'Other'].map((freq) => {
          const isSelected = frequency === freq;
          return (
            <div
              key={freq}
              onClick={() => setFrequency(freq)}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setFrequency(freq); }}
              className={`dose-chip ${isSelected ? 'selected' : ''}`}
            >
              {freq}
            </div>
          );
        })}
      </div>

      <p className="safety-sub-note" style={{ marginTop: '20px' }}>
        Unsure of the exact dose? You can upload a photo of your prescription label on the next step.
      </p>

      <button
        type="button"
        className="cta-button-pill active"
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
