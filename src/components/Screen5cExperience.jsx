import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

const STOPPING_REASONS = [
  { id: 'sideEffects', label: 'Side effects' },
  { id: 'cost', label: 'Cost' },
  { id: 'availability', label: 'Medication availability' },
  { id: 'insufficientBenefit', label: "Didn't see enough benefit" },
  { id: 'reachedGoal', label: 'Reached my goal' },
  { id: 'physicianChange', label: 'Physician recommended a change' },
  { id: 'stillTaking', label: 'Still taking it' },
  { id: 'other', label: 'Other' },
];

export default function Screen5cExperience({ formData, updateFormData, onNext, onBack }) {
  const [experience, setExperience] = useState(() => {
    if (typeof formData.glp1Experience === 'number') return formData.glp1Experience;
    return 5; // Default slider value
  });
  const [stoppingReason, setStoppingReason] = useState(formData.glp1StoppingReason || null);
  const [otherReason, setOtherReason] = useState(
    formData.glp1StoppingReason === 'other' ? (formData.glp1StoppingReasonOther || '') : ''
  );
  const [error, setError] = useState('');

  const handleSelectReason = (id) => {
    setStoppingReason(id);
    setError('');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!stoppingReason) {
      setError('Please select a reason.');
      return;
    }
    if (stoppingReason === 'other' && otherReason.trim() === '') {
      setError('Please specify your reason.');
      return;
    }
    if (!experience) {
      setError('Please rate your experience.');
      return;
    }
    updateFormData({
      glp1Experience: experience,
      glp1StoppingReason: stoppingReason,
      glp1StoppingReasonOther: stoppingReason === 'other' ? otherReason.trim() : '',
    });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 4 OF 8 · GLP-1 HISTORY
      </div>

      <div className="heading-section">
        <h1 className="page-title">What was the main reason you stopped or changed treatment?</h1>
        <p className="page-subtitle">
          Understanding your past experience helps your physician choose the best approach for you.
        </p>
      </div>

      {error && (
        <div className="form-error-banner" style={{ marginBottom: '16px' }}>
          {error}
        </div>
      )}

      {/* Stopping Reason */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
        {STOPPING_REASONS.map((item) => {
          const isSelected = stoppingReason === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleSelectReason(item.id)}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelectReason(item.id); }}
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
              <span style={{ fontSize: '15.5px', fontWeight: isSelected ? 700 : 500, color: isSelected ? '#1F4F3D' : '#111111', flex: 1 }}>
                {item.label}
              </span>
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

      {stoppingReason === 'other' && (
        <div className="input-capsule-wrap fade-in" style={{ marginTop: '-16px', marginBottom: '28px' }}>
          <input
            id="other-reason"
            type="text"
            className="input-capsule"
            placeholder="Please specify"
            value={otherReason}
            onChange={(e) => setOtherReason(e.target.value)}
            autoFocus
          />
        </div>
      )}

      {/* Experience Rating */}
      {stoppingReason && (
        <div className="fade-in">
          <div className="section-label-small">ON A SCALE OF 1-10, HOW WOULD YOU RATE YOUR OVERALL EXPERIENCE?</div>
          
          <div style={{ background: '#FFF', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{ fontSize: '14px', color: '#999', fontWeight: 600 }}>1</span>
              
              <div style={{ position: 'relative', flex: 1 }}>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={experience}
                  onChange={(e) => { setExperience(parseInt(e.target.value, 10)); setError(''); }}
                  style={{
                    width: '100%',
                    accentColor: experience >= 8 ? 'var(--color-primary)' : experience >= 4 ? '#F5B011' : '#C81E1E',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 2,
                    transition: 'accent-color 0.3s ease'
                  }}
                />
                {/* 10 Markers */}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 6px', marginTop: '-4px', position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                    <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '2px', height: '6px', background: '#D8D8D8', borderRadius: '1px' }} />
                    </div>
                  ))}
                </div>
              </div>
              
              <span style={{ fontSize: '14px', color: '#999', fontWeight: 600 }}>10</span>
              
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%', 
                background: experience >= 8 ? 'var(--color-primary)' : experience >= 4 ? '#F5B011' : '#C81E1E',
                color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '16px', marginLeft: '8px', flexShrink: 0,
                transition: 'background 0.3s ease'
              }}>
                {experience}
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: experience <= 3 ? '#C81E1E' : '#CCC', transition: 'color 0.3s' }}>DIFFICULT</span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: (experience >= 4 && experience <= 7) ? '#F5B011' : '#CCC', transition: 'color 0.3s', textAlign: 'center' }}>MIXED</span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: experience >= 8 ? 'var(--color-primary)' : '#CCC', transition: 'color 0.3s', textAlign: 'right' }}>POSITIVE</span>
            </div>
          </div>
        </div>
      )}

      {/* Why we ask */}
      <div className="why-we-ask-note" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '24px', fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.45' }}>
        <Info size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
        <span><strong>Why we ask:</strong> Your previous experience can help your physician understand what you've tried before and what approach may work best.</span>
      </div>

      <button
        type="button"
        className={`cta-button-pill ${(experience && stoppingReason && (stoppingReason !== 'other' || otherReason.trim() !== '')) ? 'active' : ''}`}
        style={{ marginTop: '24px' }}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
