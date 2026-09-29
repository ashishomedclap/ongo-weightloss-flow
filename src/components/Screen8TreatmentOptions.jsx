import React, { useState } from 'react';
import { Syringe, Pill, Droplets, Check, UserCheck } from 'lucide-react';

const TREATMENT_OPTIONS = [
  {
    id: 'compounded-semaglutide',
    name: 'Compounded Semaglutide',
    route: 'Injection',
    icon: Syringe,
    routeTag: 'Subcutaneous',
    description: 'Once-weekly injectable treatment, as prescribed.',
    popular: false,
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
  },
  {
    id: 'physician-recommend',
    name: "I'd like my physician to recommend",
    route: '',
    icon: UserCheck,
    routeTag: "Physician's Choice",
    description: 'Let your physician choose the treatment they believe is most appropriate based on your health profile.',
    popular: false,
    isDefault: true,
  }
];

export default function Screen8TreatmentOptions({ formData, updateFormData, onNext, onBack }) {
  const [selectedTreatment, setSelectedTreatment] = useState(
    formData.selectedTreatment || null
  );

  const [error, setError] = useState('');

  const handleContinue = () => {
    if (!selectedTreatment) {
      setError('Please select a treatment option to continue.');
      return;
    }
    const chosen = TREATMENT_OPTIONS.find(t => t.id === selectedTreatment);
    updateFormData({
      selectedTreatment,
      selectedTreatmentName: chosen?.name || "Physician's Choice"
    });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 7 OF 8 · TREATMENT OPTIONS
      </div>

      <div className="heading-section">
        <h1 className="page-title">Which treatment option interests you most?</h1>
        <p className="page-subtitle">
          These treatment options may be available for consideration. Your physician will determine which treatment, if any, is medically appropriate for you.
        </p>
      </div>

      {error && (
        <div className="form-error-banner">
          {error}
        </div>
      )}

      {/* Options List */}
      <div className="treatments-stack">
        {TREATMENT_OPTIONS.map((item) => {
          const isSelected = selectedTreatment === item.id;
          const IconComp = item.icon;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedTreatment(item.id)}
              style={{
                width: '100%',
                background: isSelected ? '#F2F9F5' : '#FFFFFF',
                border: `2px solid ${isSelected ? '#2F8968' : '#E2E6E2'}`,
                borderRadius: '16px',
                padding: '16px 18px',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: isSelected ? '#FFFFFF' : '#F5F8F6',
                color: isSelected ? '#1F4F3D' : '#3A7D63',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: isSelected ? '0 2px 8px rgba(47, 137, 104, 0.1)' : 'none'
              }}>
                <IconComp size={20} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {item.name}
                    </span>
                  </div>
                  {item.route && (
                    <span className="route-badge-pill">
                      {item.route}
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: '1.4', margin: 0 }}>
                  {item.description}
                </p>
              </div>

              <div 
                style={{ 
                  width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                  border: `2px solid ${isSelected ? '#2F8968' : '#E2E6E2'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF',
                  transition: 'all 0.2s ease', marginLeft: '4px'
                }}
                aria-hidden="true"
              >
                {isSelected && <div style={{ width: '12px', height: '12px', backgroundColor: '#2F8968', borderRadius: '50%' }} />}
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
        className={`cta-button-pill ${selectedTreatment ? 'active' : ''}`}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
