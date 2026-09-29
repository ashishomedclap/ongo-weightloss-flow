import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Screen12HealthConditions({ formData, updateFormData, onNext, onBack }) {
  const isFemale = formData.gender === 'Female' || formData.gender === 'Prefer not to say' || !formData.gender;

  const ALL_CONDITIONS = [
    { id: 'highBpCholesterol', label: 'High blood pressure or cholesterol' },
    { id: 'heartVascular', label: 'Heart or vascular disease (stroke, irregular heartbeat)' },
    { id: 'diabetes', label: 'Type 2 or Pre-diabetes' },
    { id: 'metabolicSyndrome', label: 'Metabolic syndrome' },
    ...(isFemale ? [{ id: 'pcos', label: 'PCOS' }] : []),
    { id: 'thyroidCondition', label: 'Thyroid condition' },
    { id: 'kidneyDisease', label: 'Kidney disease' },
    { id: 'digestiveIssues', label: 'Digestive issues or acid reflux' },
    { id: 'fattyLiver', label: 'Fatty liver disease' },
    { id: 'asthmaCopd', label: 'Asthma or COPD' },
    { id: 'sleepApnea', label: 'Sleep apnea' },
    { id: 'jointPainArthritis', label: 'Joint pain or arthritis' },
    { id: 'anxietyDepression', label: 'Anxiety or depression' },
    { id: 'cancer', label: 'Cancer' },
    { id: 'hivAids', label: 'HIV or AIDS' },
  ];

  // Add "Other" at the end
  ALL_CONDITIONS.push({ id: 'other', label: 'Other' });

  const [selected, setSelected] = useState(() => {
    if (formData.healthConditions?.selected) {
      return formData.healthConditions.selected;
    }
    return [];
  });

  const [noneApply, setNoneApply] = useState(
    formData.healthConditions?.noneApply ?? false
  );

  const [error, setError] = useState('');

  const toggleCondition = (id) => {
    setError('');
    setNoneApply(false);
    setSelected(prev => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      if (next.length === 0) setNoneApply(true);
      return next;
    });
  };

  const toggleNone = () => {
    setError('');
    if (!noneApply) {
      setNoneApply(true);
      setSelected([]);
    } else {
      setNoneApply(false);
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!noneApply && selected.length === 0) {
      setError('Please select any conditions that apply, or select "None of these apply to me".');
      return;
    }

    updateFormData({
      healthConditions: {
        selected,
        noneApply
      }
    });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 3 · HEALTH CONDITIONS
      </div>

      <div className="heading-section">
        <h1 className="page-title">Do you have any of these conditions?</h1>
        <p className="page-subtitle">
          Select all that apply.
        </p>
      </div>

      {error && (
        <div className="form-error-banner" style={{ marginBottom: '16px' }}>
          {error}
        </div>
      )}

      {/* Clean Grid of Product Chips */}
      <div className="products-grid">
        {/* Fast-Track 1-Click "None of these apply to me" Row (Full Width) */}
        <div
          onClick={toggleNone}
          role="checkbox"
          aria-checked={noneApply}
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') toggleNone(); }}
          className={`product-chip-card ${noneApply ? 'selected' : ''}`}
          style={{ gridColumn: '1 / -1', border: noneApply ? '2px solid var(--color-primary)' : '1px solid var(--color-border)' }}
        >
          <span style={{ fontWeight: noneApply ? 700 : 500 }}>None of these apply to me</span>
          <div className={`checkbox-box ${noneApply ? 'checked' : ''}`} aria-hidden="true">
            {noneApply && <Check size={13} strokeWidth={3.5} />}
          </div>
        </div>

        {ALL_CONDITIONS.map((item) => {
          const isChecked = selected.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleCondition(item.id)}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') toggleCondition(item.id); }}
              className={`product-chip-card ${isChecked ? 'selected' : ''}`}
            >
              <span>{item.label}</span>
              <div className={`checkbox-box ${isChecked ? 'checked' : ''}`} aria-hidden="true">
                {isChecked && <Check size={13} strokeWidth={3.5} />}
              </div>
            </div>
          );
        })}
      </div>

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
