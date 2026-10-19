import React, { useState, useRef, useEffect } from 'react';

export default function ThemedDropdown({ value, options, onChange, placeholder = "Select an option" }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => (typeof opt === 'string' ? opt : opt.value) === value);
  const displayValue = selectedOption ? (typeof selectedOption === 'string' ? selectedOption : selectedOption.label) : '';

  return (
    <div className="input-capsule-wrap" ref={containerRef} style={{ position: 'relative' }}>
      <div 
        className={`input-capsule ${!value ? 'is-placeholder' : ''}`}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          cursor: 'pointer',
          userSelect: 'none'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ color: value ? '#111' : '#888' }}>
          {value ? displayValue : placeholder}
        </span>
        <div style={{ color: '#888', fontSize: '10px', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          ▼
        </div>
      </div>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 4px)',
          left: 0,
          right: 0,
          background: '#fff',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          maxHeight: '240px',
          overflowY: 'auto',
          zIndex: 100,
          padding: '8px 0'
        }}>
          {options.map((opt, idx) => {
            const optVal = typeof opt === 'string' ? opt : opt.value;
            const optLabel = typeof opt === 'string' ? opt : opt.label;
            return (
              <div
                key={idx}
                style={{
                  padding: '12px 20px',
                  cursor: 'pointer',
                  background: value === optVal ? '#F2F9F5' : 'transparent',
                  color: value === optVal ? '#1F4F3D' : '#111',
                  fontWeight: value === optVal ? 600 : 400,
                }}
                onClick={() => {
                  onChange(optVal);
                  setIsOpen(false);
                }}
                onMouseEnter={(e) => {
                  if (value !== optVal) e.target.style.background = '#FAFAFA';
                }}
                onMouseLeave={(e) => {
                  if (value !== optVal) e.target.style.background = 'transparent';
                }}
              >
                {optLabel}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
