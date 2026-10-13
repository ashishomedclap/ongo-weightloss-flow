import React from 'react';
import fridaysLogoImg from '../../assets/fridays/fridays-logo.png';
import iconUserImg from '../../assets/fridays/icon-user.png';
import iconEnvelopeImg from '../../assets/fridays/icon-envelope.png';

export { fridaysLogoImg, iconUserImg, iconEnvelopeImg };

export function FridaysLogo({ className = '', style = {}, height = 28 }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', ...style }} className={className}>
      <img
        src={fridaysLogoImg}
        alt="fridays"
        style={{
          height: `${height}px`,
          width: 'auto',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  );
}

export function FridaysUserIcon({ size = 20, style = {}, className = '' }) {
  return (
    <img
      src={iconUserImg}
      alt="user"
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain',
        display: 'inline-block',
        ...style
      }}
    />
  );
}

export function FridaysEnvelopeIcon({ size = 20, style = {}, className = '' }) {
  return (
    <img
      src={iconEnvelopeImg}
      alt="envelope"
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain',
        display: 'inline-block',
        ...style
      }}
    />
  );
}
