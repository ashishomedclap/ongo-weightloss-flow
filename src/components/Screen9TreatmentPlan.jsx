import React, { useState } from 'react';
import { ShieldCheck, Check } from 'lucide-react';

const PLANS = [
  {
    id: '1-month',
    duration: '1 MONTH',
    title: 'Kickstart',
    monthlyPrice: 249,
    savingsText: 'Save $50',
    totalText: '$249 billed today',
    isRecommended: false,
    description: 'A flexible way to get started with ongoing medical weight-loss care.'
  },
  {
    id: '3-months',
    duration: '3 MONTHS',
    title: 'Momentum',
    monthlyPrice: 199,
    savingsText: 'Save $50/mo',
    totalText: '$597 total billed for 3 months',
    isRecommended: true,
    description: 'Allows sufficient time for medication titration and ongoing clinical guidance.'
  },
  {
    id: '6-months',
    duration: '6 MONTHS',
    title: 'Transform',
    monthlyPrice: 179,
    savingsText: 'Save $70/mo',
    totalText: '$1,074 total billed for 6 months',
    isRecommended: false,
    description: 'Maximum savings for committed long-term metabolic health and ongoing care.'
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
      <div className="step-tag-teal">
        YOUR TREATMENT
      </div>

      <div className="heading-section">
        <h1 className="page-title">Choose your treatment plan</h1>
        <p className="page-subtitle">
          Select the plan duration that works best for you. Your physician makes the final treatment decision.
        </p>
      </div>

      {/* Plan Cards */}
      <div className="plans-stack">
        {PLANS.map((plan) => {
          const isSelected = selectedPlanId === plan.id;

          return (
            <div
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`plan-card ${isSelected ? 'selected' : ''}`}
            >
              {plan.isRecommended && (
                <div className="plan-badge-recommended">
                  RECOMMENDED
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
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
                  <span className="savings-badge-pill">
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
                  color: isSelected ? '#1F4F3D' : 'var(--color-text-muted)'
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
      <div className="guarantee-box">
        <div className="guarantee-icon-circle">
          <ShieldCheck size={18} />
        </div>
        <div>
          <strong style={{ fontSize: '14px', color: 'var(--color-primary-dark)', display: 'block', marginBottom: '2px' }}>
            Ongo Eligibility Guarantee
          </strong>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.45', margin: '0 0 4px' }}>
            If you pay for a treatment and your provider determines that you are not eligible, we'll issue a full refund.
          </p>
          <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            Subject to Ongo's refund policy and applicable terms.
          </span>
        </div>
      </div>

      <button
        type="button"
        className="cta-button-pill active"
        onClick={handleContinue}
      >
        <span>Continue to Secure Payment</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
