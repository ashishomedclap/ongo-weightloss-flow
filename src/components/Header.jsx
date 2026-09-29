import React from 'react';
import { Phone, ArrowLeft } from 'lucide-react';

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
        <svg 
          className="header-meter-icon" 
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Dial Arc */}
          <path 
            d="M 8 26 A 13 13 0 1 1 28 26" 
            stroke="rgba(255, 255, 255, 0.45)" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeDasharray="2 3"
          />
          {/* Orange/Coral Active Zone */}
          <path 
            d="M 12 28 A 13 13 0 0 1 24 28" 
            stroke="#FF6B4A" 
            strokeWidth="3.2" 
            strokeLinecap="round"
          />
          {/* Gauge Center & Needle pointing up-right */}
          <circle cx="18" cy="22" r="2.5" fill="#FFFFFF" />
          <line 
            x1="18" 
            y1="22" 
            x2="25" 
            y2="13" 
            stroke="#FF6B4A" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
          />
        </svg>

        <div className="header-brand-text">
          <span className="logo-brand-ongo">Ongo</span>
          <span className="logo-brand-sub">Weight Loss</span>
        </div>
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
