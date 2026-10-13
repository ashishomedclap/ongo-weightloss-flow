import React from 'react';
import { Dumbbell, Dna, Zap, Flame, Moon, Sparkles } from 'lucide-react';

const GOALS = [
  {
    id: 'muscle',
    title: 'Protect Lean Muscle',
    icon: Dumbbell
  },
  {
    id: 'anti_aging',
    title: 'Anti-Aging & DNA Repair',
    icon: Dna
  },
  {
    id: 'energy',
    title: 'Boost Energy & Focus',
    icon: Zap
  },
  {
    id: 'hormone',
    title: 'Hormone Balance & Libido',
    icon: Flame
  },
  {
    id: 'sleep',
    title: 'Deep Sleep & Recovery',
    icon: Moon
  },
  {
    id: 'skin_hair',
    title: 'Prevent Hair Loss & Skin Aging',
    icon: Sparkles
  }
];

export default function FridaysFrame5OtherGoals({
  selectedGoals = [],
  onToggleGoal
}) {
  return (
    <div style={{
      width: '100%',
      maxWidth: '680px',
      margin: '0 auto',
      padding: '48px 20px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Title & Subtitle */}
      <h1 style={{
        fontSize: '24px',
        fontWeight: 700,
        color: '#363F33',
        margin: '0 0 6px',
        textAlign: 'center',
        letterSpacing: '-0.01em'
      }}>
        What are your other health goals?
      </h1>
      <p style={{
        fontSize: '13.5px',
        color: '#6B7280',
        margin: '0 0 36px',
        textAlign: 'center'
      }}>
        Select all that apply to customize your plan
      </p>

      {/* 2-Column Grid of 6 Goals */}
      <div style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
        marginBottom: '28px'
      }}>
        {GOALS.map(goal => {
          const isSelected = selectedGoals.includes(goal.id);
          const IconComponent = goal.icon;

          return (
            <div
              key={goal.id}
              onClick={() => onToggleGoal && onToggleGoal(goal.id)}
              style={{
                borderRadius: '12px',
                border: isSelected ? '1.5px solid #363F33' : '1px solid #E5E7EB',
                background: isSelected ? '#FAFBF9' : '#FFFFFF',
                padding: '32px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: isSelected ? '0 4px 14px rgba(54, 63, 51, 0.08)' : '0 1px 3px rgba(0,0,0,0.02)',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                color: isSelected ? '#363F33' : '#6B7280',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <IconComponent size={24} strokeWidth={1.7} />
              </div>

              <span style={{
                fontSize: '14px',
                fontWeight: 600,
                color: isSelected ? '#1F2937' : '#374151',
                textAlign: 'center',
                letterSpacing: '-0.01em'
              }}>
                {goal.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
