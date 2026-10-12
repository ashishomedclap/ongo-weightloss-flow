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
import MochiFrame11Gender from './MochiFrame11Gender';
import MochiFrame12HeightWeight from './MochiFrame12HeightWeight';
import MochiFrame13Projection from './MochiFrame13Projection';
import MochiFrame14MedHistory from './MochiFrame14MedHistory';
import MochiFrame15Conditions from './MochiFrame15Conditions';
import MochiFrame16SafetyChecks from './MochiFrame16SafetyChecks';
import MochiFrame17Candidate from './MochiFrame17Candidate';
import MochiFrame18CareBeyond from './MochiFrame18CareBeyond';
import MochiFrame19InsuranceSavings from './MochiFrame19InsuranceSavings';
import MochiFrame20InsuranceUpload from './MochiFrame20InsuranceUpload';
import MochiFrame21ConfirmInsurance from './MochiFrame21ConfirmInsurance';
import MochiFrame22CheckingCoverage from './MochiFrame22CheckingCoverage';
import MochiFrame23NotEligible from './MochiFrame23NotEligible';
import MochiFrame24GoodHands from './MochiFrame24GoodHands';
import MochiFrame25EveryStep from './MochiFrame25EveryStep';
import MochiFrame26AccountSetup from './MochiFrame26AccountSetup';
import MochiFrame27WhatHappensNext from './MochiFrame27WhatHappensNext';
import MochiFrame28PlanSelection from './MochiFrame28PlanSelection';
import MochiFrame29Checkout from './MochiFrame29Checkout';
import { 
  ArrowLeft, 
  Monitor, 
  Smartphone, 
  CheckCheck, 
  ChevronLeft,
  Gift,
  Sparkles
} from 'lucide-react';

const MOCHI_SCREENS = [
  { key: 'frame-1', label: 'Screen 1: First Month Free Offer', short: 'Screen 1' },
  { key: 'frame-2', label: "Screen 2: What's Your Primary Weight Loss Goal?", short: 'Screen 2' },
  { key: 'frame-3', label: 'Screen 3: Why Weight Management is Important to You', short: 'Screen 3' },
  { key: 'frame-4', label: 'Screen 4: What You Value in Weight Loss Medication', short: 'Screen 4' },
  { key: 'frame-5', label: 'Screen 5: How You Prefer to Meet with Your Doctor', short: 'Screen 5' },
  { key: 'frame-6', label: 'Screen 6: Do You Have a Treatment in Mind Already?', short: 'Screen 6' },
  { key: 'frame-7', label: 'Screen 7: Ready for Real Results?', short: 'Screen 7' },
  { key: 'frame-8', label: 'Screen 8: What State Do You Live In?', short: 'Screen 8' },
  { key: 'frame-9', label: 'Screen 9: What is Your Date of Birth?', short: 'Screen 9' },
  { key: 'frame-10', label: 'Screen 10: What is Your First and Last Name?', short: 'Screen 10' },
  { key: 'frame-11', label: 'Screen 11: What is Your Birth-Assigned Gender?', short: 'Screen 11' },
  { key: 'frame-12', label: 'Screen 12: What is Your Height and Weight?', short: 'Screen 12' },
  { key: 'frame-13', label: 'Screen 13: In Six Months, You Could Lose Weight (Projection)', short: 'Screen 13' },
  { key: 'frame-14', label: 'Screen 14: Have You Taken Weight Loss Meds in Past 6 Months?', short: 'Screen 14' },
  { key: 'frame-15', label: 'Screen 15: Do You Have Any of These Conditions?', short: 'Screen 15' },
  { key: 'frame-16', label: 'Screen 16: Next, a Few Safety Checks', short: 'Screen 16' },
  { key: 'frame-17', label: 'Screen 17: Candidate Approval Estimate', short: 'Screen 17' },
  { key: 'frame-18', label: 'Screen 18: Care Beyond Weight Loss', short: 'Screen 18' },
  { key: 'frame-19', label: 'Screen 19: Save Up to $389 Annually with Insurance', short: 'Screen 19' },
  { key: 'frame-20', label: 'Screen 20: Add Insurance to Check Coverage', short: 'Screen 20' },
  { key: 'frame-21', label: 'Screen 21: Confirm Your Insurance Information', short: 'Screen 21' },
  { key: 'frame-22', label: 'Screen 22: Checking Your Coverage (Live Lookup)', short: 'Screen 22' },
  { key: 'frame-23', label: "Screen 23: Standard Membership Required (Not Covered)", short: 'Screen 23' },
  { key: 'frame-24', label: "Screen 24: You're in Good Hands", short: 'Screen 24' },
  { key: 'frame-25', label: 'Screen 25: With You Every Step of the Way', short: 'Screen 25' },
  { key: 'frame-26', label: 'Screen 26: Ready to Get Started with Your Treatment Plan', short: 'Screen 26' },
  { key: 'frame-27', label: "Screen 27: Let's Get Your Care Started (What Happens Next)", short: 'Screen 27' },
  { key: 'frame-28', label: 'Screen 28: Join More Than 500,000 Members (Select Plan)', short: 'Screen 28' },
  { key: 'frame-29', label: 'Screen 29: Payment & Checkout', short: 'Screen 29' }
];

const getInitialStep = () => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const frame = params.get('frame');
    if (frame && Number(frame) >= 1 && Number(frame) <= 29) {
      return `frame-${frame}`;
    }
    const screen = params.get('screen');
    if (screen) {
      if (Array.from({ length: 29 }, (_, i) => String(i + 1)).includes(screen)) {
        return `frame-${screen}`;
      }
    }
  }
  return 'frame-1';
};

const createEmptyMochiData = () => ({
  offerClaimed: false,
  goal: '',
  reasons: [],
  medValues: [],
  doctorPreference: '',
  treatments: [],
  selectedState: '',
  birthMonth: '',
  birthDay: '',
  birthYear: '',
  firstName: '',
  lastName: '',
  gender: '',
  heightFeet: '',
  heightInches: '',
  weightLbs: '',
  medHistory: '',
  conditions: [],
  safetyChecks: [],
  careBeyond: [],
  insurance: {
    insuranceType: '',
    relationship: '',
    insuranceProvider: '',
    method: 'photo',
    frontUploaded: false,
    backUploaded: false,
    memberId: '',
    groupId: ''
  },
  email: '',
  selectedPlan: ''
});

const createAutofillMochiData = () => ({
  offerClaimed: true,
  goal: '20-50',
  reasons: ['feel-confident', 'more-energy', 'prevent-disease', 'doctor-mentioned', 'family'],
  medValues: ['lowest-side-effects', 'max-weight-loss', 'multi-month-supplies', 'lowest-cost'],
  doctorPreference: 'video-when-needed-messaging',
  treatments: ['compounded-semaglutide-inj', 'fda-injectable', 'provider-recommendation'],
  selectedState: 'Texas',
  birthMonth: 'September',
  birthDay: '18',
  birthYear: '1990',
  firstName: 'Alex',
  lastName: 'Rivera',
  gender: 'Female',
  heightFeet: '5',
  heightInches: '6',
  weightLbs: '198',
  medHistory: 'no',
  conditions: ['prediabetes'],
  safetyChecks: ['none-of-these'],
  careBeyond: ['skincare', 'longevity', 'mental-health'],
  insurance: {
    insuranceType: 'Commercial / Employer-sponsored',
    relationship: 'Self',
    insuranceProvider: 'Aetna Health',
    method: 'photo',
    frontUploaded: true,
    backUploaded: true,
    memberId: 'AET-89472019',
    groupId: 'GRP-77402'
  },
  email: 'alex.rivera@example.com',
  selectedPlan: '3-months'
});

export default function CompetitorFlow({ onBackToWelcome }) {
  const [currentStep, setCurrentStep] = useState(getInitialStep);
  const [isMobileFrame, setIsMobileFrame] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showOfferModal, setShowOfferModal] = useState(false);

  // Form State initialized to empty so user can fill and choose manually
  const [formData, setFormData] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autofill') === '1' || params.get('autofill') === 'true') {
        return createAutofillMochiData();
      }
    }
    return createEmptyMochiData();
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

  // Autofill Handler (populates all screens 1 to 29 on demand)
  const handleAutofill = () => {
    setFormData(createAutofillMochiData());
    setAutofillKey(prev => prev + 1);
  };

  const getProgressPercentage = () => {
    switch (currentStep) {
      case 'frame-1': return 3;
      case 'frame-2': return 6;
      case 'frame-3': return 10;
      case 'frame-4': return 14;
      case 'frame-5': return 18;
      case 'frame-6': return 22;
      case 'frame-7': return 26;
      case 'frame-8': return 30;
      case 'frame-9': return 34;
      case 'frame-10': return 38;
      case 'frame-11': return 42;
      case 'frame-12': return 46;
      case 'frame-13': return 50;
      case 'frame-14': return 54;
      case 'frame-15': return 58;
      case 'frame-16': return 62;
      case 'frame-17': return 66;
      case 'frame-18': return 70;
      case 'frame-19': return 74;
      case 'frame-20': return 78;
      case 'frame-21': return 82;
      case 'frame-22': return 86;
      case 'frame-23': return 90;
      case 'frame-24': return 93;
      case 'frame-25': return 95;
      case 'frame-26': return 96;
      case 'frame-27': return 97;
      case 'frame-28': return 98;
      case 'frame-29': return 100;
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

  const toggleCondition = (condId) => {
    setFormData(prev => {
      const current = prev.conditions || [];
      if (condId === 'none-of-these') {
        if (current.includes('none-of-these')) {
          return { ...prev, conditions: [] };
        } else {
          return { ...prev, conditions: ['none-of-these'] };
        }
      } else {
        const withoutNone = current.filter(c => c !== 'none-of-these');
        if (withoutNone.includes(condId)) {
          return { ...prev, conditions: withoutNone.filter(c => c !== condId) };
        } else {
          return { ...prev, conditions: [...withoutNone, condId] };
        }
      }
    });
  };

  const toggleSafetyCheck = (safetyId) => {
    setFormData(prev => {
      const current = prev.safetyChecks || [];
      if (safetyId === 'none-of-these') {
        if (current.includes('none-of-these')) {
          return { ...prev, safetyChecks: [] };
        } else {
          return { ...prev, safetyChecks: ['none-of-these'] };
        }
      } else {
        const withoutNone = current.filter(s => s !== 'none-of-these');
        if (withoutNone.includes(safetyId)) {
          return { ...prev, safetyChecks: withoutNone.filter(s => s !== safetyId) };
        } else {
          return { ...prev, safetyChecks: [...withoutNone, safetyId] };
        }
      }
    });
  };

  const toggleTopic = (topicId) => {
    setFormData(prev => {
      const current = prev.careBeyond || [];
      if (topicId === 'none-of-these') {
        if (current.includes('none-of-these')) {
          return { ...prev, careBeyond: [] };
        } else {
          return { ...prev, careBeyond: ['none-of-these'] };
        }
      } else {
        const withoutNone = current.filter(t => t !== 'none-of-these');
        if (withoutNone.includes(topicId)) {
          return { ...prev, careBeyond: withoutNone.filter(t => t !== topicId) };
        } else {
          return { ...prev, careBeyond: [...withoutNone, topicId] };
        }
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
            onNext={() => setCurrentStep('frame-11')}
            onBack={() => setCurrentStep('frame-9')}
          />
        );

      case 'frame-11':
        return (
          <MochiFrame11Gender
            selectedGender={formData.gender}
            onSelectGender={(g) => setFormData(prev => ({ ...prev, gender: g }))}
            onNext={() => setCurrentStep('frame-12')}
            onBack={() => setCurrentStep('frame-10')}
          />
        );

      case 'frame-12':
        return (
          <MochiFrame12HeightWeight
            heightFeet={formData.heightFeet}
            heightInches={formData.heightInches}
            weightLbs={formData.weightLbs}
            onChangeHeightFeet={(ft) => setFormData(prev => ({ ...prev, heightFeet: ft }))}
            onChangeHeightInches={(inc) => setFormData(prev => ({ ...prev, heightInches: inc }))}
            onChangeWeight={(wt) => setFormData(prev => ({ ...prev, weightLbs: wt }))}
            onNext={() => setCurrentStep('frame-13')}
            onBack={() => setCurrentStep('frame-11')}
          />
        );

      case 'frame-13':
        return (
          <MochiFrame13Projection
            weightLbs={formData.weightLbs}
            onNext={() => setCurrentStep('frame-14')}
            onBack={() => setCurrentStep('frame-12')}
          />
        );

      case 'frame-14':
        return (
          <MochiFrame14MedHistory
            selectedMedHistory={formData.medHistory}
            onSelectMedHistory={(h) => setFormData(prev => ({ ...prev, medHistory: h }))}
            onNext={() => setCurrentStep('frame-15')}
            onBack={() => setCurrentStep('frame-13')}
          />
        );

      case 'frame-15':
        return (
          <MochiFrame15Conditions
            selectedConditions={formData.conditions}
            onToggleCondition={toggleCondition}
            onNext={() => setCurrentStep('frame-16')}
            onBack={() => setCurrentStep('frame-14')}
          />
        );

      case 'frame-16':
        return (
          <MochiFrame16SafetyChecks
            selectedSafetyChecks={formData.safetyChecks}
            onToggleSafetyCheck={toggleSafetyCheck}
            onNext={() => setCurrentStep('frame-17')}
            onBack={() => setCurrentStep('frame-15')}
          />
        );

      case 'frame-17':
        return (
          <MochiFrame17Candidate
            targetLoss="10-20 lbs"
            onNext={() => setCurrentStep('frame-18')}
            onBack={() => setCurrentStep('frame-16')}
          />
        );

      case 'frame-18':
        return (
          <MochiFrame18CareBeyond
            selectedTopics={formData.careBeyond}
            onToggleTopic={toggleTopic}
            onNext={() => setCurrentStep('frame-19')}
            onBack={() => setCurrentStep('frame-17')}
          />
        );

      case 'frame-19':
        return (
          <MochiFrame19InsuranceSavings
            onCheckCoverage={() => setCurrentStep('frame-20')}
            onSkip={() => setCurrentStep('frame-26')}
            onBack={() => setCurrentStep('frame-18')}
          />
        );

      case 'frame-20':
        return (
          <MochiFrame20InsuranceUpload
            insuranceData={formData.insurance}
            onChangeInsuranceData={(ins) => setFormData(prev => ({ ...prev, insurance: ins }))}
            onNext={() => setCurrentStep('frame-21')}
            onBack={() => setCurrentStep('frame-19')}
          />
        );

      case 'frame-21':
        return (
          <MochiFrame21ConfirmInsurance
            formData={{ ...formData, ...formData.insurance }}
            onConfirmInsurance={(confirmed) => setFormData(prev => ({ ...prev, insurance: { ...prev.insurance, ...confirmed } }))}
            onNext={() => setCurrentStep('frame-22')}
            onBack={() => setCurrentStep('frame-20')}
          />
        );

      case 'frame-22':
        return (
          <MochiFrame22CheckingCoverage
            onNext={() => setCurrentStep('frame-23')}
            onBack={() => setCurrentStep('frame-21')}
          />
        );

      case 'frame-23':
        return (
          <MochiFrame23NotEligible
            onNext={() => setCurrentStep('frame-24')}
            onBack={() => setCurrentStep('frame-22')}
          />
        );

      case 'frame-24':
        return (
          <MochiFrame24GoodHands
            onNext={() => setCurrentStep('frame-25')}
            onBack={() => setCurrentStep('frame-23')}
          />
        );

      case 'frame-25':
        return (
          <MochiFrame25EveryStep
            onNext={() => setCurrentStep('frame-26')}
            onBack={() => setCurrentStep('frame-24')}
          />
        );

      case 'frame-26':
        return (
          <MochiFrame26AccountSetup
            email={formData.email}
            onChangeEmail={(em) => setFormData(prev => ({ ...prev, email: em }))}
            onNext={() => setCurrentStep('frame-27')}
            onBack={() => setCurrentStep('frame-25')}
          />
        );

      case 'frame-27':
        return (
          <MochiFrame27WhatHappensNext
            firstName={formData.firstName}
            onNext={() => setCurrentStep('frame-28')}
            onBack={() => setCurrentStep('frame-26')}
          />
        );

      case 'frame-28':
        return (
          <MochiFrame28PlanSelection
            selectedPlan={formData.selectedPlan}
            onSelectPlan={(pl) => setFormData(prev => ({ ...prev, selectedPlan: pl }))}
            onNext={() => setCurrentStep('frame-29')}
            onBack={() => setCurrentStep('frame-27')}
            onSignOut={() => setCurrentStep('frame-26')}
          />
        );

      case 'frame-29':
      default:
        return (
          <MochiFrame29Checkout
            selectedPlan={formData.selectedPlan}
            onCompletePayment={() => alert("🎉 Payment successful! Welcome to Mochi Health.")}
            onBack={() => setCurrentStep('frame-28')}
          />
        );
    }
  };

  return (
    <div className="app-viewport" style={{ 
      minHeight: '100vh', 
      fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif"
    }}>
      {/* Top Benchmark Inspection Toolbar */}
      <aside className="top-dev-toolbar" aria-label="Survey review and device controls">
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
          <Sparkles size={16} color="var(--color-primary-dark)" />
          <span>Join Mochi Flow (29 Screens)</span>
        </div>

        <div className="toolbar-controls">
          <select 
            className="screen-select-dropdown" 
            value={currentStep} 
            onChange={(e) => setCurrentStep(e.target.value)} 
            aria-label="Select screen to view"
          >
            {MOCHI_SCREENS.map((s) => (
              <option key={s.key} value={s.key}>{s.label}</option>
            ))}
          </select>

          <button 
            type="button" 
            className="toolbar-btn" 
            onClick={handleAutofill} 
            title="Auto-fill sample patient survey data"
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
            <span>{isMobileFrame ? 'Desktop (540px)' : 'Mobile Frame'}</span>
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
          bottom: '24px',
          right: '24px',
          zIndex: 900
        }}>
          <button
            type="button"
            onClick={() => setShowOfferModal(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              backgroundColor: '#005580',
              color: '#FFFFFF',
              borderRadius: '999px',
              border: 'none',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,85,128,0.25)',
              transition: 'transform 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Gift size={15} />
            <span>View First Month Offer</span>
          </button>
        </div>
      )}

      {/* Standalone Offer Modal when triggered from floating button */}
      {showOfferModal && (
        <MochiFrame1OfferModal
          isStandalone={true}
          onClaim={handleClaimOffer}
          onClose={() => setShowOfferModal(false)}
        />
      )}

      {/* Mochi Viewport Shell */}
      <main className={`onboarding-shell ${isMobileFrame ? 'device-frame-mobile' : ''}`} style={{
        maxWidth: isMobileFrame ? '410px' : '860px',
        width: '100%',
        margin: '0 auto',
        borderRadius: isMobileFrame ? '36px' : '20px',
        overflow: 'hidden',
        boxShadow: isMobileFrame ? '0 20px 50px rgba(0, 0, 69, 0.15), 0 0 0 10px #1a1a1a' : '0 4px 30px rgba(0, 0, 0, 0.04)',
        minHeight: isMobileFrame ? '740px' : 'auto',
        backgroundColor: '#FFFFFF',
        transition: 'all 0.3s ease'
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
                backgroundColor: '#000045',
                borderRadius: '999px',
                transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }} />
            </div>

            {/* Right Mochi Official Vector Logo */}
            <div style={{ flexShrink: 0 }}>
              <MochiLogo width={68} height={30} />
            </div>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <div className="step-content-scroll" key={autofillKey} style={{ width: '100%', minHeight: '520px' }}>
          {renderContent()}
        </div>

      </main>
    </div>
  );
}
