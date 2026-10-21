import React, { useState, useEffect } from 'react';
import { ChevronDown, Image as ImageIcon, Plus, Check } from 'lucide-react';

export default function MochiFrame21ConfirmInsurance({
  formData = {},
  onConfirmInsurance,
  onNext,
  onBack
}) {
  const [insuranceType, setInsuranceType] = useState(formData.insuranceType || 'Commercial / Employer-sponsored');
  const [relationship, setRelationship] = useState(formData.relationship || 'Self');
  const [insuranceProvider, setInsuranceProvider] = useState(formData.insuranceProvider || '');
  const [state, setState] = useState(formData.selectedState || '');
  const [memberId, setMemberId] = useState(formData.memberId || '');
  const [groupId, setGroupId] = useState(formData.groupId || '');
  const [firstName, setFirstName] = useState(formData.firstName || '');
  const [lastName, setLastName] = useState(formData.lastName || '');
  const [birthMonth, setBirthMonth] = useState(formData.birthMonth || '');
  const [birthDay, setBirthDay] = useState(formData.birthDay || '');
  const [birthYear, setBirthYear] = useState(formData.birthYear || '');
  const [gender, setGender] = useState(formData.gender || '');
  const [frontCard, setFrontCard] = useState(Boolean(formData.frontUploaded));
  const [backCard, setBackCard] = useState(Boolean(formData.backUploaded));

  useEffect(() => {
    if (formData.insuranceType) setInsuranceType(formData.insuranceType);
    if (formData.relationship) setRelationship(formData.relationship);
    if (formData.insuranceProvider) setInsuranceProvider(formData.insuranceProvider);
    if (formData.selectedState) setState(formData.selectedState);
    if (formData.memberId) setMemberId(formData.memberId);
    if (formData.groupId) setGroupId(formData.groupId);
    if (formData.firstName) setFirstName(formData.firstName);
    if (formData.lastName) setLastName(formData.lastName);
    if (formData.birthMonth) setBirthMonth(formData.birthMonth);
    if (formData.birthDay) setBirthDay(formData.birthDay);
    if (formData.birthYear) setBirthYear(formData.birthYear);
    if (formData.gender) setGender(formData.gender);
  }, [formData]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (onConfirmInsurance) {
      onConfirmInsurance({
        insuranceType,
        relationship,
        insuranceProvider,
        state,
        memberId,
        groupId,
        firstName,
        lastName,
        birthMonth,
        birthDay,
        birthYear,
        gender
      });
    }
    if (onNext) onNext();
  };

  const labelStyle = {
    display: 'block',
    fontSize: '13.5px',
    fontWeight: 500,
    color: '#343440',
    marginBottom: '6px',
    textAlign: 'left'
  };

  const inputStyle = {
    width: '100%',
    height: '52px',
    borderRadius: '16px',
    border: '1.5px solid #D5D6E0',
    padding: '0 16px',
    fontSize: '15px',
    color: '#000045',
    backgroundColor: '#FFFFFF',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    cursor: 'pointer',
    paddingRight: '40px'
  };

  return (
    <div 
      className="mochi-frame-21-content"
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '32px 20px 80px',
        boxSizing: 'border-box',
        fontFamily: "'Instrument Sans', system-ui, -apple-system, sans-serif",
        color: '#000045'
      }}
    >
      {/* Title & Subtitle */}
      <div style={{ marginBottom: '28px', textAlign: 'left' }}>
        <h1 
          style={{
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '1.3',
            color: '#000045',
            margin: '0 0 8px 0',
            letterSpacing: '-0.015em'
          }}
        >
          Confirm your insurance information
        </h1>
        <p 
          style={{
            fontSize: '14.5px',
            fontWeight: 400,
            lineHeight: '1.45',
            color: '#606069',
            margin: '0'
          }}
        >
          Ensure the information collected is correct and fill in any missing fields.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
        {/* Insurance Type */}
        <div>
          <label style={labelStyle}>
            Insurance type <span style={{ color: '#E11D48' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={insuranceType}
              onChange={(e) => setInsuranceType(e.target.value)}
              style={selectStyle}
            >
              <option value="Commercial / Employer-sponsored">Commercial / Employer-sponsored</option>
              <option value="Individual / ACA Market">Individual / ACA Market</option>
              <option value="Medicare Advantage">Medicare Advantage</option>
              <option value="Medicaid">Medicaid</option>
              <option value="Other">Other</option>
            </select>
            <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#606069' }}>
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Relationship */}
        <div>
          <label style={labelStyle}>
            Relationship to policy holder <span style={{ color: '#E11D48' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              style={selectStyle}
            >
              <option value="Self">Self</option>
              <option value="Spouse">Spouse</option>
              <option value="Child">Child</option>
              <option value="Other">Other dependent</option>
            </select>
            <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#606069' }}>
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Insurance Provider */}
        <div>
          <label style={labelStyle}>
            Insurance Provider <span style={{ color: '#E11D48' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={insuranceProvider}
              onChange={(e) => setInsuranceProvider(e.target.value)}
              style={selectStyle}
            >
              <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
              <option value="Aetna">Aetna</option>
              <option value="Cigna">Cigna</option>
              <option value="UnitedHealthcare">UnitedHealthcare</option>
              <option value="Anthem">Anthem</option>
              <option value="Kaiser Permanente">Kaiser Permanente</option>
            </select>
            <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#606069' }}>
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* State */}
        <div>
          <label style={labelStyle}>
            State <span style={{ color: '#E11D48' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              style={selectStyle}
            >
              <option value="Colorado">Colorado</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
              <option value="Florida">Florida</option>
              <option value="New York">New York</option>
            </select>
            <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#606069' }}>
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Member ID */}
        <div>
          <label style={labelStyle}>
            Member ID <span style={{ color: '#E11D48' }}>*</span>
          </label>
          <input
            type="text"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Group ID */}
        <div>
          <input
            type="text"
            placeholder="Enter group ID"
            value={groupId}
            onChange={(e) => setGroupId(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Policy Holder First Name */}
        <div>
          <label style={labelStyle}>
            Policy holder's first name <span style={{ color: '#E11D48' }}>*</span>
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Policy Holder Last Name */}
        <div>
          <label style={labelStyle}>
            Policy holder's last name <span style={{ color: '#E11D48' }}>*</span>
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Policy Holder DOB */}
        <div>
          <label style={labelStyle}>
            Policy holder's date of birth <span style={{ color: '#E11D48' }}>*</span>
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '8px' }}>
            <div style={{ position: 'relative' }}>
              <select
                value={birthMonth}
                onChange={(e) => setBirthMonth(e.target.value)}
                style={selectStyle}
              >
                {months.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#606069' }}>
                <ChevronDown size={16} />
              </div>
            </div>
            <input
              type="text"
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              placeholder="DD"
              style={{ ...inputStyle, textAlign: 'center' }}
            />
            <input
              type="text"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              placeholder="YYYY"
              style={{ ...inputStyle, textAlign: 'center' }}
            />
          </div>
        </div>

        {/* Policy Holder Gender */}
        <div>
          <label style={labelStyle}>
            Policy holder's gender <span style={{ color: '#E11D48' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={selectStyle}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#606069' }}>
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Insurance Card (optional) */}
        <div>
          <label style={labelStyle}>Insurance Card (optional)</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '16px',
                border: '1.5px solid #D5D6E0',
                backgroundColor: '#FFFFFF'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#F3F4F8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#606069' }}>
                  <ImageIcon size={20} />
                </div>
                <span style={{ fontSize: '14.5px', fontWeight: 500, color: '#000045' }}>Front of card</span>
              </div>
              <button
                type="button"
                onClick={() => setFrontCard(!frontCard)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  border: 'none',
                  backgroundColor: '#F4F5FB',
                  color: '#000045',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {frontCard ? <><Check size={14} color="#059669" /> Added</> : <><Plus size={14} /> Add</>}
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '16px',
                border: '1.5px solid #D5D6E0',
                backgroundColor: '#FFFFFF'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#F3F4F8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#606069' }}>
                  <ImageIcon size={20} />
                </div>
                <span style={{ fontSize: '14.5px', fontWeight: 500, color: '#000045' }}>Back of card</span>
              </div>
              <button
                type="button"
                onClick={() => setBackCard(!backCard)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  border: 'none',
                  backgroundColor: '#F4F5FB',
                  color: '#000045',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {backCard ? <><Check size={14} color="#059669" /> Added</> : <><Plus size={14} /> Add</>}
              </button>
            </div>
          </div>
        </div>

        {/* Submit CTA */}
        <div style={{ marginTop: '20px' }}>
          <button
            type="submit"
            style={{
              width: '100%',
              height: '52px',
              borderRadius: '9999px',
              border: 'none',
              backgroundColor: '#000045',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000060'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000045'}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
