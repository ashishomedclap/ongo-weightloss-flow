import React from 'react';
import { Phone } from 'lucide-react';

export default function Header({ onLogoClick }) {
  return (
    <header className="header-container" role="banner">
      <div 
        className="header-logo-area" 
        onClick={onLogoClick} 
        style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
        title="Ongo Weight Loss"
      >
        <span className="logo-main-text">
          Ongo<span className="logo-dot">.</span>
        </span>
        <span className="logo-sub-text">Weight Loss</span>
      </div>

      <a 
        href="tel:+18886555267" 
        className="header-phone-link"
        aria-label="Call Ongo Weight Loss support at +1 (888) 655-5267"
      >
        <span className="phone-icon-bubble" aria-hidden="true">
          <Phone size={12} strokeWidth={2.5} />
        </span>
        <span>+1 (888) 655-5267</span>
      </a>
    </header>
  );
}
