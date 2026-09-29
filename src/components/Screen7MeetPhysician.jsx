import React from 'react';
import { Award, CheckCircle, Video, MapPin } from 'lucide-react';

export default function Screen7MeetPhysician({ formData, onNext, onBack }) {
  const patientState = formData.state || 'California';

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        YOUR CARE TEAM
      </div>

      <div className="heading-section">
        <h1 className="page-title">Meet your physician</h1>
        <p className="page-subtitle">
          Your care is reviewed by a licensed healthcare professional who will evaluate your health information and treatment goals.
        </p>
      </div>

      {/* Physician Profile Card */}
      <div className="white-elevated-card" style={{ alignItems: 'center', textAlign: 'center' }}>
        {/* Physician Portrait */}
        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <img
            src="/physician.jpg"
            alt="Dr. Sarah Jenkins MD"
            style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #DDF2DF',
              boxShadow: '0 4px 12px rgba(23, 75, 56, 0.12)'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '2px',
            right: '2px',
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            background: '#1F4F3D',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #FFFFFF'
          }} title="Verified Licensed Medical Doctor">
            <CheckCircle size={15} strokeWidth={2.8} />
          </div>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>
          Dr. Sarah Jenkins, MD, FACP
        </h2>
        
        <p style={{ fontSize: '13.5px', color: '#1F4F3D', fontWeight: 600, marginBottom: '8px' }}>
          Board-Certified Obesity Medicine & Internal Medicine
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
          marginBottom: '18px'
        }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            background: 'var(--color-green-pale)',
            color: 'var(--color-primary-dark)',
            fontSize: '12px',
            fontWeight: 600,
            padding: '4px 10px',
            borderRadius: '14px',
            border: '1px solid var(--color-green-light)'
          }}>
            <MapPin size={13} /> Licensed in {patientState}
          </span>

          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            background: '#F5F4F0',
            color: 'var(--color-text-secondary)',
            fontSize: '12px',
            fontWeight: 600,
            padding: '4px 10px',
            borderRadius: '14px'
          }}>
            <Award size={13} /> 12+ Years Clinical Practice
          </span>
        </div>

        <div style={{
          width: '100%',
          textAlign: 'left',
          background: '#F9FBF8',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '16px'
        }}>
          <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '6px' }}>
            Your consultation
          </div>
          <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: '1.45', margin: 0 }}>
            Your physician will review your health history, previous treatment experience, goals, and potential treatment options before creating a personalized recommendation.
          </p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-primary)',
          fontSize: '13px',
          fontWeight: 700
        }}>
          <Video size={16} color="var(--color-accent)" />
          <span>100% Virtual Care — No in-person visit required</span>
        </div>
      </div>

      <button
        type="button"
        className="cta-button-pill active"
        onClick={onNext}
      >
        <span>Continue to Treatment Options</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
