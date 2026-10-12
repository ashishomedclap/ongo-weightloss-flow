import React from 'react';
import memberElyse from '../../assets/mochi/member_elyse.jpg';
import memberShannon from '../../assets/mochi/member_shannon.jpg';
import memberSadie from '../../assets/mochi/member_sadie.jpg';
import memberKristina from '../../assets/mochi/member_kristina.jpg';

export default function MochiFrame25EveryStep({
  onNext,
  onBack
}) {
  const members = [
    {
      id: 'elyse',
      quote: '“GLP-1 with support has changed my life.”',
      detail: 'Elyse lost 80 lbs with Mochi',
      img: memberElyse
    },
    {
      id: 'shannon',
      quote: '“Mochi actually listens, and that changed everything.”',
      detail: 'Shannon lost 60 lbs with Mochi',
      img: memberShannon
    },
    {
      id: 'sadie',
      quote: '“It wasn’t about weight, it was about health.”',
      detail: 'Sadie lost 180 lbs with Mochi',
      img: memberSadie
    },
    {
      id: 'kristina',
      quote: '“I felt heard and supported every step.”',
      detail: 'Kristina lost 50 lbs with Mochi',
      img: memberKristina
    }
  ];

  return (
    <div 
      className="mochi-frame-25-content"
      style={{
        width: '100%',
        maxWidth: '860px',
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
          With you every step of the way
        </h1>
        <p 
          style={{
            fontSize: '14.5px',
            fontWeight: 400,
            lineHeight: '1.45',
            color: '#606069',
            margin: '0'
          }}
        >
          Mochi has supported over 500,000 patients with personalized weight loss care.
        </p>
      </div>

      {/* 4 Member Cards Horizontal Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}
      >
        {members.map((m) => (
          <div key={m.id} style={{ textAlign: 'left' }}>
            <div 
              style={{
                width: '100%',
                aspectRatio: '1 / 1.05',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#F3F4F8',
                marginBottom: '12px'
              }}
            >
              <img
                src={m.img}
                alt={m.detail}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div 
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#000045',
                lineHeight: '1.35',
                marginBottom: '6px'
              }}
            >
              {m.quote}
            </div>
            <div 
              style={{
                fontSize: '13px',
                fontWeight: 400,
                color: '#606069',
                lineHeight: '1.4'
              }}
            >
              {m.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <p 
        style={{
          fontSize: '12px',
          color: '#848494',
          margin: '0 0 36px 0',
          textAlign: 'left',
          lineHeight: '1.45'
        }}
      >
        These are real Mochi members who were compensated for sharing their experiences. Individual results may vary.
      </p>

      {/* Next CTA */}
      <button
        type="button"
        onClick={onNext}
        style={{
          width: '100%',
          maxWidth: '460px',
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
          margin: '0 auto',
          display: 'block'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000060'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000045'}
      >
        Next
      </button>
    </div>
  );
}
