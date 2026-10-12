import React, { useState } from 'react';
import MochiScreen0, { mochiLogoImg, radioCheckedImg, radioUncheckedImg } from './MochiScreen0';
import { 
  ArrowLeft, 
  Monitor, 
  Smartphone, 
  CheckCheck, 
  ChevronLeft,
  ShieldCheck,
  Sliders,
  ChevronRight
} from 'lucide-react';

const MOCHI_SCREENS = [
  { key: '0', label: 'Step 0: Primary Weight Loss Goal (Exact Match)' },
  { key: '1', label: 'Step 1: Sex Assigned at Birth' },
  { key: '2', label: 'Step 2: Measurements & BMI' },
  { key: '3', label: 'Step 3: GLP-1 Medication History' },
  { key: '4', label: 'Step 4: Clinical Eligibility Result' }
];

export default function CompetitorFlow({ onBackToWelcome }) {
  const [currentStep, setCurrentStep] = useState('0');
  const [isMobileFrame, setIsMobileFrame] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showDevControls, setShowDevControls] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    goal: '50-plus', // Pre-selected matching screenshot ("Lose 50+ lbs")
    gender: 'female',
    heightFt: '5',
    heightIn: '6',
    weightLbs: '215',
    goalLbs: '155',
    glp1History: 'semaglutide'
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
      case '1': return 35;
      case '2': return 58;
      case '3': return 78;
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
            width: '100%',
            maxWidth: '560px',
            margin: '0 auto',
            padding: '40px 20px 60px',
            boxSizing: 'border-box',
            fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
            color: '#000045'
          }}>
            <div style={{ marginBottom: '32px', textAlign: 'left' }}>
              <h1 style={{ fontSize: '26px', fontWeight: 600, lineHeight: '1.28', color: '#000045', margin: '0 0 8px' }}>
                What was your sex assigned at birth?
              </h1>
              <p style={{ fontSize: '15px', color: '#606069', margin: 0, lineHeight: '1.45' }}>
                This is required for calculating accurate body metabolic indexes and medication dosing guidelines.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', marginBottom: '36px' }}>
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
                      minHeight: '60px',
                      width: '100%',
                      border: isSelected ? '1.5px solid #000045' : '1px solid #D5D6E0',
                      borderRadius: '12px',
                      padding: '16px 24px',
                      backgroundColor: '#FFFFFF',
                      color: '#000045',
                      fontSize: '15px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  >
                    <span>{opt.label}</span>
                    <img 
                      src={isSelected ? radioCheckedImg : radioUncheckedImg} 
                      alt={isSelected ? "Checked" : "Unchecked"}
                      style={{ width: '22px', height: '22px', objectFit: 'contain' }}
                    />
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => setCurrentStep('0')}
                style={{ background: 'none', border: 'none', color: '#606069', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                ← Back to previous question
              </button>
            </div>
          </div>
        );

      case '2':
        return (
          <div style={{
            width: '100%',
            maxWidth: '560px',
            margin: '0 auto',
            padding: '40px 20px 60px',
            boxSizing: 'border-box',
            fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
            color: '#000045'
          }}>
            <div style={{ marginBottom: '32px', textAlign: 'left' }}>
              <h1 style={{ fontSize: '26px', fontWeight: 600, lineHeight: '1.28', color: '#000045', margin: '0 0 8px' }}>
                What are your measurements?
              </h1>
              <p style={{ fontSize: '15px', color: '#606069', margin: 0, lineHeight: '1.45' }}>
                Used by our licensed clinical team to calculate your Body Mass Index (BMI).
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%', marginBottom: '24px' }}>
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

            <div style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', background: '#F4F4FA', border: '1px solid #E2E2EA', marginBottom: '28px', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#000045' }}>Calculated BMI</span>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#000045' }}>34.7 · Eligible for GLP-1 Care</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCurrentStep('3')}
              style={{
                width: '100%',
                height: '52px',
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

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => setCurrentStep('1')}
                style={{ background: 'none', border: 'none', color: '#606069', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                ← Back
              </button>
            </div>
          </div>
        );

      case '3':
        return (
          <div style={{
            width: '100%',
            maxWidth: '560px',
            margin: '0 auto',
            padding: '40px 20px 60px',
            boxSizing: 'border-box',
            fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
            color: '#000045'
          }}>
            <div style={{ marginBottom: '32px', textAlign: 'left' }}>
              <h1 style={{ fontSize: '26px', fontWeight: 600, lineHeight: '1.28', color: '#000045', margin: '0 0 8px' }}>
                Have you taken GLP-1 medications in the past 12 months?
              </h1>
              <p style={{ fontSize: '15px', color: '#606069', margin: 0, lineHeight: '1.45' }}>
                This informs whether our medical team titrates or maintains your active dosage.
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
                      minHeight: '60px',
                      width: '100%',
                      border: isSelected ? '1.5px solid #000045' : '1px solid #D5D6E0',
                      borderRadius: '12px',
                      padding: '16px 24px',
                      backgroundColor: '#FFFFFF',
                      color: '#000045',
                      fontSize: '15px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  >
                    <span>{opt.label}</span>
                    <img 
                      src={isSelected ? radioCheckedImg : radioUncheckedImg} 
                      alt={isSelected ? "Checked" : "Unchecked"}
                      style={{ width: '22px', height: '22px', objectFit: 'contain' }}
                    />
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => setCurrentStep('2')}
                style={{ background: 'none', border: 'none', color: '#606069', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                ← Back
              </button>
            </div>
          </div>
        );

      case '4':
      default:
        return (
          <div style={{
            width: '100%',
            maxWidth: '560px',
            margin: '0 auto',
            padding: '40px 20px 60px',
            boxSizing: 'border-box',
            fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
            color: '#000045'
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
              margin: '0 auto 20px'
            }}>
              <ShieldCheck size={28} />
            </div>

            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#000045', margin: '0 0 8px' }}>
                You are clinically eligible for Mochi Health
              </h1>
              <p style={{ fontSize: '15px', color: '#606069', margin: 0, lineHeight: '1.45' }}>
                Based on your goal to lose 50+ lbs and your health profile, you qualify for physician-guided GLP-1 care.
              </p>
            </div>

            <div style={{
              width: '100%',
              borderRadius: '16px',
              border: '1.5px solid #000045',
              padding: '24px',
              background: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(0,0,69,0.06)',
              marginBottom: '24px',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                <span style={{ fontSize: '18px', fontWeight: 700, color: '#000045' }}>Mochi Membership</span>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#000045' }}>$79<span style={{ fontSize: '14px', fontWeight: 500, color: '#606069' }}>/mo</span></span>
              </div>
              <ul style={{ margin: '0 0 20px', paddingLeft: '20px', color: '#404050', fontSize: '14px', lineHeight: '1.7' }}>
                <li>Dedicated physician & registered dietitian</li>
                <li>Unlimited medical follow-ups</li>
                <li>Prescription coordination for Semaglutide or Tirzepatide</li>
                <li>Cancel anytime</li>
              </ul>
              
              <button
                type="button"
                onClick={() => alert("Mochi Flow Demo Complete!")}
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

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => setCurrentStep('0')}
                style={{ background: 'none', border: 'none', color: '#606069', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Restart Survey
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', position: 'relative' }}>
      
      {/* Floating Demo Control Pill (Discreet, bottom-left, avoids breaking top bar layout) */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        {!showDevControls ? (
          <button
            type="button"
            onClick={() => setShowDevControls(true)}
            style={{
              background: '#000045',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '24px',
              padding: '8px 16px',
              fontSize: '12.5px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,69,0.25)'
            }}
            title="Open Flow Study & Demo Tools"
          >
            <Sliders size={14} />
            <span>Study Tools</span>
          </button>
        ) : (
          <div style={{
            background: 'rgba(0, 0, 69, 0.96)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '16px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 8px 32px rgba(0,0,69,0.3)',
            color: '#FFFFFF'
          }}>
            {onBackToWelcome && (
              <button
                type="button"
                onClick={onBackToWelcome}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  padding: '6px 10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <ArrowLeft size={13} />
                <span>Projects</span>
              </button>
            )}

            <select
              value={currentStep}
              onChange={(e) => setCurrentStep(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              {MOCHI_SCREENS.map((s) => (
                <option key={s.key} value={s.key} style={{ background: '#000045', color: '#FFF' }}>
                  {s.label}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={handleAutofill}
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <CheckCheck size={13} />
              <span>Autofill</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileFrame(!isMobileFrame)}
              style={{
                background: isMobileFrame ? '#2563EB' : 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              {isMobileFrame ? <Monitor size={13} /> : <Smartphone size={13} />}
              <span>{isMobileFrame ? 'Desktop' : 'Mobile'}</span>
            </button>

            <button
              type="button"
              onClick={() => setShowDevControls(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '16px',
                cursor: 'pointer',
                padding: '0 4px',
                lineHeight: 1
              }}
              title="Close Tools"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Floating Right Report Bug Tab (Matches Join Mochi live site) */}
      <div 
        title="Report an issue or feedback"
        style={{
          position: 'fixed',
          right: 0,
          top: '52%',
          transform: 'translateY(-50%)',
          backgroundColor: '#000045',
          color: '#FFFFFF',
          padding: '10px 6px',
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          zIndex: 9998,
          boxShadow: '0 2px 10px rgba(0,0,69,0.25)'
        }}
        onClick={() => alert("Join Mochi Bug Reporter")}
      >
        <span style={{ 
          writingMode: 'vertical-rl', 
          transform: 'rotate(180deg)', 
          fontSize: '11px', 
          fontWeight: 600, 
          letterSpacing: '0.04em' 
        }}>
          Report
        </span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(90deg)' }}>
          <path d="m8 2 1.88 1.88" />
          <path d="M14.12 3.88 16 2" />
          <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
          <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
          <path d="M12 20v-9" />
          <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
          <path d="M6 13H2" />
          <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
          <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
          <path d="M22 13h-4" />
          <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
        </svg>
      </div>

      {/* Mochi Viewport Shell */}
      <div style={{
        maxWidth: isMobileFrame ? '420px' : '100%',
        margin: isMobileFrame ? '24px auto' : '0 auto',
        border: isMobileFrame ? '1px solid #E2E2EA' : 'none',
        borderRadius: isMobileFrame ? '24px' : '0',
        overflow: 'hidden',
        boxShadow: isMobileFrame ? '0 12px 32px rgba(0,0,69,0.08)' : 'none',
        minHeight: isMobileFrame ? '740px' : 'auto',
        backgroundColor: '#FFFFFF'
      }}>
        
        {/* Exact Mochi Top Bar: Centered layout with progress bar and logo on the right */}
        <header style={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          paddingTop: '36px',
          paddingBottom: '20px',
          paddingLeft: '24px',
          paddingRight: '24px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            display: 'flex',
            width: '100%',
            maxWidth: '740px',
            margin: '0 auto',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px'
          }}>
            {/* Left Back Arrow or Balanced Invisible Spacer */}
            {currentStep !== '0' ? (
              <button
                type="button"
                onClick={() => setCurrentStep(String(Math.max(0, Number(currentStep) - 1)))}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#000045',
                  flexShrink: 0
                }}
                title="Previous step"
              >
                <ChevronLeft size={24} />
              </button>
            ) : (
              <div style={{ width: '24px', height: '24px', opacity: 0, flexShrink: 0 }} />
            )}

            {/* Center Progress Bar Line */}
            <div style={{
              flex: 1,
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

            {/* Right Mochi Official Brand SVG Logo */}
            <a 
              href="https://www.joinmochi.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ flexShrink: 0, display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              title="Join Mochi"
            >
              <img 
                src={mochiLogoImg} 
                alt="mochi HEALTH" 
                style={{ height: '36px', width: 'auto', display: 'block' }} 
              />
            </a>
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
