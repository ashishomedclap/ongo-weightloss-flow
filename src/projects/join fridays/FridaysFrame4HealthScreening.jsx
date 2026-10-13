import React from 'react';

const CONTRAINDICATIONS = [
  { id: 'pregnant', text: 'Current or possibly pregnant, or actively trying to become pregnant.' },
  { id: 'breastfeeding', text: 'Breastfeeding or bottle feeding with breastmilk?' },
  { id: 'kidney', text: 'End-stage kidney disease (on or about to be in dialysis).' },
  { id: 'liver', text: 'End stage liver disease (cirrhosis).' },
  { id: 'eating_disorder', text: 'Current or prior eating disorder (anorexia or bulimia).' },
  { id: 'suicidal', text: 'Current suicidal thoughts and/or prior suicidal attempt.' },
  { id: 'cancer', text: 'Cancer (active diagnosis or treatment).' },
  { id: 'transplant', text: 'History of organ transplant or anti rejection medication.' },
  { id: 'gi_condition', text: 'Severe gastrointestinal condition (gastroparesis, inflammatory bowel disease).' },
  { id: 'substance', text: 'Currently untreated/unmonitored opioid, alcohol (including binge drinking), or substance use disorder/dependence' },
  { id: 'mtc_men2', text: 'Personal or family history of medullary thyroid cancer or multiple endocrine neoplasia syndrome type 2' },
  { id: 't2d_insulin', text: 'Type 2 diabetes on insulin or with an A1c greater than 10%' },
  { id: 't1d', text: 'Type 1 diabetes' },
  { id: 'retinopathy', text: 'Diabetic retinopathy (diabetic eye disease), damage to the optic nerve from trauma or reduced blood flow, macular degeneration, or blindness' },
  { id: 'warfarin', text: 'Use of the blood thinner warfarin (Coumadin/Jantoven)' },
  { id: 'pancreatitis', text: 'History of or current pancreatitis' },
  { id: 'unprescribed', text: 'Use of street drugs or any prescription medication without a valid prescription' }
];

export default function FridaysFrame4HealthScreening({
  selectedConditions = [],
  noneSelected = false,
  onToggleCondition,
  onToggleNone
}) {
  return (
    <div style={{
      width: '100%',
      maxWidth: '920px',
      margin: '0 auto',
      padding: '48px 20px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Title & Subtitle */}
      <h1 style={{
        fontSize: '24px',
        fontWeight: 700,
        color: '#363F33',
        margin: '0 0 6px',
        textAlign: 'center',
        letterSpacing: '-0.01em'
      }}>
        A bit more about your health
      </h1>
      <p style={{
        fontSize: '13.5px',
        color: '#4B5563',
        margin: '0 0 24px',
        textAlign: 'center'
      }}>
        Is there any specific medical circumstance affecting your health currently or in the past?
      </p>

      {/* Top Card: None of the below */}
      <div style={{ width: '100%', marginBottom: '10px' }}>
        <div
          onClick={onToggleNone}
          style={{
            width: '100%',
            padding: '14px 18px',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
            background: '#FFFFFF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxSizing: 'border-box'
          }}
        >
          <input
            type="checkbox"
            checked={noneSelected}
            onChange={() => {}}
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '4px',
              accentColor: '#363F33',
              cursor: 'pointer'
            }}
          />
          <span style={{ fontSize: '13.5px', fontWeight: 500, color: '#1F2937' }}>
            None of the below
          </span>
        </div>
      </div>

      {/* Disqualification caption */}
      <div style={{ width: '100%', textAlign: 'left', marginBottom: '14px' }}>
        <span style={{ fontSize: '12px', color: '#6B7280' }}>
          Any choice below disqualifies you from treatment
        </span>
      </div>

      {/* 3-Column Grid of 17 Conditions */}
      <div style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '12px',
        marginBottom: '24px'
      }}>
        {CONTRAINDICATIONS.map(c => {
          const checked = selectedConditions.includes(c.id);

          return (
            <div
              key={c.id}
              onClick={() => onToggleCondition && onToggleCondition(c.id)}
              style={{
                borderRadius: '8px',
                border: checked ? '1.5px solid #EF4444' : '1px solid #E5E7EB',
                background: checked ? '#FEF2F2' : '#FFFFFF',
                padding: '16px 14px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                cursor: 'pointer',
                transition: 'border-color 0.15s ease',
                minHeight: '74px',
                boxSizing: 'border-box'
              }}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '4px',
                  accentColor: '#EF4444',
                  marginTop: '2px',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              />
              <span style={{
                fontSize: '12.5px',
                lineHeight: '1.4',
                color: checked ? '#991B1B' : '#374151',
                fontWeight: checked ? 600 : 400
              }}>
                {c.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
