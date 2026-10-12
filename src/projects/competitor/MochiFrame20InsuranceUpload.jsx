import React, { useState } from 'react';
import { Image as ImageIcon, Check, ChevronDown, Plus } from 'lucide-react';

export default function MochiFrame20InsuranceUpload({
  insuranceData = {},
  onChangeInsuranceData,
  onNext,
  onBack
}) {
  const [method, setMethod] = useState('photo'); // 'photo' | 'manual'
  const [relationship, setRelationship] = useState(insuranceData.relationship || 'Self');
  const [frontUploaded, setFrontUploaded] = useState(insuranceData.frontUploaded || false);
  const [backUploaded, setBackUploaded] = useState(insuranceData.backUploaded || false);
  const [providerName, setProviderName] = useState(insuranceData.providerName || '');
  const [memberId, setMemberId] = useState(insuranceData.memberId || '');
  const [groupNumber, setGroupNumber] = useState(insuranceData.groupNumber || '');

  const hasPhoto = frontUploaded;
  const hasManual = Boolean(providerName.trim() && memberId.trim());
  const isValid = method === 'photo' ? hasPhoto : hasManual;

  const handleNext = () => {
    if (onChangeInsuranceData) {
      onChangeInsuranceData({
        relationship,
        method,
        frontUploaded,
        backUploaded,
        providerName,
        memberId,
        groupNumber
      });
    }
    if (onNext) onNext();
  };

  return (
    <div 
      className="mochi-frame-20-content"
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
          Add your insurance information to check your coverage
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
          Upload photos of your card or enter your details manually. You'll confirm the information next.
        </p>
      </div>

      {/* Relationship to Policy Holder Select */}
      <div style={{ marginBottom: '24px', textAlign: 'left' }}>
        <label 
          style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: 500,
            color: '#343440',
            marginBottom: '8px'
          }}
        >
          Relationship to policy holder
        </label>
        <div style={{ position: 'relative' }}>
          <select
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            style={{
              width: '100%',
              height: '56px',
              borderRadius: '16px',
              border: '1.5px solid #D5D6E0',
              padding: '0 48px 0 18px',
              fontSize: '15px',
              fontWeight: 500,
              color: '#000045',
              backgroundColor: '#FFFFFF',
              appearance: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit'
            }}
          >
            <option value="Self">Self</option>
            <option value="Spouse">Spouse</option>
            <option value="Child">Child</option>
            <option value="Other">Other dependent</option>
          </select>
          <div style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#606069' }}>
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      {/* Segmented Method Tabs */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          backgroundColor: '#F3F4F6',
          borderRadius: '999px',
          padding: '4px',
          marginBottom: '28px'
        }}
      >
        <button
          type="button"
          onClick={() => setMethod('photo')}
          style={{
            padding: '10px 16px',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: method === 'photo' ? '#EAEAF2' : 'transparent',
            color: '#000045',
            fontWeight: method === 'photo' ? 600 : 500,
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          Upload photo
        </button>
        <button
          type="button"
          onClick={() => setMethod('manual')}
          style={{
            padding: '10px 16px',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: method === 'manual' ? '#EAEAF2' : 'transparent',
            color: '#000045',
            fontWeight: method === 'manual' ? 600 : 500,
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          Enter manually
        </button>
      </div>

      {/* Method: Photo Upload */}
      {method === 'photo' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
          {/* Front of Card */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              borderRadius: '16px',
              border: frontUploaded ? '1.5px solid #000045' : '1.5px solid #D5D6E0',
              backgroundColor: frontUploaded ? '#F4F5FB' : '#FFFFFF',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div 
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: '#F3F4F8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#606069'
                }}
              >
                <ImageIcon size={22} />
              </div>
              <span style={{ fontSize: '15px', fontWeight: 500, color: '#000045' }}>
                Front of card
              </span>
            </div>

            <button
              type="button"
              onClick={() => setFrontUploaded(!frontUploaded)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '999px',
                border: 'none',
                backgroundColor: frontUploaded ? '#EAEAF2' : '#F4F5FB',
                color: '#000045',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {frontUploaded ? (
                <>
                  <Check size={14} color="#059669" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus size={14} />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>

          {/* Back of Card */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              borderRadius: '16px',
              border: backUploaded ? '1.5px solid #000045' : '1.5px solid #D5D6E0',
              backgroundColor: backUploaded ? '#F4F5FB' : '#FFFFFF',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div 
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: '#F3F4F8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#606069'
                }}
              >
                <ImageIcon size={22} />
              </div>
              <span style={{ fontSize: '15px', fontWeight: 500, color: '#000045' }}>
                Back of card
              </span>
            </div>

            <button
              type="button"
              onClick={() => setBackUploaded(!backUploaded)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '999px',
                border: 'none',
                backgroundColor: backUploaded ? '#EAEAF2' : '#F4F5FB',
                color: '#000045',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {backUploaded ? (
                <>
                  <Check size={14} color="#059669" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus size={14} />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Method: Manual Entry */}
      {method === 'manual' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 500, color: '#343440', marginBottom: '6px' }}>
              Insurance Provider / Plan Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Blue Cross Blue Shield, Aetna, UnitedHealthcare"
              value={providerName}
              onChange={(e) => setProviderName(e.target.value)}
              style={{
                width: '100%',
                height: '52px',
                borderRadius: '16px',
                border: '1.5px solid #D5D6E0',
                padding: '0 16px',
                fontSize: '15px',
                color: '#000045',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 500, color: '#343440', marginBottom: '6px' }}>
              Member ID *
            </label>
            <input
              type="text"
              placeholder="e.g. W123456789"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              style={{
                width: '100%',
                height: '52px',
                borderRadius: '16px',
                border: '1.5px solid #D5D6E0',
                padding: '0 16px',
                fontSize: '15px',
                color: '#000045',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 500, color: '#343440', marginBottom: '6px' }}>
              Group Number (optional)
            </label>
            <input
              type="text"
              placeholder="e.g. GRP-98765"
              value={groupNumber}
              onChange={(e) => setGroupNumber(e.target.value)}
              style={{
                width: '100%',
                height: '52px',
                borderRadius: '16px',
                border: '1.5px solid #D5D6E0',
                padding: '0 16px',
                fontSize: '15px',
                color: '#000045',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>
      )}

      {/* Next Button */}
      <button
        type="button"
        disabled={!isValid}
        onClick={handleNext}
        style={{
          width: '100%',
          height: '52px',
          borderRadius: '9999px',
          border: 'none',
          backgroundColor: isValid ? '#000045' : '#EAEAF2',
          color: isValid ? '#FFFFFF' : '#848494',
          fontSize: '16px',
          fontWeight: 600,
          cursor: isValid ? 'pointer' : 'not-allowed',
          transition: 'all 0.15s ease',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          if (isValid) e.currentTarget.style.backgroundColor = '#000060';
        }}
        onMouseLeave={(e) => {
          if (isValid) e.currentTarget.style.backgroundColor = '#000045';
        }}
      >
        Next
      </button>
    </div>
  );
}
