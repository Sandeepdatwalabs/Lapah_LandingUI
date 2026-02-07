import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import './Sections.css';

const steps = [
    {
        id: 1,
        title: 'Connect',
        desc: 'One-click integration with your CRM. Lapah instantly syncs with your calendar and customer database.',
        icon: '01'
    },
    {
        id: 2,
        title: 'Configure',
        desc: 'Select your voice persona and define workflow rules. Customize how the AI handles objections.',
        icon: '02'
    },
    {
        id: 3,
        title: 'Deploy',
        desc: 'Go live instantly. Lapah starts handling inbound/outbound calls with zero downtime.',
        icon: '03'
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="section-padding">
            <div className="container">
                <SectionHeader
                    title="Seamless Flow"
                    subtitle="From setup to scale in minutes, not months."
                />

                <div className="timeline-flow">
                    {steps.map((step) => (
                        <div key={step.id} className="flow-step interactive">
                            <div className="flow-content">
                                <h3 className="flow-title text-gradient">{step.title}</h3>
                                <p className="flow-desc">{step.desc}</p>
                            </div>
                            <div className="flow-marker">{step.icon}</div>
                            <div className="flow-content placeholder"></div> {/* Empty div for spacing balance */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
