import React, { useEffect, useState, useRef } from 'react';
import { Sliders, Play, Pause, RotateCcw, ChevronRight, Check } from 'lucide-react';
import OngoClockIcon from './OngoClockIcon';

export const PRELOADER_STAGES = [
  { id: 1, name: 'Draw Circle', desc: '1. Continuous 360° circular outline draws in' },
  { id: 2, name: 'Solid Ring', desc: '2. Full closed circular contour stabilizes' },
  { id: 3, name: 'Crop Arcs', desc: '3. Cuts open to form open silhouette arcs' },
  { id: 4, name: 'Coral Accent', desc: '4. Signature coral gauge accent highlights' },
  { id: 5, name: 'Scale Ticks', desc: '5. Radial measurement ticks pop into place' },
  { id: 6, name: 'Needle @ High', desc: '6. Needle materializes at high limit (~180° / 4:30)' },
  { id: 7, name: 'Sweep (CCW)', desc: '7. Needle sweeps anti-clockwise across top arch' },
  { id: 8, name: 'Logo Rest', desc: '8. Needle cushions into initial logo resting mark (10:30)' }
];

/**
 * ScreenPreloader - Interactive branded transition screen with expanded 8-stage
 * motion calibration sequence and built-in Refinement Studio.
 */
export default function ScreenPreloader({ 
  onComplete, 
  duration = 2800,
  title = "Setting up your account...",
  subtitle = "Preparing your personalized clinical consultation",
  stepText = "Step 1 of 25 • Account Initialized",
  allowRefine = true,
  initialRefine = false
}) {
  const [progress, setProgress] = useState(15);
  const [activeStageId, setActiveStageId] = useState(1);
  const [isRefining, setIsRefining] = useState(initialRefine);
  const [manualStage, setManualStage] = useState(null); // null = auto play, 1-8 = frozen stage
  const [playbackSpeed, setPlaybackSpeed] = useState(1); // 0.25, 0.5, 1, 2
  const [highAngle, setHighAngle] = useState(180); // higher end angle (4:30)
  const [restAngle, setRestAngle] = useState(0);   // logo rest angle (10:30)
  const [animKey, setAnimKey] = useState(0); // for instant replay re-mounting
  const [isPaused, setIsPaused] = useState(false);

  const effectiveDuration = duration / playbackSpeed;

  // Auto-play progress and stage tracking
  useEffect(() => {
    if (manualStage !== null || isPaused) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const ratio = Math.min(1, elapsed / effectiveDuration);
      const pct = Math.round(15 + ratio * 85);
      setProgress(pct);

      // Determine active stage based on animation timeline percentage
      if (ratio < 0.12) setActiveStageId(1);
      else if (ratio < 0.22) setActiveStageId(2);
      else if (ratio < 0.32) setActiveStageId(3);
      else if (ratio < 0.42) setActiveStageId(4);
      else if (ratio < 0.54) setActiveStageId(5);
      else if (ratio < 0.66) setActiveStageId(6);
      else if (ratio < 0.88) setActiveStageId(7);
      else setActiveStageId(8);
    }, 35);

    const timer = setTimeout(() => {
      clearInterval(interval);
      if (!isRefining && onComplete) {
        onComplete();
      }
    }, effectiveDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [effectiveDuration, onComplete, isRefining, manualStage, isPaused, animKey]);

  const handleStageSelect = (stageId) => {
    setIsRefining(true);
    setIsPaused(true);
    setManualStage(stageId);
    setActiveStageId(stageId);
  };

  const handleReplay = () => {
    setManualStage(null);
    setIsPaused(false);
    setProgress(15);
    setActiveStageId(1);
    setAnimKey(prev => prev + 1);
  };

  const handleContinue = () => {
    if (onComplete) onComplete();
  };

  return (
    <div className="screen-preloader-container fade-in" role="status" aria-live="polite">
      {/* Animated Weight Machine Scale Badge */}
      <div className="preloader-clock-wrapper">
        <div className="preloader-clock-pulse-ring" />
        <div className="preloader-clock-badge" title="Calibrating Weight Scale">
          <OngoClockIcon 
            key={animKey}
            size={68} 
            animated={manualStage === null && !isPaused} 
            animationType="sequence"
            stage={manualStage}
            highAngle={highAngle}
            restAngle={restAngle}
            duration={effectiveDuration / 1000}
            coralColor="#FF6B4A" 
            whiteColor="#FFFFFF" 
          />
        </div>
      </div>

      {/* Text Info */}
      <div className="preloader-text-area">
        <h2 className="preloader-title">{title}</h2>
        <p className="preloader-subtitle">
          {manualStage !== null 
            ? PRELOADER_STAGES.find(s => s.id === manualStage)?.desc 
            : subtitle}
        </p>
      </div>

      {/* Progress Track */}
      <div className="preloader-progress-track">
        <div 
          className="preloader-progress-fill" 
          style={{ width: `${manualStage !== null ? (manualStage / 8) * 100 : progress}%` }}
        />
      </div>

      {/* Step Badge */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span className="preloader-step-badge">
          {manualStage !== null 
            ? `Stage ${manualStage} of 8 • Frozen for Refinement`
            : `Stage ${activeStageId} of 8 • ${PRELOADER_STAGES.find(s => s.id === activeStageId)?.name}`}
        </span>

        {allowRefine && (
          <button 
            type="button"
            onClick={() => setIsRefining(!isRefining)}
            style={{
              background: isRefining ? 'var(--color-primary-dark)' : 'rgba(23, 75, 56, 0.08)',
              color: isRefining ? '#ffffff' : '#174B38',
              border: 'none',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s ease'
            }}
          >
            <Sliders size={12} />
            <span>{isRefining ? 'Hide Refiner' : 'Refine States'}</span>
          </button>
        )}
      </div>

      {/* Expanded States Timeline Scrubber */}
      <div style={{
        marginTop: '18px',
        width: '100%',
        maxWidth: '520px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        background: '#ffffff',
        border: '1px solid var(--color-border)',
        borderRadius: '16px',
        padding: '14px 16px',
        boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#174B38' }}>
            8 Calibration States
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              type="button"
              onClick={handleReplay}
              title="Replay sequence"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '3px 8px',
                fontSize: '11px',
                fontWeight: 600,
                color: '#174B38',
                background: 'rgba(23, 75, 56, 0.08)',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <RotateCcw size={11} /> Replay
            </button>
            {isRefining && (
              <button
                type="button"
                onClick={handleContinue}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 10px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#ffffff',
                  background: 'var(--color-primary-dark)',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Proceed <ChevronRight size={11} />
              </button>
            )}
          </div>
        </div>

        {/* State Pills */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '6px'
        }}>
          {PRELOADER_STAGES.map((s) => {
            const isActive = activeStageId === s.id;
            const isSelected = manualStage === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => handleStageSelect(s.id)}
                title={s.desc}
                style={{
                  padding: '6px 4px',
                  borderRadius: '8px',
                  fontSize: '10.5px',
                  fontWeight: 600,
                  textAlign: 'center',
                  border: isSelected 
                    ? '2px solid #FF6B4A' 
                    : isActive 
                      ? '1px solid #174B38' 
                      : '1px solid var(--color-border)',
                  background: isSelected 
                    ? 'rgba(255, 107, 74, 0.12)' 
                    : isActive 
                      ? 'rgba(23, 75, 56, 0.08)' 
                      : '#FAFAF8',
                  color: isSelected ? '#FF6B4A' : '#174B38',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ fontSize: '9px', opacity: 0.7 }}>State {s.id}</div>
                <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.name}</div>
              </button>
            );
          })}
        </div>

        {/* Interactive Refinement Controls Panel */}
        {isRefining && (
          <div style={{
            marginTop: '10px',
            paddingTop: '12px',
            borderTop: '1px dashed var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {/* Speed & Mode */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Playback Speed:</span>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[0.25, 0.5, 1, 2].map((spd) => (
                  <button
                    key={spd}
                    type="button"
                    onClick={() => {
                      setPlaybackSpeed(spd);
                      handleReplay();
                    }}
                    style={{
                      padding: '3px 8px',
                      fontSize: '10.5px',
                      fontWeight: 600,
                      borderRadius: '6px',
                      border: playbackSpeed === spd ? '1px solid #174B38' : '1px solid var(--color-border)',
                      background: playbackSpeed === spd ? '#174B38' : '#ffffff',
                      color: playbackSpeed === spd ? '#ffffff' : '#174B38',
                      cursor: 'pointer'
                    }}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            </div>

            {/* Needle Angle Controls */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', fontWeight: 600, marginBottom: '4px' }}>
                  <span>High Limit Angle:</span>
                  <span style={{ color: '#FF6B4A' }}>{highAngle}°</span>
                </div>
                <input 
                  type="range" 
                  min="90" 
                  max="270" 
                  value={highAngle} 
                  onChange={(e) => setHighAngle(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#FF6B4A', cursor: 'pointer' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', fontWeight: 600, marginBottom: '4px' }}>
                  <span>Logo Rest Angle:</span>
                  <span style={{ color: '#174B38' }}>{restAngle}°</span>
                </div>
                <input 
                  type="range" 
                  min="-45" 
                  max="45" 
                  value={restAngle} 
                  onChange={(e) => setRestAngle(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#174B38', cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
