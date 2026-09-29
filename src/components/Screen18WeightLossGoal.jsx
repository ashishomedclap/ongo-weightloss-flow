import React, { useState } from 'react';

const GOALS = [
  { 
    id: '1-15', 
    title: '1–15 lbs.', 
    subtitle: 'Slim down. Tone up. Stay on track.' 
  },
  { 
    id: '16-50', 
    title: '16–50 lbs.', 
    subtitle: 'Lose weight & keep it off — no more yo-yo cycles.' 
  },
  { 
    id: '50plus', 
    title: '50+ lbs.', 
    subtitle: "Bigger goal? We'll match you with the right plan." 
  },
  { 
    id: 'notSure', 
    title: 'I’m not sure yet', 
    subtitle: "That's okay — we'll help you figure it out." 
  },
];

export default function Screen18WeightLossGoal({ formData, updateFormData, onNext, onBack }) {
  const [selectedGoal, setSelectedGoal] = useState(formData.weightLossGoal || null);
  const [error, setError] = useState('');

  const handleSelect = (id) => {
    setSelectedGoal(id);
    setError('');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!selectedGoal) {
      setError('Please select a weight loss goal.');
      return;
    }
    
    updateFormData({ weightLossGoal: selectedGoal });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 9 · GOALS
      </div>

      <div className="heading-section">
        <h1 className="page-title">How much weight would you like to lose?</h1>
      </div>

      {error && (
        <div className="form-error-banner" style={{ marginBottom: '16px' }}>
          {error}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {GOALS.map((goal) => {
          const isSelected = selectedGoal === goal.id;
          return (
            <div
              key={goal.id}
              onClick={() => handleSelect(goal.id)}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelect(goal.id); }}
              style={{
                border: isSelected ? '2px solid #000000' : '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '20px',
                background: '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#000', marginBottom: '4px' }}>
                  {goal.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#888', margin: 0, fontWeight: 400 }}>
                  {goal.subtitle}
                </p>
              </div>
              <div style={{ color: '#888', fontSize: '18px', fontWeight: 300 }}>
                →
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className={`cta-button-pill ${selectedGoal ? 'active' : ''}`}
        style={{ marginTop: '32px' }}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
