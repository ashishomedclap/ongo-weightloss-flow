import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ThemedDropdown from './ThemedDropdown';

const DROPDOWNS = [
  { id: 'fastFood', label: 'Fast food / week', options: ['0', '1-2', '3-4', '5+'] },
  { id: 'sugaryDrinks', label: 'Sugary drinks / week', options: ['0', '1-2', '3-4', '5+'] },
  { id: 'alcohol', label: 'Alcoholic drinks / week', options: ['0', '1-3', '4-7', '8+'] },
  { id: 'drugs', label: 'Recreational drugs', options: ['None', 'Marijuana', 'Other'] },
];

export default function Screen21Lifestyle({ formData, updateFormData, onNext, onBack }) {
  const [lifestyle, setLifestyle] = useState(formData.lifestyle || {});
  const [stress, setStress] = useState(formData.stressLevel || 5);
  const [error, setError] = useState('');

  const handleDropdownChange = (id, value) => {
    setLifestyle(prev => ({ ...prev, [id]: value }));
    setError('');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const missing = DROPDOWNS.some(d => !lifestyle[d.id]);
    if (missing) {
      setError('Please fill out all dropdowns.');
      return;
    }
    
    updateFormData({ lifestyle, stressLevel: stress });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 10 OF 14 · LIFESTYLE
      </div>

      <div className="heading-section">
        <h1 className="page-title">And a few more lifestyle questions</h1>
        <p className="page-subtitle">
          These factors play a big role in your overall wellness.
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
                value={lifestyle[d.id] || ''}
                options={d.options}
                onChange={(val) => handleDropdownChange(d.id, val)}
                placeholder="Select..."
              />
            </div>
          </div>
        ))}
      </div>

      {/* Stress Level Slider Card */}
      <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px', paddingLeft: '4px' }}>Stress level</p>
      <div style={{ background: '#FFF', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-border)' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <span style={{ fontSize: '14px', color: '#999', fontWeight: 600 }}>1</span>
          
          <div style={{ position: 'relative', flex: 1 }}>
            <input
              type="range"
              min="1"
              max="10"
              value={stress}
              onChange={(e) => setStress(parseInt(e.target.value, 10))}
              style={{
                width: '100%',
                accentColor: stress <= 3 ? 'var(--color-primary)' : stress <= 7 ? '#F5B011' : '#C81E1E',
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
            background: stress <= 3 ? 'var(--color-primary)' : stress <= 7 ? '#F5B011' : '#C81E1E',
            color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: '16px', marginLeft: '8px', flexShrink: 0,
            transition: 'background 0.3s ease'
          }}>
            {stress}
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: stress <= 3 ? 'var(--color-primary)' : '#CCC', transition: 'color 0.3s' }}>LOW</span>
          <span style={{ fontSize: '12px', fontWeight: 700, color: (stress > 3 && stress <= 7) ? '#F5B011' : '#CCC', transition: 'color 0.3s' }}>MEDIUM</span>
          <span style={{ fontSize: '12px', fontWeight: 700, color: stress >= 8 ? '#C81E1E' : '#CCC', transition: 'color 0.3s' }}>HIGH</span>
        </div>
      </div>

      <button
        type="button"
        className={`cta-button-pill ${DROPDOWNS.every(d => lifestyle[d.id]) ? 'active' : ''}`}
        style={{ marginTop: '32px' }}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}

// Trigger HMR
