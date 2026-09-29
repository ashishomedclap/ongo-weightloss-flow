import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';

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
      <div className="step-nav-header">
        <button type="button" className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
        <span className="step-counter-text">Question 3 of 4</span>
      </div>

      <div className="heading-section" style={{ marginBottom: '24px' }}>
        <h1 className="page-title" style={{ fontSize: '28px' }}>
          What dose were you taking?
        </h1>
        <p className="page-subtitle">
          Select your most recent maintenance dose or amount.
        </p>
      </div>

      {error && (
        <div style={{
          background: '#FDF2F2',
          border: '1px solid #F8B4B4',
          color: '#9B1C1C',
          padding: '8px 12px',
          borderRadius: '8px',
          fontSize: '13px',
          marginBottom: '16px'
        }}>
          {error}
        </div>
      )}

      {/* Common Dose Chips */}
      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label className="form-label" style={{ marginBottom: '8px' }}>Dose Amount</label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px'
        }}>
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
                style={{
                  borderRadius: '10px',
                  border: `1.5px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  background: isSelected ? 'var(--color-green-pale)' : '#FFFFFF',
                  padding: '10px 4px',
                  textAlign: 'center',
                  fontSize: '13.5px',
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 2px 8px rgba(47, 137, 104, 0.1)' : 'var(--shadow-card)',
                  transition: 'all 0.12s ease',
                  outline: 'none'
                }}
              >
                {d}
              </div>
            );
          })}
        </div>
      </div>

      {dose === 'Other' && (
        <div className="form-group fade-in" style={{ marginBottom: '20px' }}>
          <label className="form-label" htmlFor="custom-dose">Enter dose or units</label>
          <input
            id="custom-dose"
            type="text"
            className="form-input"
            placeholder="e.g. 15 units (0.375 mL)"
            value={customDose}
            onChange={(e) => setCustomDose(e.target.value)}
            autoFocus
          />
        </div>
      )}

      {/* Frequency */}
      <div className="form-group" style={{ marginBottom: '24px' }}>
        <label className="form-label" style={{ marginBottom: '8px' }}>How often did you take it?</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
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
                style={{
                  borderRadius: '10px',
                  border: `1.5px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  background: isSelected ? 'var(--color-green-pale)' : '#FFFFFF',
                  padding: '11px 8px',
                  textAlign: 'center',
                  fontSize: '13.5px',
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.12s ease',
                  outline: 'none'
                }}
              >
                {freq}
              </div>
            );
          })}
        </div>
      </div>

      <p style={{
        fontSize: '12px',
        color: 'var(--color-text-muted)',
        textAlign: 'center',
        margin: '0 auto 20px',
        lineHeight: '1.4'
      }}>
        Unsure of the exact dose? You can upload a photo of your prescription label on the next step.
      </p>

      <button
        type="button"
        className="cta-button"
        onClick={handleContinue}
      >
        <span>Continue</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
