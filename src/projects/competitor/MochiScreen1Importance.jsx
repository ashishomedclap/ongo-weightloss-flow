import React from 'react';
import radioCheckedImg from '../../assets/mochi/radio-checked.png';
import radioUncheckedImg from '../../assets/mochi/radio-unchecked.png';

export default function MochiScreen1Importance({
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
    <div style={{
      width: '100%',
      maxWidth: '560px',
      margin: '0 auto',
      padding: '40px 20px 80px',
      boxSizing: 'border-box',
      fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
      color: '#000045'
    }}>
      {/* Title & Subtitle */}
      <div style={{ marginBottom: '32px', textAlign: 'left' }}>
        <h1 style={{
          fontSize: '26px',
          fontWeight: 600,
          lineHeight: '1.28',
          color: '#000045',
          margin: '0 0 8px 0',
          letterSpacing: '-0.015em'
        }}>
          Why is weight management important to you right now?
        </h1>
        <p style={{
          fontSize: '15px',
          fontWeight: 400,
          lineHeight: '1.45',
          color: '#606069',
          margin: 0
        }}>
          Select all that apply.
        </p>
      </div>

      {/* Select All That Apply Option Cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '100%',
        marginBottom: '40px'
      }}>
        {options.map((opt) => {
          const isSelected = selectedReasons.includes(opt.id);
          return (
            <div
              key={opt.id}
              onClick={() => onToggleReason(opt.id)}
              style={{
                minHeight: '62px',
                width: '100%',
                border: isSelected ? '1.5px solid #000045' : '1px solid #D5D6E0',
                borderRadius: '12px',
                padding: '16px 20px',
                backgroundColor: '#FFFFFF',
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
              <span style={{
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: '1.4',
                color: '#000045',
                textAlign: 'left'
              }}>
                {opt.label}
              </span>

              {/* Exact Radio Circle / Checked Circle SVG */}
              <img
                src={isSelected ? radioCheckedImg : radioUncheckedImg}
                alt={isSelected ? "Selected" : "Unselected"}
                style={{
                  width: '22px',
                  height: '22px',
                  flexShrink: 0,
                  display: 'block'
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Bottom Sticky/Inline Continue Button */}
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
            fontFamily: 'inherit'
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
