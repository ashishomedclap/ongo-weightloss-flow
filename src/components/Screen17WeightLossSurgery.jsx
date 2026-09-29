import React, { useState } from 'react';
import { Check } from 'lucide-react';

const SURGERIES = [
  { id: 'lapBand', label: 'Lap band' },
  { id: 'gastricSleeve', label: 'Gastric sleeve' },
  { id: 'gastricBypass', label: 'Gastric bypass' },
  { id: 'other', label: 'Other' },
];

export default function Screen17WeightLossSurgery({ formData, updateFormData, onNext, onBack }) {
  const [hadSurgery, setHadSurgery] = useState(formData.hadSurgery ?? null);
  const [selectedSurgeries, setSelectedSurgeries] = useState(formData.weightLossSurgeries || []);
  const [error, setError] = useState('');

  const handleSelect = (val) => {
    setHadSurgery(val);
    setError('');
    if (!val) setSelectedSurgeries([]);
  };

  const toggleSurgery = (id) => {
    setError('');
    setSelectedSurgeries(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (hadSurgery === null) {
      setError('Please select Yes or No to continue.');
      return;
    }
    if (hadSurgery && selectedSurgeries.length === 0) {
      setError('Please select at least one surgery type.');
      return;
    }
    
    updateFormData({ hadSurgery, weightLossSurgeries: selectedSurgeries });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 8 · MEDICAL HISTORY
      </div>

      <div className="heading-section">
        <h1 className="page-title">Have you had any weight loss surgery in the past?</h1>
      </div>

      {error && (
        <div className="form-error-banner" style={{ marginBottom: '16px' }}>
          {error}
        </div>
      )}

      {/* Yes/No Choice Cards */}
      <div className="choice-cards-pair">
        <div
          onClick={() => handleSelect(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelect(true); }}
          className={`choice-card ${hadSurgery === true ? 'selected' : ''}`}
        >
          <div 
            style={{ 
              width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
              border: `2px solid ${hadSurgery === true ? 'var(--color-primary)' : 'var(--color-border)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF',
              transition: 'all 0.2s ease'
            }}
            aria-hidden="true"
          >
            {hadSurgery === true && <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }} />}
          </div>
          <span className="choice-title">Yes</span>
        </div>

        <div
          onClick={() => handleSelect(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelect(false); }}
          className={`choice-card ${hadSurgery === false ? 'selected' : ''}`}
        >
          <div 
            style={{ 
              width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
              border: `2px solid ${hadSurgery === false ? 'var(--color-primary)' : 'var(--color-border)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF',
              transition: 'all 0.2s ease'
            }}
            aria-hidden="true"
          >
            {hadSurgery === false && <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }} />}
          </div>
          <span className="choice-title">No</span>
        </div>
      </div>

      {/* Conditional Sub-List */}
      {hadSurgery && (
        <div className="fade-in" style={{ marginTop: '24px' }}>
          <p className="page-subtitle" style={{ marginBottom: '16px', fontSize: '15px' }}>
            Select all that apply.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {SURGERIES.map((item) => {
              const isChecked = selectedSurgeries.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleSurgery(item.id)}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') toggleSurgery(item.id); }}
                  className={`safety-check-row ${isChecked ? 'row-active' : ''}`}
                  style={{
                    border: isChecked ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                    borderRadius: '12px',
                    background: '#FFFFFF',
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
        </div>
      )}

      <button
        type="button"
        className={`cta-button-pill ${(hadSurgery === false) || (hadSurgery === true && selectedSurgeries.length > 0) ? 'active' : ''}`}
        style={{ marginTop: '32px' }}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
