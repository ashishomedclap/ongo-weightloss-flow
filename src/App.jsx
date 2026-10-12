import React, { useState, useEffect } from 'react';
import WelcomeScreen from './projects/WelcomeScreen';
import OngoFlow from './projects/ongo/OngoFlow';
import CompetitorFlow from './projects/competitor/CompetitorFlow';
import { Layers, Sparkles, Building2, ChevronDown } from 'lucide-react';

const getInitialProject = () => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const p = params.get('project');
    if (p === 'ongo' || p === 'competitor' || p === 'welcome') {
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
        // Clear screen param if returning to welcome
        if (project === 'welcome') {
          params.delete('screen');
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
          title="Return to Welcome Screen"
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
            Comparison
          </span>
        </div>

        {/* Project Selector Dropdown & Quick Toggles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="project-picker" style={{ fontSize: '13px', color: '#9CA3AF', fontWeight: 500 }}>
            Active Project:
          </label>

          <select
            id="project-picker"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            style={{
              background: '#1F2937',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '6px 14px',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="welcome">🏠 Select Project (Welcome Screen)</option>
            <option value="ongo">🌿 Ongo Weight Loss Flow (25 Screens)</option>
            <option value="competitor">🟣 Join Mochi Flow (Competitor Benchmark)</option>
          </select>
        </div>
      </header>

      {/* Main View Router */}
      {project === 'welcome' && (
        <WelcomeScreen onSelectProject={(p) => setProject(p)} />
      )}

      {project === 'ongo' && (
        <OngoFlow onBackToWelcome={() => setProject('welcome')} />
      )}

      {project === 'competitor' && (
        <CompetitorFlow onBackToWelcome={() => setProject('welcome')} />
      )}
    </div>
  );
}
