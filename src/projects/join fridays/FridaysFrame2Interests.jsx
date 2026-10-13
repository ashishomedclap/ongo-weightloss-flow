import React from 'react';

// Custom realistic vial graphics matching Join Fridays renders
function GLP1VialsGraphic() {
  return (
    <div style={{
      width: '124px',
      height: '100%',
      minHeight: '100px',
      background: 'linear-gradient(135deg, #1C271A 0%, #2A3B28 100%)',
      borderRadius: '24px 0 0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
        {/* Vial 1 (Back) */}
        <g transform="translate(42, 28) rotate(15)">
          <rect x="0" y="8" width="22" height="38" rx="4" fill="#2E4829" stroke="#507B47" strokeWidth="1"/>
          <rect x="3" y="14" width="16" height="18" fill="#E8F0E6" opacity="0.9"/>
          <line x1="6" y1="18" x2="16" y2="18" stroke="#2E4829" strokeWidth="1.2"/>
          <line x1="6" y1="22" x2="14" y2="22" stroke="#2E4829" strokeWidth="0.8"/>
          <rect x="5" y="3" width="12" height="6" fill="#889684"/>
          <rect x="3" y="0" width="16" height="4" rx="1.5" fill="#C5D3C2"/>
        </g>
        {/* Vial 2 (Front) */}
        <g transform="translate(18, 18)">
          <rect x="0" y="8" width="26" height="46" rx="5" fill="#3D5C37" stroke="#689E5D" strokeWidth="1.2"/>
          <rect x="4" y="16" width="18" height="22" rx="1" fill="#F4F8F3"/>
          <text x="6" y="24" fontSize="4.5" fontWeight="bold" fill="#1C271A">Tirzepatide</text>
          <text x="6" y="29" fontSize="3.5" fill="#556952">10mg / 2mL</text>
          <rect x="7" y="3" width="12" height="6" fill="#A8B8A4"/>
          <rect x="4" y="0" width="18" height="4" rx="1.5" fill="#E4EFE2"/>
          <path d="M4 14 L4 50" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3"/>
        </g>
      </svg>
    </div>
  );
}

function LongevityVialsGraphic() {
  return (
    <div style={{
      width: '124px',
      height: '100%',
      minHeight: '100px',
      background: 'linear-gradient(135deg, #0A1926 0%, #152E46 100%)',
      borderRadius: '24px 0 0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
        {/* Syringe tilted */}
        <g transform="translate(20, 20) rotate(-25)">
          <rect x="2" y="10" width="10" height="44" rx="2" fill="rgba(255,255,255,0.2)" stroke="#8FB9DD" strokeWidth="1"/>
          <rect x="4" y="24" width="6" height="28" fill="#4B93CC" opacity="0.7"/>
          <line x1="7" y1="54" x2="7" y2="70" stroke="#E2E8F0" strokeWidth="1.5"/>
          <rect x="3" y="2" width="8" height="8" fill="#B8D5ED"/>
        </g>
        {/* Blue Vial */}
        <g transform="translate(38, 22)">
          <rect x="0" y="8" width="24" height="42" rx="4" fill="#183B5A" stroke="#3E7BB0" strokeWidth="1"/>
          <rect x="3" y="14" width="18" height="20" fill="#EBF3FA"/>
          <line x1="6" y1="19" x2="18" y2="19" stroke="#183B5A" strokeWidth="1.2"/>
          <line x1="6" y1="23" x2="14" y2="23" stroke="#183B5A" strokeWidth="0.8"/>
          <rect x="6" y="3" width="12" height="6" fill="#88A8C6"/>
          <rect x="4" y="0" width="16" height="4" rx="1.5" fill="#D3E4F4"/>
        </g>
      </svg>
    </div>
  );
}

function MicrodosingVialsGraphic() {
  return (
    <div style={{
      width: '124px',
      height: '100%',
      minHeight: '100px',
      background: 'linear-gradient(135deg, #162414 0%, #223720 100%)',
      borderRadius: '24px 0 0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
        {/* Microdose green vial 1 */}
        <g transform="translate(24, 20)">
          <rect x="0" y="8" width="22" height="38" rx="4" fill="#294625" stroke="#52824C" strokeWidth="1.2"/>
          <rect x="3" y="14" width="16" height="18" fill="#EEF5ED"/>
          <text x="5" y="21" fontSize="4" fontWeight="bold" fill="#162414">Micro</text>
          <text x="5" y="26" fontSize="3" fill="#4B6E45">GLP-1</text>
          <rect x="5" y="3" width="12" height="6" fill="#91A88C"/>
          <rect x="3" y="0" width="16" height="4" rx="1.5" fill="#DCE7D9"/>
        </g>
        {/* Microdose vial 2 */}
        <g transform="translate(50, 32)">
          <rect x="0" y="6" width="18" height="32" rx="3" fill="#20381C" stroke="#487242" strokeWidth="1"/>
          <rect x="2" y="12" width="14" height="14" fill="#E2EEE0"/>
          <rect x="4" y="2" width="10" height="5" fill="#7D9678"/>
          <rect x="2" y="0" width="14" height="3" rx="1" fill="#CDE0CA"/>
        </g>
      </svg>
    </div>
  );
}

function TRTVialsGraphic() {
  return (
    <div style={{
      width: '124px',
      height: '100%',
      minHeight: '100px',
      background: 'linear-gradient(135deg, #300C09 0%, #521812 100%)',
      borderRadius: '24px 0 0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
        {/* Amber Vial */}
        <g transform="translate(36, 18)">
          <rect x="0" y="8" width="26" height="46" rx="4" fill="#752216" stroke="#B84939" strokeWidth="1.2"/>
          <rect x="4" y="16" width="18" height="22" fill="#FBF0EE"/>
          <line x1="6" y1="21" x2="18" y2="21" stroke="#752216" strokeWidth="1.2"/>
          <line x1="6" y1="25" x2="14" y2="25" stroke="#752216" strokeWidth="0.8"/>
          <rect x="7" y="3" width="12" height="6" fill="#A86A61"/>
          <rect x="4" y="0" width="18" height="4" rx="1.5" fill="#F0CBC5"/>
        </g>
        {/* Needle */}
        <g transform="translate(18, 38) rotate(20)">
          <line x1="0" y1="20" x2="25" y2="0" stroke="#CBD5E1" strokeWidth="1.5"/>
          <rect x="22" y="-3" width="8" height="6" rx="1" fill="#D97706"/>
        </g>
      </svg>
    </div>
  );
}

const CATEGORIES = [
  {
    id: 'glp1',
    title: 'GLP-1 Weight Loss',
    description: 'Kickstart your weight loss journey with prescription meds, dietitian visits, and coaching.',
    isNew: false,
    graphic: GLP1VialsGraphic
  },
  {
    id: 'longevity',
    title: 'Longevity',
    description: 'Boost your energy, sharpen your mind, and support overall health and wellness.',
    isNew: true,
    graphic: LongevityVialsGraphic
  },
  {
    id: 'microdosing',
    title: 'GLP-1 Microdosing',
    description: 'GLP-1 formulations designed to support energy, focus, sleep, and recovery.',
    isNew: true,
    graphic: MicrodosingVialsGraphic
  },
  {
    id: 'trt',
    title: 'Testosterone Replacement Therapy',
    description: 'Maximize strength, energy, and mood with expert-backed, prescription care.',
    isNew: true,
    graphic: TRTVialsGraphic
  }
];

export default function FridaysFrame2Interests({
  selectedCategories = ['glp1'],
  onToggleCategory
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
      {/* Title */}
      <h1 style={{
        fontSize: '24px',
        fontWeight: 700,
        color: '#363F33',
        margin: '0 0 32px',
        textAlign: 'center',
        letterSpacing: '-0.01em'
      }}>
        Choose all that you are interested in
      </h1>

      {/* Category Cards Stack */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
        {CATEGORIES.map(cat => {
          const isSelected = selectedCategories.includes(cat.id);
          const GraphicComponent = cat.graphic;

          return (
            <div
              key={cat.id}
              onClick={() => onToggleCategory && onToggleCategory(cat.id)}
              style={{
                width: '100%',
                minHeight: '104px',
                borderRadius: '16px',
                border: isSelected ? 'none' : '1px solid #E5E7EB',
                background: isSelected ? '#3F533D' : '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'space-between',
                overflow: 'hidden',
                transition: 'all 0.15s ease',
                boxShadow: isSelected ? '0 4px 12px rgba(63, 83, 61, 0.18)' : '0 1px 3px rgba(0,0,0,0.02)'
              }}
            >
              {/* Left Text Block */}
              <div style={{
                flex: 1,
                padding: '18px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '6px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: isSelected ? '#FFFFFF' : '#1F2937',
                    letterSpacing: '-0.01em'
                  }}>
                    {cat.title}
                  </span>
                  {cat.isNew && (
                    <span style={{
                      background: isSelected ? 'rgba(255,255,255,0.2)' : '#D1FAE5',
                      color: isSelected ? '#FFFFFF' : '#065F46',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '2px 7px',
                      borderRadius: '10px'
                    }}>
                      New!
                    </span>
                  )}
                </div>

                <p style={{
                  fontSize: '13px',
                  lineHeight: '1.45',
                  color: isSelected ? '#DCE5DC' : '#4B5563',
                  margin: 0
                }}>
                  {cat.description}
                </p>
              </div>

              {/* Right Illustration Thumbnail */}
              <GraphicComponent />
            </div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <p style={{
        fontSize: '11px',
        color: '#6B7280',
        fontStyle: 'italic',
        lineHeight: '1.45',
        textAlign: 'center',
        margin: 0,
        maxWidth: '560px'
      }}>
        Fridays does not manufacture compounded medications. Actual product appearance and labeling of the medication you receive will differ from website images.
      </p>
    </div>
  );
}
