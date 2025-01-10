import React from "react";
import HeroSection from './HeroSection';
import NavigationSection from "./NavigationSection";
import './MainPage.css';

const MainPage = () => {
    return (
        <div className="main-container">
            <HeroSection />
            <NavigationSection />
        </div>
    );
};

export default MainPage;