import React, { useState } from 'react';
import { ArrowLeft, CreditCard, ShieldCheck, Lock, Check, Tag } from 'lucide-react';

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
  const [zip, setZip] = useState('90210');
  
  // Promo code
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const plan = formData.selectedPlan || {
    id: '3-months',
    title: '3-Month Momentum',
    monthlyPrice: 199,
  };

  const treatmentName = formData.selectedTreatmentName || 'Compounded Semaglutide';

  // Calculations
  const regularTotal = plan.id === '1-month' ? 299 : plan.id === '3-months' ? 747 : 1494;
  const planDiscount = plan.id === '1-month' ? 50 : plan.id === '3-months' ? 150 : 420;
  const promoDiscount = promoApplied ? 50 : 0;
  const finalTotal = Math.max(0, regularTotal - planDiscount - promoDiscount);

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
      <div className="step-nav-header">
        <button type="button" className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
        <span className="step-counter-text">Secure Checkout</span>
      </div>

      <div className="heading-section">
        <h1 className="page-title">Complete Your Payment</h1>
        <p className="page-subtitle">
          Your treatment plan is almost ready.
        </p>
      </div>

      {/* Payment Method Switcher Tabs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '20px' }}>
        <button
          type="button"
          className={`select-card-pill ${paymentMethod === 'card' ? 'selected' : ''}`}
          onClick={() => setPaymentMethod('card')}
          style={{ padding: '10px 4px', fontSize: '13px' }}
        >
          <CreditCard size={15} /> Card
        </button>
        <button
          type="button"
          className={`select-card-pill ${paymentMethod === 'apple' ? 'selected' : ''}`}
          onClick={() => setPaymentMethod('apple')}
          style={{ padding: '10px 4px', fontSize: '13px' }}
        >
          <span style={{ fontWeight: 800 }}> Pay</span>
        </button>
        <button
          type="button"
          className={`select-card-pill ${paymentMethod === 'google' ? 'selected' : ''}`}
          onClick={() => setPaymentMethod('google')}
          style={{ padding: '10px 4px', fontSize: '13px' }}
        >
          <span style={{ fontWeight: 800 }}>G Pay</span>
        </button>
      </div>

      {/* Payment Inputs */}
      {paymentMethod === 'card' && (
        <div style={{
          background: '#FFFFFF',
          border: '1.5px solid var(--color-border)',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '20px',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div className="form-group">
            <label className="form-label" htmlFor="card-number">Card Number</label>
            <input
              id="card-number"
              type="text"
              className="form-input"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="form-row-2">
            <div className="form-group">
              <label className="form-label" htmlFor="card-exp">Expiration Date</label>
              <input
                id="card-exp"
                type="text"
                className="form-input"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
                placeholder="MM / YY"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="card-cvc">CVC</label>
              <input
                id="card-cvc"
                type="text"
                className="form-input"
                value={cardCvc}
                onChange={(e) => setCardCvc(e.target.value)}
                placeholder="123"
              />
            </div>
          </div>

          <div className="form-row-2" style={{ marginBottom: 0 }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="card-name">Name on Card</label>
              <input
                id="card-name"
                type="text"
                className="form-input"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="card-zip">Billing ZIP Code</label>
              <input
                id="card-zip"
                type="text"
                className="form-input"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="90210"
              />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === 'apple' && (
        <div style={{
          background: '#FFFFFF',
          border: '1.5px solid var(--color-border)',
          borderRadius: '16px',
          padding: '24px 20px',
          marginBottom: '20px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
            Pay securely with Apple Pay
          </div>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '18px' }}>
            Use Touch ID, Face ID, or passcode on your Apple device. Your card details and shipping are verified securely.
          </p>
          <button
            type="button"
            onClick={handlePay}
            style={{
              width: '100%',
              height: '52px',
              borderRadius: '26px',
              background: '#000000',
              color: '#FFFFFF',
              border: 'none',
              fontFamily: 'inherit',
              fontSize: '17px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            Pay with Pay
          </button>
        </div>
      )}

      {paymentMethod === 'google' && (
        <div style={{
          background: '#FFFFFF',
          border: '1.5px solid var(--color-border)',
          borderRadius: '16px',
          padding: '24px 20px',
          marginBottom: '20px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
            Pay securely with Google Pay
          </div>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '18px' }}>
            Pay with payment methods linked to your Google Account. Fast, encrypted, and HIPAA-protected.
          </p>
          <button
            type="button"
            onClick={handlePay}
            style={{
              width: '100%',
              height: '52px',
              borderRadius: '26px',
              background: '#1F1F1F',
              color: '#FFFFFF',
              border: 'none',
              fontFamily: 'inherit',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <span>Buy with</span>
            <span style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>GPay</span>
          </button>
        </div>
      )}

      {/* Promo Code Form */}
      <div style={{
        background: '#FAF9F6',
        borderRadius: '14px',
        padding: '14px 16px',
        marginBottom: '20px',
        border: '1px solid var(--color-border)'
      }}>
        <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '8px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <input
              type="text"
              placeholder="Promo code (try ONGO50)"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="form-input"
              style={{ height: '42px', textTransform: 'uppercase', fontSize: '13.5px' }}
              disabled={promoApplied}
            />
          </div>
          <button
            type="submit"
            className="secondary-btn"
            style={{ height: '42px', padding: '0 16px', fontSize: '13px' }}
            disabled={promoApplied || !promoCode.trim()}
          >
            {promoApplied ? 'Applied ✓' : 'Apply'}
          </button>
        </form>
        {promoApplied && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-accent)', fontSize: '12px', fontWeight: 600, marginTop: '6px' }}>
            <Check size={14} /> $50 Welcome promotion applied successfully!
          </div>
        )}
        {promoError && (
          <div style={{ color: '#C81E1E', fontSize: '12px', marginTop: '6px' }}>
            {promoError}
          </div>
        )}
      </div>

      {/* Order Summary */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid var(--color-border)',
        borderRadius: '16px',
        padding: '18px 20px',
        marginBottom: '20px',
        boxShadow: 'var(--shadow-card)'
      }}>
        <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '14px' }}>
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

          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-accent)' }}>
            <span>Plan Savings</span>
            <span style={{ fontWeight: 700 }}>-${planDiscount}</span>
          </div>

          {promoApplied && (
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-accent)' }}>
              <span>Welcome Discount (ONGO50)</span>
              <span style={{ fontWeight: 700 }}>-$50</span>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Shipping</span>
            <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>FREE Discreet 2-3 Day</span>
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
            <span style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
              ${finalTotal}
            </span>
          </div>
        </div>
      </div>

      {paymentMethod === 'card' && (
        <button
          type="button"
          className="cta-button"
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
              <span>Pay ${finalTotal} & Reserve Care</span>
            </>
          )}
        </button>
      )}

      <p style={{
        fontSize: '11.5px',
        color: 'var(--color-text-muted)',
        textAlign: 'center',
        marginTop: '12px',
        lineHeight: '1.4'
      }}>
        By completing your purchase, you agree to Ongo’s applicable treatment, payment, refund, and telehealth terms.
      </p>
    </div>
  );
}
