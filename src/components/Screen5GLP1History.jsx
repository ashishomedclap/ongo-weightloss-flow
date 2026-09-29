import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

export default function Screen5GLP1History({ formData, updateFormData, onNext, onBack }) {
  const [usedBefore, setUsedBefore] = useState(formData.usedGLP1Before ?? null);
  const [error, setError] = useState('');

  const handleSelect = (val) => {
    setUsedBefore(val);
    setError('');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (usedBefore === null) {
      setError('Please select Yes or No to continue.');
      return;
    }
    updateFormData({ usedGLP1Before: usedBefore });
    // If Yes -> goes to branched step 5b (products)
    // If No -> skips branch and goes directly to step 6 (Initial Result)
    onNext(usedBefore ? 'branch-products' : 'skip-to-result');
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-nav-header">
        <button type="button" className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
        <span className="step-counter-text">Previous Treatment</span>
      </div>

      <div className="heading-section" style={{ marginBottom: '28px' }}>
        <h1 className="page-title" style={{ fontSize: '28px' }}>
          Have you used a GLP-1 medication before?
        </h1>
        <p className="page-subtitle">
          Your previous treatment experience helps your clinician understand what you’ve tried and what may be appropriate next.
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
          marginBottom: '16px'
        }}>
          {error}
        </div>
      )}

      {/* Clean, Minimal Yes / No Choice Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
        <div
          onClick={() => handleSelect(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelect(true); }}
          style={{
            height: '64px',
            borderRadius: '16px',
            border: `2px solid ${usedBefore === true ? 'var(--color-accent)' : 'var(--color-border)'}`,
            background: usedBefore === true ? 'var(--color-green-pale)' : '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '17px',
            fontWeight: usedBefore === true ? 800 : 600,
            color: usedBefore === true ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
            boxShadow: usedBefore === true ? '0 4px 14px rgba(47, 137, 104, 0.12)' : 'var(--shadow-card)',
            transition: 'all 0.15s ease',
            outline: 'none'
          }}
        >
          {usedBefore === true && <Check size={18} strokeWidth={3} />}
          <span>Yes</span>
        </div>

        <div
          onClick={() => handleSelect(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelect(false); }}
          style={{
            height: '64px',
            borderRadius: '16px',
            border: `2px solid ${usedBefore === false ? 'var(--color-accent)' : 'var(--color-border)'}`,
            background: usedBefore === false ? 'var(--color-green-pale)' : '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '17px',
            fontWeight: usedBefore === false ? 800 : 600,
            color: usedBefore === false ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
            boxShadow: usedBefore === false ? '0 4px 14px rgba(47, 137, 104, 0.12)' : 'var(--shadow-card)',
            transition: 'all 0.15s ease',
            outline: 'none'
          }}
        >
          {usedBefore === false && <Check size={18} strokeWidth={3} />}
          <span>No</span>
        </div>
      </div>

      <p style={{
        fontSize: '12.5px',
        color: 'var(--color-text-muted)',
        textAlign: 'center',
        margin: '0 auto 24px',
        lineHeight: '1.4'
      }}>
        {usedBefore === true 
          ? "We'll ask a couple of quick questions about your previous medication and dose." 
          : "First time trying GLP-1s? Ongo will tailor your journey from day one."}
      </p>

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
