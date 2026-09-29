import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

export default function Screen4SafetyChecks({ formData, updateFormData, onNext, onBack }) {
  const isFemale = formData.gender === 'Female' || formData.gender === 'Prefer not to say' || !formData.gender;

  // Clean, sorted, concise conditions without verbose textbook clutter
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

  // Track checked condition IDs
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
      <div className="step-nav-header">
        <button type="button" className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
        <span className="step-counter-text">Safety Screening</span>
      </div>

      <div className="heading-section" style={{ marginBottom: '20px' }}>
        <h1 className="page-title" style={{ fontSize: '28px', marginBottom: '6px' }}>
          Important Safety Checks
        </h1>
        <p className="page-subtitle" style={{ fontSize: '15px' }}>
          Do any of the following apply to you? Select all that apply.
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
          marginBottom: '14px'
        }}>
          {error}
        </div>
      )}

      {/* Unified Minimalist Checklist Container */}
      <div style={{
        background: '#FFFFFF',
        border: '1.5px solid var(--color-border)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
        marginBottom: '20px'
      }}>
        {/* Fast-Track 1-Click "None of these apply to me" Row */}
        <div
          onClick={toggleNone}
          role="checkbox"
          aria-checked={noneApply}
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') toggleNone(); }}
          style={{
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            cursor: 'pointer',
            background: noneApply ? 'var(--color-green-pale)' : '#FCFBF9',
            borderBottom: '1.5px solid var(--color-border)',
            transition: 'background-color 0.15s ease',
            userSelect: 'none'
          }}
        >
          <div style={{
            width: '22px',
            height: '22px',
            borderRadius: '6px',
            border: `2px solid ${noneApply ? 'var(--color-accent)' : '#C0CDC0'}`,
            background: noneApply ? 'var(--color-accent)' : '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            flexShrink: 0,
            transition: 'all 0.15s ease'
          }}>
            {noneApply && <Check size={16} strokeWidth={3} />}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <span style={{
              fontSize: '15px',
              fontWeight: 700,
              color: noneApply ? 'var(--color-primary-dark)' : 'var(--color-text-primary)'
            }}>
              None of these apply to me
            </span>
          </div>

          {noneApply && (
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--color-primary-dark)',
              background: 'var(--color-green-light)',
              padding: '2px 8px',
              borderRadius: '10px'
            }}>
              Selected ✓
            </span>
          )}
        </div>

        {/* Clean Condition Rows */}
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
              style={{
                padding: '13px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                cursor: 'pointer',
                background: isChecked ? 'var(--color-green-pale)' : '#FFFFFF',
                borderBottom: isLast ? 'none' : '1px solid #EEF1EE',
                transition: 'background-color 0.12s ease',
                userSelect: 'none'
              }}
            >
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '5px',
                border: `2px solid ${isChecked ? 'var(--color-accent)' : '#CBD5CB'}`,
                background: isChecked ? 'var(--color-accent)' : '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                flexShrink: 0,
                transition: 'all 0.12s ease'
              }}>
                {isChecked && <Check size={14} strokeWidth={3} />}
              </div>

              <span style={{
                fontSize: '14px',
                fontWeight: isChecked ? 600 : 500,
                color: isChecked ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
                lineHeight: '1.35',
                flex: 1
              }}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Minimal Reassurance Note */}
      <p style={{
        fontSize: '12px',
        color: 'var(--color-text-muted)',
        textAlign: 'center',
        margin: '0 auto 18px',
        maxWidth: '460px',
        lineHeight: '1.4'
      }}>
        Your physician will review your complete health history before prescribing any medication.
      </p>

      {/* Primary CTA */}
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
