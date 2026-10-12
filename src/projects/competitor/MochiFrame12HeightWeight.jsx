import React, { useMemo } from 'react';

export default function MochiFrame12HeightWeight({
  heightFeet = '',
  heightInches = '',
  weightLbs = '',
  onChangeHeightFeet,
  onChangeHeightInches,
  onChangeWeight,
  onNext,
  onBack
}) {
  // Clinical BMI Calculation: (weight * 703) / (heightInches^2)
  const bmiData = useMemo(() => {
    const ft = parseFloat(heightFeet);
    const inc = parseFloat(heightInches || '0');
    const wt = parseFloat(weightLbs);

    if (!ft || ft <= 0 || !wt || wt <= 0) {
      return { bmi: null, display: '--', percentage: 50 };
    }

    const totalInches = ft * 12 + inc;
    if (totalInches <= 0) return { bmi: null, display: '--', percentage: 50 };

    const calculated = (wt * 703) / (totalInches * totalInches);
    const rounded = Math.round(calculated * 10) / 10;

    // Scale 15 to 45 BMI on progress spectrum (0% to 100%)
    const clamped = Math.max(15, Math.min(45, rounded));
    const pct = ((clamped - 15) / (45 - 15)) * 100;

    return {
      bmi: rounded,
      display: rounded.toFixed(1),
      percentage: pct
    };
  }, [heightFeet, heightInches, weightLbs]);

  const isValid = Boolean(
    heightFeet && 
    parseInt(heightFeet, 10) > 0 && 
    weightLbs && 
    parseInt(weightLbs, 10) > 0
  );

  return (
    <div 
      className="mochi-frame-12-content"
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '32px 20px 80px',
        boxSizing: 'border-box',
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
        color: '#000045'
      }}
    >
      {/* Title & Subtitle */}
      <div style={{ marginBottom: '28px', textAlign: 'left' }}>
        <h1 
          style={{
            fontSize: '26px',
            fontWeight: 600,
            lineHeight: '1.28',
            color: '#000045',
            margin: '0 0 8px 0',
            letterSpacing: '-0.015em'
          }}
        >
          What is your height and weight?
        </h1>
        <p 
          style={{
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: '1.45',
            color: '#606069',
            margin: '0'
          }}
        >
          This helps your doctor confirm safe dosing ranges.
        </p>
      </div>

      {/* Form Inputs Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
        {/* Height Section */}
        <div>
          <label 
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: '#343440',
              marginBottom: '8px',
              textAlign: 'left'
            }}
          >
            Height
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Feet Input */}
            <div 
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Feet"
                value={heightFeet}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
                  onChangeHeightFeet(val);
                }}
                style={{
                  width: '100%',
                  height: '56px',
                  borderRadius: '16px',
                  border: '1.5px solid #D5D6E0',
                  padding: '0 48px 0 18px',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#000045',
                  backgroundColor: '#FFFFFF',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.15s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#000045'}
                onBlur={(e) => e.target.style.borderColor = '#D5D6E0'}
              />
              <span 
                style={{
                  position: 'absolute',
                  right: '18px',
                  fontSize: '15px',
                  color: '#848494',
                  pointerEvents: 'none'
                }}
              >
                ft.
              </span>
            </div>

            {/* Inches Input */}
            <div 
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Inches"
                value={heightInches}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 2);
                  onChangeHeightInches(val);
                }}
                style={{
                  width: '100%',
                  height: '56px',
                  borderRadius: '16px',
                  border: '1.5px solid #D5D6E0',
                  padding: '0 48px 0 18px',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#000045',
                  backgroundColor: '#FFFFFF',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.15s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#000045'}
                onBlur={(e) => e.target.style.borderColor = '#D5D6E0'}
              />
              <span 
                style={{
                  position: 'absolute',
                  right: '18px',
                  fontSize: '15px',
                  color: '#848494',
                  pointerEvents: 'none'
                }}
              >
                in.
              </span>
            </div>
          </div>
        </div>

        {/* Weight Section */}
        <div>
          <label 
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: '#343440',
              marginBottom: '8px',
              textAlign: 'left'
            }}
          >
            Weight in pounds
          </label>
          <div 
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="lbs"
              value={weightLbs}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 3);
                onChangeWeight(val);
              }}
              style={{
                width: '100%',
                height: '56px',
                borderRadius: '16px',
                border: '1.5px solid #D5D6E0',
                padding: '0 48px 0 18px',
                fontSize: '15px',
                fontWeight: 500,
                color: '#000045',
                backgroundColor: '#FFFFFF',
                outline: 'none',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                transition: 'border-color 0.15s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#000045'}
              onBlur={(e) => e.target.style.borderColor = '#D5D6E0'}
            />
            <span 
              style={{
                position: 'absolute',
                right: '18px',
                fontSize: '15px',
                color: '#848494',
                pointerEvents: 'none'
              }}
            >
              lbs.
            </span>
          </div>
        </div>
      </div>

      {/* BMI Indicator Bar */}
      <div style={{ marginBottom: '28px', textAlign: 'center' }}>
        <div 
          style={{
            fontSize: '16px',
            fontWeight: 500,
            color: '#000045',
            marginBottom: '14px'
          }}
        >
          Your BMI: <span style={{ fontWeight: 600 }}>{bmiData.display}</span>
        </div>

        {/* Spectrum Track */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            height: '6px',
            borderRadius: '999px',
            background: 'linear-gradient(90deg, #CEE05C 0%, #76B852 35%, #D48C50 70%, #E85B64 100%)',
            marginBottom: '16px'
          }}
        >
          {/* Slider Pip Indicator */}
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: `${bmiData.percentage}%`,
              transform: 'translate(-50%, -50%)',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '2px solid #000045',
              boxShadow: '0 1px 4px rgba(0,0,0,0.18)',
              transition: 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        </div>

        {/* Footnote */}
        <p 
          style={{
            fontSize: '12.5px',
            color: '#606069',
            margin: '0',
            lineHeight: '1.4'
          }}
        >
          BMI is calculated using the standard clinical formula.{' '}
          <span 
            style={{ 
              textDecoration: 'underline', 
              cursor: 'pointer',
              color: '#000045'
            }}
          >
            Learn more.
          </span>
        </p>
      </div>

      {/* Next CTA */}
      <button
        type="button"
        disabled={!isValid}
        onClick={onNext}
        style={{
          width: '100%',
          height: '52px',
          borderRadius: '9999px',
          border: 'none',
          backgroundColor: isValid ? '#000045' : '#EAEAF2',
          color: isValid ? '#FFFFFF' : '#848494',
          fontSize: '16px',
          fontWeight: 600,
          cursor: isValid ? 'pointer' : 'not-allowed',
          transition: 'all 0.15s ease',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          if (isValid) e.currentTarget.style.backgroundColor = '#000060';
        }}
        onMouseLeave={(e) => {
          if (isValid) e.currentTarget.style.backgroundColor = '#000045';
        }}
      >
        Next
      </button>
    </div>
  );
}
