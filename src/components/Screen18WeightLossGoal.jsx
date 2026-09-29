import React, { useState } from 'react';

const GOALS = [
  { 
    id: '1-15', 
    title: '1–15 lbs.' 
  },
  { 
    id: '16-50', 
    title: '16–50 lbs.' 
  },
  { 
    id: '50plus', 
    title: '50+ lbs.' 
  },
  { 
    id: 'notSure', 
    title: 'I’m not sure yet' 
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
        YOUR GOALS
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
                width: '100%',
                background: isSelected ? '#F2F9F5' : '#FFFFFF',
                border: `2px solid ${isSelected ? '#2F8968' : '#E2E6E2'}`,
                borderRadius: '16px',
                padding: '16px 20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ fontSize: '15.5px', fontWeight: isSelected ? 700 : 500, color: isSelected ? '#1F4F3D' : '#111111', flex: 1 }}>
                {goal.title}
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
