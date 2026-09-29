import React, { useState } from 'react';
import { ShieldCheck, Lock, Check } from 'lucide-react';

export default function Screen1Account({ formData, updateFormData, onNext }) {
  const [agreed, setAgreed] = useState(formData.agreeTerms || false);
  const [email, setEmail] = useState(formData.email || '');
  const [password, setPassword] = useState(formData.password || '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (!agreed) {
      setError('Please agree to Ongo terms and telehealth consent to continue');
      return;
    }
    setError('');
    updateFormData({ email, password, agreeTerms: agreed });
    onNext();
  };

  const handleOAuth = (provider) => {
    updateFormData({ 
      email: formData.email || `patient.${provider.toLowerCase()}@example.com`,
      authProvider: provider,
      agreeTerms: true 
    });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="heading-section">
        <h1 className="page-title">Create your Ongo account</h1>
        <p className="page-subtitle">
          Get started with personalized medical weight-loss care from home.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        {error && (
          <div style={{
            background: '#FDF2F2',
            border: '1px solid #F8B4B4',
            color: '#9B1C1C',
            padding: '10px 14px',
            borderRadius: '10px',
            fontSize: '13px',
            marginBottom: '16px'
          }}>
            {error}
          </div>
        )}

        <div className="form-group">
          <label className="form-label" htmlFor="email-input">
            Email Address
          </label>
          <input
            id="email-input"
            type="email"
            className="form-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password-input">
            Password
          </label>
          <input
            id="password-input"
            type="password"
            className="form-input"
            placeholder="Create a secure password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>

        <div style={{ margin: '14px 0 20px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <input
            type="checkbox"
            id="terms-check"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            style={{
              marginTop: '3px',
              width: '18px',
              height: '18px',
              accentColor: 'var(--color-accent)',
              cursor: 'pointer'
            }}
          />
          <label htmlFor="terms-check" style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.45', cursor: 'pointer' }}>
            I agree to Ongo's <strong style={{ color: 'var(--color-primary-dark)' }}>Terms of Service</strong>, <strong style={{ color: 'var(--color-primary-dark)' }}>Privacy Policy</strong>, <strong style={{ color: 'var(--color-primary-dark)' }}>Telehealth Consent</strong>, and acknowledge the <strong style={{ color: 'var(--color-primary-dark)' }}>HIPAA Notice of Privacy Practices</strong>.
          </label>
        </div>

        <button
          type="submit"
          className="cta-button"
          style={{ marginBottom: '14px' }}
        >
          Continue
        </button>

        <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0', color: 'var(--color-text-muted)', fontSize: '12px' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
          <span style={{ padding: '0 10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>or</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <button
            type="button"
            className="secondary-btn"
            style={{ width: '100%', height: '46px' }}
            onClick={() => handleOAuth('Google')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.9c2.28-2.1 3.645-5.2 3.645-9.14z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.73-2.1-6.66-4.93H1.28v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.34 14.27c-.24-.72-.37-1.49-.37-2.27s.13-1.55.37-2.27V6.58H1.28C.46 8.2 0 10.04 0 12s.46 3.8 1.28 5.42l4.06-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.28 6.58l4.06 3.15c.93-2.83 3.56-4.98 6.66-4.98z"/>
            </svg>
            Continue with Google
          </button>

          <button
            type="button"
            className="secondary-btn"
            style={{ width: '100%', height: '46px' }}
            onClick={() => handleOAuth('Apple')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.64-.81 1.08-1.94.96-3.07-.94.04-2.07.63-2.73 1.41-.58.68-1.09 1.77-.95 2.88 1.05.08 2.11-.47 2.72-1.22z"/>
            </svg>
            Continue with Apple
          </button>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <button
            type="button"
            onClick={() => alert("Redirecting to existing patient login...")}
            style={{ background: 'none', border: 'none', color: 'var(--color-primary-dark)', fontSize: '13.5px', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}
          >
            Already have an account? Log in
          </button>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          background: 'var(--color-green-pale)',
          border: '1px solid var(--color-green-light)',
          padding: '10px 14px',
          borderRadius: '10px',
          fontSize: '12.5px',
          color: 'var(--color-primary-dark)'
        }}>
          <Lock size={14} color="var(--color-accent)" />
          <span>Your information is protected and used to support your healthcare journey.</span>
        </div>
      </form>
    </div>
  );
}
