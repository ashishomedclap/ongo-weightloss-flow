import React from 'react';

export default function MochiFrame14MedHistory({
  selectedMedHistory,
  onSelectMedHistory,
  onNext,
  onBack
}) {
  const options = [
    { id: 'currently-taking', label: "Yes, I'm currently taking one" },
    { id: 'taken-past', label: "Yes, I've taken one in the past" },
    { id: 'no', label: 'No' }
  ];

  const handleSelect = (id) => {
    if (onSelectMedHistory) onSelectMedHistory(id);
    setTimeout(() => {
      if (onNext) onNext();
    }, 180);
  };

  return (
    <div 
      className="mochi-frame-14-content"
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '36px 20px 80px',
        boxSizing: 'border-box',
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
        color: '#000045'
      }}
    >
      {/* Title */}
      <div style={{ marginBottom: '36px', textAlign: 'left' }}>
        <h1 
          style={{
            fontSize: '26px',
            fontWeight: 600,
            lineHeight: '1.28',
            color: '#000045',
            margin: '0',
            letterSpacing: '-0.015em'
          }}
        >
          Have you taken any weight loss medication(s) within the past 6 months?
        </h1>
      </div>

      {/* 3 Option Buttons */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          width: '100%',
          marginBottom: '36px'
        }}
      >
        {options.map((opt) => {
          const isSelected = selectedMedHistory === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleSelect(opt.id)}
              style={{
                width: '100%',
                minHeight: '64px',
                padding: '16px 24px',
                backgroundColor: isSelected ? '#F4F5FB' : '#FFFFFF',
                border: isSelected ? '1.5px solid #000045' : '1.5px solid #D5D6E0',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxSizing: 'border-box',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                if (!isSelected) e.currentTarget.style.borderColor = '#000045';
              }}
              onMouseLeave={(e) => {
                if (!isSelected) e.currentTarget.style.borderColor = '#D5D6E0';
              }}
            >
              <span 
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#000045',
                  lineHeight: '1.4'
                }}
              >
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
