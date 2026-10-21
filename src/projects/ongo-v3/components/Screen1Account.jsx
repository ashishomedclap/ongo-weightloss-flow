import React, { useState } from 'react';
import { Eye, EyeOff, Check } from 'lucide-react';

export default function Screen1Account({ formData, updateFormData, onNext }) {
  const [agreedMarketing, setAgreedMarketing] = useState(formData.agreeMarketing ?? false);
  const [email, setEmail] = useState(formData.email || '');
  const [password, setPassword] = useState(formData.password || '');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const isFormValid = email.trim().length > 0 && password.trim().length >= 6;

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
    setError('');
    updateFormData({ email, password, agreeTerms: true, agreeMarketing: agreedMarketing });
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
      <div className="step-tag-teal">
        STEP 1 OF 5 · GET STARTED
      </div>

      <div className="heading-section">
        <h1 className="page-title">Start your Ongo weight-loss journey</h1>
        <p className="page-subtitle">
          Create an account to get started. You&apos;ll use these credentials to sign in to your patient portal later.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        {error && (
          <div className="form-error-banner">
            {error}
          </div>
        )}

        {/* Floating rounded input - Email */}
        <div className="input-capsule-wrap">
          <input
            id="email-input"
            type="email"
            className="input-capsule"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        {/* Floating rounded input - Password with toggle */}
        <div className="input-capsule-wrap has-suffix">
          <input
            id="password-input"
            type={showPassword ? 'text' : 'password'}
            className="input-capsule"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          <button
            type="button"
            className="input-icon-btn"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff size={20} strokeWidth={1.8} />
            ) : (
              <Eye size={20} strokeWidth={1.8} />
            )}
          </button>
        </div>

        {/* Marketing opt-in — optional */}
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', margin: '8px 4px 16px 4px' }}>
          <input
            type="checkbox"
            className="checkbox-custom-input"
            checked={agreedMarketing}
            onChange={(e) => setAgreedMarketing(e.target.checked)}
          />
          <div className={`checkbox-box ${agreedMarketing ? 'checked' : ''}`} aria-hidden="true" style={{ marginTop: '2px' }}>
            {agreedMarketing && <Check size={13} strokeWidth={3.5} />}
          </div>
          <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: '1.4', flex: 1 }}>
            Send me the latest news, treatment tips, and offers. (Optional)
          </span>
        </label>

        {/* Continue Button */}
        <button
          type="submit"
          className={`cta-button-pill ${isFormValid ? 'active' : 'disabled'}`}
        >
          <span>Continue</span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </button>

        {/* Inline Legal Consent */}
        <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', textAlign: 'center', lineHeight: '1.5', margin: '16px 0 0' }}>
          By continuing, you agree to Ongo&apos;s{' '}
          <a href="#terms" onClick={(e) => e.preventDefault()} className="teal-link">Terms of Use</a>,{' '}
          <a href="#privacy" onClick={(e) => e.preventDefault()} className="teal-link">Privacy Policy</a>, and{' '}
          <a href="#consent" onClick={(e) => e.preventDefault()} className="teal-link">Telehealth Consent</a>, and acknowledge the{' '}
          <a href="#hipaa" onClick={(e) => e.preventDefault()} className="teal-link">HIPAA Notice of Privacy Practices</a>.
        </p>

        {/* Divider with "OR" */}
        <div className="or-divider">
          <span>OR</span>
        </div>

        {/* Continue with Google */}
        <button
          type="button"
          className="oauth-capsule-btn"
          onClick={() => handleOAuth('Google')}
        >
          <svg className="google-icon" width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.9c2.28-2.1 3.645-5.2 3.645-9.14z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.1.75-2.5 1.2-4.03 1.2-3.12 0-5.76-2.1-6.71-4.93H1.26v3.13C3.25 21.36 7.34 24 12 24z"/>
            <path fill="#FBBC05" d="M5.29 14.31c-.24-.72-.38-1.49-.38-2.31s.14-1.59.38-2.31V6.56H1.26C.46 8.16 0 9.98 0 12s.46 3.84 1.26 5.44l4.03-3.13z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.64 1.26 6.56l4.03 3.13c.95-2.83 3.59-4.94 6.71-4.94z"/>
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Continue with Apple */}
        <button
          type="button"
          className="oauth-capsule-btn"
          onClick={() => handleOAuth('Apple')}
        >
          <svg className="apple-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.73-.95 2.76.99.08 2.05-.51 2.68-1.26z"/>
          </svg>
          <span>Continue with Apple</span>
        </button>
      </form>
    </div>
  );
}
