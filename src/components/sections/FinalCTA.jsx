import React from 'react';
import Button from '../ui/Button';

const FinalCTA = () => {
    return (
        <section className="section-padding final-cta-section text-center">
            <div className="container">
                <div className="cta-content glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                    <h2 className="section-title text-gradient" style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Ready to Transform Your Showroom?</h2>
                    <p className="section-subtitle" style={{ marginBottom: '2.5rem', fontSize: '1.25rem' }}>
                        Join the forward-thinking dealerships automating their service calls today.
                    </p>
                    <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <Button variant="primary" size="lg">Request a Demo</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
