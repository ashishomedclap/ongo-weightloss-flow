import React from 'react';
import { Info, Scale } from 'lucide-react';

// Custom measuring tape icon
function TapeMeasureIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <line x1="7.5" y1="4.21" x2="7.5" y2="8.5"/>
      <line x1="12" y1="2" x2="12" y2="6.5"/>
      <line x1="16.5" y1="4.21" x2="16.5" y2="8.5"/>
    </svg>
  );
}

export default function FridaysFrame3Measurements({
  heightFeet = '6',
  heightInches = '5',
  weightPounds = '400',
  onChangeHeightFeet,
  onChangeHeightInches,
  onChangeWeight
}) {
  // Calculate BMI dynamically
  const ft = parseFloat(heightFeet) || 0;
  const inc = parseFloat(heightInches) || 0;
  const totalInches = ft * 12 + inc;
  const weight = parseFloat(weightPounds) || 0;
  
  let bmiScore = '47.4';
  if (totalInches > 0 && weight > 0) {
    bmiScore = ((weight / (totalInches * totalInches)) * 703).toFixed(1);
  }

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
        Tell us about yourself
      </h1>
      <p style={{
        fontSize: '13px',
        color: '#6B7280',
        margin: '0 0 36px',
        textAlign: 'center'
      }}>
        (*) Mandatory field
      </p>

      {/* Form Fields Container */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
        
        {/* Height Row: Feet & Inches */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Height Feet */}
          <div>
            <label style={{
              fontSize: '13px',
              fontWeight: 500,
              color: '#374151',
              display: 'block',
              marginBottom: '6px'
            }}>
              Height (feet) <span style={{ color: '#2563EB' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
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
                <TapeMeasureIcon />
              </div>
              <input
                type="number"
                value={heightFeet}
                onChange={(e) => onChangeHeightFeet && onChangeHeightFeet(e.target.value)}
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '0 14px 0 44px',
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
          </div>

          {/* Height Inches */}
          <div>
            <label style={{
              fontSize: '13px',
              fontWeight: 500,
              color: '#374151',
              display: 'block',
              marginBottom: '6px'
            }}>
              Height (inches) <span style={{ color: '#2563EB' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
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
                <TapeMeasureIcon />
              </div>
              <input
                type="number"
                value={heightInches}
                onChange={(e) => onChangeHeightInches && onChangeHeightInches(e.target.value)}
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '0 14px 0 44px',
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
          </div>
        </div>

        {/* Weight Row */}
        <div>
          <label style={{
            fontSize: '13px',
            fontWeight: 500,
            color: '#374151',
            display: 'block',
            marginBottom: '6px'
          }}>
            Weight (pounds) <span style={{ color: '#2563EB' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
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
              <Scale size={18} strokeWidth={1.8} />
            </div>
            <input
              type="number"
              value={weightPounds}
              onChange={(e) => onChangeWeight && onChangeWeight(e.target.value)}
              style={{
                width: '100%',
                height: '48px',
                padding: '0 14px 0 44px',
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
        </div>

        {/* BMI Score Callout Banner */}
        <div style={{
          width: '100%',
          padding: '16px 20px',
          borderRadius: '10px',
          background: '#F3E6D8',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxSizing: 'border-box',
          marginTop: '6px'
        }}>
          <div style={{ color: '#4A3E31', display: 'flex', alignItems: 'center' }}>
            <Info size={18} strokeWidth={2} />
          </div>
          <span style={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#4A3E31',
            letterSpacing: '-0.01em'
          }}>
            Your BMI Score is {bmiScore}
          </span>
        </div>

      </div>
    </div>
  );
}
