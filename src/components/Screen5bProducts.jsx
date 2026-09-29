import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

const GLP1_PRODUCTS = [
  'Ozempic®',
  'Wegovy®',
  'Mounjaro®',
  'Zepbound®',
  'Rybelsus®',
  'Trulicity®',
  'Victoza®',
  'Saxenda®',
  'Compounded GLP-1',
  'Other'
];

export default function Screen5bProducts({ formData, updateFormData, onNext, onBack }) {
  const [selectedMeds, setSelectedMeds] = useState(formData.glp1Meds || []);
  const [error, setError] = useState('');

  const toggleProduct = (med) => {
    setError('');
    setSelectedMeds(prev => 
      prev.includes(med) ? prev.filter(m => m !== med) : [...prev, med]
    );
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (selectedMeds.length === 0) {
      setError('Please select at least one medication (or choose Other).');
      return;
    }
    updateFormData({ glp1Meds: selectedMeds });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-nav-header">
        <button type="button" className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
        <span className="step-counter-text">Question 2 of 4</span>
      </div>

      <div className="heading-section" style={{ marginBottom: '24px' }}>
        <h1 className="page-title" style={{ fontSize: '28px' }}>
          Which GLP-1 medication have you used?
        </h1>
        <p className="page-subtitle">
          Select all medications you have taken previously.
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

      {/* Clean Grid of Product Chips */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px',
        marginBottom: '28px'
      }}>
        {GLP1_PRODUCTS.map((prod) => {
          const isSelected = selectedMeds.includes(prod);
          return (
            <div
              key={prod}
              onClick={() => toggleProduct(prod)}
              role="checkbox"
              aria-checked={isSelected}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') toggleProduct(prod); }}
              style={{
                borderRadius: '12px',
                border: `1.5px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-border)'}`,
                background: isSelected ? 'var(--color-green-pale)' : '#FFFFFF',
                padding: '14px 16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '14px',
                fontWeight: isSelected ? 700 : 500,
                color: isSelected ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
                boxShadow: isSelected ? '0 3px 10px rgba(47, 137, 104, 0.08)' : 'var(--shadow-card)',
                transition: 'all 0.15s ease',
                userSelect: 'none',
                outline: 'none'
              }}
            >
              <span>{prod}</span>
              <div style={{
                width: '18px',
                height: '18px',
                borderRadius: '5px',
                border: `1.5px solid ${isSelected ? 'var(--color-accent)' : '#C4D1C4'}`,
                background: isSelected ? 'var(--color-accent)' : '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                flexShrink: 0
              }}>
                {isSelected && <Check size={13} strokeWidth={3.5} />}
              </div>
            </div>
          );
        })}
      </div>

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
