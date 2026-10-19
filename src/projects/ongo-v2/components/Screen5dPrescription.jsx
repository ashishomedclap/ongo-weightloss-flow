import React, { useState } from 'react';
import { UploadCloud, CheckCircle2 } from 'lucide-react';

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
      <div className="step-tag-teal">
        STEP 4 OF 8 · GLP-1 HISTORY
      </div>

      <div className="heading-section">
        <h1 className="page-title">Have your previous prescription handy?</h1>
        <p className="page-subtitle">
          Uploading a photo of your prescription bottle or label can help your physician review your previous treatment more easily.
        </p>
      </div>

      {/* Clean Drag & Drop / File Upload Area */}
      <label
        htmlFor="rx-file-input"
        className={`upload-zone-card ${fileName ? 'has-file' : ''}`}
      >
        <div className="upload-icon-circle">
          {fileName ? <CheckCircle2 size={26} strokeWidth={2.4} /> : <UploadCloud size={26} strokeWidth={2.2} />}
        </div>

        <div>
          <span className="upload-title-text">
            {fileName ? `Attached: ${fileName}` : 'Take photo or choose file'}
          </span>
          <span className="upload-sub-text">
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
        className="cta-button-pill active"
        onClick={handleContinue}
        style={{ marginBottom: '14px' }}
      >
        <span>{fileName ? 'Continue with prescription' : 'Continue'}</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>

      {/* Skip Option */}
      {!fileName && (
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={handleContinue}
            className="text-link-btn"
          >
            I don't have my prescription label handy (Skip)
          </button>
        </div>
      )}
    </div>
  );
}
