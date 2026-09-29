import React, { useState } from 'react';
import { Check } from 'lucide-react';

const MOTIVATIONS = [
  { id: 'confident', label: 'I want to feel more confident' },
  { id: 'energy', label: 'I want more energy' },
  { id: 'health', label: 'I want to improve my overall health' },
  { id: 'cravings', label: 'I want fewer cravings' },
  { id: 'diabetesRisk', label: 'I want to reduce my risk of diabetes' },
  { id: 'labs', label: 'I want better health results (labs)' },
  { id: 'feelBetter', label: 'I want to feel better day to day' },
  { id: 'somethingElse', label: 'Something else' },
];

export default function Screen19Motivation({ formData, updateFormData, onNext, onBack }) {
  const [selected, setSelected] = useState(formData.motivations || []);
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
      setError('Please select at least one motivation.');
      return;
    }
    
    updateFormData({ motivations: selected });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        YOUR GOALS
      </div>

      <div className="heading-section">
        <h1 className="page-title">What's making you want to start now?</h1>
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
        {MOTIVATIONS.map((item) => {
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
