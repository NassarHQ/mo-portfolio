// Imports
import React from 'react';
import pharaoh from '../assets/pharaoh.png';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Welcome to Nassar's Portfolio</h1>
                <p>Hi there! I'm a Computer Science student at SJSU
                    who loves turning ideas into reality with code. 
                    I'm passionate about problem-solving and enjoy 
                    creating projects that blend creativity and technology.</p>
            </div>
            <div className="hero-image">
                <img src={pharaoh} alt="pharaoh themed picture" />
            </div>
        </div>
    );
};

export default HeroSection;

