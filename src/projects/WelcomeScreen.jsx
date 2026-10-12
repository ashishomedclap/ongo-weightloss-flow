import React from 'react';
import { 
  FolderGit2, 
  Sparkles, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Scale, 
  SlidersHorizontal,
  ChevronRight,
  BookOpenCheck,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function WelcomeScreen({ onSelectProject }) {
  return (
    <div style={{ minHeight: '100vh', background: '#F8F9F8', padding: '40px 20px', fontFamily: 'inherit' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* Top Header Badge */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '24px',
            background: '#DDF2DF',
            color: '#1F4F3D',
            fontSize: '13px',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            <Sparkles size={15} />
            <span>Telehealth Flow Comparison & Study Hub</span>
          </div>

          <h1 style={{ fontSize: '36px', fontWeight: 800, color: '#111827', margin: '0 0 12px', letterSpacing: '-0.02em' }}>
            Select Project
          </h1>
          <p style={{ fontSize: '16px', color: '#6B7280', maxWidth: '580px', margin: '0 auto', lineHeight: '1.5' }}>
            Choose a telehealth flow to review, test with automated autofill demo data, or analyze comparative UX patterns against industry competitors.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          
          {/* Card 1: Ongo Flow */}
          <div 
            onClick={() => onSelectProject('ongo')}
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '2px solid #3A7D63',
              boxShadow: '0 12px 32px rgba(31, 79, 61, 0.08)',
              padding: '32px 28px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(31, 79, 61, 0.14)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(31, 79, 61, 0.08)';
            }}
          >
            <div style={{ position: 'absolute', top: '16px', right: '16px', background: '#E8F5E9', color: '#1F4F3D', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.04em' }}>
              PRIMARY PROTOTYPE
            </div>

            <div>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: '#1F4F3D',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Sparkles size={26} />
              </div>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>
                Ongo Weight Loss Flow
              </h2>
              <p style={{ fontSize: '14.5px', color: '#4B5563', lineHeight: '1.5', margin: '0 0 20px' }}>
                Complete end-to-end 25-screen clinical intake flow with patient verification, medical eligibility, physician matching, plan checkout, and live calendar booking.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                <span style={{ fontSize: '12px', background: '#F3F4F6', color: '#374151', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>25 Screens</span>
                <span style={{ fontSize: '12px', background: '#F3F4F6', color: '#374151', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>Autofill Demo</span>
                <span style={{ fontSize: '12px', background: '#F3F4F6', color: '#374151', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>Mobile Frame Toggle</span>
                <span style={{ fontSize: '12px', background: '#F3F4F6', color: '#374151', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>Clinical Safety Gates</span>
              </div>
            </div>

            <button
              type="button"
              className="cta-button-pill active"
              style={{
                width: '100%',
                background: '#1F4F3D',
                color: '#FFF',
                border: 'none',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontWeight: 700,
                fontSize: '15px'
              }}
            >
              <span>Launch Ongo Flow</span>
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Card 2: Competitor Survey */}
          <div 
            onClick={() => onSelectProject('competitor')}
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
              padding: '32px 28px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(15, 23, 42, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 23, 42, 0.05)';
            }}
          >
            <div style={{ position: 'absolute', top: '16px', right: '16px', background: '#EAEAF2', color: '#000045', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.04em' }}>
              COMPETITOR BENCHMARK
            </div>

            <div>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: '#000045',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <span style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', fontFamily: "'Instrument Sans', sans-serif" }}>
                  mochi
                </span>
              </div>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#000045', margin: '0 0 8px' }}>
                Join Mochi Flow
              </h2>
              <p style={{ fontSize: '14.5px', color: '#4B5563', lineHeight: '1.5', margin: '0 0 20px' }}>
                Exact 1:1 replica of Join Mochi's clinical eligibility survey, matching their deep navy theme, Instrument Sans typography, progress bar, Trustpilot rating, and step-by-step logic.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                <span style={{ fontSize: '12px', background: '#000045', color: '#FFF', padding: '4px 10px', borderRadius: '12px', fontWeight: 700 }}>Frames 1–10 Complete</span>
                <span style={{ fontSize: '12px', background: '#F3F4F6', color: '#000045', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>Real Transformation Results (Frame 7)</span>
                <span style={{ fontSize: '12px', background: '#F3F4F6', color: '#000045', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>Treatment Selector (Frame 6)</span>
                <span style={{ fontSize: '12px', background: '#F3F4F6', color: '#000045', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>State & Demographics (Frames 8–10)</span>
              </div>
            </div>

            <button
              type="button"
              className="cta-button-pill active"
              style={{
                width: '100%',
                background: '#000045',
                color: '#FFF',
                border: 'none',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontWeight: 700,
                fontSize: '15px'
              }}
            >
              <span>Launch Join Mochi Flow</span>
              <ArrowRight size={17} />
            </button>
          </div>

        </div>

        {/* Feature Comparison Highlights Box */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E5E7EB',
          padding: '24px 28px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
        }}>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpenCheck size={18} color="#1F4F3D" />
            Comparison Study Framework
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#1F4F3D' }}>
                <ShieldCheck size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: '#111827', marginBottom: '2px' }}>Clinical Gate Rigor</div>
                <div style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.4' }}>Observe differences in medical safety questions and physician matching visibility.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#2563EB' }}>
                <Zap size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: '#111827', marginBottom: '2px' }}>Conversion Velocity</div>
                <div style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.4' }}>Compare rapid drop-in questionnaires vs comprehensive trusted patient intake.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#D97706' }}>
                <Scale size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: '#111827', marginBottom: '2px' }}>Pricing Transparency</div>
                <div style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.4' }}>Inspect subscription + Rx vs bundled transparent pricing models.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
