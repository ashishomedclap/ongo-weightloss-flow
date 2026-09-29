import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, UploadCloud, CheckCircle2, FileText, Camera } from 'lucide-react';

export default function Screen5dPrescription({ formData, updateFormData, onNext, onBack }) {
  const [fileName, setFileName] = useState(formData.uploadedRxName || '');
  const [fileSize, setFileSize] = useState(formData.uploadedRxSize || '');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileSize((file.size / 1024).toFixed(0) + ' KB');
      updateFormData({
        uploadedRxName: file.name,
        uploadedRxSize: (file.size / 1024).toFixed(0) + ' KB'
      });
    }
  };

  const handleContinue = (e) => {
    if (e) e.preventDefault();
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-nav-header">
        <button type="button" className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
        <span className="step-counter-text">Question 4 of 4</span>
      </div>

      <div className="heading-section" style={{ marginBottom: '24px' }}>
        <h1 className="page-title" style={{ fontSize: '28px' }}>
          Upload prescription or medication label
        </h1>
        <p className="page-subtitle">
          A photo of your previous prescription bottle or packaging helps your clinician verify your dose.
        </p>
      </div>

      {/* Clean Drag & Drop / File Upload Area */}
      <label
        htmlFor="rx-file-input"
        style={{
          border: `2px dashed ${fileName ? 'var(--color-accent)' : 'var(--color-border)'}`,
          background: fileName ? 'var(--color-green-pale)' : '#FCFBF9',
          borderRadius: '16px',
          padding: '32px 20px',
          textAlign: 'center',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '20px',
          transition: 'all 0.2s ease',
          boxShadow: 'var(--shadow-card)'
        }}
      >
        <div style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: fileName ? 'var(--color-green-light)' : '#F0EEE8',
          color: fileName ? 'var(--color-primary-dark)' : 'var(--color-accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {fileName ? <CheckCircle2 size={26} strokeWidth={2.4} /> : <UploadCloud size={26} strokeWidth={2.2} />}
        </div>

        <div>
          <span style={{
            fontSize: '15px',
            fontWeight: 700,
            color: 'var(--color-primary-dark)',
            display: 'block',
            marginBottom: '4px'
          }}>
            {fileName ? `Attached: ${fileName}` : 'Take photo or choose file'}
          </span>
          <span style={{ fontSize: '12.5px', color: 'var(--color-text-muted)' }}>
            {fileName ? `${fileSize} • Tap to replace` : 'JPEG, PNG, or PDF from your device'}
          </span>
        </div>

        <input
          id="rx-file-input"
          type="file"
          accept="image/*,application/pdf"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </label>

      {/* Primary Continue Button */}
      <button
        type="button"
        className="cta-button"
        onClick={handleContinue}
        style={{ marginBottom: '14px' }}
      >
        <span>{fileName ? 'Continue with prescription' : 'Continue'}</span>
        <ArrowRight size={18} />
      </button>

      {/* Skip Option */}
      {!fileName && (
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={handleContinue}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-secondary)',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            I don’t have my prescription label handy (Skip)
          </button>
        </div>
      )}
    </div>
  );
}
