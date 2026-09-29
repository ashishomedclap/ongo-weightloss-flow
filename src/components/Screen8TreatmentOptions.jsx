import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Syringe, Pill, Droplets, CheckCircle2, Info } from 'lucide-react';

const TREATMENT_OPTIONS = [
  {
    id: 'compounded-semaglutide',
    name: 'Compounded Semaglutide',
    route: 'Injection',
    icon: Syringe,
    routeTag: 'Subcutaneous',
    description: 'Once-weekly injectable treatment, as prescribed.',
    popular: true,
  },
  {
    id: 'compounded-tirzepatide',
    name: 'Compounded Tirzepatide',
    route: 'Injection',
    icon: Syringe,
    routeTag: 'Dual GIP / GLP-1',
    description: 'Once-weekly injectable treatment, as prescribed.',
    popular: false,
  },
  {
    id: 'tirzepatide-chewables',
    name: 'Tirzepatide Chewables',
    route: 'Chewable Tablets',
    icon: Pill,
    routeTag: 'Oral Option',
    description: 'Oral treatment option, if prescribed. No needles required.',
    popular: false,
  },
  {
    id: 'semaglutide-drops',
    name: 'Semaglutide Oral Drops',
    route: 'Oral Drops',
    icon: Droplets,
    routeTag: 'Sublingual Drops',
    description: 'Oral treatment option, if prescribed. Easy daily administration.',
    popular: false,
  },
  {
    id: 'tirzepatide-drops',
    name: 'Tirzepatide Oral Drops',
    route: 'Oral Drops',
    icon: Droplets,
    routeTag: 'Dual Action Drops',
    description: 'Oral treatment option, if prescribed. Sublingual absorption.',
    popular: false,
  }
];

export default function Screen8TreatmentOptions({ formData, updateFormData, onNext, onBack }) {
  const [selectedTreatment, setSelectedTreatment] = useState(
    formData.selectedTreatment || 'compounded-semaglutide'
  );

  const handleContinue = () => {
    const chosen = TREATMENT_OPTIONS.find(t => t.id === selectedTreatment);
    updateFormData({
      selectedTreatment,
      selectedTreatmentName: chosen?.name || 'Compounded Semaglutide'
    });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-nav-header">
        <button type="button" className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
        <span className="step-counter-text">Treatment Pathway</span>
      </div>

      <div className="heading-section">
        <h1 className="page-title">Review Your Treatment Options</h1>
        <p className="page-subtitle">
          Based on your information, these treatment options may be available for consideration. Your physician will determine which treatment, if any, is medically appropriate for you.
        </p>
      </div>

      {/* Options List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
        {TREATMENT_OPTIONS.map((item) => {
          const isSelected = selectedTreatment === item.id;
          const IconComp = item.icon;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedTreatment(item.id)}
              style={{
                borderRadius: '16px',
                border: `1.5px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-border)'}`,
                background: isSelected ? 'var(--color-green-pale)' : '#FFFFFF',
                padding: '16px 18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                boxShadow: isSelected ? '0 4px 16px rgba(47, 137, 104, 0.09)' : 'var(--shadow-card)',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
            >
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: isSelected ? 'var(--color-green-light)' : '#F3F5F3',
                color: isSelected ? 'var(--color-primary-dark)' : 'var(--color-text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                <IconComp size={18} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {item.name}
                    </span>
                    {item.popular && (
                      <span style={{
                        background: 'var(--color-peach)',
                        color: '#843C11',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        padding: '2px 7px',
                        borderRadius: '10px',
                        textTransform: 'uppercase'
                      }}>
                        Most Popular
                      </span>
                    )}
                  </div>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: '12px',
                    background: '#F0EEE8',
                    color: '#66645F'
                  }}>
                    {item.route}
                  </span>
                </div>

                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: '1.4', margin: 0 }}>
                  {item.description}
                </p>
              </div>

              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: `2px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-border)'}`,
                background: isSelected ? 'var(--color-accent)' : '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
                flexShrink: 0,
                marginTop: '10px'
              }}>
                {isSelected && <CheckCircle2 size={15} strokeWidth={2.8} />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Clinical Integrity Reassurance */}
      <div className="clinical-note-box">
        <strong>Important:</strong> Your selection tells us which option you’re interested in. Your physician will make the final treatment decision based on your clinical safety profile. Treatment availability, formulation, dosage, and route depend on clinical evaluation and prescription requirements.
      </div>

      <button
        type="button"
        className="cta-button"
        onClick={handleContinue}
      >
        <span>Continue</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
