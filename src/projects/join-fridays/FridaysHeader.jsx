import React from 'react';
import { FridaysLogo } from './FridaysIcons';

export { FridaysLogo };

export default function FridaysHeader({ progress = 10, language = 'en', onToggleLanguage }) {
  return (
    <header style={{
      width: '100%',
      background: '#FFFFFF',
      borderBottom: '1px solid #E5E7EB',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Left: Phone */}
        <div style={{ fontSize: '13px', color: '#6B7280', fontWeight: 500 }}>
          Call us <span style={{ color: '#374151', fontWeight: 600 }}>+1 (949) 868 6870</span>
        </div>

        {/* Center: Brand Logo */}
        <div style={{ textAlign: 'center' }}>
          <FridaysLogo />
        </div>

        {/* Right: Language Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button
            type="button"
            onClick={() => onToggleLanguage && onToggleLanguage('en')}
            style={{
              background: language === 'en' ? '#FFFFFF' : 'transparent',
              border: language === 'en' ? '1px solid #D1D5DB' : '1px solid transparent',
              borderRadius: '6px',
              padding: '4px 10px',
              fontSize: '12px',
              fontWeight: 600,
              color: language === 'en' ? '#1F2937' : '#9CA3AF',
              cursor: 'pointer'
            }}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => onToggleLanguage && onToggleLanguage('es')}
            style={{
              background: language === 'es' ? '#FFFFFF' : 'transparent',
              border: language === 'es' ? '1px solid #D1D5DB' : '1px solid transparent',
              borderRadius: '6px',
              padding: '4px 10px',
              fontSize: '12px',
              fontWeight: 600,
              color: language === 'es' ? '#1F2937' : '#9CA3AF',
              cursor: 'pointer'
            }}
          >
            ES
          </button>
        </div>
      </div>

      {/* Progress Bar Strip */}
      <div style={{ width: '100%', height: '3px', background: '#F3F4F6', position: 'relative' }}>
        <div style={{
          height: '100%',
          width: `${Math.min(100, Math.max(0, progress))}%`,
          background: '#435741',
          transition: 'width 0.3s ease'
        }} />
      </div>
    </header>
  );
}
