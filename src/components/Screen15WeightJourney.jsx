import React, { useState } from 'react';

export default function Screen15WeightJourney({ formData, updateFormData, onNext, onBack }) {
  const [highestWeight, setHighestWeight] = useState(formData.highestWeight || '');
  const [lowestWeight, setLowestWeight] = useState(formData.lowestWeight || '');
  const [goalWeight, setGoalWeight] = useState(formData.goalWeight || '');
  const [waistCircumference, setWaistCircumference] = useState(formData.waistCircumference || '');
  const [error, setError] = useState('');

  const handleContinue = (e) => {
    e.preventDefault();
    if (!highestWeight || !lowestWeight || !goalWeight) {
      setError('Please fill out all required fields.');
      return;
    }
    
    updateFormData({ highestWeight, lowestWeight, goalWeight, waistCircumference });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 6 · WEIGHT JOURNEY
      </div>

      <div className="heading-section">
        <h1 className="page-title">Can you share a little about your weight journey so far?</h1>
        <p className="page-subtitle">
          This helps your doctor understand your journey.
        </p>
      </div>

      {error && (
        <div className="form-error-banner" style={{ marginBottom: '16px' }}>
          {error}
        </div>
      )}

      <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label className="field-top-label">Highest adult weight (lbs)</label>
            <input
              type="number"
              className="input-capsule"
              placeholder="e.g. 220"
              value={highestWeight}
              onChange={(e) => {
                setHighestWeight(e.target.value);
                setError('');
              }}
            />
          </div>
          <div>
            <label className="field-top-label">Lowest weight, past 5 yrs (lbs)</label>
            <input
              type="number"
              className="input-capsule"
              placeholder="e.g. 150"
              value={lowestWeight}
              onChange={(e) => {
                setLowestWeight(e.target.value);
                setError('');
              }}
            />
          </div>
        </div>

        <div>
          <label className="field-top-label">Goal weight (lbs)</label>
          <input
            type="number"
            className="input-capsule"
            placeholder="e.g. 165"
            value={goalWeight}
            onChange={(e) => {
              setGoalWeight(e.target.value);
              setError('');
            }}
          />
        </div>

        <div>
          <label className="field-top-label">Waist circumference (inches) <span style={{ color: '#888', fontWeight: 400 }}>— optional</span></label>
          <input
            type="number"
            className="input-capsule"
            placeholder="e.g. 34"
            value={waistCircumference}
            onChange={(e) => setWaistCircumference(e.target.value)}
          />
        </div>
      </div>

      <button
        type="button"
        className={`cta-button-pill ${(highestWeight && lowestWeight && goalWeight) ? 'active' : ''}`}
        style={{ marginTop: '32px' }}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
