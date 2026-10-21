import React from 'react';

const MEDICATIONS = [
  {
    id: 'semaglutide',
    name: 'Compounded Semaglutide',
    sub: 'Same active peptide as Ozempic® & Wegovy®',
    badge: 'Popular Choice',
    price: 'From $129/mo'
  },
  {
    id: 'tirzepatide',
    name: 'Compounded Tirzepatide',
    sub: 'Dual GLP-1 + GIP receptor agonist (Mounjaro® / Zepbound®)',
    badge: 'Maximum Potency',
    price: 'From $179/mo'
  },
  {
    id: 'microdose',
    name: 'GLP-1 Microdose Formulation',
    sub: 'Low-dose cellular health and metabolic defense protocol',
    badge: 'New Innovation',
    price: 'From $89/mo'
  }
];

export default function FridaysFrame8Treatments({
  selectedMed = 'semaglutide',
  onSelectMed
}) {
  return (
    <div style={{
      width: '100%',
      maxWidth: '620px',
      margin: '0 auto',
      padding: '48px 20px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: 700,
        color: '#363F33',
        margin: '0 0 8px',
        textAlign: 'center'
      }}>
        Select your preferred treatment formulation
      </h1>
      <p style={{
        fontSize: '14px',
        color: '#6B7280',
        margin: '0 0 32px',
        textAlign: 'center'
      }}>
        Your physician will review your clinical history to confirm the safest dosage.
      </p>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {MEDICATIONS.map(m => {
          const isSelected = selectedMed === m.id;

          return (
            <div
              key={m.id}
              onClick={() => onSelectMed && onSelectMed(m.id)}
              style={{
                borderRadius: '14px',
                border: isSelected ? '2px solid #363F33' : '1px solid #E5E7EB',
                background: isSelected ? '#FAFBF9' : '#FFFFFF',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#1F2937' }}>
                    {m.name}
                  </span>
                  <span style={{
                    background: isSelected ? '#363F33' : '#E5E7EB',
                    color: isSelected ? '#FFFFFF' : '#4B5563',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '10px'
                  }}>
                    {m.badge}
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>
                  {m.sub}
                </div>
              </div>

              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#363F33' }}>
                  {m.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
