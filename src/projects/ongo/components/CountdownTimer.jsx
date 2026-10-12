import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function CountdownTimer({ initialMinutes = 5 }) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div style={{
      background: '#FDF2F2',
      borderTop: '1px solid #F8B4B4',
      borderBottom: '1px solid #F8B4B4',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      color: '#9B1C1C'
    }}>
      <div style={{ marginTop: '2px' }}>
        <Clock size={20} strokeWidth={2.5} color="#C81E1E" />
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: '14.5px', marginBottom: '4px' }}>
          Offer expires in {timeString}
        </div>
        <div style={{ fontSize: '13px', lineHeight: '1.4' }}>
          Complete your plan selection and payment now to lock in your $100+ savings (Free Nutritionist & Shipping).
        </div>
      </div>
    </div>
  );
}
