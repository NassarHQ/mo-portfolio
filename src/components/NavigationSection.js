import React from 'react';
import './NavigationSection.css';

function NavigationSection() {
  const AboutIcon = () => (
    <svg viewBox="0 0 16 16" className="w-full h-full pixel-art">
      <rect x="3" y="4" width="10" height="2" fill="#FFD700" />
      <rect x="4" y="6" width="8" height="2" fill="#FFA500" />
      <rect x="5" y="8" width="6" height="2" fill="#FFD700" />
    </svg>
  );

  const ExperienceIcon = () => (
    <svg viewBox="0 0 16 16" className="w-full h-full pixel-art">
      <rect x="4" y="4" width="8" height="2" fill="#FFD700" />
      <rect x="6" y="6" width="4" height="6" fill="#FFA500" />
      <rect x="4" y="8" width="8" height="2" fill="#FFD700" />
    </svg>
  );

  const SkillsIcon = () => (
    <svg viewBox="0 0 16 16" className="w-full h-full pixel-art">
      <rect x="4" y="2" width="8" height="2" fill="#FFD700" />
      <rect x="6" y="4" width="4" height="8" fill="#FFA500" />
      <rect x="4" y="12" width="8" height="2" fill="#FFD700" />
    </svg>
  );

  const EducationIcon = () => (
    <svg viewBox="0 0 16 16" className="w-full h-full pixel-art">
      <rect x="2" y="4" width="12" height="2" fill="#FFD700" />
      <rect x="4" y="6" width="8" height="4" fill="#FFA500" />
      <rect x="2" y="10" width="12" height="2" fill="#FFD700" />
    </svg>
  );

  const ContactIcon = () => (
    <svg viewBox="0 0 16 16" className="w-full h-full pixel-art">
      <rect x="4" y="4" width="8" height="8" fill="#FFD700" />
      <rect x="6" y="6" width="4" height="4" fill="#FFA500" />
    </svg>
  );

  const sections = [
    { id: 'about', title: 'About Me', Icon: AboutIcon },
    { id: 'experience', title: 'Experience', Icon: ExperienceIcon },
    { id: 'skills', title: 'Skills', Icon: SkillsIcon },
    { id: 'education', title: 'Education', Icon: EducationIcon },
    { id: 'contact', title: 'Contact', Icon: ContactIcon }
  ];

  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pyramid-container">
      <div className="navigation-grid">
        {sections.map((section) => (
          <div
            key={section.id}
            className="nav-item"
            onClick={() => handleClick(section.id)}
          >
            <div className="icon-container">
              <section.Icon />
            </div>
            <span className="nav-text">
              {section.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigationSection;