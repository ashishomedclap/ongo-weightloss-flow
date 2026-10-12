import React, { useState } from 'react';
import MochiScreen0 from './MochiScreen0';
import { 
  ArrowLeft, 
  Monitor, 
  Smartphone, 
  CheckCheck, 
  Bug, 
  ChevronRight,
  TrendingDown,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';

const MOCHI_SCREENS = [
  { key: '0', label: 'Step 0: Primary Weight Loss Goal (Live Match)' },
  { key: '1', label: 'Step 1: Gender Assigned at Birth' },
  { key: '2', label: 'Step 2: Height & Weight (BMI Calculation)' },
  { key: '3', label: 'Step 3: GLP-1 Medication History' },
  { key: '4', label: 'Step 4: Clinical Eligibility & Care Plan' }
];

export default function CompetitorFlow({ onBackToWelcome }) {
  const [currentStep, setCurrentStep] = useState('0');
  const [isMobileFrame, setIsMobileFrame] = useState(false);
  const [language, setLanguage] = useState('en');

  // Form State
  const [formData, setFormData] = useState({
    goal: '50-plus', // Pre-selected matching screenshot: "Lose 50+ lbs"
    gender: 'female',
    heightFt: '5',
    heightIn: '6',
    weightLbs: '215',
    goalLbs: '155',
    glp1History: 'first-time'
  });

  const [autofillKey, setAutofillKey] = useState(0);

  const handleAutofill = () => {
    setFormData({
      goal: '50-plus',
      gender: 'female',
      heightFt: '5',
      heightIn: '6',
      weightLbs: '215',
      goalLbs: '155',
      glp1History: 'semaglutide'
    });
    setAutofillKey(prev => prev + 1);
  };

  const getProgressPercentage = () => {
    switch (currentStep) {
      case '0': return 12;
      case '1': return 32;
      case '2': return 54;
      case '3': return 76;
      case '4': return 100;
      default: return 12;
    }
  };

  const renderContent = () => {
    switch (currentStep) {
      case '0':
        return (
          <MochiScreen0
            selectedGoal={formData.goal}
            onSelectGoal={(goalId) => setFormData(prev => ({ ...prev, goal: goalId }))}
            onNext={() => setCurrentStep('1')}
            language={language}
            onToggleLanguage={() => setLanguage(l => l === 'en' ? 'es' : 'en')}
          />
        );

      case '1':
        return (
          <div style={{
            fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
            color: '#000045',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '560px',
            margin: '0 auto',
            padding: '40px 20px 60px'
          }}>
            <div style={{ width: '100%', textAlign: 'left', marginBottom: '32px' }}>
              <h1 style={{ fontSize: '28px', fontWeight: 600, color: '#000045', margin: '0 0 8px', letterSpacing: '-0.015em' }}>
                What was your sex assigned at birth?
              </h1>
              <p style={{ fontSize: '15px', color: '#606069', margin: 0 }}>
                This is required for calculating accurate body metabolic indexes and medication dosing guidelines.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', marginBottom: '32px' }}>
              {[
                { id: 'female', label: 'Female' },
                { id: 'male', label: 'Male' }
              ].map(opt => {
                const isSelected = formData.gender === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, gender: opt.id }));
                      setTimeout(() => setCurrentStep('2'), 200);
                    }}
                    style={{
                      width: '100%',
                      minHeight: '58px',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: isSelected ? '1.8px solid #000045' : '1px solid #D5D6E0',
                      background: '#FFFFFF',
                      color: '#000045',
                      fontSize: '15px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setCurrentStep('0')}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#606069',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              ← Back to previous question
            </button>
          </div>
        );

      case '2':
        return (
          <div style={{
            fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
            color: '#000045',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '560px',
            margin: '0 auto',
            padding: '40px 20px 60px'
          }}>
            <div style={{ width: '100%', textAlign: 'left', marginBottom: '32px' }}>
              <h1 style={{ fontSize: '28px', fontWeight: 600, color: '#000045', margin: '0 0 8px', letterSpacing: '-0.015em' }}>
                What are your measurements?
              </h1>
              <p style={{ fontSize: '15px', color: '#606069', margin: 0 }}>
                Used by our licensed clinical team to calculate your Body Mass Index (BMI).
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', width: '100%', marginBottom: '20px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#000045', display: 'block', marginBottom: '6px' }}>Height</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="number"
                    value={formData.heightFt}
                    onChange={(e) => setFormData({ ...formData, heightFt: e.target.value })}
                    style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #D5D6E0', fontSize: '15px', color: '#000045', outline: 'none' }}
                    placeholder="Ft"
                  />
                  <input
                    type="number"
                    value={formData.heightIn}
                    onChange={(e) => setFormData({ ...formData, heightIn: e.target.value })}
                    style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #D5D6E0', fontSize: '15px', color: '#000045', outline: 'none' }}
                    placeholder="In"
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#000045', display: 'block', marginBottom: '6px' }}>Current Weight (lbs)</label>
                <input
                  type="number"
                  value={formData.weightLbs}
                  onChange={(e) => setFormData({ ...formData, weightLbs: e.target.value })}
                  style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #D5D6E0', fontSize: '15px', color: '#000045', outline: 'none' }}
                />
              </div>
            </div>

            <div style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', background: '#F4F4FA', border: '1px solid #E2E2EA', marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#000045' }}>Estimated BMI</span>
                <span style={{ fontSize: '18px', fontWeight: 700, color: '#000045' }}>34.7 · Eligible for GLP-1</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCurrentStep('3')}
              style={{
                width: '100%',
                height: '54px',
                borderRadius: '12px',
                background: '#000045',
                color: '#FFF',
                border: 'none',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                marginBottom: '16px'
              }}
            >
              Continue
            </button>

            <button
              type="button"
              onClick={() => setCurrentStep('1')}
              style={{ background: 'transparent', border: 'none', color: '#606069', fontSize: '14px', cursor: 'pointer' }}
            >
              ← Back
            </button>
          </div>
        );

      case '3':
        return (
          <div style={{
            fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
            color: '#000045',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '560px',
            margin: '0 auto',
            padding: '40px 20px 60px'
          }}>
            <div style={{ width: '100%', textAlign: 'left', marginBottom: '32px' }}>
              <h1 style={{ fontSize: '28px', fontWeight: 600, color: '#000045', margin: '0 0 8px', letterSpacing: '-0.015em' }}>
                Have you taken GLP-1 medications in the past 12 months?
              </h1>
              <p style={{ fontSize: '15px', color: '#606069', margin: 0 }}>
                This informs whether our medical team titrates or keeps your existing dosage.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', marginBottom: '32px' }}>
              {[
                { id: 'first-time', label: 'No, this would be my first time' },
                { id: 'semaglutide', label: 'Yes, Semaglutide (Ozempic / Wegovy)' },
                { id: 'tirzepatide', label: 'Yes, Tirzepatide (Mounjaro / Zepbound)' },
                { id: 'other', label: 'Yes, another weight loss prescription' }
              ].map(opt => {
                const isSelected = formData.glp1History === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, glp1History: opt.id }));
                      setTimeout(() => setCurrentStep('4'), 200);
                    }}
                    style={{
                      width: '100%',
                      minHeight: '58px',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: isSelected ? '1.8px solid #000045' : '1px solid #D5D6E0',
                      background: '#FFFFFF',
                      color: '#000045',
                      fontSize: '15px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setCurrentStep('2')}
              style={{ background: 'transparent', border: 'none', color: '#606069', fontSize: '14px', cursor: 'pointer' }}
            >
              ← Back
            </button>
          </div>
        );

      case '4':
      default:
        return (
          <div style={{
            fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
            color: '#000045',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '560px',
            margin: '0 auto',
            padding: '40px 20px 60px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#00B67A',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <ShieldCheck size={28} />
            </div>

            <div style={{ width: '100%', textAlign: 'center', marginBottom: '28px' }}>
              <h1 style={{ fontSize: '26px', fontWeight: 600, color: '#000045', margin: '0 0 8px' }}>
                You are clinically eligible for Mochi Health
              </h1>
              <p style={{ fontSize: '15px', color: '#606069', margin: 0 }}>
                Based on your goal to lose 50+ lbs and your health inputs, you qualify for physician-managed GLP-1 care.
              </p>
            </div>

            {/* Pricing Card */}
            <div style={{
              width: '100%',
              borderRadius: '16px',
              border: '1.5px solid #000045',
              padding: '24px',
              background: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(0,0,69,0.06)',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                <span style={{ fontSize: '18px', fontWeight: 700, color: '#000045' }}>Mochi Membership</span>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#000045' }}>$79<span style={{ fontSize: '14px', fontWeight: 500, color: '#606069' }}>/month</span></span>
              </div>
              <ul style={{ margin: '0 0 20px', paddingLeft: '20px', color: '#404050', fontSize: '14px', lineHeight: '1.7' }}>
                <li>Dedicated licensed physician & registered dietitian</li>
                <li>Unlimited telehealth follow-ups & medical advice</li>
                <li>Prescription coordination for Semaglutide ($99/mo) or Tirzepatide ($199/mo)</li>
                <li>No lock-in contracts; cancel anytime</li>
              </ul>
              
              <button
                type="button"
                onClick={() => alert("Mochi Competitor Flow Demo Completed!")}
                style={{
                  width: '100%',
                  height: '52px',
                  borderRadius: '12px',
                  background: '#000045',
                  color: '#FFF',
                  border: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Proceed to Provider Selection
              </button>
            </div>

            <button
              type="button"
              onClick={() => setCurrentStep('0')}
              style={{ background: 'transparent', border: 'none', color: '#606069', fontSize: '14px', cursor: 'pointer' }}
            >
              Restart Mochi Survey
            </button>
          </div>
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', position: 'relative' }}>
      
      {/* Dev Study Bar */}
      <aside className="top-dev-toolbar" aria-label="Join Mochi flow controls" style={{ borderBottom: '2px solid #000045' }}>
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
          <span style={{ fontWeight: 800, color: '#000045' }}>Join Mochi</span>
          <span style={{ fontSize: '11px', background: '#EAEAF2', color: '#000045', padding: '2px 6px', borderRadius: '6px', fontWeight: 600 }}>
            Competitor Flow
          </span>
        </div>

        <div className="toolbar-controls">
          <select 
            className="screen-select-dropdown" 
            value={currentStep} 
            onChange={(e) => setCurrentStep(e.target.value)} 
            aria-label="Select Mochi survey screen"
            style={{ maxWidth: '340px' }}
          >
            {MOCHI_SCREENS.map((s) => (
              <option key={s.key} value={s.key}>{s.label}</option>
            ))}
          </select>

          <button type="button" className="toolbar-btn" onClick={handleAutofill} title="Autofill Mochi flow demo data">
            <CheckCheck size={13} />
            <span>Autofill Demo</span>
          </button>

          <button type="button" className={`toolbar-btn ${isMobileFrame ? 'active' : ''}`} onClick={() => setIsMobileFrame(!isMobileFrame)}>
            {isMobileFrame ? <Monitor size={13} /> : <Smartphone size={13} />}
            <span>{isMobileFrame ? 'Desktop (Full)' : 'Mobile Frame'}</span>
          </button>
        </div>
      </aside>

      {/* Floating Right Report Badge (Matches Join Mochi live site) */}
      <div 
        title="Report an issue or feedback"
        style={{
          position: 'fixed',
          right: 0,
          top: '52%',
          transform: 'translateY(-50%)',
          backgroundColor: '#000045',
          color: '#FFFFFF',
          padding: '10px 7px',
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          zIndex: 9998,
          boxShadow: '0 2px 12px rgba(0,0,69,0.25)'
        }}
        onClick={() => alert("Join Mochi Bug/Feedback Reporter")}
      >
        <span style={{ 
          writingMode: 'vertical-rl', 
          transform: 'rotate(180deg)', 
          fontSize: '11px', 
          fontWeight: 600, 
          letterSpacing: '0.05em' 
        }}>
          Report
        </span>
        <Bug size={14} style={{ transform: 'rotate(90deg)' }} />
      </div>

      {/* Mochi Shell */}
      <div style={{
        maxWidth: isMobileFrame ? '420px' : '100%',
        margin: isMobileFrame ? '24px auto' : '0 auto',
        border: isMobileFrame ? '1px solid #E2E2EA' : 'none',
        borderRadius: isMobileFrame ? '24px' : '0',
        overflow: 'hidden',
        boxShadow: isMobileFrame ? '0 12px 32px rgba(0,0,69,0.08)' : 'none',
        minHeight: isMobileFrame ? '720px' : 'auto'
      }}>
        {/* Top Header with Progress Bar and Mochi Logo */}
        <header style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 32px 12px',
          maxWidth: '960px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {/* Centered / Left Progress Bar */}
          <div style={{
            flex: '0 1 360px',
            height: '5px',
            backgroundColor: '#EAEAF2',
            borderRadius: '999px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${getProgressPercentage()}%`,
              height: '100%',
              backgroundColor: '#000045',
              borderRadius: '999px',
              transition: 'width 0.3s ease'
            }} />
          </div>

          {/* Mochi Health Brand Logo */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#000045',
            userSelect: 'none'
          }}>
            <span style={{
              fontSize: '22px',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: '1',
              fontFamily: "'Instrument Sans', sans-serif"
            }}>
              mochi
            </span>
            <span style={{
              fontSize: '7px',
              fontWeight: 700,
              letterSpacing: '0.22em',
              marginTop: '2px',
              color: '#000045',
              textTransform: 'uppercase'
            }}>
              HEALTH
            </span>
          </div>
        </header>

        {/* Content Body */}
        <main key={autofillKey}>
          {renderContent()}
        </main>
      </div>

    </div>
  );
}
