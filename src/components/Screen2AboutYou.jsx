import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import ThemedDropdown from './ThemedDropdown';

const US_STATES = [
  "Select state",
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", 
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", 
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", 
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", 
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export default function Screen2AboutYou({ formData, updateFormData, onNext, onBack }) {
  const [firstName, setFirstName] = useState(formData.firstName || '');
  const [lastName, setLastName] = useState(formData.lastName || '');
  const [gender, setGender] = useState(formData.gender || '');
  const [dob, setDob] = useState(formData.dob || '');
  const [state, setState] = useState(formData.state || '');
  const [phone, setPhone] = useState(formData.phone || '');
  const [error, setError] = useState('');

  const isFormValid = firstName.trim().length > 0 && lastName.trim().length > 0 && gender !== '';

  const handleContinue = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      setError('Please enter your first and last name');
      return;
    }
    if (!gender || gender === 'Select gender') {
      setError('Please select your gender');
      return;
    }
    setError('');
    updateFormData({
      firstName,
      lastName,
      gender,
      dob,
      state: state === 'Select state' ? '' : state,
      phone
    });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="heading-section">
        <h1 className="page-title">Tell us a little about you</h1>
        <p className="page-subtitle">
          These details help your care team understand who you are and provide care appropriate for your state and needs.
        </p>
      </div>

      <form onSubmit={handleContinue} style={{ width: '100%' }}>
        {error && (
          <div className="form-error-banner">
            {error}
          </div>
        )}

        {/* First Name & Last Name row */}
        <div className="input-capsule-row-2">
          <div className="input-capsule-wrap">
            <label className="field-top-label" htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              type="text"
              className="input-capsule"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-capsule-wrap">
            <label className="field-top-label" htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              type="text"
              className="input-capsule"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Select gender dropdown */}
        <div className="input-capsule-wrap select-wrap" style={{ margin: 0 }}>
          <label className="field-top-label">Gender</label>
          <div style={{ position: 'relative', marginTop: '4px' }}>
            <ThemedDropdown
              value={gender}
          options={['Female', 'Male', 'Non-binary', 'Prefer not to say']}
          onChange={setGender}
          placeholder="Select gender"
            />
          </div>
        </div>

        {/* Date of birth with calendar icon */}
        <div className="input-capsule-wrap has-suffix">
          <label className="field-top-label" htmlFor="dob-input">Date of Birth</label>
          <input
            id="dob-input"
            type="text"
            className="input-capsule"
            placeholder="Date of birth"
            value={dob}
            onFocus={(e) => { e.target.type = 'date'; }}
            onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
            onChange={(e) => setDob(e.target.value)}
          />
          <span className="input-suffix-icon" aria-hidden="true">
            <Calendar size={18} strokeWidth={1.8} />
          </span>
        </div>

        {/* Select state */}
        <div className="input-capsule-wrap select-wrap" style={{ margin: 0 }}>
          <label className="field-top-label">State</label>
          <div style={{ position: 'relative', marginTop: '4px' }}>
            <ThemedDropdown
              value={state === 'Select state' ? '' : state}
          options={US_STATES.filter(s => s !== 'Select state')}
          onChange={setState}
          placeholder="Select state"
            />
          </div>
        </div>

        {/* Phone number */}
        <div className="input-capsule-wrap">
          <label className="field-top-label" htmlFor="phone-input">Phone Number</label>
          <input
            id="phone-input"
            type="tel"
            className="input-capsule"
            placeholder="+1(888) 655–5267"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Continue Button */}
        <button 
          type="submit" 
          className={`cta-button-pill ${isFormValid ? 'active' : ''}`}
        >
          <span>Continue</span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </button>
      </form>
    </div>
  );
}

// Trigger HMR
