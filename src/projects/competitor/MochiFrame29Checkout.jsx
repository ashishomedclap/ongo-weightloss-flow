import React, { useState } from 'react';
import { CreditCard, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function MochiFrame29Checkout({
  selectedPlan = '3-months',
  onCompletePayment,
  onBack
}) {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [cardNumber, setCardNumber] = useState('1234 1234 1234 1234');
  const [expDate, setExpDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [country, setCountry] = useState('India');
  const [isPaid, setIsPaid] = useState(false);

  // Pricing details by selected plan
  const planInfo = {
    '1-month': {
      title: 'Mochi Health Membership (1 Month)',
      monthlyRate: '$79 / mo',
      billedNote: 'Billed monthly',
      subtotal: 79.00,
      discount: 40.00,
      total: 39.00,
      saveBadge: 'Save $40'
    },
    '3-months': {
      title: 'Mochi Health Membership (3 Months)',
      monthlyRate: '$69 / mo',
      billedNote: 'Billed once every 3 months',
      subtotal: 207.00,
      discount: 40.00,
      total: 167.00,
      saveBadge: 'Save $70'
    },
    '1-year': {
      title: 'Mochi Health Membership (1 Year)',
      monthlyRate: '$49 / mo',
      billedNote: 'Billed annually',
      subtotal: 588.00,
      discount: 40.00,
      total: 548.00,
      saveBadge: 'Save $400'
    }
  }[selectedPlan] || {
    title: 'Mochi Health Membership (3 Months)',
    monthlyRate: '$69 / mo',
    billedNote: 'Billed once every 3 months',
    subtotal: 207.00,
    discount: 40.00,
    total: 167.00,
    saveBadge: 'Save $70'
  };

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setPromoApplied(true);
    }
  };

  const handlePay = (e) => {
    if (e) e.preventDefault();
    setIsPaid(true);
    if (onCompletePayment) {
      setTimeout(() => {
        onCompletePayment();
      }, 1000);
    }
  };

  if (isPaid) {
    return (
      <div 
        style={{
          width: '100%',
          maxWidth: '560px',
          margin: '0 auto',
          padding: '80px 20px',
          fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
          color: '#000045',
          textAlign: 'center'
        }}
      >
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <CheckCircle2 size={36} />
        </div>
        <h1 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 10px 0' }}>
          Payment Confirmed!
        </h1>
        <p style={{ fontSize: '15px', color: '#606069', margin: '0 0 24px 0', lineHeight: '1.5' }}>
          Your Mochi Health membership is active. We've matched you with your physician and your care team is ready.
        </p>
      </div>
    );
  }

  return (
    <div 
      className="mochi-frame-29-content"
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '32px 20px 80px',
        boxSizing: 'border-box',
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
        color: '#000045',
        textAlign: 'left'
      }}
    >
      {/* Membership Top Card */}
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          border: '1.5px solid #EAEAF2',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '24px',
          boxShadow: '0 2px 8px rgba(0,0,69,0.03)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#000045', marginBottom: '2px' }}>
              Mochi Health Membership
            </div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#000045', marginBottom: '4px' }}>
              {planInfo.monthlyRate}
            </div>
            <div style={{ fontSize: '12.5px', color: '#606069' }}>
              <span style={{ textDecoration: 'line-through', marginRight: '6px' }}>${planInfo.subtotal}</span>
              <span>${planInfo.total} due today</span>
            </div>
            <div style={{ fontSize: '12px', color: '#848494', marginTop: '2px' }}>
              {planInfo.billedNote}
            </div>
          </div>

          <span 
            style={{
              fontSize: '11px',
              fontWeight: 700,
              backgroundColor: '#27275E',
              color: '#FFFFFF',
              padding: '4px 10px',
              borderRadius: '999px',
              letterSpacing: '0.02em'
            }}
          >
            {planInfo.saveBadge}
          </span>
        </div>
      </div>

      {/* Invoice Breakdown */}
      <div style={{ borderBottom: '1px solid #EAEAF2', paddingBottom: '16px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14.5px', marginBottom: '10px' }}>
          <span style={{ color: '#000045', fontWeight: 500 }}>{planInfo.title}</span>
          <span style={{ color: '#000045', fontWeight: 600 }}>${planInfo.subtotal.toFixed(2)}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
          <span style={{ color: '#059669', fontWeight: 500 }}>$40 off 1st month</span>
          <span style={{ color: '#059669', fontWeight: 600 }}>-${planInfo.discount.toFixed(2)}</span>
        </div>

        <div style={{ fontSize: '12px', color: '#848494', marginBottom: '16px' }}>
          Next invoice Jan 12, 2027, for ${planInfo.subtotal.toFixed(2)}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px dashed #EAEAF2' }}>
          <span style={{ fontSize: '16px', fontWeight: 700, color: '#000045' }}>Total (USD)</span>
          <span style={{ fontSize: '20px', fontWeight: 800, color: '#000045' }}>${planInfo.total.toFixed(2)}</span>
        </div>
      </div>

      {/* Referral Code Section */}
      <div style={{ marginBottom: '28px' }}>
        <label style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: '#000045', marginBottom: '8px' }}>
          Referral code
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="Enter code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            style={{
              flex: 1,
              height: '48px',
              borderRadius: '16px',
              border: '1.5px solid #D5D6E0',
              padding: '0 16px',
              fontSize: '14.5px',
              color: '#000045',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
          <button
            type="button"
            onClick={handleApplyPromo}
            style={{
              padding: '0 24px',
              height: '48px',
              borderRadius: '16px',
              border: 'none',
              backgroundColor: '#EAEAF2',
              color: '#000045',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {promoApplied ? 'Applied' : 'Apply'}
          </button>
        </div>
      </div>

      {/* Payment Details Form */}
      <form onSubmit={handlePay} style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
        {/* Card Number */}
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#606069', marginBottom: '4px' }}>
            Card number
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 1234 1234 1234"
              style={{
                width: '100%',
                height: '52px',
                borderRadius: '16px',
                border: '1.5px solid #D5D6E0',
                padding: '0 48px 0 16px',
                fontSize: '15px',
                color: '#000045',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            {/* Visa Icon Badge */}
            <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#1A1F71', color: '#FFF', fontSize: '10px', fontWeight: 900, fontStyle: 'italic', padding: '2px 6px', borderRadius: '4px' }}>
              VISA
            </div>
          </div>
        </div>

        {/* Exp Date & Security Code */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#606069', marginBottom: '4px' }}>
              Expiration date
            </label>
            <input
              type="text"
              value={expDate}
              onChange={(e) => setExpDate(e.target.value)}
              placeholder="MM / YY"
              style={{
                width: '100%',
                height: '52px',
                borderRadius: '16px',
                border: '1.5px solid #D5D6E0',
                padding: '0 16px',
                fontSize: '15px',
                color: '#000045',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#606069', marginBottom: '4px' }}>
              Security code
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="CVC"
                style={{
                  width: '100%',
                  height: '52px',
                  borderRadius: '16px',
                  border: '1.5px solid #D5D6E0',
                  padding: '0 40px 0 16px',
                  fontSize: '15px',
                  color: '#000045',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#848494' }}>
                <CreditCard size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Country */}
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#606069', marginBottom: '4px' }}>
            Country
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={{
                width: '100%',
                height: '52px',
                borderRadius: '16px',
                border: '1.5px solid #D5D6E0',
                padding: '0 40px 0 16px',
                fontSize: '15px',
                color: '#000045',
                backgroundColor: '#FFFFFF',
                appearance: 'none',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="United States">United States</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
            <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#606069' }}>
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Legal notice */}
        <p style={{ fontSize: '12px', color: '#848494', lineHeight: '1.45', margin: '4px 0 14px 0' }}>
          By subscribing, you authorize Mochi Health Corp. to charge you according to the terms until you cancel.
        </p>

        {/* Confirm and Pay CTA */}
        <button
          type="submit"
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
          Confirm and pay
        </button>
      </form>
    </div>
  );
}
