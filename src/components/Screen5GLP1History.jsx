import React, { useState } from 'react';
import { Check } from 'lucide-react';

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
      <div className="step-tag-teal">
        STEP 3 · PREVIOUS TREATMENT
      </div>

      <div className="heading-section">
        <h1 className="page-title">Have you used a GLP-1 medication before?</h1>
        <p className="page-subtitle">
          Your previous treatment experience helps your clinician understand what you've tried and what may be appropriate next.
        </p>
      </div>

      {error && (
        <div className="form-error-banner">
          {error}
        </div>
      )}

      {/* Clean, Minimal Yes / No Choice Cards */}
      <div className="choice-cards-pair">
        <div
          onClick={() => handleSelect(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelect(true); }}
          className={`choice-card ${usedBefore === true ? 'selected' : ''}`}
        >
          <div className={`checkbox-box ${usedBefore === true ? 'checked' : ''}`} aria-hidden="true">
            {usedBefore === true && <Check size={14} strokeWidth={3} />}
          </div>
          <span className="choice-title">Yes</span>
        </div>

        <div
          onClick={() => handleSelect(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleSelect(false); }}
          className={`choice-card ${usedBefore === false ? 'selected' : ''}`}
        >
          <div className={`checkbox-box ${usedBefore === false ? 'checked' : ''}`} aria-hidden="true">
            {usedBefore === false && <Check size={14} strokeWidth={3} />}
          </div>
          <span className="choice-title">No</span>
        </div>
      </div>

      <p className="safety-sub-note">
        {usedBefore === true 
          ? "We'll ask a couple of quick questions about your previous medication and dose." 
          : "First time trying GLP-1s? Ongo will tailor your journey from day one."}
      </p>

      <button
        type="button"
        className={`cta-button-pill ${usedBefore !== null ? 'active' : ''}`}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
