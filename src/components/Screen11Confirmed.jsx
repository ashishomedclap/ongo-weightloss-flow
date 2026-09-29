import React, { useEffect } from 'react';
import { Check, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Screen11Confirmed({ formData, onRestart, onNext }) {
  useEffect(() => {
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1F4F3D', '#2F8968', '#DDF2DF', '#FF7B60', '#F4E9C8']
      });
    } catch (e) {
      // gracefully handle
    }
  }, []);

  return (
    <div className="content-inner fade-in" style={{ textAlign: 'center', paddingBottom: '30px' }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: '#3A7D63',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 16px',
        boxShadow: '0 4px 12px rgba(58, 125, 99, 0.2)'
      }}>
        <Check size={28} strokeWidth={2.5} />
      </div>

      <div className="heading-section" style={{ marginBottom: '24px' }}>
        <h1 className="page-title" style={{ fontSize: '28px', color: '#000000', marginBottom: '12px' }}>You're all set.</h1>
        <p className="page-subtitle" style={{ fontSize: '15px', color: '#666', maxWidth: '440px', margin: '0 auto', lineHeight: '1.5' }}>
          Your payment is confirmed. Next, finish your clinical intake so your physician can review it before your visit.
        </p>
      </div>

      {/* Timeline Card */}
      <div className="white-elevated-card" style={{ margin: '0 0 16px', textAlign: 'left', padding: '24px 20px' }}>
        <div style={{ position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '30px', width: '2px', background: '#E8E8E8', zIndex: 0 }}></div>
          
          {/* Step 1 */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#3A7D63', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Check size={14} strokeWidth={3} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#000', marginBottom: '2px' }}>Payment</div>
              <div style={{ fontSize: '13.5px', color: '#666', lineHeight: '1.4' }}>Kickstart - $249</div>
              <div style={{ fontSize: '13.5px', color: '#999', lineHeight: '1.4' }}>Full refund if your provider determines you're not eligible.</div>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#3A7D63', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 700 }}>
              2
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#000', marginBottom: '2px' }}>Clinical intake</div>
              <div style={{ fontSize: '13.5px', color: '#666', lineHeight: '1.4' }}>Next. A short set of questions, including a photo ID.</div>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FFF', border: '2px solid #E8E8E8', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 700 }}>
              3
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '15px', color: '#000', marginBottom: '2px' }}>Consultation</div>
              <div style={{ fontSize: '13.5px', color: '#999', lineHeight: '1.4' }}>You'll pick a time after intake. Your physician calls you.</div>
            </div>
          </div>

          {/* Step 4 */}
          <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FFF', border: '2px solid #E8E8E8', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 700 }}>
              4
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '15px', color: '#000', marginBottom: '2px' }}>Medication ships</div>
              <div style={{ fontSize: '13.5px', color: '#999', lineHeight: '1.4' }}>Free, discreet delivery within 2-3 days of your prescription.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Before you continue Card */}
      <div className="white-elevated-card" style={{ margin: '0 0 24px', textAlign: 'left', padding: '24px 20px' }}>
        <div style={{ fontWeight: 700, fontSize: '15px', color: '#000', marginBottom: '16px' }}>Before you continue</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <Check size={18} color="#3A7D63" style={{ marginTop: '1px' }} />
            <span style={{ fontSize: '14.5px', color: '#4A4A4A' }}>Have a photo ID ready for the next step</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <Check size={18} color="#3A7D63" style={{ marginTop: '1px' }} />
            <span style={{ fontSize: '14.5px', color: '#4A4A4A' }}>Keep your current medications nearby</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <Check size={18} color="#3A7D63" style={{ marginTop: '1px' }} />
            <span style={{ fontSize: '14.5px', color: '#4A4A4A' }}>Set aside about 10 minutes to finish your intake</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="cta-button-pill active"
        onClick={onNext}
        style={{ background: '#111111', color: '#FFFFFF', border: 'none', height: '54px' }}
      >
        <span>Continue</span>
      </button>
    </div>
  );
}
