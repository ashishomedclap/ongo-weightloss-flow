import React, { useState, useEffect } from 'react';
import MochiLogo from './MochiLogo';
import MochiFrame1OfferModal from './MochiFrame1OfferModal';
import MochiFrame2Goal from './MochiFrame2Goal';
import MochiFrame3Importance from './MochiFrame3Importance';
import MochiFrame4MedValues from './MochiFrame4MedValues';
import MochiFrame5DoctorPreference from './MochiFrame5DoctorPreference';
import MochiFrame6Treatment from './MochiFrame6Treatment';
import MochiFrame7Results from './MochiFrame7Results';
import MochiFrame8State from './MochiFrame8State';
import MochiFrame9DOB from './MochiFrame9DOB';
import MochiFrame10Name from './MochiFrame10Name';
import { 
  ArrowLeft, 
  Monitor, 
  Smartphone, 
  CheckCheck, 
  ChevronLeft,
  ShieldCheck,
  Gift
} from 'lucide-react';

const MOCHI_SCREENS = [
  { key: 'frame-1', label: 'Frame 1: First Month Free Offer (Modal)', short: 'Frame 1' },
  { key: 'frame-2', label: 'Frame 2: Primary Weight Loss Goal', short: 'Frame 2' },
  { key: 'frame-3', label: 'Frame 3: Why Weight Management is Important', short: 'Frame 3' },
  { key: 'frame-4', label: 'Frame 4: Medication Values & Priorities', short: 'Frame 4' },
  { key: 'frame-5', label: 'Frame 5: Doctor Consultation Preference', short: 'Frame 5' },
  { key: 'frame-6', label: 'Frame 6: Treatment in Mind Already', short: 'Frame 6' },
  { key: 'frame-7', label: 'Frame 7: Real Member Results & Transformations', short: 'Frame 7' },
  { key: 'frame-8', label: 'Frame 8: State of Residence', short: 'Frame 8' },
  { key: 'frame-9', label: 'Frame 9: Date of Birth', short: 'Frame 9' },
  { key: 'frame-10', label: 'Frame 10: Patient First & Last Name', short: 'Frame 10' },
  { key: 'screen-11', label: 'Screen 11: Clinical Care Plan & Pricing', short: 'Screen 11' }
];

const getInitialStep = () => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const frame = params.get('frame');
    if (frame && Number(frame) >= 1 && Number(frame) <= 10) {
      return `frame-${frame}`;
    }
    const screen = params.get('screen');
    if (screen) {
      if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].includes(screen)) {
        return `frame-${screen}`;
      }
      if (screen === '11' || screen === 'screen-11') return 'screen-11';
    }
  }
  return 'frame-1';
};

export default function CompetitorFlow({ onBackToWelcome }) {
  const [currentStep, setCurrentStep] = useState(getInitialStep);
  const [isMobileFrame, setIsMobileFrame] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showOfferModal, setShowOfferModal] = useState(false);

  // Comprehensive Form State across Frames 1-10
  const [formData, setFormData] = useState({
    offerClaimed: false,
    goal: '50-plus', // Frame 2
    reasons: ['doctor-mentioned', 'feel-confident', 'more-energy'], // Frame 3
    medValues: ['multi-month-supplies', 'max-weight-loss', 'lowest-side-effects'], // Frame 4
    doctorPreference: 'video-when-needed-messaging', // Frame 5
    treatments: ['compounded-semaglutide-inj', 'fda-injectable'], // Frame 6
    selectedState: 'California', // Frame 8
    birthMonth: '6', // Frame 9
    birthDay: '15',
    birthYear: '1992',
    firstName: 'nicholas', // Frame 10
    lastName: 'cage'
  });

  const [autofillKey, setAutofillKey] = useState(0);

  // Sync step changes to URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      params.set('project', 'competitor');
      if (currentStep.startsWith('frame-')) {
        params.set('frame', currentStep.replace('frame-', ''));
        params.delete('screen');
      } else {
        params.set('screen', currentStep);
        params.delete('frame');
      }
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, '', newUrl);
    }
  }, [currentStep]);

  // Autofill Handler (populates all screens 1 to 10)
  const handleAutofill = () => {
    setFormData({
      offerClaimed: true,
      goal: '50-plus',
      reasons: ['doctor-mentioned', 'feel-confident', 'mental-health', 'family', 'more-energy'],
      medValues: ['multi-month-supplies', 'max-weight-loss', 'lowest-cost', 'lowest-side-effects'],
      doctorPreference: 'video-when-needed-messaging',
      treatments: ['compounded-semaglutide-inj', 'fda-injectable', 'provider-recommendation'],
      selectedState: 'California',
      birthMonth: '6',
      birthDay: '15',
      birthYear: '1992',
      firstName: 'nicholas',
      lastName: 'cage'
    });
    setAutofillKey(prev => prev + 1);
  };

  const getProgressPercentage = () => {
    switch (currentStep) {
      case 'frame-1': return 15;
      case 'frame-2': return 18;
      case 'frame-3': return 25;
      case 'frame-4': return 32;
      case 'frame-5': return 38;
      case 'frame-6': return 46;
      case 'frame-7': return 54;
      case 'frame-8': return 62;
      case 'frame-9': return 70;
      case 'frame-10': return 80;
      case 'screen-11': return 100;
      default: return 18;
    }
  };

  const toggleReason = (reasonId) => {
    setFormData(prev => {
      const current = prev.reasons || [];
      if (current.includes(reasonId)) {
        return { ...prev, reasons: current.filter(r => r !== reasonId) };
      } else {
        return { ...prev, reasons: [...current, reasonId] };
      }
    });
  };

  const toggleMedValue = (valId) => {
    setFormData(prev => {
      const current = prev.medValues || [];
      if (current.includes(valId)) {
        return { ...prev, medValues: current.filter(v => v !== valId) };
      } else {
        return { ...prev, medValues: [...current, valId] };
      }
    });
  };

  const toggleTreatment = (treatmentId) => {
    setFormData(prev => {
      const current = prev.treatments || [];
      if (current.includes(treatmentId)) {
        return { ...prev, treatments: current.filter(t => t !== treatmentId) };
      } else {
        return { ...prev, treatments: [...current, treatmentId] };
      }
    });
  };

  const handleClaimOffer = () => {
    setFormData(prev => ({ ...prev, offerClaimed: true }));
    setShowOfferModal(false);
    setCurrentStep('frame-2');
  };

  const renderContent = () => {
    switch (currentStep) {
      case 'frame-1':
        return (
          <div style={{ position: 'relative', width: '100%', minHeight: '680px' }}>
            <div style={{ filter: 'blur(3px)', opacity: 0.35, pointerEvents: 'none' }}>
              <MochiFrame2Goal
                selectedGoal={formData.goal}
                onSelectGoal={() => {}}
                language={language}
              />
            </div>
            <MochiFrame1OfferModal
              isStandalone={false}
              onClaim={handleClaimOffer}
              onClose={() => setCurrentStep('frame-2')}
            />
          </div>
        );

      case 'frame-2':
        return (
          <MochiFrame2Goal
            selectedGoal={formData.goal}
            onSelectGoal={(goalId) => setFormData(prev => ({ ...prev, goal: goalId }))}
            onNext={() => setCurrentStep('frame-3')}
            language={language}
            onToggleLanguage={() => setLanguage(l => l === 'en' ? 'es' : 'en')}
          />
        );

      case 'frame-3':
        return (
          <MochiFrame3Importance
            selectedReasons={formData.reasons}
            onToggleReason={toggleReason}
            onNext={() => setCurrentStep('frame-4')}
            onBack={() => setCurrentStep('frame-2')}
          />
        );

      case 'frame-4':
        return (
          <MochiFrame4MedValues
            selectedValues={formData.medValues}
            onToggleValue={toggleMedValue}
            onNext={() => setCurrentStep('frame-5')}
            onBack={() => setCurrentStep('frame-3')}
          />
        );

      case 'frame-5':
        return (
          <MochiFrame5DoctorPreference
            selectedPreference={formData.doctorPreference}
            onSelectPreference={(prefId) => setFormData(prev => ({ ...prev, doctorPreference: prefId }))}
            onNext={() => setCurrentStep('frame-6')}
            onBack={() => setCurrentStep('frame-4')}
          />
        );

      case 'frame-6':
        return (
          <MochiFrame6Treatment
            selectedTreatments={formData.treatments}
            onToggleTreatment={toggleTreatment}
            onNext={() => setCurrentStep('frame-7')}
            onBack={() => setCurrentStep('frame-5')}
          />
        );

      case 'frame-7':
        return (
          <MochiFrame7Results
            onNext={() => setCurrentStep('frame-8')}
            onBack={() => setCurrentStep('frame-6')}
          />
        );

      case 'frame-8':
        return (
          <MochiFrame8State
            selectedState={formData.selectedState}
            onSelectState={(st) => setFormData(prev => ({ ...prev, selectedState: st }))}
            onNext={() => setCurrentStep('frame-9')}
            onBack={() => setCurrentStep('frame-7')}
          />
        );

      case 'frame-9':
        return (
          <MochiFrame9DOB
            birthMonth={formData.birthMonth}
            birthDay={formData.birthDay}
            birthYear={formData.birthYear}
            onChangeMonth={(m) => setFormData(prev => ({ ...prev, birthMonth: m }))}
            onChangeDay={(d) => setFormData(prev => ({ ...prev, birthDay: d }))}
            onChangeYear={(y) => setFormData(prev => ({ ...prev, birthYear: y }))}
            onNext={() => setCurrentStep('frame-10')}
            onBack={() => setCurrentStep('frame-8')}
          />
        );

      case 'frame-10':
        return (
          <MochiFrame10Name
            firstName={formData.firstName}
            lastName={formData.lastName}
            onChangeFirstName={(fn) => setFormData(prev => ({ ...prev, firstName: fn }))}
            onChangeLastName={(ln) => setFormData(prev => ({ ...prev, lastName: ln }))}
            onNext={() => setCurrentStep('screen-11')}
            onBack={() => setCurrentStep('frame-9')}
          />
        );

      case 'screen-11':
      default:
        return (
          <div style={{
            width: '100%',
            maxWidth: '560px',
            margin: '0 auto',
            padding: '32px 20px 60px',
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
                {formData.firstName ? `${formData.firstName}, you are clinically eligible!` : 'You are clinically eligible for Mochi Health'}
              </h1>
              <p style={{ fontSize: '15px', color: '#606069', margin: 0, lineHeight: '1.45' }}>
                Based on your health profile in {formData.selectedState || 'your state'}, you qualify for physician-guided GLP-1 weight loss care.
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
                onClick={() => alert("Mochi Survey benchmark walkthrough (Frames 1-10) completed!")}
                style={{
                  width: '100%',
                  height: '52px',
                  borderRadius: '999px',
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
                onClick={() => setCurrentStep('frame-1')}
                style={{ background: 'none', border: 'none', color: '#606069', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Restart Survey from Frame 1
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app-viewport" style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', position: 'relative' }}>
      
      {/* Top Review & Dev Control Toolbar */}
      <aside className="top-dev-toolbar" aria-label="Join Mochi survey and device controls">
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
          <span style={{ fontWeight: 800, color: '#000045', fontSize: '14px', letterSpacing: '-0.01em' }}>
            Join Mochi
          </span>
          <span style={{ fontSize: '11px', background: '#EAEAF2', color: '#000045', padding: '2px 8px', borderRadius: '10px', fontWeight: 600 }}>
            Frames 1–10
          </span>
        </div>

        {/* Quick Frame Switcher Buttons (Frames 1 - 10) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}>
          {[
            { id: 'frame-1', label: '1: Offer' },
            { id: 'frame-2', label: '2: Goal' },
            { id: 'frame-3', label: '3: Reasons' },
            { id: 'frame-4', label: '4: Meds' },
            { id: 'frame-5', label: '5: Visit' },
            { id: 'frame-6', label: '6: Treatment' },
            { id: 'frame-7', label: '7: Results' },
            { id: 'frame-8', label: '8: State' },
            { id: 'frame-9', label: '9: DOB' },
            { id: 'frame-10', label: '10: Name' }
          ].map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setCurrentStep(f.id)}
              style={{
                fontSize: '11px',
                fontWeight: currentStep === f.id ? 700 : 500,
                padding: '3px 8px',
                borderRadius: '6px',
                border: currentStep === f.id ? '1px solid #000045' : '1px solid #D5D6E0',
                backgroundColor: currentStep === f.id ? '#000045' : '#FFFFFF',
                color: currentStep === f.id ? '#FFFFFF' : '#000045',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="toolbar-controls">
          <select 
            className="screen-select-dropdown" 
            value={currentStep} 
            onChange={(e) => setCurrentStep(e.target.value)} 
            aria-label="Select Mochi survey screen"
          >
            {MOCHI_SCREENS.map((s) => (
              <option key={s.key} value={s.key}>{s.label}</option>
            ))}
          </select>

          <button 
            type="button" 
            className="toolbar-btn" 
            onClick={handleAutofill} 
            title="Auto-fill sample Mochi responses across all screens"
          >
            <CheckCheck size={13} />
            <span>Autofill Demo</span>
          </button>

          <button 
            type="button" 
            className={`toolbar-btn ${isMobileFrame ? 'active' : ''}`} 
            onClick={() => setIsMobileFrame(!isMobileFrame)} 
            title="Toggle between mobile viewport frame and centered desktop layout"
          >
            {isMobileFrame ? <Monitor size={13} /> : <Smartphone size={13} />}
            <span>{isMobileFrame ? 'Desktop' : 'Mobile'}</span>
          </button>
        </div>
      </aside>

      {/* Floating Right Report Bug Tab */}
      <div 
        title="Report an issue or feedback"
        style={{
          position: 'fixed',
          right: 0,
          top: '52%',
          transform: 'translateY(-50%)',
          backgroundColor: '#000033',
          color: '#FFFFFF',
          padding: '12px 6px',
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          zIndex: 9998,
          boxShadow: '0 2px 10px rgba(0,0,51,0.25)'
        }}
        onClick={() => alert("Mochi Bug Reporter")}
      >
        <span style={{ 
          writingMode: 'vertical-rl', 
          transform: 'rotate(180deg)', 
          fontSize: '11px', 
          fontWeight: 700, 
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

      {/* Trigger to Open Frame 1 Offer Modal anytime */}
      {currentStep !== 'frame-1' && (
        <div style={{
          position: 'fixed',
          bottom: '16px',
          left: '16px',
          zIndex: 9990
        }}>
          <button
            type="button"
            onClick={() => setCurrentStep('frame-1')}
            style={{
              backgroundColor: '#004874',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '999px',
              padding: '8px 16px',
              fontSize: '12.5px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0, 72, 116, 0.35)',
              transition: 'transform 0.15s ease'
            }}
            title="View Frame 1 Offer Modal"
          >
            <Gift size={14} />
            <span>View Offer Modal (Frame 1)</span>
          </button>
        </div>
      )}

      {/* Mochi Viewport Shell */}
      <main className={`onboarding-shell ${isMobileFrame ? 'device-frame-mobile' : ''}`} style={{
        maxWidth: isMobileFrame ? '420px' : '100%',
        margin: isMobileFrame ? '24px auto' : '0 auto',
        border: isMobileFrame ? '1px solid #E2E2EA' : 'none',
        borderRadius: isMobileFrame ? '24px' : '0',
        overflow: 'hidden',
        boxShadow: isMobileFrame ? '0 12px 32px rgba(0,0,69,0.08)' : 'none',
        minHeight: isMobileFrame ? '740px' : 'auto',
        backgroundColor: '#FFFFFF'
      }}>
        
        {/* Exact Mochi Brand Header */}
        <header style={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          paddingTop: '32px',
          paddingBottom: '20px',
          paddingLeft: '24px',
          paddingRight: '24px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            display: 'flex',
            width: '100%',
            maxWidth: '680px',
            margin: '0 auto',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}>
            {/* Left Back Arrow or Spacer */}
            {currentStep !== 'frame-1' && currentStep !== 'frame-2' ? (
              <button
                type="button"
                onClick={() => {
                  const idx = MOCHI_SCREENS.findIndex(s => s.key === currentStep);
                  if (idx > 1) {
                    setCurrentStep(MOCHI_SCREENS[idx - 1].key);
                  }
                }}
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
              maxWidth: '360px',
              height: '4px',
              backgroundColor: '#EAEAF2',
              borderRadius: '999px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${getProgressPercentage()}%`,
                height: '100%',
                backgroundColor: '#1E1B4B',
                borderRadius: '999px',
                transition: 'width 0.3s ease'
              }} />
            </div>

            {/* Right Mochi Official Brand Mark */}
            <div style={{ flexShrink: 0 }}>
              <MochiLogo width={55} height={28} />
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div key={autofillKey}>
          {renderContent()}
        </div>
      </main>

      {/* Frame 1 Modal Overlay (when opened from banner button) */}
      {showOfferModal && currentStep !== 'frame-1' && (
        <MochiFrame1OfferModal
          onClaim={handleClaimOffer}
          onClose={() => setShowOfferModal(false)}
        />
      )}

    </div>
  );
}
