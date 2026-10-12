import React from 'react';
import { X } from 'lucide-react';

export default function MochiFrame1OfferModal({ 
  onClaim, 
  onClose,
  isStandalone = false 
}) {
  return (
    <div 
      className="mochi-frame-1-container"
      style={{
        position: isStandalone ? 'relative' : 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        minHeight: isStandalone ? '780px' : '100vh',
        backgroundColor: 'rgba(15, 23, 42, 0.68)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        boxSizing: 'border-box',
        zIndex: 9990,
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif"
      }}
    >
      {/* Background simulated intake/doctor blur backdrop */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(2, 89, 131, 0.18) 0%, rgba(10, 14, 63, 0.45) 100%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Modal Card */}
      <div 
        className="mochi-offer-modal"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '40px 36px 32px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.04)',
          boxSizing: 'border-box',
          zIndex: 1,
          animation: 'mochiModalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Top-Right Close Button */}
        <button
          type="button"
          onClick={onClose || onClaim}
          aria-label="Close offer modal"
          style={{
            position: 'absolute',
            top: '22px',
            right: '22px',
            background: 'none',
            border: 'none',
            color: '#0B4265',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.15s ease, transform 0.1s ease',
            outline: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F1F5F9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <X size={26} strokeWidth={2.2} />
        </button>

        {/* Ribbon Tag Badge: "⏰ Limited time only!" */}
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <div 
            style={{
              backgroundColor: '#D8F3F6',
              color: '#0A5C75',
              fontSize: '14px',
              fontWeight: 500,
              padding: '6px 18px 6px 12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              borderRadius: '3px 0 0 3px',
              clipPath: 'polygon(0% 0%, calc(100% - 10px) 0%, 100% 50%, calc(100% - 10px) 100%, 0% 100%)',
              letterSpacing: '-0.01em'
            }}
          >
            <span role="img" aria-label="clock" style={{ fontSize: '15px' }}>⏰</span>
            <span>Limited time only!</span>
          </div>
        </div>

        {/* Headline */}
        <h1 
          style={{
            fontSize: '38px',
            fontWeight: 700,
            color: '#004874',
            margin: '0 0 4px 0',
            letterSpacing: '-0.025em',
            lineHeight: 1.15
          }}
        >
          First month free
        </h1>

        {/* Subhead */}
        <h2 
          style={{
            fontSize: '30px',
            fontWeight: 500,
            color: '#1E2532',
            margin: '0 0 36px 0',
            letterSpacing: '-0.02em',
            lineHeight: 1.25
          }}
        >
          for your Mochi membership!
        </h2>

        {/* Primary CTA Button: "Claim your offer" */}
        <button
          type="button"
          onClick={onClaim}
          style={{
            width: '100%',
            height: '56px',
            borderRadius: '9999px',
            backgroundColor: '#005580',
            color: '#FFFFFF',
            border: 'none',
            fontSize: '17px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background-color 0.15s ease, transform 0.1s ease',
            outline: 'none',
            boxShadow: '0 4px 12px rgba(0, 85, 128, 0.25)',
            marginBottom: '28px',
            fontFamily: 'inherit'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#004568';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#005580';
          }}
        >
          Claim your offer
        </button>

        {/* Terms & Conditions Legal Footnote */}
        <p 
          style={{
            fontSize: '12px',
            color: '#70757E',
            lineHeight: '1.5',
            margin: 0,
            textAlign: 'left'
          }}
        >
          *Limited-time offer valid for first-time health membership purchases by new users only. Medication and supplement costs not included. Cannot be combined with other offers.{' '}
          <span 
            style={{ 
              textDecoration: 'underline', 
              cursor: 'pointer',
              color: '#555A64'
            }}
            onClick={() => alert("Terms and Conditions: Offer valid for new patient initial consultation and membership only.")}
          >
            Terms apply.
          </span>
        </p>
      </div>
    </div>
  );
}
