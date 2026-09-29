import React, { useState } from 'react';
import Header from './components/Header';
import TransitionScreen from './components/TransitionScreen';
import Screen1Account from './components/Screen1Account';
import Screen2AboutYou from './components/Screen2AboutYou';
import Screen3StartingPoint from './components/Screen3StartingPoint';
import Screen4SafetyChecks from './components/Screen4SafetyChecks';
import Screen5GLP1History from './components/Screen5GLP1History';
import Screen5bProducts from './components/Screen5bProducts';
import Screen5cDosage from './components/Screen5cDosage';
import Screen5dPrescription from './components/Screen5dPrescription';
import Screen6InitialResult from './components/Screen6InitialResult';
import Screen7MeetPhysician from './components/Screen7MeetPhysician';
import Screen8TreatmentOptions from './components/Screen8TreatmentOptions';
import Screen9TreatmentPlan from './components/Screen9TreatmentPlan';
import Screen10Payment from './components/Screen10Payment';
import Screen11Confirmed from './components/Screen11Confirmed';
import { Smartphone, Monitor, Sparkles, CheckCheck } from 'lucide-react';

const SCREEN_LIST = [
  { key: '1', label: 'Screen 1: Find Treatment (Account)' },
  { key: '2', label: 'Screen 2: Complete Profile' },
  { key: '3', label: 'Screen 3: Eligibility & BMI' },
  { key: 'transition', label: 'Reference Screen (Transition)' },
  { key: '4', label: 'Screen 4: Safety Checks' },
  { key: '5', label: 'Screen 5: Prior GLP-1? (Yes/No)' },
  { key: '5b', label: 'Screen 5b: Which GLP-1 Meds?' },
  { key: '5c', label: 'Screen 5c: Dose & Frequency' },
  { key: '5d', label: 'Screen 5d: Upload Prescription' },
  { key: '6', label: 'Screen 6: Your Initial Result' },
  { key: '7', label: 'Screen 7: Meet Your Physician' },
  { key: '8', label: 'Screen 8: Review Treatment Options' },
  { key: '9', label: 'Screen 9: Choose Treatment Plan' },
  { key: '10', label: 'Screen 10: Complete Payment' },
  { key: '11', label: 'Screen 11: Payment Confirmed' },
];

export default function App() {
  // Default to Screen 1 so user immediately sees the recreated design of screenshot 1
  const [currentScreen, setCurrentScreen] = useState('1');
  const [isMobileFrame, setIsMobileFrame] = useState(false);

  // Form State across the entire patient survey journey
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
    glp1Meds: ['Ozempic®', 'Wegovy®'],
    glp1Dose: '0.5 mg',
    glp1UnitsAmount: '10 units (0.25 mL)',
    glp1Frequency: 'Once weekly',
    glp1Experience: 'Positive',
    glp1StoppingReason: 'Cost',
    glp1LastDate: '2024-04-10',
    uploadedRxName: 'rx_wegovy_label.pdf',
    selectedTreatment: 'compounded-semaglutide',
    selectedTreatmentName: 'Compounded Semaglutide',
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
      selectedTreatment: 'compounded-semaglutide',
      selectedTreatmentName: 'Compounded Semaglutide',
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

  // Determine back navigation handler for Header
  const getHeaderBackAction = () => {
    switch (currentScreen) {
      case '1':
        return null;
      case '2':
        return () => setCurrentScreen('1');
      case '3':
        return () => setCurrentScreen('2');
      case 'transition':
        return () => setCurrentScreen('3');
      case '4':
        return () => setCurrentScreen('transition');
      case '5':
        return () => setCurrentScreen('4');
      case '5b':
        return () => setCurrentScreen('5');
      case '5c':
        return () => setCurrentScreen('5b');
      case '5d':
        return () => setCurrentScreen('5c');
      case '6':
        return () => setCurrentScreen(formData.usedGLP1Before ? '5d' : '5');
      case '7':
        return () => setCurrentScreen('6');
      case '8':
        return () => setCurrentScreen('7');
      case '9':
        return () => setCurrentScreen('8');
      case '10':
        return () => setCurrentScreen('9');
      case '11':
        return () => setCurrentScreen('10');
      default:
        return null;
    }
  };

  // Screen routing
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case '1':
        return (
          <Screen1Account
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentScreen('2')}
          />
        );
      case '2':
        return (
          <Screen2AboutYou
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentScreen('3')}
            onBack={() => setCurrentScreen('1')}
          />
        );
      case '3':
        return (
          <Screen3StartingPoint
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentScreen('transition')}
            onBack={() => setCurrentScreen('2')}
          />
        );
      case 'transition':
        return (
          <TransitionScreen
            onContinue={() => setCurrentScreen('4')}
          />
        );
      case '4':
        return (
          <Screen4SafetyChecks
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentScreen('5')}
            onBack={() => setCurrentScreen('transition')}
          />
        );
      case '5':
        return (
          <Screen5GLP1History
            formData={formData}
            updateFormData={updateFormData}
            onNext={(branchAction) => {
              if (branchAction === 'branch-products') {
                setCurrentScreen('5b');
              } else {
                setCurrentScreen('6');
              }
            }}
            onBack={() => setCurrentScreen('4')}
          />
        );
      case '5b':
        return (
          <Screen5bProducts
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentScreen('5c')}
            onBack={() => setCurrentScreen('5')}
          />
        );
      case '5c':
        return (
          <Screen5cDosage
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentScreen('5d')}
            onBack={() => setCurrentScreen('5b')}
          />
        );
      case '5d':
        return (
          <Screen5dPrescription
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentScreen('6')}
            onBack={() => setCurrentScreen('5c')}
          />
        );
      case '6':
        return (
          <Screen6InitialResult
            formData={formData}
            onNext={() => setCurrentScreen('7')}
            onBack={() => setCurrentScreen(formData.usedGLP1Before ? '5d' : '5')}
          />
        );
      case '7':
        return (
          <Screen7MeetPhysician
            formData={formData}
            onNext={() => setCurrentScreen('8')}
            onBack={() => setCurrentScreen('6')}
          />
        );
      case '8':
        return (
          <Screen8TreatmentOptions
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentScreen('9')}
            onBack={() => setCurrentScreen('7')}
          />
        );
      case '9':
        return (
          <Screen9TreatmentPlan
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentScreen('10')}
            onBack={() => setCurrentScreen('8')}
          />
        );
      case '10':
        return (
          <Screen10Payment
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentScreen('11')}
            onBack={() => setCurrentScreen('9')}
          />
        );
      case '11':
        return (
          <Screen11Confirmed
            formData={formData}
            onRestart={() => setCurrentScreen('1')}
          />
        );
      default:
        return <Screen1Account formData={formData} updateFormData={updateFormData} onNext={() => setCurrentScreen('2')} />;
    }
  };

  const backAction = getHeaderBackAction();

  return (
    <div className="app-viewport">
      {/* Top Reviewer Controls & Screen Switcher */}
      <aside className="top-dev-toolbar" aria-label="Survey review and device controls">
        <div className="toolbar-brand">
          <Sparkles size={16} color="var(--color-primary-dark)" />
          <span>Ongo Flow Inspector</span>
        </div>

        <div className="toolbar-controls">
          {/* Quick jump buttons for Screenshots 1, 2, 3 */}
          <button
            type="button"
            className={`toolbar-btn ${currentScreen === '1' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('1')}
          >
            📸 Screen 1
          </button>
          <button
            type="button"
            className={`toolbar-btn ${currentScreen === '2' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('2')}
          >
            📸 Screen 2
          </button>
          <button
            type="button"
            className={`toolbar-btn ${currentScreen === '3' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('3')}
          >
            📸 Screen 3
          </button>

          {/* Jump to any screen dropdown */}
          <select
            className="screen-select-dropdown"
            value={currentScreen}
            onChange={(e) => setCurrentScreen(e.target.value)}
            aria-label="Select screen to view"
          >
            {SCREEN_LIST.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>

          {/* Autofill Demo */}
          <button
            type="button"
            className="toolbar-btn"
            onClick={handleAutofill}
            title="Auto-fill sample patient survey data"
          >
            <CheckCheck size={13} />
            <span>Autofill Demo</span>
          </button>

          {/* Device Frame Viewport Toggle */}
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

      {/* Main Onboarding Container */}
      <main className={`onboarding-shell ${isMobileFrame ? 'device-frame-mobile' : ''}`}>
        {/* Compact Dark Green Ongo Header with Back Button (if not on screen 1) */}
        <Header 
          showBack={backAction !== null} 
          onBack={backAction} 
          onLogoClick={() => setCurrentScreen('1')}
        />

        {/* Card Body with Warm Cream Background */}
        <div className="main-card-body">
          {renderCurrentScreen()}
        </div>
      </main>
    </div>
  );
}
