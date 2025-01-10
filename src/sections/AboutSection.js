import React from "react";
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section id="about" className="about">
        <div className="about">
            <div className="about-content">
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>Hi there! I see you checking out my portfolio—welcome! I’m Mohammed, 
                    originally from Egypt, now a Computer Science student 
                    at San Jose State University in California. 
                    I’m passionate about turning ideas into reality with code, 
                    whether it’s designing an interactive system or adding a fun, 
                    creative twist to a project. Oh, and when I’m not coding, you’ll probably find me 
                    bouldering or figuring out my next big adventure. 
                    I’ve been working with languages like Java, Python, and React, 
                    and I enjoy taking on challenges that let me combine functionality with design. 
                    My projects often reflect my curiosity and creativity—I love solving problems and coming up 
                    with solutions that are both useful and enjoyable.</p>
                    <h1>How I Work</h1>
                 <p>I like to keep things simple but effective. 
                    My approach is all about breaking down problems into manageable pieces, 
                    staying consistent, and constantly learning. Whether it’s a team project 
                    or a solo deep dive into code, I try to bring positivity and structure to the table. 
                    And yes, there’s usually some coffee involved. ☕</p>
                    <h1>What I’ve Learned</h1>
                    <p>
                        <li>Collaboration is everything. Great ideas come from working together 
                        and supporting each other.</li> 
                        <li>Trial and error isn’t failure—it’s how the best solutions are built.</li>
                        <li>Balancing creativity and logic makes projects not just functional, but memorable.</li>
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AboutSection;