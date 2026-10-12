import React, { useState } from 'react';
import { 
  Building2, 
  Smartphone, 
  Monitor, 
  CheckCheck, 
  ArrowLeft, 
  Scale, 
  ShieldAlert, 
  Sparkles, 
  Check, 
  ChevronRight,
  TrendingUp,
  FileSpreadsheet,
  Target
} from 'lucide-react';

const COMPETITOR_SCREENS = [
  { key: '1', label: 'Screen 1: Competitor Onboarding & Motivation' },
  { key: '2', label: 'Screen 2: Weight & Health Milestones' },
  { key: '3', label: 'Screen 3: Treatment Route Preference' },
  { key: '4', label: 'Screen 4: Competitor Pricing & Commitment' },
  { key: '5', label: 'Screen 5: Head-to-Head UX Comparison Analysis' }
];

export default function CompetitorFlow({ onBackToWelcome }) {
  const [currentScreen, setCurrentScreen] = useState('1');
  const [isMobileFrame, setIsMobileFrame] = useState(false);
  const [formData, setFormData] = useState({
    motivation: 'lose-30-plus',
    currentWeight: '195',
    goalWeight: '155',
    treatmentType: 'weekly-injection',
    planType: 'membership-plus-rx',
    experienceRating: 'fast-onboarding'
  });
  const [autofillKey, setAutofillKey] = useState(0);

  const handleAutofill = () => {
    setFormData({
      motivation: 'lose-30-plus',
      currentWeight: '195',
      goalWeight: '155',
      treatmentType: 'weekly-injection',
      planType: 'membership-plus-rx',
      experienceRating: 'fast-onboarding'
    });
    setAutofillKey(prev => prev + 1);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case '1':
        return (
          <div className="content-inner fade-in">
            <div style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '12px', background: '#F0F4FF', color: '#1E40AF', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '14px' }}>
              COMPETITOR BENCHMARK · STEP 1 OF 5
            </div>
            <div className="heading-section">
              <h1 className="page-title" style={{ fontSize: '26px' }}>What brings you to our program today?</h1>
              <p className="page-subtitle">
                Select your primary goal to help customize your clinical medical weight-loss trajectory.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {[
                { id: 'lose-15-30', title: 'Lose 15–30 lbs', desc: 'Jumpstart healthier habits with metabolic treatment support' },
                { id: 'lose-30-plus', title: 'Lose 30+ lbs', desc: 'Comprehensive medical titration for significant long-term transformation' },
                { id: 'maintain', title: 'Maintain previous GLP-1 weight loss', desc: 'Transition plan for patients switching from another clinic or telehealth provider' },
                { id: 'energy-health', title: 'Improve metabolic lab markers', desc: 'Focus on blood sugar stability, cholesterol, and cardiovascular vitality' },
              ].map(opt => {
                const isSelected = formData.motivation === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setFormData({ ...formData, motivation: opt.id })}
                    style={{
                      padding: '16px 18px',
                      borderRadius: '16px',
                      border: isSelected ? '2px solid #2563EB' : '1px solid #E2E8F0',
                      background: isSelected ? '#EFF6FF' : '#FFFFFF',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: isSelected ? '2px solid #2563EB' : '2px solid #CBD5E1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#FFF'
                    }}>
                      {isSelected && <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2563EB' }} />}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '15px', color: '#0F172A' }}>{opt.title}</div>
                      <div style={{ fontSize: '13px', color: '#64748B', marginTop: '2px' }}>{opt.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              className="cta-button-pill active"
              onClick={() => setCurrentScreen('2')}
              style={{ background: '#0F172A', color: '#FFF' }}
            >
              <span>Next Question</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        );

      case '2':
        return (
          <div className="content-inner fade-in">
            <div style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '12px', background: '#F0F4FF', color: '#1E40AF', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '14px' }}>
              COMPETITOR BENCHMARK · STEP 2 OF 5
            </div>
            <div className="heading-section">
              <h1 className="page-title" style={{ fontSize: '26px' }}>Your starting point & target</h1>
              <p className="page-subtitle">
                Most competitor flows ask for basic numbers before providing an estimated loss graph.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
              <div>
                <label className="field-top-label">Current Weight (lbs)</label>
                <input
                  type="number"
                  className="input-capsule"
                  value={formData.currentWeight}
                  onChange={(e) => setFormData({ ...formData, currentWeight: e.target.value })}
                />
              </div>
              <div>
                <label className="field-top-label">Goal Weight (lbs)</label>
                <input
                  type="number"
                  className="input-capsule"
                  value={formData.goalWeight}
                  onChange={(e) => setFormData({ ...formData, goalWeight: e.target.value })}
                />
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>
                <TrendingUp size={16} color="#2563EB" /> Target: {Number(formData.currentWeight) - Number(formData.goalWeight)} lbs reduction
              </div>
              <div style={{ fontSize: '13px', color: '#64748B' }}>
                Estimated timeframe: 16–24 weeks with GLP-1 therapy titration and diet support.
              </div>
            </div>

            <button
              type="button"
              className="cta-button-pill active"
              onClick={() => setCurrentScreen('3')}
              style={{ background: '#0F172A', color: '#FFF' }}
            >
              <span>Continue</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        );

      case '3':
        return (
          <div className="content-inner fade-in">
            <div style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '12px', background: '#F0F4FF', color: '#1E40AF', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '14px' }}>
              COMPETITOR BENCHMARK · STEP 3 OF 5
            </div>
            <div className="heading-section">
              <h1 className="page-title" style={{ fontSize: '26px' }}>Preferred administration method</h1>
              <p className="page-subtitle">
                Competitors often bifurcate early between subcutaneous injections and sublingual/oral tablets.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {[
                { id: 'weekly-injection', title: 'Once-Weekly Subcutaneous Injection', desc: 'Highest clinical efficacy in trials (Semaglutide / Tirzepatide)' },
                { id: 'daily-oral', title: 'Daily Sublingual Drops / Chewables', desc: 'Needle-free alternatives for patients seeking needleless options' },
                { id: 'doctor-decide', title: 'Let Clinical Provider Recommend', desc: 'Physician decides after telehealth medical intake review' }
              ].map(item => {
                const isSelected = formData.treatmentType === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setFormData({ ...formData, treatmentType: item.id })}
                    style={{
                      padding: '16px 18px',
                      borderRadius: '16px',
                      border: isSelected ? '2px solid #2563EB' : '1px solid #E2E8F0',
                      background: isSelected ? '#EFF6FF' : '#FFFFFF',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px'
                    }}
                  >
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: isSelected ? '2px solid #2563EB' : '2px solid #CBD5E1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#FFF'
                    }}>
                      {isSelected && <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2563EB' }} />}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '15px', color: '#0F172A' }}>{item.title}</div>
                      <div style={{ fontSize: '13px', color: '#64748B', marginTop: '2px' }}>{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              className="cta-button-pill active"
              onClick={() => setCurrentScreen('4')}
              style={{ background: '#0F172A', color: '#FFF' }}
            >
              <span>View Competitor Pricing Screen</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        );

      case '4':
        return (
          <div className="content-inner fade-in">
            <div style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '12px', background: '#F0F4FF', color: '#1E40AF', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '14px' }}>
              COMPETITOR BENCHMARK · STEP 4 OF 5
            </div>
            <div className="heading-section">
              <h1 className="page-title" style={{ fontSize: '26px' }}>Membership & Treatment Pricing</h1>
              <p className="page-subtitle">
                Typical competitor billing structure uses recurring monthly platform subscriptions with medication add-ons.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <div style={{ border: '2px solid #2563EB', borderRadius: '16px', padding: '20px', background: '#F8FAFC' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 800, fontSize: '18px', color: '#0F172A' }}>Competitor Subscription</span>
                  <span style={{ fontWeight: 800, fontSize: '20px', color: '#2563EB' }}>$299<span style={{ fontSize: '13px', fontWeight: 500, color: '#64748B' }}>/mo</span></span>
                </div>
                <div style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.4' }}>
                  Includes provider portal, async messaging, initial lab order review, and prescription fulfillment.
                </div>
              </div>

              <div style={{ border: '1px solid #E2E8F0', borderRadius: '16px', padding: '20px', background: '#FFFFFF' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 800, fontSize: '18px', color: '#0F172A' }}>Ongo Flow Model (Comparison)</span>
                  <span style={{ fontWeight: 800, fontSize: '20px', color: '#1F4F3D' }}>$199<span style={{ fontSize: '13px', fontWeight: 500, color: '#64748B' }}>/mo</span></span>
                </div>
                <div style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.4' }}>
                  Ongo's bundled transparent pricing with 3-month commitment, free consultation, and zero hidden shipping charges.
                </div>
              </div>
            </div>

            <button
              type="button"
              className="cta-button-pill active"
              onClick={() => setCurrentScreen('5')}
              style={{ background: '#0F172A', color: '#FFF' }}
            >
              <span>See UX Comparison Matrix</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        );

      case '5':
      default:
        return (
          <div className="content-inner fade-in">
            <div style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '12px', background: '#ECFDF5', color: '#065F46', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '14px' }}>
              STUDY & ANALYSIS MATRIX
            </div>
            <div className="heading-section">
              <h1 className="page-title" style={{ fontSize: '26px' }}>Ongo vs Competitor Analysis</h1>
              <p className="page-subtitle">
                Side-by-side study comparing conversion friction, medical safety gates, and user trust.
              </p>
            </div>

            <div style={{ background: '#FFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', marginBottom: '24px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px' }}>
                <thead>
                  <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', textAlign: 'left' }}>
                    <th style={{ padding: '12px 14px', fontWeight: 700 }}>Feature</th>
                    <th style={{ padding: '12px 14px', fontWeight: 700, color: '#1F4F3D' }}>Ongo Flow</th>
                    <th style={{ padding: '12px 14px', fontWeight: 700, color: '#2563EB' }}>Competitor Flow</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '12px 14px', fontWeight: 600 }}>Screen Count</td>
                    <td style={{ padding: '12px 14px', color: '#1F4F3D' }}>25 Focused Steps</td>
                    <td style={{ padding: '12px 14px', color: '#64748B' }}>5–8 Generic Steps</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '12px 14px', fontWeight: 600 }}>Doctor Match</td>
                    <td style={{ padding: '12px 14px', color: '#1F4F3D' }}>State-Licensed MD Profile</td>
                    <td style={{ padding: '12px 14px', color: '#64748B' }}>Anonymous Clinical Team</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '12px 14px', fontWeight: 600 }}>Pre-Auth / Safety</td>
                    <td style={{ padding: '12px 14px', color: '#1F4F3D' }}>Deep Clinical Intake (13 Steps)</td>
                    <td style={{ padding: '12px 14px', color: '#64748B' }}>Shallow 3-Question Screener</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '12px 14px', fontWeight: 600 }}>Live Booking</td>
                    <td style={{ padding: '12px 14px', color: '#1F4F3D' }}>Calendar & Time Slots</td>
                    <td style={{ padding: '12px 14px', color: '#64748B' }}>Async Messaging Waitlist</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                className="cta-button-pill active"
                onClick={onBackToWelcome}
                style={{ background: '#0F172A', color: '#FFF', flex: 1 }}
              >
                <span>Switch to Ongo Project</span>
                <span className="cta-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app-viewport">
      <aside className="top-dev-toolbar" aria-label="Competitor flow controls" style={{ borderBottom: '2px solid #2563EB' }}>
        <div className="toolbar-brand" style={{ cursor: onBackToWelcome ? 'pointer' : 'default' }} onClick={onBackToWelcome}>
          {onBackToWelcome && (
            <button 
              type="button" 
              className="toolbar-btn" 
              onClick={onBackToWelcome}
              title="Return to Select Project welcome screen"
              style={{ marginRight: '6px', padding: '4px 8px' }}
            >
              <ArrowLeft size={13} />
              <span>Projects</span>
            </button>
          )}
          <Building2 size={16} color="#2563EB" />
          <span>Competitor Survey Study</span>
        </div>

        <div className="toolbar-controls">
          <select 
            className="screen-select-dropdown" 
            value={currentScreen} 
            onChange={(e) => setCurrentScreen(e.target.value)} 
            aria-label="Select competitor survey screen"
          >
            {COMPETITOR_SCREENS.map((s) => (
              <option key={s.key} value={s.key}>{s.label}</option>
            ))}
          </select>

          <button type="button" className="toolbar-btn" onClick={handleAutofill} title="Auto-fill sample competitor responses">
            <CheckCheck size={13} />
            <span>Autofill Demo</span>
          </button>

          <button type="button" className={`toolbar-btn ${isMobileFrame ? 'active' : ''}`} onClick={() => setIsMobileFrame(!isMobileFrame)}>
            {isMobileFrame ? <Monitor size={13} /> : <Smartphone size={13} />}
            <span>{isMobileFrame ? 'Desktop (540px)' : 'Mobile Frame'}</span>
          </button>
        </div>
      </aside>

      <main className={`onboarding-shell ${isMobileFrame ? 'device-frame-mobile' : ''}`}>
        <div style={{ 
          background: '#0F172A', 
          color: '#FFF', 
          padding: '16px 20px', 
          borderTopLeftRadius: '24px', 
          borderTopRightRadius: '24px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Building2 size={18} color="#60A5FA" />
            <span style={{ fontWeight: 800, fontSize: '15px', letterSpacing: '-0.01em' }}>Telehealth GLP-1 Competitor Survey</span>
          </div>
          <span style={{ fontSize: '11px', background: '#1E293B', padding: '3px 8px', borderRadius: '8px', color: '#94A3B8' }}>Study Mode</span>
        </div>

        <div className="main-card-body" key={autofillKey} style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
          {renderScreen()}
        </div>
      </main>
    </div>
  );
}
