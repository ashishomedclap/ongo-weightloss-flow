import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ThemedDropdown from './ThemedDropdown';

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
        LIFESTYLE
      </div>

      <div className="heading-section">
        <h1 className="page-title">Let's start with your daily routine</h1>
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
        gridTemplateColumns: '1fr 1fr', 
        gap: '16px 12px', 
        marginBottom: '24px' 
      }}>
        {DROPDOWNS.map(d => (
          <div key={d.id} className="input-capsule-wrap" style={{ margin: 0 }}>
            <label className="field-top-label" htmlFor={`dropdown-${d.id}`}>{d.label}</label>
            <div style={{ position: 'relative', marginTop: '4px' }}>
              <ThemedDropdown
                value={routine[d.id] || ''}
                options={d.options}
                onChange={(val) => handleDropdownChange(d.id, val)}
                placeholder="Select..."
              />
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
