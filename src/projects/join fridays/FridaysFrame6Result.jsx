import React from 'react';
import { CheckCircle2, TrendingDown, ShieldCheck, Sparkles } from 'lucide-react';

export default function FridaysFrame6Result({
  bmiScore = '47.4',
  projectedWeightLoss = '60'
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
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#E6F4EA',
        color: '#137333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px'
      }}>
        <CheckCircle2 size={32} />
      </div>

      <h1 style={{
        fontSize: '24px',
        fontWeight: 700,
        color: '#363F33',
        margin: '0 0 8px',
        textAlign: 'center'
      }}>
        Great news! You qualify for GLP-1 therapy
      </h1>
      <p style={{
        fontSize: '14px',
        color: '#6B7280',
        margin: '0 0 32px',
        textAlign: 'center',
        lineHeight: '1.5'
      }}>
        Based on your BMI of {bmiScore} and completed health checks, you are a strong candidate for personalized prescription medication.
      </p>

      {/* Projection Card */}
      <div style={{
        width: '100%',
        borderRadius: '16px',
        background: '#FAFBF9',
        border: '1px solid #E5E7EB',
        padding: '28px',
        marginBottom: '24px',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Sparkles size={18} color="#435741" />
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#435741', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Clinical Projection
          </span>
        </div>

        <div style={{ fontSize: '28px', fontWeight: 800, color: '#1F2937', marginBottom: '6px' }}>
          Up to {projectedWeightLoss} lbs weight reduction
        </div>
        <p style={{ fontSize: '13.5px', color: '#4B5563', lineHeight: '1.5', margin: 0 }}>
          Patients on Fridays clinical protocols lose an average of 15%–20% of their total body weight within the first 6–9 months.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6B7280', fontSize: '12.5px' }}>
        <ShieldCheck size={16} color="#137333" />
        <span>100% online doctor visit included • Cold-chain home delivery</span>
      </div>
    </div>
  );
}
