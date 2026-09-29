import React, { useState } from 'react';

const ETHNICITIES = [
  { id: 'asian', label: 'Asian or South Asian' },
  { id: 'africanAmerican', label: 'African American' },
  { id: 'caucasian', label: 'Caucasian' },
  { id: 'hispanic', label: 'Hispanic or Latin' },
  { id: 'nativeAmerican', label: 'Native American or Alaskan' },
  { id: 'pacificIslander', label: 'Pacific Islander' },
  { id: 'preferNotToSay', label: 'Prefer not to say' },
];

export default function Screen22Ethnicity({ formData, updateFormData, onNext, onBack }) {
  const [selected, setSelected] = useState(formData.ethnicity || null);
  const [error, setError] = useState('');

  const handleSelect = (id) => {
    setSelected(id);
    setError('');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!selected) {
      setError('Please select an option.');
      return;
    }
    
    updateFormData({ ethnicity: selected });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 13 · DEMOGRAPHICS
      </div>

      <div className="heading-section">
        <h1 className="page-title">What is your ethnicity?</h1>
        <p className="page-subtitle">
          Select one option. We ask this to better tailor treatment options to you.
        </p>
      </div>

      {error && (
        <div className="form-error-banner" style={{ marginBottom: '16px' }}>
          {error}
        </div>
      )}

      {/* Stack of separate choice cards (Radio Button style) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {ETHNICITIES.map((item) => {
          const isChecked = selected === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleSelect(item.id)}
              role="radio"
              aria-checked={isChecked}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelect(item.id); }}
              className={`safety-check-row ${isChecked ? 'row-active' : ''}`}
              style={{
                border: isChecked ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                borderRadius: '12px',
                background: isChecked ? 'var(--color-bg-teal)' : '#FFFFFF',
                minHeight: '64px',
                padding: '0 20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.2s ease',
              }}
            >
              <div 
                style={{ 
                  width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
                  border: `2px solid ${isChecked ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF',
                  transition: 'all 0.2s ease'
                }}
                aria-hidden="true"
              >
                {isChecked && <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }} />}
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
        className={`cta-button-pill ${selected ? 'active' : ''}`}
        style={{ marginTop: '24px' }}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
