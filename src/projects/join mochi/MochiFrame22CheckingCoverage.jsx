import React, { useEffect, useState } from 'react';
import { Check, Loader2 } from 'lucide-react';

export default function MochiFrame22CheckingCoverage({
  onNext,
  onBack
}) {
  const [completedSteps, setCompletedSteps] = useState(2); // 0 to 4

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCompletedSteps(3);
    }, 1200);

    const timer2 = setTimeout(() => {
      setCompletedSteps(4);
    }, 2200);

    const timer3 = setTimeout(() => {
      if (onNext) onNext();
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onNext]);

  const steps = [
    'Looking up your plan',
    'Checking eligibility',
    'Checking provider in network',
    'Confirming your benefits'
  ];

  return (
    <div 
      className="mochi-frame-22-content"
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '60px 20px 80px',
        boxSizing: 'border-box',
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
        color: '#000045',
        textAlign: 'center'
      }}
    >
      {/* Centered 'm' monogram */}
      <div 
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          backgroundColor: '#000045',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          boxShadow: '0 8px 24px rgba(0,0,69,0.12)'
        }}
      >
        <span 
          style={{ 
            fontSize: '32px', 
            fontWeight: 800, 
            lineHeight: 1, 
            letterSpacing: '-0.04em',
            fontFamily: "'Instrument Sans', sans-serif" 
          }}
        >
          m
        </span>
      </div>

      {/* Title & Subtitle */}
      <h1 
        style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#000045',
          margin: '0 0 10px 0',
          letterSpacing: '-0.015em'
        }}
      >
        Checking your coverage
      </h1>
      <p 
        style={{
          fontSize: '14.5px',
          color: '#606069',
          margin: '0 0 36px 0',
          lineHeight: '1.45'
        }}
      >
        Finding your plan and confirming your visits benefits. This can take up to a minute.
      </p>

      {/* Checklist status items */}
      <div 
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          gap: '16px',
          textAlign: 'left',
          marginBottom: '40px'
        }}
      >
        {steps.map((text, idx) => {
          const isDone = completedSteps > idx;
          const isCurrent = completedSteps === idx;
          return (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {isDone ? (
                <div 
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFF',
                    flexShrink: 0
                  }}
                >
                  <Check size={12} strokeWidth={3} />
                </div>
              ) : isCurrent ? (
                <div style={{ width: '18px', height: '18px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Loader2 size={16} color="#000045" className="spin-animation" style={{ animation: 'spin 1s linear infinite' }} />
                </div>
              ) : (
                <div 
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    border: '1.5px solid #D5D6E0',
                    flexShrink: 0
                  }}
                />
              )}
              <span 
                style={{
                  fontSize: '15px',
                  fontWeight: isDone ? 500 : isCurrent ? 600 : 400,
                  color: isDone ? '#000045' : isCurrent ? '#000045' : '#848494'
                }}
              >
                {text}
              </span>
            </div>
          );
        })}
      </div>

      {/* Skip button for quick review */}
      <div>
        <button
          type="button"
          onClick={onNext}
          style={{
            background: 'none',
            border: 'none',
            color: '#606069',
            fontSize: '13px',
            textDecoration: 'underline',
            cursor: 'pointer'
          }}
        >
          Skip waiting
        </button>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
