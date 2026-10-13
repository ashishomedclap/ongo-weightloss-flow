import React from 'react';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';

export default function FridaysFrame10Checkout({
  plan = 'multi-month',
  cardName = 'Sarah Miller',
  cardNumber = '•••• •••• •••• 4242',
  cardExp = '08/28',
  cardCvc = '•••',
  onChangeField
}) {
  const isMultiMonth = plan === 'multi-month';
  const total = isMultiMonth ? '$149.00' : '$199.00';

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
        Review and confirm your care plan
      </h1>
      <p style={{
        fontSize: '14px',
        color: '#6B7280',
        margin: '0 0 32px',
        textAlign: 'center'
      }}>
        Zero risk: You are never charged if our medical team determines you are clinically ineligible.
      </p>

      {/* Order Summary */}
      <div style={{
        width: '100%',
        borderRadius: '16px',
        background: '#FAFBF9',
        border: '1px solid #E5E7EB',
        padding: '24px',
        marginBottom: '28px',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
          <span style={{ color: '#4B5563' }}>Clinical Protocol</span>
          <span style={{ fontWeight: 600, color: '#1F2937' }}>
            {isMultiMonth ? '3-Month Commitment' : 'Monthly RX Refill'}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
          <span style={{ color: '#4B5563' }}>Physician Telehealth Visit</span>
          <span style={{ fontWeight: 600, color: '#137333' }}>Included</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '14px' }}>
          <span style={{ color: '#4B5563' }}>Cold-Chain Express Shipping</span>
          <span style={{ fontWeight: 600, color: '#137333' }}>FREE</span>
        </div>
        <div style={{ height: '1px', background: '#E5E7EB', margin: '14px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '16px', fontWeight: 700, color: '#1F2937' }}>Due Today</span>
          <span style={{ fontSize: '24px', fontWeight: 800, color: '#363F33' }}>{total}</span>
        </div>
      </div>

      {/* Payment Inputs */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
        <div>
          <label style={{ fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px' }}>
            Name on card
          </label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => onChangeField && onChangeField('cardName', e.target.value)}
            style={{
              width: '100%',
              height: '48px',
              padding: '0 14px',
              borderRadius: '8px',
              border: '1px solid #D1D5DB',
              fontSize: '14px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px' }}>
            Card number
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => onChangeField && onChangeField('cardNumber', e.target.value)}
              style={{
                width: '100%',
                height: '48px',
                padding: '0 40px 0 14px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }}>
              <CreditCard size={18} />
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px' }}>
              Expires (MM/YY)
            </label>
            <input
              type="text"
              value={cardExp}
              onChange={(e) => onChangeField && onChangeField('cardExp', e.target.value)}
              style={{
                width: '100%',
                height: '48px',
                padding: '0 14px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div>
            <label style={{ fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px' }}>
              CVC
            </label>
            <input
              type="text"
              value={cardCvc}
              onChange={(e) => onChangeField && onChangeField('cardCvc', e.target.value)}
              style={{
                width: '100%',
                height: '48px',
                padding: '0 14px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6B7280', fontSize: '12px' }}>
        <Lock size={14} color="#137333" />
        <span>256-bit encrypted SSL checkout • HIPAA compliant</span>
      </div>
    </div>
  );
}
