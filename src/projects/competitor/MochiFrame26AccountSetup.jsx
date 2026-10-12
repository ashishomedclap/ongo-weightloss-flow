import React, { useState } from 'react';

export default function MochiFrame26AccountSetup({
  email = '',
  onChangeEmail,
  onNext,
  _onBack
}) {
  const [localEmail, setLocalEmail] = useState('');
  const inputEmail = email || localEmail;

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (onChangeEmail) onChangeEmail(inputEmail);
    if (onNext) onNext();
  };

  return (
    <div 
      className="mochi-frame-26-content"
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '40px 20px 80px',
        boxSizing: 'border-box',
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
        color: '#000045',
        textAlign: 'left'
      }}
    >
      {/* Title & Subtitle */}
      <div style={{ marginBottom: '32px' }}>
        <h1 
          style={{
            fontSize: '26px',
            fontWeight: 600,
            lineHeight: '1.28',
            color: '#000045',
            margin: '0 0 10px 0',
            letterSpacing: '-0.015em'
          }}
        >
          You're ready to get started with your Mochi treatment plan
        </h1>
        <p 
          style={{
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: '1.45',
            color: '#606069',
            margin: '0'
          }}
        >
          Let's get you set up with an account to continue.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
        {/* Email Input */}
        <div>
          <input
            type="email"
            placeholder="email@mochi.com"
            value={inputEmail}
            onChange={(e) => {
              setLocalEmail(e.target.value);
              if (onChangeEmail) onChangeEmail(e.target.value);
            }}
            required
            style={{
              width: '100%',
              height: '56px',
              borderRadius: '16px',
              border: '1.5px solid #D5D6E0',
              padding: '0 20px',
              fontSize: '15px',
              color: '#000045',
              backgroundColor: '#FFFFFF',
              outline: 'none',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              transition: 'border-color 0.15s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#000045'}
            onBlur={(e) => e.target.style.borderColor = '#D5D6E0'}
          />
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            height: '52px',
            borderRadius: '9999px',
            border: 'none',
            backgroundColor: '#000045',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background-color 0.15s ease',
            outline: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000060'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000045'}
        >
          Continue
        </button>
      </form>

      {/* Divider */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          margin: '28px 0',
          color: '#848494',
          fontSize: '13px'
        }}
      >
        <div style={{ flex: 1, height: '1px', backgroundColor: '#EAEAF2' }} />
        <span>or</span>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#EAEAF2' }} />
      </div>

      {/* Social Logins */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
        <button
          type="button"
          onClick={handleSubmit}
          style={{
            width: '100%',
            height: '54px',
            borderRadius: '16px',
            border: '1.5px solid #D5D6E0',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: 500,
            color: '#000045',
            transition: 'border-color 0.15s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#000045'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = '#D5D6E0'}
        >
          {/* Google G logo */}
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.02h3.88c2.27-2.09 3.66-5.17 3.66-9.11z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.02c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.11C3.25 21.31 7.31 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.6H1.26C.46 8.2.01 10.05.01 12s.45 3.8 1.25 5.4l4.02-3.11z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.69 1.26 6.6l4.02 3.11c.95-2.83 3.6-4.96 6.72-4.96z"/>
          </svg>
          <span>Sign in with Google</span>
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          style={{
            width: '100%',
            height: '54px',
            borderRadius: '16px',
            border: '1.5px solid #D5D6E0',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: 500,
            color: '#000045',
            transition: 'border-color 0.15s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#000045'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = '#D5D6E0'}
        >
          {/* Apple Logo */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#000000">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.65-.8 1.1-1.91.98-3.02-.95.04-2.1.64-2.77 1.43-.6.68-1.12 1.8-1 2.88 1.07.08 2.14-.54 2.79-1.29z"/>
          </svg>
          <span>Sign in with Apple</span>
        </button>
      </div>

      {/* Terms footnote */}
      <p 
        style={{
          fontSize: '12.5px',
          color: '#606069',
          lineHeight: '1.55',
          margin: 0
        }}
      >
        By creating an account using email or a third-party service, I agree to the{' '}
        <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#000045' }}>Terms & Conditions</span>,{' '}
        <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#000045' }}>Privacy Policy</span>,{' '}
        <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#000045' }}>Mochi Medical Patient Agreement</span>, and{' '}
        <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#000045' }}>Informed Consent for Telehealth Visits</span>.
      </p>
    </div>
  );
}
