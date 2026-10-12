import React from 'react';

export default function MochiScreen0({ 
  selectedGoal, 
  onSelectGoal, 
  onNext, 
  language = 'en', 
  onToggleLanguage 
}) {
  const isEs = language === 'es';

  const options = isEs ? [
    { id: '10-20', label: 'Perder 10-20 lbs' },
    { id: '20-50', label: 'Perder 20-50 lbs' },
    { id: '50-plus', label: 'Perder más de 50 lbs' },
    { id: 'maintain', label: 'Mantener mi peso actual' },
  ] : [
    { id: '10-20', label: 'Lose 10-20 lbs' },
    { id: '20-50', label: 'Lose 20-50 lbs' },
    { id: '50-plus', label: 'Lose 50+ lbs' },
    { id: 'maintain', label: 'Maintain my current weight' },
  ];

  return (
    <div style={{
      fontFamily: "'Instrument Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#000045',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '560px',
      margin: '0 auto',
      padding: '40px 20px 60px',
      boxSizing: 'border-box'
    }}>
      {/* Title & Subtitle */}
      <div style={{ width: '100%', textAlign: 'left', marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 600,
          lineHeight: '1.25',
          color: '#000045',
          margin: '0 0 8px',
          letterSpacing: '-0.015em'
        }}>
          {isEs ? '¿Cuál es tu objetivo principal de pérdida de peso?' : "What's your primary weight loss goal?"}
        </h1>
        <p style={{
          fontSize: '15px',
          color: '#606069',
          margin: 0,
          fontWeight: 400,
          lineHeight: '1.4'
        }}>
          {isEs ? 'Esto nos ayuda a personalizar tu plan de atención.' : 'This helps us personalize your care plan.'}
        </p>
      </div>

      {/* Option Buttons */}
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
              onClick={() => {
                onSelectGoal(opt.id);
                if (onNext) {
                  // Mochi auto-advances on click or allows selection
                  setTimeout(() => {
                    onNext(opt.id);
                  }, 240);
                }
              }}
              style={{
                width: '100%',
                minHeight: '58px',
                padding: '16px 20px',
                borderRadius: '12px',
                border: isSelected ? '1.8px solid #000045' : '1px solid #D5D6E0',
                background: '#FFFFFF',
                color: '#000045',
                fontSize: '15px',
                fontWeight: 500,
                fontFamily: 'inherit',
                cursor: 'pointer',
                textAlign: 'center',
                boxShadow: isSelected ? '0 1px 3px rgba(0,0,69,0.06)' : 'none',
                transition: 'border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease',
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = '#9C9EB2';
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
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Language Switcher */}
      <button
        type="button"
        onClick={onToggleLanguage}
        style={{
          background: 'transparent',
          border: 'none',
          color: '#000045',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
          padding: '6px 12px',
          marginBottom: '28px',
          fontFamily: 'inherit',
          textDecoration: 'none',
          outline: 'none'
        }}
        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        {isEs ? 'Switch to English' : 'Cambiar a español'}
      </button>

      {/* Trustpilot Review Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '8px',
        fontSize: '13px',
        color: '#000045',
        fontWeight: 500
      }}>
        <span style={{ fontWeight: 600, fontSize: '14px', color: '#000045' }}>Excellent</span>
        
        {/* 5 Trustpilot Green Stars */}
        <div style={{ display: 'inline-flex', gap: '2px', alignItems: 'center' }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              style={{
                width: '18px',
                height: '18px',
                background: '#00B67A',
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

        {/* Review Count and Trustpilot text */}
        <span style={{
          textDecoration: 'underline',
          cursor: 'pointer',
          color: '#000045',
          marginLeft: '4px'
        }}>
          19,345 reviews on
        </span>

        {/* Trustpilot Brand Mark */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontWeight: 700 }}>
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
