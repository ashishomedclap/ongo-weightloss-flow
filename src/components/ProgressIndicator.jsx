import React from 'react';
import { Heart, CheckCircle2, Calendar, Star } from 'lucide-react';

export default function ProgressIndicator({ currentStage = 1, completedStages = [] }) {
  const stages = [
    { id: 1, name: 'Health questions', icon: Heart },
    { id: 2, name: 'See your match', icon: CheckCircle2 },
    { id: 3, name: 'Book consultation', icon: Calendar },
    { id: 4, name: 'Start your plan', icon: Star },
  ];

  return (
    <nav className="progress-stepper" aria-label="Onboarding Progress">
      {stages.map((stage, idx) => {
        const IconComponent = stage.icon;
        const isActive = stage.id === currentStage;
        const isCompleted = completedStages.includes(stage.id) || stage.id < currentStage;
        const isUpcoming = !isActive && !isCompleted;

        let circleClass = 'step-circle';
        if (isActive) circleClass += ' active';
        else if (isCompleted) circleClass += ' completed';
        else circleClass += ' upcoming';

        return (
          <React.Fragment key={stage.id}>
            <div 
              className="step-node" 
              title={`Stage ${stage.id}: ${stage.name}`}
              aria-current={isActive ? 'step' : undefined}
            >
              <div className={circleClass}>
                <IconComponent size={15} strokeWidth={2.2} />
              </div>
            </div>

            {idx < stages.length - 1 && (
              <div className="step-connector" aria-hidden="true" />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
