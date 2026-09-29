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
  const [selectedMeds, setSelectedMeds] = useState(formData.glp1Meds || []);
  const [otherMed, setOtherMed] = useState('');
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
    // If 'Other' is selected, ensure a custom value is provided
    if (selectedMeds.includes('Other') && otherMed.trim() === '') {
      setError('Please specify the medication for "Other".');
      return;
    }
    // Replace 'Other' placeholder with the custom value before saving
    const medsToSave = selectedMeds.map(m => (m === 'Other' ? otherMed.trim() : m));
    updateFormData({ glp1Meds: medsToSave });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        PREVIOUS TREATMENT · MEDICATION
      </div>

      <div className="heading-section">
        <h1 className="page-title">Which GLP-1 medication have you used?</h1>
        <p className="page-subtitle">
          Select all medications you have taken previously.
        </p>
      </div>

      {error && (
        <div className="form-error-banner">
          {error}
        </div>
      )}

      {/* Clean Grid of Product Chips */}
      <div className="products-grid">
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
              className={`product-chip-card ${isSelected ? 'selected' : ''}`}
            >
              <span>{prod}</span>
              <div className={`checkbox-box ${isSelected ? 'checked' : ''}`} aria-hidden="true">
                {isSelected && <Check size={13} strokeWidth={3.5} />}
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className={`cta-button-pill ${selectedMeds.length > 0 ? 'active' : ''}`}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
