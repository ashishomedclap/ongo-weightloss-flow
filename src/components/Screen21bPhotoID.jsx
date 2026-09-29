import React, { useState } from 'react';
import { IdCard, Check, Lock, Folder, Camera, Trash2 } from 'lucide-react';

export default function Screen21bPhotoID({ formData, updateFormData, onNext, onBack }) {
  const [uploaded, setUploaded] = useState(formData.idPhoto || false);

  const handleUpload = (e) => {
    e.preventDefault();
    // Simulate upload delay for prototype feel
    setTimeout(() => setUploaded(true), 400);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    setUploaded(false);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!uploaded) return;
    updateFormData({ idPhoto: true });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 12.5 · VERIFICATION
      </div>

      <div className="heading-section">
        <h1 className="page-title">Upload your photo ID</h1>
        <p className="page-subtitle">
          A government-issued ID (driver's license, passport, or state ID) helps verify your identity.
        </p>
      </div>

      {!uploaded ? (
        <div className="fade-in">
          <div style={{
            background: '#FFF',
            border: '2px dashed #E0E0E0',
            borderRadius: '24px',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'var(--color-bg-teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '32px'
            }}>
              <IdCard size={40} color="var(--color-primary)" strokeWidth={1.5} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Check size={12} color="#2E7D32" strokeWidth={3} />
                </div>
                <span style={{ fontSize: '13px', color: '#666', fontWeight: 500 }}>Clearly shows your entire ID</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Check size={12} color="#2E7D32" strokeWidth={3} />
                </div>
                <span style={{ fontSize: '13px', color: '#666', fontWeight: 500 }}>Not cropped, blurry, or dark</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#FFF3E0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Lock size={12} color="#F5B011" strokeWidth={3} />
                </div>
                <span style={{ fontSize: '13px', color: '#666', fontWeight: 500 }}>Only your healthcare team will see this</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <button
              type="button"
              onClick={handleUpload}
              style={{
                height: '56px',
                borderRadius: '28px',
                background: '#FFF',
                border: '1px solid var(--color-border)',
                color: '#000',
                fontSize: '15px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <Folder size={18} color="#F5B011" fill="#F5B011" />
              <span>Select photo</span>
            </button>
            <button
              type="button"
              onClick={handleUpload}
              style={{
                height: '56px',
                borderRadius: '28px',
                background: '#111',
                border: 'none',
                color: '#FFF',
                fontSize: '15px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <Camera size={18} color="#999" />
              <span>Take photo</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="fade-in">
          <div style={{
            background: '#FFF',
            border: '1px solid var(--color-border)',
            borderRadius: '24px',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--color-bg-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IdCard size={24} color="var(--color-primary)" />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '15px', color: '#000' }}>ID_Photo.jpg</div>
                <div style={{ fontSize: '13px', color: '#666' }}>Upload complete</div>
              </div>
            </div>
            <button
              onClick={handleRemove}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
            >
              <Trash2 size={20} color="#999" />
            </button>
          </div>

          <button
            type="button"
            className="cta-button-pill active"
            onClick={handleContinue}
          >
            <span>Continue</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </div>
  );
}
