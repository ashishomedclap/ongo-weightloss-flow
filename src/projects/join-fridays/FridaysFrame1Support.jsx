import React from 'react';
import { Home, ChevronDown, Calendar } from 'lucide-react';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
];

export function ForbesHealthLogo() {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
      <span style={{
        fontFamily: "'Playfair Display', 'Times New Roman', serif",
        fontSize: '20px',
        fontWeight: 900,
        color: '#000000',
        letterSpacing: '-0.02em',
        fontStyle: 'normal'
      }}>
        Forbes
      </span>
      <span style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        fontSize: '11px',
        fontWeight: 800,
        color: '#167657',
        letterSpacing: '0.08em',
        marginTop: '2px'
      }}>
        HEALTH
      </span>
    </div>
  );
}

export default function FridaysFrame1Support({
  state = 'Alabama',
  sex = 'Male',
  dobMonth = '10',
  dobDay = '10',
  dobYear = '1990',
  onChangeState,
  onChangeSex,
  onChangeDob
}) {
  return (
    <div style={{
      width: '100%',
      maxWidth: '560px',
      margin: '0 auto',
      padding: '48px 20px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Title & Subtitle */}
      <h1 style={{
        fontSize: '24px',
        fontWeight: 700,
        color: '#363F33',
        margin: '0 0 6px',
        textAlign: 'center',
        letterSpacing: '-0.01em'
      }}>
        We need to make sure we can support you
      </h1>
      <p style={{
        fontSize: '13px',
        color: '#6B7280',
        margin: '0 0 36px',
        textAlign: 'center'
      }}>
        (*) Mandatory field
      </p>

      {/* Form Fields */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
        
        {/* Field 1: State */}
        <div>
          <label style={{
            fontSize: '13px',
            fontWeight: 500,
            color: '#374151',
            display: 'block',
            marginBottom: '6px'
          }}>
            State <span style={{ color: '#2563EB' }}>*</span>
          </label>
          <div style={{ position: 'relative', width: '100%' }}>
            <div style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#9CA3AF',
              display: 'flex',
              alignItems: 'center',
              pointerEvents: 'none'
            }}>
              <Home size={18} strokeWidth={1.7} />
            </div>
            <select
              value={state}
              onChange={(e) => onChangeState && onChangeState(e.target.value)}
              style={{
                width: '100%',
                height: '48px',
                padding: '0 40px 0 44px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                fontSize: '14px',
                color: '#1F2937',
                background: '#FFFFFF',
                outline: 'none',
                cursor: 'pointer',
                appearance: 'none',
                WebkitAppearance: 'none'
              }}
            >
              {US_STATES.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div style={{
              position: 'absolute',
              right: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#6B7280',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center'
            }}>
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Field 2: Sex assigned at birth */}
        <div>
          <label style={{
            fontSize: '13px',
            fontWeight: 500,
            color: '#374151',
            display: 'block',
            marginBottom: '6px'
          }}>
            Sex assigned at birth <span style={{ color: '#2563EB' }}>*</span>
          </label>
          <div style={{ position: 'relative', width: '100%' }}>
            <div style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#9CA3AF',
              display: 'flex',
              alignItems: 'center',
              pointerEvents: 'none',
              fontSize: '16px'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="14" r="5"/>
                <line x1="14" y1="10" x2="20" y2="4"/>
                <polyline points="15 4 20 4 20 9"/>
              </svg>
            </div>
            <select
              value={sex}
              onChange={(e) => onChangeSex && onChangeSex(e.target.value)}
              style={{
                width: '100%',
                height: '48px',
                padding: '0 40px 0 44px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                fontSize: '14px',
                color: '#1F2937',
                background: '#FFFFFF',
                outline: 'none',
                cursor: 'pointer',
                appearance: 'none',
                WebkitAppearance: 'none'
              }}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div style={{
              position: 'absolute',
              right: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#6B7280',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center'
            }}>
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Field 3: Date of birth */}
        <div>
          <label style={{
            fontSize: '13px',
            fontWeight: 500,
            color: '#374151',
            display: 'block',
            marginBottom: '6px'
          }}>
            Date of birth <span style={{ color: '#2563EB' }}>*</span>
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 1.6fr', gap: '12px' }}>
            {/* Month */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9CA3AF',
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none'
              }}>
                <Calendar size={16} strokeWidth={1.8} />
              </div>
              <input
                type="text"
                value={dobMonth}
                onChange={(e) => onChangeDob && onChangeDob('month', e.target.value)}
                placeholder="MM"
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '0 12px 0 38px',
                  borderRadius: '8px',
                  border: '1px solid #D1D5DB',
                  fontSize: '14px',
                  color: '#1F2937',
                  background: '#FFFFFF',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Day */}
            <div>
              <input
                type="text"
                value={dobDay}
                onChange={(e) => onChangeDob && onChangeDob('day', e.target.value)}
                placeholder="DD"
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '0 12px',
                  borderRadius: '8px',
                  border: '1px solid #D1D5DB',
                  fontSize: '14px',
                  color: '#1F2937',
                  background: '#FFFFFF',
                  outline: 'none',
                  boxSizing: 'border-box',
                  textAlign: 'center'
                }}
              />
            </div>

            {/* Year */}
            <div>
              <input
                type="text"
                value={dobYear}
                onChange={(e) => onChangeDob && onChangeDob('year', e.target.value)}
                placeholder="YYYY"
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '0 12px',
                  borderRadius: '8px',
                  border: '1px solid #D1D5DB',
                  fontSize: '14px',
                  color: '#1F2937',
                  background: '#FFFFFF',
                  outline: 'none',
                  boxSizing: 'border-box',
                  textAlign: 'center'
                }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Trust badge: As seen on Forbes Health */}
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <span style={{ fontSize: '11px', color: '#6B7280', fontWeight: 500 }}>
          As seen on
        </span>
        <ForbesHealthLogo />
      </div>
    </div>
  );
}
