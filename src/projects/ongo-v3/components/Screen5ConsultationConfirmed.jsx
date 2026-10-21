import React, { useEffect } from 'react';
import { 
  Check, 
  Calendar, 
  CheckCircle2, 
  Video, 
  ShieldCheck, 
  Users 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Screen5ConsultationConfirmed({ formData, onBackToWelcome }) {
  useEffect(() => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#1F4F3D', '#2F8968', '#DDF2DF', '#FF7B60', '#F4E9C8']
      });
    } catch {
      // gracefully handle
    }
  }, []);

  const appointmentDate = formData.appointmentDate ? new Date(formData.appointmentDate) : null;
  const formattedDate = appointmentDate 
    ? new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(appointmentDate)
    : formData.formattedAppointmentDate || 'Thursday, October 1, 2026';

  const appointmentTime = formData.appointmentTime || '10:30 AM';
  const timezone = formData.timezone || 'MDT';

  return (
    <div className="content-inner fade-in" style={{ textAlign: 'center', paddingBottom: '40px', maxWidth: '640px', margin: '0 auto' }}>
      
      {/* Success Badge */}
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#2F8968',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 16px',
        boxShadow: '0 4px 16px rgba(47, 137, 104, 0.3)'
      }}>
        <Check size={32} strokeWidth={2.8} />
      </div>

      <div className="heading-section" style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h1 className="page-title" style={{ fontSize: '28px', color: '#111827', marginBottom: '8px' }}>
          Consultation confirmed 🎉
        </h1>
        <p className="page-subtitle" style={{ fontSize: '15px', color: '#6B7280', maxWidth: '480px', margin: '0 auto', lineHeight: '1.5' }}>
          Your consultation is confirmed. The Ongo Support Care Team will review your details before your visit.
        </p>
      </div>

      {/* Appointment Details Card */}
      <div className="white-elevated-card" style={{ margin: '0 0 20px', textAlign: 'left', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', border: '1.5px solid #A7F3D0' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#166534', flexShrink: 0 }}>
          <Calendar size={22} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 800, fontSize: '16px', color: '#111827', marginBottom: '2px' }}>
            {formattedDate}
          </div>
          <div style={{ fontSize: '14px', color: '#166534', fontWeight: 600 }}>
            {appointmentTime} ({timezone}) &bull; Virtual Support Consultation
          </div>
        </div>
        <div style={{
          background: '#ECFDF5',
          color: '#065F46',
          fontSize: '11.5px',
          fontWeight: 800,
          padding: '4px 10px',
          borderRadius: '999px'
        }}>
          CONFIRMED
        </div>
      </div>

      {/* Support Care Team Card */}
      <div style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        padding: '16px 20px',
        border: '1px solid #E5E7EB',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        textAlign: 'left',
        marginBottom: '20px'
      }}>
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1F4F3D 0%, #2F8968 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(31, 79, 61, 0.25)'
          }}>
            <Users size={26} strokeWidth={2.2} />
          </div>
          <div style={{
            position: 'absolute',
            bottom: '-2px',
            right: '-2px',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: '#1F4F3D',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #FFFFFF'
          }}>
            <CheckCircle2 size={11} strokeWidth={3} />
          </div>
        </div>

        <div>
          <div style={{ fontSize: '15px', fontWeight: 800, color: '#111827' }}>
            Ongo Support Care Team
          </div>
          <div style={{ fontSize: '12.5px', color: '#4B5563' }}>
            Dedicated Telehealth Care Specialists &bull; Support Care Consultation
          </div>
          <div style={{ fontSize: '12px', color: '#059669', fontWeight: 600, marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Video size={13} /> Secure Video Room link will be sent to {formData.email || 'your email'}
          </div>
        </div>
      </div>

      {/* Timeline Card from Screen 25 screenshot */}
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
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#000', marginBottom: '2px' }}>
                Account &amp; Profile Details
              </div>
              <div style={{ fontSize: '13px', color: '#666' }}>
                {formData.firstName || 'Patient'} {formData.lastName || ''} &bull; {formData.email || ''}
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#3A7D63', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Check size={14} strokeWidth={3} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#000', marginBottom: '2px' }}>
                Details Confirmed &amp; Medical Intake
              </div>
              <div style={{ fontSize: '13px', color: '#666' }}>
                Completed. Your appointment details and patient intake are verified.
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#1F4F3D', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', flexShrink: 0 }}>
              3
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#000', marginBottom: '2px' }}>
                Consultation
              </div>
              <div style={{ fontSize: '13px', color: '#666' }}>
                Next. The support care team will meet with you at your scheduled time.
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#F5F5F5', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', flexShrink: 0, border: '1px solid #DDD' }}>
              4
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#999', marginBottom: '2px' }}>
                Medication ships
              </div>
              <div style={{ fontSize: '13px', color: '#999' }}>
                Free, discreet delivery within 2-3 days of your prescription.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Action Button */}
      <button
        type="button"
        className="cta-button-pill active"
        onClick={onBackToWelcome}
        style={{
          width: '100%',
          padding: '16px 24px',
          fontSize: '16px',
          fontWeight: 700,
          background: '#111827',
          color: '#FFFFFF'
        }}
      >
        <span>Go to My Patient Portal</span>
      </button>

      <div style={{ textAlign: 'center', marginTop: '14px' }}>
        <span style={{ fontSize: '12px', color: '#6B7280', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={14} color="#10B981" />
          HIPAA Compliant &bull; Encrypted Telehealth Record
        </span>
      </div>

    </div>
  );
}
