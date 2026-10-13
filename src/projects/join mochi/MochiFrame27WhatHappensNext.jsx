import React from 'react';
import doctorLeah from '../../assets/mochi/doctor_leah.jpg';
import medicationVial from '../../assets/mochi/medication_vial.jpg';
import { Smartphone } from 'lucide-react';

export default function MochiFrame27WhatHappensNext({
  firstName = 'Alex',
  onNext,
  onBack
}) {
  return (
    <div 
      className="mochi-frame-27-content"
      style={{
        width: '100%',
        maxWidth: '580px',
        margin: '0 auto',
        padding: '36px 20px 80px',
        boxSizing: 'border-box',
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
        color: '#000045',
        textAlign: 'left'
      }}
    >
      {/* Title & Subtitle */}
      <div style={{ marginBottom: '32px' }}>
        <h1 
          style={{
            fontSize: '26px',
            fontWeight: 600,
            lineHeight: '1.28',
            color: '#000045',
            margin: '0 0 10px 0',
            letterSpacing: '-0.015em'
          }}
        >
          {firstName ? `${firstName}, let's get your care started.` : "Let's get your care started."}
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
          You've waited long enough to feel like yourself again. Mochi is healthcare made to work for you.
        </p>
      </div>

      {/* Heading */}
      <h2 
        style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#000045',
          margin: '0 0 24px 0'
        }}
      >
        What happens next
      </h2>

      {/* Vertical Timeline */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '44px', paddingLeft: '8px' }}>
        {/* Connecting Vertical Grey Line */}
        <div 
          style={{
            position: 'absolute',
            left: '32px',
            top: '28px',
            bottom: '28px',
            width: '2px',
            backgroundColor: '#EAEAF2',
            zIndex: 0
          }}
        />

        {/* Step 1: Select Mochi membership */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '20px', zIndex: 1 }}>
          <div 
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              backgroundColor: '#000045',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(0,0,69,0.1)'
            }}
          >
            <span style={{ fontSize: '26px', fontWeight: 800, fontFamily: "'Instrument Sans', sans-serif" }}>m</span>
          </div>
          <div style={{ flex: 1, paddingTop: '2px' }}>
            <h3 style={{ fontSize: '15.5px', fontWeight: 600, color: '#000045', margin: '0 0 4px 0' }}>
              Select your Mochi membership
            </h3>
            <p style={{ fontSize: '14px', color: '#606069', margin: 0, lineHeight: '1.45' }}>
              Choose a provider who will accompany you on your health journey at Mochi.
            </p>
          </div>
        </div>

        {/* Step 2: Complete initial online visit */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '20px', zIndex: 1 }}>
          <div 
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              overflow: 'hidden',
              backgroundColor: '#E8F1FC',
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}
          >
            <img 
              src={doctorLeah} 
              alt="Doctor visit" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div style={{ flex: 1, paddingTop: '2px' }}>
            <h3 style={{ fontSize: '15.5px', fontWeight: 600, color: '#000045', margin: '0 0 4px 0' }}>
              Complete your initial online visit
            </h3>
            <p style={{ fontSize: '14px', color: '#606069', margin: 0, lineHeight: '1.45' }}>
              Meet your provider and discuss your treatment plan in a 30-minute visit.
            </p>
          </div>
        </div>

        {/* Step 3: Start treatments */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '20px', zIndex: 1 }}>
          <div 
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              overflow: 'hidden',
              backgroundColor: '#F3F4F8',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}
          >
            <img 
              src={medicationVial} 
              alt="Medication" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div style={{ flex: 1, paddingTop: '2px' }}>
            <h3 style={{ fontSize: '15.5px', fontWeight: 600, color: '#000045', margin: '0 0 4px 0' }}>
              Start treatments, if eligible
            </h3>
            <p style={{ fontSize: '14px', color: '#606069', margin: 0, lineHeight: '1.45' }}>
              Shipped from licensed pharmacies. Billed separately; provider approval required.
            </p>
          </div>
        </div>

        {/* Step 4: Ongoing care */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '20px', zIndex: 1 }}>
          <div 
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              backgroundColor: '#F3F4F8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: '#000045',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}
          >
            <Smartphone size={24} />
          </div>
          <div style={{ flex: 1, paddingTop: '2px' }}>
            <h3 style={{ fontSize: '15.5px', fontWeight: 600, color: '#000045', margin: '0 0 4px 0' }}>
              Ongoing care
            </h3>
            <p style={{ fontSize: '14px', color: '#606069', margin: 0, lineHeight: '1.45' }}>
              Manage your care in our app and get 24/7 support from your care team.
            </p>
          </div>
        </div>
      </div>

      {/* Choose a plan Button */}
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
        Choose a plan
      </button>
    </div>
  );
}
