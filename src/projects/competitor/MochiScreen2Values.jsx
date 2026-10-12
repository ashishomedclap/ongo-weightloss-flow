import React from 'react';
import radioCheckedImg from '../../assets/mochi/radio-checked.png';
import radioUncheckedImg from '../../assets/mochi/radio-unchecked.png';

export default function MochiScreen2Values({
  selectedValues = [],
  onToggleValue,
  onNext,
  onBack
}) {
  const options = [
    {
      id: 'max-weight-loss',
      title: 'Maximum weight loss',
      desc: 'Medications that may produce greater results'
    },
    {
      id: 'lowest-side-effects',
      title: 'Lowest likelihood of side effects',
      desc: 'Steady weight loss with an emphasis on comfort'
    },
    {
      id: 'multi-month-supplies',
      title: 'Access to multi-month supplies',
      desc: 'A longer supply of medication up front'
    },
    {
      id: 'lowest-cost',
      title: 'Lowest cost',
      desc: 'The most affordable treatments'
    },
    {
      id: 'not-interested-meds',
      title: "I'm not interested in weight loss medication",
      desc: null
    },
    {
      id: 'not-sure',
      title: "I'm not sure",
      desc: null
    }
  ];

  const hasSelection = selectedValues && selectedValues.length > 0;

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
      {/* Question Header & Subtext */}
      <div style={{ marginBottom: '32px', textAlign: 'left' }}>
        <h1 style={{
          fontSize: '26px',
          fontWeight: 600,
          lineHeight: '1.28',
          color: '#000045',
          margin: '0 0 8px 0',
          letterSpacing: '-0.015em'
        }}>
          What do you value when it comes to weight loss medication?
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

      {/* 6 Value Option Cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '100%',
        marginBottom: '40px'
      }}>
        {options.map((opt) => {
          const isSelected = selectedValues.includes(opt.id);
          return (
            <div
              key={opt.id}
              onClick={() => onToggleValue(opt.id)}
              style={{
                minHeight: opt.desc ? '72px' : '58px',
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', textAlign: 'left' }}>
                <span style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#000045',
                  lineHeight: '1.35'
                }}>
                  {opt.title}
                </span>
                {opt.desc && (
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 400,
                    color: '#606069',
                    lineHeight: '1.4'
                  }}>
                    {opt.desc}
                  </span>
                )}
              </div>

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

      {/* Continue Action Pill */}
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
