import React, { useState } from 'react';
import { Check } from 'lucide-react';

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
  const [selectedMed, setSelectedMed] = useState(
    Array.isArray(formData.glp1Meds) ? formData.glp1Meds[0] : (formData.glp1Meds || null)
  );
  const [otherMed, setOtherMed] = useState('');
  const [error, setError] = useState('');

  const handleSelect = (med) => {
    setError('');
    setSelectedMed(med);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!selectedMed) {
      setError('Please select a medication (or choose Other).');
      return;
    }
    if (selectedMed === 'Other' && otherMed.trim() === '') {
      setError('Please specify the medication for "Other".');
      return;
    }
    
    const medToSave = selectedMed === 'Other' ? otherMed.trim() : selectedMed;
    updateFormData({ glp1Meds: [medToSave] });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 4 OF 8 · GLP-1 HISTORY
      </div>

      <div className="heading-section">
        <h1 className="page-title">Which GLP-1 medication have you used?</h1>
        <p className="page-subtitle">
          Select the primary medication you have taken previously.
        </p>
      </div>

      {error && (
        <div className="form-error-banner" style={{ marginBottom: '16px' }}>
          {error}
        </div>
      )}

      {/* Clean Grid of Product Chips */}
      <div className="products-grid">
        {GLP1_PRODUCTS.map((prod) => {
          const isSelected = selectedMed === prod;
          return (
            <div
              key={prod}
              onClick={() => handleSelect(prod)}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelect(prod); }}
              style={{
                width: '100%',
                background: isSelected ? '#F2F9F5' : '#FFFFFF',
                border: `2px solid ${isSelected ? '#2F8968' : '#E2E6E2'}`,
                borderRadius: '16px',
                padding: '16px 20px',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ fontSize: '15.5px', fontWeight: isSelected ? 700 : 500, color: isSelected ? '#1F4F3D' : '#111111', flex: 1 }}>{prod}</span>
              <div 
                style={{ 
                  width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                  border: `2px solid ${isSelected ? '#2F8968' : '#E2E6E2'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF',
                  transition: 'all 0.2s ease', marginLeft: '4px'
                }}
                aria-hidden="true"
              >
                {isSelected && <div style={{ width: '12px', height: '12px', backgroundColor: '#2F8968', borderRadius: '50%' }} />}
              </div>
            </div>
          );
        })}
      </div>

      {selectedMed === 'Other' && (
        <div className="input-capsule-wrap fade-in" style={{ marginTop: '16px' }}>
          <input
            id="other-medication"
            type="text"
            className="input-capsule"
            placeholder="Please specify medication"
            value={otherMed}
            onChange={(e) => setOtherMed(e.target.value)}
            autoFocus
          />
        </div>
      )}

      <button
        type="button"
        className={`cta-button-pill ${selectedMed ? 'active' : ''}`}
        style={{ marginTop: '24px' }}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
