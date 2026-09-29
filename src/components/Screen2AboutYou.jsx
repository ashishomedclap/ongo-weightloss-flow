import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const US_STATES = [
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
  const [state, setState] = useState(formData.state || 'California');
  const [phone, setPhone] = useState(formData.phone || '');
  const [error, setError] = useState('');

  const handleContinue = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      setError('Please enter your first and last name');
      return;
    }
    if (!gender) {
      setError('Please select a gender');
      return;
    }
    if (!dob) {
      setError('Please enter your date of birth');
      return;
    }
    setError('');
    updateFormData({
      firstName,
      lastName,
      gender,
      dob,
      state,
      phone
    });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-nav-header">
        <button type="button" className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
        <span className="step-counter-text">Step 2 of 10</span>
      </div>

      <div className="heading-section">
        <h1 className="page-title">Tell us a little about you</h1>
        <p className="page-subtitle">
          This information helps us understand your health needs and personalize your care.
        </p>
      </div>

      <form onSubmit={handleContinue} style={{ width: '100%' }}>
        {error && (
          <div style={{
            background: '#FDF2F2',
            border: '1px solid #F8B4B4',
            color: '#9B1C1C',
            padding: '10px 14px',
            borderRadius: '10px',
            fontSize: '13px',
            marginBottom: '16px'
          }}>
            {error}
          </div>
        )}

        <div className="form-row-2">
          <div className="form-group">
            <label className="form-label" htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              type="text"
              className="form-input"
              placeholder="e.g. Sarah"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              type="text"
              className="form-input"
              placeholder="e.g. Miller"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Gender</label>
          <div className="selectable-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {['Female', 'Male', 'Prefer not to say'].map((option) => (
              <div
                key={option}
                className={`select-card-pill ${gender === option ? 'selected' : ''}`}
                onClick={() => setGender(option)}
                role="radio"
                aria-checked={gender === option}
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        <div className="form-row-2">
          <div className="form-group">
            <label className="form-label" htmlFor="dob-input">Date of Birth</label>
            <input
              id="dob-input"
              type="date"
              className="form-input"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="state-select">State</label>
            <select
              id="state-select"
              className="form-select"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              {US_STATES.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone-input">
            Phone Number
            <span className="form-label-hint">For consultation scheduling</span>
          </label>
          <input
            id="phone-input"
            type="tel"
            className="form-input"
            placeholder="(555) 000-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="submit" className="cta-button" style={{ marginTop: '12px' }}>
          <span>Continue</span>
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}
