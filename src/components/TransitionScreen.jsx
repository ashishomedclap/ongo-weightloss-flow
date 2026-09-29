import React, { useState } from 'react';
import { Heart, CheckCircle2, Calendar, Star, ShieldCheck, Lock } from 'lucide-react';
import ProgressIndicator from './ProgressIndicator';

export default function TransitionScreen({ onContinue }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (onContinue) onContinue();
    }, 350);
  };

  const journeyCards = [
    {
      id: 1,
      icon: Heart,
      title: "Health questions",
      time: "3–4 MIN",
      description: "Answer a few questions about your goals and history.",
      isActive: true,
    },
    {
      id: 2,
      icon: CheckCircle2,
      title: "See your match",
      time: "INSTANT",
      description: "Get matched with a treatment plan tailored to you.",
      isActive: false,
    },
    {
      id: 3,
      icon: Calendar,
      title: "Book consultation",
      time: "10–30 MIN",
      description: "Pick a time that works — your physician will call you at the scheduled time.",
      isActive: false,
    },
    {
      id: 4,
      icon: Star,
      title: "Start your plan",
      time: "2–3 DAYS",
      description: "Receive medication shipped discreetly to your door.",
      isActive: false,
    },
  ];

  return (
    <div className="content-inner fade-in">
      {/* 4-Stage Horizontal Progress Indicator */}
      <ProgressIndicator currentStage={1} />

      {/* Headings */}
      <div className="heading-section">
        <h1 className="page-title">Great! Now a few questions</h1>
        <p className="page-subtitle">
          Here's what's next on your journey to a personalised plan.
        </p>
      </div>

      {/* 4 Journey Cards */}
      <div className="journey-cards-list" role="list">
        {journeyCards.map((card) => {
          const IconComp = card.icon;
          return (
            <div
              key={card.id}
              role="listitem"
              className={`journey-card ${card.isActive ? 'active-card' : ''}`}
            >
              <div 
                className="card-icon-container" 
                aria-hidden="true"
              >
                <IconComp size={20} strokeWidth={2.1} />
              </div>

              <div className="card-center-content">
                <div className="card-title-row">
                  <h2 className="card-title">{card.title}</h2>
                  <span 
                    className={`card-time-badge ${card.isActive ? 'active-badge' : ''}`}
                    aria-label={`Estimated duration: ${card.time}`}
                  >
                    {card.time}
                  </span>
                </div>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust Row */}
      <div className="trust-row" aria-label="Clinical Trust and Privacy Guarantees">
        <div className="trust-item">
          <ShieldCheck size={16} strokeWidth={2.2} aria-hidden="true" />
          <span>Licensed physicians</span>
        </div>
        <div className="trust-item">
          <Lock size={15} strokeWidth={2.2} aria-hidden="true" />
          <span>HIPAA secure</span>
        </div>
      </div>

      {/* Primary CTA pill */}
      <button
        type="button"
        id="btn-continue-transition"
        className="cta-button-pill active"
        onClick={handleContinue}
        disabled={isLoading}
        aria-label="Continue to Health questions"
      >
        {isLoading ? (
          <>
            <span className="spinner" aria-hidden="true" />
            <span>Loading assessment...</span>
          </>
        ) : (
          <>
            <span>Continue</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </>
        )}
      </button>
    </div>
  );
}
