import React from 'react';

export default function MochiFrame3Importance({
  selectedReasons = [],
  onToggleReason,
  onNext,
  onBack
}) {
  const options = [
    {
      id: 'doctor-mentioned',
      label: 'A doctor has mentioned my weight or a related health condition'
    },
    {
      id: 'feel-confident',
      label: 'I want to feel confident in my clothes and photos again'
    },
    {
      id: 'mental-health',
      label: 'I want to improve my mental health.'
    },
    {
      id: 'family',
      label: "I'm doing it for my family."
    },
    {
      id: 'more-energy',
      label: 'I want to have more energy.'
    },
    {
      id: 'event-milestone',
      label: 'I have an event or milestone coming up'
    }
  ];

  const hasSelection = selectedReasons && selectedReasons.length > 0;

  return (
    <div 
      className="mochi-frame-3-content"
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
      {/* Title & Subtitle */}
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
          Why is weight management important to you right now?
        </h1>
        <p 
          style={{
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: '1.45',
            color: '#606069',
            margin: 0
          }}
        >
          Select all that apply.
        </p>
      </div>

      {/* Select All That Apply Option Cards */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%',
          marginBottom: '40px'
        }}
      >
        {options.map((opt) => {
          const isSelected = selectedReasons.includes(opt.id);
          return (
            <div
              key={opt.id}
              role="checkbox"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => onToggleReason(opt.id)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  onToggleReason(opt.id);
                }
              }}
              style={{
                minHeight: '62px',
                width: '100%',
                border: isSelected ? '1.5px solid #000045' : '1px solid #D5D6E0',
                borderRadius: '16px',
                padding: '16px 20px',
                backgroundColor: isSelected ? '#FAFAFD' : '#FFFFFF',
                color: '#000045',
                cursor: 'pointer',
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                boxSizing: 'border-box',
                transition: 'border-color 0.15s ease, background-color 0.15s ease'
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
                  fontWeight: 500,
                  lineHeight: '1.4',
                  color: '#000045',
                  textAlign: 'left'
                }}
              >
                {opt.label}
              </span>

              {/* Exact Radio Icon from Mochi bundle */}
              {isSelected ? (
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <path
                    d="M9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75ZM13.0879 6.28125C12.8451 6.03848 12.4508 6.03848 12.208 6.28125L7.47363 11.0156L5.56152 9.10352C5.31875 8.86075 4.92441 8.86075 4.68164 9.10352C4.43926 9.34622 4.43923 9.73973 4.68164 9.98242L7.03418 12.335C7.27687 12.5774 7.67039 12.5773 7.91309 12.335L13.0879 7.16016C13.3305 6.91747 13.3303 6.52401 13.0879 6.28125Z"
                    fill="#000045"
                  />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <path
                    fill="#C6C8D8"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 2.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5M.75 9a8.25 8.25 0 1 1 16.5 0A8.25 8.25 0 0 1 .75 9"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>

      {/* Continue Action Pill Button */}
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
          Continue
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
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}
