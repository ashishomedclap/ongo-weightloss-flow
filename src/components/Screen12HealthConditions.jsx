import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

export default function Screen12HealthConditions({ formData, updateFormData, onNext, onBack }) {
  const isFemale = formData.gender === 'Female';

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
  
  const [otherCondition, setOtherCondition] = useState(
    formData.healthConditions?.otherCondition || ''
  );

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
    
    if (selected.includes('other') && !otherCondition.trim()) {
      setError('Please specify the other health condition.');
      return;
    }

    updateFormData({
      healthConditions: {
        selected,
        noneApply,
        otherCondition: selected.includes('other') ? otherCondition.trim() : ''
      }
    });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 1 OF 14 · COMPREHENSIVE MEDICAL HISTORY
      </div>

      <div className="heading-section">
        <h1 className="page-title">Tell us about your health</h1>
        <p className="page-subtitle">
          Select all conditions that apply to you.
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

      {selected.includes('other') && (
        <div className="input-capsule-wrap fade-in" style={{ marginTop: '16px' }}>
          <input
            id="other-condition"
            type="text"
            className="input-capsule"
            placeholder="Please specify condition"
            value={otherCondition}
            onChange={(e) => setOtherCondition(e.target.value)}
            autoFocus
          />
        </div>
      )}

      {/* Why we ask */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '16px', fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.45' }}>
        <Info size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
        <span><strong>Why we ask:</strong> Your health conditions help your physician assess which treatments are safe and appropriate for you.</span>
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

// Trigger HMR
