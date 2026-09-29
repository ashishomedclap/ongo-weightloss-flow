import React, { useEffect } from 'react';
import { CheckCircle2, FileText, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Screen11Confirmed({ formData, onRestart }) {
  useEffect(() => {
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1F4F3D', '#2F8968', '#DDF2DF', '#FF7B60', '#F4E9C8']
      });
    } catch (e) {
      // gracefully handle
    }
  }, []);

  const orderNum = 'OG-' + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="content-inner fade-in" style={{ textAlign: 'center' }}>
      <div style={{
        width: '68px',
        height: '68px',
        borderRadius: '50%',
        background: '#DDF2DF',
        color: '#1F4F3D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 18px',
        boxShadow: '0 6px 20px rgba(47, 137, 104, 0.15)'
      }}>
        <CheckCircle2 size={38} strokeWidth={2.4} />
      </div>

      <div className="heading-section" style={{ marginBottom: '18px' }}>
        <span className="step-tag-teal" style={{ marginBottom: '8px' }}>
          ORDER #{orderNum} CONFIRMED
        </span>
        <h1 className="page-title">Payment Confirmed ✓</h1>
        <p className="page-subtitle" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-primary-dark)', marginTop: '4px' }}>
          You're officially on your way.
        </p>
        <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', marginTop: '8px', maxWidth: '440px', margin: '8px auto 0' }}>
          Your payment has been successfully processed. We've received your order and your Ongo care journey can now continue.
        </p>
      </div>

      {/* Next Step Box */}
      <div className="white-elevated-card" style={{ margin: '20px 0', textAlign: 'left' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-primary-dark)',
          fontSize: '15px',
          fontWeight: 800,
          marginBottom: '6px'
        }}>
          <FileText size={18} color="#1F4F3D" />
          <span>Next: Complete Your Health Assessment</span>
        </div>
        <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: '1.45', margin: 0 }}>
          Your clinician needs a few additional details about your health, medications, goals, and lifestyle before your consultation.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          type="button"
          className="cta-button-pill active"
          onClick={() => alert("Proceeding to comprehensive clinical intake questionnaire...")}
        >
          <span>Continue to Health Assessment</span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </button>

        <button
          type="button"
          className="secondary-btn"
          onClick={onRestart}
          style={{ width: '100%', height: '46px', border: 'none', background: 'transparent', color: 'var(--color-text-secondary)' }}
        >
          <RefreshCw size={14} /> Restart Survey Demo
        </button>
      </div>
    </div>
  );
}
