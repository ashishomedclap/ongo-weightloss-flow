import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ThemedDropdown from './ThemedDropdown';

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
    state: formData.state || '' // Auto-copy from screen 2
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
        STEP 12 OF 13 · SHIPPING INFORMATION
      </div>

      <div className="heading-section">
        <h1 className="page-title">Where should we send your medication?</h1>
        <p className="page-subtitle">
          If medication is prescribed and fulfillment is required, we'll use this address for delivery.
        </p>
      </div>

      {error && (
        <div className="form-error-banner" style={{ marginBottom: '16px' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleContinue} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div className="input-capsule-wrap" style={{ margin: 0 }}>
          <label className="field-top-label" htmlFor="street">Street Address</label>
          <input
            id="street"
            type="text"
            name="street"
            autoComplete="address-line1"
            placeholder="123 Main St"
            className="input-capsule"
            value={address.street}
            onChange={handleChange}
          />
        </div>
        
        <div className="input-capsule-wrap" style={{ margin: 0 }}>
          <label className="field-top-label" htmlFor="apt">Apt / Suite (Optional)</label>
          <input
            id="apt"
            type="text"
            name="apt"
            autoComplete="address-line2"
            placeholder="Apt 4B"
            className="input-capsule"
            value={address.apt}
            onChange={handleChange}
          />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div className="input-capsule-wrap" style={{ margin: 0 }}>
            <label className="field-top-label" htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              autoComplete="address-level2"
              placeholder="San Francisco"
              className="input-capsule"
              value={address.city}
              onChange={handleChange}
            />
          </div>
          <div className="input-capsule-wrap" style={{ margin: 0 }}>
            <label className="field-top-label" htmlFor="zip">ZIP Code</label>
            <input
              id="zip"
              type="text"
              name="zip"
              autoComplete="postal-code"
              placeholder="94105"
              className="input-capsule"
              value={address.zip}
              onChange={handleChange}
              maxLength={10}
            />
          </div>
        </div>

        <div className="input-capsule-wrap" style={{ margin: 0 }}>
          <label className="field-top-label" htmlFor="state">State</label>
          <div style={{ position: 'relative', marginTop: '4px' }}>
            <ThemedDropdown
              value={address.state}
              options={US_STATES}
              onChange={(val) => handleChange({ target: { name: 'state', value: val } })}
              placeholder="Select State..."
            />
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

// Trigger HMR

// Trigger HMR 2

// Trigger HMR 3
