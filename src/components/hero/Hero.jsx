import React from 'react';
import './Hero.css';
import Button from '../ui/Button';
import Logo from '../ui/Logo';


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/videos/Hero.mp4" type="video/mp4" />
                </video>
                <div className="hero-gradient-overlay"></div>
                <div className="hero-particles"></div>
            </div>

            <div className="container hero-content">
                <Logo className="logo-img" />

                <h1 className="hero-title animate-slide-up">
                    <span className="block">Automate Service Calls.</span>
                    <span className="block text-gradient">Sound Human.</span>
                    <span className="block">Scale Effortlessly.</span>
                </h1>

                <p className="hero-subtitle animate-slide-up delay-100">
                    AI-powered voice assistants for car showrooms—handling service scheduling and customer calls 24/7.
                </p>

                <div className="hero-cta animate-slide-up delay-200">
                    <Button variant="primary" size="lg" className="mr-4">Request a Demo</Button>
                    <Button variant="secondary" size="lg">See How It Works</Button>
                </div>
            </div>

            <div className="hero-scroll-indicator animate-float delay-500">
                <span>Scroll</span>
                <div className="mouse-icon"></div>
            </div>
        </section>
    );
};

export default Hero;
