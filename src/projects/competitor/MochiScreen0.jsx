import React from 'react';
import mochiLogoImg from '../../assets/mochi/mochi-logo.png';
import radioCheckedImg from '../../assets/mochi/radio-checked.png';
import radioUncheckedImg from '../../assets/mochi/radio-unchecked.png';

export { mochiLogoImg, radioCheckedImg, radioUncheckedImg };

export default function MochiScreen0({ 
  selectedGoal, 
  onSelectGoal, 
  onNext, 
  language = 'en', 
  onToggleLanguage 
}) {
  const isEs = language === 'es';

  const options = isEs ? [
    { id: '10-20', label: 'Lose 10-20 lbs' },
    { id: '20-50', label: 'Lose 20-50 lbs' },
    { id: '50-plus', label: 'Lose 50+ lbs' },
    { id: 'maintain', label: 'Maintain my current weight' },
  ] : [
    { id: '10-20', label: 'Lose 10-20 lbs' },
    { id: '20-50', label: 'Lose 20-50 lbs' },
    { id: '50-plus', label: 'Lose 50+ lbs' },
    { id: 'maintain', label: 'Maintain my current weight' },
  ];

  return (
    <div style={{
      width: '100%',
      maxWidth: '560px',
      margin: '0 auto',
      padding: '40px 20px 60px',
      boxSizing: 'border-box',
      fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
      color: '#000045'
    }}>
      {/* Title & Subtitle - Exact matching Join Mochi live spacing */}
      <div style={{ marginBottom: '32px', textAlign: 'left' }}>
        <h1 style={{
          fontSize: '26px',
          fontWeight: 600,
          lineHeight: '1.28',
          color: '#000045',
          margin: '0 0 8px 0',
          letterSpacing: '-0.015em'
        }}>
          {isEs ? '¿Cuál es tu objetivo principal de pérdida de peso?' : "What's your primary weight loss goal?"}
        </h1>
        <p style={{
          fontSize: '15px',
          fontWeight: 400,
          lineHeight: '1.45',
          color: '#606069',
          margin: 0
        }}>
          {isEs ? 'Esto nos ayuda a personalizar tu plan de atención.' : 'This helps us personalize your care plan.'}
        </p>
      </div>

      {/* 4 Option Buttons - Exact matching Join Mochi Pill Cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '100%',
        marginBottom: '36px'
      }}>
        {options.map((opt) => {
          const isSelected = selectedGoal === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              data-value={opt.id}
              onClick={() => {
                onSelectGoal(opt.id);
                if (onNext) {
                  setTimeout(() => {
                    onNext(opt.id);
                  }, 220);
                }
              }}
              style={{
                minHeight: '60px',
                width: '100%',
                position: 'relative',
                border: isSelected ? '1.5px solid #000045' : '1px solid #D5D6E0',
                borderRadius: '12px',
                padding: '16px 24px',
                backgroundColor: '#FFFFFF',
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
              <span style={{
                fontSize: '15px',
                fontWeight: 500,
                textAlign: 'center',
                color: '#000045'
              }}>
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Language Toggle Link */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '26px' }}>
        <button
          type="button"
          onClick={onToggleLanguage}
          style={{
            background: 'none',
            border: 'none',
            color: '#000045',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '4px 8px',
            fontFamily: 'inherit',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
        >
          {isEs ? 'Switch to English' : 'Cambiar a español'}
        </button>
      </div>

      {/* Trustpilot Review Section - Pixel-matched to screenshot */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '8px',
        fontSize: '13px',
        color: '#000045',
        fontWeight: 400
      }}>
        <span style={{ fontWeight: 600, fontSize: '14px', color: '#000045' }}>
          Excellent
        </span>

        {/* 5 Green Star Squares */}
        <div style={{ display: 'inline-flex', gap: '2px', alignItems: 'center' }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              style={{
                width: '18px',
                height: '18px',
                backgroundColor: '#00B67A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '2px'
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 1.5l3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 17.25l-6.18 3.25 1.18-6.87-5-4.87 6.91-1L12 1.5z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Underlined Reviews Count */}
        <span style={{
          textDecoration: 'underline',
          cursor: 'pointer',
          color: '#000045',
          marginLeft: '4px'
        }}>
          19,345 reviews on
        </span>

        {/* Trustpilot Brand Mark */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="#00B67A">
            <path d="M12 0l3.09 9.51h10l-8.09 5.88 3.09 9.51L12 19l-8.09 5.9 3.09-9.51L0 9.51h10L12 0z" />
          </svg>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#000045', letterSpacing: '-0.02em' }}>
            Trustpilot
          </span>
        </div>
      </div>
    </div>
  );
}
