import React, { useState, useMemo } from 'react';
import { ArrowLeft, ArrowRight, Activity } from 'lucide-react';

export default function Screen3StartingPoint({ formData, updateFormData, onNext, onBack }) {
  const [unit, setUnit] = useState(formData.unit || 'Imperial');
  
  // Imperial
  const [feet, setFeet] = useState(formData.feet || 5);
  const [inches, setInches] = useState(formData.inches || 7);
  const [lbs, setLbs] = useState(formData.lbs || 205);

  // Metric
  const [cm, setCm] = useState(formData.cm || 170);
  const [kg, setKg] = useState(formData.kg || 93);

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
    return '32.4';
  }, [unit, feet, inches, lbs, cm, kg]);

  const bmiNumber = parseFloat(bmi) || 32.4;

  const getBmiCategory = (val) => {
    if (val < 18.5) return { label: 'Underweight', color: '#66645F' };
    if (val < 25) return { label: 'Normal weight', color: '#2F8968' };
    if (val < 30) return { label: 'Overweight', color: '#D49B2A' };
    if (val < 35) return { label: 'Class I Obesity (Potential Candidate)', color: '#2F8968' };
    return { label: 'Class II/III Obesity (Potential Candidate)', color: '#1F4F3D' };
  };

  const category = getBmiCategory(bmiNumber);

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
      <div className="step-nav-header">
        <button type="button" className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
        <span className="step-counter-text">Step 3 of 10</span>
      </div>

      <div className="heading-section">
        <h1 className="page-title">Let’s check your starting point</h1>
        <p className="page-subtitle">
          Your height and weight help calculate your BMI, which is one factor your clinician may consider when evaluating weight-management treatment.
        </p>
      </div>

      <form onSubmit={handleContinue} style={{ width: '100%' }}>
        {/* Unit Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div style={{
            background: 'var(--color-badge-bg)',
            padding: '4px',
            borderRadius: '24px',
            display: 'inline-flex',
            gap: '4px'
          }}>
            <button
              type="button"
              className={`toolbar-btn ${unit === 'Imperial' ? 'active' : ''}`}
              style={{ padding: '6px 20px', borderRadius: '20px' }}
              onClick={() => setUnit('Imperial')}
            >
              Imperial (ft, lbs)
            </button>
            <button
              type="button"
              className={`toolbar-btn ${unit === 'Metric' ? 'active' : ''}`}
              style={{ padding: '6px 20px', borderRadius: '20px' }}
              onClick={() => setUnit('Metric')}
            >
              Metric (cm, kg)
            </button>
          </div>
        </div>

        {unit === 'Imperial' ? (
          <div className="form-row-2" style={{ marginBottom: '20px' }}>
            <div className="form-group">
              <label className="form-label">Height</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div>
                  <input
                    type="number"
                    min="3"
                    max="7"
                    className="form-input"
                    value={feet}
                    onChange={(e) => setFeet(e.target.value)}
                  />
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginTop: '3px' }}>Feet</span>
                </div>
                <div>
                  <input
                    type="number"
                    min="0"
                    max="11"
                    className="form-input"
                    value={inches}
                    onChange={(e) => setInches(e.target.value)}
                  />
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginTop: '3px' }}>Inches</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Weight</label>
              <div>
                <input
                  type="number"
                  min="60"
                  max="600"
                  className="form-input"
                  value={lbs}
                  onChange={(e) => setLbs(e.target.value)}
                />
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginTop: '3px' }}>lbs</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="form-row-2" style={{ marginBottom: '20px' }}>
            <div className="form-group">
              <label className="form-label">Height (cm)</label>
              <input
                type="number"
                min="100"
                max="240"
                className="form-input"
                value={cm}
                onChange={(e) => setCm(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Weight (kg)</label>
              <input
                type="number"
                min="30"
                max="300"
                className="form-input"
                value={kg}
                onChange={(e) => setKg(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Dynamic BMI Card */}
        <div style={{
          background: 'var(--color-green-pale)',
          border: '1.5px solid var(--color-active-border)',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-accent)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
            <Activity size={16} /> Clinical Metric
          </div>
          <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-primary-dark)', letterSpacing: '-0.02em' }}>
            Your BMI: {bmi}
          </div>
          <div style={{
            display: 'inline-block',
            margin: '8px 0 12px',
            padding: '4px 14px',
            borderRadius: '20px',
            background: 'var(--color-green-light)',
            color: 'var(--color-primary-dark)',
            fontSize: '13px',
            fontWeight: 700
          }}>
            {category.label}
          </div>

          {/* Clean BMI Visual Track */}
          <div style={{ width: '100%', height: '8px', background: '#DCE8DD', borderRadius: '4px', position: 'relative', overflow: 'hidden', margin: '8px 0 6px' }}>
            <div 
              style={{
                width: `${Math.min(100, Math.max(10, (bmiNumber / 45) * 100))}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #2F8968, #1F4F3D)',
                borderRadius: '4px',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--color-text-muted)' }}>
            <span>18.5 Normal</span>
            <span>25 Overweight</span>
            <span>30+ Clinical Candidate</span>
          </div>
        </div>

        {/* Clinical Disclaimer */}
        <div className="clinical-note-box">
          BMI is one part of your overall health picture. Your clinician will consider your complete health history when determining whether treatment is appropriate.
        </div>

        <button type="submit" className="cta-button" style={{ marginTop: '8px' }}>
          <span>Continue</span>
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}
