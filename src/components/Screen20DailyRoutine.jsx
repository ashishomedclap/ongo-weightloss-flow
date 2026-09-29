import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const DROPDOWNS = [
  { id: 'meals', label: 'Meals per day', options: ['1', '2', '3', '4', '5+'] },
  { id: 'water', label: 'Water intake daily', options: ['<4 cups', '4-8 cups', '8+ cups'] },
  { id: 'sleep', label: 'Sleep hours / night', options: ['<5', '5-6', '7-8', '9+'] },
  { id: 'exercise', label: 'Exercise days / week', options: ['0', '1-2', '3-4', '5+'] },
];

export default function Screen20DailyRoutine({ formData, updateFormData, onNext, onBack }) {
  const [routine, setRoutine] = useState(formData.routine || {});
  const [error, setError] = useState('');

  const handleDropdownChange = (id, value) => {
    setRoutine(prev => ({ ...prev, [id]: value }));
    setError('');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const missing = DROPDOWNS.some(d => !routine[d.id]);
    if (missing) {
      setError('Please fill out all dropdowns.');
      return;
    }
    
    updateFormData({ routine });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 11 · HABITS
      </div>

      <div className="heading-section">
        <h1 className="page-title">Can you tell us a bit about your daily routine and habits?</h1>
        <p className="page-subtitle">
          This helps your doctor build the right plan for you.
        </p>
      </div>

      {error && (
        <div className="form-error-banner" style={{ marginBottom: '16px' }}>
          {error}
        </div>
      )}

      {/* Grid of Dropdowns */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
        gap: '12px', 
        marginBottom: '24px' 
      }}>
        {DROPDOWNS.map(d => (
          <div key={d.id} style={{ position: 'relative' }}>
            <select
              value={routine[d.id] || ''}
              onChange={(e) => handleDropdownChange(d.id, e.target.value)}
              className="input-capsule"
              style={{
                appearance: 'none',
                WebkitAppearance: 'none',
                width: '100%',
                cursor: 'pointer',
                color: routine[d.id] ? 'var(--color-text)' : '#888',
                paddingRight: '40px',
              }}
            >
              <option value="" disabled>{d.label}</option>
              {d.options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {/* Custom Arrow */}
            <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#999' }}>
              <ChevronDown size={18} strokeWidth={2.5} />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`cta-button-pill ${DROPDOWNS.every(d => routine[d.id]) ? 'active' : ''}`}
        style={{ marginTop: '32px' }}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
