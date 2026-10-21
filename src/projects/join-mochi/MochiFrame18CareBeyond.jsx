import React from 'react';
import { 
  Sparkles, 
  Wind, 
  Smile, 
  Pill, 
  Activity, 
  Infinity as InfinityIcon, 
  HeartPulse, 
  X 
} from 'lucide-react';

export default function MochiFrame18CareBeyond({
  selectedTopics = [],
  onToggleTopic,
  onNext,
  onBack
}) {
  const topics = [
    {
      id: 'skincare',
      label: 'Skincare',
      icon: <Sparkles size={18} color="#9D6038" />,
      bg: '#F5EBE4'
    },
    {
      id: 'hair-loss',
      label: 'Hair loss',
      icon: <Wind size={18} color="#3B4252" />,
      bg: '#EBECEF'
    },
    {
      id: 'mental-health',
      label: 'Mental health',
      icon: <Smile size={18} color="#795548" />,
      bg: '#EFEBE9'
    },
    {
      id: 'supplements',
      label: 'Supplements',
      icon: <Pill size={18} color="#C05621" />,
      bg: '#FEEBC8'
    },
    {
      id: 'mens-health',
      label: "Men's sexual health",
      icon: <Activity size={18} color="#2B6CB0" />,
      bg: '#EBF8FF'
    },
    {
      id: 'longevity',
      label: 'Longevity & peptides',
      icon: <InfinityIcon size={18} color="#276749" />,
      bg: '#F0FFF4'
    },
    {
      id: 'heart-metabolic',
      label: 'Heart & metabolic care',
      icon: <HeartPulse size={18} color="#9B2C2C" />,
      bg: '#FFF5F5'
    },
    {
      id: 'none-of-these',
      label: 'None of these',
      icon: <X size={16} color="#000045" />,
      bg: '#FFFFFF',
      isNone: true
    }
  ];

  const hasSelection = selectedTopics && selectedTopics.length > 0;

  return (
    <div 
      className="mochi-frame-18-content"
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
      <div style={{ marginBottom: '28px', textAlign: 'left' }}>
        <h1 
          style={{
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '1.3',
            color: '#000045',
            margin: '0 0 8px 0',
            letterSpacing: '-0.015em'
          }}
        >
          Mochi offers care beyond weight loss — do you want to discuss anything else with your provider?
        </h1>
        <p 
          style={{
            fontSize: '14.5px',
            fontWeight: 400,
            lineHeight: '1.45',
            color: '#606069',
            margin: '0'
          }}
        >
          Choose any options below and we'll let your provider know you're interested before your first visit.
        </p>
      </div>

      {/* Option Cards */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%',
          marginBottom: '36px'
        }}
      >
        {topics.map((t) => {
          const isSelected = selectedTopics.includes(t.id);
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onToggleTopic(t.id)}
              style={{
                width: '100%',
                minHeight: '64px',
                padding: '12px 20px',
                backgroundColor: isSelected ? '#F4F5FB' : '#FFFFFF',
                border: isSelected ? '1.5px solid #000045' : '1.5px solid #D5D6E0',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                cursor: 'pointer',
                textAlign: 'left',
                boxSizing: 'border-box',
                transition: 'border-color 0.15s ease, background-color 0.15s ease',
                outline: 'none'
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
              {/* Left Thumbnail + Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div 
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: t.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: t.isNone ? 'none' : '1px solid rgba(0,0,0,0.06)'
                  }}
                >
                  {t.icon}
                </div>
                <span 
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#000045',
                    lineHeight: '1.35'
                  }}
                >
                  {t.label}
                </span>
              </div>

              {/* Exact Mochi Radio/Check SVG */}
              {isSelected ? (
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <path
                    d="M9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75ZM13.0879 6.28125C12.8451 6.03848 12.4508 6.03848 12.208 6.28125L7.47363 11.0156L5.56152 9.10352C5.31875 8.86075 4.92441 8.86075 4.68164 9.10352C4.43926 9.34622 4.43923 9.73973 4.68164 9.98242L7.03418 12.335C7.27687 12.5774 7.67039 12.5773 7.91309 12.335L13.0879 7.16016C13.3305 6.91747 13.3303 6.52401 13.0879 6.28125Z"
                    fill="#000045"
                  />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <circle cx="9" cy="9" r="8.25" stroke="#D5D6E0" strokeWidth="1.5" />
                </svg>
              )}
            </button>
          );
        })}
      </div>

      {/* Continue CTA Button */}
      <button
        type="button"
        disabled={!hasSelection}
        onClick={onNext}
        style={{
          width: '100%',
          height: '52px',
          borderRadius: '9999px',
          border: 'none',
          backgroundColor: hasSelection ? '#000045' : '#EAEAF2',
          color: hasSelection ? '#FFFFFF' : '#848494',
          fontSize: '16px',
          fontWeight: 600,
          cursor: hasSelection ? 'pointer' : 'not-allowed',
          transition: 'all 0.15s ease',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          if (hasSelection) e.currentTarget.style.backgroundColor = '#000060';
        }}
        onMouseLeave={(e) => {
          if (hasSelection) e.currentTarget.style.backgroundColor = '#000045';
        }}
      >
        Continue
      </button>
    </div>
  );
}
