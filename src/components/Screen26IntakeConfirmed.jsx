import React, { useEffect } from 'react';
import { Check, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Screen24IntakeConfirmed({ formData, onNext, onBack }) {
  useEffect(() => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#1F4F3D', '#2F8968', '#DDF2DF', '#FF7B60', '#F4E9C8']
      });
    } catch (e) {
      // gracefully handle
    }
  }, []);

  const appointmentDate = formData.appointmentDate ? new Date(formData.appointmentDate) : null;
  const formattedDate = appointmentDate ? new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).format(appointmentDate) : '';

  return (
    <div className="content-inner fade-in" style={{ textAlign: 'center', paddingBottom: '30px' }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: '#3A7D63',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 16px',
        boxShadow: '0 4px 12px rgba(58, 125, 99, 0.2)'
      }}>
        <Check size={28} strokeWidth={2.5} />
      </div>

      <div className="heading-section" style={{ marginBottom: '24px' }}>
        <h1 className="page-title" style={{ fontSize: '28px', color: '#000000', marginBottom: '12px' }}>Appointment confirmed 🎉</h1>
        <p className="page-subtitle" style={{ fontSize: '15px', color: '#666', maxWidth: '440px', margin: '0 auto', lineHeight: '1.5' }}>
          Your clinical intake is complete and your appointment is confirmed. Your physician will review your details before your visit.
        </p>
      </div>

      {/* Appointment Details Card */}
      {formattedDate && formData.appointmentTime && (
        <div className="white-elevated-card" style={{ margin: '0 0 24px', textAlign: 'left', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#F5F8F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3A7D63' }}>
            <Calendar size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '15px', color: '#000', marginBottom: '4px' }}>{formattedDate}</div>
            <div style={{ fontSize: '14px', color: '#666' }}>{formData.appointmentTime}</div>
          </div>
        </div>
      )}

      {/* Timeline Card */}
      <div className="white-elevated-card" style={{ margin: '0 0 24px', textAlign: 'left', padding: '24px 20px' }}>
        <div style={{ position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '30px', width: '2px', background: '#E8E8E8', zIndex: 0 }}></div>
          
          {/* Step 1 */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#3A7D63', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Check size={14} strokeWidth={3} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#000', marginBottom: '2px' }}>Payment</div>
              <div style={{ fontSize: '13.5px', color: '#666', lineHeight: '1.4' }}>{formData.selectedPlan?.title || 'Kickstart'} - ${formData.orderTotal || 249}</div>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#3A7D63', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Check size={14} strokeWidth={3} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#000', marginBottom: '2px' }}>Clinical intake</div>
              <div style={{ fontSize: '13.5px', color: '#666', lineHeight: '1.4' }}>Completed. Your info has been securely submitted.</div>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#3A7D63', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 700 }}>
              3
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#000', marginBottom: '2px' }}>Consultation</div>
              <div style={{ fontSize: '13.5px', color: '#666', lineHeight: '1.4' }}>Next. Your physician will meet with you at your scheduled time.</div>
            </div>
          </div>

          {/* Step 4 */}
          <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FFF', border: '2px solid #E8E8E8', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 700 }}>
              4
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '15px', color: '#000', marginBottom: '2px' }}>Medication ships</div>
              <div style={{ fontSize: '13.5px', color: '#999', lineHeight: '1.4' }}>Free, discreet delivery within 2-3 days of your prescription.</div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="cta-button-pill active"
        onClick={onNext}
        style={{ background: '#111111', color: '#FFFFFF', border: 'none', height: '54px', width: '100%' }}
      >
        <span>Go to My Patient Portal</span>
      </button>

    </div>
  );
}
