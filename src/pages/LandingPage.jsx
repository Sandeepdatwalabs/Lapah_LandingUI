import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/hero/Hero';
import CustomCursor from '../components/cursor/CustomCursor';
import HowItWorks from '../components/sections/HowItWorks';
import UseCases from '../components/sections/UseCases';
import Benefits from '../components/sections/Benefits';
import Enterprise from '../components/sections/Enterprise';
import FinalCTA from '../components/sections/FinalCTA';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <CustomCursor />
            <Navbar />
            <main>
                <Hero />
                <Benefits />
                <HowItWorks />
                <UseCases />
                {/* <Enterprise /> */}
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
