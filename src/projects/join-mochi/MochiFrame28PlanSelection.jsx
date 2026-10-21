import React, { useState } from 'react';
import medicationVial from '../../assets/mochi/medication_vial.jpg';
import { LogOut } from 'lucide-react';

export default function MochiFrame28PlanSelection({
  selectedPlan = '',
  onSelectPlan,
  onNext,
  _onBack,
  onSignOut
}) {
  const [internalPlan, setInternalPlan] = useState(null);
  const currentPlan = internalPlan !== null ? internalPlan : (selectedPlan || '');

  const plans = [
    {
      id: '1-month',
      duration: '1 Month',
      pricePerMonth: '$79 / mo',
      originalTotal: '$79',
      dueToday: '$39 due today',
      savingsBadge: 'Save $40',
      totalCost: 39,
      interval: 'month'
    },
    {
      id: '3-months',
      duration: '3 Months',
      pricePerMonth: '$69 / mo',
      originalTotal: '$207',
      dueToday: '$167 due today',
      savingsBadge: 'Save $70',
      totalCost: 167,
      interval: 'every 3 months'
    },
    {
      id: '1-year',
      duration: '1 Year',
      pricePerMonth: '$49 / mo',
      originalTotal: '$588',
      dueToday: '$548 due today',
      savingsBadge: 'Save $400',
      totalCost: 548,
      interval: 'year'
    }
  ];

  const handleChoose = (planId) => {
    setInternalPlan(planId);
    if (onSelectPlan) onSelectPlan(planId);
  };

  const handleNext = () => {
    if (onSelectPlan) onSelectPlan(currentPlan);
    if (onNext) onNext();
  };

  return (
    <div 
      className="mochi-frame-28-content"
      style={{
        width: '100%',
        maxWidth: '580px',
        margin: '0 auto',
        padding: '32px 20px 80px',
        boxSizing: 'border-box',
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
        color: '#000045',
        textAlign: 'left'
      }}
    >
      {/* Title */}
      <h1 
        style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#000045',
          margin: '0 0 18px 0',
          letterSpacing: '-0.015em',
          lineHeight: '1.3'
        }}
      >
        Join more than 500,000 members who trust Mochi with their care.
      </h1>

      {/* Limited-time offer Banner */}
      <div 
        style={{
          backgroundColor: '#F5F6FC',
          border: '1.5px solid #D8DAE8',
          borderRadius: '16px',
          padding: '16px 20px',
          marginBottom: '24px',
          fontSize: '13.5px',
          color: '#000045',
          lineHeight: '1.45'
        }}
      >
        Limited-time offer for you! <span style={{ fontWeight: 600 }}>$40 off your first month</span> of membership.{' '}
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Terms apply</span>.
      </div>

      {/* Main Membership Card Container */}
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          border: '1.5px solid #EAEAF2',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 4px 16px rgba(0,0,69,0.04)',
          marginBottom: '28px'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '6px', backgroundColor: '#000045', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800 }}>
            m
          </div>
          <span style={{ fontSize: '16px', fontWeight: 700, color: '#000045' }}>
            Mochi Health Membership
          </span>
        </div>
        <p style={{ fontSize: '13px', color: '#606069', margin: '0 0 20px 0', lineHeight: '1.45' }}>
          Unlimited video visits with doctors and health coaches, 24/7 support, and access to 2000+ medications. Eligible for FSA/HSA.
        </p>

        {/* 3 Tier Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
          {plans.map((p) => {
            const isSelected = currentPlan === p.id;
            return (
              <div
                key={p.id}
                onClick={() => handleChoose(p.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 18px',
                  borderRadius: '16px',
                  border: isSelected ? '1.5px solid #000045' : '1.5px solid #D5D6E0',
                  backgroundColor: isSelected ? '#F4F5FB' : '#FFFFFF',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#000045', marginBottom: '2px' }}>
                    {p.duration}
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#000045', marginBottom: '2px' }}>
                    {p.pricePerMonth}
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#606069' }}>
                    <span style={{ textDecoration: 'line-through', marginRight: '6px' }}>{p.originalTotal}</span>
                    <span>{p.dueToday}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span 
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 700,
                      backgroundColor: '#27275E',
                      color: '#FFFFFF',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {p.savingsBadge}
                  </span>

                  {/* Radio Circle */}
                  {isSelected ? (
                    <div 
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        border: '5px solid #000045',
                        backgroundColor: '#FFFFFF',
                        boxSizing: 'border-box'
                      }}
                    />
                  ) : (
                    <div 
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        border: '1.5px solid #D5D6E0',
                        boxSizing: 'border-box'
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p style={{ fontSize: '12px', color: '#848494', margin: 0, lineHeight: '1.4' }}>
          At the end of the applicable term, membership will automatically renew at standard rates.
        </p>
      </div>

      {/* Medication Teaser Box */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#000045', margin: '0 0 14px 0', lineHeight: '1.4' }}>
          Once you're a member, you can talk to your provider about medications that may be right for you.
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '14px', border: '1.5px solid #EAEAF2', backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#F3F4F8' }}>
                <img src={medicationVial} alt="Semaglutide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#000045' }}>Compounded Semaglutide</span>
            </div>
            <span style={{ fontSize: '13px', color: '#606069' }}>Starting from <strong style={{ color: '#000045' }}>$60.00 / mo</strong></span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '14px', border: '1.5px solid #EAEAF2', backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#F3F4F8' }}>
                <img src={medicationVial} alt="Tirzepatide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#000045' }}>Compounded Tirzepatide</span>
            </div>
            <span style={{ fontSize: '13px', color: '#606069' }}>Starting from <strong style={{ color: '#000045' }}>$90.00 / mo</strong></span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '14px', border: '1.5px solid #EAEAF2', backgroundColor: '#FFFFFF' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#F3F4F8' }}>
              <img src={medicationVial} alt="Other treatments" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: '13.5px', color: '#606069' }}>And access to other treatments across skincare, hair growth, and more.</span>
          </div>
        </div>

        <p style={{ fontSize: '12px', color: '#848494', margin: 0, lineHeight: '1.4' }}>
          Monthly prices include a 28-day supply of medication. Medication orders must be approved by your provider.
        </p>
      </div>

      {/* Select Plan Button */}
      <button
        type="button"
        onClick={handleNext}
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
          marginBottom: '16px'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000060'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000045'}
      >
        Select plan
      </button>

      {/* Sign out link */}
      <div style={{ textAlign: 'center' }}>
        <button
          type="button"
          onClick={onSignOut || onBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#606069',
            fontSize: '13px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer'
          }}
        >
          <LogOut size={13} />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
}
