import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Globe, 
  ArrowRight, 
  ArrowLeft,
  Video
} from 'lucide-react';

export default function Screen3ScheduleConsultation({ 
  formData, 
  updateFormData, 
  onNext, 
  onBack 
}) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(
    formData?.appointmentDate 
      ? new Date(formData.appointmentDate) 
      : new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [selectedDate, setSelectedDate] = useState(
    formData?.appointmentDate ? new Date(formData.appointmentDate) : null
  );
  const [selectedTime, setSelectedTime] = useState(formData?.appointmentTime || '');
  const [selectedTimezone, setSelectedTimezone] = useState(formData?.timezone || 'MDT');
  const [error, setError] = useState('');

  // Calendar calculations
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  // Availability logic: Weekdays within next 21 days
  const isAvailable = (day) => {
    const candidate = new Date(year, month, day);
    const dayOfWeek = candidate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return false;
    
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const candidateMidnight = new Date(year, month, day);
    const diffTime = candidateMidnight.getTime() - todayMidnight.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    return diffDays >= 0 && diffDays <= 21;
  };

  const handleDateClick = (day) => {
    if (!isAvailable(day)) return;
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
    setError('');
  };

  const TIME_SLOTS = {
    morning: ['09:00 AM', '09:45 AM', '10:30 AM', '11:15 AM'],
    afternoon: ['01:00 PM', '01:45 PM', '02:30 PM', '03:15 PM'],
    evening: ['04:00 PM', '04:45 PM', '05:30 PM']
  };

  const handleSlotClick = (time) => {
    setSelectedTime(time);
    setError('');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!selectedDate) {
      setError('Please select an appointment date from the calendar.');
      return;
    }
    if (!selectedTime) {
      setError('Please choose an available appointment time slot.');
      return;
    }

    const formattedDate = new Intl.DateTimeFormat('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(selectedDate);

    updateFormData({
      appointmentDate: selectedDate.toISOString(),
      formattedAppointmentDate: formattedDate,
      appointmentTime: selectedTime,
      timezone: selectedTimezone
    });

    onNext();
  };

  const formattedSelectedDate = selectedDate
    ? new Intl.DateTimeFormat('en-US', { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric' 
      }).format(selectedDate)
    : null;

  return (
    <div className="content-inner fade-in" style={{ maxWidth: '680px', margin: '0 auto', paddingBottom: '40px' }}>
      
      {/* Step Badge */}
      <div className="step-tag-teal" style={{ margin: '0 auto 14px auto', display: 'flex', justifyContent: 'center' }}>
        STEP 3 OF 5 · SCHEDULE CONSULTATION
      </div>

      {/* Screen Title */}
      <div className="heading-section" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 className="page-title" style={{ fontSize: '28px', color: '#111827', marginBottom: '8px' }}>
          When would you like to meet your support care team?
        </h1>
        <p className="page-subtitle" style={{ fontSize: '15px', color: '#6B7280', margin: '0 auto', maxWidth: '520px' }}>
          Consultations take 15–20 minutes. Pick a date, then choose a time that works for you.
        </p>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="form-error-banner" style={{ marginBottom: '18px' }}>
          {error}
        </div>
      )}

      {/* Timezone banner */}
      <div style={{
        background: '#E8F5E9',
        border: '1px solid #A5D6A7',
        borderRadius: '12px',
        padding: '12px 18px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2E7D32', fontSize: '13.5px', fontWeight: 600 }}>
          <Video size={16} />
          <span>All appointment times are shown in {selectedTimezone}. (100% Virtual Visit)</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Globe size={14} color="#2E7D32" />
          <select
            value={selectedTimezone}
            onChange={(e) => setSelectedTimezone(e.target.value)}
            style={{
              background: '#FFFFFF',
              border: '1px solid #81C784',
              borderRadius: '8px',
              padding: '4px 10px',
              fontSize: '12px',
              fontWeight: 700,
              color: '#2E7D32',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="MDT">Mountain (MDT)</option>
            <option value="EDT">Eastern (EDT)</option>
            <option value="CDT">Central (CDT)</option>
            <option value="PDT">Pacific (PDT)</option>
          </select>
        </div>
      </div>

      {/* Month Navigation & Calendar Card */}
      <div style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        padding: '24px',
        border: '1px solid #E5E7EB',
        boxShadow: '0 8px 24px rgba(31, 79, 61, 0.06)',
        marginBottom: '22px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          paddingBottom: '14px',
          borderBottom: '1px solid #F3F4F6'
        }}>
          <button
            type="button"
            onClick={handlePrevMonth}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              border: '1px solid #E5E7EB',
              background: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#374151'
            }}
            title="Previous Month"
          >
            <ChevronLeft size={18} />
          </button>

          <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#111827', margin: 0 }}>
            {monthNames[month]} {year}
          </h2>

          <button
            type="button"
            onClick={handleNextMonth}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              border: '1px solid #E5E7EB',
              background: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#374151'
            }}
            title="Next Month"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Days of week header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '6px',
          textAlign: 'center',
          marginBottom: '10px'
        }}>
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d) => (
            <div key={d} style={{ fontSize: '11px', fontWeight: 800, color: '#9CA3AF', letterSpacing: '0.05em' }}>
              {d}
            </div>
          ))}
        </div>

        {/* Calendar Day Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '6px',
          rowGap: '8px'
        }}>
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const available = isAvailable(day);
            const isSelected = 
              selectedDate &&
              selectedDate.getDate() === day &&
              selectedDate.getMonth() === month &&
              selectedDate.getFullYear() === year;

            const isToday = 
              today.getDate() === day &&
              today.getMonth() === month &&
              today.getFullYear() === year;

            return (
              <button
                type="button"
                key={day}
                onClick={() => handleDateClick(day)}
                disabled={!available}
                style={{
                  height: '42px',
                  borderRadius: '12px',
                  border: isSelected 
                    ? '2px solid #1F4F3D' 
                    : isToday 
                    ? '1.5px solid #2F8968' 
                    : '1px solid transparent',
                  background: isSelected 
                    ? '#1F4F3D' 
                    : available 
                    ? '#F9FAF9' 
                    : '#FFFFFF',
                  color: isSelected 
                    ? '#FFFFFF' 
                    : available 
                    ? '#111827' 
                    : '#D1D5DB',
                  fontSize: '14px',
                  fontWeight: isSelected || available ? 700 : 400,
                  cursor: available ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.15s ease',
                  position: 'relative'
                }}
              >
                <span>{day}</span>
                {available && !isSelected && (
                  <span style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#2F8968',
                    position: 'absolute',
                    bottom: '4px'
                  }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slot Picker Section */}
      <div style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        padding: '24px',
        border: '1px solid #E5E7EB',
        boxShadow: '0 8px 24px rgba(31, 79, 61, 0.06)',
        marginBottom: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={18} color="#1F4F3D" />
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#111827', margin: 0 }}>
              Available Time Slots
            </h3>
          </div>
          {formattedSelectedDate && (
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#1F4F3D', background: '#DDF2DF', padding: '3px 10px', borderRadius: '8px' }}>
              {formattedSelectedDate}
            </span>
          )}
        </div>

        {!selectedDate ? (
          <div style={{
            padding: '28px 16px',
            textAlign: 'center',
            color: '#6B7280',
            fontSize: '14px',
            background: '#F9FAFB',
            borderRadius: '12px',
            border: '1px dashed #D1D5DB'
          }}>
            <CalendarIcon size={24} color="#9CA3AF" style={{ margin: '0 auto 8px' }} />
            Please select an appointment date from the calendar above to view available time slots.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Morning Slots */}
            <div>
              <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', marginBottom: '8px' }}>
                🌅 Morning (9:00 AM – 12:00 PM)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '8px' }}>
                {TIME_SLOTS.morning.map((slot) => {
                  const isSlotSelected = selectedTime === slot;
                  return (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => handleSlotClick(slot)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '10px',
                        border: isSlotSelected ? '2px solid #1F4F3D' : '1px solid #E5E7EB',
                        background: isSlotSelected ? '#1F4F3D' : '#F9FAF9',
                        color: isSlotSelected ? '#FFFFFF' : '#111827',
                        fontWeight: 700,
                        fontSize: '13px',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Afternoon Slots */}
            <div>
              <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', marginBottom: '8px' }}>
                ☀️ Afternoon (1:00 PM – 4:00 PM)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '8px' }}>
                {TIME_SLOTS.afternoon.map((slot) => {
                  const isSlotSelected = selectedTime === slot;
                  return (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => handleSlotClick(slot)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '10px',
                        border: isSlotSelected ? '2px solid #1F4F3D' : '1px solid #E5E7EB',
                        background: isSlotSelected ? '#1F4F3D' : '#F9FAF9',
                        color: isSlotSelected ? '#FFFFFF' : '#111827',
                        fontWeight: 700,
                        fontSize: '13px',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Evening Slots */}
            <div>
              <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', marginBottom: '8px' }}>
                🌙 Late Afternoon / Evening (4:00 PM – 6:00 PM)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '8px' }}>
                {TIME_SLOTS.evening.map((slot) => {
                  const isSlotSelected = selectedTime === slot;
                  return (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => handleSlotClick(slot)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '10px',
                        border: isSlotSelected ? '2px solid #1F4F3D' : '1px solid #E5E7EB',
                        background: isSlotSelected ? '#1F4F3D' : '#F9FAF9',
                        color: isSlotSelected ? '#FFFFFF' : '#111827',
                        fontWeight: 700,
                        fontSize: '13px',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        )}
      </div>

      {/* High Demand Warning Badge from Screen 24 screenshot */}
      <div style={{ textAlign: 'center', marginBottom: '20px', fontSize: '13px', color: '#D97706', fontWeight: 600 }}>
        🔥 High demand: Only a few slots left this week!
      </div>

      {/* Selected Appointment Confirmation Strip */}
      {selectedDate && selectedTime && (
        <div style={{
          background: '#ECFDF5',
          border: '1.5px solid #10B981',
          borderRadius: '16px',
          padding: '16px 20px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: '#065F46',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <CheckCircle2 size={22} />
          </div>
          <div>
            <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#065F46' }}>
              {formattedSelectedDate} at {selectedTime} ({selectedTimezone})
            </div>
            <div style={{ fontSize: '12.5px', color: '#047857' }}>
              Virtual Consultation &bull; Dr. Sarah Jenkins & Clinical Care Team
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            style={{
              flex: '0 0 auto',
              padding: '16px 20px',
              borderRadius: '999px',
              border: '1.5px solid #D1D5DB',
              background: '#FFFFFF',
              color: '#374151',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
            <span>Back</span>
          </button>
        )}

        <button
          type="button"
          onClick={handleContinue}
          className="cta-button-pill active"
          style={{
            flex: 1,
            padding: '16px 24px',
            fontSize: '16px',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            background: '#1F4F3D',
            boxShadow: '0 8px 20px rgba(31, 79, 61, 0.25)',
            margin: 0
          }}
        >
          <span>Continue to Health Assessment</span>
          <ArrowRight size={18} strokeWidth={2.5} />
        </button>
      </div>

    </div>
  );
}
