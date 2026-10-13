import React from 'react';

export default function MochiFrame23NotEligible({
  onNext,
  onBack
}) {
  return (
    <div 
      className="mochi-frame-23-content"
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '60px 20px 80px',
        boxSizing: 'border-box',
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
        color: '#000045',
        textAlign: 'center'
      }}
    >
      {/* Title */}
      <h1 
        style={{
          fontSize: '26px',
          fontWeight: 600,
          color: '#000045',
          margin: '0 0 16px 0',
          letterSpacing: '-0.015em',
          lineHeight: '1.3'
        }}
      >
        You're not eligible for Covered with Mochi at this time
      </h1>

      {/* Description */}
      <p 
        style={{
          fontSize: '15px',
          color: '#606069',
          margin: '0 auto 48px auto',
          lineHeight: '1.55',
          maxWidth: '500px'
        }}
      >
        You can still enjoy all the benefits of our standard Mochi Health Membership, such as unlimited online visits with a physician and dietitian, 24/7 support and messaging, and access to over 2,000 medications.
      </p>

      {/* Continue Button */}
      <button
        type="button"
        onClick={onNext}
        style={{
          width: '100%',
          maxWidth: '460px',
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
          margin: '0 auto',
          display: 'block'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000060'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000045'}
      >
        Continue
      </button>
    </div>
  );
}
