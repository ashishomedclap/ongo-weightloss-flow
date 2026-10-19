import React, { useState } from 'react';
import fridaysLogoImg from '../assets/fridays/fridays-logo.png';
import OngoClockIcon from './ongo/components/OngoClockIcon';
import MochiLogo from './join mochi/MochiLogo';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Monitor, 
  Scale, 
  BookOpenCheck, 
  ShieldCheck, 
  Zap, 
  Calendar, 
  CreditCard, 
  UserCheck, 
  ExternalLink, 
  Layers, 
  Activity, 
  FileText, 
  ChevronRight, 
  Clock, 
  Check, 
  ArrowUpRight,
  TrendingDown,
  Building,
  Stethoscope,
  Pill,
  Search,
  Filter
} from 'lucide-react';

export default function StartScreen({ onSelectProject }) {
  const [filterCategory, setFilterCategory] = useState('all'); // 'all', 'ongo', 'competitors'
  const [searchQuery, setSearchQuery] = useState('');

  // Handle direct screen jumps
  const handleLaunchOngoScreen = (screenKey) => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      params.set('project', 'ongo');
      params.set('screen', screenKey);
      window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
    }
    onSelectProject('ongo');
  };

  const handleLaunchOngoV2Screen = (screenKey) => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      params.set('project', 'ongo-v2');
      params.set('screen', screenKey);
      window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
    }
    onSelectProject('ongo-v2');
  };

  const handleLaunchFridaysFrame = (frameNum) => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      params.set('project', 'join-fridays');
      params.set('frame', String(frameNum));
      window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
    }
    onSelectProject('join-fridays');
  };

  const handleLaunchMochiFrame = (frameKey) => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      params.set('project', 'join-mochi');
      params.set('frame', frameKey);
      window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
    }
    onSelectProject('join-mochi');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #F5F7F5 0%, #FFFFFF 100%)',
      fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      color: '#111827',
      padding: '40px 20px 80px'
    }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        
        {/* ========================================================= */}
        {/* HERO HEADER SECTION                                       */}
        {/* ========================================================= */}
        <header style={{ textAlign: 'center', marginBottom: '44px' }}>
          
          {/* Top Category Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '999px',
            background: 'rgba(31, 79, 61, 0.08)',
            border: '1px solid rgba(31, 79, 61, 0.18)',
            color: '#1F4F3D',
            fontSize: '12.5px',
            fontWeight: 800,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '18px'
          }}>
            <Sparkles size={14} color="#1F4F3D" />
            <span>Telehealth Flow Comparison & Clinical Study Portal</span>
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#111827',
            margin: '0 0 16px',
            letterSpacing: '-0.03em'
          }}>
            Telehealth Intake & Competitor Study Hub
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '16.5px',
            lineHeight: 1.55,
            color: '#4B5563',
            maxWidth: '680px',
            margin: '0 auto 28px'
          }}>
            Inspect, test, and benchmark the complete end-to-end clinical onboarding funnels, medical screening logic, and prescription checkout flows.
          </p>

          {/* Quick Metrics Bar */}
          <div style={{
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '12px',
            padding: '12px 20px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E5E7EB',
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
            maxWidth: '720px',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <div style={{ padding: '6px 10px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#1F4F3D' }}>2 Sections</div>
              <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600 }}>Ongo & Competitors</div>
            </div>
            <div style={{ padding: '6px 10px', textAlign: 'center', borderLeft: '1px solid #F3F4F6' }}>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#2563EB' }}>4 Full Flows</div>
              <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600 }}>V1, V2 & Competitors</div>
            </div>
            <div style={{ padding: '6px 10px', textAlign: 'center', borderLeft: '1px solid #F3F4F6' }}>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#059669' }}>89 Screens</div>
              <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600 }}>Interactive Coverage</div>
            </div>
            <div style={{ padding: '6px 10px', textAlign: 'center', borderLeft: '1px solid #F3F4F6' }}>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#D97706' }}>Autofill Demo</div>
              <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600 }}>Automated 1-Click QA</div>
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setFilterCategory('all')}
              style={{
                padding: '7px 18px',
                borderRadius: '999px',
                fontSize: '13px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                background: filterCategory === 'all' ? '#111827' : '#E5E7EB',
                color: filterCategory === 'all' ? '#FFFFFF' : '#4B5563',
                transition: 'all 0.15s ease'
              }}
            >
              All Projects (4)
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('ongo')}
              style={{
                padding: '7px 18px',
                borderRadius: '999px',
                fontSize: '13px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                background: filterCategory === 'ongo' ? '#1F4F3D' : '#E8F5E9',
                color: filterCategory === 'ongo' ? '#FFFFFF' : '#1F4F3D',
                transition: 'all 0.15s ease'
              }}
            >
              🌿 Ongo Weight Loss (2: V1 & V2)
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('competitors')}
              style={{
                padding: '7px 18px',
                borderRadius: '999px',
                fontSize: '13px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                background: filterCategory === 'competitors' ? '#374151' : '#F3F4F6',
                color: filterCategory === 'competitors' ? '#FFFFFF' : '#374151',
                transition: 'all 0.15s ease'
              }}
            >
              ⚖️ Competitors (2)
            </button>
          </div>
        </header>

        {/* ========================================================= */}
        {/* SECTION 1: ONGO WEIGHT LOSS                               */}
        {/* ========================================================= */}
        {(filterCategory === 'all' || filterCategory === 'ongo') && (
          <section style={{ marginBottom: '56px' }}>
            
            {/* Section Heading Banner */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              paddingBottom: '14px',
              borderBottom: '2px solid #DDF2DF',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: '#1F4F3D',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}>
                  <OngoClockIcon size={20} coralColor="#FF7B60" whiteColor="#FFFFFF" />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#111827', margin: 0, letterSpacing: '-0.02em' }}>
                      Ongo Weight Loss
                    </h2>
                    <span style={{
                      background: '#DDF2DF',
                      color: '#1F4F3D',
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '8px',
                      letterSpacing: '0.04em'
                    }}>
                      PRIMARY PROTOTYPE
                    </span>
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#6B7280', margin: '2px 0 0' }}>
                    Proprietary clinical intake flow with 25 screens, physician match, and appointment calendar
                  </p>
                </div>
              </div>

              <div style={{ fontSize: '12.5px', color: '#1F4F3D', fontWeight: 700, background: '#F0F9F2', padding: '6px 12px', borderRadius: '8px' }}>
                2 Flows: V1 Baseline &bull; V2 Active Workspace
              </div>
            </div>

            {/* Ongo Weight Loss Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
              
              {/* V1 Survey Card (Present) */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '2px solid #2F8968',
                boxShadow: '0 12px 32px rgba(31, 79, 61, 0.08)',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}>
                
                {/* Active Live Indicator Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#E8F5E9',
                  color: '#1B5E20',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  letterSpacing: '0.04em'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#2E7D32',
                    boxShadow: '0 0 0 3px rgba(46, 125, 50, 0.2)'
                  }} />
                  <span>V1 SURVEY • PRESENT</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                  
                  {/* Left Icon Accent */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '18px',
                    background: '#1F4F3D',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 8px 16px rgba(31, 79, 61, 0.2)'
                  }}>
                    <OngoClockIcon size={34} coralColor="#FF7B60" whiteColor="#FFFFFF" />
                  </div>

                  {/* Right Content */}
                  <div style={{ flex: 1, minWidth: '280px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', margin: 0 }}>
                        Ongo Weight Loss — V1 Survey
                      </h3>
                      <span style={{
                        background: '#1F4F3D',
                        color: '#FFF',
                        fontSize: '11.5px',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '6px'
                      }}>
                        25 Screens
                      </span>
                    </div>

                    <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.55, margin: '0 0 16px', maxWidth: '820px' }}>
                      The active 25-screen clinical intake survey with patient registration, BMI eligibility, dynamic past GLP-1 branching, physician matching profile, compounded medication selection ($299/mo), Stripe-style checkout, detailed medical history, lifestyle routine, government photo ID verification, and live physician calendar booking.
                    </p>

                    {/* Key Feature Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px' }}>
                      <span style={{ fontSize: '12px', background: '#F3F4F6', color: '#1F4F3D', padding: '5px 12px', borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <CheckCircle2 size={13} color="#2F8968" />
                        25 Interactive Screens
                      </span>
                      <span style={{ fontSize: '12px', background: '#F3F4F6', color: '#1F4F3D', padding: '5px 12px', borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <Zap size={13} color="#2F8968" />
                        Autofill Demo QA
                      </span>
                      <span style={{ fontSize: '12px', background: '#F3F4F6', color: '#1F4F3D', padding: '5px 12px', borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <UserCheck size={13} color="#2F8968" />
                        Physician Matching Video
                      </span>
                      <span style={{ fontSize: '12px', background: '#F3F4F6', color: '#1F4F3D', padding: '5px 12px', borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <CreditCard size={13} color="#2F8968" />
                        Plan & Checkout ($299/mo)
                      </span>
                      <span style={{ fontSize: '12px', background: '#F3F4F6', color: '#1F4F3D', padding: '5px 12px', borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <Calendar size={13} color="#2F8968" />
                        Live Calendar Booking
                      </span>
                      <span style={{ fontSize: '12px', background: '#F3F4F6', color: '#1F4F3D', padding: '5px 12px', borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <Smartphone size={13} color="#2F8968" />
                        Desktop & Mobile Device Frame
                      </span>
                    </div>

                    {/* Flow Phase Breadcrumbs Bar */}
                    <div style={{
                      background: '#F9FAF9',
                      border: '1px solid #E5E7EB',
                      borderRadius: '14px',
                      padding: '14px 18px',
                      marginBottom: '24px'
                    }}>
                      <div style={{ fontSize: '12px', fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                        V1 Survey 10-Phase Progression
                      </div>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        color: '#4B5563'
                      }}>
                        <span style={{ background: '#FFF', border: '1px solid #D1D5DB', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>1. Account</span>
                        <ChevronRight size={13} color="#9CA3AF" />
                        <span style={{ background: '#FFF', border: '1px solid #D1D5DB', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>2. Baseline & BMI</span>
                        <ChevronRight size={13} color="#9CA3AF" />
                        <span style={{ background: '#FFF', border: '1px solid #D1D5DB', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>3. GLP-1 History</span>
                        <ChevronRight size={13} color="#9CA3AF" />
                        <span style={{ background: '#FFF', border: '1px solid #D1D5DB', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>4. Eligibility</span>
                        <ChevronRight size={13} color="#9CA3AF" />
                        <span style={{ background: '#FFF', border: '1px solid #D1D5DB', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>5. Physician Match</span>
                        <ChevronRight size={13} color="#9CA3AF" />
                        <span style={{ background: '#FFF', border: '1px solid #D1D5DB', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>6. Plan & Payment</span>
                        <ChevronRight size={13} color="#9CA3AF" />
                        <span style={{ background: '#FFF', border: '1px solid #D1D5DB', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>7. Full Intake</span>
                        <ChevronRight size={13} color="#9CA3AF" />
                        <span style={{ background: '#FFF', border: '1px solid #D1D5DB', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>8. Routine</span>
                        <ChevronRight size={13} color="#9CA3AF" />
                        <span style={{ background: '#FFF', border: '1px solid #D1D5DB', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>9. Photo ID & Ship</span>
                        <ChevronRight size={13} color="#9CA3AF" />
                        <span style={{ background: '#E8F5E9', border: '1px solid #A5D6A7', color: '#1B5E20', padding: '3px 8px', borderRadius: '6px', fontWeight: 700 }}>10. Booking</span>
                      </div>
                    </div>

                    {/* CTAs and Deep Screen Launchers */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                      
                      {/* Primary Launch Button */}
                      <button
                        type="button"
                        onClick={() => onSelectProject('ongo')}
                        style={{
                          background: '#1F4F3D',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '14px',
                          padding: '13px 26px',
                          fontSize: '15px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          boxShadow: '0 4px 14px rgba(31, 79, 61, 0.28)',
                          transition: 'background 0.15s ease, transform 0.15s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#174032';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#1F4F3D';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <span>Launch Ongo V1 Survey</span>
                        <ArrowRight size={18} />
                      </button>

                      {/* Quick Screen Jump Buttons */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600 }}>Jump to:</span>
                        <button
                          type="button"
                          onClick={() => handleLaunchOngoScreen('1')}
                          style={{
                            background: '#F3F4F6',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '6px 10px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#374151',
                            cursor: 'pointer'
                          }}
                        >
                          Screen 1 (Start)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleLaunchOngoScreen('7')}
                          style={{
                            background: '#F3F4F6',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '6px 10px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#374151',
                            cursor: 'pointer'
                          }}
                        >
                          Screen 7 (Physician)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleLaunchOngoScreen('9')}
                          style={{
                            background: '#F3F4F6',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '6px 10px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#374151',
                            cursor: 'pointer'
                          }}
                        >
                          Screen 9 (Plan)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleLaunchOngoScreen('10')}
                          style={{
                            background: '#F3F4F6',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '6px 10px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#374151',
                            cursor: 'pointer'
                          }}
                        >
                          Screen 10 (Payment)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleLaunchOngoScreen('24')}
                          style={{
                            background: '#F3F4F6',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '6px 10px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#374151',
                            cursor: 'pointer'
                          }}
                        >
                          Screen 24 (Calendar)
                        </button>
                      </div>

                    </div>

                  </div>
                </div>

              </div>

              {/* V2 Survey Card (Active Workspace) */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '2px solid #10B981',
                boxShadow: '0 12px 32px rgba(16, 185, 129, 0.09)',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}>
                
                {/* Active V2 Status Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#ECFDF5',
                  color: '#065F46',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  letterSpacing: '0.04em'
                }}>
                  <Sparkles size={12} color="#059669" />
                  <span>V2 SURVEY • ACTIVE WORKSPACE</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                  
                  {/* Left Icon Accent */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '18px',
                    background: 'linear-gradient(135deg, #065F46 0%, #10B981 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 8px 16px rgba(16, 185, 129, 0.25)',
                    color: '#FFF'
                  }}>
                    <OngoClockIcon size={34} coralColor="#FCD34D" whiteColor="#FFFFFF" />
                  </div>

                  {/* Right Content */}
                  <div style={{ flex: 1, minWidth: '280px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', margin: 0 }}>
                        Ongo Weight Loss — V2 Survey
                      </h3>
                      <span style={{
                        background: '#065F46',
                        color: '#FFF',
                        fontSize: '11.5px',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '6px'
                      }}>
                        Ready for Updates
                      </span>
                    </div>

                    <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.55, margin: '0 0 16px', maxWidth: '820px' }}>
                      Dedicated V2 survey flow duplicated from V1, completely isolated in its own workspace (<code style={{ background: '#F3F4F6', padding: '2px 6px', borderRadius: '4px', fontSize: '13px' }}>src/projects/ongo-v2/</code>). Ready for your upcoming screen modifications, design changes, and flow adjustments in the next prompt.
                    </p>

                    {/* Key Feature Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px' }}>
                      <span style={{ fontSize: '12px', background: '#ECFDF5', color: '#065F46', padding: '5px 12px', borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <Sparkles size={13} color="#059669" />
                        Isolated V2 Workspace
                      </span>
                      <span style={{ fontSize: '12px', background: '#ECFDF5', color: '#065F46', padding: '5px 12px', borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <CheckCircle2 size={13} color="#059669" />
                        25 Interactive Screens Cloned
                      </span>
                      <span style={{ fontSize: '12px', background: '#ECFDF5', color: '#065F46', padding: '5px 12px', borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <Zap size={13} color="#059669" />
                        Full Autofill QA Included
                      </span>
                      <span style={{ fontSize: '12px', background: '#ECFDF5', color: '#065F46', padding: '5px 12px', borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <Smartphone size={13} color="#059669" />
                        Mobile & Desktop Toggles
                      </span>
                    </div>

                    {/* CTAs and Deep Screen Launchers */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                      
                      {/* Primary Launch Button */}
                      <button
                        type="button"
                        onClick={() => onSelectProject('ongo-v2')}
                        style={{
                          background: 'linear-gradient(135deg, #065F46 0%, #059669 100%)',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '14px',
                          padding: '13px 26px',
                          fontSize: '15px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          boxShadow: '0 4px 14px rgba(5, 150, 105, 0.28)',
                          transition: 'background 0.15s ease, transform 0.15s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-1px)';
                          e.currentTarget.style.boxShadow = '0 6px 18px rgba(5, 150, 105, 0.35)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 14px rgba(5, 150, 105, 0.28)';
                        }}
                      >
                        <Sparkles size={17} />
                        <span>Launch Ongo V2 Survey</span>
                        <ArrowRight size={18} />
                      </button>

                      {/* Quick Screen Jump Buttons */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600 }}>Jump in V2:</span>
                        <button
                          type="button"
                          onClick={() => handleLaunchOngoV2Screen('1')}
                          style={{
                            background: '#F3F4F6',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '6px 10px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#374151',
                            cursor: 'pointer'
                          }}
                        >
                          Screen 1 (Start)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleLaunchOngoV2Screen('7')}
                          style={{
                            background: '#F3F4F6',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '6px 10px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#374151',
                            cursor: 'pointer'
                          }}
                        >
                          Screen 7 (Physician)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleLaunchOngoV2Screen('9')}
                          style={{
                            background: '#F3F4F6',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '6px 10px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#374151',
                            cursor: 'pointer'
                          }}
                        >
                          Screen 9 (Plan)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleLaunchOngoV2Screen('10')}
                          style={{
                            background: '#F3F4F6',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '6px 10px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#374151',
                            cursor: 'pointer'
                          }}
                        >
                          Screen 10 (Payment)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleLaunchOngoV2Screen('24')}
                          style={{
                            background: '#F3F4F6',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '6px 10px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#374151',
                            cursor: 'pointer'
                          }}
                        >
                          Screen 24 (Calendar)
                        </button>
                      </div>

                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* SECTION 2: COMPETITORS                                    */}
        {/* ========================================================= */}
        {(filterCategory === 'all' || filterCategory === 'competitors') && (
          <section style={{ marginBottom: '56px' }}>
            
            {/* Section Heading Banner */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              paddingBottom: '14px',
              borderBottom: '2px solid #E5E7EB',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: '#111827',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}>
                  <Scale size={20} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#111827', margin: 0, letterSpacing: '-0.02em' }}>
                      Competitors
                    </h2>
                    <span style={{
                      background: '#F3F4F6',
                      color: '#374151',
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '8px',
                      letterSpacing: '0.04em'
                    }}>
                      2 BENCHMARKS AVAILABLE
                    </span>
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#6B7280', margin: '2px 0 0' }}>
                    Leading telehealth GLP-1 intake flows analyzed for conversion speed, pricing architecture, and clinical UX
                  </p>
                </div>
              </div>

              <div style={{ fontSize: '12.5px', color: '#4B5563', fontWeight: 600 }}>
                1. Join Fridays &bull; 2. Join Mochi
              </div>
            </div>

            {/* Competitors 2-Column Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
              
              {/* ============================================== */}
              {/* COMPETITOR 1: JOIN FRIDAYS                     */}
              {/* ============================================== */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(255, 94, 54, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 23, 42, 0.05)';
              }}
              >
                
                {/* Competitor Order Badge */}
                <div style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: '#FFF1EE',
                  color: '#FF5E36',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.04em'
                }}>
                  <span>COMPETITOR 1</span>
                </div>

                <div>
                  
                  {/* Fridays Logo Container */}
                  <div style={{
                    height: '52px',
                    padding: '0 16px',
                    borderRadius: '14px',
                    background: '#F4F7F2',
                    border: '1px solid #D3DECE',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <img
                      src={fridaysLogoImg}
                      alt="Join Fridays"
                      style={{
                        height: '24px',
                        width: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  {/* Title & Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#282F26', margin: 0 }}>
                      Join Fridays Flow
                    </h3>
                    <span style={{ fontSize: '11.5px', background: '#363F33', color: '#FFF', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                      10 Screens
                    </span>
                  </div>

                  <p style={{ fontSize: '14.5px', color: '#4B5563', lineHeight: 1.5, margin: '0 0 18px' }}>
                    Exact 10-screen clinical onboarding flow for Join Fridays. Focuses on rapid qualification, multi-month membership bundles ($99/mo to $249/3mo), video provider matchmaking, and fast GLP-1 checkout.
                  </p>

                  {/* Feature Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '22px' }}>
                    <span style={{ fontSize: '11.5px', background: '#F4F7F2', color: '#363F33', padding: '4px 10px', borderRadius: '10px', fontWeight: 600 }}>10 Screens Total</span>
                    <span style={{ fontSize: '11.5px', background: '#F4F7F2', color: '#363F33', padding: '4px 10px', borderRadius: '10px', fontWeight: 600 }}>Multi-Month Packages</span>
                    <span style={{ fontSize: '11.5px', background: '#F4F7F2', color: '#363F33', padding: '4px 10px', borderRadius: '10px', fontWeight: 600 }}>Provider Video Match</span>
                    <span style={{ fontSize: '11.5px', background: '#F4F7F2', color: '#363F33', padding: '4px 10px', borderRadius: '10px', fontWeight: 600 }}>Weight & BMI Graph</span>
                    <span style={{ fontSize: '11.5px', background: '#F4F7F2', color: '#363F33', padding: '4px 10px', borderRadius: '10px', fontWeight: 600 }}>Autofill Demo</span>
                  </div>

                  {/* Direct Screen Links */}
                  <div style={{
                    background: '#FAFAFA',
                    border: '1px solid #EEEEEE',
                    borderRadius: '12px',
                    padding: '10px 14px',
                    marginBottom: '22px',
                    fontSize: '12px'
                  }}>
                    <span style={{ color: '#6B7280', fontWeight: 600, marginRight: '8px' }}>Jump to Frame:</span>
                    <span 
                      onClick={() => handleLaunchFridaysFrame(1)} 
                      style={{ color: '#363F33', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', marginRight: '10px' }}
                    >
                      Frame 1 (Support)
                    </span>
                    <span 
                      onClick={() => handleLaunchFridaysFrame(7)} 
                      style={{ color: '#363F33', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', marginRight: '10px' }}
                    >
                      Frame 7 (Provider)
                    </span>
                    <span 
                      onClick={() => handleLaunchFridaysFrame(9)} 
                      style={{ color: '#363F33', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', marginRight: '10px' }}
                    >
                      Frame 9 (Pricing)
                    </span>
                    <span 
                      onClick={() => handleLaunchFridaysFrame(10)} 
                      style={{ color: '#363F33', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      Frame 10 (Checkout)
                    </span>
                  </div>
                </div>

                {/* Fridays CTA Button */}
                <button
                  type="button"
                  onClick={() => onSelectProject('join-fridays')}
                  style={{
                    width: '100%',
                    background: '#363F33',
                    color: '#FFFFFF',
                    border: 'none',
                    height: '48px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#282F26'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#363F33'; }}
                >
                  <span>Launch Join Fridays Flow</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* ============================================== */}
              {/* COMPETITOR 2: JOIN MOCHI                       */}
              {/* ============================================== */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 69, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 23, 42, 0.05)';
              }}
              >
                
                {/* Competitor Order Badge */}
                <div style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: '#EAEAF2',
                  color: '#000045',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.04em'
                }}>
                  <span>COMPETITOR 2</span>
                </div>

                <div>
                  
                  {/* Mochi Logo Container */}
                  <div style={{
                    height: '52px',
                    padding: '0 18px',
                    borderRadius: '14px',
                    background: '#000045',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <MochiLogo width={62} height={30} color="#FFFFFF" />
                  </div>

                  {/* Title & Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#000045', margin: 0 }}>
                      Join Mochi Flow
                    </h3>
                    <span style={{ fontSize: '11.5px', background: '#000045', color: '#FFF', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                      29 Frames
                    </span>
                  </div>

                  <p style={{ fontSize: '14.5px', color: '#4B5563', lineHeight: 1.5, margin: '0 0 18px' }}>
                    Exact 1:1 replica of Join Mochi's clinical eligibility survey across 29 frames. Features introductory offer modal, weight loss projection curve, Trustpilot rating, insurance eligibility card upload, and subscription checkout.
                  </p>

                  {/* Feature Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '22px' }}>
                    <span style={{ fontSize: '11.5px', background: '#F0F4FF', color: '#000045', padding: '4px 10px', borderRadius: '10px', fontWeight: 600 }}>Frames 1–29 Complete</span>
                    <span style={{ fontSize: '11.5px', background: '#F0F4FF', color: '#000045', padding: '4px 10px', borderRadius: '10px', fontWeight: 600 }}>6-Month Weight Projection</span>
                    <span style={{ fontSize: '11.5px', background: '#F0F4FF', color: '#000045', padding: '4px 10px', borderRadius: '10px', fontWeight: 600 }}>Trustpilot 4.5/5 Proof</span>
                    <span style={{ fontSize: '11.5px', background: '#F0F4FF', color: '#000045', padding: '4px 10px', borderRadius: '10px', fontWeight: 600 }}>Insurance Upload Check</span>
                    <span style={{ fontSize: '11.5px', background: '#F0F4FF', color: '#000045', padding: '4px 10px', borderRadius: '10px', fontWeight: 600 }}>Account & Plan Selection</span>
                  </div>

                  {/* Direct Screen Links */}
                  <div style={{
                    background: '#FAFAFA',
                    border: '1px solid #EEEEEE',
                    borderRadius: '12px',
                    padding: '10px 14px',
                    marginBottom: '22px',
                    fontSize: '12px'
                  }}>
                    <span style={{ color: '#6B7280', fontWeight: 600, marginRight: '8px' }}>Jump to Frame:</span>
                    <span 
                      onClick={() => handleLaunchMochiFrame('frame-1')} 
                      style={{ color: '#000045', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', marginRight: '10px' }}
                    >
                      Frame 1 (Offer)
                    </span>
                    <span 
                      onClick={() => handleLaunchMochiFrame('frame-13')} 
                      style={{ color: '#000045', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', marginRight: '10px' }}
                    >
                      Frame 13 (Projection)
                    </span>
                    <span 
                      onClick={() => handleLaunchMochiFrame('frame-26')} 
                      style={{ color: '#000045', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', marginRight: '10px' }}
                    >
                      Frame 26 (Account)
                    </span>
                    <span 
                      onClick={() => handleLaunchMochiFrame('frame-28')} 
                      style={{ color: '#000045', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      Frame 28 (Plans)
                    </span>
                  </div>
                </div>

                {/* Mochi CTA Button */}
                <button
                  type="button"
                  onClick={() => onSelectProject('join-mochi')}
                  style={{
                    width: '100%',
                    background: '#000045',
                    color: '#FFFFFF',
                    border: 'none',
                    height: '48px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#0a0a5c'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#000045'; }}
                >
                  <span>Launch Join Mochi Flow</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* SECTION 3: COMPARISON MATRIX & ARCHITECTURE               */}
        {/* ========================================================= */}
        <section style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid #E5E7EB',
          padding: '32px',
          boxShadow: '0 4px 18px rgba(0,0,0,0.03)'
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <BookOpenCheck size={22} color="#1F4F3D" />
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#111827', margin: 0 }}>
              Telehealth Architecture Comparison Matrix
            </h3>
          </div>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 24px', lineHeight: 1.5 }}>
            Analyze strategic differences in intake depth, physician trust generation, pricing disclosure, and checkout friction.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '13.5px',
              textAlign: 'left'
            }}>
              <thead>
                <tr style={{ background: '#F9FAFB', borderBottom: '2px solid #E5E7EB' }}>
                  <th style={{ padding: '12px 16px', color: '#374151', fontWeight: 800 }}>Feature / Dimension</th>
                  <th style={{ padding: '12px 16px', color: '#1F4F3D', fontWeight: 800, background: '#F0F9F2' }}>
                    🌿 Ongo (V1 Survey)
                  </th>
                  <th style={{ padding: '12px 16px', color: '#363F33', fontWeight: 800 }}>
                    🟠 1. Join Fridays
                  </th>
                  <th style={{ padding: '12px 16px', color: '#000045', fontWeight: 800 }}>
                    🟣 2. Join Mochi
                  </th>
                </tr>
              </thead>
              <tbody>
                
                <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: '#111827' }}>Total Screen Count</td>
                  <td style={{ padding: '14px 16px', color: '#1F4F3D', fontWeight: 700, background: '#FAFCFA' }}>
                    25 Screens + 4 branches
                  </td>
                  <td style={{ padding: '14px 16px', color: '#4B5563' }}>10 Structured Screens</td>
                  <td style={{ padding: '14px 16px', color: '#4B5563' }}>29 Single-question Frames</td>
                </tr>

                <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: '#111827' }}>Clinical Intake Model</td>
                  <td style={{ padding: '14px 16px', color: '#1F4F3D', background: '#FAFCFA' }}>
                    Full clinical intake (medical history, routine, allergies, ID upload)
                  </td>
                  <td style={{ padding: '14px 16px', color: '#4B5563' }}>
                    Rapid qualification questionnaire with focused health screening
                  </td>
                  <td style={{ padding: '14px 16px', color: '#4B5563' }}>
                    Micro-step eligibility quiz + 6-month projection calculation
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: '#111827' }}>Physician Introduction</td>
                  <td style={{ padding: '14px 16px', color: '#1F4F3D', background: '#FAFCFA' }}>
                    Profile card, credentials & video introduction before plan selection
                  </td>
                  <td style={{ padding: '14px 16px', color: '#4B5563' }}>
                    Provider video card with clinical philosophy and consultation details
                  </td>
                  <td style={{ padding: '14px 16px', color: '#4B5563' }}>
                    Provider communication preference quiz + care team profile
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: '#111827' }}>Pricing Architecture</td>
                  <td style={{ padding: '14px 16px', color: '#1F4F3D', background: '#FAFCFA' }}>
                    Transparent all-in compounded GLP-1 ($299/mo) bundled plan
                  </td>
                  <td style={{ padding: '14px 16px', color: '#4B5563' }}>
                    Multi-month tiering ($99/mo to $249/3mo) + compound GLP-1
                  </td>
                  <td style={{ padding: '14px 16px', color: '#4B5563' }}>
                    Subscription ($79/mo) + medication copay or compounding tiers
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: '#111827' }}>Verification & Safety Gates</td>
                  <td style={{ padding: '14px 16px', color: '#1F4F3D', background: '#FAFCFA' }}>
                    In-flow government photo ID upload, shipping address, GLP-1 past dose check
                  </td>
                  <td style={{ padding: '14px 16px', color: '#4B5563' }}>
                    State licensing verification, medical exclusions checklist
                  </td>
                  <td style={{ padding: '14px 16px', color: '#4B5563' }}>
                    Insurance card photo upload, prior medication history, safety exclusions
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: '#111827' }}>Appointment & Fulfillment</td>
                  <td style={{ padding: '14px 16px', color: '#1F4F3D', fontWeight: 700, background: '#FAFCFA' }}>
                    Live calendar booking slot selector with confirmation receipt
                  </td>
                  <td style={{ padding: '14px 16px', color: '#4B5563' }}>
                    Post-checkout video consultation scheduling via provider dashboard
                  </td>
                  <td style={{ padding: '14px 16px', color: '#4B5563' }}>
                    Post-payment provider matching and asynchronous message portal
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </section>

      </div>
    </div>
  );
}
