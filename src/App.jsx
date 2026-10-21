import React, { useState, useEffect } from 'react';
import StartScreen from './projects/StartScreen';
import OngoFlow from './projects/ongo/OngoFlow';
import OngoFlowV2 from './projects/ongo-v2/OngoFlow';
import OngoFlowV3 from './projects/ongo-v3/OngoFlow';
import MochiFlow from './projects/join-mochi/CompetitorFlow';
import JoinFridaysFlow from './projects/join-fridays/JoinFridaysFlow';
import { Layers } from 'lucide-react';

const getInitialProject = () => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const p = params.get('project');
    if (p === 'ongo' || p === 'ongo-v1' || p === 'ongo-v2' || p === 'v2' || p === 'ongo-v3' || p === 'v3' || p === 'join-mochi' || p === 'competitor' || p === 'join-fridays' || p === 'welcome' || p === 'start') {
      if (p === 'competitor') return 'join-mochi';
      if (p === 'ongo-v1') return 'ongo';
      if (p === 'v2') return 'ongo-v2';
      if (p === 'v3') return 'ongo-v3';
      if (p === 'start') return 'welcome';
      return p;
    }
  }
  return 'welcome';
};

export default function App() {
  const [project, setProject] = useState(getInitialProject);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('project') !== project) {
        params.set('project', project);
        // Clear screen and frame params if returning to start / welcome screen
        if (project === 'welcome' || project === 'start') {
          params.delete('screen');
          params.delete('frame');
        }
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, [project]);

  return (
    <div className="flow-study-app">
      {/* Global Project Navigation Bar */}
      <header style={{
        background: '#111827',
        color: '#FFFFFF',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 9999
      }}>
        <div 
          onClick={() => setProject('welcome')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
          title="Return to Start Screen"
        >
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #1F4F3D 0%, #2563EB 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF'
          }}>
            <Layers size={16} />
          </div>
          <span style={{ fontWeight: 800, fontSize: '15px', letterSpacing: '-0.01em' }}>
            Flow Study Hub
          </span>
          <span style={{ 
            fontSize: '11px', 
            background: 'rgba(255,255,255,0.12)', 
            padding: '2px 8px', 
            borderRadius: '10px', 
            color: '#D1D5DB' 
          }}>
            Start Screen
          </span>
        </div>

        {/* Project Selector Dropdown with Exact Categorized Hierarchy */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="project-picker" style={{ fontSize: '13px', color: '#9CA3AF', fontWeight: 500 }}>
            Active Flow:
          </label>

          <select
            id="project-picker"
            value={project === 'start' ? 'welcome' : project}
            onChange={(e) => setProject(e.target.value)}
            style={{
              background: '#1F2937',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '6px 14px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="welcome">🏠 Start Screen (Project Hub)</option>
            <optgroup label="Ongo Weight Loss">
              <option value="ongo">🌿 V1 Survey (25 Screens - Baseline)</option>
              <option value="ongo-v2">✨ V2 Survey (25 Screens - Active Workspace)</option>
              <option value="ongo-v3">🌟 V3 Flow (5 Screens: Intake, Calendar & Care Team)</option>
            </optgroup>
            <optgroup label="Competitors">
              <option value="join-fridays">🟠 1. Join Fridays (10 Screens)</option>
              <option value="join-mochi">🟣 2. Join Mochi (29 Frames)</option>
            </optgroup>
          </select>
        </div>
      </header>

      {/* Main View Router */}
      {(project === 'welcome' || project === 'start') && (
        <StartScreen onSelectProject={(p) => setProject(p === 'competitor' ? 'join-mochi' : (p === 'ongo-v1' ? 'ongo' : (p === 'v3' ? 'ongo-v3' : p)))} />
      )}

      {(project === 'ongo' || project === 'ongo-v1') && (
        <OngoFlow onBackToWelcome={() => setProject('welcome')} />
      )}

      {(project === 'ongo-v2' || project === 'v2') && (
        <OngoFlowV2 onBackToWelcome={() => setProject('welcome')} />
      )}

      {(project === 'ongo-v3' || project === 'v3') && (
        <OngoFlowV3 onBackToWelcome={() => setProject('welcome')} />
      )}

      {project === 'join-fridays' && (
        <JoinFridaysFlow onBackToWelcome={() => setProject('welcome')} />
      )}

      {(project === 'join-mochi' || project === 'competitor') && (
        <MochiFlow onBackToWelcome={() => setProject('welcome')} />
      )}
    </div>
  );
}

