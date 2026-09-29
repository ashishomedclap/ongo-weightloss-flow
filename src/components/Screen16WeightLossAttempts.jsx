import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ATTEMPTS = [
  { id: 'trackingCalories', label: 'Tracking calories' },
  { id: 'weightLossPrograms', label: 'Weight loss programs' },
  { id: 'ketoDiets', label: 'Low-carb or keto diets' },
  { id: 'intermittentFasting', label: 'Intermittent fasting' },
  { id: 'regularExercise', label: 'Regular exercise' },
  { id: 'prescriptionMeds', label: 'Prescription medications' },
  { id: 'somethingElse', label: 'Something else' },
];

export default function Screen16WeightLossAttempts({ formData, updateFormData, onNext, onBack }) {
  const [selected, setSelected] = useState(formData.weightLossAttempts || []);
  const [error, setError] = useState('');

  const toggleOption = (id) => {
    setError('');
    setSelected(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (selected.length === 0) {
      setError('Please select at least one option.');
      return;
    }
    
    updateFormData({ weightLossAttempts: selected });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 5 OF 13 · HEALTH ASSESSMENT
      </div>

      <div className="heading-section">
        <h1 className="page-title">What have you tried before to lose weight?</h1>
        <p className="page-subtitle">
          Select all that apply.
        </p>
      </div>

      {error && (
        <div className="form-error-banner" style={{ marginBottom: '16px' }}>
          {error}
        </div>
      )}

      {/* Stack of separate choice cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {ATTEMPTS.map((item) => {
          const isChecked = selected.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleOption(item.id)}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') toggleOption(item.id); }}
              className={`safety-check-row ${isChecked ? 'row-active' : ''}`}
              style={{
                border: isChecked ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                borderRadius: '12px',
                background: isChecked ? '#EEF8EC' : '#FFFFFF',
                minHeight: '64px',
                padding: '0 20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.2s ease',
              }}
            >
              <div className={`checkbox-box ${isChecked ? 'checked' : ''}`} aria-hidden="true" style={{ flexShrink: 0 }}>
                {isChecked && <Check size={14} strokeWidth={3} />}
              </div>

              <span className={`safety-check-text ${isChecked ? 'text-selected' : ''}`} style={{ fontSize: '15px', fontWeight: isChecked ? 600 : 500 }}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className={`cta-button-pill ${selected.length > 0 ? 'active' : ''}`}
        style={{ marginTop: '24px' }}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}

// Trigger HMR
