import React from 'react';
import { ChevronDown } from 'lucide-react';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function MochiFrame9DOB({
  birthMonth = '',
  birthDay = '',
  birthYear = '',
  onChangeMonth,
  onChangeDay,
  onChangeYear,
  onNext,
  onBack
}) {
  const isValid = Boolean(
    birthMonth && 
    birthDay && 
    Number(birthDay) >= 1 && 
    Number(birthDay) <= 31 && 
    birthYear && 
    birthYear.length === 4 && 
    Number(birthYear) >= 1920 && 
    Number(birthYear) <= 2015
  );

  return (
    <div 
      className="mochi-frame-9-content"
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
      {/* Title */}
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
          What is your date of birth?
        </h1>
      </div>

      {/* Date of Birth Inputs Row */}
      <div 
        style={{
          display: 'flex',
          gap: '12px',
          width: '100%',
          marginBottom: '40px'
        }}
      >
        {/* Month Dropdown */}
        <div style={{ position: 'relative', flex: 1.8 }}>
          <select
            value={birthMonth}
            onChange={(e) => onChangeMonth(e.target.value)}
            style={{
              width: '100%',
              height: '52px',
              border: birthMonth ? '1.5px solid #000045' : '1px solid #D5D6E0',
              borderRadius: '16px',
              padding: '0 36px 0 16px',
              fontSize: '15px',
              color: birthMonth ? '#000045' : '#8A8C9E',
              backgroundColor: '#FFFFFF',
              appearance: 'none',
              WebkitAppearance: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'border-color 0.15s ease'
            }}
          >
            <option value="" disabled>Select a month</option>
            {MONTHS.map((m, idx) => (
              <option key={m} value={String(idx + 1)} style={{ color: '#000045' }}>
                {m}
              </option>
            ))}
          </select>
          <div 
            style={{
              position: 'absolute',
              right: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              color: '#8A8C9E',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ChevronDown size={18} />
          </div>
        </div>

        {/* DD Input */}
        <div style={{ flex: 1 }}>
          <input
            type="text"
            inputMode="numeric"
            maxLength={2}
            value={birthDay}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '');
              onChangeDay(val);
            }}
            placeholder="DD"
            style={{
              width: '100%',
              height: '52px',
              border: birthDay ? '1.5px solid #000045' : '1px solid #D5D6E0',
              borderRadius: '16px',
              padding: '0 12px',
              fontSize: '15px',
              color: '#000045',
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
              outline: 'none',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
              transition: 'border-color 0.15s ease'
            }}
          />
        </div>

        {/* YYYY Input */}
        <div style={{ flex: 1.2 }}>
          <input
            type="text"
            inputMode="numeric"
            maxLength={4}
            value={birthYear}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '');
              onChangeYear(val);
            }}
            placeholder="YYYY"
            style={{
              width: '100%',
              height: '52px',
              border: birthYear ? '1.5px solid #000045' : '1px solid #D5D6E0',
              borderRadius: '16px',
              padding: '0 12px',
              fontSize: '15px',
              color: '#000045',
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
              outline: 'none',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
              transition: 'border-color 0.15s ease'
            }}
          />
        </div>
      </div>

      {/* Next Action Pill Button */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <button
          type="button"
          disabled={!isValid}
          onClick={onNext}
          style={{
            width: '100%',
            height: '52px',
            borderRadius: '999px',
            backgroundColor: isValid ? '#000045' : '#EAEAF2',
            color: isValid ? '#FFFFFF' : '#9E9EB2',
            border: 'none',
            fontSize: '15px',
            fontWeight: 600,
            cursor: isValid ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s ease',
            fontFamily: 'inherit',
            outline: 'none'
          }}
        >
          Next
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
            ← Back to previous question
          </button>
        )}
      </div>
    </div>
  );
}
