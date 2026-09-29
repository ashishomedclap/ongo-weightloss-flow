import React, { useState, useMemo } from 'react';

export default function Screen3StartingPoint({ formData, updateFormData, onNext, onBack }) {
  const [unit, setUnit] = useState(formData.unit || 'Imperial');
  
  // Imperial
  const [feet, setFeet] = useState(formData.feet || 5);
  const [inches, setInches] = useState(formData.inches || 10);
  const [lbs, setLbs] = useState(formData.lbs || 180);

  // Metric
  const [cm, setCm] = useState(formData.cm || 178);
  const [kg, setKg] = useState(formData.kg || 81.6);

  // Dynamic BMI Calculation
  const bmi = useMemo(() => {
    if (unit === 'Imperial') {
      const totalInches = (parseInt(feet, 10) || 0) * 12 + (parseInt(inches, 10) || 0);
      const weightLbs = parseFloat(lbs) || 0;
      if (totalInches > 0 && weightLbs > 0) {
        return ((weightLbs / (totalInches * totalInches)) * 703).toFixed(1);
      }
    } else {
      const heightM = (parseFloat(cm) || 0) / 100;
      const weightKg = parseFloat(kg) || 0;
      if (heightM > 0 && weightKg > 0) {
        return (weightKg / (heightM * heightM)).toFixed(1);
      }
    }
    return '25.8';
  }, [unit, feet, inches, lbs, cm, kg]);

  const bmiNumber = parseFloat(bmi) || 25.8;

  // Determine which range is active
  // UNDER: < 18.5, HEALTHY: 18.5 - 24.9, OVER: 25 - 29.9, OBESE: >= 30
  const activeCategory = useMemo(() => {
    if (bmiNumber < 18.5) return 'under';
    if (bmiNumber < 25) return 'healthy';
    if (bmiNumber < 30) return 'over';
    return 'obese';
  }, [bmiNumber]);

  // Calculate gauge angle for needle: from -90 deg to +90 deg
  // BMI scale from 15 to 40
  const needleRotation = useMemo(() => {
    const clamped = Math.max(15, Math.min(40, bmiNumber));
    const percent = (clamped - 15) / (40 - 15);
    return -90 + percent * 180;
  }, [bmiNumber]);

  const handleContinue = (e) => {
    e.preventDefault();
    updateFormData({
      unit,
      feet,
      inches,
      lbs,
      cm,
      kg,
      calculatedBmi: bmi
    });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        ELIGIBILITY
      </div>

      <div className="heading-section">
        <h1 className="page-title">Let's check your starting point</h1>
        <p className="page-subtitle">
          Your height and weight help us calculate your BMI, one factor your clinician may consider when evaluating weight-loss treatment.
        </p>
      </div>

      <form onSubmit={handleContinue} style={{ width: '100%' }}>
        {/* Main White Rounded Card */}
        <div className="bmi-calc-card">
          {/* Unit Toggle Pill */}
          <div className="unit-toggle-pill">
            <button
              type="button"
              className={`unit-toggle-btn ${unit === 'Imperial' ? 'active' : ''}`}
              onClick={() => setUnit('Imperial')}
            >
              Imperial (ft / lbs)
            </button>
            <button
              type="button"
              className={`unit-toggle-btn ${unit === 'Metric' ? 'active' : ''}`}
              onClick={() => setUnit('Metric')}
            >
              Metric (cm / kg)
            </button>
          </div>

          {unit === 'Imperial' ? (
            <>
              {/* HEIGHT Label & 2-column input */}
              <div className="calc-field-group">
                <span className="calc-field-label">HEIGHT</span>
                <div className="calc-input-pair">
                  <div className="calc-input-box">
                    <input
                      type="number"
                      min="3"
                      max="7"
                      className="calc-input"
                      value={feet}
                      onChange={(e) => setFeet(e.target.value)}
                    />
                    <span className="calc-unit-tag">FT</span>
                  </div>
                  <div className="calc-input-box">
                    <input
                      type="number"
                      min="0"
                      max="11"
                      className="calc-input"
                      value={inches}
                      onChange={(e) => setInches(e.target.value)}
                    />
                    <span className="calc-unit-tag">IN</span>
                  </div>
                </div>
              </div>

              {/* WEIGHT Label & input */}
              <div className="calc-field-group">
                <span className="calc-field-label">WEIGHT</span>
                <div className="calc-input-box full-width">
                  <input
                    type="number"
                    min="60"
                    max="600"
                    className="calc-input"
                    value={lbs}
                    onChange={(e) => setLbs(e.target.value)}
                  />
                  <span className="calc-unit-tag">LBS</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="calc-field-group">
                <span className="calc-field-label">HEIGHT</span>
                <div className="calc-input-box full-width">
                  <input
                    type="number"
                    min="100"
                    max="250"
                    className="calc-input"
                    value={cm}
                    onChange={(e) => setCm(e.target.value)}
                  />
                  <span className="calc-unit-tag">CM</span>
                </div>
              </div>

              <div className="calc-field-group">
                <span className="calc-field-label">WEIGHT</span>
                <div className="calc-input-box full-width">
                  <input
                    type="number"
                    min="30"
                    max="300"
                    className="calc-input"
                    value={kg}
                    onChange={(e) => setKg(e.target.value)}
                  />
                  <span className="calc-unit-tag">KG</span>
                </div>
              </div>
            </>
          )}

          {/* SVG Speedometer Gauge Card */}
          <div className="bmi-gauge-card">
            <svg 
              className="bmi-dial-svg" 
              viewBox="0 0 280 150" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Radial subtle background glow */}
              <defs>
                <radialGradient id="gaugeGlow" cx="50%" cy="100%" r="90%">
                  <stop offset="0%" stopColor="#E9F7EC" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="280" height="150" fill="url(#gaugeGlow)" rx="16" />

              {/* Gauge arc track */}
              <path
                d="M 40 135 A 100 100 0 0 1 240 135"
                stroke="#E2EBE2"
                strokeWidth="16"
                strokeLinecap="round"
              />

              {/* Dashed tick marks along outer rim */}
              <path
                d="M 32 135 A 108 108 0 0 1 248 135"
                stroke="#C6D3C8"
                strokeWidth="2.5"
                strokeDasharray="2 10"
                strokeLinecap="round"
              />

              {/* Active filled arc */}
              <path
                d="M 40 135 A 100 100 0 0 1 240 135"
                stroke="#64997E"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray="314"
                strokeDashoffset={314 - (314 * Math.max(0.1, Math.min(1, (bmiNumber - 15) / 25)))}
                style={{ transition: 'stroke-dashoffset 0.4s ease' }}
              />
            </svg>

            {/* Gauge Center Text Display */}
            <div className="bmi-center-readout">
              <span className="readout-label">YOUR BMI</span>
              <span className="readout-value">{bmi}</span>
            </div>
          </div>

          {/* 4 Category Pill Badges Grid */}
          <div className="bmi-categories-grid">
            <div className={`bmi-cat-cell cat-under ${activeCategory === 'under' ? 'active' : ''}`}>
              <span className="cat-name">Underweight</span>
              <span className="cat-range">&lt; 18.5</span>
            </div>
            <div className={`bmi-cat-cell cat-healthy ${activeCategory === 'healthy' ? 'active' : ''}`}>
              <span className="cat-name">Healthy weight</span>
              <span className="cat-range">18.5 — 24.9</span>
            </div>
            <div className={`bmi-cat-cell cat-over ${activeCategory === 'over' ? 'active' : ''}`}>
              <span className="cat-name">Overweight</span>
              <span className="cat-range">25 — 29.9</span>
            </div>
            <div className={`bmi-cat-cell cat-obese ${activeCategory === 'obese' ? 'active' : ''}`}>
              <span className="cat-name">Obesity</span>
              <span className="cat-range">≥ 30</span>
            </div>
          </div>

          <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', textAlign: 'center', margin: '12px 0 0', lineHeight: '1.4' }}>
            BMI is one measure of health and is not a diagnosis by itself.
          </p>
        </div>

        {/* Continue Button */}
        <button 
          type="submit" 
          className="cta-button-pill active"
          style={{ marginTop: '24px' }}
        >
          <span>Continue</span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </button>
      </form>
    </div>
  );
}
