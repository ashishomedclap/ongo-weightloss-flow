import React from 'react';

export default function MochiFrame11Gender({
  selectedGender,
  onSelectGender,
  onNext,
  onBack
}) {
  const options = [
    { id: 'female', label: 'Female' },
    { id: 'male', label: 'Male' }
  ];

  const handleSelect = (id) => {
    if (onSelectGender) onSelectGender(id);
    setTimeout(() => {
      if (onNext) onNext();
    }, 180);
  };

  return (
    <div 
      className="mochi-frame-11-content"
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '40px 20px 80px',
        boxSizing: 'border-box',
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
        color: '#000045'
      }}
    >
      {/* Title - Exact matching Screen 11 screenshot */}
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
          What is your birth-assigned gender?
        </h1>
      </div>

      {/* 2 Option Buttons - Centered text rounded-16 pill cards matching Screen 11 */}
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
          const isSelected = selectedGender === opt.id;
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
                if (!isSelected) {
                  e.currentTarget.style.borderColor = '#000045';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = '#D5D6E0';
                }
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
