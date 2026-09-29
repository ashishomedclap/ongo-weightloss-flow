import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Check } from 'lucide-react';

const PLANS = [
  {
    id: '1-month',
    duration: '1 Month',
    title: 'Kickstart',
    monthlyPrice: 249,
    savingsText: 'Save $50',
    totalText: '$249 billed today',
    isRecommended: false,
    description: 'Great for trying out medical weight loss and seeing how your body responds.'
  },
  {
    id: '3-months',
    duration: '3 Months',
    title: 'Momentum',
    monthlyPrice: 199,
    savingsText: 'Save $50/mo',
    totalText: '$597 total billed for 3 months',
    isRecommended: true,
    description: 'Our most popular plan. Allows sufficient time for medication titration and sustained results.'
  },
  {
    id: '6-months',
    duration: '6 Months',
    title: 'Transform',
    monthlyPrice: 179,
    savingsText: 'Save $70/mo',
    totalText: '$1,074 total billed for 6 months',
    isRecommended: false,
    description: 'Maximum savings for committed long-term metabolic health and milestone goals.'
  }
];

export default function Screen9TreatmentPlan({ formData, updateFormData, onNext, onBack }) {
  const [selectedPlanId, setSelectedPlanId] = useState(formData.selectedPlanId || '3-months');

  const handleContinue = () => {
    const chosenPlan = PLANS.find(p => p.id === selectedPlanId);
    updateFormData({
      selectedPlanId,
      selectedPlan: chosenPlan
    });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-nav-header">
        <button type="button" className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
        <span className="step-counter-text">Care Plan</span>
      </div>

      <div className="heading-section">
        <h1 className="page-title">Choose Your Treatment Plan</h1>
        <p className="page-subtitle">
          Weight-loss results vary from person to person. Choose the plan that fits your treatment journey.
        </p>
      </div>

      {/* Plan Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '22px' }}>
        {PLANS.map((plan) => {
          const isSelected = selectedPlanId === plan.id;

          return (
            <div
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              style={{
                borderRadius: '18px',
                border: `2px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-border)'}`,
                background: isSelected ? 'var(--color-green-pale)' : '#FFFFFF',
                padding: '20px',
                cursor: 'pointer',
                boxShadow: isSelected ? '0 6px 20px rgba(47, 137, 104, 0.12)' : 'var(--shadow-card)',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
            >
              {plan.isRecommended && (
                <div style={{
                  position: 'absolute',
                  top: '-11px',
                  right: '20px',
                  background: 'var(--color-primary-dark)',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '3px 12px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}>
                  Recommended
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {plan.duration}
                  </span>
                  <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
                    {plan.title}
                  </h2>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                    ${plan.monthlyPrice}
                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-secondary)' }}> / mo</span>
                  </div>
                  <span style={{
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: 'var(--color-accent)',
                    background: 'var(--color-green-light)',
                    padding: '2px 8px',
                    borderRadius: '10px'
                  }}>
                    {plan.savingsText}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '8px 0 12px', lineHeight: '1.4' }}>
                {plan.description}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <span style={{ fontSize: '12.5px', color: 'var(--color-text-muted)' }}>
                  {plan.totalText}
                </span>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: isSelected ? 'var(--color-accent)' : 'var(--color-text-muted)'
                }}>
                  {isSelected ? (
                    <>
                      <Check size={16} strokeWidth={3} /> Selected
                    </>
                  ) : (
                    'Select Plan'
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ongo Eligibility Guarantee Banner */}
      <div style={{
        background: '#FAF8F2',
        border: '1.5px solid #E8DFCC',
        borderRadius: '16px',
        padding: '16px 18px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        marginBottom: '22px'
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'var(--color-primary-dark)',
          color: '#FFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <ShieldCheck size={18} />
        </div>
        <div>
          <strong style={{ fontSize: '14px', color: 'var(--color-primary-dark)', display: 'block', marginBottom: '2px' }}>
            Ongo Eligibility Guarantee
          </strong>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.45', margin: '0 0 4px' }}>
            If you pay for a treatment and your provider determines that you are not eligible, we’ll issue a full refund.
          </p>
          <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            Subject to Ongo's refund policy and applicable terms.
          </span>
        </div>
      </div>

      <button
        type="button"
        className="cta-button"
        onClick={handleContinue}
      >
        <span>Continue to Secure Payment</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
