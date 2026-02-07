import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import './Sections.css';

const features = [
    {
        id: 1,
        title: 'Human-Like Intonation',
        description: 'Our AI understands context, emotion, and pauses, making conversations feel natural.',
        color: '#ec4899'
    },
    {
        id: 2,
        title: 'Zero Latency',
        description: 'Lightning-fast responses ensure no awkward silences during customer interactions.',
        color: '#8b5cf6'
    },
    {
        id: 3,
        title: 'Seamless Integration',
        description: 'Works with your existing CRM, calendar, and dealer management systems.',
        color: '#06b6d4'
    },
    {
        id: 4,
        title: 'Enterprise Security',
        description: 'SOC2 compliant data handling to ensure your customer information remains private.',
        color: '#10b981'
    }
];

const Benefits = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section id="benefits" className="section-padding benefits-section">
            <div className="container">
                <SectionHeader
                    title="Why Leading Dealerships Choose Lapah"
                    subtitle="Experience the difference of a voice AI built for performance and trust."
                    centered={false}
                />

                <div className="benefits-layout">
                    {/* Left: Interactive List */}
                    <div className="benefits-list">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                className={`benefit-item ${activeFeature === index ? 'active' : ''}`}
                                onMouseEnter={() => setActiveFeature(index)}
                            >
                                <div className="benefit-marker">
                                    <div className="marker-line"></div>
                                    <div className="marker-dot" style={{ backgroundColor: activeFeature === index ? feature.color : '' }}></div>
                                </div>
                                <div className="benefit-content">
                                    <h3 className="benefit-title">{feature.title}</h3>
                                    <p className="benefit-desc">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Dynamic Visual (Abstract representation) */}
                    <div className="benefits-visual">
                        <div className="visual-circle-container">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`visual-circle ${activeFeature === index ? 'active' : ''}`}
                                    style={{
                                        '--circle-color': feature.color,
                                        opacity: activeFeature === index ? 1 : 0
                                    }}
                                ></div>
                            ))}
                            <div className="visual-glass-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
