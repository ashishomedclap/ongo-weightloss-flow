import React from 'react';

export default function FridaysFooter({
  onBack,
  onContinue,
  showBack = true,
  continueText = 'Continue',
  continueDisabled = false
}) {
  return (
    <footer style={{
      width: '100%',
      background: '#FFFFFF',
      borderTop: '1px solid #E5E7EB',
      padding: '16px 32px',
      position: 'sticky',
      bottom: 0,
      zIndex: 90
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Left: Back button */}
        <div>
          {showBack && (
            <button
              type="button"
              onClick={onBack}
              style={{
                background: '#FFFFFF',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#374151',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              Back
            </button>
          )}
        </div>

        {/* Right: Continue button */}
        <div>
          <button
            type="button"
            onClick={onContinue}
            disabled={continueDisabled}
            style={{
              background: continueDisabled ? '#9CA3AF' : '#363F33',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 32px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#FFFFFF',
              cursor: continueDisabled ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit',
              transition: 'background-color 0.15s ease'
            }}
          >
            {continueText}
          </button>
        </div>
      </div>
    </footer>
  );
}
