import React, { forwardRef } from 'react';
import { Phone, ArrowLeft } from 'lucide-react';
import OngoLogo from '../../../components/common/OngoLogo';

const Header = forwardRef(function Header({ 
  currentStep = 1, 
  onBack, 
  onLogoClick, 
  showBack = false
}, ref) {
  const progressPercent = Math.min(100, Math.max(0, (currentStep / 5) * 100));

  return (
    <header ref={ref} id="header-section" className="header-container" role="banner" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="header-left-slot">
        {showBack && onBack ? (
          <button 
            type="button" 
            className="header-back-btn" 
            onClick={onBack}
            aria-label="Go back to previous screen"
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
            <span>Back</span>
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.04em',
              background: '#1F4F3D',
              color: '#FFFFFF',
              padding: '3px 8px',
              borderRadius: '6px',
              textTransform: 'uppercase'
            }}>
              V3 Hub
            </span>
          </div>
        )}
      </div>

      <div 
        className="header-logo-area" 
        onClick={onLogoClick} 
        style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
        title="Ongo Weight Loss Hub"
      >
        <OngoLogo style={{ height: '32px', width: 'auto', display: 'block' }} />
      </div>

      <div className="header-right-slot" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a 
          href="tel:+18886555267" 
          className="header-phone-link"
          aria-label="Call Ongo Weight Loss support at +1 (888) 655-5267"
        >
          <span className="header-phone-icon" aria-hidden="true">
            <Phone size={14} strokeWidth={2.5} />
          </span>
          <span className="header-phone-number">+1 (888) 655–5267</span>
        </a>
      </div>

      {/* Visual 5-step progress bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: '#E5E7EB',
        display: 'flex'
      }}>
        <div style={{
          width: `${progressPercent}%`,
          background: 'linear-gradient(90deg, #1F4F3D 0%, #2F8968 100%)',
          transition: 'width 0.3s ease',
          height: '100%'
        }} />
      </div>
    </header>
  );
});

export default Header;
