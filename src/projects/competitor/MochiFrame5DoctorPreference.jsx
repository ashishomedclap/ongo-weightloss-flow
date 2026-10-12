import React from 'react';

export default function MochiFrame5DoctorPreference({
  selectedPreference,
  onSelectPreference,
  onNext,
  onBack
}) {
  const options = [
    {
      id: 'messaging-only',
      label: 'Messaging only'
    },
    {
      id: 'one-video-then-messaging',
      label: 'One video visit and then ongoing messaging only'
    },
    {
      id: 'video-when-needed-messaging',
      label: 'Video visits when needed + messaging'
    }
  ];

  return (
    <div 
      className="mochi-frame-5-content"
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
      {/* Title - Exact matching Frame 5 screenshot */}
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
          How do you prefer to meet with your doctor?
        </h1>
      </div>

      {/* 3 Option Buttons - Centered text pill cards matching Frame 5 */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%',
          marginBottom: '36px'
        }}
      >
        {options.map((opt) => {
          const isSelected = selectedPreference === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              data-value={opt.id}
              onClick={() => {
                onSelectPreference(opt.id);
                if (onNext) {
                  setTimeout(() => {
                    onNext(opt.id);
                  }, 200);
                }
              }}
              style={{
                minHeight: '66px',
                width: '100%',
                position: 'relative',
                border: isSelected ? '1.5px solid #000045' : '1px solid #D5D6E0',
                borderRadius: '16px',
                padding: '16px 24px',
                backgroundColor: isSelected ? '#FAFAFD' : '#FFFFFF',
                color: '#000045',
                cursor: 'pointer',
                userSelect: 'none',
                outline: 'none',
                transition: 'border-color 0.15s ease, background-color 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = '#B0B2C4';
                  e.currentTarget.style.backgroundColor = '#FAFAFD';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = '#D5D6E0';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }
              }}
            >
              <span 
                style={{
                  fontSize: '15px',
                  fontWeight: isSelected ? 600 : 500,
                  textAlign: 'center',
                  color: '#000045'
                }}
              >
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Back button */}
      {onBack && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
        </div>
      )}
    </div>
  );
}
