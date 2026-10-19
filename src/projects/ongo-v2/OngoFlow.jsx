import React, { useState, useEffect, useRef } from 'react';

const getInitialScreen = () => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const screen = params.get('screen');
    if (screen) return screen;
  }
  return '1';
};

const getInitialMobile = () => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    return params.get('mobile') === 'true';
  }
  return false;
};

import Header from './components/Header';
import Screen1Account from './components/Screen1Account';
import Screen2AboutYou from './components/Screen2AboutYou';
import Screen3StartingPoint from './components/Screen3StartingPoint';
import Screen4HealthQuestions from './components/Screen4HealthQuestions';
import Screen5GLP1History from './components/Screen5GLP1History';
import Screen5aProducts from './components/Screen5aProducts';
import Screen5bDosage from './components/Screen5bDosage';
import Screen5cExperience from './components/Screen5cExperience';
import Screen5dPrescription from './components/Screen5dPrescription';
import Screen6InitialResult from './components/Screen6InitialResult';
import Screen7MeetPhysician from './components/Screen7MeetPhysician';
import Screen8TreatmentOptions from './components/Screen8TreatmentOptions';
import Screen9TreatmentPlan from './components/Screen9TreatmentPlan';
import Screen10Payment from './components/Screen10Payment';
import Screen11PaymentConfirmed from './components/Screen11PaymentConfirmed';
import Screen12HealthConditions from './components/Screen12HealthConditions';
import Screen13Medications from './components/Screen13Medications';
import Screen14Allergies from './components/Screen14Allergies';
import Screen15WeightJourney from './components/Screen15WeightJourney';
import Screen16WeightLossAttempts from './components/Screen16WeightLossAttempts';
import Screen17WeightLossSurgery from './components/Screen17WeightLossSurgery';
import Screen18Motivation from './components/Screen18Motivation';
import Screen19DailyRoutine from './components/Screen19DailyRoutine';
import Screen20Lifestyle from './components/Screen20Lifestyle';
import Screen21Ethnicity from './components/Screen21Ethnicity';
import Screen22PhotoID from './components/Screen22PhotoID';
import Screen23Shipping from './components/Screen23Shipping';
import Screen24Appointment from './components/Screen24Appointment';
import Screen25IntakeConfirmed from './components/Screen25IntakeConfirmed';
import { Smartphone, Monitor, Sparkles, CheckCheck, ArrowLeft } from 'lucide-react';

const SCREEN_LIST = [
  // Phase 1: Get Started
  { key: '1', label: 'Screen 1: Start Your Ongo Weight-Loss Journey' },
  { key: '2', label: 'Screen 2: Tell Us a Little About You' },
  { key: '3', label: "Screen 3: Let's Check Your Starting Point" },
  // Phase 2: Initial Clinical Screening
  { key: '4', label: 'Screen 4: A Few Important Health Questions' },
  { key: '5', label: 'Screen 5: Have You Used a GLP-1 Medication Before?' },
  { key: '5.1', label: 'Branch 5.1: Which GLP-1 Medication Have You Used?' },
  { key: '5.2', label: 'Branch 5.2: What Was Your Most Recent Dose?' },
  { key: '5.3', label: 'Branch 5.3: Main Reason You Stopped or Changed Treatment?' },
  { key: '5.4', label: 'Branch 5.4: Have Your Previous Prescription Handy?' },
  // Phase 3: Confidence & Clinical Trust
  { key: '6', label: 'Screen 6: Good News — You May Be Eligible for GLP-1' },
  { key: '7', label: 'Screen 7: Meet Your Physician' },
  { key: '8', label: 'Screen 8: Which Treatment Option Interests You Most?' },
  // Phase 4: Treatment Plan & Payment
  { key: '9', label: 'Screen 9: Choose Your Treatment Plan' },
  { key: '10', label: 'Screen 10: Complete Your Payment' },
  { key: '11', label: 'Screen 11: Payment Confirmed' },
  // Phase 5: Comprehensive Clinical Intake
  { key: '12', label: "Screen 12: Let's Look at Your Broader Health" },
  { key: '13', label: 'Screen 13: Do You Take Any Medication?' },
  { key: '14', label: 'Screen 14: Do You Have Any Known Allergies?' },
  { key: '15', label: 'Screen 15: Can You Share Your Weight Journey So Far?' },
  { key: '16', label: 'Screen 16: What Have You Tried Before to Lose Weight?' },
  { key: '17', label: 'Screen 17: Have You Had Any Weight Loss Surgery?' },
  // Phase 6: Goals & Motivation
  { key: '18', label: "Screen 18: What's Making You Want to Start Now?" },
  // Phase 7: Lifestyle
  { key: '19', label: "Screen 19: Let's Start with Your Daily Routine" },
  { key: '20', label: 'Screen 20: And a Few More Lifestyle Questions' },
  { key: '21', label: 'Screen 21: How Do You Describe Your Ethnicity?' },
  // Phase 8: Verification & Fulfillment
  { key: '22', label: 'Screen 22: Upload Your Photo ID' },
  { key: '23', label: 'Screen 23: Where Should We Send Your Medication?' },
  // Phase 9: Appointment
  { key: '24', label: 'Screen 24: When Would You Like to Meet Your Physician?' },
  // Phase 10: Confirmation
  { key: '25', label: 'Screen 25: Appointment Confirmed' },
];

export default function OngoFlow({ onBackToWelcome }) {
  const [currentScreen, setCurrentScreen] = useState(getInitialScreen);
  const [isMobileFrame, setIsMobileFrame] = useState(getInitialMobile);
  const headerRef = useRef(null);
  const isFirstRender = useRef(true);

  // Automatically scroll up to the header section whenever the next screen shows up on mobile
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const checkIsMobile = () => {
      if (typeof window === 'undefined') return false;
      return (
        window.innerWidth <= 768 ||
        isMobileFrame ||
        Boolean(window.matchMedia && window.matchMedia('(max-width: 768px)').matches) ||
        ('ontouchstart' in window && window.innerWidth <= 1024) ||
        /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      );
    };

    const isMobile = checkIsMobile();

    const timer = setTimeout(() => {
      const headerElement = headerRef.current || document.getElementById('header-section');
      if (isMobile) {
        if (headerElement) {
          headerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (typeof window !== 'undefined' && window.scrollY > 100) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentScreen, isMobileFrame]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('screen') !== currentScreen) {
        params.set('screen', currentScreen);
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, [currentScreen]);

  const createAutofillData = () => {
    const apptDate = new Date();
    apptDate.setDate(apptDate.getDate() + 2);
    while (apptDate.getDay() === 0 || apptDate.getDay() === 6) {
      apptDate.setDate(apptDate.getDate() + 1);
    }
    apptDate.setHours(10, 30, 0, 0);

    return {
      email: 'sarah.miller@example.com',
      password: 'SecurePassword123!',
      agreeTerms: true,
      agreeMarketing: true,
      firstName: 'Sarah',
      lastName: 'Miller',
      gender: 'Female',
      dob: '1988-06-14',
      state: 'California',
      phone: '+1(888) 655–5267',
      unit: 'Imperial',
      feet: 5,
      inches: 10,
      lbs: 180,
      cm: 178,
      kg: 81.6,
      calculatedBmi: '25.8',
      safetyAnswers: {},
      noneApply: true,
      usedGLP1Before: true,
      glp1Meds: ['Ozempic®'],
      glp1Dose: '0.5 mg',
      glp1UnitsAmount: '10 units',
      glp1Frequency: 'Once weekly',
      glp1Experience: 8,
      glp1StoppingReason: 'cost',
      glp1StoppingReasonOther: '',
      glp1LastDate: '2024-05-15',
      uploadedRxName: 'prescription_sample.jpg',
      uploadedRxSize: '2.4 MB',
      selectedTreatment: 'physician-recommend',
      selectedTreatmentName: "Physician's Choice",
      selectedPlanId: '3-months',
      selectedPlan: {
        id: '3-months',
        duration: '3 MONTHS',
        title: 'Momentum',
        monthlyPrice: 199,
        savingsText: 'Save $50/mo',
        totalText: '$597 total billed for 3 months',
        isRecommended: true
      },
      paymentMethod: 'card',
      orderTotal: 537,
      paymentDate: new Date().toLocaleDateString(),
      healthConditions: {
        selected: ['highBpCholesterol', 'pcos'],
        noneApply: false,
        otherCondition: ''
      },
      takesMedication: false,
      medicationDetails: '',
      hasAllergies: false,
      allergyDetails: '',
      highestWeight: '210',
      lowestWeight: '150',
      goalWeight: '140',
      waistCircumference: '35',
      weightLossAttempts: ['ketoDiets', 'intermittentFasting', 'regularExercise'],
      hadSurgery: false,
      weightLossSurgeries: [],
      otherWeightLossSurgery: '',
      weightLossGoal: 'improve-health',
      motivations: ['confident', 'energy', 'health'],
      routine: {
        meals: '3',
        water: '4-8 cups',
        sleep: '7-8',
        exercise: '3-4'
      },
      lifestyle: {
        fastFood: '1-2',
        sugaryDrinks: '0',
        alcohol: '1-3',
        drugs: 'None'
      },
      stressLevel: 6,
      ethnicity: 'caucasian',
      otherEthnicity: '',
      idPhotoName: 'driver_license.jpg',
      idPhotoSize: '1.2 MB',
      idPhoto: true,
      shippingAddress: {
        street: '123 Market St',
        apt: 'Suite 400',
        city: 'San Francisco',
        zip: '94105',
        state: 'California'
      },
      appointmentDate: apptDate.toISOString(),
      appointmentTime: '10:30 AM'
    };
  };

  const createEmptyFormData = () => ({
    email: '',
    password: '',
    agreeTerms: false,
    agreeMarketing: false,
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    state: '',
    phone: '',
    unit: 'Imperial',
    feet: '',
    inches: '',
    lbs: '',
    cm: '',
    kg: '',
    calculatedBmi: null,
    safetyAnswers: {},
    noneApply: false,
    usedGLP1Before: null,
    glp1Meds: [],
    glp1Dose: '',
    glp1UnitsAmount: '',
    glp1Frequency: '',
    glp1Experience: 5,
    glp1StoppingReason: '',
    glp1StoppingReasonOther: '',
    glp1LastDate: '',
    uploadedRxName: '',
    uploadedRxSize: '',
    selectedTreatment: '',
    selectedTreatmentName: '',
    selectedPlanId: '',
    selectedPlan: null,
    paymentMethod: 'card',
    orderTotal: 0,
    paymentDate: '',
    healthConditions: {
      selected: [],
      noneApply: false,
      otherCondition: ''
    },
    takesMedication: null,
    medicationDetails: '',
    hasAllergies: null,
    allergyDetails: '',
    highestWeight: '',
    lowestWeight: '',
    goalWeight: '',
    waistCircumference: '',
    weightLossAttempts: [],
    hadSurgery: null,
    weightLossSurgeries: [],
    otherWeightLossSurgery: '',
    weightLossGoal: '',
    motivations: [],
    routine: {
      meals: '',
      water: '',
      sleep: '',
      exercise: ''
    },
    lifestyle: {
      fastFood: '',
      sugaryDrinks: '',
      alcohol: '',
      drugs: ''
    },
    stressLevel: 5,
    ethnicity: '',
    otherEthnicity: '',
    idPhotoName: '',
    idPhotoSize: '',
    idPhoto: null,
    shippingAddress: {
      street: '',
      apt: '',
      city: '',
      zip: '',
      state: ''
    },
    appointmentDate: '',
    appointmentTime: ''
  });

  const getInitialFormData = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autofill') === '1' || params.get('autofill') === 'true') {
        return createAutofillData();
      }
    }
    return createEmptyFormData();
  };

  const [formData, setFormData] = useState(getInitialFormData);

  const updateFormData = (fields) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const [autofillKey, setAutofillKey] = useState(0);

  const handleAutofill = () => {
    setFormData(createAutofillData());
    setAutofillKey(prev => prev + 1);
  };

  const getHeaderBackAction = () => {
    switch (currentScreen) {
      case '1': return null;
      case '2': return () => setCurrentScreen('1');
      case '3': return () => setCurrentScreen('2');
      case '4': return () => setCurrentScreen('3');
      case '5': return () => setCurrentScreen('4');
      case '5.1': return () => setCurrentScreen('5');
      case '5.2': return () => setCurrentScreen('5.1');
      case '5.3': return () => setCurrentScreen('5.2');
      case '5.4': return () => setCurrentScreen('5.3');
      case '6': return () => setCurrentScreen(formData.usedGLP1Before ? '5.4' : '5');
      case '7': return () => setCurrentScreen('6');
      case '8': return () => setCurrentScreen('7');
      case '9': return () => setCurrentScreen('8');
      case '10': return () => setCurrentScreen('9');
      case '11': return () => setCurrentScreen('10');
      case '12': return () => setCurrentScreen('11');
      case '13': return () => setCurrentScreen('12');
      case '14': return () => setCurrentScreen('13');
      case '15': return () => setCurrentScreen('14');
      case '16': return () => setCurrentScreen('15');
      case '17': return () => setCurrentScreen('16');
      case '18': return () => setCurrentScreen('17');
      case '19': return () => setCurrentScreen('18');
      case '20': return () => setCurrentScreen('19');
      case '21': return () => setCurrentScreen('20');
      case '22': return () => setCurrentScreen('21');
      case '23': return () => setCurrentScreen('22');
      case '24': return () => setCurrentScreen('23');
      case '25': return () => setCurrentScreen('24');
      default: return null;
    }
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case '1':
        return <Screen1Account formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('2')} />;
      case '2':
        return <Screen2AboutYou formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('3')} onBack={() => setCurrentScreen('1')} />;
      case '3':
        return <Screen3StartingPoint formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('4')} onBack={() => setCurrentScreen('2')} />;
      case '4':
        return <Screen4HealthQuestions formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('5')} onBack={() => setCurrentScreen('3')} />;
      case '5':
        return <Screen5GLP1History formData={formData} updateFormData={updateFormData} onNext={(branchAction) => {
            if (branchAction === 'branch-products') {
              setCurrentScreen('5.1');
            } else {
              setCurrentScreen('6');
            }
          }} onBack={() => setCurrentScreen('4')} />;
      case '5.1':
        return <Screen5aProducts formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('5.2')} onBack={() => setCurrentScreen('5')} />;
      case '5.2':
        return <Screen5bDosage formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('5.3')} onBack={() => setCurrentScreen('5.1')} />;
      case '5.3':
        return <Screen5cExperience formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('5.4')} onBack={() => setCurrentScreen('5.2')} />;
      case '5.4':
        return <Screen5dPrescription formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('6')} onBack={() => setCurrentScreen('5.3')} />;
      case '6':
        return <Screen6InitialResult formData={formData} onNext={() => setCurrentScreen('7')} onBack={() => setCurrentScreen(formData.usedGLP1Before ? '5.4' : '5')} />;
      case '7':
        return <Screen7MeetPhysician formData={formData} onNext={() => setCurrentScreen('8')} onBack={() => setCurrentScreen('6')} />;
      case '8':
        return <Screen8TreatmentOptions formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('9')} onBack={() => setCurrentScreen('7')} />;
      case '9':
        return <Screen9TreatmentPlan formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('10')} onBack={() => setCurrentScreen('8')} />;
      case '10':
        return <Screen10Payment formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('11')} onBack={() => setCurrentScreen('9')} />;
      case '11':
        return <Screen11PaymentConfirmed formData={formData} onNext={() => setCurrentScreen('12')} onRestart={() => setCurrentScreen('1')} />;
      case '12':
        return <Screen12HealthConditions formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('13')} onBack={() => setCurrentScreen('11')} />;
      case '13':
        return <Screen13Medications formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('14')} onBack={() => setCurrentScreen('12')} />;
      case '14':
        return <Screen14Allergies formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('15')} onBack={() => setCurrentScreen('13')} />;
      case '15':
        return <Screen15WeightJourney formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('16')} onBack={() => setCurrentScreen('14')} />;
      case '16':
        return <Screen16WeightLossAttempts formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('17')} onBack={() => setCurrentScreen('15')} />;
      case '17':
        return <Screen17WeightLossSurgery formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('18')} onBack={() => setCurrentScreen('16')} />;
      case '18':
        return <Screen18Motivation formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('19')} onBack={() => setCurrentScreen('17')} />;
      case '19':
        return <Screen19DailyRoutine formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('20')} onBack={() => setCurrentScreen('18')} />;
      case '20':
        return <Screen20Lifestyle formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('21')} onBack={() => setCurrentScreen('19')} />;
      case '21':
        return <Screen21Ethnicity formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('22')} onBack={() => setCurrentScreen('20')} />;
      case '22':
        return <Screen22PhotoID formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('23')} onBack={() => setCurrentScreen('21')} />;
      case '23':
        return <Screen23Shipping formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('24')} onBack={() => setCurrentScreen('22')} />;
      case '24':
        return <Screen24Appointment formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('25')} onBack={() => setCurrentScreen('23')} />;
      case '25':
        return <Screen25IntakeConfirmed formData={formData} onNext={() => setCurrentScreen('1')} onBack={() => setCurrentScreen('24')} />;
      default:
        return <Screen1Account formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('2')} />;
    }
  };

  const backAction = getHeaderBackAction();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#F6F4EB',
      fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      {/* Dev & Flow Controller Bar */}
      <div style={{
        background: '#11261F',
        color: '#FFFFFF',
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        fontSize: '13px',
        borderBottom: '1px solid #1F4F3D',
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
              gap: '6px',
              fontFamily: 'inherit'
            }}
          >
            <ArrowLeft size={14} />
            <span>Study Hub</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 700, color: '#F9FAFB' }}>
              ✨ Ongo Weight Loss — V2 Survey
            </span>
            <span style={{
              background: '#2F8968',
              color: '#FFFFFF',
              fontSize: '11px',
              fontWeight: 800,
              padding: '2px 7px',
              borderRadius: '6px',
              letterSpacing: '0.04em'
            }}>
              V2 WORKSPACE
            </span>
          </div>
        </div>

        {/* Center: Screen Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#A3C2B3', fontSize: '12px' }}>Select Screen:</span>
          <select
            value={currentScreen}
            onChange={(e) => setCurrentScreen(e.target.value)}
            style={{
              background: '#1A3F33',
              color: '#FFFFFF',
              border: '1px solid #2F8968',
              borderRadius: '6px',
              padding: '5px 12px',
              fontSize: '12.5px',
              fontWeight: 600,
              cursor: 'pointer',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          >
            {SCREEN_LIST.map((s) => (
              <option key={s.key} value={s.key} style={{ background: '#174B38', color: '#FFFFFF' }}>{s.label}</option>
            ))}
          </select>
        </div>

        {/* Right: Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            type="button"
            onClick={handleAutofill}
            style={{
              background: '#2F8968',
              border: 'none',
              borderRadius: '6px',
              padding: '5px 12px',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'inherit'
            }}
          >
            <Sparkles size={13} />
            <span>Autofill</span>
          </button>

          <button
            type="button"
            onClick={() => setIsMobileFrame(!isMobileFrame)}
            style={{
              background: isMobileFrame ? '#1F4F3D' : 'rgba(255,255,255,0.1)',
              border: isMobileFrame ? '1px solid #2F8968' : 'none',
              borderRadius: '6px',
              padding: '5px 10px',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'inherit'
            }}
          >
            {isMobileFrame ? <Monitor size={14} /> : <Smartphone size={14} />}
            <span>{isMobileFrame ? 'Desktop' : 'Mobile'}</span>
          </button>
        </div>
      </div>

      {/* Main Flow Viewport */}
      <div className="app-viewport" style={{ flex: 1, padding: isMobileFrame ? '24px 16px 60px' : '24px 20px 60px', width: '100%', boxSizing: 'border-box' }}>
        <main className={`onboarding-shell ${isMobileFrame ? 'device-frame-mobile' : ''}`}>
          <Header 
            ref={headerRef} 
            showBack={backAction !== null} 
            onBack={backAction} 
            onLogoClick={() => setCurrentScreen('1')} 
          />
          <div className="main-card-body" key={autofillKey}>
            {renderCurrentScreen()}
          </div>
        </main>
      </div>
    </div>
  );
}
