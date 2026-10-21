import React from 'react';
import { Calendar, ShieldCheck, Check } from 'lucide-react';
import { FridaysUserIcon } from './FridaysIcons';

export default function FridaysFrame7Provider({ state = 'Alabama' }) {
  return (
    <div style={{
      width: '100%',
      maxWidth: '620px',
      margin: '0 auto',
      padding: '48px 20px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: 700,
        color: '#363F33',
        margin: '0 0 8px',
        textAlign: 'center'
      }}>
        Meet your licensed telehealth clinician
      </h1>
      <p style={{
        fontSize: '14px',
        color: '#6B7280',
        margin: '0 0 32px',
        textAlign: 'center',
        lineHeight: '1.5'
      }}>
        Your care is managed by US board-certified physicians licensed in {state}.
      </p>

      {/* Clinician Profile Card */}
      <div style={{
        width: '100%',
        borderRadius: '16px',
        background: '#FFFFFF',
        border: '1px solid #E5E7EB',
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '28px',
        boxSizing: 'border-box',
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: '#EAEFE9',
          color: '#363F33',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <FridaysUserIcon size={38} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1F2937', margin: 0 }}>
              Dr. Amanda Reynolds, MD
            </h2>
            <span style={{
              background: '#E6F4EA',
              color: '#137333',
              fontSize: '11px',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '10px'
            }}>
              Licensed in {state}
            </span>
          </div>
          <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>
            Internal Medicine & Obesity Medicine Specialist • 14+ Years Experience
          </div>
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[
          '1-on-1 video call to review health history and medication suitability',
          'Prescriptions sent directly to FDA-registered 503B/503A partner pharmacies',
          'Unlimited ongoing secure messaging with your dedicated care team'
        ].map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#E6F4EA',
              color: '#137333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '1px',
              flexShrink: 0
            }}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span style={{ fontSize: '13.5px', color: '#374151', lineHeight: '1.45' }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
