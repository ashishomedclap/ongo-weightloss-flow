import React, { useState } from 'react';
import { CreditCard, Lock, Check } from 'lucide-react';
import ThemedDropdown from './ThemedDropdown';
import CountdownTimer from './CountdownTimer';

const AppleLogo = ({ size = 15 }) => (
  <svg viewBox="0 0 384 512" width={size} height={size} fill="currentColor" style={{ marginBottom: '1px' }}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const GoogleLogo = ({ size = 16 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size}>
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.11 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

export default function Screen10Payment({ formData, updateFormData, onNext, onBack }) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('08/28');
  const [cardCvc, setCardCvc] = useState('123');
  const [cardType, setCardType] = useState('credit');
  const [cardName, setCardName] = useState(
    formData.firstName && formData.lastName
      ? `${formData.firstName} ${formData.lastName}`
      : 'Sarah Miller'
  );

  // Promo code
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const plan = formData.selectedPlan || {
    id: '3-months',
    title: 'Momentum',
    duration: '3 Months',
    monthlyPrice: 199,
  };

  const treatmentName = formData.selectedTreatmentName || "Physician's Choice";

  // Simplified, transparent pricing
  const monthCount = plan.id === '1-month' ? 1 : plan.id === '3-months' ? 3 : 6;
  const subtotal = plan.monthlyPrice * monthCount;
  const promoDiscount = promoApplied ? 50 : 0;
  
  // Extra 30% discount on the first month for plans 3 months or longer
  const extraFirstMonthDiscount = monthCount >= 3 ? Math.round(plan.monthlyPrice * 0.30) : 0;
  
  const finalTotal = Math.max(0, subtotal - promoDiscount - extraFirstMonthDiscount);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoCode.trim()) return;
    const code = promoCode.trim().toUpperCase();
    if (code === 'ONGO50' || code === 'WELCOME' || code === 'SAVE50') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code.');
    }
  };

  const handlePay = (e) => {
    if (e) e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      updateFormData({
        paymentMethod,
        orderTotal: finalTotal,
        paymentDate: new Date().toLocaleDateString()
      });
      onNext();
    }, 900);
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        CHECKOUT
      </div>

      <div className="heading-section">
        <h1 className="page-title">Complete your payment</h1>
        <p className="page-subtitle">
          You're ready to start your Ongo care journey. Your physician will make the final treatment decision based on your clinical evaluation.
        </p>
      </div>

      {/* Payment Method Switcher Tabs */}
      <div className="payment-method-tabs">
        <button
          type="button"
          className={`payment-tab-pill ${paymentMethod === 'card' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('card')}
        >
          <CreditCard size={15} /> Card
        </button>
        <button
          type="button"
          className={`payment-tab-pill ${paymentMethod === 'apple' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('apple')}
        >
          <span style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}><AppleLogo size={14} /> Pay</span>
        </button>
        <button
          type="button"
          className={`payment-tab-pill ${paymentMethod === 'google' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('google')}
        >
          <span style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <GoogleLogo size={15} /> Pay
          </span>
        </button>
      </div>

      {/* Payment Inputs */}
      {paymentMethod === 'card' && (
        <div className="white-elevated-card" style={{ marginBottom: '16px' }}>
          
          <div className="input-capsule-wrap">
            <label className="field-top-label" htmlFor="card-type">Card Type</label>
            <div style={{ position: 'relative', marginTop: '4px' }}>
              <ThemedDropdown
                value={cardType}
                options={[
                  { label: 'Credit Card', value: 'credit' },
                  { label: 'Debit Card', value: 'debit' }
                ]}
                onChange={setCardType}
                placeholder="Select card type"
              />
            </div>
          </div>

          <div className="input-capsule-wrap">
            <label className="field-top-label" htmlFor="card-number">Card Number</label>
            <input
              id="card-number"
              type="text"
              className="input-capsule"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="input-capsule-row-2">
            <div className="input-capsule-wrap">
              <label className="field-top-label" htmlFor="card-exp">Expiration Date</label>
              <input
                id="card-exp"
                type="text"
                className="input-capsule"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
                placeholder="MM / YY"
              />
            </div>
            <div className="input-capsule-wrap">
              <label className="field-top-label" htmlFor="card-cvc">CVC</label>
              <input
                id="card-cvc"
                type="text"
                className="input-capsule"
                value={cardCvc}
                onChange={(e) => setCardCvc(e.target.value)}
                placeholder="123"
              />
            </div>
          </div>

          <div className="input-capsule-wrap">
            <label className="field-top-label" htmlFor="card-name">Name on Card</label>
            <input
              id="card-name"
              type="text"
              className="input-capsule"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>
        </div>
      )}

      {paymentMethod === 'apple' && (
        <div className="white-elevated-card" style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
            Pay securely with Apple Pay
          </div>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '18px' }}>
            Use Touch ID, Face ID, or passcode on your Apple device.
          </p>
          <button
            type="button"
            onClick={handlePay}
            disabled={isProcessing}
            className="cta-button-pill active"
            style={{ background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {isProcessing ? (
              <>
                <span className="spinner" />
                <span>Processing...</span>
              </>
            ) : (
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Continue with <AppleLogo size={18} /> Pay</span>
            )}
          </button>
        </div>
      )}

      {paymentMethod === 'google' && (
        <div className="white-elevated-card" style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
            Pay securely with Google Pay
          </div>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '18px' }}>
            Pay with payment methods linked to your Google Account.
          </p>
          <button
            type="button"
            onClick={handlePay}
            disabled={isProcessing}
            className="cta-button-pill active"
            style={{ background: '#000000', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
          >
            {isProcessing ? (
              <>
                <span className="spinner" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Continue with</span>
                <span style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <GoogleLogo size={16} /> Pay
                </span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Promo Code Form */}
      <div className="promo-box">
        <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '8px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <input
              type="text"
              placeholder="Have a promo code?"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="input-capsule"
              style={{ textTransform: 'uppercase', fontSize: '13px' }}
              disabled={promoApplied}
            />
          </div>
          <button
            type="submit"
            className="secondary-btn"
            style={{ height: '52px', padding: '0 20px', borderRadius: '26px', fontSize: '13px', fontWeight: 700 }}
            disabled={promoApplied || !promoCode.trim()}
          >
            {promoApplied ? 'Applied ✓' : 'Apply'}
          </button>
        </form>
        {promoApplied && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#1F4F3D', fontSize: '12px', fontWeight: 600, marginTop: '8px' }}>
            <Check size={14} /> Promo code applied: -$50
          </div>
        )}
        {promoError && (
          <div style={{ color: '#C81E1E', fontSize: '12px', marginTop: '8px' }}>
            {promoError}
          </div>
        )}
      </div>

      {/* Order Summary — Simplified & Transparent */}
      <div className="white-elevated-card" style={{ marginBottom: '20px' }}>
        <div className="card-section-heading" style={{ marginBottom: '14px' }}>
          Order Summary
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Treatment Plan</span>
            <span style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>{plan.duration} {plan.title}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Treatment Interest</span>
            <span style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>{treatmentName}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>{monthCount} month{monthCount > 1 ? 's' : ''} × ${plan.monthlyPrice}/mo</span>
            <span style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>${subtotal}</span>
          </div>

          {extraFirstMonthDiscount > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F2F9F5', padding: '6px 10px', borderRadius: '8px', margin: '4px 0', color: '#1F4F3D' }}>
              <span style={{ fontWeight: 600 }}>First Month Saving (30% Off)</span>
              <span style={{ fontWeight: 800 }}>-${extraFirstMonthDiscount}</span>
            </div>
          )}

          {promoApplied && (
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#1F4F3D' }}>
              <span>Promo Discount</span>
              <span style={{ fontWeight: 700 }}>-${promoDiscount}</span>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Nutritionist / Dietician</span>
            <span style={{ fontWeight: 700, color: '#1F4F3D', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '13px', fontWeight: 500 }}>$99</span>
              FREE
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Shipping (Discreet 2-3 Day)</span>
            <span style={{ fontWeight: 700, color: '#1F4F3D', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '13px', fontWeight: 500 }}>$23</span>
              FREE
            </span>
          </div>

          <div style={{
            height: '1px',
            background: 'var(--color-border)',
            margin: '8px 0'
          }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-primary-dark)' }}>Total charged today</span>
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block' }}>Includes physician review</span>
            </div>
            <span style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
              ${finalTotal}
            </span>
          </div>
        </div>
      </div>

      {paymentMethod === 'card' && (
        <button
          type="button"
          className="cta-button-pill active"
          onClick={handlePay}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <span className="spinner" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Lock size={16} />
              <span>Continue Securely</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </>
          )}
        </button>
      )}

      <div style={{ margin: '16px -24px 24px -24px' }}>
        <CountdownTimer />
      </div>

      <p className="safety-sub-note" style={{ marginTop: '14px' }}>
        By completing your purchase, you agree to Ongo's applicable terms. If your doctor finds you are not eligible after your appointment, a $39 consultation fee is deducted and the rest of your money will be refunded to you.
      </p>
    </div>
  );
}

// Trigger HMR

// Trigger HMR

// Trigger HMR 2

// Trigger HMR 3

// Trigger HMR 4

// Trigger HMR 5

// Trigger HMR
