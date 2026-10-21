import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Video, 
  Edit3, 
  Users 
} from 'lucide-react';

export default function Screen4ReviewDetails({ 
  formData, 
  onConfirm, 
  onBack, 
  onEditSection 
}) {
  const appointmentDate = formData.appointmentDate ? new Date(formData.appointmentDate) : null;
  const formattedDate = appointmentDate 
    ? new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(appointmentDate)
    : formData.formattedAppointmentDate || 'Thursday, October 1, 2026';

  const appointmentTime = formData.appointmentTime || '10:30 AM';
  const timezone = formData.timezone || 'MDT';

  return (
    <div className="content-inner fade-in" style={{ paddingBottom: '40px', maxWidth: '640px', margin: '0 auto' }}>
      
      {/* Top Heading */}
      <div className="heading-section" style={{ marginBottom: '24px', textAlign: 'center' }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: '#ECFDF5',
          color: '#065F46',
          fontSize: '12px',
          fontWeight: 800,
          padding: '4px 12px',
          borderRadius: '999px',
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.04em'
        }}>
          <CheckCircle2 size={13} color="#059669" />
          Step 4 of 5 • Final Review
        </span>
        <h1 className="page-title" style={{ fontSize: '28px', color: '#111827', marginBottom: '8px', fontWeight: 800 }}>
          Review &amp; confirm details
        </h1>
        <p className="page-subtitle" style={{ fontSize: '15px', color: '#6B7280', maxWidth: '500px', margin: '0 auto', lineHeight: '1.5' }}>
          Please verify your information before confirming your free consultation with the clinical care team. You can edit any section below.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
        
        {/* ========================================================================= */}
        {/* CARD 1: Selected Consultation & Appointment (Highlighted)                 */}
        {/* ========================================================================= */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1.5px solid #A7F3D0',
          boxShadow: '0 4px 16px rgba(16, 185, 129, 0.08)',
          overflow: 'hidden'
        }}>
          <div style={{
            background: 'linear-gradient(90deg, #F0FDF4 0%, #FFFFFF 100%)',
            padding: '14px 20px',
            borderBottom: '1px solid #E5E7EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#1F4F3D',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Calendar size={18} />
              </div>
              <div>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#111827' }}>
                  Consultation &amp; Appointment
                </span>
                <span style={{
                  marginLeft: '8px',
                  background: '#ECFDF5',
                  color: '#065F46',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '999px'
                }}>
                  FREE
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onEditSection ? onEditSection('3') : onBack()}
              style={{
                background: '#FFFFFF',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#1F4F3D',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1F4F3D';
                e.currentTarget.style.background = '#F0FDF4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#D1D5DB';
                e.currentTarget.style.background = '#FFFFFF';
              }}
              title="Change date or time"
            >
              <Edit3 size={13} />
              <span>Edit</span>
            </button>
          </div>

          <div style={{ padding: '18px 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '11.5px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '4px' }}>
                  Scheduled Date
                </div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#111827', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={15} color="#2F8968" />
                  {formattedDate}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11.5px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '4px' }}>
                  Time Slot ({timezone})
                </div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#111827', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={15} color="#2F8968" />
                  {appointmentTime} ({timezone})
                </div>
              </div>
            </div>

            {/* Support Care Team Info Pill */}
            <div style={{
              background: '#F9FAFB',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1F4F3D 0%, #2F8968 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(31, 79, 61, 0.2)'
              }}>
                <Users size={22} strokeWidth={2.2} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#111827' }}>
                  Ongo Support Care Team
                </div>
                <div style={{ fontSize: '12px', color: '#4B5563' }}>
                  Dedicated Care Specialists &bull; 1-on-1 Virtual Consultation (15–20 min)
                </div>
              </div>
              <div style={{
                background: '#ECFDF5',
                color: '#065F46',
                padding: '4px 8px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Video size={12} />
                Virtual Visit
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CARD 2: Personal Profile Details                                          */}
        {/* ========================================================================= */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E5E7EB',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          overflow: 'hidden'
        }}>
          <div style={{
            background: '#F9FAFB',
            padding: '14px 20px',
            borderBottom: '1px solid #E5E7EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#374151',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <User size={18} />
              </div>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#111827' }}>
                Personal Profile
              </span>
            </div>

            <button
              type="button"
              onClick={() => onEditSection ? onEditSection('2') : onBack()}
              style={{
                background: '#FFFFFF',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#374151',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#111827';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#D1D5DB';
              }}
              title="Edit personal profile"
            >
              <Edit3 size={13} />
              <span>Edit</span>
            </button>
          </div>

          <div style={{ padding: '18px 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
              <div>
                <div style={{ fontSize: '11.5px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '4px' }}>
                  Legal Name
                </div>
                <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#111827' }}>
                  {formData.firstName || 'Sarah'} {formData.lastName || 'Miller'}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11.5px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '4px' }}>
                  Date of Birth
                </div>
                <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#111827' }}>
                  {formData.dob || '1988-06-14'}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11.5px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '4px' }}>
                  Gender
                </div>
                <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#111827' }}>
                  {formData.gender || 'Female'}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11.5px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '4px' }}>
                  Phone Number
                </div>
                <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#111827', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Phone size={13} color="#6B7280" />
                  {formData.phone || '+1 (888) 655–5267'}
                </div>
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <div style={{ fontSize: '11.5px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '4px' }}>
                  State of Residence
                </div>
                <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#111827', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={14} color="#059669" />
                  <span>{formData.state || 'California'}</span>
                  <span style={{ fontSize: '11.5px', color: '#065F46', background: '#ECFDF5', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                    Provider Licensed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Clinical Reassurance Banner */}
      <div style={{
        background: '#FAF8F5',
        border: '1px solid #E5E7EB',
        borderRadius: '16px',
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '24px'
      }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          background: '#1F4F3D',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <ShieldCheck size={20} />
        </div>
        <div style={{ fontSize: '13px', color: '#374151', lineHeight: '1.45' }}>
          <strong>100% Free &amp; Confidential Consultation.</strong> No obligation to purchase medication. You will receive an email confirmation with your secure video room link.
        </div>
      </div>

      {/* Bottom Action CTAs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button
          type="button"
          className="cta-button-pill active"
          onClick={onConfirm}
          style={{
            width: '100%',
            padding: '16px 24px',
            fontSize: '16px',
            fontWeight: 800,
            background: '#111827',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
          }}
        >
          <span>Confirm &amp; Book Consultation</span>
          <ArrowRight size={18} />
        </button>

        <button
          type="button"
          onClick={onBack}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#6B7280',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
            padding: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          <ArrowLeft size={15} />
          <span>Back to appointment picker</span>
        </button>
      </div>

    </div>
  );
}
