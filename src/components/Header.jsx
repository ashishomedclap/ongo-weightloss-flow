import React from 'react';
import { Phone, ArrowLeft } from 'lucide-react';
import OngoLogo from './OngoLogo';

export default function Header({ onBack, onLogoClick, showBack = false, progressPercent = 0 }) {
  return (
    <header className="header-container" role="banner">
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
        ) : null}
      </div>

      <div 
        className="header-logo-area" 
        onClick={onLogoClick} 
        style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
        title="Ongo Weight Loss"
      >
        <OngoLogo style={{ height: '34px', width: 'auto', display: 'block', paddingBottom: '2px' }} />
      </div>

      <div className="header-right-slot">
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

      {/* Thin top progress bar beneath header if progress > 0 */}
      {progressPercent > 0 && (
        <div className="header-progress-track">
          <div 
            className="header-progress-fill" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}
    </header>
  );
}
