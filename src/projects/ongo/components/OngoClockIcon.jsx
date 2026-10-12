import React from 'react';

/**
 * OngoScaleIcon (OngoClockIcon) - Weight machine scale dial icon from the Ongo logo.
 * ViewBox is 0 0 171.58 171.58.
 *
 * Expanded 8-Stage Scale Calibration Sequence:
 * 1. Full Circle Draw-In (stroke draws full 360° ring)
 * 2. Solid Circle Hold (closed circular base)
 * 3. Crop into Silhouette Arcs (circle splits into open gauge arcs)
 * 4. Coral Brand Accent (bottom-right arc shifts to signature coral gauge)
 * 5. Scale Markers Inset (radial measurement ticks pop along inner rim)
 * 6. Needle @ High Limit (pin and needle materialize at higher end ~180° / 4:30)
 * 7. Anti-Clockwise Sweep (needle rotates counter-clockwise through high, mid, and low zones)
 * 8. Resting Lock & Cushion (needle settles into original logo resting position at 0° / 10:30)
 *
 * Supports `stage` prop (1 to 8) to freeze and manually inspect any individual state.
 */
export default function OngoClockIcon({ 
  size = 34, 
  coralColor = '#FF6B4A', 
  whiteColor = '#ffffff', 
  animated = false,
  animationType = 'sequence', // 'sequence' (8-stage) or 'spin'
  stage = null, // null for continuous animation, 1-8 for frozen manual stage
  duration = 2.8,
  highAngle = 180, // Angle in degrees for higher end (~180° / 4:30)
  restAngle = 0,   // Angle in degrees for initial logo resting position (0° / 10:30)
  style, 
  className 
}) {
  const isSequence = animationType === 'sequence';
  const isManualStage = stage !== null && stage !== undefined;

  // Determine element visibility and transforms in manual inspection mode
  const getManualStyles = () => {
    if (!isManualStage) return null;
    const s = Number(stage);

    return {
      circle: {
        display: s <= 2 ? 'block' : 'none',
        opacity: s === 1 ? 0.75 : s === 2 ? 1 : 0,
        strokeDashoffset: s === 1 ? 160 : 0
      },
      arcs: {
        display: s >= 3 ? 'block' : 'none',
        opacity: s >= 3 ? 1 : 0
      },
      coralArcColor: s === 3 ? whiteColor : coralColor,
      ticks: {
        display: s >= 5 ? 'block' : 'none',
        opacity: s >= 5 ? 1 : 0,
        transform: s >= 5 ? 'scale(1)' : 'scale(0.85)'
      },
      needle: {
        display: s >= 6 ? 'block' : 'none',
        opacity: s >= 6 ? 1 : 0,
        transform: s === 6 
          ? `rotate(${highAngle}deg)` 
          : s === 7 
            ? `rotate(${(highAngle + restAngle) / 2}deg)` 
            : `rotate(${restAngle}deg)`
      }
    };
  };

  const manualStyles = getManualStyles();

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 171.58 171.58"
      width={size}
      height={size}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      className={`ongo-scale-svg ongo-clock-svg ${className || ''}`}
      aria-label="Ongo Weight Scale Dial"
    >
      <defs>
        {animated && !isManualStage && (
          <style>
            {isSequence ? `
              /* Stage 1 & 2: Circle draw-in and hold */
              @keyframes ongo-seq-circle {
                0% { opacity: 0; stroke-dashoffset: 501; }
                10% { opacity: 1; stroke-dashoffset: 0; }
                18% { opacity: 1; }
                26% { opacity: 0; }
                100% { opacity: 0; }
              }

              /* Stage 3 & 4: Arcs appear and coral gauge segment reveals */
              @keyframes ongo-seq-arcs {
                0%, 18% { opacity: 0; }
                26% { opacity: 1; }
                100% { opacity: 1; }
              }

              /* Stage 5: Markers / Ticks pop in along rim */
              @keyframes ongo-seq-ticks {
                0%, 36% { opacity: 0; transform: scale(0.85); }
                44% { opacity: 1; transform: scale(1.02); }
                48%, 100% { opacity: 1; transform: scale(1); }
              }

              /* Stage 6, 7, 8: Needle appears at higher end, sweeps anti-clockwise, cushions at rest */
              @keyframes ongo-seq-needle {
                0%, 48% { 
                  opacity: 0; 
                  transform: rotate(${highAngle}deg) scale(0.75); 
                }
                54% { 
                  opacity: 1; 
                  transform: rotate(${highAngle}deg) scale(1.04); /* Stage 6: Needle appears at high end */
                }
                58% { 
                  opacity: 1; 
                  transform: rotate(${highAngle}deg) scale(1); 
                }
                62% {
                  opacity: 1;
                  transform: rotate(${highAngle}deg); /* Stage 7: Anti-clockwise sweep begins */
                }
                88% { 
                  opacity: 1; 
                  transform: rotate(${restAngle - 3.5}deg); /* Soft clinical overshoot past 10:30 */
                }
                94% { 
                  opacity: 1; 
                  transform: rotate(${restAngle + 1}deg); /* Rebound */
                }
                98%, 100% { 
                  opacity: 1; 
                  transform: rotate(${restAngle}deg); /* Stage 8: Sits locked at initial logo position */
                }
              }

              .ongo-seq-circle-el {
                transform-origin: 85.79px 85.79px;
                stroke-dasharray: 501;
                animation: ongo-seq-circle ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
              }

              .ongo-seq-arcs-el {
                transform-origin: 85.79px 85.79px;
                animation: ongo-seq-arcs ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
              }

              .ongo-seq-ticks-el {
                transform-origin: 85.79px 85.79px;
                animation: ongo-seq-ticks ${duration}s cubic-bezier(0.34, 1.4, 0.64, 1) forwards;
              }

              .ongo-seq-needle-el {
                transform-origin: 85.79px 85.79px;
                transform-box: view-box;
                animation: ongo-seq-needle ${duration}s cubic-bezier(0.25, 1, 0.3, 1) forwards;
              }
            ` : `
              @keyframes ongo-needle-spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              .ongo-scale-needle-animated {
                transform-box: view-box;
                transform-origin: 85.79px 85.79px;
                animation: ongo-needle-spin 1.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
              }
            `}
          </style>
        )}
      </defs>
      <g>
        {/* Stage 1 & 2: Full Circle (Stroke Ring) */}
        {(animated || isManualStage) && (
          <circle 
            className={!isManualStage ? "ongo-seq-circle-el" : undefined}
            cx="85.79" 
            cy="85.79" 
            r="79.64" 
            fill="none" 
            stroke={whiteColor} 
            strokeWidth="12.3" 
            strokeLinecap="round"
            strokeDasharray={isManualStage ? 501 : 501}
            style={isManualStage ? manualStyles.circle : undefined}
          />
        )}

        {/* Stage 3 & 4: Cropped Logo Shape Arcs */}
        <g 
          className={animated && !isManualStage && isSequence ? "ongo-seq-arcs-el" : undefined}
          style={isManualStage ? manualStyles.arcs : undefined}
        >
          {/* White main upper arc */}
          <path fill={whiteColor} d="M29.48,148.25c-1.57,0-3.15-.6-4.35-1.8C8.92,130.25,0,108.71,0,85.79,0,38.49,38.49,0,85.79,0c22.92,0,44.46,8.92,60.66,25.13,2.4,2.4,2.4,6.3,0,8.7-2.4,2.4-6.29,2.4-8.7,0-13.88-13.88-32.34-21.53-51.97-21.53C45.27,12.3,12.3,45.27,12.3,85.79c0,19.63,7.64,38.08,21.53,51.97,2.4,2.4,2.4,6.3,0,8.7-1.2,1.2-2.77,1.8-4.35,1.8Z"/>
          {/* Coral lower-right arc */}
          <path 
            fill={isManualStage ? manualStyles.coralArcColor : coralColor} 
            d="M85.79,171.58h-6.15v-29.39c0-3.4,2.75-6.15,6.15-6.15s6.15,2.75,6.15,6.15v16.84c35.63-2.97,64.12-31.46,67.09-67.09h-16.84c-3.4,0-6.15-2.75-6.15-6.15s2.75-6.15,6.15-6.15h29.39v6.15c0,47.31-38.49,85.79-85.79,85.79Z"
          />
        </g>

        {/* Stage 5: Scale Markers / Ticks */}
        <g 
          className={animated && !isManualStage && isSequence ? "ongo-seq-ticks-el" : undefined}
          style={isManualStage ? { ...manualStyles.ticks, transformOrigin: '85.79px 85.79px' } : (animated ? { transformOrigin: '85.79px 85.79px' } : undefined)}
        >
          {/* Coral ticks */}
          <path fill={isManualStage ? manualStyles.coralArcColor : coralColor} d="M162.72,108.03c-.14,0-.28-.02-.42-.06l-10.69-2.87c-.87-.23-1.38-1.12-1.15-1.99.23-.87,1.12-1.38,1.99-1.15l10.69,2.87c.87.23,1.38,1.12,1.15,1.99-.19.73-.85,1.2-1.57,1.2Z"/>
          <path fill={isManualStage ? manualStyles.coralArcColor : coralColor} d="M106.4,164.26c-.68,0-1.3-.45-1.48-1.14l-2.87-10.69c-.22-.82.27-1.66,1.09-1.88.82-.22,1.66.27,1.88,1.09l2.87,10.69c.22.82-.27,1.66-1.09,1.88-.13.04-.27.05-.4.05Z"/>
          <path fill={isManualStage ? manualStyles.coralArcColor : coralColor} d="M125.61,156.3c-.53,0-1.05-.28-1.33-.77l-5.53-9.59c-.42-.74-.17-1.68.56-2.1.74-.43,1.68-.17,2.1.56l5.53,9.59c.42.74.17,1.68-.56,2.1-.24.14-.51.21-.77.21Z"/>
          <path fill={isManualStage ? manualStyles.coralArcColor : coralColor} d="M142.11,143.64c-.39,0-.79-.15-1.09-.45l-7.83-7.83c-.6-.6-.6-1.57,0-2.17.6-.6,1.57-.6,2.17,0l7.83,7.83c.6.6.6,1.57,0,2.17-.3.3-.69.45-1.09.45Z"/>
          <path fill={isManualStage ? manualStyles.coralArcColor : coralColor} d="M154.76,127.15c-.26,0-.53-.07-.77-.21l-9.59-5.53c-.74-.42-.99-1.37-.56-2.1.42-.74,1.36-.99,2.1-.56l9.59,5.53c.74.42.99,1.37.56,2.1-.28.49-.8.77-1.33.77Z"/>
          {/* White ticks */}
          <path fill={whiteColor} d="M85.79,18.76c-.85,0-1.54-.69-1.54-1.54V6.15c0-.85.69-1.54,1.54-1.54s1.54.69,1.54,1.54v11.07c0,.85-.69,1.54-1.54,1.54Z"/>
          <path fill={whiteColor} d="M68.04,21.09c-.68,0-1.3-.45-1.48-1.14l-2.87-10.69c-.22-.82.27-1.66,1.09-1.88.82-.22,1.66.27,1.88,1.09l2.87,10.69c.22.82-.27,1.66-1.09,1.88-.13.04-.27.05-.4.05Z"/>
          <path fill={whiteColor} d="M51.51,27.94c-.53,0-1.05-.28-1.33-.77l-5.53-9.59c-.42-.74-.17-1.68.56-2.1.74-.43,1.68-.17,2.1.56l5.53,9.59c.42.74.17,1.68-.56,2.1-.24.14-.51.21-.77.21Z"/>
          <path fill={whiteColor} d="M37.3,38.84c-.39,0-.79-.15-1.09-.45l-7.83-7.83c-.6-.6-.6-1.57,0-2.17.6-.6,1.57-.6,2.17,0l7.83,7.83c.6.6.6,1.57,0,2.17-.3.3-.69.45-1.09.45Z"/>
          <path fill={whiteColor} d="M26.4,53.04c-.26,0-.53-.07-.77-.21l-9.59-5.53c-.74-.42-.99-1.36-.56-2.1.42-.74,1.36-.99,2.1-.56l9.59,5.53c.74.42.99,1.36.56,2.1-.28.49-.8.77-1.33.77Z"/>
          <path fill={whiteColor} d="M19.56,69.58c-.13,0-.27-.02-.4-.05l-10.69-2.87c-.82-.22-1.31-1.06-1.09-1.88.22-.82,1.06-1.31,1.88-1.09l10.69,2.87c.82.22,1.31,1.06,1.09,1.88-.18.69-.81,1.14-1.48,1.14Z"/>
          <path fill={whiteColor} d="M17.22,87.33H6.15c-.85,0-1.54-.69-1.54-1.54s.69-1.54,1.54-1.54h11.07c.85,0,1.54.69,1.54,1.54s-.69,1.54-1.54,1.54Z"/>
          <path fill={whiteColor} d="M8.86,107.94c-.68,0-1.3-.45-1.48-1.14-.22-.82.27-1.66,1.09-1.88l10.69-2.86c.82-.22,1.66.27,1.88,1.09.22.82-.27,1.66-1.09,1.88l-10.69,2.86c-.13.04-.27.05-.4.05Z"/>
          <path fill={whiteColor} d="M16.82,127.15c-.53,0-1.05-.28-1.33-.77-.42-.74-.17-1.68.56-2.1l9.59-5.53c.74-.43,1.68-.17,2.1.56.42.74.17,1.68-.56,2.1l-9.59,5.53c-.24.14-.51.21-.77.21Z"/>
          <path fill={whiteColor} d="M120.07,27.94c-.26,0-.53-.07-.77-.21-.74-.42-.99-1.36-.56-2.1l5.53-9.59c.42-.74,1.36-.99,2.1-.56.74.42.99,1.36.56,2.1l-5.53,9.59c-.28.49-.8.77-1.33.77Z"/>
          <path fill={whiteColor} d="M103.54,21.09c-.13,0-.27-.02-.4-.05-.82-.22-1.31-1.06-1.09-1.88l2.87-10.69c.22-.82,1.06-1.31,1.88-1.09.82.22,1.31,1.06,1.09,1.88l-2.87,10.69c-.18.69-.81,1.14-1.48,1.14Z"/>
        </g>

        {/* Stage 6, 7, 8: Needle & Center Pin */}
        <g 
          className={animated && !isManualStage ? (isSequence ? 'ongo-seq-needle-el' : 'ongo-scale-needle-animated') : undefined}
          style={{ 
            transformOrigin: '85.79px 85.79px',
            transformBox: 'view-box',
            ...(isManualStage ? manualStyles.needle : {})
          }}
        >
          <path fill={coralColor} d="M63.55,54.85c-2.4-2.4-6.29-2.4-8.7,0-2.4,2.4-2.4,6.3,0,8.7l17.1,17.1,5.22,5.22v-.07c0-4.76,3.86-8.62,8.62-8.62h.07l-22.32-22.32Z"/>
          <path fill={coralColor} d="M85.79,71.02c-1.81,0-3.54.33-5.15.93-4.02,1.49-7.2,4.68-8.7,8.7-.6,1.61-.93,3.34-.93,5.15,0,8.15,6.62,14.77,14.77,14.77s14.77-6.62,14.77-14.77-6.62-14.77-14.77-14.77ZM85.79,94.41c-4.74,0-8.58-3.82-8.62-8.55v-.07c0-4.76,3.86-8.62,8.62-8.62h.07c4.73.04,8.55,3.89,8.55,8.62s-3.86,8.62-8.62,8.62Z"/>
        </g>
      </g>
    </svg>
  );
}

export { OngoClockIcon as OngoScaleIcon };
