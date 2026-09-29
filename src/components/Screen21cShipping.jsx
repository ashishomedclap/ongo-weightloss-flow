import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", 
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", 
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", 
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", 
  "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

export default function Screen21cShipping({ formData, updateFormData, onNext, onBack }) {
  const [address, setAddress] = useState(formData.shippingAddress || {
    street: '',
    apt: '',
    city: '',
    zip: '',
    state: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!address.street || !address.city || !address.zip || !address.state) {
      setError('Please fill in all required fields.');
      return;
    }
    
    updateFormData({ shippingAddress: address });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 12.8 · SHIPPING
      </div>

      <div className="heading-section">
        <h1 className="page-title">Shipping address</h1>
        <p className="page-subtitle">
          Where should we ship your treatment?
        </p>
      </div>

      {error && (
        <div className="form-error-banner" style={{ marginBottom: '16px' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleContinue} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input
          type="text"
          name="street"
          placeholder="Street address"
          className="input-capsule"
          value={address.street}
          onChange={handleChange}
        />
        
        <input
          type="text"
          name="apt"
          placeholder="Apt / Unit (optional)"
          className="input-capsule"
          value={address.apt}
          onChange={handleChange}
        />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <input
            type="text"
            name="city"
            placeholder="City"
            className="input-capsule"
            value={address.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip code"
            className="input-capsule"
            value={address.zip}
            onChange={handleChange}
            maxLength={10}
          />
        </div>

        <div style={{ position: 'relative' }}>
          <select
            name="state"
            className="input-capsule"
            value={address.state}
            onChange={handleChange}
            style={{
              appearance: 'none',
              WebkitAppearance: 'none',
              width: '100%',
              cursor: 'pointer',
              color: address.state ? 'var(--color-text)' : '#888',
              paddingRight: '40px',
            }}
          >
            <option value="" disabled>State</option>
            {US_STATES.map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
          <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#999' }}>
            <ChevronDown size={18} strokeWidth={2.5} />
          </div>
        </div>

        <button
          type="submit"
          className={`cta-button-pill ${(address.street && address.city && address.zip && address.state) ? 'active' : ''}`}
          style={{ marginTop: '24px' }}
        >
          <span>Continue</span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </button>
      </form>
    </div>
  );
}
