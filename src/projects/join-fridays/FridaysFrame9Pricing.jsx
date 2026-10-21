import React from 'react';

export default function FridaysFrame9Pricing({
  selectedPlan = 'multi-month',
  onSelectPlan
}) {
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
        Lock in your price, forever
      </h1>
      <p style={{
        fontSize: '14px',
        color: '#6B7280',
        margin: '0 0 32px',
        textAlign: 'center',
        lineHeight: '1.5'
      }}>
        Biology cannot be rushed. Real results take time. Longer plans mean lower prices, locked in for good. No renewal hikes.
      </p>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
        {/* Multi-month plan */}
        <div
          onClick={() => onSelectPlan && onSelectPlan('multi-month')}
          style={{
            borderRadius: '16px',
            border: selectedPlan === 'multi-month' ? '2.5px solid #363F33' : '1px solid #E5E7EB',
            background: selectedPlan === 'multi-month' ? '#FAFBF9' : '#FFFFFF',
            padding: '24px',
            cursor: 'pointer',
            position: 'relative',
            boxShadow: selectedPlan === 'multi-month' ? '0 4px 16px rgba(54, 63, 51, 0.08)' : 'none'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-12px',
            right: '20px',
            background: '#363F33',
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: 700,
            padding: '3px 12px',
            borderRadius: '12px',
            letterSpacing: '0.02em'
          }}>
            RECOMMENDED BY PHYSICIANS
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#1F2937' }}>
                3-Month Results Commitment
              </div>
              <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>
                Full acclimation + metabolic titration schedule
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '26px', fontWeight: 800, color: '#363F33' }}>
                $149<span style={{ fontSize: '14px', color: '#6B7280', fontWeight: 500 }}>/mo</span>
              </div>
              <div style={{ fontSize: '11.5px', color: '#137333', fontWeight: 700 }}>
                Save $150 total
              </div>
            </div>
          </div>
        </div>

        {/* Monthly plan */}
        <div
          onClick={() => onSelectPlan && onSelectPlan('monthly')}
          style={{
            borderRadius: '16px',
            border: selectedPlan === 'monthly' ? '2px solid #363F33' : '1px solid #E5E7EB',
            background: selectedPlan === 'monthly' ? '#FAFBF9' : '#FFFFFF',
            padding: '20px 24px',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#1F2937' }}>
                Flexible Monthly Plan
              </div>
              <div style={{ fontSize: '13px', color: '#6B7280' }}>
                Automate your refills, pause or cancel anytime
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#1F2937' }}>
                $199<span style={{ fontSize: '13px', color: '#6B7280', fontWeight: 500 }}>/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
