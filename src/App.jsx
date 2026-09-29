import React, { useState } from 'react';
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
import Screen18WeightLossGoal from './components/Screen18WeightLossGoal';
import Screen19Motivation from './components/Screen19Motivation';
import Screen20DailyRoutine from './components/Screen20DailyRoutine';
import Screen21Lifestyle from './components/Screen21Lifestyle';
import Screen22Ethnicity from './components/Screen22Ethnicity';
import Screen23PhotoID from './components/Screen23PhotoID';
import Screen24Shipping from './components/Screen24Shipping';
import Screen25Appointment from './components/Screen25Appointment';
import Screen26IntakeConfirmed from './components/Screen26IntakeConfirmed';
import { Smartphone, Monitor, Sparkles, CheckCheck } from 'lucide-react';

const SCREEN_LIST = [
  // Phase 1: Get Started
  { key: '1', label: 'Screen 1: Create Your Ongo Account' },
  { key: '2', label: 'Screen 2: Tell Us About You' },
  { key: '3', label: 'Screen 3: Check Your Starting Point' },
  // Phase 2: Initial Clinical Screening
  { key: '4', label: 'Screen 4: Important Health Questions' },
  { key: '5', label: 'Screen 5: Have You Used a GLP-1 Before?' },
  { key: '5.1', label: 'Branch 5.1: Which GLP-1 Medication?' },
  { key: '5.2', label: 'Branch 5.2: GLP-1 Dose & Frequency' },
  { key: '5.3', label: 'Branch 5.3: GLP-1 Experience' },
  { key: '5.4', label: 'Branch 5.4: Upload Previous Prescription' },
  // Phase 3: Confidence & Clinical Trust
  { key: '6', label: 'Screen 6: Your Initial Result' },
  { key: '7', label: 'Screen 7: Meet Your Physician' },
  { key: '8', label: 'Screen 8: Explore Your Treatment Options' },
  // Phase 4: Treatment Plan & Payment
  { key: '9', label: 'Screen 9: Choose Your Treatment Plan' },
  { key: '10', label: 'Screen 10: Complete Your Payment' },
  { key: '11', label: 'Screen 11: Payment Confirmed' },
  // Phase 5: Comprehensive Clinical Intake
  { key: '12', label: 'Screen 12: Tell Us About Your Health' },
  { key: '13', label: 'Screen 13: What Medications Are You Taking?' },
  { key: '14', label: 'Screen 14: Do You Have Any Allergies?' },
  { key: '15', label: 'Screen 15: Tell Us About Your Weight Journey' },
  { key: '16', label: 'Screen 16: What Have You Tried Before?' },
  { key: '17', label: 'Screen 17: Have You Had Weight-Loss Surgery?' },
  // Phase 6: Goals & Motivation
  { key: '18', label: 'Screen 18: What Would You Like to Achieve?' },
  { key: '19', label: "Screen 19: What's Driving You Right Now?" },
  // Phase 7: Lifestyle
  { key: '20', label: 'Screen 20: What Does a Typical Week Look Like?' },
  { key: '21', label: 'Screen 21: Lifestyle' },
  { key: '22', label: 'Screen 22: Ethnicity' },
  // Phase 8: Verification & Fulfillment
  { key: '23', label: 'Screen 23: Verify Your Identity' },
  { key: '24', label: 'Screen 24: Shipping Information' },
  // Phase 9: Appointment
  { key: '25', label: 'Screen 25: Book Your Consultation' },
  // Phase 10: Confirmation
  { key: '26', label: 'Screen 26: Appointment Confirmed' },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('1');
  const [isMobileFrame, setIsMobileFrame] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    agreeTerms: true,
    agreeMarketing: false,
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
    calculatedBmi: '25.8',
    safetyAnswers: {},
    noneApply: true,
    usedGLP1Before: true,
    glp1Meds: [],
    glp1Dose: '0.5 mg',
    glp1UnitsAmount: '10 units (0.25 mL)',
    glp1Frequency: 'Once weekly',
    glp1Experience: 'Positive',
    glp1StoppingReason: 'Cost',
    glp1LastDate: '2024-04-10',
    uploadedRxName: '', // Starts empty for a real user
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
    }
  });

  const updateFormData = (fields) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const handleAutofill = () => {
    setFormData({
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
      calculatedBmi: '25.8',
      safetyAnswers: {},
      noneApply: true,
      usedGLP1Before: true,
      glp1Meds: ['Ozempic®'],
      glp1Dose: '0.5 mg',
      glp1UnitsAmount: '10 units',
      glp1Frequency: 'Once weekly',
      glp1Experience: 'Positive',
      glp1StoppingReason: 'Cost',
      glp1LastDate: '2024-05-15',
      uploadedRxName: 'prescription_sample.jpg',
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
      }
    });
  };

  const getHeaderBackAction = () => {
    switch (currentScreen) {
      case '1': return null;
      case '2': return () => setCurrentScreen('1');
      case '3': return () => setCurrentScreen('2');
      case '4': return () => setCurrentScreen('3'); // Bypassed 3T
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
      case '26': return () => setCurrentScreen('25');
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
        return <Screen18WeightLossGoal formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('19')} onBack={() => setCurrentScreen('17')} />;
      case '19':
        return <Screen19Motivation formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('20')} onBack={() => setCurrentScreen('18')} />;
      case '20':
        return <Screen20DailyRoutine formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('21')} onBack={() => setCurrentScreen('19')} />;
      case '21':
        return <Screen21Lifestyle formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('22')} onBack={() => setCurrentScreen('20')} />;
      case '22':
        return <Screen22Ethnicity formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('23')} onBack={() => setCurrentScreen('21')} />;
      case '23':
        return <Screen23PhotoID formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('24')} onBack={() => setCurrentScreen('22')} />;
      case '24':
        return <Screen24Shipping formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('25')} onBack={() => setCurrentScreen('23')} />;
      case '25':
        return <Screen25Appointment formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('26')} onBack={() => setCurrentScreen('24')} />;
      case '26':
        return <Screen26IntakeConfirmed formData={formData} onNext={() => alert("Flow Complete! Navigating to dashboard...")} onBack={() => setCurrentScreen('25')} />;
      default:
        return <Screen1Account formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('2')} />;
    }
  };

  const backAction = getHeaderBackAction();

  return (
    <div className="app-viewport">
      <aside className="top-dev-toolbar" aria-label="Survey review and device controls">
        <div className="toolbar-brand">
          <Sparkles size={16} color="var(--color-primary-dark)" />
          <span>Ongo Flow Inspector</span>
        </div>

        <div className="toolbar-controls">
          <button type="button" className={`toolbar-btn ${currentScreen === '1' ? 'active' : ''}`} onClick={() => setCurrentScreen('1')}>📸 Screen 1</button>
          <button type="button" className={`toolbar-btn ${currentScreen === '2' ? 'active' : ''}`} onClick={() => setCurrentScreen('2')}>📸 Screen 2</button>
          <button type="button" className={`toolbar-btn ${currentScreen === '3' ? 'active' : ''}`} onClick={() => setCurrentScreen('3')}>📸 Screen 3</button>

          <select className="screen-select-dropdown" value={currentScreen} onChange={(e) => setCurrentScreen(e.target.value)} aria-label="Select screen to view">
            {SCREEN_LIST.map((s) => (
              <option key={s.key} value={s.key}>{s.label}</option>
            ))}
          </select>

          <button type="button" className="toolbar-btn" onClick={handleAutofill} title="Auto-fill sample patient survey data">
            <CheckCheck size={13} />
            <span>Autofill Demo</span>
          </button>

          <button type="button" className={`toolbar-btn ${isMobileFrame ? 'active' : ''}`} onClick={() => setIsMobileFrame(!isMobileFrame)} title="Toggle between mobile viewport frame and centered desktop layout">
            {isMobileFrame ? <Monitor size={13} /> : <Smartphone size={13} />}
            <span>{isMobileFrame ? 'Desktop (540px)' : 'Mobile Frame'}</span>
          </button>
        </div>
      </aside>

      <main className={`onboarding-shell ${isMobileFrame ? 'device-frame-mobile' : ''}`}>
        <Header showBack={backAction !== null} onBack={backAction} onLogoClick={() => setCurrentScreen('1')} />
        <div className="main-card-body">
          {renderCurrentScreen()}
        </div>
      </main>
    </div>
  );
}
