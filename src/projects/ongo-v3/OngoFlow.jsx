import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Screen1Account from './components/Screen1Account';
import Screen2AboutYou from './components/Screen2AboutYou';
import Screen3Appointment from './components/Screen3Appointment';
import Screen4ReviewDetails from './components/Screen4ReviewDetails';
import Screen5Confirmed from './components/Screen5Confirmed';
import { Smartphone, Monitor, Sparkles, ArrowLeft, RefreshCw } from 'lucide-react';

const getInitialScreen = () => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const screen = params.get('screen');
    if (['1', '2', '3', '4', '5', '6'].includes(screen)) {
      return screen === '6' ? '5' : screen;
    }
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

const DEFAULT_FORM_DATA = {
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
  appointmentDate: null,
  formattedAppointmentDate: 'Thursday, October 1, 2026',
  appointmentTime: '10:30 AM',
  timezone: 'MDT',
  noneApply: true,
  safetyAnswers: {}
};

export default function OngoFlowV3({ onBackToWelcome }) {
  const [currentScreen, setCurrentScreen] = useState(getInitialScreen);
  const [isMobileFrame, setIsMobileFrame] = useState(getInitialMobile);
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const headerRef = useRef(null);

  // Sync screen to URL query param
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

  // Sync mobile frame to URL query param
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('mobile') !== String(isMobileFrame)) {
        params.set('mobile', String(isMobileFrame));
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, [isMobileFrame]);

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleNextScreen = () => {
    const nextNum = parseInt(currentScreen, 10) + 1;
    if (nextNum <= 5) {
      setCurrentScreen(String(nextNum));
    }
  };

  const handlePrevScreen = () => {
    const prevNum = parseInt(currentScreen, 10) - 1;
    if (prevNum >= 1) {
      setCurrentScreen(String(prevNum));
    } else if (onBackToWelcome) {
      onBackToWelcome();
    }
  };

  const handleAutofillDemo = () => {
    const apptDate = new Date();
    apptDate.setDate(apptDate.getDate() + 3);
    while (apptDate.getDay() === 0 || apptDate.getDay() === 6) {
      apptDate.setDate(apptDate.getDate() + 1);
    }

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
      appointmentDate: apptDate.toISOString(),
      formattedAppointmentDate: new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).format(apptDate),
      appointmentTime: '10:30 AM',
      timezone: 'MDT',
      noneApply: true,
      safetyAnswers: {}
    });
  };

  const handleReset = () => {
    setFormData(DEFAULT_FORM_DATA);
    setCurrentScreen('1');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #F4F7F4 0%, #FFFFFF 100%)',
      fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>

      {/* Top QA & Direct Screen Controller Bar */}
      <div style={{
        background: '#1F2937',
        color: '#FFFFFF',
        padding: '10px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            type="button"
            onClick={onBackToWelcome}
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: 'none',
              borderRadius: '8px',
              padding: '6px 12px',
              color: '#FFFFFF',
              fontSize: '12.5px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <ArrowLeft size={14} />
            <span>Project Hub</span>
          </button>

          <span style={{ fontSize: '13px', fontWeight: 700, color: '#A7F3D0' }}>
            🌿 Ongo V3 Hub (5 Screens)
          </span>
        </div>

        {/* Screen Picker Dropdown & Quick Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          
          <label htmlFor="v3-screen-picker" style={{ fontSize: '12.5px', color: '#D1D5DB' }}>
            Screen:
          </label>
          <select
            id="v3-screen-picker"
            value={currentScreen}
            onChange={(e) => setCurrentScreen(e.target.value)}
            style={{
              background: '#374151',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '5px 12px',
              fontSize: '12.5px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <option value="1">Screen 1: Account / Login (V1 Screen 1)</option>
            <option value="2">Screen 2: Profile Details (V1 Screen 2)</option>
            <option value="3">Screen 3: Appointment Date &amp; Time</option>
            <option value="4">Screen 4: Review &amp; Confirm Details (Edit options)</option>
            <option value="5">Screen 5: Appointment Confirmed</option>
          </select>

          {/* Autofill QA */}
          <button
            type="button"
            onClick={handleAutofillDemo}
            style={{
              background: '#065F46',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
            title="Autofill Demo Patient Profile & Selected Slot"
          >
            <Sparkles size={13} color="#FDE68A" />
            <span>Autofill QA</span>
          </button>

          {/* Reset */}
          <button
            type="button"
            onClick={handleReset}
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: '#D1D5DB',
              border: 'none',
              borderRadius: '8px',
              padding: '6px 10px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
            title="Reset to default values"
          >
            <RefreshCw size={12} />
            <span>Reset</span>
          </button>

          {/* Device Frame Viewport Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileFrame(!isMobileFrame)}
            style={{
              background: isMobileFrame ? '#2563EB' : 'rgba(255,255,255,0.1)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {isMobileFrame ? <Smartphone size={14} /> : <Monitor size={14} />}
            <span>{isMobileFrame ? 'Mobile Frame' : 'Desktop View'}</span>
          </button>

        </div>
      </div>

      {/* Main Flow Content Container */}
      <div style={{
        padding: isMobileFrame ? '24px 16px 60px' : '0 16px 60px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        
        {/* If Mobile Frame is toggled, wrap in iPhone frame simulator */}
        <div style={isMobileFrame ? {
          width: '390px',
          minHeight: '844px',
          background: '#FFFFFF',
          borderRadius: '44px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3), 0 0 0 10px #1F2937, 0 0 0 12px #374151',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          margin: '20px 0'
        } : {
          width: '100%',
          maxWidth: '840px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          
          {/* Header Component */}
          <Header
            ref={headerRef}
            currentStep={currentScreen === '6' ? 5 : parseInt(currentScreen, 10)}
            showBack={currentScreen !== '1' && currentScreen !== '5' && currentScreen !== '6'}
            onBack={handlePrevScreen}
            onLogoClick={() => setCurrentScreen('1')}
          />

          {/* Screen 1: Login / Account creation from V1 Screen 1 */}
          {currentScreen === '1' && (
            <div style={{ padding: isMobileFrame ? '16px' : '28px 16px', display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Screen1Account
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNextScreen}
              />
            </div>
          )}

          {/* Screen 2: Profile details from V1 Screen 2 */}
          {currentScreen === '2' && (
            <div style={{ padding: isMobileFrame ? '16px' : '28px 16px', display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Screen2AboutYou
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNextScreen}
                onBack={handlePrevScreen}
              />
            </div>
          )}

          {/* Screen 3: Appointment date and time */}
          {currentScreen === '3' && (
            <div style={{ padding: isMobileFrame ? '16px' : '28px 16px' }}>
              <Screen3Appointment
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNextScreen}
                onBack={handlePrevScreen}
              />
            </div>
          )}

          {/* Screen 4: Review and confirm details (with edit options) */}
          {currentScreen === '4' && (
            <div style={{ padding: isMobileFrame ? '16px' : '28px 16px' }}>
              <Screen4ReviewDetails
                formData={formData}
                onConfirm={() => setCurrentScreen('5')}
                onBack={handlePrevScreen}
                onEditSection={(sectionKey) => setCurrentScreen(sectionKey)}
              />
            </div>
          )}

          {/* Screen 5 / Screen 6: Appointment with care team confirmed */}
          {(currentScreen === '5' || currentScreen === '6') && (
            <div style={{ padding: isMobileFrame ? '16px' : '28px 16px' }}>
              <Screen5Confirmed
                formData={formData}
                onBackToWelcome={onBackToWelcome}
              />
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
