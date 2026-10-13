import React from 'react';
import doctorRoberto from '../../assets/mochi/doctor_roberto.jpg';
import doctorLeah from '../../assets/mochi/doctor_leah.jpg';
import doctorClete from '../../assets/mochi/doctor_clete.jpg';
import doctorKatherine from '../../assets/mochi/doctor_katherine.jpg';

export default function MochiFrame24GoodHands({
  onNext,
  onBack
}) {
  const doctors = [
    {
      id: 'roberto',
      name: 'Roberto Valledor, MD',
      role: 'Board-certified in Family Medicine and Obesity Medicine',
      img: doctorRoberto
    },
    {
      id: 'leah',
      name: 'Leah Jones, MD',
      role: 'Board-certified in Internal Medicine and Obesity Medicine',
      img: doctorLeah
    },
    {
      id: 'clete',
      name: 'Clete Barrick, MD',
      role: 'Board-certified in Internal Medicine and Obesity Medicine',
      img: doctorClete
    },
    {
      id: 'katherine',
      name: 'Katherine Austin, MD, MPH, FAAP, FRCP(C)',
      role: 'Board-certified in Pediatrics and Adolescent Medicine',
      img: doctorKatherine
    }
  ];

  const steps = [
    { num: '1', text: 'Choose your provider from our network of experts.' },
    { num: '2', text: 'Book an initial visit and meet with them online for 30 minutes.' },
    { num: '3', text: "You'll get unlimited visits and messaging throughout your journey at Mochi." }
  ];

  return (
    <div 
      className="mochi-frame-24-content"
      style={{
        width: '100%',
        maxWidth: '820px',
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
          You're in good hands.
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
          As a Mochi member, you get a provider that's with you for the long haul. Our patients give our providers an average of <span style={{ fontWeight: 600, color: '#000045' }}>4.93</span> out of 5 stars.
        </p>
      </div>

      {/* 4 Doctor Cards Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '16px',
          marginBottom: '36px'
        }}
      >
        {doctors.map((doc) => (
          <div key={doc.id} style={{ textAlign: 'left' }}>
            <div 
              style={{
                width: '100%',
                aspectRatio: '1 / 1.15',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#E8F1FC',
                marginBottom: '10px'
              }}
            >
              <img
                src={doc.img}
                alt={doc.name}
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
                lineHeight: '1.3',
                marginBottom: '4px'
              }}
            >
              {doc.name}
            </div>
            <div 
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: '#606069',
                lineHeight: '1.35'
              }}
            >
              {doc.role}
            </div>
          </div>
        ))}
      </div>

      {/* Provider-led care at Mochi Section */}
      <div style={{ textAlign: 'left', marginBottom: '36px' }}>
        <h2 
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#000045',
            margin: '0 0 16px 0'
          }}
        >
          Provider-led care at Mochi
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {steps.map((st) => (
            <div
              key={st.num}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 18px',
                borderRadius: '14px',
                border: '1.5px solid #EAEAF2',
                backgroundColor: '#FFFFFF'
              }}
            >
              <div 
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#F3F4F8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  color: '#000045',
                  flexShrink: 0
                }}
              >
                {st.num}
              </div>
              <span style={{ fontSize: '14.5px', color: '#000045', fontWeight: 500 }}>
                {st.text}
              </span>
            </div>
          ))}
        </div>
      </div>

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
