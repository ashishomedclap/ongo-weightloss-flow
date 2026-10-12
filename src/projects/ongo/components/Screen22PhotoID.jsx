import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, Lock, Camera } from 'lucide-react';

export default function Screen21bPhotoID({ formData, updateFormData, onNext, onBack }) {
  const [fileName, setFileName] = useState(formData.idPhotoName || '');
  const [fileSize, setFileSize] = useState(formData.idPhotoSize || '');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileSize((file.size / 1024).toFixed(0) + ' KB');
      updateFormData({
        idPhotoName: file.name,
        idPhotoSize: (file.size / 1024).toFixed(0) + ' KB',
        idPhoto: true
      });
    }
  };

  const handleContinue = (e) => {
    if (e) e.preventDefault();
    if (fileName) {
      onNext();
    }
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 11 OF 13 · IDENTITY VERIFICATION
      </div>

      <div className="heading-section">
        <h1 className="page-title">Upload your photo ID</h1>
        <p className="page-subtitle">
          Before your consultation, we need to verify your identity. A government-issued ID (driver's license, passport, or state ID) is required.
        </p>
      </div>

      {/* File Upload Area */}
      {!fileName ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <label
            htmlFor="id-file-input-upload"
            className="upload-zone-card"
            style={{ margin: 0, padding: '24px 12px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div className="upload-icon-circle" style={{ margin: '0 0 12px' }}>
              <UploadCloud size={24} strokeWidth={2.2} />
            </div>
            <span className="upload-title-text" style={{ fontSize: '14px' }}>Upload File</span>
            <input
              id="id-file-input-upload"
              type="file"
              accept="image/*,application/pdf"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </label>

          <label
            htmlFor="id-file-input-camera"
            className="upload-zone-card"
            style={{ margin: 0, padding: '24px 12px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div className="upload-icon-circle" style={{ margin: '0 0 12px' }}>
              <Camera size={24} strokeWidth={2.2} />
            </div>
            <span className="upload-title-text" style={{ fontSize: '14px' }}>Open Camera</span>
            <input
              id="id-file-input-camera"
              type="file"
              accept="image/*"
              capture="environment"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </label>
        </div>
      ) : (
        <label
          htmlFor="id-file-input-replace"
          className="upload-zone-card has-file"
        >
          <div className="upload-icon-circle">
            <CheckCircle2 size={26} strokeWidth={2.4} />
          </div>
          <div>
            <span className="upload-title-text">Attached: {fileName}</span>
            <span className="upload-sub-text">{fileSize} • Tap to replace</span>
          </div>
          <input
            id="id-file-input-replace"
            type="file"
            accept="image/*,application/pdf"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </label>
      )}

      {/* Security Context */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px', marginBottom: '24px' }}>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#FFF3E0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Lock size={12} color="#F5B011" strokeWidth={3} />
        </div>
        <span style={{ fontSize: '13px', color: '#666', fontWeight: 500, lineHeight: '1.4' }}>
          Your ID is used to verify your identity and protect your healthcare account.
        </span>
      </div>

      <button
        type="button"
        className={`cta-button-pill ${fileName ? 'active' : ''}`}
        onClick={handleContinue}
      >
        <span>Continue</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
