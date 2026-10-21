import React, { useState, useEffect } from 'react';
import FridaysHeader from './FridaysHeader';
import FridaysFooter from './FridaysFooter';
import FridaysFrame1Support from './FridaysFrame1Support';
import FridaysFrame2Interests from './FridaysFrame2Interests';
import FridaysFrame3Measurements from './FridaysFrame3Measurements';
import FridaysFrame4HealthScreening from './FridaysFrame4HealthScreening';
import FridaysFrame5OtherGoals from './FridaysFrame5OtherGoals';
import FridaysFrame6Result from './FridaysFrame6Result';
import FridaysFrame7Provider from './FridaysFrame7Provider';
import FridaysFrame8Treatments from './FridaysFrame8Treatments';
import FridaysFrame9Pricing from './FridaysFrame9Pricing';
import FridaysFrame10Checkout from './FridaysFrame10Checkout';
import {
  ArrowLeft,
  Monitor,
  Smartphone,
  Sparkles
} from 'lucide-react';

const FRIDAYS_STEPS = [
  { key: '1', title: 'Frame 1: Support Eligibility & Demographics (State, Sex, DOB)' },
  { key: '2', title: 'Frame 2: Treatment Interests (GLP-1, Longevity, Microdosing, TRT)' },
  { key: '3', title: 'Frame 3: Measurements & BMI Target (Height, Weight, BMI 47.4)' },
  { key: '4', title: 'Frame 4: Clinical Health Screening (17 Contraindication Checks)' },
  { key: '5', title: 'Frame 5: Other Health Goals (Muscle, Anti-Aging, Energy, Libido)' },
  { key: '6', title: 'Frame 6: Clinical Qualification & Expected Weight Loss' },
  { key: '7', title: 'Frame 7: Licensed Telehealth Clinician Video Visit' },
  { key: '8', title: 'Frame 8: Explore Treatment Formulations' },
  { key: '9', title: 'Frame 9: Lock in Price Plan Commitment' },
  { key: '10', title: 'Frame 10: Complete Order & Consultation Booking' }
];

export default function JoinFridaysFlow({ onBackToWelcome }) {
  // Read initial frame from URL param if present
  const getInitialStep = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const f = params.get('frame');
      if (f && parseInt(f, 10) >= 1 && parseInt(f, 10) <= 10) {
        return f;
      }
    }
    return '1';
  };

  const [currentStep, setCurrentStep] = useState(getInitialStep);
  const [isMobileFrame, setIsMobileFrame] = useState(false);
  const [language, setLanguage] = useState('en');

  // Sync step to URL param for direct Playwright / DevTools navigation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('frame') !== currentStep) {
        params.set('frame', currentStep);
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, [currentStep]);

  // Form State matching the screenshots
  const [formData, setFormData] = useState({
    // Frame 1
    state: 'Alabama',
    sex: 'Male',
    dobMonth: '10',
    dobDay: '10',
    dobYear: '1990',

    // Frame 2
    categories: ['glp1'],

    // Frame 3
    heightFeet: '6',
    heightInches: '5',
    weightPounds: '400',

    // Frame 4
    conditions: [],
    noneOfBelow: true,

    // Frame 5
    goals: ['muscle', 'anti_aging', 'energy'],

    // Frame 8
    treatment: 'semaglutide',

    // Frame 9
    plan: 'multi-month',

    // Frame 10
    cardName: 'Sarah Miller',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '08/28',
    cardCvc: '•••'
  });

  const handleAutofill = () => {
    setFormData({
      state: 'Alabama',
      sex: 'Male',
      dobMonth: '10',
      dobDay: '10',
      dobYear: '1990',
      categories: ['glp1'],
      heightFeet: '6',
      heightInches: '5',
      weightPounds: '400',
      conditions: [],
      noneOfBelow: true,
      goals: ['muscle', 'anti_aging', 'energy', 'sleep'],
      treatment: 'semaglutide',
      plan: 'multi-month',
      cardName: 'Sarah Miller',
      cardNumber: '•••• •••• •••• 4242',
      cardExp: '08/28',
      cardCvc: '•••'
    });
  };

  const goToNext = () => {
    const idx = parseInt(currentStep, 10);
    if (idx < 10) {
      setCurrentStep(String(idx + 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrev = () => {
    const idx = parseInt(currentStep, 10);
    if (idx > 1) {
      setCurrentStep(String(idx - 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Progress percentage (Frame 1 = 10%, Frame 2 = 20%, ..., Frame 10 = 100%)
  const progress = parseInt(currentStep, 10) * 10;

  const renderCurrentFrame = () => {
    switch (currentStep) {
      case '1':
        return (
          <FridaysFrame1Support
            state={formData.state}
            sex={formData.sex}
            dobMonth={formData.dobMonth}
            dobDay={formData.dobDay}
            dobYear={formData.dobYear}
            onChangeState={(st) => setFormData(p => ({ ...p, state: st }))}
            onChangeSex={(sx) => setFormData(p => ({ ...p, sex: sx }))}
            onChangeDob={(field, val) => {
              if (field === 'month') setFormData(p => ({ ...p, dobMonth: val }));
              if (field === 'day') setFormData(p => ({ ...p, dobDay: val }));
              if (field === 'year') setFormData(p => ({ ...p, dobYear: val }));
            }}
          />
        );

      case '2':
        return (
          <FridaysFrame2Interests
            selectedCategories={formData.categories}
            onToggleCategory={(catId) => {
              setFormData(p => {
                const cur = p.categories || [];
                return {
                  ...p,
                  categories: cur.includes(catId) ? cur.filter(x => x !== catId) : [...cur, catId]
                };
              });
            }}
          />
        );

      case '3':
        return (
          <FridaysFrame3Measurements
            heightFeet={formData.heightFeet}
            heightInches={formData.heightInches}
            weightPounds={formData.weightPounds}
            onChangeHeightFeet={(ft) => setFormData(p => ({ ...p, heightFeet: ft }))}
            onChangeHeightInches={(inc) => setFormData(p => ({ ...p, heightInches: inc }))}
            onChangeWeight={(wt) => setFormData(p => ({ ...p, weightPounds: wt }))}
          />
        );

      case '4':
        return (
          <FridaysFrame4HealthScreening
            selectedConditions={formData.conditions}
            noneSelected={formData.noneOfBelow}
            onToggleCondition={(cId) => {
              setFormData(p => {
                const cur = p.conditions || [];
                const updated = cur.includes(cId) ? cur.filter(x => x !== cId) : [...cur, cId];
                return {
                  ...p,
                  conditions: updated,
                  noneOfBelow: updated.length === 0
                };
              });
            }}
            onToggleNone={() => {
              setFormData(p => ({
                ...p,
                noneOfBelow: !p.noneOfBelow,
                conditions: []
              }));
            }}
          />
        );

      case '5':
        return (
          <FridaysFrame5OtherGoals
            selectedGoals={formData.goals}
            onToggleGoal={(gId) => {
              setFormData(p => {
                const cur = p.goals || [];
                return {
                  ...p,
                  goals: cur.includes(gId) ? cur.filter(x => x !== gId) : [...cur, gId]
                };
              });
            }}
          />
        );

      case '6':
        return (
          <FridaysFrame6Result
            bmiScore="47.4"
            projectedWeightLoss="60"
          />
        );

      case '7':
        return (
          <FridaysFrame7Provider
            state={formData.state}
          />
        );

      case '8':
        return (
          <FridaysFrame8Treatments
            selectedMed={formData.treatment}
            onSelectMed={(med) => setFormData(p => ({ ...p, treatment: med }))}
          />
        );

      case '9':
        return (
          <FridaysFrame9Pricing
            selectedPlan={formData.plan}
            onSelectPlan={(pl) => setFormData(p => ({ ...p, plan: pl }))}
          />
        );

      case '10':
        return (
          <FridaysFrame10Checkout
            plan={formData.plan}
            cardName={formData.cardName}
            cardNumber={formData.cardNumber}
            cardExp={formData.cardExp}
            cardCvc={formData.cardCvc}
            onChangeField={(f, val) => setFormData(p => ({ ...p, [f]: val }))}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFFFFF',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      color: '#1F2937',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Dev Navigation Toolbar */}
      <div style={{
        background: '#1F2937',
        color: '#FFFFFF',
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        fontSize: '13px',
        borderBottom: '1px solid #374151',
        position: 'relative',
        zIndex: 9995
      }}>
        {/* Left: Hub Return & Flow Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            onClick={onBackToWelcome}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '6px',
              padding: '5px 10px',
              color: '#FFFFFF',
              fontSize: '12.5px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <ArrowLeft size={14} />
            <span>Study Hub</span>
          </button>

          <span style={{ fontWeight: 700, color: '#F9FAFB' }}>
            🟠 Join Fridays Flow (Screens 1–10)
          </span>
        </div>

        {/* Center: Frame Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#9CA3AF', fontSize: '12px' }}>Select Frame:</span>
          <select
            value={currentStep}
            onChange={(e) => setCurrentStep(e.target.value)}
            style={{
              background: '#374151',
              color: '#FFFFFF',
              border: '1px solid #4B5563',
              borderRadius: '6px',
              padding: '5px 12px',
              fontSize: '12.5px',
              fontWeight: 600,
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            {FRIDAYS_STEPS.map(s => (
              <option key={s.key} value={s.key}>{s.title}</option>
            ))}
          </select>
        </div>

        {/* Right: Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            type="button"
            onClick={handleAutofill}
            style={{
              background: '#10B981',
              border: 'none',
              borderRadius: '6px',
              padding: '5px 12px',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Sparkles size={13} />
            <span>Autofill</span>
          </button>

          <button
            type="button"
            onClick={() => setIsMobileFrame(!isMobileFrame)}
            style={{
              background: isMobileFrame ? '#4F46E5' : 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '6px',
              padding: '5px 10px',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {isMobileFrame ? <Monitor size={14} /> : <Smartphone size={14} />}
            <span>{isMobileFrame ? 'Desktop' : 'Mobile'}</span>
          </button>
        </div>
      </div>

      {/* Main Flow Viewport */}
      {isMobileFrame ? (
        <div style={{
          flex: 1,
          background: '#E5E7EB',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '40px 16px'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '430px',
            background: '#FFFFFF',
            borderRadius: '44px',
            border: '10px solid #111827',
            boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '844px'
          }}>
            <FridaysHeader
              progress={progress}
              language={language}
              onToggleLanguage={(lang) => setLanguage(lang)}
            />
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {renderCurrentFrame()}
            </div>
            <FridaysFooter
              showBack={currentStep !== '1'}
              onBack={goToPrev}
              onContinue={goToNext}
              continueText={currentStep === '10' ? 'Confirm Care Plan' : 'Continue'}
            />
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <FridaysHeader
            progress={progress}
            language={language}
            onToggleLanguage={(lang) => setLanguage(lang)}
          />
          <main style={{ flex: 1 }}>
            {renderCurrentFrame()}
          </main>
          <FridaysFooter
            showBack={currentStep !== '1'}
            onBack={goToPrev}
            onContinue={goToNext}
            continueText={currentStep === '10' ? 'Confirm Care Plan' : 'Continue'}
          />
        </div>
      )}
    </div>
  );
}
