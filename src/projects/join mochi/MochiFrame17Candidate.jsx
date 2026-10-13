import React from 'react';

export default function MochiFrame17Candidate({
  targetLoss = '10-20 lbs',
  onNext,
  onBack
}) {
  return (
    <div 
      className="mochi-frame-17-content"
      style={{
        width: '100%',
        maxWidth: '580px',
        margin: '0 auto',
        padding: '48px 20px 80px',
        boxSizing: 'border-box',
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
        color: '#000045'
      }}
    >
      {/* Primary Headline */}
      <div style={{ marginBottom: '32px', textAlign: 'left' }}>
        <h1 
          style={{
            fontSize: '26px',
            fontWeight: 600,
            lineHeight: '1.32',
            color: '#000045',
            margin: '0 0 28px 0',
            letterSpacing: '-0.015em'
          }}
        >
          Based on your BMI and previous medication history, you may be a good candidate for weight loss medication with Mochi.
        </h1>

        <h2
          style={{
            fontSize: '22px',
            fontWeight: 600,
            lineHeight: '1.35',
            color: '#000045',
            margin: '0 0 12px 0',
            letterSpacing: '-0.01em'
          }}
        >
          Let's get you on your way to losing {targetLoss}.
        </h2>

        <p 
          style={{
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: '1.55',
            color: '#606069',
            margin: '0 0 44px 0'
          }}
        >
          Most patients with your profile have a good chance of being approved for a GLP-1 medication. Final approval is up to your provider and will be determined after your initial online visit.
        </p>
      </div>

      {/* Next CTA Button */}
      <button
        type="button"
        onClick={onNext}
        style={{
          width: '100%',
          height: '52px',
          borderRadius: '9999px',
          border: 'none',
          backgroundColor: '#000045',
          color: '#FFFFFF',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background-color 0.15s ease',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000060'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000045'}
      >
        Next
      </button>
    </div>
  );
}
