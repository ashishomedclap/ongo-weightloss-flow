import React, { useEffect } from 'react';
import { 
  Check, 
  Calendar, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Video, 
  ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Screen5Confirmed({ formData, onBackToWelcome }) {
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

  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Ongo Health//Weight Loss Consultation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Ongo Weight Loss Physician Consultation (Dr. Sarah Jenkins, MD)`,
      `DESCRIPTION:1-on-1 virtual medical consultation with Dr. Sarah Jenkins and the Ongo Care Team. Video room link: https://meet.ongohealth.com/room/ong-78291`,
      `LOCATION:Ongo Telehealth Virtual Room`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'ongo-consultation.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          Appointment confirmed 🎉
        </h1>
        <p className="page-subtitle" style={{ fontSize: '15px', color: '#6B7280', maxWidth: '480px', margin: '0 auto', lineHeight: '1.5' }}>
          Your clinical intake is complete and your appointment is confirmed. Your physician will review your details before your visit.
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
            {appointmentTime} ({timezone}) &bull; Virtual Telehealth Visit
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

      {/* Care Team Doctor Card */}
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
          <img
            src="/physician.jpg"
            alt="Dr. Sarah Jenkins"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #2F8968'
            }}
          />
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
            Dr. Sarah Jenkins, MD, FACP
          </div>
          <div style={{ fontSize: '12.5px', color: '#4B5563' }}>
            Board-Certified Obesity Medicine &bull; Licensed in {formData.state || 'California'}
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
                Clinical Health Assessment
              </div>
              <div style={{ fontSize: '13px', color: '#666' }}>
                Completed. Your safety responses have been securely submitted.
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
                Next. Your physician will meet with you at your scheduled time.
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

      {/* Calendar Sync Buttons */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
        <button
          type="button"
          onClick={handleDownloadICS}
          style={{
            flex: 1,
            minWidth: '180px',
            padding: '12px 18px',
            borderRadius: '12px',
            background: '#FFFFFF',
            color: '#1F4F3D',
            border: '1.5px solid #2F8968',
            fontWeight: 700,
            fontSize: '13.5px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <Download size={16} />
          <span>Download .ICS Calendar Invite</span>
        </button>

        <a
          href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ongo+Weight+Loss+Consultation+with+Dr.+Jenkins&dates=20261001T173000Z/20261001T180000Z&details=1-on-1+Consultation+with+Ongo+Medical+Team&location=https://meet.ongohealth.com/room/ong-78291`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            minWidth: '180px',
            padding: '12px 18px',
            borderRadius: '12px',
            background: '#1F4F3D',
            color: '#FFFFFF',
            border: 'none',
            fontWeight: 700,
            fontSize: '13.5px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            textDecoration: 'none'
          }}
        >
          <ExternalLink size={16} />
          <span>Add to Google Calendar</span>
        </a>
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
