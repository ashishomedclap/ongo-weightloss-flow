import React from 'react';
import { ChevronDown } from 'lucide-react';

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

export default function MochiFrame8State({
  selectedState = '',
  onSelectState,
  onNext,
  onBack
}) {
  const hasSelection = Boolean(selectedState);

  return (
    <div 
      className="mochi-frame-8-content"
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '32px 20px 80px',
        boxSizing: 'border-box',
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
        color: '#000045'
      }}
    >
      {/* Title */}
      <div style={{ marginBottom: '32px', textAlign: 'left' }}>
        <h1 
          style={{
            fontSize: '26px',
            fontWeight: 600,
            lineHeight: '1.28',
            color: '#000045',
            margin: '0 0 8px 0',
            letterSpacing: '-0.015em'
          }}
        >
          What state do you live in?
        </h1>
      </div>

      {/* State Dropdown Field */}
      <div style={{ marginBottom: '40px', width: '100%', textAlign: 'left' }}>
        <label 
          htmlFor="mochi-state-select"
          style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: 500,
            color: '#606069',
            marginBottom: '8px'
          }}
        >
          State
        </label>

        <div style={{ position: 'relative', width: '100%' }}>
          <select
            id="mochi-state-select"
            value={selectedState}
            onChange={(e) => onSelectState(e.target.value)}
            style={{
              width: '100%',
              height: '52px',
              border: selectedState ? '1.5px solid #000045' : '1px solid #D5D6E0',
              borderRadius: '16px',
              padding: '0 40px 0 16px',
              fontSize: '15px',
              color: selectedState ? '#000045' : '#8A8C9E',
              backgroundColor: '#FFFFFF',
              appearance: 'none',
              WebkitAppearance: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'border-color 0.15s ease'
            }}
          >
            <option value="" disabled>State</option>
            {US_STATES.map((st) => (
              <option key={st} value={st} style={{ color: '#000045' }}>
                {st}
              </option>
            ))}
          </select>

          {/* Chevron Icon */}
          <div 
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              color: '#8A8C9E',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      {/* Next Action Pill Button */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <button
          type="button"
          disabled={!hasSelection}
          onClick={onNext}
          style={{
            width: '100%',
            height: '52px',
            borderRadius: '999px',
            backgroundColor: hasSelection ? '#000045' : '#EAEAF2',
            color: hasSelection ? '#FFFFFF' : '#9E9EB2',
            border: 'none',
            fontSize: '15px',
            fontWeight: 600,
            cursor: hasSelection ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s ease',
            fontFamily: 'inherit',
            outline: 'none'
          }}
        >
          Next
        </button>

        {onBack && (
          <button
            type="button"
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              color: '#606069',
              fontSize: '14px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              padding: '6px 12px'
            }}
          >
            ← Back to previous question
          </button>
        )}
      </div>
    </div>
  );
}
