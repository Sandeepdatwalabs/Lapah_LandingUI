import React from 'react';

const SectionHeader = ({ title, subtitle, centered = true }) => {
    return (
        <div className={`section-header ${centered ? 'text-center' : ''}`} style={{ marginBottom: '4rem' }}>
            <h2 className="section-title text-gradient" style={{
                fontSize: 'var(--font-size-3xl)',
                marginBottom: '1rem',
                display: 'inline-block'
            }}>
                {title}
            </h2>
            {subtitle && (
                <p className="section-subtitle" style={{
                    color: 'var(--color-text-secondary)',
                    maxWidth: '600px',
                    margin: centered ? '0 auto' : '0'
                }}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
