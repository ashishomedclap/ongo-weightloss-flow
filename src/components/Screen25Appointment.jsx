import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Screen23Appointment({ formData, updateFormData, onNext, onBack }) {
  // Start with current month
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(formData.appointmentDate ? new Date(formData.appointmentDate) : null);
  const [selectedTime, setSelectedTime] = useState(formData.appointmentTime || null);
  const [error, setError] = useState('');

  // Helper to get local timezone string
  // Hardcoded to MDT for prototype demo as requested
  const timeZoneAbbr = 'MDT';

  // Calendar logic
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  // Mock available dates: Today and next 5 weekdays
  const isAvailable = (day) => {
    const date = new Date(year, month, day);
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const dayOfWeek = date.getDay();
    // Allow if it's today or in the future (within next 14 days) and not weekend
    return diffDays >= 0 && diffDays <= 14 && dayOfWeek !== 0 && dayOfWeek !== 6;
  };

  // Mock time slots
  const TIME_SLOTS = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

  const handleDateClick = (day) => {
    if (!isAvailable(day)) return;
    setSelectedDate(new Date(year, month, day));
    setSelectedTime(null); // Reset time when new date selected
    setError('');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      setError('Please select a date and time.');
      return;
    }
    
    updateFormData({ 
      appointmentDate: selectedDate.toISOString(),
      appointmentTime: selectedTime
    });
    onNext();
  };

  return (
    <div className="content-inner fade-in">
      <div className="step-tag-teal">
        STEP 14 OF 14 · BOOK CONSULTATION
      </div>

      <div className="heading-section">
        <h1 className="page-title">When would you like to meet your physician?</h1>
        <p className="page-subtitle">
          Consultations take 10–30 minutes. Pick a date, then choose a time that works for you.
        </p>
      </div>

      {error && (
        <div className="form-error-banner" style={{ marginBottom: '16px' }}>
          {error}
        </div>
      )}

      {/* Timezone banner */}
      <div style={{
        background: '#E8F5E9', // Light green tint
        border: '1px solid #A5D6A7',
        borderRadius: '8px',
        padding: '12px 16px',
        marginBottom: '24px',
        color: '#2E7D32',
        fontSize: '14px',
        fontWeight: 500
      }}>
        All appointment times are shown in Mountain Daylight Time (MDT).
      </div>

      {/* Month Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <button 
          onClick={handlePrevMonth} 
          style={{ width: '36px', height: '36px', borderRadius: '8px', border: 'none', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
        >
          <ChevronLeft size={20} color="#666" />
        </button>
        <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#000', margin: 0 }}>
          {monthNames[month]} {year}
        </h2>
        <button 
          onClick={handleNextMonth} 
          style={{ width: '36px', height: '36px', borderRadius: '8px', border: 'none', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
        >
          <ChevronRight size={20} color="#666" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div style={{ background: '#FFF', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', marginBottom: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', marginBottom: '16px', textAlign: 'center' }}>
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
            <div key={day} style={{ fontSize: '12px', fontWeight: 700, color: '#999', letterSpacing: '0.5px' }}>
              {day}
            </div>
          ))}
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', rowGap: '12px' }}>
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const available = isAvailable(day);
            const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === month && selectedDate?.getFullYear() === year;
            
            return (
              <div 
                key={day}
                onClick={() => handleDateClick(day)}
                style={{
                  height: '56px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '12px',
                  background: isSelected ? 'var(--color-primary)' : (available ? '#F5F4EF' : 'transparent'),
                  color: isSelected ? '#FFF' : (available ? '#000' : '#CCC'),
                  fontWeight: (isSelected || available) ? 600 : 400,
                  fontSize: '16px',
                  cursor: available ? 'pointer' : 'default',
                  position: 'relative',
                  transition: 'all 0.2s'
                }}
              >
                {day}
                {available && !isSelected && (
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '4px' }} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Time Slots (Shows when date is selected) */}
      {selectedDate ? (
        <div className="fade-in">
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px', textAlign: 'center', fontWeight: 500 }}>
            Available times for {monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {TIME_SLOTS.map(time => (
              <div
                key={time}
                onClick={() => setSelectedTime(time)}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  border: selectedTime === time ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  background: selectedTime === time ? 'var(--color-bg-teal)' : '#FFF',
                  textAlign: 'center',
                  fontWeight: selectedTime === time ? 700 : 500,
                  color: selectedTime === time ? 'var(--color-primary)' : '#000',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p style={{ fontSize: '14px', color: '#888', textAlign: 'center', marginBottom: '24px' }}>
          Select a highlighted date to choose a time.
        </p>
      )}

      {/* Scarcity message */}
      <div style={{ textAlign: 'center', fontSize: '13px', color: '#C81E1E', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
        <span aria-hidden="true">🔥</span> High demand: Only a few slots left this week!
      </div>

      <button
        type="button"
        className={`cta-button-pill ${(selectedDate && selectedTime) ? 'active' : ''}`}
        onClick={handleContinue}
      >
        <span>Book My Consultation</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}

// Trigger HMR
