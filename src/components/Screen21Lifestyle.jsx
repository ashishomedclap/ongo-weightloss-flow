import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
        STEP 12 · LIFESTYLE
      </div>

      <div className="heading-section">
        <h1 className="page-title">What about your lifestyle habits?</h1>
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
        gap: '12px', 
        marginBottom: '24px' 
      }}>
        {DROPDOWNS.map(d => (
          <div key={d.id} style={{ position: 'relative' }}>
            <select
              value={lifestyle[d.id] || ''}
              onChange={(e) => handleDropdownChange(d.id, e.target.value)}
              className="input-capsule"
              style={{
                appearance: 'none',
                WebkitAppearance: 'none',
                width: '100%',
                cursor: 'pointer',
                color: lifestyle[d.id] ? 'var(--color-text)' : '#888',
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

      {/* Stress Level Slider Card */}
      <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px', paddingLeft: '4px' }}>Stress level</p>
      <div style={{ background: '#FFF', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-border)' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ fontSize: '14px', color: '#999' }}>1</span>
          
          <input
            type="range"
            min="1"
            max="10"
            value={stress}
            onChange={(e) => setStress(parseInt(e.target.value, 10))}
            style={{
              flex: 1,
              accentColor: 'var(--color-primary)',
              cursor: 'pointer'
            }}
          />
          
          <span style={{ fontSize: '14px', color: '#999' }}>10</span>
          
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-primary)',
            color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: '16px', marginLeft: '8px', flexShrink: 0
          }}>
            {stress}
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: stress <= 3 ? 'var(--color-primary)' : '#BBB', transition: 'color 0.2s' }}>LOW</span>
          <span style={{ fontSize: '12px', fontWeight: 600, color: (stress > 3 && stress < 8) ? 'var(--color-primary)' : '#BBB', transition: 'color 0.2s' }}>MEDIUM</span>
          <span style={{ fontSize: '12px', fontWeight: 600, color: stress >= 8 ? 'var(--color-primary)' : '#BBB', transition: 'color 0.2s' }}>HIGH</span>
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
