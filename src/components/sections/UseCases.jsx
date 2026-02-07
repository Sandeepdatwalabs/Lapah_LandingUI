import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import './Sections.css';

const useCases = [
    {
        id: 1,
        title: 'Service Scheduling',
        subtitle: 'Autonomous Booking',
        desc: 'AI handles appointments 24/7, syncing directly with your shop loading capacity.',
        iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", // Calendar-like
        color: '#be185d'
    },
    {
        id: 2,
        title: 'Recall Outreach',
        subtitle: 'Proactive Safety',
        desc: 'Automatically identify and contact eligible VINs to fill service bays with high-value work.',
        iconPath: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", // Warning triangle
        color: '#4c1d95'
    },
    {
        id: 3,
        title: 'CSI Follow-up',
        subtitle: 'Retention Engine',
        desc: 'Capture real sentiment post-service. Resolve unhappy customers before they post online.',
        iconPath: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z", // Star
        color: '#0e7490'
    }
];

const UseCases = () => {
    const [activeCase, setActiveCase] = useState(useCases[0]);

    return (
        <section id="use-cases" className="section-padding">
            <div className="container">
                <SectionHeader
                    title="Automotive Excellence"
                    subtitle="Precision workflows designed for modern dealerships."
                />

                <div className="hologram-layout">

                    {/* Left: Navigation Menu */}
                    <div className="hologram-nav">
                        {useCases.map((useCase) => (
                            <div
                                key={useCase.id}
                                className={`hologram-tab ${activeCase.id === useCase.id ? 'active' : ''}`}
                                onMouseEnter={() => setActiveCase(useCase)}
                                onClick={() => setActiveCase(useCase)}
                            >
                                <div className="tab-number">0{useCase.id}</div>
                                <div className="tab-info">
                                    <span className="tab-title">{useCase.title}</span>
                                    <span className="tab-subtitle">{useCase.subtitle}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Holographic Stage */}
                    <div className="hologram-stage">
                        <div className="stage-content">
                            {/* Floating Icon with Glow */}
                            <div
                                className="hologram-icon-container"
                                style={{ '--glow-color': activeCase.color }}
                            >
                                <svg
                                    className="hologram-icon"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d={activeCase.iconPath}
                                    />
                                </svg>
                                <div className="icon-glow"></div>
                                <div className="icon-ring"></div>
                            </div>

                            {/* Description Text */}
                            <div className="stage-text">
                                <h3 className="stage-heading">{activeCase.title}</h3>
                                <p className="stage-desc">{activeCase.desc}</p>
                                <div className="tech-readout">
                                    <span>SYS_READY</span>
                                    <span>LAT: 12ms</span>
                                    <span>SEC: ENCRYPTED</span>
                                </div>
                            </div>
                        </div>

                        {/* Background Grid/Effect */}
                        <div className="stage-grid"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UseCases;
