import React, { useState } from 'react';
import { Sparkles, Stethoscope, ShieldCheck } from 'lucide-react';

export default function MochiFrame19InsuranceSavings({
  onCheckCoverage,
  onSkip,
  onBack
}) {
  const [activeTab, setActiveTab] = useState('breakdown'); // 'breakdown' | 'how-it-works'

  return (
    <div 
      className="mochi-frame-19-content"
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
      {/* Main Title & Subtitle */}
      <div style={{ marginBottom: '24px', textAlign: 'left' }}>
        <h1 
          style={{
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '1.3',
            color: '#000045',
            margin: '0 0 8px 0',
            letterSpacing: '-0.015em'
          }}
        >
          Save up to $389 annually with insurance
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
          Check your Covered with Mochi eligibility at no extra cost to you.
        </p>
      </div>

      {/* Card 1: Lower Membership Fee */}
      <div 
        style={{
          border: '1.5px solid #EAEAF2',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '16px',
          backgroundColor: '#FFFFFF',
          textAlign: 'left'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={16} color="#7C3AED" />
          </div>
          <span style={{ fontSize: '16px', fontWeight: 600, color: '#000045' }}>
            Lower membership fee
          </span>
        </div>

        {/* Comparison Bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '130px', fontSize: '13px', color: '#606069' }}>Standard</span>
            <div style={{ flex: 1, height: '28px', backgroundColor: '#EDEAF8', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '12px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#4B5563' }}>$49/mo</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '130px', fontSize: '13px', fontWeight: 600, color: '#5B21B6' }}>Covered with Mochi</span>
            <div style={{ width: '42%', height: '28px', backgroundColor: '#5B21B6', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF' }}>$17/mo</span>
            </div>
          </div>
        </div>

        <p style={{ fontSize: '12px', color: '#606069', margin: 0, lineHeight: '1.4' }}>
          Graph based on 12 months. Let your insurer help cover your care. You only pay your plan's cost share.
        </p>
      </div>

      {/* Card 2: Dedicated RDN Support */}
      <div 
        style={{
          border: '1.5px solid #EAEAF2',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '24px',
          backgroundColor: '#FFFFFF',
          textAlign: 'left'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Stethoscope size={16} color="#7C3AED" />
          </div>
          <span style={{ fontSize: '15px', fontWeight: 600, color: '#000045', lineHeight: '1.3' }}>
            Dedicated support from a Registered Dietitian Nutritionist
          </span>
        </div>

        <div style={{ fontSize: '36px', fontWeight: 700, color: '#5B21B6', letterSpacing: '-0.02em', marginBottom: '4px' }}>
          17.6%
        </div>
        <p style={{ fontSize: '13px', color: '#606069', margin: 0, lineHeight: '1.4' }}>
          more weight lost by Mochi patients who saw a registered dietitian 3+ times in a year.
        </p>
      </div>

      {/* Top CTA Group */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
        <button
          type="button"
          onClick={onCheckCoverage}
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
            outline: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000060'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000045'}
        >
          Check my coverage
        </button>

        <button
          type="button"
          onClick={onSkip}
          style={{
            background: 'none',
            border: 'none',
            color: '#000045',
            fontSize: '14.5px',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '6px'
          }}
        >
          Skip for now
        </button>
      </div>

      {/* Deep Breakdown Section */}
      <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#000045', margin: '0 0 6px 0' }}>
          Use the insurance you already pay for
        </h2>
        <p style={{ fontSize: '14px', color: '#606069', margin: '0 0 16px 0', lineHeight: '1.4' }}>
          Your visits are billed to your plan as in-network care. We show your estimated costs before you pay.
        </p>

        {/* Tab Toggle */}
        <div style={{ display: 'inline-flex', backgroundColor: '#F3F4F6', borderRadius: '999px', padding: '3px', marginBottom: '20px' }}>
          <button
            type="button"
            onClick={() => setActiveTab('breakdown')}
            style={{
              padding: '6px 16px',
              borderRadius: '999px',
              border: 'none',
              backgroundColor: activeTab === 'breakdown' ? '#EAEAF2' : 'transparent',
              color: '#000045',
              fontWeight: activeTab === 'breakdown' ? 600 : 500,
              fontSize: '13px',
              cursor: 'pointer'
            }}
          >
            Cost breakdown
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('how-it-works')}
            style={{
              padding: '6px 16px',
              borderRadius: '999px',
              border: 'none',
              backgroundColor: activeTab === 'how-it-works' ? '#EAEAF2' : 'transparent',
              color: '#000045',
              fontWeight: activeTab === 'how-it-works' ? 600 : 500,
              fontSize: '13px',
              cursor: 'pointer'
            }}
          >
            How it works
          </button>
        </div>

        {/* Breakdown Box */}
        <div 
          style={{
            border: '1.5px solid #EAEAF2',
            borderRadius: '16px',
            padding: '20px',
            backgroundColor: '#FFFFFF',
            marginBottom: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <span style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              borderRadius: '6px',
              backgroundColor: '#5B21B6',
              color: '#FFF',
              fontSize: '11px',
              fontWeight: 800
            }}>
              m
            </span>
            <span style={{ fontSize: '16px', fontWeight: 600, color: '#5B21B6', fontStyle: 'italic' }}>
              Covered with Mochi
            </span>
          </div>

          {/* Pricing Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderBottom: '1px solid #F0F0F4', paddingBottom: '16px', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '13px', color: '#606069', marginBottom: '2px' }}>6 months</div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#000045' }}>$119</div>
              <div style={{ fontSize: '12px', color: '#606069' }}>$20 / mo</div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                <span style={{ fontSize: '13px', color: '#606069' }}>12 months</span>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#059669', backgroundColor: '#D1FAE5', padding: '1px 6px', borderRadius: '6px' }}>Best value</span>
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#000045' }}>$199</div>
              <div style={{ fontSize: '12px', color: '#606069' }}>$17 / month</div>
            </div>
          </div>

          {/* Fee Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <span style={{ color: '#606069' }}>Visit no-show fee</span>
              <span style={{ fontWeight: 600, color: '#000045' }}>$75.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <span style={{ color: '#606069' }}>24-hour cancellation fee</span>
              <span style={{ fontWeight: 600, color: '#000045' }}>$25.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <span style={{ color: '#606069' }}>Per-visit copay/coinsurance</span>
              <span style={{ fontWeight: 600, color: '#000045' }}>Your plan</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <span style={{ color: '#606069' }}>Deductible, if unmet</span>
              <span style={{ fontWeight: 600, color: '#000045' }}>Your plan</span>
            </div>
          </div>
        </div>

        <p style={{ fontSize: '12px', color: '#606069', margin: '0 0 24px 0', lineHeight: '1.4' }}>
          Your insurer sets visit costs, so we can't quote them here. After your coverage check, you'll see your estimated copay, coinsurance, and/or deductible.
        </p>

        {/* Bottom CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            type="button"
            onClick={onCheckCoverage}
            style={{
              width: '100%',
              height: '52px',
              borderRadius: '9999px',
              border: 'none',
              backgroundColor: '#000045',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Check my coverage
          </button>
          <button
            type="button"
            onClick={onSkip}
            style={{
              background: 'none',
              border: 'none',
              color: '#000045',
              fontSize: '14.5px',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '6px'
            }}
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
