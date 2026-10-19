import React from 'react';

export default function Screen6InitialResult({ formData, onNext, onBack }) {

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 5 OF 8 · CLINICAL REVIEW
      </div>

      <div className="heading-section">
        <h1 className="page-title">Good news. You may be eligible for GLP-1 treatment</h1>
        <p className="page-subtitle">
          Based on the information you've shared so far, you may be a candidate for prescription weight-management treatment.
        </p>
      </div>

      {/* Treatment Journey Visual Card */}
      <div className="white-elevated-card">
        <div className="card-section-heading">
          Here's what happens next
        </div>

        <div style={{ position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '30px', width: '2px', background: '#E8E8E8', zIndex: 0 }}></div>

          {/* Step 1 */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#3A7D63', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 700 }}>
              1
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#000', marginBottom: '2px' }}>Meet Your Physician</div>
              <div style={{ fontSize: '13.5px', color: '#666', lineHeight: '1.4' }}>Discuss your health history, goals, and previous treatment experience.</div>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FFF', border: '2px solid #E8E8E8', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 700 }}>
              2
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#000', marginBottom: '2px' }}>Review Your Options</div>
              <div style={{ fontSize: '13.5px', color: '#666', lineHeight: '1.4' }}>Your physician will determine which treatment options may be appropriate for you.</div>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FFF', border: '2px solid #E8E8E8', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 700 }}>
              3
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#000', marginBottom: '2px' }}>Start Your Treatment</div>
              <div style={{ fontSize: '13.5px', color: '#666', lineHeight: '1.4' }}>If prescribed, your treatment will be provided according to your clinician's instructions.</div>
            </div>
          </div>

          {/* Step 4 */}
          <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FFF', border: '2px solid #E8E8E8', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 700 }}>
              4
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#000', marginBottom: '2px' }}>Ongoing Care</div>
              <div style={{ fontSize: '13.5px', color: '#666', lineHeight: '1.4' }}>Continue your treatment with follow-up guidance and support.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Clinical Disclaimer */}
      <div className="clinical-note-box" style={{ background: '#FFFDF9', borderColor: '#D49B2A' }}>
        <strong>Important:</strong> This preliminary result does not guarantee eligibility, a prescription, or a specific medication. Your physician makes the final treatment decision after reviewing your complete health information.
      </div>

      <button
        type="button"
        className="cta-button-pill active"
        onClick={onNext}
      >
        <span>Meet Your Physician</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
