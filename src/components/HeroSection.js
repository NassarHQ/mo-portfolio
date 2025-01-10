// Imports
import React from 'react';
import pharaoh from '../assets/pharaoh.png';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>HI,</h1>
                <h1>I am Mohammed,</h1>
                <h1>Computer Science Student at SJSU.</h1>
            </div>
            <div className="hero-image">
                <img src={pharaoh} alt="pharaoh themed picture" />
            </div>
        </div>
    );
};

export default HeroSection;

