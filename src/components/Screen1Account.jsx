import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Screen1Account({ formData, updateFormData, onNext }) {
  const [agreedTerms, setAgreedTerms] = useState(formData.agreeTerms ?? false);
  const [agreedMarketing, setAgreedMarketing] = useState(formData.agreeMarketing ?? false);
  const [email, setEmail] = useState(formData.email || '');
  const [password, setPassword] = useState(formData.password || '');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const isFormValid = email.trim().length > 0 && password.trim().length >= 6 && agreedTerms;

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
    if (!agreedTerms) {
      setError('Please agree to the HIPAA Authorization and Terms to continue');
      return;
    }
    setError('');
    updateFormData({ email, password, agreeTerms: agreedTerms, agreeMarketing: agreedMarketing });
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
        <h1 className="page-title">Find the right treatment for you</h1>
        <p className="page-subtitle">
          Enter your email and create a password. You'll use these to sign in to your dashboard later.
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

        {/* Checkbox Card 1 - Legal / Consents */}
        <label className={`checkbox-card ${agreedTerms ? 'checked' : ''}`}>
          <input
            type="checkbox"
            className="checkbox-custom-input"
            checked={agreedTerms}
            onChange={(e) => setAgreedTerms(e.target.checked)}
          />
          <div className="checkbox-box" aria-hidden="true">
            {agreedTerms && (
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M1.5 5L4.5 8L10.5 1.5" stroke="#1F4F3D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <span className="checkbox-label-text">
            I agree to the <a href="#hipaa" onClick={(e) => e.preventDefault()} className="teal-link">HIPAA Authorization</a>, <a href="#consent" onClick={(e) => e.preventDefault()} className="teal-link">Telehealth Consent</a>, <a href="#terms" onClick={(e) => e.preventDefault()} className="teal-link">Terms of Use</a> and <a href="#privacy" onClick={(e) => e.preventDefault()} className="teal-link">Privacy Policy</a>
          </span>
        </label>

        {/* Checkbox Card 2 - Marketing / Offers */}
        <label className={`checkbox-card ${agreedMarketing ? 'checked' : ''}`}>
          <input
            type="checkbox"
            className="checkbox-custom-input"
            checked={agreedMarketing}
            onChange={(e) => setAgreedMarketing(e.target.checked)}
          />
          <div className="checkbox-box" aria-hidden="true">
            {agreedMarketing && (
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M1.5 5L4.5 8L10.5 1.5" stroke="#1F4F3D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <span className="checkbox-label-text">
            Send me the latest news, treatment tips, and offers.
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
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.73-2.1-6.66-4.93H1.28v3.15C3.26 21.36 7.33 24 12 24z"/>
            <path fill="#FBBC05" d="M5.34 14.27c-.24-.72-.37-1.49-.37-2.27s.13-1.55.37-2.27V6.58H1.28C.46 8.2 0 10.04 0 12s.46 3.8 1.28 5.42l4.06-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.28 6.58l4.06 3.15c.93-2.83 3.56-4.98 6.66-4.98z"/>
          </svg>
          <span>Continue with Google</span>
        </button>
      </form>
    </div>
  );
}
