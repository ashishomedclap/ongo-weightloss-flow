import React from 'react';
import gabrielaImg from '../../assets/mochi/gabriela.jpg';
import brianaImg from '../../assets/mochi/briana.jpg';
import christinaImg from '../../assets/mochi/christina.jpg';
import sarahImg from '../../assets/mochi/sarah.jpg';

export default function MochiFrame7Results({ onNext, onBack }) {
  const testimonials = [
    {
      id: 'gabriela',
      name: 'Gabriela',
      weightLost: '60 pounds',
      image: gabrielaImg
    },
    {
      id: 'briana',
      name: 'Briana',
      weightLost: '100 pounds',
      image: brianaImg
    },
    {
      id: 'christina',
      name: 'Christina',
      weightLost: '38 pounds',
      image: christinaImg
    },
    {
      id: 'sarah',
      name: 'Sarah',
      weightLost: '83 pounds',
      image: sarahImg
    }
  ];

  return (
    <div 
      className="mochi-frame-7-content"
      style={{
        width: '100%',
        maxWidth: '820px',
        margin: '0 auto',
        padding: '32px 16px 80px',
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
          Ready for real results?
        </h1>
        <p 
          style={{
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: '1.45',
            color: '#606069',
            margin: 0
          }}
        >
          We support our members throughout their entire weight loss journey, from weight loss to maintenance.
        </p>
      </div>

      {/* 4 Patient Cards Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '14px',
          width: '100%',
          marginBottom: '24px'
        }}
      >
        {testimonials.map((patient) => (
          <div key={patient.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Card with Photo */}
            <div 
              style={{
                width: '100%',
                aspectRatio: '0.9',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 14px rgba(0,0,69,0.06)',
                backgroundColor: '#F3F4F6'
              }}
            >
              <img 
                src={patient.image} 
                alt={`${patient.name} weight loss transformation`} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }} 
              />
              
              {/* Floating Before badge */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  left: '12%',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  color: '#1E2532',
                  fontSize: '10.5px',
                  fontWeight: 600,
                  padding: '3px 8px',
                  borderRadius: '999px',
                  backdropFilter: 'blur(2px)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}
              >
                Before
              </div>

              {/* Floating After badge */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '12%',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  color: '#1E2532',
                  fontSize: '10.5px',
                  fontWeight: 600,
                  padding: '3px 8px',
                  borderRadius: '999px',
                  backdropFilter: 'blur(2px)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}
              >
                After
              </div>
            </div>

            {/* Patient Name & Pounds Lost */}
            <p 
              style={{
                fontSize: '13px',
                color: '#1E2532',
                marginTop: '10px',
                marginBottom: 0,
                textAlign: 'center'
              }}
            >
              {patient.name} lost <span style={{ fontWeight: 700, color: '#000045' }}>{patient.weightLost}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Legal Footnote */}
      <p 
        style={{
          fontSize: '11.5px',
          color: '#70757E',
          lineHeight: '1.45',
          textAlign: 'left',
          marginBottom: '32px'
        }}
      >
        These are real Mochi members who were compensated for sharing their experiences. Individual results may vary.
      </p>

      {/* Next Action Pill Button */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <button
          type="button"
          onClick={onNext}
          style={{
            width: '100%',
            maxWidth: '360px',
            height: '52px',
            borderRadius: '999px',
            backgroundColor: '#000045',
            color: '#FFFFFF',
            border: 'none',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontFamily: 'inherit',
            outline: 'none'
          }}
        >
          Next
        </button>

        {onBack && (
          <button
            type="button"
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              color: '#606069',
              fontSize: '14px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              padding: '6px 12px'
            }}
          >
            ← Back to previous question
          </button>
        )}
      </div>
    </div>
  );
}
