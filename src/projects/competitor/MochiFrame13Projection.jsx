import React from 'react';

export default function MochiFrame13Projection({
  weightLbs = '450',
  onNext,
  onBack
}) {
  const parsedWeight = parseFloat(weightLbs) > 0 ? parseFloat(weightLbs) : 450;
  // 12.1% average 6-month weight loss from Mochi clinical trial reference
  const lossLbs = Math.round(parsedWeight * 0.121) || 54;
  const targetWeight = parsedWeight - lossLbs;

  // Month names for 6-month trajectory
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];

  return (
    <div 
      className="mochi-frame-13-content"
      style={{
        width: '100%',
        maxWidth: '580px',
        margin: '0 auto',
        padding: '36px 20px 80px',
        boxSizing: 'border-box',
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
        color: '#000045'
      }}
    >
      {/* Dynamic Title */}
      <div style={{ marginBottom: '36px', textAlign: 'left' }}>
        <h1 
          style={{
            fontSize: '26px',
            fontWeight: 600,
            lineHeight: '1.28',
            color: '#000045',
            margin: '0',
            letterSpacing: '-0.015em'
          }}
        >
          In six months, you could lose {lossLbs} lbs.
        </h1>
      </div>

      {/* Trajectory Graph Container */}
      <div 
        style={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px 12px 16px',
          boxSizing: 'border-box',
          marginBottom: '28px'
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '240px' }}>
          <svg 
            viewBox="0 0 540 240" 
            style={{ width: '100%', height: '100%', overflow: 'visible' }}
          >
            {/* Top Dashed Guideline */}
            <line
              x1="90"
              y1="36"
              x2="500"
              y2="36"
              stroke="#E2E4EB"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />
            {/* Top Weight Label */}
            <text
              x="24"
              y="41"
              fontSize="14"
              fontWeight="500"
              fill="#343440"
              fontFamily="inherit"
            >
              {parsedWeight} lbs
            </text>

            {/* Bottom Dashed Guideline */}
            <line
              x1="90"
              y1="180"
              x2="500"
              y2="180"
              stroke="#E2E4EB"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />
            {/* Bottom Weight Label */}
            <text
              x="24"
              y="185"
              fontSize="14"
              fontWeight="500"
              fill="#343440"
              fontFamily="inherit"
            >
              {targetWeight} lbs
            </text>

            {/* Smooth S-curve trajectory line */}
            <path
              d="M 94 36 C 140 36, 170 120, 260 148 C 340 172, 420 180, 496 180"
              fill="none"
              stroke="#3884F7"
              strokeWidth="5.5"
              strokeLinecap="round"
            />

            {/* Start Node Dot */}
            <circle
              cx="94"
              cy="36"
              r="8"
              fill="#3884F7"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(56,132,247,0.35))' }}
            />

            {/* End Node Dot */}
            <circle
              cx="496"
              cy="180"
              r="8"
              fill="#3884F7"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(56,132,247,0.35))' }}
            />
          </svg>

          {/* Month Ticks under Graph */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '80px',
              paddingRight: '28px',
              marginTop: '4px'
            }}
          >
            {months.map((m) => (
              <span 
                key={m} 
                style={{ 
                  fontSize: '13px', 
                  fontWeight: 500, 
                  color: '#606069' 
                }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Clinical Reference Subtext */}
      <p 
        style={{
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '1.55',
          color: '#606069',
          textAlign: 'left',
          margin: '0 0 36px 0'
        }}
      >
        Our users with a similar starting BMI to yours lose an average of 12.1% body weight in six months. Individual results may vary based on starting BMI and treatment adherence.
      </p>

      {/* Next Button */}
      <button
        type="button"
        onClick={onNext}
        style={{
          width: '100%',
          height: '52px',
          borderRadius: '9999px',
          border: 'none',
          backgroundColor: '#000045',
          color: '#FFFFFF',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background-color 0.15s ease',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000060'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000045'}
      >
        Next
      </button>
    </div>
  );
}
