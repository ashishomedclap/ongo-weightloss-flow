import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

export default function Screen4HealthQuestions({ formData, updateFormData, onNext, onBack }) {
  const isFemale = formData.gender === 'Female' || formData.gender === 'Prefer not to say' || !formData.gender;

  const conditions = [
    ...(isFemale ? [
      { id: 'pregnancy', label: 'Currently pregnant or breastfeeding' }
    ] : []),
    { id: 'gallbladder', label: 'Gallbladder problems or gallstones' },
    { id: 'pancreatitis', label: 'History of pancreatitis' },
    { id: 'gastroparesis', label: 'Severe gastroparesis (delayed stomach emptying)' },
    { id: 'thyroidCancer', label: 'Medullary thyroid cancer (MTC) or family history' },
    { id: 'men2', label: 'Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)' },
    { id: 'glp1Allergy', label: 'Severe allergic reaction to GLP-1 medications' },
    { id: 'kidneyDialysis', label: 'Kidney disease requiring dialysis' },
    { id: 'eatingDisorder', label: 'History of an eating disorder' },
  ];

  const [selected, setSelected] = useState(() => {
    if (formData.safetyAnswers) {
      return Object.keys(formData.safetyAnswers).filter(k => formData.safetyAnswers[k] === 'Yes');
    }
    return [];
  });

  const [noneApply, setNoneApply] = useState(
    formData.noneApply ?? (selected.length === 0)
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

    const safetyAnswers = {};
    conditions.forEach(c => {
      safetyAnswers[c.id] = selected.includes(c.id) ? 'Yes' : 'No';
    });

    updateFormData({
      safetyAnswers,
      noneApply,
      selectedConditionsCount: selected.length
    });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 3 OF 8 · HEALTH ASSESSMENT
      </div>

      <div className="heading-section">
        <h1 className="page-title">A few important health questions</h1>
        <p className="page-subtitle">
          Your answers help us identify anything your physician should know before discussing treatment with you. Select all that apply.
        </p>
      </div>

      {error && (
        <div className="form-error-banner">
          {error}
        </div>
      )}

      {/* Unified Rounded Checklist Card */}
      <div className="safety-checks-card">
        {/* "None of these apply to me" Row */}
        <div
          onClick={toggleNone}
          role="checkbox"
          aria-checked={noneApply}
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') toggleNone(); }}
          className={`safety-check-row ${noneApply ? 'row-active-none' : ''}`}
        >
          <div className={`checkbox-box ${noneApply ? 'checked' : ''}`} aria-hidden="true">
            {noneApply && <Check size={14} strokeWidth={3} />}
          </div>

          <div className="safety-check-text-wrap">
            <span className={`safety-check-title ${noneApply ? 'text-green-bold' : ''}`}>
              None of these apply to me
            </span>
          </div>


        </div>

        {/* Condition Rows */}
        {conditions.map((item, idx) => {
          const isChecked = selected.includes(item.id);
          const isLast = idx === conditions.length - 1;

          return (
            <div
              key={item.id}
              onClick={() => toggleCondition(item.id)}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') toggleCondition(item.id); }}
              className={`safety-check-row ${isChecked ? 'row-active' : ''} ${isLast ? 'is-last' : ''}`}
            >
              <div className={`checkbox-box ${isChecked ? 'checked' : ''}`} aria-hidden="true">
                {isChecked && <Check size={14} strokeWidth={3} />}
              </div>

              <span className={`safety-check-text ${isChecked ? 'text-selected' : ''}`}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Why we ask & Reassurance */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '16px', marginBottom: '24px', fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.45' }}>
        <Info size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span><strong>Why we ask:</strong> These conditions may affect which treatments your physician can safely consider for you.</span>
          <span>Your physician will review your complete health history before prescribing any medication.</span>
        </div>
      </div>

      {/* Primary CTA pill */}
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

// Trigger HMR 6
