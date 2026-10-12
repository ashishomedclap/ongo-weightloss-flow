import React from 'react';

export default function MochiFrame10Name({
  firstName = '',
  lastName = '',
  onChangeFirstName,
  onChangeLastName,
  onNext,
  onBack
}) {
  const isValid = Boolean(firstName.trim() && lastName.trim());

  return (
    <div 
      className="mochi-frame-10-content"
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
          What is your first and last name?
        </h1>
      </div>

      {/* Name Input Fields */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          marginBottom: '40px',
          textAlign: 'left'
        }}
      >
        {/* First Name Field */}
        <div>
          <label 
            htmlFor="mochi-first-name"
            style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: 500,
              color: '#606069',
              marginBottom: '8px'
            }}
          >
            First name <span style={{ color: '#E11D48' }}>*</span>
          </label>
          <input
            id="mochi-first-name"
            type="text"
            value={firstName}
            onChange={(e) => onChangeFirstName(e.target.value)}
            style={{
              width: '100%',
              height: '52px',
              border: firstName ? '1.5px solid #000045' : '1px solid #D5D6E0',
              borderRadius: '16px',
              padding: '0 18px',
              fontSize: '15px',
              color: '#000045',
              backgroundColor: '#FFFFFF',
              outline: 'none',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
              transition: 'border-color 0.15s ease'
            }}
          />
        </div>

        {/* Last Name Field */}
        <div>
          <label 
            htmlFor="mochi-last-name"
            style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: 500,
              color: '#606069',
              marginBottom: '8px'
            }}
          >
            Last Name <span style={{ color: '#E11D48' }}>*</span>
          </label>
          <input
            id="mochi-last-name"
            type="text"
            value={lastName}
            onChange={(e) => onChangeLastName(e.target.value)}
            style={{
              width: '100%',
              height: '52px',
              border: lastName ? '1.5px solid #000045' : '1px solid #D5D6E0',
              borderRadius: '16px',
              padding: '0 18px',
              fontSize: '15px',
              color: '#000045',
              backgroundColor: '#FFFFFF',
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
