import React from 'react';
import { UserCheck, Stethoscope, Sparkles, TrendingDown, HeartPulse } from 'lucide-react';

export default function Screen6InitialResult({ formData, onNext, onBack }) {
  const steps = [
    {
      num: 1,
      title: 'Meet Your Physician',
      desc: 'Discuss your health history, goals, and previous treatment experience.',
      icon: Stethoscope
    },
    {
      num: 2,
      title: 'Review Your Options',
      desc: 'Your physician will determine which treatment options may be appropriate for you.',
      icon: Sparkles
    },
    {
      num: 3,
      title: 'Start Your Treatment',
      desc: "If prescribed, your treatment will be provided according to your clinician's instructions.",
      icon: HeartPulse
    },
    {
      num: 4,
      title: 'Ongoing Care',
      desc: 'Continue your treatment with follow-up guidance and support.',
      icon: TrendingDown
    }
  ];

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        ASSESSMENT · ELIGIBILITY MATCH
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
          Your Personalized Treatment Pathway
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {steps.map((st, i) => {
            const IconC = st.icon;
            return (
              <div 
                key={st.num} 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: i === 0 ? 'var(--color-primary-dark)' : '#EEF8EC',
                  color: i === 0 ? '#FFFFFF' : '#1F4F3D',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: 800,
                  flexShrink: 0
                }}>
                  <IconC size={18} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '2px' }}>
                    {st.num}. {st.title}
                  </div>
                  <div style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: '1.4' }}>
                    {st.desc}
                  </div>
                </div>
              </div>
            );
          })}
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
