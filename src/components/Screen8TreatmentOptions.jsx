import React, { useState } from 'react';
import { Syringe, Pill, Droplets, Check } from 'lucide-react';

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
      <div className="step-tag-teal">
        OPTIONS · TREATMENT SELECTION
      </div>

      <div className="heading-section">
        <h1 className="page-title">Review your treatment options</h1>
        <p className="page-subtitle">
          Based on your information, these treatment options may be available for consideration. Your physician will determine which treatment, if any, is medically appropriate for you.
        </p>
      </div>

      {/* Options List */}
      <div className="treatments-stack">
        {TREATMENT_OPTIONS.map((item) => {
          const isSelected = selectedTreatment === item.id;
          const IconComp = item.icon;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedTreatment(item.id)}
              className={`treatment-option-card ${isSelected ? 'selected' : ''}`}
            >
              <div className="treatment-icon-bubble">
                <IconComp size={18} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {item.name}
                    </span>
                    {item.popular && (
                      <span className="popular-badge-pill">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <span className="route-badge-pill">
                    {item.route}
                  </span>
                </div>

                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: '1.4', margin: 0 }}>
                  {item.description}
                </p>
              </div>

              <div className={`checkbox-box ${isSelected ? 'checked' : ''}`} aria-hidden="true">
                {isSelected && <Check size={14} strokeWidth={3} />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Clinical Integrity Reassurance */}
      <div className="clinical-note-box">
        <strong>Important:</strong> Your selection tells us which option you're interested in. Your physician will make the final treatment decision based on your clinical safety profile. Treatment availability, formulation, dosage, and route depend on clinical evaluation and prescription requirements.
      </div>

      <button
        type="button"
        className="cta-button-pill active"
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
