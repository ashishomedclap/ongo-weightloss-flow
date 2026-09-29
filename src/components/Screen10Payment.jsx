import React, { useState } from 'react';
import { CreditCard, Lock, Check } from 'lucide-react';

export default function Screen10Payment({ formData, updateFormData, onNext, onBack }) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('08/28');
  const [cardCvc, setCardCvc] = useState('123');
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

  const treatmentName = formData.selectedTreatmentName || 'Compounded Semaglutide';

  // Calculations
  const regularTotal = plan.id === '1-month' ? 299 : plan.id === '3-months' ? 747 : 1494;
  const planDiscount = plan.id === '1-month' ? 50 : plan.id === '3-months' ? 150 : 420;
  const promoDiscount = promoApplied ? 50 : 0;
  // Additional 30% discount on first month for 3-months or longer plans
  const extraDiscount = plan.id !== '1-month' ? Math.round(plan.monthlyPrice * 0.30) : 0;
  // Total savings to highlight to user
  const totalSavings = planDiscount + extraDiscount + (promoDiscount || 0);
  const finalTotal = Math.max(0, regularTotal - planDiscount - promoDiscount - extraDiscount);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoCode.trim()) return;
    if (promoCode.trim().toUpperCase() === 'ONGO50' || promoCode.trim().toUpperCase() === 'WELCOME' || promoCode.trim().toUpperCase() === 'SAVE50') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "ONGO50"');
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
        CHECKOUT · SECURE PAYMENT
      </div>

      <div className="heading-section">
        <h1 className="page-title">Complete your payment</h1>
        <p className="page-subtitle">
          Your treatment plan is almost ready.
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
          <span style={{ fontWeight: 800 }}> Pay</span>
        </button>
        <button
          type="button"
          className={`payment-tab-pill ${paymentMethod === 'google' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('google')}
        >
          <span style={{ fontWeight: 800 }}>G Pay</span>
        </button>
      </div>

      {/* Payment Inputs */}
      {paymentMethod === 'card' && (
        <div className="white-elevated-card" style={{ marginBottom: '16px' }}>
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
            Use Touch ID, Face ID, or passcode on your Apple device. Your card details and shipping are verified securely.
          </p>
          <button
            type="button"
            onClick={handlePay}
            className="cta-button-pill active"
            style={{ background: '#000000' }}
          >
            <span>Secure Checkout with Pay</span>
          </button>
        </div>
      )}

      {paymentMethod === 'google' && (
        <div className="white-elevated-card" style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
            Pay securely with Google Pay
          </div>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '18px' }}>
            Pay with payment methods linked to your Google Account. Fast, encrypted, and HIPAA-protected.
          </p>
          <button
            type="button"
            onClick={handlePay}
            className="oauth-capsule-btn"
            style={{ background: '#000000', color: '#FFFFFF', borderColor: '#000000' }}
          >
            <span>Secure Checkout with GPay</span>
          </button>
        </div>
      )}

      {/* Promo Code Form */}
      <div className="promo-box">
        <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '8px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <input
              type="text"
              placeholder="PROMO CODE (TRY ONGO50)"
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
            <Check size={14} /> $50 Welcome promotion applied successfully!
          </div>
        )}
        {promoError && (
          <div style={{ color: '#C81E1E', fontSize: '12px', marginTop: '8px' }}>
            {promoError}
          </div>
        )}
      </div>

      {/* Order Summary */}
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
            <span style={{ color: 'var(--color-text-secondary)' }}>Treatment</span>
            <span style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>{treatmentName}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Regular Price</span>
            <span style={{ color: 'var(--color-text-muted)', textDecoration: 'line-through' }}>${regularTotal}</span>
          </div>

          {/* Savings Breakdown */}
          {planDiscount > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#1F4F3D' }}>
              <span>Plan Savings</span>
              <span style={{ fontWeight: 700 }}>-${planDiscount}</span>
            </div>
          )}
          {extraDiscount > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#1F4F3D' }}>
              <span>Additional 30% Discount</span>
              <span style={{ fontWeight: 700 }}>-${extraDiscount}</span>
            </div>
          )}
          {promoApplied && (
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#1F4F3D' }}>
              <span>Welcome Discount (ONGO50)</span>
              <span style={{ fontWeight: 700 }}>-${promoDiscount}</span>
            </div>
          )}
          {totalSavings > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(31, 79, 61, 0.06)', padding: '10px 12px', borderRadius: '8px', color: '#1F4F3D', marginTop: '10px', fontWeight: 700 }}>
              <span>Total Savings</span>
              <span>-${totalSavings}</span>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Shipping</span>
            <span style={{ fontWeight: 700, color: '#1F4F3D' }}>FREE Discreet 2-3 Day</span>
          </div>

          <div style={{
            height: '1px',
            background: 'var(--color-border)',
            margin: '8px 0'
          }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-primary-dark)' }}>Total Today</span>
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
              <span>Processing Secure Payment...</span>
            </>
          ) : (
            <>
              <Lock size={16} />
              <span>Complete Secure Checkout</span>
            </>
          )}
        </button>
      )}

      <p className="safety-sub-note" style={{ marginTop: '14px' }}>
        By completing your purchase, you agree to Ongo's applicable treatment, payment, refund, and telehealth terms.
      </p>
    </div>
  );
}
