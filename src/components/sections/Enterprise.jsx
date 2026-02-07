import React from 'react';
import Button from '../ui/Button';
import './Sections.css';

const Enterprise = () => {
    return (
        <section id="enterprise" className="section-padding enterprise-section">
            <div className="container">
                <div className="enterprise-layout">

                    {/* Floating Product Showcase */}
                    <div className="product-showcase">
                        <div className="product-glow"></div>
                        <div className="product-frame">
                            {/* Browser/Window Header */}
                            <div className="window-header">
                                <div className="window-dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <div className="window-bar">lapah.ai/dashboard</div>
                            </div>

                            {/* CSS-based UI Mockup (Simulated Dashboard) */}
                            <div className="dashboard-ui">
                                {/* Sidebar */}
                                <div className="ui-sidebar">
                                    <div className="ui-line w-8 mb-4"></div>
                                    <div className="ui-line w-full mb-2 opacity-50"></div>
                                    <div className="ui-line w-full mb-2 opacity-30"></div>
                                    <div className="ui-line w-full mb-2 opacity-30"></div>
                                    <div className="ui-circle mt-auto"></div>
                                </div>

                                {/* Main Content */}
                                <div className="ui-main">
                                    {/* Header Area */}
                                    <div className="ui-header">
                                        <div className="ui-line w-32 h-4 mb-2"></div>
                                        <div className="ui-line w-48 h-2 opacity-50"></div>
                                    </div>

                                    {/* Stats Row */}
                                    <div className="ui-grid-3">
                                        <div className="ui-card">
                                            <div className="ui-line w-full h-8 mb-2 bg-gradient"></div>
                                            <div className="ui-line w-16 h-2 opacity-50"></div>
                                        </div>
                                        <div className="ui-card">
                                            <div className="ui-line w-full h-8 mb-2 bg-gradient"></div>
                                            <div className="ui-line w-16 h-2 opacity-50"></div>
                                        </div>
                                        <div className="ui-card">
                                            <div className="ui-line w-full h-8 mb-2 bg-gradient"></div>
                                            <div className="ui-line w-16 h-2 opacity-50"></div>
                                        </div>
                                    </div>

                                    {/* Chart Area */}
                                    <div className="ui-chart-area">
                                        <div className="ui-graph-line">
                                            <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="graph-svg">
                                                <path d="M0 15 Q 10 5, 20 12 T 40 10 T 60 5 T 80 12 T 100 8" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                                                <defs>
                                                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                                        <stop offset="0%" stopColor="#ec4899" />
                                                        <stop offset="100%" stopColor="#8b5cf6" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Activity List */}
                                    <div className="ui-list">
                                        <div className="ui-list-item">
                                            <div className="ui-dot bg-success"></div>
                                            <div className="ui-line w-full ml-2"></div>
                                        </div>
                                        <div className="ui-list-item">
                                            <div className="ui-dot bg-warning"></div>
                                            <div className="ui-line w-3/4 ml-2"></div>
                                        </div>
                                        <div className="ui-list-item">
                                            <div className="ui-dot bg-primary"></div>
                                            <div className="ui-line w-5/6 ml-2"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Reflection Overlay */}
                            <div className="screen-reflection"></div>
                        </div>
                    </div>

                    <div className="enterprise-text-overlay">
                        <h2>Command Center</h2>
                        <p>Monitor your entire AI fleet in real-time.</p>
                        <Button variant="primary">Access Dashboard</Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Enterprise;
