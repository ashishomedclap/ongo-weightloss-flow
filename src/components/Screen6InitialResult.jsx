import React from 'react';
import { ArrowLeft, ArrowRight, UserCheck, Stethoscope, Sparkles, TrendingDown, ShieldAlert, HeartPulse } from 'lucide-react';

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
      desc: 'If prescribed, your treatment will be provided according to your clinician’s instructions.',
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
      <div className="step-nav-header">
        <button type="button" className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
        <span className="step-counter-text" style={{ background: 'var(--color-green-light)', color: 'var(--color-primary-dark)' }}>
          Clinical Assessment
        </span>
      </div>

      <div className="heading-section">
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'var(--color-green-light)',
          color: 'var(--color-primary-dark)',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '12.5px',
          fontWeight: 700,
          marginBottom: '10px'
        }}>
          <UserCheck size={14} /> Preliminary Candidate
        </div>
        <h1 className="page-title">Good news. You may be eligible for GLP-1 treatment</h1>
        <p className="page-subtitle">
          Based on the information you’ve shared so far, you may be a candidate for prescription weight-management treatment.
        </p>
      </div>

      {/* Treatment Journey Visual Cards */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid var(--color-border)',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: 'var(--shadow-card)'
      }}>
        <div style={{
          fontSize: '14px',
          fontWeight: 700,
          color: 'var(--color-primary-dark)',
          marginBottom: '16px'
        }}>
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
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: i === 0 ? 'var(--color-primary-dark)' : 'var(--color-green-pale)',
                  color: i === 0 ? '#FFFFFF' : 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: 800,
                  flexShrink: 0
                }}>
                  <IconC size={16} />
                </div>

                <div style={{ flex: 1, paddingBottom: i < steps.length - 1 ? '10px' : '0' }}>
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
        className="cta-button"
        onClick={onNext}
      >
        <span>Meet Your Physician</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
